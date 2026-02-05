'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ServicesPage = () => {


  const services = [
    // AI Automation & AI Agents
    { name: 'Lead Qualification Automation', category: 'AI Automation & AI Agents', desc: 'Automate lead qualification process with AI-powered filtering' },
    { name: 'Customer Support Automation (Email / WhatsApp / Chat)', category: 'AI Automation & AI Agents', desc: '24/7 automated customer support across multiple channels' },
    { name: 'Invoice & Payment Follow-up Automation', category: 'AI Automation & AI Agents', desc: 'A smart automation system that tracks invoices, sends personalized payment reminders, and updates payment status automatically—without manual follow-ups.' },
    { name: 'Recruitment Screening Automation', category: 'AI Automation & AI Agents', desc: 'AI-powered candidate screening and interview scheduling' },
    { name: 'Social Media Content & Posting Automation', category: 'AI Automation & AI Agents', desc: 'An AI-powered social media automation system that plans, creates, schedules, and tracks content across platforms—saving time while maintaining consistency and performance.' },
    { name: 'Automated Business Report Generation', category: 'AI Automation & AI Agents', desc: 'Generate comprehensive business reports automatically' },
    { name: 'Email Sorting & Priority Automation', category: 'AI Automation & AI Agents', desc: 'A smart email automation system that categorizes, prioritizes, and routes emails automatically so teams focus only on what matters.' },
    { name: 'CRM Data Cleaning & Management Automation', category: 'AI Automation & AI Agents', desc: 'An AI-powered automation system that continuously cleans, validates, and maintains CRM data accuracy—ensuring your sales and marketing teams work with reliable information.' },
    { name: 'E-commerce Order & Refund Automation', category: 'AI Automation & AI Agents', desc: 'A smart automation system that manages orders, refunds, and customer notifications automatically—reducing manual workload and improving customer experience.' },
    { name: 'SOP & Internal Process Automation', category: 'AI Automation & AI Agents', desc: 'AI-powered SOP automation that guides teams through internal processes, ensures consistency, and reduces operational errors.' },
    { name: 'Sales AI Agent', category: 'AI Automation & AI Agents', desc: 'AI-powered sales assistant that identifies leads, predicts conversions, and automates follow-ups to maximize revenue and reduce manual sales effort.' },
    { name: 'HR & Hiring AI Agent', category: 'AI Automation & AI Agents', desc: 'AI-driven HR assistant that streamlines recruitment, onboarding, and employee management while improving decision-making and reducing manual workload.' },
    { name: 'Research & Market Analysis AI Agent', category: 'AI Automation & AI Agents', desc: 'AI-powered research assistant that collects, analyzes, and interprets market data to support strategic business decisions and stay ahead of competition.' },
    { name: 'Content Strategist AI Agent', category: 'AI Automation & AI Agents', desc: 'AI-powered content strategist that plans, creates, and optimizes content to boost engagement, SEO performance, and audience growth.' },
    { name: 'Customer Success AI Agent', category: 'AI Automation & AI Agents', desc: 'AI-powered assistant that enhances customer support, automates follow-ups, and ensures customer satisfaction and retention.' },
    { name: 'Finance & Cash Flow AI Agent', category: 'AI Automation & AI Agents', desc: 'AI-driven finance assistant that monitors cash flow, predicts trends, and automates financial reporting to help businesses make smarter decisions.' },
    { name: 'Legal Assistant AI Agent', category: 'AI Automation & AI Agents', desc: 'AI-powered legal assistant that automates contract review, compliance checks, and legal research, reducing risk and saving time for businesses.' },
    { name: 'Operations Manager AI Agent', category: 'AI Automation & AI Agents', desc: 'AI-driven operations assistant that streamlines workflows, automates task management, and ensures operational efficiency across teams.' },
    { name: 'E-commerce Growth AI Agent', category: 'AI Automation & AI Agents', desc: 'AI-powered e-commerce assistant that automates sales, marketing, and customer engagement to boost online revenue and growth.' },
    { name: 'Founder / Executive Assistant AI Agent', category: 'AI Automation & AI Agents', desc: 'AI-powered executive assistant that manages scheduling, communications, and strategic tasks, giving founders and executives more time to focus on growth.' },

    // Core Web & SEO Services
    { name: 'Complete Website Development', category: 'Core Web & SEO Services', desc: 'Full custom website development with modern technologies' },
    { name: 'Landing Page Design & Development', category: 'Core Web & SEO Services', desc: 'High-converting landing pages designed for maximum conversions' },
    { name: 'Next.js Website Setup', category: 'Core Web & SEO Services', desc: 'Professional Next.js website development and configuration' },
    { name: 'Website Speed Optimization', category: 'Core Web & SEO Services', desc: 'Optimize your site for maximum performance and speed' },
    { name: 'Core Web Vitals Fix', category: 'Core Web & SEO Services', desc: 'Fix Core Web Vitals to improve user experience and SEO' },
    { name: 'Technical SEO Setup', category: 'Core Web & SEO Services', desc: 'Complete technical SEO implementation and optimization' },
    { name: 'On-Page SEO Optimization', category: 'Core Web & SEO Services', desc: 'Optimize content and HTML elements for better rankings' },
    { name: 'SEO Website Audit', category: 'Core Web & SEO Services', desc: 'Comprehensive SEO audit to identify improvement opportunities' },
    { name: 'Google Search Console Setup', category: 'Core Web & SEO Services', desc: 'Set up and configure Google Search Console for tracking' },
    { name: 'Sitemap & Robots.txt Setup', category: 'Core Web & SEO Services', desc: 'Create and optimize sitemap and robots.txt files' },

    // Google & Analytics Services
    { name: 'Google Analytics Setup', category: 'Google & Analytics Services', desc: 'Implement Google Analytics for comprehensive tracking' },
    { name: 'Google Tag Manager Setup', category: 'Google & Analytics Services', desc: 'Set up GTM for efficient tag management' },
    { name: 'GSC Error Fixing', category: 'Google & Analytics Services', desc: 'Identify and fix errors in Google Search Console' },
    { name: 'Indexing & Crawl Issue Fix', category: 'Google & Analytics Services', desc: 'Resolve indexing and crawling issues for better visibility' },
    { name: 'Canonical & WWW Fix', category: 'Google & Analytics Services', desc: 'Fix canonical and WWW configuration issues' },
    { name: 'Open Graph Optimization', category: 'Google & Analytics Services', desc: 'Optimize social media sharing with Open Graph tags' },
    { name: 'Schema Markup Setup', category: 'Google & Analytics Services', desc: 'Implement schema markup for rich snippets' },
    { name: 'Brand Logo Schema', category: 'Google & Analytics Services', desc: 'Add brand logo schema for enhanced visibility' },
    { name: 'International SEO Setup', category: 'Google & Analytics Services', desc: 'Optimize for international markets and languages' },
    { name: 'Image SEO Optimization', category: 'Google & Analytics Services', desc: 'Optimize images for better search visibility' },

    // AI-Powered Services
    { name: 'AI SEO Blog Writing', category: 'AI-Powered Services', desc: 'AI-powered SEO-optimized blog content creation' },
    { name: 'AI Content Optimization', category: 'AI-Powered Services', desc: 'Optimize existing content with AI technology' },
    { name: 'AI Keyword Research', category: 'AI-Powered Services', desc: 'AI-driven keyword research for better targeting' },
    { name: 'AI Meta Tags Creation', category: 'AI-Powered Services', desc: 'Create compelling meta tags with AI assistance' },
    { name: 'AI FAQ Generation', category: 'AI-Powered Services', desc: 'Generate comprehensive FAQ sections with AI' },
    { name: 'AI Chatbot Setup', category: 'AI-Powered Services', desc: 'Implement AI-powered chatbots for customer support' },
    { name: 'AI Lead Automation', category: 'AI-Powered Services', desc: 'Automate lead generation with AI technology' },
    { name: 'AI Email Auto-Responder', category: 'AI-Powered Services', desc: 'Set up AI-powered email automation sequences' },
    { name: 'AI Customer Support Bot', category: 'AI-Powered Services', desc: '24/7 AI customer support solutions' },
    { name: 'AI Prompt Engineering', category: 'AI-Powered Services', desc: 'Custom AI prompt development for specific use cases' },

    // AdSense & Monetization
    { name: 'Google AdSense Approval Setup', category: 'AdSense & Monetization', desc: 'Get your site approved for AdSense monetization' },
    { name: 'AdSense Policy Fixes', category: 'AdSense & Monetization', desc: 'Address AdSense policy violations' },
    { name: 'ads.txt Implementation', category: 'AdSense & Monetization', desc: 'Implement ads.txt for proper ad serving' },
    { name: 'Consent Mode Setup', category: 'AdSense & Monetization', desc: 'Configure consent mode for privacy compliance' },
    { name: 'CMP Integration', category: 'AdSense & Monetization', desc: 'Integrate consent management platform' },
    { name: 'Monetization Strategy Setup', category: 'AdSense & Monetization', desc: 'Develop comprehensive monetization strategies' },

    // E-commerce & CRO
    { name: 'Shopify Website Setup', category: 'E-commerce & CRO', desc: 'Professional Shopify store development' },
    { name: 'Shopify SEO Optimization', category: 'E-commerce & CRO', desc: 'Optimize Shopify stores for search engines' },
    { name: 'Product Page Optimization', category: 'E-commerce & CRO', desc: 'Optimize product pages for conversions' },
    { name: 'Conversion Rate Optimization', category: 'E-commerce & CRO', desc: 'Improve conversion rates with data-driven strategies' },
    { name: 'Funnel Landing Pages', category: 'E-commerce & CRO', desc: 'Create high-converting sales funnels' },
    { name: 'Affiliate Website Setup', category: 'E-commerce & CRO', desc: 'Build affiliate marketing websites' },

    // Maintenance & Growth
    { name: 'Website Migration', category: 'Maintenance & Growth', desc: 'Seamless website migration with no downtime' },
    { name: 'Broken Link Fixing', category: 'Maintenance & Growth', desc: 'Identify and fix broken links to improve user experience' },
    { name: 'UX/UI Improvements', category: 'Maintenance & Growth', desc: 'Enhance user experience and interface design' },
    { name: 'Mobile Optimization', category: 'Maintenance & Growth', desc: 'Optimize websites for mobile devices' },
    { name: 'Website Security Setup', category: 'Maintenance & Growth', desc: 'Implement comprehensive website security measures' },
    { name: 'Backup & Recovery Setup', category: 'Maintenance & Growth', desc: 'Set up automated backup and recovery systems' },

    // Business Support
    { name: 'Online Presence Setup', category: 'Business Support', desc: 'Establish comprehensive online presence' },
    { name: 'Brand Trust Optimization', category: 'Business Support', desc: 'Build and optimize brand trust signals' },
    { name: 'Business Email Setup', category: 'Business Support', desc: 'Set up professional business email addresses' },
    { name: 'Subdomain Configuration', category: 'Business Support', desc: 'Configure subdomains for different purposes' },
    { name: 'Vercel Deployment Support', category: 'Business Support', desc: 'Professional Vercel deployment and management' },
    { name: 'Cloudinary Image Setup', category: 'Business Support', desc: 'Optimize image delivery with Cloudinary' },
    { name: 'Website Performance Audit', category: 'Business Support', desc: 'Comprehensive performance analysis and recommendations' },
    { name: 'Monthly SEO Maintenance', category: 'Business Support', desc: 'Ongoing SEO maintenance and optimization' },
    { name: 'Content Strategy Planning', category: 'Business Support', desc: 'Develop comprehensive content strategies' },
    { name: 'Blog Structure Setup', category: 'Business Support', desc: 'Plan and implement blog structure' },
    { name: 'Local + Global SEO Strategy', category: 'Business Support', desc: 'Strategies for both local and global markets' },
    { name: 'Full Website Management', category: 'Business Support', desc: 'Complete website management and maintenance' },
  ];

  // Group services by category
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 -z-10 transform -rotate-1 rounded-full blur-3xl"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">Our Services</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital & AI-powered solutions to grow your business globally. 
            From web development to SEO optimization, AI automation, and monetization strategies.
          </p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(groupedServices).map(([category, services], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8 pb-2 border-b border-indigo-200/30">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, serviceIndex) => (
                  <motion.div 
                    key={serviceIndex}
                    className="bg-gradient-to-br from-white to-gray-50 p-6 sm:p-7 rounded-2xl border border-indigo-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center relative overflow-hidden"
                    initial={{ opacity: 0, y: 20, rotateY: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 -z-10"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full -m-16"></div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 relative z-10">{service.name}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 relative z-10">{service.desc}</p>
                    <Link 
                      href={`/services/${service.name.toLowerCase().replace(/\./g, '').replace(/&/g, 'and').replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '').toLowerCase()}` as const}
                      className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md relative z-10 text-sm sm:text-base"
                    >
                      Learn more
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 -z-10 transform rotate-1 rounded-3xl blur-xl"></div>
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white relative z-10 shadow-2xl border border-white/20 backdrop-blur-sm">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto">Let us help you grow with our comprehensive digital solutions</p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;