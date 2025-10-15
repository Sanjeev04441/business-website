// Lightweight runtime cache for images, videos, and Next.js build assets
// Strategy: Cache-first for immutable assets; stale-while-revalidate for others

const VERSION = 'v1.0.0';
const IMMUTABLE_CACHE = `immutable-${VERSION}`;
const RUNTIME_CACHE = `runtime-${VERSION}`;

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => ![IMMUTABLE_CACHE, RUNTIME_CACHE].includes(key))
          .map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

/**
 * Decide caching strategy per request
 */
function isImmutable(req) {
  const url = new URL(req.url);
  // Next build assets and any file with a content hash are immutable
  return (
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.includes('/_next/image') ||
    /\.[0-9a-f]{8,}\./i.test(url.pathname)
  );
}

function isMedia(req) {
  const { pathname } = new URL(req.url);
  return (
    pathname.startsWith('/images/') ||
    pathname.startsWith('/videos/') ||
    /\.(?:png|jpg|jpeg|webp|avif|gif|svg|mp4|webm)$/i.test(pathname)
  );
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const method = request.method || 'GET';
  if (method !== 'GET') return; // Only cache GET

  // Prefer network for API and HTML navigations to avoid staleness
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    return; // Let the browser handle navigations
  }

  if (isImmutable(request) || isMedia(request)) {
    // Cache-first for immutable/media
    event.respondWith(
      caches.open(IMMUTABLE_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        const response = await fetch(request);
        if (response.ok) cache.put(request, response.clone());
        return response;
      })
    );
    return;
  }

  // Default: stale-while-revalidate
  event.respondWith(
    caches.open(RUNTIME_CACHE).then(async (cache) => {
      const cached = await cache.match(request);
      const networkPromise = fetch(request).then((response) => {
        if (response && response.status === 200) {
          cache.put(request, response.clone());
        }
        return response;
      }).catch(() => cached);
      return cached || networkPromise;
    })
  );
});

