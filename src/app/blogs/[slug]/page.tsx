
import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
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

const slugAliases: Record<string, string> = {
  'barcode-label-best-practices': 'how-to-choose-barcode-labels-for-manufacturing',
  'thermal-labels-direct-vs-transfer': 'difference-between-thermal-and-paper-labels',
  'hologram-security-labels': 'best-barcode-printers-for-warehouses-india',
}

const resolveSlug = (slug: string) => slugAliases[slug] ?? slug
const reverseSlugAliases: Record<string, string> = Object.fromEntries(
  Object.entries(slugAliases).map(([legacySlug, canonicalSlug]) => [
    canonicalSlug,
    legacySlug,
  ])
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
    slug: 'how-to-choose-barcode-labels-for-manufacturing',
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
    slug: 'difference-between-thermal-and-paper-labels',
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
    slug: 'best-barcode-printers-for-warehouses-india',
    title: 'Hologram Security Labels to Protect Brand Authenticity',
    excerpt:
      'Discover how hologram labels deter counterfeits and build customer trust in high-value products.',
    category: 'Hologram Labels',
    author: 'Team SDB',
    featured_image: '/images/blogs/Holograms.jpg',
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
    featured_image: '/images/blogs/productss.jpg',
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
  {
    id: 'fallback-5',
    slug: 'counterfeit-auto-parts-label-security',
    title: 'Counterfeiting in Auto Parts: Data-Driven Reality & How Labels Protect Your Brand',
    excerpt:
      'A data-backed look at counterfeit auto parts in India and the security label strategies that protect revenue, safety, and trust.',
    category: 'Anti-Counterfeit',
    author: 'Team SDB',
    featured_image: '/images/blogs/fake-autoparts.jpg',
    published_at: '2026-03-19',
    created_at: '2026-03-19',
    tags: ['counterfeit', 'auto parts', 'security labels', 'brand protection'],
    meta_title:
      'Counterfeit Auto Parts: Data, Risks & Security Label Solutions | SDB Label',
    meta_description:
      'See the real scale of counterfeit auto parts in India and how tamper-evident, hologram, and QR labels protect your brand.',
    content: `
      ## 🚨 Counterfeiting in Auto Parts: Data-Driven Reality & How Labels Protect Your Brand
      The auto parts industry is facing a massive hidden threat—counterfeiting. What was once a small issue has now become a large-scale, organized problem impacting revenue, safety, and brand trust.

      ## 📊 The problem in numbers
      - 30–40% of auto parts in India’s aftermarket are counterfeit
      - The fake spare parts market is valued at ₹10,500–14,000 crore
      - Globally, counterfeit auto parts cause $2.2 billion+ annual losses
      - Counterfeit automotive products account for ~20% of road accidents in India
      - Fake parts are typically sold 20–30% cheaper, attracting price-sensitive buyers
      - The global fake auto parts trade is estimated at $45 billion annually

      **Reality:** This is not a small leakage—it’s a parallel industry competing with you.

      ## ⚠️ Business impact (backed by data)
      1. **Revenue loss**
      - With up to 40% market penetration, counterfeit products directly eat into your sales.
      2. **Brand damage**
      - Studies show 80% of consumers believe they are buying genuine products, even when they are not.
      - Meaning: fake product failure = your brand blamed.
      3. **Price pressure**
      - Counterfeiters operate with up to 50% profit margins in illegal markets.
      - They can always undercut your pricing.
      4. **Safety & legal risk**
      - 1 in 5 road accidents linked to fake parts.
      - Critical components like brakes & airbags are commonly duplicated.

      ## 🔍 Why counterfeiting is winning
      - Easy replication of packaging and labels
      - Weak authentication systems
      - Price-sensitive customers
      - Lack of real-time product verification
      - Even raids show the scale: thousands of fake parts seized in single operations (e.g., 4,000+ units in one crackdown)

      Counterfeiters are organized, fast, and profit-driven.

      ## 🛡️ Role of labels: your first line of defense
      Labels are no longer just branding—they are security systems. A smart labeling system can:
      - Prevent duplication
      - Enable authentication
      - Build customer trust
      - Protect your supply chain

      ## 🔐 High-impact label security solutions
      - **Tamper-evident labels**
      - **VOID labels**
      - **Holographic labels**
      - **Scratch & verify codes**
      - **Serialized QR codes**

      ## 📈 Why investing in security labels makes business sense
      - Protects up to 30–40% lost market share
      - Builds instant customer trust
      - Reduces counterfeit circulation
      - Strengthens dealer confidence
      - Positions your brand as premium & reliable

      The cost of protection is far lower than the cost of brand damage.

      ## 🚀 Strategic approach to stop counterfeiting
      - Identify where your product is vulnerable
      - Upgrade from basic labels to secure labels
      - Implement customer verification systems
      - Educate dealers & distributors
      - Continuously upgrade security layers

      ## 👉 Final reality
      Counterfeiting is not a future risk—it is happening right now.
      - Up to 40% of your potential market may already be compromised
      - 20% of accidents linked to fake parts
      - Billions lost globally every year
      - If your product is easy to copy, it will be copied

      ## 📞 Conclusion
      In today’s market, price is not your biggest competition—counterfeiting is. The brands that will win are those that:
      - Protect their products
      - Enable verification
      - Build trust at every level

      Secure labeling is no longer optional—it’s a business necessity.
    `,
  },
]

