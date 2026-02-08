'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import AISalesAgent from '../components/ai-sales-agent';
import SalesQualificationAgent from '../components/sales-qualification-agent';

const ContactPage = () => {
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
  const [submitError, setSubmitError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  // Form data arrays
  const services = [
    'Lead Qualification Automation',
    'Customer Support Automation',
    'Invoice & Payment Follow-up Automation',
    'Recruitment Screening Automation',
    'Social Media Content & Posting Automation',
    'Complete Website Development',
    'Landing Page Design & Development',
    'SEO Optimization',
    'Google Analytics Setup',
    'AI Chatbot Setup',
    'Shopify Website Setup',
    'Conversion Rate Optimization'
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
    'Just planning or future idea'
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

  // Form handling functions
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

  const handleNext = () => {
    if (step === 1) {
      if (!formData.service || !formData.budget) {
        alert('Please select both Service and Budget');
        return;
      }
    } else if (step === 2) {
      if (!formData.companyName || !formData.businessType || !formData.problemDescription) {
        alert('Please fill in required fields: Company Name, Business Type, and Problem Description');
        return;
      }
    } else if (step === 3) {
      if (!formData.professionalAck) {
        alert('Please acknowledge that this is a professional paid service');
        return;
      }
    }

    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/sales-qualification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'There was an error submitting your form. Please try again.');
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
      }, 3000);

    } catch (error: any) {
      setSubmitError(error.message || 'There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '+92 333 0161988',
      description: '24-7 WhatsApp support available'
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'smagencyglobal@gmail.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: '🌐',
      title: 'Global Support',
      value: 'USA, UK, Canada, Europe, Australia',
      description: 'Serving clients worldwide'
    }
  ];

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">Get In Touch</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Want to learn more about our services?
            Reach out to us and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Sales Qualification Form - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-6 sm:p-8 h-full border border-indigo-100 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 -z-10"></div>
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">AI Sales & Qualification Form</h2>

            <div className="space-y-6">
              {/* Progress indicator */}
              <div className="flex justify-center">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${step === num ? 'bg-blue-600 text-white' : num < step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      {num}
                    </div>
                    {num < 3 && (
                      <div className={`w-12 h-1 ${step > num ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                    )}
                  </div>
                ))}
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Service * (required)</label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleInputChange('service', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Project Intent</label>
                    <select
                      value={formData.projectIntent}
                      onChange={(e) => handleInputChange('projectIntent', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      {projectIntents.map((intent, idx) => (
                        <option key={idx} value={intent}>{intent}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Budget * (required)</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a budget</option>
                      {budgets.map((budget, idx) => (
                        <option key={idx} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a timeline</option>
                      {timelines.map((timeline, idx) => (
                        <option key={idx} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Decision Authority</label>
                    <select
                      value={formData.decisionAuthority}
                      onChange={(e) => handleInputChange('decisionAuthority', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      {decisionAuthorities.map((authority, idx) => (
                        <option key={idx} value={authority}>{authority}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      onClick={handleNext}
                      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Company / Brand Name * (required)</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter company name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Website (optional)</label>
                    <input
                      type="text"
                      value={formData.companyWebsite}
                      onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Business Type * (required)</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => handleInputChange('businessType', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select business type</option>
                      {businessTypes.map((type, idx) => (
                        <option key={idx} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Problem Description * (required)</label>
                    <textarea
                      value={formData.problemDescription}
                      onChange={(e) => handleInputChange('problemDescription', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe the business problem you want to solve..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Current Tools (optional)</label>
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
                    <label className="block text-gray-700 font-medium mb-2">Consultation Preference</label>
                    <select
                      value={formData.consultationPreference}
                      onChange={(e) => handleInputChange('consultationPreference', e.target.value)}
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
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Contact Information (Optional)</label>

                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
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
                        onChange={(e) => handleInputChange('professionalAck', e.target.checked)}
                        className="mt-1 mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="professionalAck" className="text-gray-700">
                        <strong>I understand this is a professional paid service and not a free demo.</strong>
                      </label>
                    </div>
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
                      disabled={isSubmitting || !formData.professionalAck}
                      className={`px-6 py-3 rounded-lg font-medium transition-all shadow-md ${isSubmitting || !formData.professionalAck ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'}`}
                    >
                      {isSubmitting ? 'Processing...' : 'Submit'}
                    </button>
                  </div>
                </div>
              )}

              {submitSuccess && (
                <motion.div
                  className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-700">
                    Your information has been submitted successfully. Our team will get back to you shortly.
                  </p>
                </motion.div>
              )}

              {submitError && (
                <motion.div
                  className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✗ {submitError}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* AI Sales & Qualification Agent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AISalesAgent />
          </motion.div>

        </div>



      </div>

      {/* Contact Information - Full Width Below Forms */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-6 sm:p-8 h-full border border-indigo-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 -z-10"></div>
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">Contact Information</h2>

          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="flex items-start p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/30 shadow-sm relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 -z-10"></div>
                <div className="text-2xl sm:text-3xl mr-3 sm:mr-4 mt-1 relative z-10">{info.icon}</div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">{info.title}</h3>
                  {info.title === 'WhatsApp' ? (
                    <a
                      href={`https://wa.me/${info.value.replace(/\s+/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all shadow-md inline-flex items-center cursor-pointer z-20 text-sm sm:text-base"
                    >
                      Message on WhatsApp
                      <span className="ml-2">→</span>
                    </a>
                  ) : (
                    <p className="text-indigo-600 font-medium text-sm sm:text-base">{info.value}</p>
                  )}
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">{info.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 -z-10"></div>
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">Our Response Time</h3>
            <div className="flex items-center mb-3">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-3 relative z-10"></div>
              <span className="font-medium text-gray-800 relative z-10">Within 24 hours</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 relative z-10">
              We aim to respond to all inquiries within 24 hours.
              For urgent matters, contact us on WhatsApp directly.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 -z-10"></div>
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">Office Hours</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex flex-col sm:flex-row justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium mt-1 sm:mt-0">9:00 AM - 5:00 PM EST</span>
              </li>
              <li className="flex flex-col sm:flex-row justify-between">
                <span>Saturday</span>
                <span className="font-medium mt-1 sm:mt-0">10:00 AM - 2:00 PM EST</span>
              </li>
              <li className="flex flex-col sm:flex-row justify-between">
                <span>Sunday</span>
                <span className="font-medium mt-1 sm:mt-0">Closed</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-indigo-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
            initial={{ opacity: 0, y: 20, rotateY: -5 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 -z-10"></div>
            <h3 className="font-bold text-gray-900 mb-2 relative z-10">How quickly can you start my project?</h3>
            <p className="text-sm sm:text-base text-gray-700 relative z-10">We typically begin new projects within 1-2 weeks of contract signing, depending on our current workload and project complexity.</p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-indigo-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
            initial={{ opacity: 0, y: 20, rotateY: -5 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 -z-10"></div>
            <h3 className="font-bold text-gray-900 mb-2 relative z-10">Do you work with international clients?</h3>
            <p className="text-sm sm:text-base text-gray-700 relative z-10">Yes! We serve clients globally across the USA, UK, Canada, Europe, and Australia with timezone-friendly communication.</p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-indigo-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
            initial={{ opacity: 0, y: 20, rotateY: -5 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 -z-10"></div>
            <h3 className="font-bold text-gray-700 mb-2 relative z-10">What is your pricing structure?</h3>
            <p className="text-sm sm:text-base text-gray-700 relative z-10">We offer competitive pricing based on project scope. Contact us for a custom quote tailored to your specific needs.</p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-indigo-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
            initial={{ opacity: 0, y: 20, rotateY: -5 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-red-500/5 -z-10"></div>
            <h3 className="font-bold text-gray-900 mb-2 relative z-10">Do you provide ongoing support?</h3>
            <p className="text-sm sm:text-base text-gray-700 relative z-10">Yes, we offer ongoing maintenance and support packages to ensure your project continues to perform optimally.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;