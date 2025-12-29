'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');
  const blogsPerPage = 9;
  
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Digital Marketing',
      excerpt: 'Exploring how artificial intelligence is transforming the digital marketing landscape and what it means for businesses.',
      date: 'December 15, 2025',
      category: 'AI & Automation',
      readTime: '5 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766952888/blog1_gqw3h8.png'
    },
    {
      id: 2,
      title: 'Next.js Best Practices for Performance',
      excerpt: 'Essential techniques to optimize your Next.js applications for maximum performance and user experience.',
      date: 'December 10, 2025',
      category: 'Web Development',
      readTime: '8 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954333/blog2_zpxjrn.png'
    },
    {
      id: 3,
      title: 'SEO Trends to Watch in 2026',
      excerpt: 'Stay ahead of the curve with the latest SEO trends and strategies that will dominate search rankings.',
      date: 'December 5, 2025',
      category: 'SEO',
      readTime: '6 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954333/blog3_trgk9g.png'
    },
    {
      id: 4,
      title: 'Building Scalable E-commerce Solutions',
      excerpt: 'A comprehensive guide to creating e-commerce platforms that can grow with your business needs.',
      date: 'November 28, 2025',
      category: 'E-commerce',
      readTime: '10 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954332/blog4_rvtqns.png'
    },
    {
      id: 5,
      title: 'The Power of Schema Markup',
      excerpt: 'Learn how structured data can improve your search visibility and drive more qualified traffic.',
      date: 'November 20, 2025',
      category: 'SEO',
      readTime: '4 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954330/blog5_f1tu9o.png'
    },
    {
      id: 6,
      title: 'AI Content Creation: Pros and Cons',
      excerpt: 'A balanced view of AI-generated content and its impact on content marketing strategies.',
      date: 'November 15, 2025',
      category: 'AI & Automation',
      readTime: '7 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954331/blog6_osyhch.png'
    },
    // 4 Web Development Blogs
    {
      id: 7,
      title: 'Advanced React Patterns for Modern Applications',
      excerpt: 'Explore advanced React patterns and techniques to build more maintainable and scalable applications.',
      date: 'November 10, 2025',
      category: 'Web Development',
      readTime: '12 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954331/blog7_xg6fie.png'
    },
    {
      id: 8,
      title: 'TypeScript Best Practices for Large Codebases',
      excerpt: 'Essential TypeScript practices to maintain type safety and code quality in large-scale applications.',
      date: 'November 5, 2025',
      category: 'Web Development',
      readTime: '10 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954331/bblog8_dr8nle.png'
    },
    {
      id: 9,
      title: 'Server-Side Rendering vs Static Generation',
      excerpt: 'Understanding when to use SSR, SSG, and ISR for optimal performance and SEO in Next.js applications.',
      date: 'October 28, 2025',
      category: 'Web Development',
      readTime: '9 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954329/blog9_gtk9al.png'
    },
    {
      id: 10,
      title: 'Building Progressive Web Apps with Next.js',
      excerpt: 'Creating fast, reliable, and engaging web experiences that work across all devices and network conditions.',
      date: 'October 20, 2025',
      category: 'Web Development',
      readTime: '11 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954337/blog10_gturui.png'
    },
    // 4 SEO Blogs
    {
      id: 11,
      title: 'Advanced Technical SEO Strategies',
      excerpt: 'Deep dive into technical SEO elements that can dramatically improve your site\'s search performance.',
      date: 'October 15, 2025',
      category: 'SEO',
      readTime: '13 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954329/blog11_vpk4fs.png'
    },
    {
      id: 12,
      title: 'Content Strategy for Maximum Organic Reach',
      excerpt: 'How to create content that ranks well and engages your target audience effectively.',
      date: 'October 8, 2025',
      category: 'SEO',
      readTime: '8 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954334/blog12_swpivv.png'
    },
    {
      id: 13,
      title: 'Local SEO Optimization Techniques',
      excerpt: 'Essential strategies to improve your local search rankings and attract nearby customers.',
      date: 'October 1, 2025',
      category: 'SEO',
      readTime: '7 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954327/blog13_nnrlq9.png'
    },
    {
      id: 14,
      title: 'SEO Analytics and Performance Tracking',
      excerpt: 'Measuring and optimizing your SEO efforts with data-driven insights and tools.',
      date: 'September 25, 2025',
      category: 'SEO',
      readTime: '9 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954328/blog14_p6tlhn.png'
    },
    // 5 Google Analytics Blogs
    {
      id: 15,
      title: 'Advanced Google Analytics 4 Implementation',
      excerpt: 'Setting up comprehensive tracking and conversion measurement with GA4.',
      date: 'September 20, 2025',
      category: 'Analytics',
      readTime: '10 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954326/blog15_sjntuu.png'
    },
    {
      id: 16,
      title: 'Custom Dashboard Creation for E-commerce',
      excerpt: 'Building tailored dashboards to track the most important metrics for your online business.',
      date: 'September 15, 2025',
      category: 'Analytics',
      readTime: '8 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954327/blog16_e4g6py.png'
    },
    {
      id: 17,
      title: 'Conversion Rate Optimization with Analytics',
      excerpt: 'Using data insights to identify and fix conversion bottlenecks on your website.',
      date: 'September 10, 2025',
      category: 'Analytics',
      readTime: '11 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954327/blog17_nnaxjz.png'
    },
    {
      id: 18,
      title: 'Attribution Modeling for Better Marketing ROI',
      excerpt: 'Understanding customer journeys and optimizing marketing spend with advanced attribution models.',
      date: 'September 5, 2025',
      category: 'Analytics',
      readTime: '12 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954326/blog18_qmngcf.png'
    },
    {
      id: 19,
      title: 'Privacy-First Analytics Solutions',
      excerpt: 'Implementing analytics while respecting user privacy and complying with regulations.',
      date: 'August 28, 2025',
      category: 'Analytics',
      readTime: '9 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954325/blog19_xgc7hd.png'
    },
    // 6 AI Powered Blogs
    {
      id: 20,
      title: 'Implementing ChatGPT in Customer Service',
      excerpt: 'How to effectively integrate AI chatbots to enhance customer support and reduce response times.',
      date: 'August 20, 2025',
      category: 'AI & Automation',
      readTime: '10 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954326/blog20_n4th7r.png'
    },
    {
      id: 21,
      title: 'AI-Powered Content Personalization',
      excerpt: 'Delivering personalized content experiences at scale using artificial intelligence.',
      date: 'August 15, 2025',
      category: 'AI & Automation',
      readTime: '8 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954323/blog21_mp77he.png'
    },
    {
      id: 22,
      title: 'Machine Learning for Predictive Analytics',
      excerpt: 'Using ML algorithms to predict customer behavior and business outcomes.',
      date: 'August 10, 2025',
      category: 'AI & Automation',
      readTime: '11 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954323/blog22_niokqg.png'
    },
    {
      id: 23,
      title: 'AI Tools for Digital Marketing Automation',
      excerpt: 'Streamlining marketing operations with AI-powered tools and workflows.',
      date: 'August 5, 2025',
      category: 'AI & Automation',
      readTime: '9 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954323/blog23_cfojem.png'
    },
    {
      id: 24,
      title: 'Natural Language Processing for SEO',
      excerpt: 'Leveraging NLP to understand search intent and optimize content accordingly.',
      date: 'July 28, 2025',
      category: 'AI & Automation',
      readTime: '10 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954322/blog24_zbuawm.png'
    },
    {
      id: 25,
      title: 'Ethical AI Implementation in Business',
      excerpt: 'Balancing automation benefits with ethical considerations and responsible AI use.',
      date: 'July 20, 2025',
      category: 'AI & Automation',
      readTime: '12 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954321/blog25_wjs58u.png'
    },
    // 5 Google AdSense and Monetization Blogs
    {
      id: 26,
      title: 'Maximizing AdSense Revenue Strategies',
      excerpt: 'Proven techniques to increase your AdSense earnings without compromising user experience.',
      date: 'July 15, 2025',
      category: 'Monetization',
      readTime: '9 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954326/blog26_dyekeb.png'
    },
    {
      id: 27,
      title: 'Content Strategy for Ad Revenue Optimization',
      excerpt: 'Creating content that attracts both audiences and advertisers for maximum monetization.',
      date: 'July 10, 2025',
      category: 'Monetization',
      readTime: '8 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954321/blog27_ndoy92.png'
    },
    {
      id: 28,
      title: 'Alternative Monetization Models Beyond Ads',
      excerpt: 'Exploring affiliate marketing, sponsorships, and other revenue streams for content creators.',
      date: 'July 5, 2025',
      category: 'Monetization',
      readTime: '10 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954322/blog28_sp7p4i.png'
    },
    {
      id: 29,
      title: 'Ad Placement Optimization Techniques',
      excerpt: 'Finding the perfect balance between ad visibility and user experience for higher CTR.',
      date: 'June 28, 2025',
      category: 'Monetization',
      readTime: '7 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954321/blog29_dv34fo.png'
    },
    {
      id: 30,
      title: 'Building Sustainable Revenue Streams',
      excerpt: 'Creating diversified income sources for long-term business stability and growth.',
      date: 'June 20, 2025',
      category: 'Monetization',
      readTime: '11 min read',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954321/blog30_rs0ooe.png'
    }
  ];

  const categories = [
    { name: 'All', count: 30 },
    { name: 'Web Development', count: 4 },
    { name: 'SEO', count: 4 },
    { name: 'Analytics', count: 5 },
    { name: 'AI & Automation', count: 6 },
    { name: 'Monetization', count: 5 },
    { name: 'E-commerce', count: 1 }
  ];

  // Count blogs per category for display
  const categoryCounts: Record<string, number> = {
    'All': blogPosts.length,
    'Web Development': blogPosts.filter(post => post.category === 'Web Development').length,
    'SEO': blogPosts.filter(post => post.category === 'SEO').length,
    'Analytics': blogPosts.filter(post => post.category === 'Analytics').length,
    'AI & Automation': blogPosts.filter(post => post.category === 'AI & Automation').length,
    'Monetization': blogPosts.filter(post => post.category === 'Monetization').length,
    'E-commerce': blogPosts.filter(post => post.category === 'E-commerce').length,
  };

  // Filter blogs based on search term and selected category
  const filteredBlogs = blogPosts.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                   blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const handleNewsletterSubmit = async () => {
    if (!newsletterEmail) {
      setNewsletterError('Please enter your email address');
      return;
    }
    
    const emailRegex = /^[\w\._%+-]+@[\w\.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setNewsletterError('');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setNewsletterSuccess(true);
        setNewsletterEmail('');
        setTimeout(() => {
          setNewsletterSuccess(false);
        }, 5000);
      } else {
        setNewsletterError(result.error || 'There was an error subscribing. Please try again.');
      }
    } catch (error) {
      setNewsletterError('There was an error subscribing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 -z-10 transform -rotate-1 rounded-full blur-3xl"></div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">Digital Marketing & Web Development Blog</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Expert insights, tips, and strategies for digital marketing, web development, SEO, and AI automation. 
            Stay updated with the latest industry trends and best practices from SM Agency.
          </p>
          
          {/* Search Bar */}
          <motion.div 
            className="mt-8 max-w-2xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 -z-10 transform -rotate-1 rounded-full blur-2xl"></div>
            <div className="relative bg-white/30 backdrop-blur-sm p-1 rounded-full">
              <input
                type="text"
                placeholder="Search digital marketing, SEO, web development, AI & automation tips..."
                className="w-full px-4 py-4 pl-14 pr-6 rounded-full border border-indigo-100 focus:outline-none focus:ring-4 focus:ring-blue-300/30 focus:border-indigo-300 shadow-lg transition-all duration-300 bg-white/80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <motion.svg 
                className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-indigo-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </motion.svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 -z-10 transform -rotate-1 rounded-full blur-xl -m-8"></div>
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-5 py-3 rounded-full transition-all duration-300 relative z-10 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                  : 'bg-gradient-to-r from-white to-gray-50 text-gray-700 border border-indigo-100 shadow-sm hover:from-blue-50 hover:to-indigo-50 hover:text-indigo-700 hover:shadow-md'
              }`}
              onClick={() => setSelectedCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name} <span className="ml-1">({categoryCounts[category.name]})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {paginatedBlogs.map((post, index) => (
            <motion.article 
              key={post.id}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 -z-10"></div>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width={400}
                  height={200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 relative z-10">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.id}`} 
                  className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md"
                >
                  Read more
                </Link>
              </div>
            </motion.article>
          ))}
          {paginatedBlogs.length === 0 && (
            <div className="col-span-full text-center py-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-600 text-lg"
              >
                <p>No blogs found matching your search.</p>
                <button 
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                >
                  Clear Filters
                </button>
              </motion.div>
            </div>
          )}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-12 text-white mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 -z-10"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -m-32"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -m-32"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-6">
              Subscribe to our newsletter and get the latest insights on digital marketing, 
              web development, and AI automation delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 bg-white/90 backdrop-blur-sm"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button 
                type="button"
                onClick={handleNewsletterSubmit}
                disabled={isSubmitting}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {newsletterSuccess && (
              <div className="mt-4 text-green-300 font-medium">
                Thank you for subscribing! We've sent a confirmation to your email.
              </div>
            )}
            {newsletterError && (
              <div className="mt-4 text-red-300 font-medium">
                {newsletterError}
              </div>
            )}
          </div>
        </motion.div>

        {/* Pagination */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {totalPages > 1 && (
            <div className="flex items-center space-x-2">
              <motion.button 
                className={`w-12 h-12 rounded-full ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600'} flex items-center justify-center shadow-md`}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
                whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
              >
                &lt;
              </motion.button>
              
              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <motion.button
                  key={page}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-medium ${
                    currentPage === page 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white'
                  }`}
                  onClick={() => setCurrentPage(page)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {page}
                </motion.button>
              ))}
              
              <motion.button 
                className={`w-12 h-12 rounded-full ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600'} flex items-center justify-center shadow-md`}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
                whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
              >
                &gt;
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;