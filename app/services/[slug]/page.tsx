'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';

// Helper functions to get service details
const getServiceDetails = (slug: string) => {
  const servicesMap: Record<string, any> = {

    'complete-website-development': {
      name: 'Complete Website Development',
      category: 'Core Web & SEO Services',
      description: 'Full custom website development with modern technologies like React, Next.js, and Node.js. We create responsive, fast, and SEO-optimized websites that convert visitors into customers.',
      details: [
        'Custom design and development',
        'Responsive and mobile-friendly',
        'SEO optimized structure',
        'Fast loading times',
        'Security implementation',
        'Contact forms and integrations',
        'Content Management System (CMS)',
        'Analytics setup'
      ],
      inclusions: [
        'Custom responsive design',
        'Up to 10 pages',
        'Contact form with email notifications',
        'SEO optimization',
        'Google Analytics setup',
        '3 months support',
        'Performance optimization'
      ],
      pricing: {
        international: '$1,200 - $2,500',
        description: 'Price varies based on complexity and features required. Basic sites start at $1,200 while complex e-commerce sites can go up to $2,500+.'
      }
    },
    'landing-page-design-and-development': {
      name: 'Landing Page Design & Development',
      category: 'Core Web & SEO Services',
      description: 'High-converting landing pages designed for maximum conversions. We focus on user experience, clear calls-to-action, and persuasive design elements to boost your conversion rates.',
      details: [
        'Conversion-focused design',
        'A/B testing setup',
        'Persuasive copywriting',
        'Lead capture forms',
        'Social proof integration',
        'Trust signals and badges',
        'Mobile optimization',
        'Speed optimization'
      ],
      inclusions: [
        'Single high-converting page',
        'Custom design',
        'Contact form',
        'Analytics setup',
        'Social media integration',
        '1 month support',
        'Performance optimization'
      ],
      pricing: {
        international: '$400 - $800',
        description: 'Simple landing pages start at $400 while complex conversion-optimized pages with advanced features cost $800+.'
      }
    },
    'nextjs-website-setup': {
      name: 'Next.js Website Setup',
      category: 'Core Web & SEO Services',
      description: 'Professional Next.js website development and configuration. We leverage the power of Next.js for optimal performance, SEO, and user experience.',
      details: [
        'Next.js framework setup',
        'Server-side rendering (SSR)',
        'Static site generation (SSG)',
        'API route configuration',
        'Routing setup',
        'Performance optimization',
        'SEO configuration',
        'Deployment setup'
      ],
      inclusions: [
        'Next.js project setup',
        'Custom components',
        'Routing configuration',
        'SEO optimization',
        'Performance setup',
        'Vercel deployment',
        '2 months support'
      ],
      pricing: {
        international: '$800 - $1,500',
        description: 'Basic Next.js setup starts at $800, while complex implementations with advanced features cost $1,500+.'
      }
    },
    'website-speed-optimization': {
      name: 'Website Speed Optimization',
      category: 'Core Web & SEO Services',
      description: 'Optimize your site for maximum performance and speed. We analyze and fix bottlenecks to ensure your site loads quickly for all users.',
      details: [
        'Performance audit',
        'Image optimization',
        'Code minification',
        'Caching setup',
        'CDN configuration',
        'Database optimization',
        'Server response time',
        'Core Web Vitals fixes'
      ],
      inclusions: [
        'Complete performance audit',
        'Image optimization',
        'Code minification',
        'Caching configuration',
        'CDN setup',
        'Core Web Vitals fixes',
        '1 month support'
      ],
      pricing: {
        international: '$300 - $600',
        description: 'Basic optimization starts at $300, comprehensive optimization packages cost $600+ depending on complexity.'
      }
    },
    'core-web-vitals-fix': {
      name: 'Core Web Vitals Fix',
      category: 'Core Web & SEO Services',
      description: 'Fix Core Web Vitals to improve user experience and SEO rankings. We ensure your site meets Google\'s performance standards.',
      details: [
        'Largest Contentful Paint (LCP) optimization',
        'First Input Delay (FID) reduction',
        'Cumulative Layout Shift (CLS) fixes',
        'Performance monitoring',
        'Technical SEO improvements',
        'User experience enhancements',
        'Google PageSpeed Insights',
        'Web Vitals reporting'
      ],
      inclusions: [
        'Complete Core Web Vitals audit',
        'LCP optimization',
        'FID reduction',
        'CLS fixes',
        'Performance report',
        'Monitoring setup',
        '2 weeks support'
      ],
      pricing: {
        international: '$250 - $500',
        description: 'Fixing all Core Web Vitals issues typically costs $250-$500 depending on the current state of the site.'
      }
    },
    'technical-seo-setup': {
      name: 'Technical SEO Setup',
      category: 'Core Web & SEO Services',
      description: 'Complete technical SEO implementation and optimization. We handle all the technical aspects to improve your site\'s visibility in search engines.',
      details: [
        'Site architecture optimization',
        'Schema markup implementation',
        'XML sitemap creation',
        'Robots.txt optimization',
        'Canonical tags setup',
        'Hreflang implementation',
        'Structured data markup',
        'Page speed optimization'
      ],
      inclusions: [
        'Technical SEO audit',
        'Schema markup setup',
        'Sitemap creation',
        'Robots.txt optimization',
        'Canonical tags',
        'Hreflang tags',
        'Performance fixes',
        '1 month support'
      ],
      pricing: {
        international: '$400 - $800',
        description: 'Basic technical SEO setup starts at $400, comprehensive packages cost $800+ depending on site size.'
      }
    },
    'on-page-seo-optimization': {
      name: 'On-Page SEO Optimization',
      category: 'Core Web & SEO Services',
      description: 'Optimize content and HTML elements for better rankings. We focus on optimizing individual pages to rank higher and earn more relevant traffic.',
      details: [
        'Keyword research and optimization',
        'Title tag optimization',
        'Meta description writing',
        'Header tag structure',
        'Internal linking strategy',
        'Content optimization',
        'Image alt tags',
        'URL structure optimization'
      ],
      inclusions: [
        'Keyword research',
        'Title and meta optimization',
        'Content optimization',
        'Internal linking',
        'Image optimization',
        'Technical fixes',
        'Report with recommendations'
      ],
      pricing: {
        international: '$300 - $600',
        description: 'Per page optimization costs $300-$600 depending on complexity and amount of content.'
      }
    },
    'seo-website-audit': {
      name: 'SEO Website Audit',
      category: 'Core Web & SEO Services',
      description: 'Comprehensive SEO audit to identify improvement opportunities. We analyze your site\'s performance and provide actionable recommendations.',
      details: [
        'Technical SEO analysis',
        'Content quality assessment',
        'Keyword gap analysis',
        'Competitor analysis',
        'Link profile review',
        'User experience evaluation',
        'Conversion rate analysis',
        'Detailed recommendations'
      ],
      inclusions: [
        'Complete SEO audit report',
        'Technical issues list',
        'Content recommendations',
        'Competitor analysis',
        'Keyword suggestions',
        'Action plan',
        '30-min consultation'
      ],
      pricing: {
        international: '$200 - $400',
        description: 'Basic audits start at $200, comprehensive audits with competitor analysis cost $400+.'
      }
    },
    'google-search-console-setup': {
      name: 'Google Search Console Setup',
      category: 'Core Web & SEO Services',
      description: 'Set up and configure Google Search Console for tracking your site\'s performance in Google search results.',
      details: [
        'Search Console account setup',
        'Property verification',
        'Performance monitoring',
        'Indexing status tracking',
        'Search queries analysis',
        'Click-through rate data',
        'Impressions and clicks',
        'Manual actions monitoring'
      ],
      inclusions: [
        'Account setup',
        'Property verification',
        'Initial configuration',
        'Performance setup',
        'Reporting dashboard',
        'Training session',
        '1 month support'
      ],
      pricing: {
        international: '$100 - $200',
        description: 'Setting up Google Search Console and initial configuration costs $100-$200.'
      }
    },
    'sitemap-and-robotstxt-setup': {
      name: 'Sitemap & Robots.txt Setup',
      category: 'Core Web & SEO Services',
      description: 'Create and optimize sitemap and robots.txt files to help search engines crawl and index your site properly.',
      details: [
        'XML sitemap creation',
        'Robots.txt optimization',
        'Priority settings',
        'Crawl directive setup',
        'Indexing instructions',
        'Exclusion rules',
        'Validation and testing',
        'Submission to search engines'
      ],
      inclusions: [
        'XML sitemap creation',
        'Robots.txt optimization',
        'Validation',
        'Search engine submission',
        'Testing',
        'Documentation',
        '1 week support'
      ],
      pricing: {
        international: '$100 - $200',
        description: 'Creating and optimizing sitemap and robots.txt files costs $100-$200.'
      }
    },
    'google-analytics-setup': {
      name: 'Google Analytics Setup',
      category: 'Google & Analytics Services',
      description: 'Implement Google Analytics for comprehensive tracking of your website traffic, user behavior, and conversions.',
      details: [
        'Analytics account setup',
        'Property configuration',
        'Tracking code implementation',
        'Goal setup',
        'E-commerce tracking',
        'Custom dimensions',
        'Dashboard creation',
        'Reporting setup'
      ],
      inclusions: [
        'GA4 account setup',
        'Tracking code installation',
        'Basic goals setup',
        'Dashboard configuration',
        'Initial report',
        'Training session',
        '1 month support'
      ],
      pricing: {
        international: '$150 - $300',
        description: 'Setting up Google Analytics 4 and basic configuration costs $150-$300.'
      }
    },
    'google-tag-manager-setup': {
      name: 'Google Tag Manager Setup',
      category: 'Google & Analytics Services',
      description: 'Set up GTM for efficient tag management. Implement various tracking tags without requiring code changes.',
      details: [
        'GTM account setup',
        'Container configuration',
        'Tag implementation',
        'Trigger setup',
        'Variable configuration',
        'Version control',
        'Testing and preview',
        'Documentation'
      ],
      inclusions: [
        'GTM account setup',
        'Container installation',
        'Basic tag setup',
        'Triggers configuration',
        'Testing',
        'Documentation',
        'Training session'
      ],
      pricing: {
        international: '$200 - $400',
        description: 'Setting up Google Tag Manager and implementing basic tags costs $200-$400.'
      }
    },
    'gsc-error-fixing': {
      name: 'GSC Error Fixing',
      category: 'Google & Analytics Services',
      description: 'Identify and fix errors in Google Search Console to improve your site\'s indexing and search performance.',
      details: [
        'Crawl error analysis',
        'Indexing issues resolution',
        'Mobile usability fixes',
        'Security issues handling',
        'Manual actions resolution',
        'AMP errors fixing',
        'Rich results issues',
        'Performance monitoring'
      ],
      inclusions: [
        'Complete error audit',
        'Error identification',
        'Fix implementation',
        'Verification',
        'Report',
        '2 weeks support',
        'Monitoring setup'
      ],
      pricing: {
        international: '$150 - $350',
        description: 'Fixing Google Search Console errors costs $150-$350 depending on the number and complexity of errors.'
      }
    },
    'indexing-crawl-issue-fix': {
      name: 'Indexing & Crawl Issue Fix',
      category: 'Google & Analytics Services',
      description: 'Resolve indexing and crawling issues for better visibility in search engines. We ensure search engines can properly access and index your content.',
      details: [
        'Crawl error identification',
        'Indexing issue resolution',
        'Robots.txt fixes',
        'Sitemap issues resolution',
        'Internal linking fixes',
        'Canonical tag issues',
        'Redirect handling',
        'Performance improvements'
      ],
      inclusions: [
        'Crawl error audit',
        'Indexing fixes',
        'Sitemap verification',
        'Robots.txt fixes',
        'Internal linking',
        'Canonical tags',
        'Report with fixes'
      ],
      pricing: {
        international: '$200 - $400',
        description: 'Resolving indexing and crawl issues costs $200-$400 depending on complexity.'
      }
    },
    'canonical-www-fix': {
      name: 'Canonical & WWW Fix',
      category: 'Google & Analytics Services',
      description: 'Fix canonical and WWW configuration issues to prevent duplicate content problems and ensure proper indexing.',
      details: [
        'Canonical tag implementation',
        'WWW vs non-WWW configuration',
        'Duplicate content resolution',
        'URL consistency fixes',
        'Redirect setup',
        'Verification methods',
        'Testing',
        'Monitoring'
      ],
      inclusions: [
        'Canonical tag setup',
        'WWW configuration',
        'Redirect implementation',
        'Testing',
        'Verification',
        'Documentation',
        '1 week support'
      ],
      pricing: {
        international: '$100 - $250',
        description: 'Fixing canonical and WWW issues costs $100-$250 depending on the number of pages.'
      }
    },
    'open-graph-optimization': {
      name: 'Open Graph Optimization',
      category: 'Google & Analytics Services',
      description: 'Optimize social media sharing with Open Graph tags. Improve how your content appears when shared on social platforms.',
      details: [
        'OG title optimization',
        'OG description setup',
        'OG image optimization',
        'Twitter card setup',
        'Social preview enhancement',
        'Brand consistency',
        'Performance tracking',
        'Testing across platforms'
      ],
      inclusions: [
        'Open Graph tags setup',
        'Twitter cards',
        'Social images',
        'Preview testing',
        'Optimization',
        'Documentation',
        '1 week support'
      ],
      pricing: {
        international: '$100 - $200',
        description: 'Setting up Open Graph optimization costs $100-$200.'
      }
    },
    'schema-markup-setup': {
      name: 'Schema Markup Setup',
      category: 'Google & Analytics Services',
      description: 'Implement schema markup for rich snippets. Enhance your search results with additional information that attracts more clicks.',
      details: [
        'Organization schema',
        'Local business schema',
        'Product schema',
        'Review schema',
        'FAQ schema',
        'Article schema',
        'Event schema',
        'Testing and validation'
      ],
      inclusions: [
        'Basic schema implementation',
        'Organization schema',
        'Product schema (if applicable)',
        'FAQ schema',
        'Testing',
        'Validation',
        'Documentation'
      ],
      pricing: {
        international: '$200 - $400',
        description: 'Implementing schema markup costs $200-$400 depending on the types of schema needed.'
      }
    },
    'brand-logo-schema': {
      name: 'Brand Logo Schema',
      category: 'Google & Analytics Services',
      description: 'Add brand logo schema for enhanced visibility. Help search engines display your logo in search results.',
      details: [
        'Logo schema implementation',
        'Image optimization',
        'Brand visibility enhancement',
        'Search result enhancement',
        'Corporate identity',
        'Verification methods',
        'Testing',
        'Performance tracking'
      ],
      inclusions: [
        'Logo schema markup',
        'Image optimization',
        'Implementation',
        'Testing',
        'Verification',
        'Documentation',
        '1 week support'
      ],
      pricing: {
        international: '$75 - $150',
        description: 'Adding brand logo schema costs $75-$150.'
      }
    },
    'international-seo-setup': {
      name: 'International SEO Setup',
      category: 'Google & Analytics Services',
      description: 'Optimize for international markets and languages. Help your site rank in different countries and languages.',
      details: [
        'Hreflang implementation',
        'Geotargeting setup',
        'Language alternatives',
        'Country-specific optimization',
        'Local search considerations',
        'Currency and date formats',
        'Legal compliance',
        'Performance tracking'
      ],
      inclusions: [
        'Hreflang tags',
        'Geotargeting setup',
        'Language alternatives',
        'Local SEO basics',
        'Testing',
        'Documentation',
        '2 weeks support'
      ],
      pricing: {
        international: '$300 - $600',
        description: 'International SEO setup costs $300-$600 depending on the number of countries/languages.'
      }
    },
    'image-seo-optimization': {
      name: 'Image SEO Optimization',
      category: 'Google & Analytics Services',
      description: 'Optimize images for better search visibility. Improve image loading times and searchability.',
      details: [
        'Alt text optimization',
        'File name optimization',
        'Image compression',
        'Lazy loading setup',
        'Image sitemaps',
        'Format optimization',
        'Responsive images',
        'Performance tracking'
      ],
      inclusions: [
        'Alt text optimization',
        'File name optimization',
        'Image compression',
        'Lazy loading',
        'Image sitemap',
        'Performance report',
        '1 month support'
      ],
      pricing: {
        international: '$150 - $300',
        description: 'Image SEO optimization costs $150-$300 depending on the number of images.'
      }
    },
    'ai-seo-blog-writing': {
      name: 'AI SEO Blog Writing',
      category: 'AI-Powered Services',
      description: 'AI-powered SEO-optimized blog content creation. High-quality, engaging content that ranks well in search engines.',
      details: [
        'Keyword research',
        'Content planning',
        'AI-powered writing',
        'SEO optimization',
        'Readability improvement',
        'Engaging headlines',
        'Internal linking',
        'Content promotion ideas'
      ],
      inclusions: [
        'Research and planning',
        'AI-generated content',
        'SEO optimization',
        'Proofreading',
        'Image suggestions',
        'Meta description',
        'Publishing guidelines'
      ],
      pricing: {
        international: '$25 - $50 per article',
        description: 'Per article pricing based on length and complexity. Basic articles start at $25, longer/complex articles cost $50+.'
      }
    },
    'ai-content-optimization': {
      name: 'AI Content Optimization',
      category: 'AI-Powered Services',
      description: 'Optimize existing content with AI technology. Improve readability, SEO, and engagement of your current content.',
      details: [
        'Content analysis',
        'Readability improvements',
        'SEO enhancement',
        'Engagement optimization',
        'Grammar and style',
        'Keyword integration',
        'Structure improvement',
        'Call-to-action optimization'
      ],
      inclusions: [
        'Content audit',
        'Optimization suggestions',
        'Revised content',
        'SEO improvements',
        'Readability enhancements',
        'Performance tracking',
        'Recommendations'
      ],
      pricing: {
        international: '$20 - $40 per page',
        description: 'Per page optimization based on content length. Basic optimization starts at $20, comprehensive optimization costs $40+.'
      }
    },
    'ai-keyword-research': {
      name: 'AI Keyword Research',
      category: 'AI-Powered Services',
      description: 'AI-driven keyword research for better targeting. Find high-value keywords with lower competition.',
      details: [
        'Keyword discovery',
        'Search volume analysis',
        'Competition assessment',
        'Long-tail keyword identification',
        'SERP analysis',
        'Keyword clustering',
        'Opportunity identification',
        'Performance prediction'
      ],
      inclusions: [
        'Comprehensive keyword list',
        'Search volume data',
        'Competition analysis',
        'Keyword clustering',
        'Opportunity report',
        'Implementation guide',
        '30-min consultation'
      ],
      pricing: {
        international: '$150 - $300',
        description: 'AI-powered keyword research costs $150-$300 depending on the depth of analysis.'
      }
    },
    'ai-meta-tags-creation': {
      name: 'AI Meta Tags Creation',
      category: 'AI-Powered Services',
      description: 'Create compelling meta tags with AI assistance. Improve click-through rates with optimized meta titles and descriptions.',
      details: [
        'Meta title optimization',
        'Meta description writing',
        'Keyword integration',
        'Emotional triggers',
        'CTA optimization',
        'Character limit adherence',
        'Testing suggestions',
        'Performance tracking'
      ],
      inclusions: [
        'Meta title creation',
        'Meta description writing',
        'Keyword optimization',
        'Testing recommendations',
        'Implementation',
        'Performance report',
        '1 week support'
      ],
      pricing: {
        international: '$100 - $250',
        description: 'Creating AI-optimized meta tags for a site costs $100-$250 depending on the number of pages.'
      }
    },
    'ai-faq-generation': {
      name: 'AI FAQ Generation',
      category: 'AI-Powered Services',
      description: 'Generate comprehensive FAQ sections with AI. Address customer questions and improve search visibility with structured content.',
      details: [
        'Question identification',
        'Answer generation',
        'Schema markup',
        'User intent matching',
        'Content organization',
        'Search optimization',
        'Customer insights',
        'Performance tracking'
      ],
      inclusions: [
        'FAQ research',
        'Question generation',
        'Answer creation',
        'Schema markup',
        'Organization',
        'Optimization',
        'Implementation'
      ],
      pricing: {
        international: '$150 - $300',
        description: 'Generating AI-powered FAQ sections costs $150-$300 depending on the number of FAQs needed.'
      }
    },
    'ai-chatbot-setup': {
      name: 'AI Chatbot Setup',
      category: 'AI-Powered Services',
      description: 'Implement AI-powered chatbots for customer support. Provide instant responses to customer queries and improve engagement.',
      details: [
        'Chatbot platform setup',
        'Conversation flow design',
        'Integration with website',
        'Knowledge base creation',
        'Natural language processing',
        'Response optimization',
        'Analytics setup',
        'Continuous learning'
      ],
      inclusions: [
        'Chatbot platform setup',
        'Basic conversation flows',
        'Website integration',
        'Knowledge base',
        'Initial training',
        'Analytics setup',
        '1 month support'
      ],
      pricing: {
        international: '$300 - $600',
        description: 'Setting up an AI chatbot costs $300-$600 depending on complexity and features needed.'
      }
    },
    'ai-lead-automation': {
      name: 'AI Lead Automation',
      category: 'AI-Powered Services',
      description: 'Automate lead generation with AI technology. Capture and nurture leads more effectively with intelligent automation.',
      details: [
        'Lead scoring setup',
        'Nurture sequence creation',
        'Email automation',
        'Behavioral tracking',
        'Segmentation rules',
        'Conversion optimization',
        'Performance monitoring',
        'ROI tracking'
      ],
      inclusions: [
        'Lead scoring system',
        'Nurture sequences',
        'Email templates',
        'Tracking setup',
        'Segmentation',
        'Performance dashboard',
        'Training session'
      ],
      pricing: {
        international: '$400 - $800',
        description: 'Setting up AI lead automation costs $400-$800 depending on complexity and integration requirements.'
      }
    },
    'ai-email-auto-responder': {
      name: 'AI Email Auto-Responder',
      category: 'AI-Powered Services',
      description: 'Set up AI-powered email automation sequences. Send personalized, timely responses based on user behavior.',
      details: [
        'Email sequence design',
        'Trigger setup',
        'Personalization rules',
        'A/B testing',
        'Performance tracking',
        'Segmentation',
        'Analytics integration',
        'Optimization'
      ],
      inclusions: [
        'Email sequence setup',
        'Trigger configuration',
        'Template creation',
        'Personalization',
        'Testing setup',
        'Analytics',
        '1 month support'
      ],
      pricing: {
        international: '$250 - $500',
        description: 'Setting up AI email automation costs $250-$500 depending on the number of sequences needed.'
      }
    },
    'ai-customer-support-bot': {
      name: 'AI Customer Support Bot',
      category: 'AI-Powered Services',
      description: '24/7 AI customer support solutions. Provide instant support to customers anytime, anywhere.',
      details: [
        'Support query handling',
        'Issue resolution',
        'Escalation protocols',
        'Knowledge base integration',
        'Multi-language support',
        'Integration with CRM',
        'Performance analytics',
        'Continuous learning'
      ],
      inclusions: [
        'Chatbot setup',
        'Knowledge base',
        'CRM integration',
        'Escalation rules',
        'Analytics setup',
        'Training data',
        '1 month support'
      ],
      pricing: {
        international: '$350 - $700',
        description: 'Setting up AI customer support bot costs $350-$700 depending on complexity and integration requirements.'
      }
    },
    'ai-prompt-engineering': {
      name: 'AI Prompt Engineering',
      category: 'AI-Powered Services',
      description: 'Custom AI prompt development for specific use cases. Optimize AI output for your specific business needs.',
      details: [
        'Prompt design',
        'Output optimization',
        'Use case analysis',
        'Performance testing',
        'Iteration and refinement',
        'Integration guidelines',
        'Best practices',
        'Documentation'
      ],
      inclusions: [
        'Custom prompt development',
        'Testing and optimization',
        'Implementation guidelines',
        'Documentation',
        'Training',
        'Refinement',
        'Best practices guide'
      ],
      pricing: {
        international: '$200 - $500',
        description: 'Custom AI prompt engineering costs $200-$500 depending on complexity and number of prompts needed.'
      }
    },
    'google-adsense-approval-setup': {
      name: 'Google AdSense Approval Setup',
      category: 'AdSense & Monetization',
      description: 'Get your site approved for AdSense monetization. Ensure your site meets all requirements for AdSense approval.',
      details: [
        'Content quality assessment',
        'Policy compliance check',
        'Design improvements',
        'Privacy policy creation',
        'Terms of service',
        'About us page',
        'Contact page',
        'Ad placement strategy'
      ],
      inclusions: [
        'Policy compliance check',
        'Content optimization',
        'Required pages creation',
        'Design improvements',
        'Ad placement plan',
        'Application assistance',
        '1 month support'
      ],
      pricing: {
        international: '$200 - $400',
        description: 'Preparing a site for AdSense approval costs $200-$400 depending on how much work is needed.'
      }
    },
    'adsense-policy-fixes': {
      name: 'AdSense Policy Fixes',
      category: 'AdSense & Monetization',
      description: 'Address AdSense policy violations. Ensure your site complies with all AdSense policies.',
      details: [
        'Policy violation audit',
        'Content compliance',
        'Design compliance',
        'Prohibited content removal',
        'Ad placement fixes',
        'Site functionality',
        'User experience',
        'Reconsideration request'
      ],
      inclusions: [
        'Policy audit',
        'Violation fixes',
        'Compliance verification',
        'Reconsideration request',
        'Testing',
        'Documentation',
        '1 month support'
      ],
      pricing: {
        international: '$150 - $300',
        description: 'Fixing AdSense policy violations costs $150-$300 depending on the number and complexity of violations.'
      }
    },
    'adstxt-implementation': {
      name: 'ads.txt Implementation',
      category: 'AdSense & Monetization',
      description: 'Implement ads.txt for proper ad serving. Ensure only authorized digital sellers can sell your inventory.',
      details: [
        'ads.txt file creation',
        'Publisher ID setup',
        'Authorized sellers',
        'Direct sellers',
        'Reseller verification',
        'File placement',
        'Testing',
        'Monitoring'
      ],
      inclusions: [
        'ads.txt file creation',
        'Publisher information',
        'Seller verification',
        'Implementation',
        'Testing',
        'Documentation',
        '1 week support'
      ],
      pricing: {
        international: '$75 - $150',
        description: 'Implementing ads.txt file costs $75-$150.'
      }
    },
    'consent-mode-setup': {
      name: 'Consent Mode Setup',
      category: 'AdSense & Monetization',
      description: 'Configure consent mode for privacy compliance. Ensure your tracking and advertising comply with privacy regulations.',
      details: [
        'Consent mode configuration',
        'Tag adjustment',
        'Privacy compliance',
        'User consent tracking',
        'Data usage',
        'Analytics impact',
        'Testing',
        'Documentation'
      ],
      inclusions: [
        'Consent mode setup',
        'Tag configuration',
        'Privacy compliance',
        'Testing',
        'Documentation',
        'Implementation guide',
        '1 week support'
      ],
      pricing: {
        international: '$200 - $400',
        description: 'Setting up consent mode costs $200-$400 depending on the complexity of your tracking setup.'
      }
    },
    'cmp-integration': {
      name: 'CMP Integration',
      category: 'AdSense & Monetization',
      description: 'Integrate consent management platform. Manage user consent for cookies and data usage.',
      details: [
        'CMP selection',
        'Platform integration',
        'Cookie banner',
        'Preference center',
        'Vendor management',
        'Compliance monitoring',
        'User experience',
        'Analytics integration'
      ],
      inclusions: [
        'CMP selection and setup',
        'Cookie banner',
        'Preference center',
        'Vendor configuration',
        'Testing',
        'Documentation',
        'Training'
      ],
      pricing: {
        international: '$300 - $600',
        description: 'Integrating a consent management platform costs $300-$600 depending on the platform and customization needed.'
      }
    },
    'monetization-strategy-setup': {
      name: 'Monetization Strategy Setup',
      category: 'AdSense & Monetization',
      description: 'Develop comprehensive monetization strategies. Maximize revenue from your website traffic.',
      details: [
        'Revenue analysis',
        'Monetization methods',
        'Ad placement strategy',
        'Content monetization',
        'Affiliate marketing',
        'Sponsored content',
        'Premium content',
        'Performance tracking'
      ],
      inclusions: [
        'Revenue audit',
        'Strategy development',
        'Ad placement plan',
        'Content strategy',
        'Implementation guide',
        'Performance tracking',
        '30-min consultation'
      ],
      pricing: {
        international: '$400 - $800',
        description: 'Developing a monetization strategy costs $400-$800 depending on the complexity and methods involved.'
      }
    },
    'shopify-website-setup': {
      name: 'Shopify Website Setup',
      category: 'E-commerce & CRO',
      description: 'Professional Shopify store development. Create a fully functional e-commerce store with payment processing and inventory management.',
      details: [
        'Store setup and configuration',
        'Theme customization',
        'Payment gateway integration',
        'Product catalog setup',
        'Shipping configuration',
        'Tax settings',
        'Inventory management',
        'Marketing tools integration'
      ],
      inclusions: [
        'Shopify account setup',
        'Theme customization',
        'Product upload',
        'Payment setup',
        'Shipping configuration',
        'Marketing apps',
        '2 months support'
      ],
      pricing: {
        international: '$500 - $1,200',
        description: 'Setting up a Shopify store costs $500-$1,200 depending on complexity and customization needed.'
      }
    },
    'shopify-seo-optimization': {
      name: 'Shopify SEO Optimization',
      category: 'E-commerce & CRO',
      description: 'Optimize Shopify stores for search engines. Improve visibility and organic traffic to your online store.',
      details: [
        'Product page optimization',
        'Category page optimization',
        'Technical SEO',
        'Site speed optimization',
        'Schema markup',
        'Internal linking',
        'URL structure',
        'Content optimization'
      ],
      inclusions: [
        'Technical SEO audit',
        'Product optimization',
        'Category optimization',
        'Schema markup',
        'Speed optimization',
        'Reporting',
        '1 month support'
      ],
      pricing: {
        international: '$300 - $600',
        description: 'Optimizing a Shopify store for SEO costs $300-$600 depending on the number of products and pages.'
      }
    },
    'product-page-optimization': {
      name: 'Product Page Optimization',
      category: 'E-commerce & CRO',
      description: 'Optimize product pages for conversions. Improve product descriptions, images, and calls-to-action to increase sales.',
      details: [
        'Product descriptions',
        'High-quality images',
        'Customer reviews',
        'Trust badges',
        'Urgency indicators',
        'Cross-selling',
        'Upselling strategies',
        'Mobile optimization'
      ],
      inclusions: [
        'Description optimization',
        'Image optimization',
        'Review system',
        'Trust elements',
        'Conversion elements',
        'Mobile optimization',
        'Performance report'
      ],
      pricing: {
        international: '$25 - $50 per product',
        description: 'Per product optimization based on complexity. Basic optimization starts at $25, comprehensive optimization costs $50+.'
      }
    },
    'conversion-rate-optimization': {
      name: 'Conversion Rate Optimization',
      category: 'E-commerce & CRO',
      description: 'Improve conversion rates with data-driven strategies. Analyze user behavior and optimize for better conversions.',
      details: [
        'Conversion funnel analysis',
        'A/B testing setup',
        'Heatmap analysis',
        'User behavior tracking',
        'Page optimization',
        'Form optimization',
        'Checkout optimization',
        'Performance tracking'
      ],
      inclusions: [
        'Conversion audit',
        'A/B testing setup',
        'Analytics implementation',
        'Optimization plan',
        'Testing tools',
        'Performance report',
        '2 months support'
      ],
      pricing: {
        international: '$400 - $800',
        description: 'Conversion rate optimization services cost $400-$800 depending on the scope of analysis and testing needed.'
      }
    },
    'funnel-landing-pages': {
      name: 'Funnel Landing Pages',
      category: 'E-commerce & CRO',
      description: 'Create high-converting sales funnels. Design targeted pages that guide visitors toward making a purchase.',
      details: [
        'Funnel strategy',
        'Landing page design',
        'Lead magnets',
        'Email sequences',
        'Upsells and downsells',
        'Payment processing',
        'Analytics tracking',
        'Optimization'
      ],
      inclusions: [
        'Funnel strategy',
        'Landing page design',
        'Lead magnet',
        'Email setup',
        'Payment integration',
        'Analytics',
        '1 month support'
      ],
      pricing: {
        international: '$500 - $1,000',
        description: 'Creating a complete sales funnel costs $500-$1,000 depending on the number of pages and complexity.'
      }
    },
    'affiliate-website-setup': {
      name: 'Affiliate Website Setup',
      category: 'E-commerce & CRO',
      description: 'Build affiliate marketing websites. Create sites focused on promoting and selling affiliate products.',
      details: [
        'Niche selection',
        'Content strategy',
        'Affiliate program setup',
        'Product reviews',
        'Comparison pages',
        'Monetization setup',
        'Traffic generation',
        'Performance tracking'
      ],
      inclusions: [
        'Website setup',
        'Content strategy',
        'Affiliate integration',
        'Review pages',
        'Monetization',
        'Analytics',
        '2 months support'
      ],
      pricing: {
        international: '$400 - $800',
        description: 'Setting up an affiliate website costs $400-$800 depending on the number of products and pages needed.'
      }
    },
    'website-migration': {
      name: 'Website Migration',
      category: 'Maintenance & Growth',
      description: 'Seamless website migration with no downtime. Move your site to a new platform or hosting provider safely.',
      details: [
        'Pre-migration audit',
        'Content backup',
        'Platform migration',
        'URL redirects',
        'SEO preservation',
        'Post-migration testing',
        'Performance optimization',
        'Monitoring'
      ],
      inclusions: [
        'Complete audit',
        'Backup and migration',
        'Redirect setup',
        'SEO preservation',
        'Testing',
        'Monitoring',
        '2 weeks support'
      ],
      pricing: {
        international: '$300 - $800',
        description: 'Website migration costs $300-$800 depending on the size and complexity of the site.'
      }
    },
    'broken-link-fixing': {
      name: 'Broken Link Fixing',
      category: 'Maintenance & Growth',
      description: 'Identify and fix broken links to improve user experience and SEO. Maintain a healthy link profile.',
      details: [
        'Link audit',
        'Broken link identification',
        'Redirect setup',
        'Internal link fixing',
        'External link verification',
        'Monitoring',
        'Reporting',
        'Prevention strategies'
      ],
      inclusions: [
        'Complete link audit',
        'Broken link report',
        'Redirect implementation',
        'Internal fixes',
        'Verification',
        'Report',
        '1 week support'
      ],
      pricing: {
        international: '$150 - $300',
        description: 'Fixing broken links costs $150-$300 depending on the number of broken links found.'
      }
    },
    'uxui-improvements': {
      name: 'UX/UI Improvements',
      category: 'Maintenance & Growth',
      description: 'Enhance user experience and interface design. Improve the look, feel, and usability of your website.',
      details: [
        'User experience audit',
        'Interface design',
        'Navigation improvements',
        'Visual hierarchy',
        'Accessibility',
        'Mobile optimization',
        'Performance',
        'Testing'
      ],
      inclusions: [
        'UX audit',
        'Design improvements',
        'Navigation updates',
        'Visual enhancements',
        'Mobile optimization',
        'Testing',
        '1 month support'
      ],
      pricing: {
        international: '$400 - $800',
        description: 'UX/UI improvements cost $400-$800 depending on the scope of changes needed.'
      }
    },
    'mobile-optimization': {
      name: 'Mobile Optimization',
      category: 'Maintenance & Growth',
      description: 'Optimize websites for mobile devices. Ensure your site performs well on smartphones and tablets.',
      details: [
        'Responsive design',
        'Mobile loading speed',
        'Touch navigation',
        'Mobile usability',
        'Mobile-first indexing',
        'Performance optimization',
        'Cross-device compatibility',
        'Testing'
      ],
      inclusions: [
        'Responsive design',
        'Speed optimization',
        'Mobile navigation',
        'Touch optimization',
        'Testing',
        'Performance report',
        '1 month support'
      ],
      pricing: {
        international: '$300 - $600',
        description: 'Mobile optimization costs $300-$600 depending on the complexity of the site.'
      }
    },
    'website-security-setup': {
      name: 'Website Security Setup',
      category: 'Maintenance & Growth',
      description: 'Implement comprehensive website security measures. Protect your site from threats and vulnerabilities.',
      details: [
        'SSL certificate setup',
        'Security plugins',
        'Firewall configuration',
        'Malware scanning',
        'Backup systems',
        'User authentication',
        'Monitoring',
        'Incident response'
      ],
      inclusions: [
        'SSL installation',
        'Security audit',
        'Plugin setup',
        'Backup system',
        'Monitoring',
        'Documentation',
        '1 month support'
      ],
      pricing: {
        international: '$200 - $500',
        description: 'Website security setup costs $200-$500 depending on the level of security needed.'
      }
    },
    'backup-recovery-setup': {
      name: 'Backup & Recovery Setup',
      category: 'Maintenance & Growth',
      description: 'Set up automated backup and recovery systems. Ensure your data is safe and can be restored quickly.',
      details: [
        'Backup strategy',
        'Automated backups',
        'Offsite storage',
        'Recovery testing',
        'Monitoring',
        'Scheduling',
        'Documentation',
        'Maintenance'
      ],
      inclusions: [
        'Backup system setup',
        'Automated scheduling',
        'Offsite storage',
        'Recovery testing',
        'Monitoring',
        'Documentation',
        '1 month support'
      ],
      pricing: {
        international: '$150 - $300',
        description: 'Backup and recovery setup costs $150-$300 depending on the complexity of the system.'
      }
    },
    'online-presence-setup': {
      name: 'Online Presence Setup',
      category: 'Business Support',
      description: 'Establish comprehensive online presence. Create and optimize your brand\'s visibility across digital channels.',
      details: [
        'Website development',
        'Social media setup',
        'Local listings',
        'Review management',
        'Content strategy',
        'Brand consistency',
        'Analytics setup',
        'Monitoring'
      ],
      inclusions: [
        'Website setup',
        'Social profiles',
        'Local listings',
        'Basic content',
        'Analytics',
        'Monitoring setup',
        '1 month support'
      ],
      pricing: {
        international: '$500 - $1,000',
        description: 'Setting up a comprehensive online presence costs $500-$1,000 depending on the number of channels.'
      }
    },
    'brand-trust-optimization': {
      name: 'Brand Trust Optimization',
      category: 'Business Support',
      description: 'Build and optimize brand trust signals. Improve credibility and trustworthiness in the eyes of customers.',
      details: [
        'Trust badges',
        'Customer testimonials',
        'Security certificates',
        'Privacy policies',
        'Terms of service',
        'About us page',
        'Contact information',
        'Professional design'
      ],
      inclusions: [
        'Trust badge setup',
        'Testimonial system',
        'Security certificates',
        'Policy pages',
        'Contact optimization',
        'Professional elements',
        '1 month support'
      ],
      pricing: {
        international: '$200 - $400',
        description: 'Brand trust optimization costs $200-$400 depending on the number of trust elements needed.'
      }
    },
    'business-email-setup': {
      name: 'Business Email Setup',
      category: 'Business Support',
      description: 'Set up professional business email addresses. Create emails that use your domain name for a professional appearance.',
      details: [
        'Email hosting setup',
        'Domain email creation',
        'Email client configuration',
        'Security setup',
        'Spam filtering',
        'Backup configuration',
        'Mobile setup',
        'Training'
      ],
      inclusions: [
        'Email hosting',
        'Professional emails',
        'Configuration',
        'Security setup',
        'Mobile setup',
        'Training',
        '1 month support'
      ],
      pricing: {
        international: '$100 - $250',
        description: 'Setting up business emails costs $100-$250 depending on the number of email accounts needed.'
      }
    },
    'subdomain-configuration': {
      name: 'Subdomain Configuration',
      category: 'Business Support',
      description: 'Configure subdomains for different purposes. Set up subdomains for specific functions or content sections.',
      details: [
        'Subdomain creation',
        'DNS configuration',
        'SSL certificates',
        'Content setup',
        'Redirects',
        'Analytics tracking',
        'Testing',
        'Documentation'
      ],
      inclusions: [
        'Subdomain setup',
        'DNS configuration',
        'SSL setup',
        'Content configuration',
        'Testing',
        'Documentation',
        '1 week support'
      ],
      pricing: {
        international: '$100 - $200',
        description: 'Configuring subdomains costs $100-$200 depending on the number of subdomains needed.'
      }
    },
    'vercel-deployment-support': {
      name: 'Vercel Deployment Support',
      category: 'Business Support',
      description: 'Professional Vercel deployment and management. Deploy and manage your Next.js and other frontend projects on Vercel.',
      details: [
        'Vercel account setup',
        'Project deployment',
        'Domain configuration',
        'Environment variables',
        'Build settings',
        'Monitoring',
        'Performance optimization',
        'Maintenance'
      ],
      inclusions: [
        'Vercel setup',
        'Project deployment',
        'Domain configuration',
        'Environment setup',
        'Performance optimization',
        'Monitoring',
        '1 month support'
      ],
      pricing: {
        international: '$150 - $350',
        description: 'Vercel deployment and setup costs $150-$350 depending on the complexity of the project.'
      }
    },
    'cloudinary-image-setup': {
      name: 'Cloudinary Image Setup',
      category: 'Business Support',
      description: 'Optimize image delivery with Cloudinary. Implement a powerful image and video management solution.',
      details: [
        'Cloudinary account setup',
        'Image optimization',
        'Transformation setup',
        'CDN configuration',
        'Integration',
        'Automation',
        'Performance monitoring',
        'Analytics'
      ],
      inclusions: [
        'Account setup',
        'Image optimization',
        'Transformation setup',
        'Integration',
        'Automation',
        'Performance report',
        '1 month support'
      ],
      pricing: {
        international: '$200 - $400',
        description: 'Setting up Cloudinary for image optimization costs $200-$400 depending on the complexity of the implementation.'
      }
    },
    'website-performance-audit': {
      name: 'Website Performance Audit',
      category: 'Business Support',
      description: 'Comprehensive performance analysis and recommendations. Evaluate your site\'s performance and identify improvement opportunities.',
      details: [
        'Speed analysis',
        'Core Web Vitals',
        'Mobile performance',
        'Server response time',
        'Resource optimization',
        'CDN evaluation',
        'Caching analysis',
        'Recommendations'
      ],
      inclusions: [
        'Complete performance audit',
        'Speed analysis',
        'Core Web Vitals report',
        'Recommendations',
        'Priority fixes',
        'Implementation guide',
        '30-min consultation'
      ],
      pricing: {
        international: '$200 - $400',
        description: 'Website performance audit costs $200-$400 depending on the depth of analysis needed.'
      }
    },
    'monthly-seo-maintenance': {
      name: 'Monthly SEO Maintenance',
      category: 'Business Support',
      description: 'Ongoing SEO maintenance and optimization. Regular updates and improvements to maintain and improve search rankings.',
      details: [
        'Ranking monitoring',
        'Content updates',
        'Technical SEO',
        'Link building',
        'Performance tracking',
        'Competitor analysis',
        'Report and recommendations',
        'Continuous optimization'
      ],
      inclusions: [
        'Monthly audit',
        'Content updates',
        'Technical fixes',
        'Performance report',
        'Competitor analysis',
        'Recommendations',
        'Ongoing support'
      ],
      pricing: {
        international: '$300 - $600 per month',
        description: 'Monthly SEO maintenance starts at $300, with more comprehensive packages costing $600+ per month.'
      }
    },
    'content-strategy-planning': {
      name: 'Content Strategy Planning',
      category: 'Business Support',
      description: 'Develop comprehensive content strategies. Plan and organize your content to achieve business goals.',
      details: [
        'Content audit',
        'Keyword research',
        'Content calendar',
        'Topic clusters',
        'Content formats',
        'Distribution strategy',
        'Performance metrics',
        'Optimization plan'
      ],
      inclusions: [
        'Content audit',
        'Strategy document',
        'Content calendar',
        'Topic clusters',
        'Format recommendations',
        'Distribution plan',
        'Performance tracking'
      ],
      pricing: {
        international: '$300 - $600',
        description: 'Content strategy planning costs $300-$600 depending on the scope and complexity of the plan.'
      }
    },
    'blog-structure-setup': {
      name: 'Blog Structure Setup',
      category: 'Business Support',
      description: 'Plan and implement blog structure. Organize your blog for optimal user experience and SEO performance.',
      details: [
        'Category organization',
        'Tag structure',
        'URL structure',
        'Internal linking',
        'Navigation setup',
        'SEO optimization',
        'User experience',
        'Analytics setup'
      ],
      inclusions: [
        'Structure planning',
        'Category setup',
        'URL structure',
        'Internal linking',
        'Navigation',
        'SEO optimization',
        'Implementation'
      ],
      pricing: {
        international: '$200 - $400',
        description: 'Setting up blog structure costs $200-$400 depending on the complexity of the organization needed.'
      }
    },
    'local-global-seo-strategy': {
      name: 'Local + Global SEO Strategy',
      category: 'Business Support',
      description: 'Strategies for both local and global markets. Optimize for local customers while maintaining global reach.',
      details: [
        'Local keyword research',
        'Google My Business',
        'Local citations',
        'Global keyword strategy',
        'International targeting',
        'Multi-location optimization',
        'Review management',
        'Performance tracking'
      ],
      inclusions: [
        'Local SEO strategy',
        'Global SEO strategy',
        'Keyword research',
        'Local optimization',
        'Global optimization',
        'Reporting',
        'Implementation guide'
      ],
      pricing: {
        international: '$500 - $1,000',
        description: 'Developing a local and global SEO strategy costs $500-$1,000 depending on the complexity and markets involved.'
      }
    },
    'full-website-management': {
      name: 'Full Website Management',
      category: 'Business Support',
      description: 'Complete website management and maintenance. All-inclusive service for ongoing website care.',
      details: [
        'Content updates',
        'Technical maintenance',
        'Security monitoring',
        'Performance optimization',
        'SEO maintenance',
        'Backup management',
        'Bug fixes',
        'Feature updates'
      ],
      inclusions: [
        'Content management',
        'Technical maintenance',
        'Security updates',
        'Performance optimization',
        'SEO monitoring',
        'Backup management',
        'Priority support'
      ],
      pricing: {
        international: '$500 - $1,200 per month',
        description: 'Full website management starts at $500, with comprehensive packages costing $1,200+ per month.'
      }
    }
  };

  return servicesMap[slug] || null;
};

