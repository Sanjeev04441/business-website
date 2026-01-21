'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  DocumentTextIcon, 
  CurrencyDollarIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowDownTrayIcon,
  BellIcon,
  CogIcon,
  ArrowPathIcon,
  XMarkIcon,
  PencilIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import '../../styles/admin-colors.css';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface ContactSubmission {
  id: number;
  name: string;
  company_name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

interface QuotationSubmission {
  id: number;
  name: string;
  company_name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  project_type: string;
  quantity: string;
  urgency: string;
  budget: string;
  industry: string;
  additional_notes: string;
  created_at: string;
}

interface ConsultancySubmission {
  id: number;
  name: string;
  company_name: string;
  email: string;
  phone: string;
  consultancy_type: string;
  project_scope: string;
  timeline: string;
  budget: string;
  description: string;
  created_at: string;
}

export default function AdminPage() {
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [quotationSubmissions, setQuotationSubmissions] = useState<QuotationSubmission[]>([]);
  const [consultancySubmissions, setConsultancySubmissions] = useState<ConsultancySubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'contact' | 'quotation' | 'consultancy'>('contact');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filterDateRange, setFilterDateRange] = useState('all');
  const [filterUrgency, setFilterUrgency] = useState('all');
  const router = useRouter();

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = () => {
    try {
      const authenticated = sessionStorage.getItem('admin_authenticated');
      const email = sessionStorage.getItem('admin_email');
      const loginTime = sessionStorage.getItem('admin_login_time');

      if (authenticated === 'true' && email && loginTime) {
        // Check if login is not older than 8 hours
        const loginDate = new Date(loginTime);
        const now = new Date();
        const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60);

        if (hoursDiff < 8) {
          setIsAuthenticated(true);
          setUserEmail(email);
          fetchData();
        } else {
          // Session expired
          sessionStorage.removeItem('admin_authenticated');
          sessionStorage.removeItem('admin_email');
          sessionStorage.removeItem('admin_login_time');
          router.push('/admin/login');
        }
      } else {
        router.push('/admin/login');
      }
    } catch (error) {
      console.error('Authentication check failed:', error);
      router.push('/admin/login');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    sessionStorage.removeItem('admin_email');
    sessionStorage.removeItem('admin_login_time');
    
    // Clear cookies
    document.cookie = 'admin_authenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'admin_email=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    
    router.push('/admin/login');
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Check if Supabase is configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        console.error('❌ Supabase not configured. Please set environment variables.');
        alert('Database not configured. Please check your environment variables.');
        setLoading(false);
        return;
      }

      // Fetch contact submissions
      const { data: contactData, error: contactError } = await supabase
        .from('contact_us')
        .select('*')
        .order('created_at', { ascending: false });

      if (contactError) {
        console.error('❌ Contact data error:', contactError);
        console.error('Error details:', {
          message: contactError.message,
          details: contactError.details,
          hint: contactError.hint,
          code: contactError.code
        });
        // Set empty array if table doesn't exist or has permission issues
        setContactSubmissions([]);
      } else {
        console.log('✅ Contact data loaded:', contactData?.length || 0, 'submissions');
        setContactSubmissions(contactData || []);
      }

      // Fetch quotation submissions
      const { data: quotationData, error: quotationError } = await supabase
        .from('quotation_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (quotationError) {
        console.error('❌ Quotation data error:', quotationError);
        console.error('Error details:', {
          message: quotationError.message,
          details: quotationError.details,
          hint: quotationError.hint,
          code: quotationError.code
        });
        setQuotationSubmissions([]);
      } else {
        console.log('✅ Quotation data loaded:', quotationData?.length || 0, 'submissions');
        setQuotationSubmissions(quotationData || []);
      }

      // Fetch consultancy submissions
      const { data: consultancyData, error: consultancyError } = await supabase
        .from('consultancy_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (consultancyError) {
        console.error('❌ Consultancy data error:', consultancyError);
        console.error('Error details:', {
          message: consultancyError.message,
          details: consultancyError.details,
          hint: consultancyError.hint,
          code: consultancyError.code
        });
        setConsultancySubmissions([]);
      } else {
        console.log('✅ Consultancy data loaded:', consultancyData?.length || 0, 'submissions');
        setConsultancySubmissions(consultancyData || []);
      }
    } catch (error) {
      console.error('❌ Fatal error fetching data:', error);
      alert('An error occurred while loading data. Please check the console for details.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Statistics calculations
  const totalSubmissions = contactSubmissions.length + quotationSubmissions.length + consultancySubmissions.length;
  const recentSubmissions = [...contactSubmissions, ...quotationSubmissions, ...consultancySubmissions]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 5);

  // Filter submissions based on search and filters
  const getFilteredSubmissions = () => {
    let submissions: any[] = [];
    if (activeTab === 'contact') submissions = contactSubmissions;
    else if (activeTab === 'quotation') submissions = quotationSubmissions;
    else if (activeTab === 'consultancy') submissions = consultancySubmissions;

    return submissions.filter(submission => {
      const matchesSearch = searchTerm === '' || 
        Object.values(submission).some(value => 
          value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      const matchesDate = filterDateRange === 'all' || 
        (filterDateRange === 'today' && new Date(submission.created_at).toDateString() === new Date().toDateString()) ||
        (filterDateRange === 'week' && new Date(submission.created_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) ||
        (filterDateRange === 'month' && new Date(submission.created_at) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));

      const matchesUrgency = filterUrgency === 'all' || 
        (submission.urgency && submission.urgency === filterUrgency);

      return matchesSearch && matchesDate && matchesUrgency;
    });
  };

  const exportData = () => {
    const data = getFilteredSubmissions();
    const csvContent = [
      ['Name', 'Company', 'Email', 'Phone', 'Type', 'Date'].join(','),
      ...data.map(submission => [
        submission.name || '',
        submission.company_name || '',
        submission.email || '',
        submission.phone || submission.phoneNumber || '',
        activeTab,
        submission.created_at
      ].map(field => `"${field}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeTab}-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen admin-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-transparent mx-auto mb-4" style={{borderColor: 'var(--admin-primary)'}}></div>
          <p className="text-lg" style={{color: 'var(--admin-text-secondary)'}}>Verifying access...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen admin-bg flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-8xl mb-6">🔒</div>
          <h1 className="text-3xl font-bold mb-4" style={{color: 'var(--admin-text-primary)'}}>Access Denied</h1>
          <p className="mb-6" style={{color: 'var(--admin-text-secondary)'}}>You are not authorized to access this area.</p>
          <button
            onClick={() => router.push('/admin/login')}
            className="admin-btn-primary px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen admin-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-transparent mx-auto mb-4" style={{borderColor: 'var(--admin-primary)'}}></div>
          <p className="text-lg" style={{color: 'var(--admin-text-secondary)'}}>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const filteredSubmissions = getFilteredSubmissions();

  return (
    <div className="min-h-screen admin-bg-stunning">

      {/* Header */}
      <div className="relative z-10 admin-glass border-b" style={{borderColor: 'var(--admin-glass-border)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 drop-shadow-lg">SDB Label Dashboard</h1>
              <p className="mt-2 text-gray-800 drop-shadow-md">Advanced form submission management</p>
              <p className="text-sm mt-1 text-gray-700 drop-shadow-sm">Welcome back, {userEmail}</p>
            </div>
                <div className="flex space-x-4">
                  <button
                    onClick={fetchData}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 shadow-lg transition-colors duration-200"
                  >
                    <ArrowPathIcon className="h-5 w-5" />
                    <span>Refresh</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 shadow-lg transition-colors duration-200"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="admin-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium" style={{color: 'var(--admin-text-primary)'}}>Total Submissions</p>
                <p className="text-3xl font-bold" style={{color: 'var(--admin-text-primary)'}}>{totalSubmissions}</p>
              </div>
              <div className="h-12 w-12 admin-icon-multi rounded-xl flex items-center justify-center">
                <ChartBarIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="admin-card-secondary p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium" style={{color: 'var(--admin-text-primary)'}}>Contact Forms</p>
                <p className="text-3xl font-bold" style={{color: 'var(--admin-text-primary)'}}>{contactSubmissions.length}</p>
              </div>
              <div className="h-12 w-12 admin-icon-secondary rounded-xl flex items-center justify-center">
                <UserGroupIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="admin-card-accent p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium" style={{color: 'var(--admin-text-primary)'}}>Quotations</p>
                <p className="text-3xl font-bold" style={{color: 'var(--admin-text-primary)'}}>{quotationSubmissions.length}</p>
              </div>
              <div className="h-12 w-12 admin-icon-accent rounded-xl flex items-center justify-center">
                <CurrencyDollarIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

              <div className="admin-card-neutral p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Consultancy</p>
                    <p className="text-3xl font-bold text-gray-900">{consultancySubmissions.length}</p>
                  </div>
                  <div className="h-12 w-12 admin-icon-neutral rounded-xl flex items-center justify-center">
                    <DocumentTextIcon className="h-6 w-6 text-gray-800" />
                  </div>
                </div>
              </div>

              {/* Blog Management Card */}
              <Link href="/admin/blogs" className="block group">
                <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6 shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-red-500/25 border border-red-500/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-red-100">Content</p>
                      <p className="text-xl font-bold text-white mt-1">Manage Blogs</p>
                    </div>
                    <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <PencilIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-red-100 text-sm font-medium group-hover:text-white">
                    <span>Go to editor</span>
                    <ArrowRightIcon className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

        </div>

        {/* Controls */}
        <div className="admin-glass rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{color: 'var(--admin-text-secondary)'}} />
              <input
                type="text"
                placeholder="Search submissions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="admin-input w-full pl-10 pr-4 py-3 rounded-xl focus:outline-none transition-all duration-200"
              />
            </div>

            {/* Filters and Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="admin-glass hover:bg-white/40 px-4 py-3 rounded-xl transition-all duration-200 flex items-center space-x-2"
                style={{color: 'var(--admin-text-primary)'}}
              >
                <FunnelIcon className="h-5 w-5" />
                <span>Filters</span>
              </button>
              
              <button
                onClick={exportData}
                className="admin-glass hover:bg-white/40 px-4 py-3 rounded-xl transition-all duration-200 flex items-center space-x-2"
                style={{color: 'var(--admin-text-primary)'}}
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t-2 border-gray-300 bg-gray-100 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-3">Date Range</label>
                  <select
                    value={filterDateRange}
                    onChange={(e) => setFilterDateRange(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  >
                    <option value="all">All Time</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-3">Urgency</label>
                  <select
                    value={filterUrgency}
                    onChange={(e) => setFilterUrgency(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  >
                    <option value="all">All Urgency</option>
                    <option value="urgent">Urgent</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-2 border border-white/30">
            <nav className="flex space-x-2">
              {[
                { key: 'contact', label: 'Contact Forms', count: contactSubmissions.length, icon: UserGroupIcon },
                { key: 'quotation', label: 'Quotations', count: quotationSubmissions.length, icon: CurrencyDollarIcon },
                { key: 'consultancy', label: 'Consultancy', count: consultancySubmissions.length, icon: DocumentTextIcon }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'bg-white/40 text-white shadow-lg'
                      : 'text-white hover:text-white hover:bg-white/30'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                  <span className="bg-white/40 text-white text-xs px-2 py-1 rounded-full">
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 overflow-hidden">
          <div className="px-6 py-4 border-b border-white/30">
            <h2 className="text-xl font-semibold text-white">
              {activeTab === 'contact' && 'Contact Form Submissions'}
              {activeTab === 'quotation' && 'Quotation Requests'}
              {activeTab === 'consultancy' && 'Consultancy Requests'}
            </h2>
            <p className="text-white/90 mt-1">
              {filteredSubmissions.length} of {getFilteredSubmissions().length} submissions
            </p>
          </div>
          
          {filteredSubmissions.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <div className="text-white/70 text-6xl mb-4">📋</div>
              <p className="text-white text-lg">No submissions found</p>
              <p className="text-white/80 text-sm mt-2">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/30">
                <thead className="bg-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Company</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Contact</th>
                    {activeTab === 'quotation' && (
                      <>
                        <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Project</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Budget</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Urgency</th>
                      </>
                    )}
                    {activeTab === 'consultancy' && (
                      <>
                        <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Type</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Scope</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Budget</th>
                      </>
                    )}
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white/10 divide-y divide-white/30">
                  {filteredSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-white/20 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        {submission.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {submission.company_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        <div className="space-y-1">
                          <a href={`mailto:${submission.email}`} className="block text-white hover:text-blue-300 transition-colors">
                            {submission.email}
                          </a>
                          <a href={`tel:${submission.phone || submission.phoneNumber}`} className="block text-white hover:text-blue-300 transition-colors">
                            {submission.phone || submission.phoneNumber}
                          </a>
                        </div>
                      </td>
                      {activeTab === 'quotation' && (
                        <>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            {submission.project_type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            {submission.budget}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              submission.urgency === 'urgent' ? 'bg-red-500/30 text-red-200' :
                              submission.urgency === 'high' ? 'bg-orange-500/30 text-orange-200' :
                              submission.urgency === 'medium' ? 'bg-yellow-500/30 text-yellow-200' :
                              'bg-green-500/30 text-green-200'
                            }`}>
                              {submission.urgency}
                            </span>
                          </td>
                        </>
                      )}
                      {activeTab === 'consultancy' && (
                        <>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            {submission.consultancy_type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            {submission.project_scope}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            {submission.budget}
                          </td>
                        </>
                      )}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {formatDate(submission.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => setSelectedSubmission(submission)}
                          className="text-white hover:text-blue-300 transition-colors"
                        >
                          <EyeIcon className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">Submission Details</h3>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                {Object.entries(selectedSubmission).map(([key, value]) => (
                  <div key={key} className="bg-white/10 rounded-xl p-4">
                    <dt className="text-sm font-medium text-white/70 uppercase tracking-wider">
                      {key.replace(/_/g, ' ')}
                    </dt>
                    <dd className="mt-1 text-white">
                      {typeof value === 'string' && value.length > 100 ? (
                        <div>
                          <p className="text-sm">{value.substring(0, 100)}...</p>
                          <button className="text-[#D2C1B6] hover:text-[#C4B5A0] text-sm mt-1">
                            Show more
                          </button>
                        </div>
                      ) : (
                        value?.toString() || 'N/A'
                      )}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}