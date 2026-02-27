
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import OptimizedImage from '@/components/OptimizedImage'
import Navigation from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import BlogCTA from '@/components/blog/BlogCTA'
import { ArrowLeftIcon, CalendarIcon, ShareIcon } from '@heroicons/react/24/outline'

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface Props {
  params: Promise<{ slug: string }>
}

function renderMarkdownToHtml(content: string) {
  const trimmed = content.trim()
  if (!trimmed) return ''
  if (/<\/?[a-z][\s\S]*>/i.test(trimmed)) return content

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')

  const formatInline = (value: string) => {
    const escaped = escapeHtml(value)
    return escaped
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
  }

  const lines = trimmed.split(/\r?\n/)
  let html = ''
  let listType: 'ul' | 'ol' | null = null

  const closeList = () => {
    if (listType) {
      html += `</${listType}>`
      listType = null
    }
  }

  for (const line of lines) {
    const text = line.trim()
    if (!text) {
      closeList()
      continue
    }

    const headingMatch = text.match(/^(#{1,6})\s+(.*)$/)
    if (headingMatch) {
      closeList()
      const level = headingMatch[1].length
      html += `<h${level}>${formatInline(headingMatch[2])}</h${level}>`
      continue
    }

    const ulMatch = text.match(/^[-*]\s+(.*)$/)
    if (ulMatch) {
      if (listType !== 'ul') {
        closeList()
        html += '<ul>'
        listType = 'ul'
      }
      html += `<li>${formatInline(ulMatch[1])}</li>`
      continue
    }

    const olMatch = text.match(/^\d+[\.)]\s+(.*)$/)
    if (olMatch) {
      if (listType !== 'ol') {
        closeList()
        html += '<ol>'
        listType = 'ol'
      }
      html += `<li>${formatInline(olMatch[1])}</li>`
      continue
    }

    closeList()
    html += `<p>${formatInline(text)}</p>`
  }

  closeList()
  return html
}

const fallbackPosts = [
  {
    id: 'fallback-1',
    slug: 'barcode-label-best-practices',
    title: 'Barcode Label Best Practices for Fast, Accurate Scanning',
    excerpt:
      'Learn how material choice, print resolution, and barcode sizing improve scan rates across warehouses and retail counters.',
    category: 'Barcode Labels',
    author: 'Team SDB',
    featured_image: '/images/blogs/barcode-label.jpg',
    published_at: '2024-06-15',
    created_at: '2024-06-15',
    tags: ['barcode', 'labels', 'scanning'],
    meta_title: 'Barcode Label Best Practices | SDB Label',
    meta_description:
      'Improve barcode scan rates with the right label materials, printing, and sizing. Best practices for warehouses and retail.',
    content: `
      <h2>Barcode label best practices</h2>
      <ul>
        <li>Choose the right label material: paper for short-life use, polyester or BOPP for heat, moisture, and abrasion resistance.</li>
        <li>Print with sufficient resolution for sharp edges and reliable scans, especially on dense codes.</li>
        <li>Maintain quiet zones and strong contrast for consistent, high-speed scanning.</li>
        <li>Test on real scanners at actual line speeds and storage conditions.</li>
      </ul>
    `,
  },
  {
    id: 'fallback-2',
    slug: 'thermal-labels-direct-vs-transfer',
    title: 'Direct Thermal vs Thermal Transfer Labels: What to Use When',
    excerpt:
      'A simple guide to choosing the right thermal label based on durability, exposure, and cost.',
    category: 'Thermal Labels',
    author: 'Team SDB',
    featured_image: '/images/blogs/Direct-thermal.png',
    published_at: '2024-06-20',
    created_at: '2024-06-20',
    tags: ['thermal', 'labels', 'printing'],
    meta_title: 'Direct Thermal vs Thermal Transfer | SDB Label',
    meta_description:
      'Compare direct thermal and thermal transfer labels to pick the right label for your durability and exposure needs.',
    content: `
      <h2>Direct thermal vs thermal transfer</h2>
      <ul>
        <li>Direct thermal: cost-effective for short-term labels like shipping and receipts; avoid heat and sunlight exposure.</li>
        <li>Thermal transfer: ribbon-based printing for long-life labels and harsh environments.</li>
        <li>Decision factors: lifespan, exposure conditions, and scan performance.</li>
        <li>Validation: test the right stock and ribbon combination for your use-case.</li>
      </ul>
    `,
  },
  {
    id: 'fallback-3',
    slug: 'hologram-security-labels',
    title: 'Hologram Security Labels to Protect Brand Authenticity',
    excerpt:
      'Discover how hologram labels deter counterfeits and build customer trust in high-value products.',
    category: 'Hologram Labels',
    author: 'Team SDB',
    featured_image: '/images/blogs/printer.jpg',
    published_at: '2024-06-25',
    created_at: '2024-06-25',
    tags: ['hologram', 'security', 'anti-counterfeit'],
    meta_title: 'Hologram Security Labels | SDB Label',
    meta_description:
      'Protect brand authenticity with hologram security labels, tamper evidence, and trackable elements.',
    content: `
      <h2>Hologram security labels</h2>
      <ul>
        <li>Visible authenticity features that are hard to duplicate and easy to verify.</li>
        <li>Key security options: custom optics, microtext, serialized codes, and tamper-evident materials.</li>
        <li>Common uses: high-value consumer goods, pharmaceuticals, and electronics.</li>
        <li>Design support to meet regulatory requirements and brand standards.</li>
      </ul>
    `,
  },
  {
    id: 'fallback-4',
    slug: 'label-materials-for-fmcg',
    title: 'Choosing Label Materials for FMCG Packaging',
    excerpt:
      'From paper to BOPP and polyester, understand which label stock fits your product and supply chain.',
    category: 'Packaging',
    author: 'Team SDB',
    featured_image: '',
    published_at: '2024-06-28',
    created_at: '2024-06-28',
    tags: ['fmcg', 'materials', 'packaging'],
    meta_title: 'FMCG Label Materials | SDB Label',
    meta_description:
      'Choose the right label material for FMCG packaging based on moisture, handling, and shelf‑life needs.',
    content: `
      <h2>Choosing label materials for FMCG</h2>
      <ul>
        <li>Paper for economical, short-term packaging.</li>
        <li>BOPP for moisture resistance and better shelf appearance.</li>
        <li>Polyester for high durability in tough handling conditions.</li>
        <li>Adhesives vary by use-case: permanent, removable, and freezer-grade.</li>
        <li>Test labels with your packaging, temperature, and handling conditions.</li>
      </ul>
    `,
  },
]

async function getBlogPost(slug: string) {
  const { data: post } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()
  
  return post || fallbackPosts.find((item) => item.slug === slug) || null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.meta_title || post.title + ' | SDB Label Insights',
    description: post.meta_description || post.excerpt,
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      type: 'article',
      publishedTime: post.published_at,
      authors: [post.author],
      images: post.featured_image ? [
        {
          url: post.featured_image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : [],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const tscTtpContent = `
## TSC TTP Series Printers for Indian Warehouses
Warehouses in India deal with dust, heat, and long operating hours. The TSC TTP series is a reliable workhorse family for barcode and logistics printing.

## Why the TTP series fits warehouse use
- Built for continuous printing during long shifts
- Stable performance in typical warehouse conditions
- Strong print quality for scannable barcodes
- Practical for shipping labels, cartons, racks, and bins

## Recommended models in the TTP series
1. **TSC TTP-2410M**
- Use-case: high-volume warehouse and manufacturing
- Strengths: rugged build and consistent throughput
- Ideal for: 24/7 operations and heavy-duty label jobs

2. **TSC TTP-345**
- Use-case: mid-volume warehouse operations
- Strengths: crisp printing for dense barcodes
- Ideal for: smaller labels and inventory tags

3. **TSC TTP-244 Pro**
- Use-case: light to medium warehouse workloads
- Strengths: dependable daily printing at a lower cost
- Ideal for: dispatch desks and packing stations

## How to choose the right TTP model
- Daily label volume and shift length
- Required print resolution and label size
- Environmental exposure to dust or heat
- Integration needs with your WMS/ERP

## Need a demo?
Contact **SDB LABEL** to schedule a live demo of TSC TTP series printers for your facility.
  `

  const normalizedTitle = (post.title || '').toLowerCase()
  const shouldOverrideContent =
    normalizedTitle === 'best barcode printers for warehouses in india' ||
    normalizedTitle === 'top barcode printers for indian warehouses'

  const contentToRender = shouldOverrideContent
    ? tscTtpContent
    : post.content || ''

  const renderedContent = renderMarkdownToHtml(contentToRender)

  // Fetch recent posts for sidebar
  const { data: recentPosts } = await supabase
    .from('blogs')
    .select('title, slug, created_at')
    .eq('is_published', true)
    .neq('slug', slug)
    .limit(3)
  const fallbackRecent = fallbackPosts
    .filter((item) => item.slug !== slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      <Navigation />
      
      {/* Article Header (Parallax-style) */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gray-900">
        {post.featured_image && (
          <OptimizedImage
            src={post.featured_image}
            alt={post.title}
            fill
            className="object-cover opacity-60"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12 lg:p-20">
           <div className="container mx-auto max-w-7xl">
             <Link href="/blogs" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors group">
               <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
               Back to Blog
             </Link>
             
             <div className="flex flex-wrap gap-4 items-center mb-6">
               <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider">
                 {post.category || 'Article'}
               </span>
               <div className="flex items-center text-gray-300 text-sm">
                  <CalendarIcon className="w-4 h-4 mr-1.5" />
                  {new Date(post.published_at || post.created_at).toLocaleDateString()}
               </div>
             </div>

             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight mb-4 drop-shadow-lg">
               {post.title}
             </h1>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Info */}
          <article className="lg:col-span-8">
             {/* Rich Text Content */}
             <div 
               className="prose prose-lg prose-red max-w-none 
               prose-headings:font-bold prose-headings:text-gray-900 
               prose-p:text-gray-700 prose-p:leading-relaxed 
               prose-li:text-gray-700
               prose-a:text-red-600 hover:prose-a:text-red-700 
               prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
               prose-strong:text-gray-900
               "
               dangerouslySetInnerHTML={{ __html: renderedContent }}
             />
             
             {/* Tags */}
             {post.tags && post.tags.length > 0 && (
               <div className="mt-12 pt-8 border-t border-gray-100">
                 <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Tags</h4>
                 <div className="flex flex-wrap gap-2">
                   {post.tags.map((tag: string) => (
                     <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-red-50 hover:text-red-700 transition-colors cursor-default">
                       #{tag}
                     </span>
                   ))}
                 </div>
               </div>
             )}

             {/* Conversion CTA */}
             <BlogCTA />
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Sticky Sidebar Container */}
            <div className="sticky top-24 space-y-8">
              
              {/* Table of Contents / Quick Links or Ad would go here */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Read Next</h3>
                <div className="space-y-4">
                  {(recentPosts?.length ? recentPosts : fallbackRecent).map((recent) => (
                    <Link 
                      href={`/blogs/${recent.slug}`} 
                      key={recent.slug}
                      className="block group"
                    >
                      <h4 className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors line-clamp-2">
                        {recent.title}
                      </h4>
                      <span className="text-xs text-gray-400 mt-1 block">
                        {new Date(recent.created_at).toLocaleDateString()}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mini CTA Sidebar Widget */}
              <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-2xl p-6 text-center text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Need Custom Labels?</h3>
                  <p className="text-red-100 text-sm mb-6">We are India's top manufacturer for industrial barcode labels.</p>
                  <Link 
                    href="/get-quotation"
                    className="block w-full py-3 bg-white text-red-700 font-bold rounded-xl hover:bg-red-50 transition-colors shadow-lg"
                  >
                    Get Free Quote
                  </Link>
                </div>
                {/* Decorative circle */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              </div>

            </div>
          </aside>

        </div>
      </div>

      <Footer />
    </div>
  )
}
