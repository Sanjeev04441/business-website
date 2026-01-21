'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  ArrowLeftIcon,
  CheckCircleIcon,
  XCircleIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import '../../../styles/admin-colors.css';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Blog {
  id: number;
  title: string;
  slug: string;
  is_published: boolean;
  published_at: string;
  author: string;
  created_at: string;
  category: string;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuthAndFetch();
  }, []);

  const checkAuthAndFetch = async () => {
    // Check Auth
    const authenticated = sessionStorage.getItem('admin_authenticated');
    if (authenticated !== 'true') {
      router.push('/admin/login');
      return;
    }
    fetchBlogs();
  };

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      alert('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this blog post? This cannot be undone.')) return;

    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      // Remove from local state
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog');
    }
  };

  const togglePublish = async (blog: Blog) => {
    try {
      const newStatus = !blog.is_published;
      const updates: any = { is_published: newStatus };
      
      if (newStatus && !blog.published_at) {
        updates.published_at = new Date().toISOString();
      }

      const { error } = await supabase
        .from('blogs')
        .update(updates)
        .eq('id', blog.id);

      if (error) throw error;

      // Update local state
      setBlogs(blogs.map(b => b.id === blog.id ? { ...b, ...updates } : b));
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update publish status');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen admin-bg flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-transparent border-white/80"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen admin-bg-stunning">
      {/* Header */}
      <div className="relative z-10 admin-glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="p-2 hover:bg-white/10 rounded-full text-gray-800 transition-colors">
                <ArrowLeftIcon className="h-6 w-6" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Manage Blogs</h1>
                <p className="text-gray-700 mt-1">Create and serve content to your users</p>
              </div>
            </div>
            <Link
              href="/admin/blogs/create"
              className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-xl flex items-center space-x-2 shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <PlusIcon className="h-5 w-5" />
              <span>Create New Blog</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No blogs yet</h2>
            <p className="text-gray-700 mb-8">Get started by creating your first article.</p>
            <Link
              href="/admin/blogs/create"
              className="inline-flex items-center px-6 py-3 bg-red-700 text-white rounded-xl hover:bg-red-800 transition-colors"
            >
              Start Writing
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {blogs.map((blog) => (
              <div 
                key={blog.id} 
                className="bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:bg-white/40"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      blog.is_published 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                    }`}>
                      {blog.is_published ? (
                        <><CheckCircleIcon className="w-3 h-3 mr-1"/> Published</>
                      ) : (
                        <><div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"/> Draft</>
                      )}
                    </span>
                    <span className="text-sm text-gray-600 border border-gray-200 px-2 py-0.5 rounded-md">
                      {blog.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{blog.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 gap-4">
                     <span>By {blog.author}</span>
                     <span>•</span>
                     <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => togglePublish(blog)}
                    className={`p-2 rounded-lg transition-colors ${
                       blog.is_published ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' : 'bg-green-100 text-green-700 hover:bg-green-200'
                    }`}
                    title={blog.is_published ? "Unpublish" : "Publish"}
                  >
                    {blog.is_published ? <XCircleIcon className="w-5 h-5" /> : <CheckCircleIcon className="w-5 h-5" />}
                  </button>
                  
                  <Link 
                    href={`/blogs/${blog.slug}`} 
                    target="_blank"
                    className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                    title="View Live"
                  >
                    <EyeIcon className="w-5 h-5" />
                  </Link>

                  <Link 
                    href={`/admin/blogs/edit/${blog.id}`} 
                    className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </Link>

                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
