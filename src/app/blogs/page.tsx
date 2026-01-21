
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import OptimizedImage from '@/components/OptimizedImage'
import Navigation from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline'

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const metadata = {
  title: 'Industry Insights & Blog | SDB Label Manufacturer India',
  description: 'Read the latest updates on barcode labels, sticker printing, thermal printers, and logistics solutions from SDB Label - India\'s leading manufacturer.',
}

async function getBlogs() {
  const { data: blogs } = await supabase
    .from('blogs')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })
  
  return blogs || []
}

export default async function BlogsPage() {
  const blogs = await getBlogs()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Industry <span className="text-red-600">Insights</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Expert guides on barcode labels, thermal printing technologies, and supply chain efficiency.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-900">No articles published yet.</h3>
            <p className="text-gray-600 mt-2">Check back soon for updates!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link 
                href={`/blogs/${blog.slug}`} 
                key={blog.id}
                className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                   {blog.featured_image ? (
                     <OptimizedImage
                       src={blog.featured_image}
                       alt={blog.title}
                       fill
                       className="object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                   ) : (
                     <div className="flex items-center justify-center h-full text-gray-400 bg-gray-100">
                       <span className="text-4xl">📰</span>
                     </div>
                   )}
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-red-700 uppercase tracking-wide">
                     {blog.category || 'Article'}
                   </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                     <div className="flex items-center">
                       <CalendarIcon className="w-4 h-4 mr-1" />
                       {new Date(blog.published_at || blog.created_at).toLocaleDateString('en-IN', {
                         year: 'numeric',
                         month: 'long',
                         day: 'numeric'
                       })}
                     </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mr-2">
                        <UserIcon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-medium text-gray-900">{blog.author || 'Team SDB'}</span>
                    </div>
                    <span className="text-sm font-semibold text-red-600 group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Read Article &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
