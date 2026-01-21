
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

async function getBlogPost(slug: string) {
  const { data: post } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()
  
  return post
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

  // Fetch recent posts for sidebar
  const { data: recentPosts } = await supabase
    .from('blogs')
    .select('title, slug, created_at')
    .eq('is_published', true)
    .neq('slug', slug)
    .limit(3)

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
               dangerouslySetInnerHTML={{ __html: post.content }}
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
                  {recentPosts?.map((recent) => (
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
