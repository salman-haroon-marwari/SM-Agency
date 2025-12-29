'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'There was an error sending your message. Please try again.');
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error: any) {
      setSubmitError(error.message || 'There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '+92 333 0161988',
      description: '24/7 WhatsApp support available'
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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Want to learn more about our services? 
            Reach out to us and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 border border-indigo-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 -z-10"></div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">Send us a message</h2>
              
              {submitSuccess ? (
                <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6">
                  <div className="font-medium">Thank you for your message!</div>
                  <p>We'll get back to you soon.</p>
                </div>
              ) : null}

              {submitError ? (
                <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6">
                  <div className="font-medium">Error submitting form</div>
                  <p>{submitError}</p>
                </div>
              ) : null}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+92 333 0161988"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or ask any questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 h-full border border-indigo-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 -z-10"></div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">Contact Information</h2>
              
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
                    <div className="text-3xl mr-4 mt-1 relative z-10">{info.icon}</div>
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-gray-900">{info.title}</h3>
                      {info.title === 'WhatsApp' ? (
                        <a 
                          href={`https://wa.me/${info.value.replace(/\s+/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all shadow-md inline-flex items-center cursor-pointer z-20"
                        >
                          Message on WhatsApp
                          <span className="ml-2">→</span>
                        </a>
                      ) : (
                        <p className="text-indigo-600 font-medium">{info.value}</p>
                      )}
                      <p className="text-gray-600 text-sm mt-1">{info.description}</p>
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
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">Our Response Time</h3>
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3 relative z-10"></div>
                  <span className="font-medium text-gray-800 relative z-10">Within 24 hours</span>
                </div>
                <p className="text-gray-700 text-sm relative z-10">
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
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">Office Hours</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM EST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM EST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-white to-gray-50 p-7 rounded-2xl border border-indigo-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
              initial={{ opacity: 0, y: 20, rotateY: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 -z-10"></div>
              <h3 className="font-bold text-gray-900 mb-2 relative z-10">How quickly can you start my project?</h3>
              <p className="text-gray-700 relative z-10">We typically begin new projects within 1-2 weeks of contract signing, depending on our current workload and project complexity.</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-white to-gray-50 p-7 rounded-2xl border border-indigo-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
              initial={{ opacity: 0, y: 20, rotateY: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 -z-10"></div>
              <h3 className="font-bold text-gray-900 mb-2 relative z-10">Do you work with international clients?</h3>
              <p className="text-gray-700 relative z-10">Yes! We serve clients globally across the USA, UK, Canada, Europe, and Australia with timezone-friendly communication.</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-white to-gray-50 p-7 rounded-2xl border border-indigo-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
              initial={{ opacity: 0, y: 20, rotateY: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 -z-10"></div>
              <h3 className="font-bold text-gray-900 mb-2 relative z-10">What is your pricing structure?</h3>
              <p className="text-gray-700 relative z-10">We offer competitive pricing based on project scope. Contact us for a custom quote tailored to your specific needs.</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-white to-gray-50 p-7 rounded-2xl border border-indigo-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
              initial={{ opacity: 0, y: 20, rotateY: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-red-500/5 -z-10"></div>
              <h3 className="font-bold text-gray-900 mb-2 relative z-10">Do you provide ongoing support?</h3>
              <p className="text-gray-700 relative z-10">Yes, we offer ongoing maintenance and support packages to ensure your project continues to perform optimally.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;