const getServiceInclusions = (slug: string) => {
  const service = getServiceDetails(slug);
  if (service) {
    return service.inclusions;
  } else {
    // Return default inclusions for undefined services
    return [
      'Initial consultation',
      'Implementation',
      'Testing',
      'Documentation',
      '30-day support'
    ];
  }
};

const getServicePrice = (slug: string) => {
  const service = getServiceDetails(slug);
  if (service) {
    return service.pricing;
  } else {
    // Return default pricing for undefined services
    return {
      international: 'Contact for pricing',
      description: 'Pricing varies based on specific requirements. Contact us for a custom quote.'
    };
  }
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const serviceSlug = Array.isArray(slug) ? slug[0] : slug;
  
  const service = getServiceDetails(serviceSlug as string);

  // Create a default service object if service is not found
  const currentService = service || {
    name: serviceSlug ? serviceSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Service',
    category: 'General Services',
    description: 'Professional service to help grow your business with expert implementation and support.',
    details: [
      'Professional consultation',
      'Expert implementation',
      'Quality assurance',
      'Ongoing support'
    ],
    inclusions: [
      'Initial consultation',
      'Implementation',
      'Testing',
      'Documentation',
      '30-day support'
    ],
    pricing: {
      international: 'Contact for pricing',
      description: 'Pricing varies based on specific requirements. Contact us for a custom quote.'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href="/services" className="text-blue-600 hover:underline">Services</Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-900">{currentService.name}</span>
        </nav>

        {/* Service Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            {currentService.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{currentService.name}</h1>
          <p className="text-xl text-gray-600 max-w-4xl">{currentService.description}</p>
        </motion.div>

        {/* Pricing Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">International Market Pricing</h2>
              <p className="text-3xl font-bold text-blue-600">{currentService.pricing.international}</p>
              <p className="text-gray-600 mt-2">{currentService.pricing.description}</p>
            </div>
            <Link 
              href="/contact" 
              className="mt-4 md:mt-0 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors text-center"
            >
              Get This Service
            </Link>
          </div>
        </motion.div>

        {/* Service Details */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Details</h2>
            <div className="prose prose-lg max-w-none">
              <ul className="space-y-3">
                {currentService.details.map((detail: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Inclusions Sidebar */}
          <div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
              <ul className="space-y-3">
                {currentService.inclusions.map((inclusion: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{inclusion}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact" 
                className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-full text-center font-medium hover:bg-blue-700 transition-colors block"
              >
                Order Now
              </Link>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">Let us help you grow with our comprehensive digital solutions</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
              >
                Explore Other Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;