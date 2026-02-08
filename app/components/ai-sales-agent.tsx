'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AISalesAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'form'>('chat'); // Toggle between chat and form
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! 👋 Welcome to SM AGENCY. I'm your dedicated Sales & Qualification Agent. I'm available 24/7 to assist you with our services and guide you through placing your orders. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    service: '',
    projectIntent: '',
    budget: '',
    timeline: '',
    decisionAuthority: '',
    companyName: '',
    companyWebsite: '',
    businessType: '',
    problemDescription: '',
    toolsUsed: [] as string[],
    consultationPreference: '',
    professionalAck: false,
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [seriousnessLevel, setSeriousnessLevel] = useState<'High' | 'Medium' | 'Low' | null>(null);
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [showMeetingScheduler, setShowMeetingScheduler] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    greeting: "Hello! 👋 I'm your dedicated Sales & Qualification Agent at SM AGENCY. I'm here 24/7 to help you with any questions about our services. How can I assist you today?",
    welcome: "Welcome to SM AGENCY! I'm your AI Sales Agent, available round the clock to help you. We specialize in transforming businesses through cutting-edge AI solutions, web development, and digital marketing. What specific service are you interested in learning more about?",
    
    // Service-specific responses
    web_dev: "Our Web Development services include:\n\n• Complete Website Development (Next.js, React, modern frameworks)\n• Landing Page Design & Optimization\n• E-commerce Solutions (Shopify, custom stores)\n• Website Speed & Performance Optimization\n• Mobile-First Responsive Design\n\nPricing: $500-$5000+ depending on complexity\nTimeline: 2-6 weeks\n\nWould you like me to guide you to our detailed form for a custom quote?",
    
    seo: "Our SEO Optimization services:\n\n• Technical SEO Audit & Fixes\n• On-Page SEO Optimization\n• Keyword Research & Strategy\n• Content Optimization\n• Google Search Console Setup\n• Local & International SEO\n\nPricing: $300-$2000+ per month\nTimeline: Results in 3-6 months\n\nReady for a consultation? I can connect you with our SEO experts.",
    
    ai_automation: "Our AI Automation solutions:\n\n• Lead Qualification AI Agents\n• Customer Support Chatbots\n• Invoice & Payment Follow-up\n• Recruitment Screening Automation\n• Social Media Content Automation\n• Custom AI Workflows\n\nPricing: $1000-$10,000+ depending on complexity\nTimeline: 2-8 weeks\n\nWant to see how AI can transform your business processes?",
    
    digital_marketing: "Our Digital Marketing services:\n\n• Google Ads Management\n• Social Media Marketing\n• Content Strategy & Creation\n• Email Marketing Automation\n• Conversion Rate Optimization\n• Analytics & Reporting\n\nPricing: $500-$5000+ per month\nTimeline: Ongoing campaigns\n\nLet's discuss your marketing goals and budget.",
    
    ecommerce: "Our E-commerce Solutions:\n\n• Shopify Store Setup & Customization\n• Product Page Optimization\n• Payment Gateway Integration\n• Inventory Management Systems\n• Conversion Optimization\n• Order Fulfillment Automation\n\nPricing: $1000-$15,000+\nTimeline: 4-12 weeks\n\nReady to launch or optimize your online store?",
    
    services: "We offer comprehensive services in 5 main areas:\n\n1. 🌐 Web Development - Custom websites & applications\n2. 🔍 SEO Optimization - Improve search rankings\n3. 🤖 AI Automation - Intelligent business solutions\n4. 📈 Digital Marketing - Online growth strategies\n5. 🛍️ E-commerce - Online store solutions\n\nWhich area interests you most? I can provide detailed information about any service.",
    
    order: "Perfect! To get started, I recommend our Sales Qualification Form. This helps us:\n\n• Understand your specific requirements\n• Provide an accurate custom quote\n• Suggest the best solutions for your business\n• Schedule a consultation if needed\n\nIt only takes 2-3 minutes and gives you access to our full service catalog with pricing.",
    
    contact: "You can reach us through:\n\n📞 WhatsApp: +92 333 0161988 (24/7 support)\n📧 Email: smagencyglobal@gmail.com\n📋 Qualification Form: Get personalized service matching\n\nFor the fastest response and tailored solutions, I recommend starting with our qualification form. Would you like me to guide you there?",
    
    help: "I'm your AI Sales Agent! I can help you with:\n\n• Detailed service information\n• Pricing estimates\n• Project timelines\n• Booking consultations\n• Comparing different solutions\n• Creating custom project plans\n\nJust tell me what you're looking for, and I'll provide specific details!",
    
    pricing: "Our pricing is customized based on your specific needs:\n\n• Simple projects: $300-$1,500\n• Medium complexity: $1,500-$5,000\n• Enterprise solutions: $5,000+\n• Monthly retainers: $500-$5,000\n\nTo get an accurate quote, I'll need to understand your requirements. Our qualification form takes just a few minutes and provides personalized pricing.",
    
    timeline: "Project timelines vary by complexity:\n\n• Small projects: 1-2 weeks\n• Medium projects: 2-6 weeks\n• Large projects: 1-3 months\n• Ongoing services: Continuous\n\nAfter reviewing your project details through our form, I can provide a specific timeline. Would you like to proceed?",
    
    support: "We provide comprehensive support:\n\n• 24/7 WhatsApp support\n• Email response within 24 hours\n• Ongoing maintenance packages\n• Regular performance monitoring\n• Updates and optimizations\n• Dedicated account manager for enterprise clients\n\nWhat kind of support are you looking for?",
    
    ai_agent: "Our AI Agents are specialized solutions:\n\n🤖 Sales AI Agent - Lead identification and conversion\n👥 Customer Success AI - Automated support and follow-ups\n🎯 HR & Hiring AI - Streamlined recruitment\n📝 Content Strategist AI - Content planning and optimization\n📊 Operations Manager AI - Workflow automation\n\nEach agent is custom-built for your specific business needs. Pricing starts at $1,500. Want to explore which AI solution fits your business?",
    
    meeting: "I'd be happy to schedule a consultation! Through our qualification form, you can:\n\n• Select your preferred meeting time\n• Share project details in advance\n• Get matched with the right specialist\n• Receive preparation materials\n• Book directly in our calendar\n\nOur meetings typically last 30-60 minutes and help us create the perfect solution for you.",
    
    thanks: "Great choice! Our Sales Qualification Form is the best way to:\n\n• Get detailed service information\n• Receive personalized pricing\n• Schedule consultations\n• Access our full portfolio\n• Start your project journey\n\nClick the 'Go to Form' button below and let's build something amazing together!",
    
    default: "I'm your AI Sales & Qualification Agent! I can help you with:\n\n• Service details and pricing\n• Project timelines\n• Booking consultations\n• Comparing solutions\n• Creating custom plans\n\nJust ask me about any service, or tell me what you're looking to accomplish, and I'll provide specific information!"
  };

  const services = [
    // AI Automation & AI Agents
    'Lead Qualification Automation',
    'Customer Support Automation (Email / WhatsApp / Chat)',
    'Invoice & Payment Follow-up Automation',
    'Recruitment Screening Automation',
    'Social Media Content & Posting Automation',
    'Automated Business Report Generation',
    'Email Sorting & Priority Automation',
    'CRM Data Cleaning & Management Automation',
    'E-commerce Order & Refund Automation',
    'SOP & Internal Process Automation',
    'Sales AI Agent',
    'HR & Hiring AI Agent',
    'Research & Market Analysis AI Agent',
    'Content Strategist AI Agent',
    'Customer Success AI Agent',
    'Finance & Cash Flow AI Agent',
    'Legal Assistant AI Agent',
    'Operations Manager AI Agent',
    'E-commerce Growth AI Agent',
    'Founder / Executive Assistant AI Agent',
    
    // Core Web & SEO Services
    'Complete Website Development',
    'Landing Page Design & Development',
    'Next.js Website Setup',
    'Website Speed Optimization',
    'Core Web Vitals Fix',
    'Technical SEO Setup',
    'On-Page SEO Optimization',
    'SEO Website Audit',
    'Google Search Console Setup',
    'Sitemap & Robots.txt Setup',
    
    // Google & Analytics Services
    'Google Analytics Setup',
    'Google Tag Manager Setup',
    'GSC Error Fixing',
    'Indexing & Crawl Issue Fix',
    'Canonical & WWW Fix',
    'Open Graph Optimization',
    'Schema Markup Setup',
    'Brand Logo Schema',
    'International SEO Setup',
    'Image SEO Optimization',
    
    // AI-Powered Services
    'AI SEO Blog Writing',
    'AI Content Optimization',
    'AI Keyword Research',
    'AI Meta Tags Creation',
    'AI FAQ Generation',
    'AI Chatbot Setup',
    'AI Lead Automation',
    'AI Email Auto-Responder',
    'AI Customer Support Bot',
    'AI Prompt Engineering',
    
    // AdSense & Monetization
    'Google AdSense Approval Setup',
    'AdSense Policy Fixes',
    'ads.txt Implementation',
    'Consent Mode Setup',
    'CMP Integration',
    'Monetization Strategy Setup',
    
    // E-commerce & CRO
    'Shopify Website Setup',
    'Shopify SEO Optimization',
    'Product Page Optimization',
    'Conversion Rate Optimization',
    'Funnel Landing Pages',
    'Affiliate Website Setup',
    
    // Maintenance & Growth
    'Website Migration',
    'Broken Link Fixing',
    'UX/UI Improvements',
    'Mobile Optimization',
    'Website Security Setup',
    'Backup & Recovery Setup',
    
    // Business Support
    'Online Presence Setup',
    'Brand Trust Optimization',
    'Business Email Setup',
    'Subdomain Configuration',
    'Vercel Deployment Support',
    'Cloudinary Image Setup',
    'Website Performance Audit',
    'Monthly SEO Maintenance',
    'Content Strategy Planning',
    'Blog Structure Setup',
    'Local + Global SEO Strategy',
    'Full Website Management'
  ];

  const projectIntents = [
    'I have a clear business problem to solve',
    'I want to automate an existing process',
    'I want to reduce manual work or costs',
    'I want to increase leads or conversions',
    'I am just exploring ideas (not urgent)'
  ];

  const budgets = [
    'Under $300',
    '$300 – $700',
    '$700 – $1,500',
    '$1,500 – $3,000',
    '$3,000+',
    'Not sure yet (need consultation)'
  ];

  const timelines = [
    'Immediately',
    'Within 1–2 weeks',
    'Within 1 month',
    'Just planning / future idea'
  ];

  const decisionAuthorities = [
    'Yes, I will approve the project',
    'I am part of the decision-making team',
    'No, I am just collecting information'
  ];

  const businessTypes = [
    'Startup',
    'Agency',
    'Ecommerce',
    'SaaS',
    'Local Business'
  ];

  const toolsUsed = [
    'CRM (HubSpot, Zoho, Salesforce, etc.)',
    'WhatsApp or Email marketing tools',
    'Google Sheets or Airtable',
    'APIs',
    'n8n, Zapier, or Make',
    'None yet'
  ];

  const consultationPreferences = [
    'Yes, ready for a call',
    'Yes, after reviewing a proposal',
    'No, email communication only'
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      let response = botResponses.default;
      const lowerInput = inputValue.toLowerCase();
      
      // Greetings
      if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey') || lowerInput.includes('good morning') || lowerInput.includes('good evening')) {
        response = botResponses.greeting;
      }
      // Help and welcome
      else if (lowerInput.includes('welcome') || lowerInput.includes('help') || lowerInput.includes('assist') || lowerInput.includes('can you help')) {
        response = botResponses.welcome;
      }
      // Service inquiries
      else if (lowerInput.includes('service') || lowerInput.includes('what do you do') || lowerInput.includes('offer') || lowerInput.includes('what services') || lowerInput.includes('services')) {
        response = botResponses.services;
      }
      // Web Development specific
      else if (lowerInput.includes('web') || lowerInput.includes('website') || lowerInput.includes('development') || lowerInput.includes('next.js') || lowerInput.includes('react')) {
        response = botResponses.web_dev;
      }
      // SEO specific
      else if (lowerInput.includes('seo') || lowerInput.includes('search engine') || lowerInput.includes('optimization') || lowerInput.includes('ranking')) {
        response = botResponses.seo;
      }
      // AI Automation specific
      else if (lowerInput.includes('ai') || lowerInput.includes('automation') || lowerInput.includes('chatbot') || lowerInput.includes('lead qualification') || lowerInput.includes('customer support bot')) {
        response = botResponses.ai_automation;
      }
      // Digital Marketing specific
      else if (lowerInput.includes('marketing') || lowerInput.includes('ads') || lowerInput.includes('social media') || lowerInput.includes('google ads') || lowerInput.includes('digital marketing')) {
        response = botResponses.digital_marketing;
      }
      // E-commerce specific
      else if (lowerInput.includes('ecommerce') || lowerInput.includes('shopify') || lowerInput.includes('online store') || lowerInput.includes('shopping cart')) {
        response = botResponses.ecommerce;
      }
      // Ordering and getting started
      else if (lowerInput.includes('order') || lowerInput.includes('buy') || lowerInput.includes('purchase') || lowerInput.includes('place') || lowerInput.includes('get started') || lowerInput.includes('start project')) {
        response = botResponses.order;
      }
      // Contact information
      else if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('call') || lowerInput.includes('whatsapp') || lowerInput.includes('email') || lowerInput.includes('phone')) {
        response = botResponses.contact;
      }
      // Pricing inquiries
      else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing') || lowerInput.includes('quote') || lowerInput.includes('how much') || lowerInput.includes('budget')) {
        response = botResponses.pricing;
      }
      // Timeline inquiries
      else if (lowerInput.includes('time') || lowerInput.includes('schedule') || lowerInput.includes('when') || lowerInput.includes('delivery') || lowerInput.includes('timeline') || lowerInput.includes('how long')) {
        response = botResponses.timeline;
      }
      // Support inquiries
      else if (lowerInput.includes('support') || lowerInput.includes('maintenance') || lowerInput.includes('help after') || lowerInput.includes('ongoing')) {
        response = botResponses.support;
      }
      // Meeting/Consultation
      else if (lowerInput.includes('meeting') || lowerInput.includes('consultation') || lowerInput.includes('appointment') || lowerInput.includes('call with') || lowerInput.includes('schedule')) {
        response = botResponses.meeting;
      }
      // Form navigation
      else if (lowerInput.includes('form') || lowerInput.includes('qualif') || lowerInput.includes('sales') || lowerInput.includes('fill out') || lowerInput.includes('apply')) {
        response = botResponses.thanks;
      }

      const botMessage = { id: Date.now() + 1, text: response, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleGoToForm = () => {
    setActiveTab('form');
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleToolsChange = (tool: string) => {
    setFormData(prev => {
      const tools = [...prev.toolsUsed];
      if (tools.includes(tool)) {
        return {
          ...prev,
          toolsUsed: tools.filter(t => t !== tool)
        };
      } else {
        return {
          ...prev,
          toolsUsed: [...tools, tool]
        };
      }
    });
  };

  const calculateSeriousness = (): 'High' | 'Medium' | 'Low' => {
    let score = 0;
    
    // Budget evaluation
    if (formData.budget.includes('$3,000+') || formData.budget.includes('$1,500 – $3,000') || formData.budget.includes('$700 – $1,500')) {
      score += 2;
    } else if (formData.budget.includes('$300 – $700')) {
      score += 1;
    } else if (formData.budget.includes('Under $300')) {
      score -= 1;
    }
    
    // Timeline evaluation
    if (formData.timeline === 'Immediately' || formData.timeline === 'Within 1–2 weeks' || formData.timeline === 'Within 1 month') {
      score += 1;
    }
    
    // Decision authority evaluation
    if (formData.decisionAuthority === 'Yes, I will approve the project') {
      score += 1;
    } else if (formData.decisionAuthority === 'I am part of the decision-making team') {
      score += 0.5;
    }
    
    // Problem description quality (simple check for length and specificity)
    if (formData.problemDescription.length > 20) {
      score += 1;
    }
    
    if (score >= 3) return 'High';
    if (score >= 1) return 'Medium';
    return 'Low';
  };

  const handleNext = () => {
    if (step === 1) {
      // Validate required fields for step 1
      if (!formData.service || !formData.budget) {
        alert('Please select both Service and Budget');
        return;
      }
    } else if (step === 2) {
      // Validate required fields for step 2
      if (!formData.companyName || !formData.businessType || !formData.problemDescription) {
        alert('Please fill in required fields: Company Name, Business Type, and Problem Description');
        return;
      }
    } else if (step === 3) {
      // Validate professional acknowledgment
      if (!formData.professionalAck) {
        alert('Please acknowledge that this is a professional paid service');
        return;
      }
    }
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Calculate seriousness level
      const level = calculateSeriousness();
      setSeriousnessLevel(level);
      
      // If High or Medium intent, show meeting scheduler
      if (level === 'High' || level === 'Medium') {
        setShowMeetingScheduler(true);
      } else {
        // If Low intent, submit directly
        handleSubmit();
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleScheduleMeeting = () => {
    if (!meetingDate || !meetingTime) {
      alert('Please select a date and time for the meeting');
      return;
    }
    handleSubmit();
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Prepare data to send
      const submissionData = {
        ...formData,
        seriousnessLevel: seriousnessLevel,
        meetingDate: meetingDate,
        meetingTime: meetingTime
      };
      
      // Send to API endpoint
      const response = await fetch('/api/sales-qualification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit qualification form');
      }

      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          service: '',
          projectIntent: '',
          budget: '',
          timeline: '',
          decisionAuthority: '',
          companyName: '',
          companyWebsite: '',
          businessType: '',
          problemDescription: '',
          toolsUsed: [],
          consultationPreference: '',
          professionalAck: false,
          name: '',
          email: '',
          phone: ''
        });
        setStep(1);
        setSeriousnessLevel(null);
        setMeetingDate('');
        setMeetingTime('');
        setShowMeetingScheduler(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-24 z-50">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-[80vw] max-w-xs h-[50vh] max-h-[460px] md:w-[700px] md:h-[500px] bg-white rounded-xl shadow-2xl flex flex-col border border-indigo-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-2 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <span className="font-bold text-lg">AI Sales & Qualification Agent</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 bg-gray-50">
              <button
                className={`flex-1 py-3 text-center font-medium ${
                  activeTab === 'chat'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('chat')}
              >
                Chat
              </button>
              <button
                className={`flex-1 py-3 text-center font-medium ${
                  activeTab === 'form'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('form')}
              >
                Order Form
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
              {activeTab === 'chat' ? (
                <div className="p-4 bg-gradient-to-b from-gray-50 to-white h-[calc(80vh-150px)] max-h-[550px] md:h-[550px] flex flex-col">
                  {/* Messages Container */}
                  <div className="flex-1 overflow-y-auto mb-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`mb-3 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
                      >
                        <div
                          className={`inline-block p-3 rounded-lg max-w-xs ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                              : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800'
                          }`}
                        >
                          {message.text.split('\n').map((line, index) => (
                            <div key={index}>{line}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="text-left mb-3">
                        <div className="inline-block p-3 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75"></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Action Button (when appropriate) */}
                  {messages.some(msg => msg.text.includes('Go to Form')) && (
                    <div className="p-3 bg-gradient-to-r from-yellow-50 to-amber-50 border-t border-yellow-200 mb-2">
                      <button
                        onClick={handleGoToForm}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-2 px-4 rounded-lg transition-all shadow-md"
                      >
                        Go to Sales Qualification Form
                      </button>
                    </div>
                  )}

                  {/* Input Area */}
                  <div className="p-2 bg-white border-t border-gray-200 flex">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about our services or place an order..."
                      className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-r-lg hover:from-blue-700 hover:to-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Send
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-gradient-to-b from-gray-50 to-white h-[calc(80vh-150px)] max-h-[550px] md:h-[550px] overflow-y-auto">
                  {!submitSuccess ? (
                    <>
                      <div className="text-center mb-6">
                        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                          Sales Qualification Form
                        </h2>
                        <p className="text-gray-700 text-sm">
                          Share your project details to get a personalized quote
                        </p>
                        
                        {/* Progress indicator */}
                        <div className="flex justify-center mt-4">
                          {[1, 2, 3].map((num) => (
                            <div key={num} className="flex items-center">
                              <div 
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                                  step === num 
                                    ? 'bg-blue-600 text-white' 
                                    : num < step 
                                      ? 'bg-green-500 text-white' 
                                      : 'bg-gray-200 text-gray-700'
                                }`}
                              >
                                {num}
                              </div>
                              {num < 3 && (
                                <div className={`w-8 h-0.5 ${step > num ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {step === 1 && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm">
                              Service * (required)
                            </label>
                            <select
                              value={formData.service}
                              onChange={(e) => handleInputChange('service', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            >
                              <option value="">Select a service</option>
                              {services.map((service, idx) => (
                                <option key={idx} value={service}>{service}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm">
                              Project Intent
                            </label>
                            <select
                              value={formData.projectIntent}
                              onChange={(e) => handleInputChange('projectIntent', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            >
                              <option value="">Select an option</option>
                              {projectIntents.map((intent, idx) => (
                                <option key={idx} value={intent}>{intent}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm">
                              Budget * (required)
                            </label>
                            <select
                              value={formData.budget}
                              onChange={(e) => handleInputChange('budget', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            >
                              <option value="">Select a budget</option>
                              {budgets.map((budget, idx) => (
                                <option key={idx} value={budget}>{budget}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm">
                              Timeline
                            </label>
                            <select
                              value={formData.timeline}
                              onChange={(e) => handleInputChange('timeline', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            >
                              <option value="">Select a timeline</option>
                              {timelines.map((timeline, idx) => (
                                <option key={idx} value={timeline}>{timeline}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm">
                              Decision Authority
                            </label>
                            <select
                              value={formData.decisionAuthority}
                              onChange={(e) => handleInputChange('decisionAuthority', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            >
                              <option value="">Select an option</option>
                              {decisionAuthorities.map((authority, idx) => (
                                <option key={idx} value={authority}>{authority}</option>
                              ))}
                            </select>
                          </div>

                          <div className="flex justify-end pt-2">
                            <button
                              onClick={handleNext}
                              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all shadow-sm text-sm"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm">
                              Company / Brand Name * (required)
                            </label>
                            <input
                              type="text"
                              value={formData.companyName}
                              onChange={(e) => handleInputChange('companyName', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                              placeholder="Enter company name"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm">
                              Website (optional)
                            </label>
                            <input
                              type="text"
                              value={formData.companyWebsite}
                              onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                              placeholder="https://example.com"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm">
                              Business Type * (required)
                            </label>
                            <select
                              value={formData.businessType}
                              onChange={(e) => handleInputChange('businessType', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            >
                              <option value="">Select business type</option>
                              {businessTypes.map((type, idx) => (
                                <option key={idx} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm">
                              Problem Description * (required)
                            </label>
                            <textarea
                              value={formData.problemDescription}
                              onChange={(e) => handleInputChange('problemDescription', e.target.value)}
                              rows={3}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                              placeholder="Describe the business problem you want to solve..."
                            ></textarea>
                          </div>

                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm">
                              Current Tools (optional)
                            </label>
                            <div className="grid grid-cols-1 gap-1">
                              {toolsUsed.map((tool, idx) => (
                                <div key={idx} className="flex items-center">
                                  <input
                                    type="checkbox"
                                    id={`tool-${idx}`}
                                    checked={formData.toolsUsed.includes(tool)}
                                    onChange={() => handleToolsChange(tool)}
                                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                  />
                                  <label htmlFor={`tool-${idx}`} className="text-gray-700 text-sm">
                                    {tool}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm">
                              Consultation Preference
                            </label>
                            <select
                              value={formData.consultationPreference}
                              onChange={(e) => handleInputChange('consultationPreference', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            >
                              <option value="">Select an option</option>
                              {consultationPreferences.map((preference, idx) => (
                                <option key={idx} value={preference}>{preference}</option>
                              ))}
                            </select>
                          </div>

                          <div className="flex justify-between pt-2">
                            <button
                              onClick={handlePrev}
                              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors text-sm"
                            >
                              Previous
                            </button>
                            <button
                              onClick={handleNext}
                              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all shadow-sm text-sm"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm">
                              Contact Information (Optional)
                            </label>
                            
                            <div className="grid grid-cols-1 gap-2">
                              <div>
                                <label className="block text-gray-700 font-medium mb-1 text-xs">Name</label>
                                <input
                                  type="text"
                                  value={formData.name}
                                  onChange={(e) => handleInputChange('name', e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                  placeholder="Your name"
                                />
                              </div>
                              
                              <div>
                                <label className="block text-gray-700 font-medium mb-1 text-xs">Email</label>
                                <input
                                  type="email"
                                  value={formData.email}
                                  onChange={(e) => handleInputChange('email', e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                  placeholder="your@email.com"
                                />
                              </div>
                              
                              <div>
                                <label className="block text-gray-700 font-medium mb-1 text-xs">Phone</label>
                                <input
                                  type="tel"
                                  value={formData.phone}
                                  onChange={(e) => handleInputChange('phone', e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                  placeholder="+1 (234) 567-8900"
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-start">
                              <input
                                type="checkbox"
                                id="professionalAck"
                                checked={formData.professionalAck}
                                onChange={(e) => handleInputChange('professionalAck', e.target.checked)}
                                className="mt-1 mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <label htmlFor="professionalAck" className="text-gray-700 text-sm">
                                <strong>I understand this is a professional paid service and not a free demo.</strong>
                              </label>
                            </div>
                          </div>

                          {showMeetingScheduler && (
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-200">
                              <h3 className="text-md font-bold text-gray-900 mb-2">Schedule a Meeting</h3>
                              
                              <div className="grid grid-cols-1 gap-2">
                                <div>
                                  <label className="block text-gray-700 font-medium mb-1 text-xs">Select Date</label>
                                  <input
                                    type="date"
                                    value={meetingDate}
                                    onChange={(e) => setMeetingDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                  />
                                </div>
                                
                                <div>
                                  <label className="block text-gray-700 font-medium mb-1 text-xs">Select Time</label>
                                  <select
                                    value={meetingTime}
                                    onChange={(e) => setMeetingTime(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                  >
                                    <option value="">Select time</option>
                                    <option value="09:00 AM">09:00 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="01:00 PM">01:00 PM</option>
                                    <option value="02:00 PM">02:00 PM</option>
                                    <option value="03:00 PM">03:00 PM</option>
                                    <option value="04:00 PM">04:00 PM</option>
                                    <option value="05:00 PM">05:00 PM</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="flex justify-between pt-2">
                            <button
                              onClick={handlePrev}
                              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors text-sm"
                            >
                              Previous
                            </button>
                            <button
                              onClick={showMeetingScheduler ? handleScheduleMeeting : handleNext}
                              disabled={isSubmitting}
                              className={`px-4 py-2 rounded-lg font-medium transition-all shadow-sm text-sm ${
                                isSubmitting 
                                  ? 'bg-gray-400 cursor-not-allowed' 
                                  : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
                              }`}
                            >
                              {isSubmitting ? 'Processing...' : showMeetingScheduler ? 'Schedule Meeting' : 'Submit'}
                            </button>
                          </div>
                        </div>
                      )}

                      {seriousnessLevel && !showMeetingScheduler && (
                        <div className="mt-4 p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                          <h3 className="text-md font-bold text-gray-900 mb-1">Evaluation Result</h3>
                          <p className="text-gray-700 text-sm">
                            Your project has been evaluated as <strong>{seriousnessLevel} Intent</strong>.
                          </p>
                          {seriousnessLevel === 'Low' && (
                            <p className="text-gray-600 text-xs mt-1">
                              Our team will review your request and respond via email.
                            </p>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-green-500 text-4xl mb-3">✓</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Thank You!</h3>
                      <p className="text-gray-700 text-sm">
                        Your information has been submitted successfully. Our team will get back to you shortly.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Icon */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
          aria-label="Open AI Sales Agent"
        >
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
        </motion.button>
      )}
    </div>
  );
};

export default AISalesAgent;