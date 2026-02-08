'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  service: string;
  projectIntent: string;
  budget: string;
  timeline: string;
  decisionAuthority: string;
  companyName: string;
  companyWebsite: string;
  businessType: string;
  problemDescription: string;
  toolsUsed: string[];
  consultationPreference: string;
  professionalAck: boolean;
  name?: string;
  email?: string;
  phone?: string;
}

const SalesQualificationAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [seriousnessLevel, setSeriousnessLevel] = useState<'High' | 'Medium' | 'Low' | null>(null);
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [showMeetingScheduler, setShowMeetingScheduler] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

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

  const handleChange = (field: keyof FormData, value: any) => {
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
    <div className="fixed bottom-24 right-6 z-50">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-96 bg-white rounded-xl shadow-2xl flex flex-col border border-indigo-200 overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 flex justify-between items-center">
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

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
              {!submitSuccess ? (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      AI Sales & Qualification Agent
                    </h2>
                    <p className="text-gray-700">
                      Let's understand your needs and connect you with the right solutions
                    </p>
                    
                    {/* Progress indicator */}
                    <div className="flex justify-center mt-6">
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="flex items-center">
                          <div 
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
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
                            <div className={`w-12 h-1 ${step > num ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          1. Which service are you looking for? *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => handleChange('service', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, idx) => (
                            <option key={idx} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          2. Why do you want this solution?
                        </label>
                        <select
                          value={formData.projectIntent}
                          onChange={(e) => handleChange('projectIntent', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select an option</option>
                          {projectIntents.map((intent, idx) => (
                            <option key={idx} value={intent}>{intent}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          3. What is your estimated budget? *
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => handleChange('budget', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a budget</option>
                          {budgets.map((budget, idx) => (
                            <option key={idx} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          4. When do you want to start?
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => handleChange('timeline', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a timeline</option>
                          {timelines.map((timeline, idx) => (
                            <option key={idx} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          5. Are you the decision maker for this project?
                        </label>
                        <select
                          value={formData.decisionAuthority}
                          onChange={(e) => handleChange('decisionAuthority', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select an option</option>
                          {decisionAuthorities.map((authority, idx) => (
                            <option key={idx} value={authority}>{authority}</option>
                          ))}
                        </select>
                      </div>

                      <div className="flex justify-between pt-4">
                        <div></div> {/* Spacer */}
                        <button
                          onClick={handleNext}
                          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md"
                        >
                          Next
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          6. Business Information
                        </label>
                        
                        <div className="grid grid-cols-1 gap-4 mb-4">
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">Company / Brand name *</label>
                            <input
                              type="text"
                              value={formData.companyName}
                              onChange={(e) => handleChange('companyName', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Enter company name"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">Website (if available)</label>
                            <input
                              type="text"
                              value={formData.companyWebsite}
                              onChange={(e) => handleChange('companyWebsite', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="https://example.com"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">Business type *</label>
                            <select
                              value={formData.businessType}
                              onChange={(e) => handleChange('businessType', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              <option value="">Select business type</option>
                              {businessTypes.map((type, idx) => (
                                <option key={idx} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          7. Briefly describe the problem you want to solve (2–4 lines) *
                        </label>
                        <textarea
                          value={formData.problemDescription}
                          onChange={(e) => handleChange('problemDescription', e.target.value)}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Describe the business problem you want to solve..."
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          8. Which tools do you currently use? (Multiple selection)
                        </label>
                        <div className="grid grid-cols-1 gap-2">
                          {toolsUsed.map((tool, idx) => (
                            <div key={idx} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`tool-${idx}`}
                                checked={formData.toolsUsed.includes(tool)}
                                onChange={() => handleToolsChange(tool)}
                                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <label htmlFor={`tool-${idx}`} className="text-gray-700">
                                {tool}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          9. Are you open to a consultation call?
                        </label>
                        <select
                          value={formData.consultationPreference}
                          onChange={(e) => handleChange('consultationPreference', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select an option</option>
                          {consultationPreferences.map((preference, idx) => (
                            <option key={idx} value={preference}>{preference}</option>
                          ))}
                        </select>
                      </div>

                      <div className="flex justify-between pt-4">
                        <button
                          onClick={handlePrev}
                          className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                        >
                          Previous
                        </button>
                        <button
                          onClick={handleNext}
                          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md"
                        >
                          Next
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          10. Contact Information (Optional)
                        </label>
                        
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">Name</label>
                            <input
                              type="text"
                              value={formData.name || ''}
                              onChange={(e) => handleChange('name', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Your name"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                              type="email"
                              value={formData.email || ''}
                              onChange={(e) => handleChange('email', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="your@email.com"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">Phone</label>
                            <input
                              type="tel"
                              value={formData.phone || ''}
                              onChange={(e) => handleChange('phone', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                            onChange={(e) => handleChange('professionalAck', e.target.checked)}
                            className="mt-1 mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="professionalAck" className="text-gray-700">
                            <strong>I understand this is a professional paid service and not a free demo.</strong>
                          </label>
                        </div>
                      </div>

                      {showMeetingScheduler && (
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                          <h3 className="text-lg font-bold text-gray-900 mb-4">Schedule a Meeting</h3>
                          
                          <div className="grid grid-cols-1 gap-4">
                            <div>
                              <label className="block text-gray-700 font-medium mb-2">Select Date</label>
                              <input
                                type="date"
                                value={meetingDate}
                                onChange={(e) => setMeetingDate(e.target.value)}
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-gray-700 font-medium mb-2">Select Time</label>
                              <select
                                value={meetingTime}
                                onChange={(e) => setMeetingTime(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

                      <div className="flex justify-between pt-4">
                        <button
                          onClick={handlePrev}
                          className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                        >
                          Previous
                        </button>
                        <button
                          onClick={showMeetingScheduler ? handleScheduleMeeting : handleNext}
                          disabled={isSubmitting}
                          className={`px-6 py-3 rounded-lg font-medium transition-all shadow-md ${
                            isSubmitting 
                              ? 'bg-gray-400 cursor-not-allowed' 
                              : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
                          }`}
                        >
                          {isSubmitting ? 'Processing...' : showMeetingScheduler ? 'Schedule Meeting' : 'Submit'}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {seriousnessLevel && !showMeetingScheduler && (
                    <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Evaluation Result</h3>
                      <p className="text-gray-700">
                        Your project has been evaluated as <strong>{seriousnessLevel} Intent</strong>.
                      </p>
                      {seriousnessLevel === 'Low' && (
                        <p className="text-gray-600 mt-2">
                          Our team will review your request and respond via email.
                        </p>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-700">
                    Your information has been submitted successfully. Our team will get back to you shortly.
                  </p>
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
          className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
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

export default SalesQualificationAgent;