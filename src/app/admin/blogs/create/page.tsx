'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { 
  ArrowLeftIcon, 
  CloudArrowUpIcon,
  PhotoIcon 
} from '@heroicons/react/24/outline';
//import '../../../../styles/admin-colors.css';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function CreateBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image: '',
    category: 'Industry Insights',
    author: 'SDB LABEL Team',
    meta_title: '',
    meta_description: '',
    tags: ''
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title),
      meta_title: title // Default meta title to title
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Process tags
      const tagsArray = formData.tags.split(',').map(t => t.trim()).filter(Boolean);

      // 2. Insert into Supabase
      const { data, error } = await supabase
        .from('blogs')
        .insert([
          {
            title: formData.title,
            slug: formData.slug,
            excerpt: formData.excerpt,
            content: formData.content,
            featured_image: formData.featured_image,
            category: formData.category,
            author: formData.author,
            meta_title: formData.meta_title,
            meta_description: formData.meta_description,
            tags: tagsArray,
            is_published: true, // Auto publish for now, can change
            published_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) throw error;

      alert('✅ Blog published successfully!');
      router.push('/admin/blogs');
    } catch (error: any) {
      console.error('Error creating blog:', error);
      alert('Error creating blog: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen admin-bg-stunning pb-20">
      {/* Header */}
      <div className="sticky top-0 z-20 admin-glass border-b border-white/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/admin/blogs" className="p-2 hover:bg-white/10 rounded-full text-gray-800 transition-colors">
                <ArrowLeftIcon className="h-6 w-6" />
              </Link>
              <h1 className="text-xl font-bold text-gray-900">Create New Post</h1>
            </div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl flex items-center space-x-2 shadow-lg transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <><span>Publishing...</span></>
              ) : (
                <>
                  <CloudArrowUpIcon className="h-5 w-5" />
                  <span>Publish Now</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Editor Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Title Section */}
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm">
              <label className="block text-sm font-medium text-gray-700 mb-2">Blog Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={handleTitleChange}
                placeholder="e.g. How to Choose the Right Barcode Label"
                className="w-full text-xl font-bold px-4 py-3 bg-white/70 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              />
              <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                <span>Slug:</span>
                <span className="font-mono bg-gray-100 px-1 rounded">{formData.slug}</span>
              </div>
            </div>

            {/* Content Editor */}
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm h-[500px] flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content (HTML Supported)
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Tip: Use &lt;h2&gt; for section headers.
              </p>
              <textarea
                required
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                placeholder="Write your article content here..."
                className="flex-1 w-full p-4 bg-white/70 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none font-mono text-sm leading-relaxed"
              />
            </div>

            {/* SEO Section */}
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                🔍 SEO Optimization
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                  <input
                    type="text"
                    value={formData.meta_title}
                    onChange={(e) => setFormData({...formData, meta_title: e.target.value})}
                    className="w-full px-4 py-2 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500"
                    placeholder="SEO focused title (max 60 chars)"
                    maxLength={60}
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">{formData.meta_title.length}/60</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                  <textarea
                    value={formData.meta_description}
                    onChange={(e) => setFormData({...formData, meta_description: e.target.value})}
                    className="w-full px-4 py-2 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500"
                    placeholder="Summary for Google search results (max 160 chars)"
                    maxLength={160}
                    rows={3}
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">{formData.meta_description.length}/160</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Settings */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Metadata Card */}
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Post Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image URL</label>
                  <div className="relative">
                    <PhotoIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.featured_image}
                      onChange={(e) => setFormData({...formData, featured_image: e.target.value})}
                      placeholder="https://..."
                      className="w-full pl-10 pr-4 py-2 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
                  <textarea
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                    rows={3}
                    placeholder="Short summary for the card view..."
                    className="w-full px-3 py-2 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-3 py-2 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                  >
                    <option>Industry Insights</option>
                    <option>Product Guides</option>
                    <option>Case Studies</option>
                    <option>Company News</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                    placeholder="Labeling, RFID, Printers"
                    className="w-full px-3 py-2 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Author Name</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    className="w-full px-3 py-2 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                  />
                </div>
              </div>
            </div>

          </div>

        </form>
      </div>
    </div>
  );
}