async function getBlogPost(slug: string) {
  const canonicalSlug = resolveSlug(slug)
  const { data: post } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', canonicalSlug)
    .eq('is_published', true)
    .single()

  if (post) {
    return post
  }

  const legacySlug = reverseSlugAliases[canonicalSlug]
  if (legacySlug) {
    const { data: legacyPost } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', legacySlug)
      .eq('is_published', true)
      .single()

    if (legacyPost) {
      return legacyPost
    }
  }
  
  return post || fallbackPosts.find((item) => item.slug === canonicalSlug) || null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: rawSlug } = await params
  const canonicalSlug = resolveSlug(rawSlug)
  const post = await getBlogPost(rawSlug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.meta_title || post.title + ' | SDB Label Insights',
    description: post.meta_description || post.excerpt,
    alternates: {
      canonical: `/blogs/${canonicalSlug}`,
    },
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
  const { slug: rawSlug } = await params
  const canonicalSlug = resolveSlug(rawSlug)

  if (rawSlug !== canonicalSlug) {
    redirect(`/blogs/${canonicalSlug}`)
  }

  const post = await getBlogPost(rawSlug)

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
  const isAntiCounterfeitArticle =
    post.slug === 'counterfeit-auto-parts-label-security' ||
    normalizedTitle ===
      'counterfeiting in auto parts: data-driven reality & how labels protect your brand'

  const contentToRender = shouldOverrideContent
    ? tscTtpContent
    : post.content || ''

  const renderedContent = renderMarkdownToHtml(contentToRender)

  // Fetch recent posts for sidebar
  const { data: recentPostsRaw } = await supabase
    .from('blogs')
    .select('title, slug, created_at')
    .eq('is_published', true)
    .neq('slug', canonicalSlug)
    .limit(4)
  const recentPosts =
    recentPostsRaw?.filter((recent) => resolveSlug(recent.slug) !== canonicalSlug).slice(0, 3) || []
  const fallbackRecent = fallbackPosts
    .filter((item) => item.slug !== canonicalSlug)
    .slice(0, 3)

  return (
    <div className={`min-h-screen font-sans text-gray-900 selection:bg-red-100 selection:text-red-900 ${isAntiCounterfeitArticle ? 'bg-[#0b0c10]' : 'bg-white'}`}>
      <Navigation />
      
      {/* Article Header (Parallax-style) */}
      <div className={`relative w-full overflow-hidden ${isAntiCounterfeitArticle ? 'h-[72vh] min-h-[560px] bg-[#0b0c10]' : 'h-[60vh] min-h-[460px] bg-gray-900'}`}>
        {post.featured_image && (
          <OptimizedImage
            src={post.featured_image}
            alt={post.title}
            fill
            className={`object-cover ${isAntiCounterfeitArticle ? 'opacity-70 saturate-125 contrast-110' : 'opacity-60'}`}
            priority
          />
        )}
        <div className={`absolute inset-0 ${isAntiCounterfeitArticle ? 'bg-gradient-to-t from-black via-black/70 to-transparent' : 'bg-gradient-to-t from-black via-black/40 to-transparent'}`}></div>
        {isAntiCounterfeitArticle && (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.35),_transparent_55%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(239,68,68,0.15),transparent_40%,rgba(248,113,113,0.12))]" />
          </>
        )}
        
        <div className={`absolute bottom-0 left-0 w-full p-6 sm:p-12 lg:p-20 ${isAntiCounterfeitArticle ? 'pt-14 sm:pt-16' : ''}`}>
           <div className="container mx-auto max-w-7xl">
             <Link href="/blogs" className={`inline-flex items-center mb-6 transition-colors group ${isAntiCounterfeitArticle ? 'text-red-100 hover:text-white' : 'text-gray-300 hover:text-white'}`}>
               <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
               Back to Blog
             </Link>
             
             <div className="flex flex-wrap gap-4 items-center mb-6">
               <span className={`${isAntiCounterfeitArticle ? 'bg-red-500/90 text-white ring-1 ring-red-300/40' : 'bg-red-600 text-white'} px-4 py-1.5 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider`}>
                 {post.category || 'Article'}
               </span>
               <div className={`flex items-center text-sm ${isAntiCounterfeitArticle ? 'text-red-100' : 'text-gray-300'}`}>
                  <CalendarIcon className="w-4 h-4 mr-1.5" />
                  {new Date(post.published_at || post.created_at).toLocaleDateString()}
               </div>
             </div>

             <h1 className={`text-3xl sm:text-4xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-4 drop-shadow-lg ${isAntiCounterfeitArticle ? 'tracking-tight' : ''}`}>
               {post.title}
             </h1>
             {isAntiCounterfeitArticle && (
               <p className="max-w-2xl text-red-100/90 text-base sm:text-lg">
                 Counterfeit auto parts are a direct threat to revenue, safety, and brand trust. Here’s the data and the security label playbook that stops the damage.
               </p>
             )}
           </div>
        </div>
      </div>

      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-16 ${isAntiCounterfeitArticle ? 'text-white' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Info */}
          <article className="lg:col-span-8">
             {isAntiCounterfeitArticle && (
               <div className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                 <div className="flex flex-wrap gap-3 text-sm">
                   <span className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-red-100">
                     🚨 Active Counterfeit Threat
                   </span>
                   <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white/80">
                     🛡️ Security Labels
                   </span>
                   <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white/80">
                     📊 Data-Backed Insights
                   </span>
                 </div>
                 <div className="mt-5 grid gap-4 sm:grid-cols-3">
                   <div className="rounded-xl bg-black/30 p-4">
                     <p className="text-2xl font-bold text-white">30–40%</p>
                     <p className="text-sm text-white/70">Aftermarket parts in India are counterfeit</p>
                   </div>
                   <div className="rounded-xl bg-black/30 p-4">
                     <p className="text-2xl font-bold text-white">₹10.5k–14k Cr</p>
                     <p className="text-sm text-white/70">Estimated fake spare parts market</p>
                   </div>
                   <div className="rounded-xl bg-black/30 p-4">
                     <p className="text-2xl font-bold text-white">20%</p>
                     <p className="text-sm text-white/70">Road accidents tied to fake parts</p>
                   </div>
                 </div>
               </div>
             )}
             {/* Rich Text Content */}
             <div 
               className={`prose prose-lg max-w-none 
               prose-headings:font-bold prose-headings:text-gray-900 
               prose-p:text-gray-700 prose-p:leading-relaxed 
               prose-li:text-gray-700
               prose-a:text-red-600 hover:prose-a:text-red-700 
               prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
               prose-strong:text-gray-900
               ${isAntiCounterfeitArticle ? 'prose-invert prose-red prose-headings:text-white prose-p:text-white/80 prose-li:text-white/80 prose-strong:text-white prose-a:text-red-300 hover:prose-a:text-red-200' : 'prose-red'}`}
               dangerouslySetInnerHTML={{ __html: renderedContent }}
             />
             
             {/* Tags */}
             {post.tags && post.tags.length > 0 && (
               <div className={`mt-12 pt-8 border-t ${isAntiCounterfeitArticle ? 'border-white/10' : 'border-gray-100'}`}>
                 <h4 className={`text-sm font-bold uppercase tracking-widest mb-4 ${isAntiCounterfeitArticle ? 'text-red-200/80' : 'text-gray-400'}`}>Tags</h4>
                 <div className="flex flex-wrap gap-2">
                   {post.tags.map((tag: string) => (
                     <span key={tag} className={`px-3 py-1 rounded-lg text-sm transition-colors cursor-default ${isAntiCounterfeitArticle ? 'bg-white/10 text-white/80 hover:bg-red-500/20 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-700'}`}>
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
              <div className={`rounded-2xl p-6 border ${isAntiCounterfeitArticle ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-50 border-gray-100'}`}>
                <h3 className={`font-bold mb-4 text-lg ${isAntiCounterfeitArticle ? 'text-white' : 'text-gray-900'}`}>Read Next</h3>
                <div className="space-y-4">
                  {(recentPosts?.length ? recentPosts : fallbackRecent).map((recent) => (
                    <Link 
                      href={`/blogs/${resolveSlug(recent.slug)}`} 
                      key={recent.slug}
                      className="block group"
                    >
                      <h4 className={`text-sm font-medium transition-colors line-clamp-2 ${isAntiCounterfeitArticle ? 'text-white/80 group-hover:text-red-200' : 'text-gray-700 group-hover:text-red-600'}`}>
                        {recent.title}
                      </h4>
                      <span className={`text-xs mt-1 block ${isAntiCounterfeitArticle ? 'text-white/50' : 'text-gray-400'}`}>
                        {new Date(recent.created_at).toLocaleDateString()}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mini CTA Sidebar Widget */}
              <div className={`rounded-2xl p-6 text-center text-white shadow-xl relative overflow-hidden ${isAntiCounterfeitArticle ? 'bg-gradient-to-br from-red-600 via-red-700 to-black' : 'bg-gradient-to-br from-red-700 to-red-900'}`}>
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
