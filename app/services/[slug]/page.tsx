'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';

// Helper functions to get service details
const getServiceDetails = (slug: string) => {
  const servicesMap: Record<string, any> = {

    // AI Automation Services
    'lead-qualification-automation': {
      name: 'Lead Qualification Automation',
      category: 'AI Automation & AI Agents',
      description: 'An AI-powered lead qualification system that automatically analyzes, scores, and routes leads so your sales team focuses only on high-intent opportunities.',
      details: [
        'AI-driven lead scoring and intent analysis',
        'Automated lead categorization and routing',
        'Custom qualification logic based on your sales process',
        'Real-time lead evaluation and prioritization',
        'CRM integrations (HubSpot, Salesforce, Zoho, Pipedrive)',
        'Performance tracking and analytics dashboard',
        'Advanced workflows and custom logic',
        'Multi-channel lead scoring'
      ],
      inclusions: [
        'Strategy and discovery session',
        'Custom n8n automation workflow',
        'AI model and prompt configuration',
        'CRM integration and testing',
        'Analytics and performance setup',
        'Workflow documentation',
        '90-day post-launch support'
      ],
      useCases: [
        'B2B SaaS companies with high lead volume',
        'Real estate agencies managing multiple prospects',
        'Consulting firms with complex sales cycles',
        'E-commerce businesses with seasonal spikes'
      ],
      pricing: {
        international: '$1,500',
        description: 'Starting from $1,500. Pricing depends on lead volume, data sources, and CRM integrations. Advanced workflows and custom logic are quoted separately.'
      }
    },
    'customer-support-automation-email-whatsapp-chat': {
      name: 'Customer Support Automation (Email / WhatsApp / Chat)',
      category: 'AI Automation & AI Agents',
      description: 'An AI-powered customer support automation system that handles repetitive queries, responds instantly across channels, and escalates only complex issues to human agents.',
      details: [
        'AI-based message understanding',
        'Automated replies via WhatsApp, chat, and email',
        'Smart ticket categorization',
        'Human escalation rules',
        'CRM & helpdesk integrations',
        'Customer support analytics dashboard',
        'Multi-channel support automation',
        'Natural language processing'
      ],
      inclusions: [
        'Support workflow strategy & design',
        'Custom n8n automation setup',
        'AI prompt and response tuning',
        'Channel integration (WhatsApp, Email, Chat)',
        'Testing & quality assurance',
        'Documentation',
        '90-day post-launch support'
      ],
      useCases: [
        'SaaS customer support',
        'E-commerce inquiries',
        'Service-based businesses',
        'Appointment & booking queries'
      ],
      pricing: {
        international: '$1,800',
        description: 'Starting from $1,800. Final pricing depends on support volume, channels, and integrations.'
      }
    },
    'invoice-and-payment-follow-up-automation': {
      name: 'Invoice & Payment Follow-up Automation',
      category: 'AI Automation & AI Agents',
      description: 'A smart automation system that tracks invoices, sends personalized payment reminders, and updates payment status automatically—without manual follow-ups.',
      details: [
        'Automated invoice tracking',
        'AI-generated payment reminders',
        'Due date and overdue logic',
        'Payment confirmation detection',
        'Accounting software integration',
        'Payment status dashboard'
      ],
      inclusions: [
        'Workflow planning & logic design',
        'Custom n8n automation',
        'Accounting system integration',
        'Reminder message templates',
        'Testing & validation',
        'Documentation',
        '90-day support'
      ],
      useCases: [
        'Agencies & consultants',
        'Subscription businesses',
        'Service providers',
        'Freelancers with recurring invoices'
      ],
      pricing: {
        international: '$1,500',
        description: 'Starting from $1,500. Pricing varies based on invoice volume and accounting integrations.'
      }
    },
    'recruitment-screening-automation': {
      name: 'Recruitment Screening Automation',
      category: 'AI Automation & AI Agents',
      description: 'AI-driven recruitment automation that screens resumes, scores candidates, and shortlists top talent based on role-specific criteria.',
      details: [
        'Resume parsing & data extraction',
        'AI-based candidate scoring',
        'Role-specific qualification rules',
        'Automated shortlisting',
        'HR system integration',
        'Recruitment analytics dashboard',
        'Skills assessment automation',
        'Candidate communication'
      ],
      inclusions: [
        'Hiring workflow design',
        'AI screening logic setup',
        'Resume parsing configuration',
        'ATS or HR tool integration',
        'Testing & scoring validation',
        'Documentation',
        '90-day post-launch support'
      ],
      useCases: [
        'Startups hiring fast',
        'Recruitment agencies',
        'Remote teams',
        'High-volume hiring roles'
      ],
      pricing: {
        international: '$2,000',
        description: 'Starting from $2,000. Final cost depends on number of roles, applications, and screening logic.'
      }
    },
    'social-media-content-and-posting-automation': {
      name: 'Social Media Content & Posting Automation',
      category: 'AI Automation & AI Agents',
      description: 'An AI-powered social media automation system that plans, creates, schedules, and tracks content across platforms—saving time while maintaining consistency and performance.',
      details: [
        'AI-assisted content generation',
        'Automated post scheduling',
        'Multi-platform publishing (Instagram, Facebook, LinkedIn, X)',
        'Content calendar automation',
        'Performance tracking & insights',
        'Brand tone consistency'
      ],
      inclusions: [
        'Content workflow strategy',
        'Custom n8n automation setup',
        'AI prompt & content logic configuration',
        'Platform integrations',
        'Testing & scheduling validation',
        'Documentation',
        '90-day post-launch support'
      ],
      useCases: [
        'Marketing agencies',
        'SaaS brands',
        'E-commerce businesses',
        'Personal brands & founders'
      ],
      pricing: {
        international: '$1,700',
        description: 'Starting from $1,700. Pricing depends on platforms, posting frequency, and content complexity.'
      }
    },
    'automated-business-report-generation': {
      name: 'Automated Business Report Generation',
      category: 'AI Automation & AI Agents',
      description: 'AI automation that transforms raw business data into clear, structured reports delivered automatically on a fixed schedule.',
      details: [
        'Automated data collection',
        'AI-based data analysis & summaries',
        'Scheduled report generation',
        'PDF / Google Docs / Dashboard output',
        'Multi-source data integration',
        'Executive-ready insights',
        'Custom report templates',
        'Data visualization'
      ],
      inclusions: [
        'Reporting workflow design',
        'Data source integration',
        'AI analysis & summary prompts',
        'Report formatting setup',
        'Testing & accuracy checks',
        'Documentation',
        '90-day support'
      ],
      useCases: [
        'Management & leadership teams',
        'Agencies reporting to clients',
        'Finance & operations teams',
        'Performance tracking dashboards'
      ],
      pricing: {
        international: '$2,200',
        description: 'Starting from $2,200. Final pricing depends on data sources, report frequency, and complexity.'
      }
    },
    'email-sorting-and-priority-automation': {
      name: 'Email Sorting & Priority Automation',
      category: 'AI Automation & AI Agents',
      description: 'A smart email automation system that categorizes, prioritizes, and routes emails automatically so teams focus only on what matters.',
      details: [
        'AI-powered email classification',
        'Priority tagging (urgent, normal, low)',
        'Automated routing to teams',
        'SLA-based escalation rules',
        'Spam & noise reduction',
        'Email analytics dashboard'
      ],
      inclusions: [
        'Email workflow strategy',
        'Custom n8n automation',
        'AI classification prompt setup',
        'Email provider integration',
        'Testing & rule validation',
        'Documentation',
        '90-day post-launch support'
      ],
      useCases: [
        'Customer support teams',
        'Sales inbox management',
        'Operations & admin teams',
        'High-volume email businesses'
      ],
      pricing: {
        international: '$1,400',
        description: 'Starting from $1,400. Pricing varies based on email volume and routing complexity.'
      }
    },
    'crm-data-cleaning-and-management-automation': {
      name: 'CRM Data Cleaning & Management Automation',
      category: 'AI Automation & AI Agents',
      description: 'An AI-powered automation system that continuously cleans, validates, and maintains CRM data accuracy—ensuring your sales and marketing teams work with reliable information.',
      details: [
        'Automated duplicate detection',
        'Data validation and normalization',
        'AI-based data enrichment',
        'Scheduled CRM maintenance workflows',
        'Multi-CRM support (HubSpot, Salesforce, Zoho)',
        'Data quality monitoring dashboard'
      ],
      inclusions: [
        'Data audit & cleanup strategy',
        'Custom n8n automation workflow',
        'CRM integration and testing',
        'Data rules and validation setup',
        'Documentation',
        '90-day post-launch support',
        'Data governance setup'
      ],
      useCases: [
        'Sales teams with large CRMs',
        'Marketing automation systems',
        'Growing SaaS businesses',
        'Agencies managing multiple CRMs'
      ],
      pricing: {
        international: '$1,600',
        description: 'Starting from $1,600. Pricing depends on CRM size, data sources, and cleaning logic.'
      }
    },
    'e-commerce-order-and-refund-automation': {
      name: 'E-commerce Order & Refund Automation',
      category: 'AI Automation & AI Agents',
      description: 'A smart automation system that manages orders, refunds, and customer notifications automatically—reducing manual workload and improving customer experience.',
      details: [
        'Automated order processing',
        'Refund and cancellation workflows',
        'Customer notifications via email or WhatsApp',
        'Inventory and status updates',
        'E-commerce platform integrations',
        'Order performance dashboard'
      ],
      inclusions: [
        'Order automation workflow design',
        'Platform integration (Shopify, WooCommerce)',
        'Refund logic configuration',
        'Notification templates',
        'Testing & error handling',
        'Documentation',
        '90-day support'
      ],
      useCases: [
        'Shopify & WooCommerce stores',
        'DTC brands',
        'Subscription-based e-commerce',
        'High-volume online sellers'
      ],
      pricing: {
        international: '$2,500',
        description: 'Starting from $2,500. Final pricing depends on store size, platforms, and refund logic.'
      }
    },
    'sop-and-internal-process-automation': {
      name: 'SOP & Internal Process Automation',
      category: 'AI Automation & AI Agents',
      description: 'AI-powered SOP automation that guides teams through internal processes, ensures consistency, and reduces operational errors.',
      details: [
        'SOP digitization and automation',
        'Step-by-step AI guidance',
        'Role-based task routing',
        'Process compliance tracking',
        'Internal knowledge integration',
        'Performance insights dashboard'
      ],
      inclusions: [
        'SOP discovery and mapping',
        'Custom n8n workflow setup',
        'AI prompt and logic configuration',
        'Testing & optimization',
        'Documentation',
        '90-day post-launch support',
        'Training and documentation'
      ],
      useCases: [
        'Operations-heavy businesses',
        'Remote teams',
        'Scaling startups',
        'Agencies & service providers'
      ],
      pricing: {
        international: '$2,000',
        description: 'Starting from $2,000. Pricing varies based on SOP complexity and team size.'
      }
    },

    // AI Agents Services
    'sales-ai-agent': {
      name: 'Sales AI Agent',
      category: 'AI Automation & AI Agents',
      description: 'AI-powered sales assistant that identifies leads, predicts conversions, and automates follow-ups to maximize revenue and reduce manual sales effort.',
      details: [
        'Lead scoring & qualification automation',
        'Automated follow-ups & reminders',
        'CRM integration & data sync',
        'Sales performance tracking',
        'Personalized AI insights for prospects',
        'Revenue forecasting'
      ],
      inclusions: [
        'Sales process discovery & mapping',
        'Custom n8n workflow setup',
        'AI prompt & logic configuration',
        'Testing & optimization',
        'Documentation',
        '90-day post-launch support'
      ],
      useCases: [
        'B2B & B2C sales teams',
        'Startups scaling revenue',
        'Remote sales teams',
        'Agencies offering lead generation'
      ],
      pricing: {
        international: '$2,500',
        description: 'Starting from $2,500. Pricing varies based on sales pipeline complexity and CRM integrations.'
      }
    },
    'hr-and-hiring-ai-agent': {
      name: 'HR & Hiring AI Agent',
      category: 'AI Automation & AI Agents',
      description: 'AI-driven HR assistant that streamlines recruitment, onboarding, and employee management while improving decision-making and reducing manual workload.',
      details: [
        'Resume screening & ranking',
        'Candidate matching & interview scheduling',
        'Onboarding automation',
        'Employee performance tracking',
        'HR policy compliance monitoring',
        'AI insights for workforce planning'
      ],
      inclusions: [
        'HR process discovery & mapping',
        'Custom n8n workflow setup',
        'AI prompt & logic configuration',
        'Testing & optimization',
        'Documentation',
        '90-day post-launch support'
      ],
      useCases: [
        'Fast-growing startups',
        'Enterprises with large recruitment pipelines',
        'Remote HR teams',
        'Agencies managing multiple clients'
      ],
      pricing: {
        international: '$2,000',
        description: 'Starting from $2,000. Pricing varies based on team size and recruitment complexity.'
      }
    },
    'research-and-market-analysis-ai-agent': {
      name: 'Research & Market Analysis AI Agent',
      category: 'AI Automation & AI Agents',
      description: 'AI-powered research assistant that collects, analyzes, and interprets market data to support strategic business decisions and stay ahead of competition.',
      details: [
        'Automated market trend monitoring',
        'Competitor analysis & benchmarking',
        'Customer sentiment analysis',
        'Data visualization & reporting',
        'Actionable AI insights',
        'Predictive forecasting'
      ],
      inclusions: [
        'Research process mapping & setup',
        'Custom n8n workflow creation',
        'AI logic & prompt configuration',
        'Testing & optimization',
        'Documentation',
        '90-day post-launch support'
      ],
      useCases: [
        'Startups & enterprises seeking market intelligence',
        'Product development & strategy teams',
        'Agencies providing research services',
        'Investors & business consultants'
      ],
      pricing: {
        international: '$2,200',
        description: 'Starting from $2,200. Pricing varies based on data sources, analysis complexity, and reporting requirements.'
      }
    },
    'content-strategist-ai-agent': {
      name: 'Content Strategist AI Agent',
      category: 'AI Automation & AI Agents',
      description: 'AI-powered content strategist that plans, creates, and optimizes content to boost engagement, SEO performance, and audience growth.',
      details: [
        'Content planning & calendar automation',
        'SEO keyword research & optimization',
        'AI-assisted copywriting & editing',
        'Multi-channel content distribution',
        'Performance tracking & analytics',
        'Audience engagement insights'
      ],
      inclusions: [
        'Content strategy discovery & mapping',
        'Custom n8n workflow setup',
        'AI prompt & logic configuration',
        'Testing & optimization',
        'Documentation',
        '90-day post-launch support'
      ],
      useCases: [
        'Marketing teams scaling content output',
        'Bloggers & influencers',
        'Agencies offering content services',
        'Startups building brand awareness'
      ],
      pricing: {
        international: '$2,000',
        description: 'Starting from $2,000. Pricing varies based on content volume, channels, and complexity.'
      }
    },
    'customer-success-ai-agent': {
      name: 'Customer Success AI Agent',
      category: 'AI Automation & AI Agents',
      description: 'AI-powered assistant that enhances customer support, automates follow-ups, and ensures customer satisfaction and retention.',
      details: [
        'Automated ticket triage & routing',
        'AI-driven responses & chatbots',
        'Customer onboarding automation',
        'Feedback collection & analysis',
        'Customer retention insights',
        'Performance dashboards for support teams'
      ],
      inclusions: [
        'Customer journey mapping & automation setup',
        'Custom n8n workflow creation',
        'AI logic & prompt configuration',
        'Testing & optimization',
        'Documentation',
        '90-day post-launch support'
      ],
      useCases: [
        'SaaS & tech companies',
        'E-commerce & service providers',
        'Customer support teams scaling operations',
        'Agencies managing client support'
      ],
      pricing: {
        international: '$2,200',
        description: 'Starting from $2,200. Pricing varies based on support channels, volume, and automation complexity.'
      }
    },
    'finance-and-cash-flow-ai-agent': {
      name: 'Finance & Cash Flow AI Agent',
      category: 'AI Automation & AI Agents',
      description: 'AI-driven finance assistant that monitors cash flow, predicts trends, and automates financial reporting to help businesses make smarter decisions.',
      details: [
        'Cash flow monitoring & forecasting',
        'Invoice & expense tracking automation',
        'Budget planning & alerts',
        'Financial reporting dashboards',
        'AI-powered insights for decision-making',
        'Compliance monitoring'
      ],
      inclusions: [
        'Finance process mapping & discovery',
        'Custom n8n workflow setup',
        'AI prompt & logic configuration',
        'Testing & optimization',
        'Documentation',
        '90-day post-launch support'
      ],
      useCases: [
        'Small & medium enterprises',
        'Startups managing tight cash flow',
        'Accounting & finance teams',
        'Agencies offering financial consulting'
      ],
      pricing: {
        international: '$2,500',
        description: 'Starting from $2,500. Pricing varies based on business size, transactions, and reporting requirements.'
      }
    },
    'legal-assistant-ai-agent': {
      name: 'Legal Assistant AI Agent',
      category: 'AI Automation & AI Agents',
      description: 'AI-powered legal assistant that automates contract review, compliance checks, and legal research, reducing risk and saving time for businesses.',
      details: [
        'Contract drafting & review automation',
        'Legal research & case analysis',
        'Compliance monitoring & alerts',
        'Risk assessment & reporting',
        'Document management & tracking',
        'AI insights for informed legal decisions'
      ],
      inclusions: [
        'Legal process discovery & mapping',
        'Custom n8n workflow setup',
        'AI prompt & logic configuration',
        'Testing & optimization',
        'Documentation',
        '90-day post-launch support'
      ],
      useCases: [
        'Law firms',
        'Startups & enterprises managing contracts',
        'Compliance-heavy industries',
        'Agencies providing legal services'
      ],
      pricing: {
        international: '$2,500',
        description: 'Starting from $2,500. Pricing varies based on case complexity, contract volume, and regulatory requirements.'
      }
    },
    'operations-manager-ai-agent': {
      name: 'Operations Manager AI Agent',
      category: 'AI Automation & AI Agents',
      description: 'AI-driven operations assistant that streamlines workflows, automates task management, and ensures operational efficiency across teams.',
      details: [
        'Task allocation & workflow automation',
        'Performance tracking & reporting',
        'Resource planning & optimization',
        'Role-based task routing',
        'Operational compliance monitoring',
        'AI insights for process improvement'
      ],
      inclusions: [
        'Operations mapping & discovery',
        'Custom n8n workflow setup',
        'AI prompt & logic configuration',
        'Testing & optimization',
        'Documentation',
        '90-day post-launch support'
      ],
      useCases: [
        'Large teams & remote operations',
        'Startups scaling processes',
        'Agencies managing multiple clients',
        'Operations-heavy enterprises'
      ],
      pricing: {
        international: '$2,200',
        description: 'Starting from $2,200. Pricing varies based on team size, workflow complexity, and automation scope.'
      }
    },
    'e-commerce-growth-ai-agent': {
      name: 'E-commerce Growth AI Agent',
      category: 'AI Automation & AI Agents',
      description: 'AI-powered e-commerce assistant that automates sales, marketing, and customer engagement to boost online revenue and growth.',
      details: [
        'Automated product listing optimization',
        'Dynamic pricing & inventory tracking',
        'AI-driven marketing campaigns',
        'Customer behavior analytics',
        'Sales performance dashboards',
        'Retention & loyalty insights'
      ],
      inclusions: [
        'E-commerce workflow mapping & setup',
        'Custom n8n workflow creation',
        'AI prompt & logic configuration',
        'Testing & optimization',
        'Documentation',
        '90-day post-launch support'
      ],
      useCases: [
        'Online stores & marketplaces',
        'Dropshipping & retail businesses',
        'Marketing & growth teams',
        'Agencies managing e-commerce clients'
      ],
      pricing: {
        international: '$2,500',
        description: 'Starting from $2,500. Pricing varies based on store size, product catalog, and automation features.'
      }
    },
    'founder-executive-assistant-ai-agent': {
      name: 'Founder / Executive Assistant AI Agent',
      category: 'AI Automation & AI Agents',
      description: 'AI-powered executive assistant that manages scheduling, communications, and strategic tasks, giving founders and executives more time to focus on growth.',
      details: [
        'Calendar & meeting management automation',
        'Email & communication triage',
        'Task prioritization & reminders',
        'Strategic insights & reporting',
        'Workflow integration across tools',
        'AI-powered decision support'
      ],
      inclusions: [
        'Executive workflow discovery & mapping',
        'Custom n8n workflow setup',
        'AI prompt & logic configuration',
        'Testing & optimization',
        'Documentation',
        '90-day post-launch support'
      ],
      useCases: [
        'Founders & CEOs managing multiple priorities',
        'Executive teams scaling operations',
        'Startups with limited administrative resources',
        'Agencies supporting high-level executives'
      ],
      pricing: {
        international: '$2,500',
        description: 'Starting from $2,500. Pricing varies based on task complexity, team integration, and automation requirements.'
      }
    },

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
    useCases: [],
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
            
            {/* Use Cases Section */}
            {currentService.useCases && currentService.useCases.length > 0 && (
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Cases</h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="space-y-3">
                    {currentService.useCases.map((useCase: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
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