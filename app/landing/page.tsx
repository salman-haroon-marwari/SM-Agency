'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const LandingPage = () => {
  const benefits = [
    { title: 'Increased Traffic', desc: 'Drive more qualified visitors to your site' },
    { title: 'Higher Conversions', desc: 'Turn visitors into paying customers' },
    { title: 'Better Rankings', desc: 'Rank higher in search results' },
    { title: 'Competitive Edge', desc: 'Stay ahead of your competition' }
  ];

  const processSteps = [
    { step: 1, title: 'Analysis', desc: 'We analyze your current situation' },
    { step: 2, title: 'Strategy', desc: 'Create a custom action plan' },
    { step: 3, title: 'Implementation', desc: 'Execute our proven strategies' },
    { step: 4, title: 'Optimization', desc: 'Continuously improve results' }
  ];

  const painPoints = [
    'Your website isn\'t getting enough traffic',
    'You\'re not ranking for important keywords',
    'Your competitors are outranking you',
    'You\'re losing potential customers to other businesses'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 mb-12 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
                  Limited Time Offer
                </span>
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Transform Your <span className="text-blue-600">Online Presence</span> with AI-Powered SEO
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Get a complete SEO audit and strategy plan with our premium package. Includes technical optimization, content strategy, and performance monitoring.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link 
                  href="/contact" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  Get Your Free Audit
                </Link>
                <Link 
                  href="/services" 
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors text-center"
                >
                  View Services
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-lg">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl flex items-center justify-center h-80">
                    <div className="text-center p-6">
                      <div className="text-5xl mb-4">🚀</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium SEO Package</h3>
                      <p className="text-gray-600">Complete optimization for maximum results</p>
                      <div className="mt-4">
                        <span className="text-3xl font-bold text-blue-600">$1,999</span>
                        <span className="text-gray-500 line-through ml-2">$2,999</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Are You Facing These Challenges?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Many businesses struggle with these common SEO issues</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <motion.div 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-red-500 text-2xl mr-4 mt-1">❌</div>
                <div className="text-xl text-gray-700">{point}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Proven Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We solve these challenges with our comprehensive approach</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-blue-600 text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical SEO</h3>
              <p className="text-gray-600">Fix technical issues that prevent search engines from properly indexing your site.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-blue-600 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content Optimization</h3>
              <p className="text-gray-600">Create and optimize content that ranks for your target keywords.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-blue-600 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Tracking</h3>
              <p className="text-gray-600">Monitor your progress with detailed analytics and reporting.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-blue-600 text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Automation</h3>
              <p className="text-gray-600">Leverage AI to optimize and scale your SEO efforts.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You'll Get</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The results you can expect from our premium package</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-blue-600 text-2xl">✓</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple, transparent steps to achieve your goals</p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 -z-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="text-center relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join hundreds of satisfied clients who have grown with our solutions</p>
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
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;