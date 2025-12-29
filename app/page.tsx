'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import HeroSlider from './components/hero-slider';

const HomePage = () => {

  const services = [
    { name: 'Web Development', desc: 'Complete website solutions' },
    { name: 'SEO Optimization', desc: 'Rank higher in search results' },
    { name: 'AI Solutions', desc: 'Automate and optimize processes' },
    { name: 'Digital Marketing', desc: 'Reach your target audience' },
  ];

  const processSteps = [
    { step: 1, title: 'Discovery', desc: 'Understanding your goals' },
    { step: 2, title: 'Strategy', desc: 'Creating your plan' },
    { step: 3, title: 'Execution', desc: 'Building & implementing' },
    { step: 4, title: 'Optimization', desc: 'Continuous improvement' },
  ];

  const whyChooseUs = [
    { title: 'Expert Team', desc: 'Industry-leading professionals' },
    { title: 'Proven Results', desc: 'Track record of success' },
    { title: 'Innovation', desc: 'Cutting-edge solutions' },
    { title: 'Support', desc: '24/7 dedicated support' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 md:py-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-indigo-100/20 to-purple-100/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-indigo-100 transform transition-all duration-500 hover:scale-[1.01]">
            {typeof window !== 'undefined' && <HeroSlider />}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">Introduction SM Agency</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-3 leading-relaxed">
                SM Agency is a leading digital & AI-powered service agency helping businesses grow globally 
                with cutting-edge solutions, strategic SEO, and innovative automation.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-3 leading-relaxed">
                Founded in 2015, we started with a simple mission: to help businesses grow 
                through innovative digital solutions and strategic AI implementation. What began as 
                a small team of passionate developers and marketers has grown into a global agency 
                serving clients across the USA, UK, Canada, Europe, and Australia.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our team of experts specializes in cutting-edge technologies, from Next.js and 
                React to advanced AI automation and SEO strategies. We stay ahead of industry 
                trends to deliver solutions that not only meet today's needs but anticipate 
                tomorrow's challenges.
              </p>
            </motion.div>
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-3xl p-1 shadow-2xl border border-white/50 backdrop-blur-sm">
                <div className="bg-white/80 rounded-2xl p-4 sm:p-8 h-full shadow-inner border border-white/30">
                  <img 
                    src="https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766956830/hero6_ghjlbc.png" 
                    alt="SM Agency Introduction"
                    className="w-full h-auto rounded-xl object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://placehold.co/600x400/6366f1/ffffff?text=SM+Agency&font=montserrat';
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Cutting-edge tools and services to accelerate your business growth</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl border border-blue-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
              <div className="text-blue-600 text-3xl mb-4 relative z-10">🚀</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 relative z-10">Web Development</h3>
              <p className="text-sm sm:text-base text-gray-600 relative z-10">Custom websites using Next.js, React, and modern frameworks</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 sm:p-8 rounded-xl border border-green-100 hover:shadow-xl transition-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-green-600 text-3xl mb-4">🔍</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">SEO Optimization</h3>
              <p className="text-sm sm:text-base text-gray-600">Advanced techniques to rank higher in search results</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 sm:p-8 rounded-xl border border-purple-100 hover:shadow-xl transition-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-purple-600 text-3xl mb-4">🤖</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">AI Solutions</h3>
              <p className="text-sm sm:text-base text-gray-600">Intelligent automation and machine learning implementations</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 sm:p-8 rounded-xl border border-orange-100 hover:shadow-xl transition-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-orange-600 text-3xl mb-4">📊</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Analytics & Insights</h3>
              <p className="text-sm sm:text-base text-gray-600">Data-driven decisions with comprehensive analytics</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 sm:p-8 rounded-xl border border-teal-100 hover:shadow-xl transition-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-teal-600 text-3xl mb-4">🛒</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">E-commerce Solutions</h3>
              <p className="text-sm sm:text-base text-gray-600">Complete online store development and optimization</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 sm:p-8 rounded-xl border border-rose-100 hover:shadow-xl transition-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-rose-600 text-3xl mb-4">📱</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Digital Marketing</h3>
              <p className="text-sm sm:text-base text-gray-600">Targeted campaigns to reach your ideal customers</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 sm:p-8 rounded-xl border border-indigo-100 hover:shadow-xl transition-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="text-indigo-600 text-3xl mb-4">🔒</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Security & Compliance</h3>
              <p className="text-sm sm:text-base text-gray-600">Protecting your business with robust security measures</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 sm:p-8 rounded-xl border border-amber-100 hover:shadow-xl transition-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="text-amber-600 text-3xl mb-4">🔄</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Maintenance & Support</h3>
              <p className="text-sm sm:text-base text-gray-600">Ongoing support and optimization for long-term success</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SM Agency</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Trusted by businesses worldwide for exceptional results</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl border border-blue-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10 shadow-lg">
                <span className="text-white text-xl sm:text-2xl">🏆</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 relative z-10">Proven Results</h3>
              <p className="text-sm sm:text-base text-gray-600 relative z-10">500+ successful projects with 98% client retention rate</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 sm:p-8 rounded-2xl border border-green-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"></div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10 shadow-lg">
                <span className="text-white text-xl sm:text-2xl">⚡</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 relative z-10">Fast Delivery</h3>
              <p className="text-sm sm:text-base text-gray-600 relative z-10">On-time project completion with agile development approach</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 sm:p-8 rounded-2xl border border-purple-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5"></div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10 shadow-lg">
                <span className="text-white text-xl sm:text-2xl">💡</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 relative z-10">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-600 relative z-10">Cutting-edge solutions using latest technologies and AI</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 sm:p-8 rounded-2xl border border-orange-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5"></div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10 shadow-lg">
                <span className="text-white text-xl sm:text-2xl">📞</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 relative z-10">24/7 Support</h3>
              <p className="text-sm sm:text-base text-gray-600 relative z-10">Round-the-clock assistance for all your business needs</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 sm:p-8 rounded-2xl border border-teal-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5"></div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10 shadow-lg">
                <span className="text-white text-xl sm:text-2xl">💰</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 relative z-10">Cost Effective</h3>
              <p className="text-sm sm:text-base text-gray-600 relative z-10">Maximum ROI with competitive pricing and transparent billing</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 sm:p-8 rounded-2xl border border-rose-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-pink-500/5"></div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10 shadow-lg">
                <span className="text-white text-xl sm:text-2xl">🌐</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 relative z-10">Global Reach</h3>
              <p className="text-sm sm:text-base text-gray-600 relative z-10">Serving clients across USA, UK, Canada, Europe, and Australia</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 sm:p-8 rounded-2xl border border-indigo-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5"></div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10 shadow-lg">
                <span className="text-white text-xl sm:text-2xl">🔒</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 relative z-10">Security First</h3>
              <p className="text-sm sm:text-base text-gray-600 relative z-10">Enterprise-grade security for all your digital assets</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 sm:p-8 rounded-2xl border border-amber-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5"></div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10 shadow-lg">
                <span className="text-white text-xl sm:text-2xl">🔄</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 relative z-10">Continuous Support</h3>
              <p className="text-sm sm:text-base text-gray-600 relative z-10">Ongoing maintenance and optimization for long-term success</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our most in-demand services that help businesses grow</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-xl border border-blue-100 hover:shadow-xl transition-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-blue-600 text-3xl mb-4">🚀</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Complete Website Development</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Full custom website development with modern technologies</p>
              <Link 
                href="/services/complete-website-development" 
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 sm:p-8 rounded-xl border border-green-100 hover:shadow-xl transition-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-green-600 text-3xl mb-4">🔍</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">SEO Optimization</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Complete technical SEO implementation and optimization</p>
              <Link 
                href="/services/technical-seo-setup" 
                className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 sm:p-8 rounded-xl border border-purple-100 hover:shadow-xl transition-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-purple-600 text-3xl mb-4">🤖</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">AI Solutions</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">AI-powered content creation and automation services</p>
              <Link 
                href="/services/ai-seo-blog-writing" 
                className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 sm:p-8 rounded-xl border border-orange-100 hover:shadow-xl transition-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-orange-600 text-3xl mb-4">🛒</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">E-commerce Setup</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Professional Shopify store development and optimization</p>
              <Link 
                href="/services/shopify-website-setup" 
                className="text-orange-600 hover:text-orange-800 font-medium inline-flex items-center"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 sm:p-8 rounded-xl border border-teal-100 hover:shadow-xl transition-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-teal-600 text-3xl mb-4">📱</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Google Analytics</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Implement Google Analytics for comprehensive tracking</p>
              <Link 
                href="/services/google-analytics-setup" 
                className="text-teal-600 hover:text-teal-800 font-medium inline-flex items-center"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 sm:p-8 rounded-xl border border-rose-100 hover:shadow-xl transition-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-rose-600 text-3xl mb-4">🔒</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Security Setup</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Implement comprehensive website security measures</p>
              <Link 
                href="/services/website-security-setup" 
                className="text-rose-600 hover:text-rose-800 font-medium inline-flex items-center"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="text-center mt-12">
        <Link 
          href="/services" 
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
        >
          Visit All Services
        </Link>
      </div>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Insights and tips on digital marketing, web development, and AI automation</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.article 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766952888/blog1_gqw3h8.png" 
                  alt="The Future of AI in Digital Marketing"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/400x200/3b82f6/ffffff?text=AI+Marketing';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    AI & Automation
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>December 15, 2025</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">The Future of AI in Digital Marketing</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">Exploring how artificial intelligence is transforming the digital marketing landscape and what it means for businesses.</p>
                <Link 
                  href="/blog/1" 
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
            <motion.article 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954333/blog2_zpxjrn.png" 
                  alt="Next.js Best Practices for Performance"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/400x200/10b981/ffffff?text=Next.js+Performance';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Web Development
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>December 10, 2025</span>
                  <span className="mx-2">•</span>
                  <span>8 min read</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Next.js Best Practices for Performance</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">Essential techniques to optimize your Next.js applications for maximum performance and user experience.</p>
                <Link 
                  href="/blog/2" 
                  className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
            <motion.article 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954333/blog3_trgk9g.png" 
                  alt="SEO Trends to Watch in 2026"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/400x200/8b5cf6/ffffff?text=SEO+Trends';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    SEO
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>December 5, 2025</span>
                  <span className="mx-2">•</span>
                  <span>6 min read</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">SEO Trends to Watch in 2026</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">Stay ahead of the curve with the latest SEO trends and strategies that will dominate search rankings.</p>
                <Link 
                  href="/blog/3" 
                  className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
            <motion.article 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954332/blog4_rvtqns.png" 
                  alt="Building Scalable E-commerce Solutions"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/400x200/f97316/ffffff?text=E-commerce';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    E-commerce
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>November 28, 2025</span>
                  <span className="mx-2">•</span>
                  <span>10 min read</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Building Scalable E-commerce Solutions</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">A comprehensive guide to creating e-commerce platforms that can grow with your business needs.</p>
                <Link 
                  href="/blog/4" 
                  className="text-orange-600 hover:text-orange-800 font-medium inline-flex items-center"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
            <motion.article 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954330/blog5_f1tu9o.png" 
                  alt="The Power of Schema Markup"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/400x200/06b6d4/ffffff?text=Schema+Markup';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    SEO
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>November 20, 2025</span>
                  <span className="mx-2">•</span>
                  <span>4 min read</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">The Power of Schema Markup</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">Learn how structured data can improve your search visibility and drive more qualified traffic.</p>
                <Link 
                  href="/blog/5" 
                  className="text-cyan-600 hover:text-cyan-800 font-medium inline-flex items-center"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
            <motion.article 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954331/blog6_osyhch.png" 
                  alt="AI Content Creation: Pros and Cons"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/400x200/ec4899/ffffff?text=AI+Content';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    AI & Automation
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>November 15, 2025</span>
                  <span className="mx-2">•</span>
                  <span>7 min read</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">AI Content Creation: Pros and Cons</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">A balanced view of AI-generated content and its impact on content marketing strategies.</p>
                <Link 
                  href="/blog/6" 
                  className="text-pink-600 hover:text-pink-800 font-medium inline-flex items-center"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A strategic approach to deliver exceptional results for your business</p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 to-indigo-200 -translate-y-1/2 -z-10"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div 
                className="text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-xl sm:text-2xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Strategic Consultation</h3>
                <p className="text-sm sm:text-base text-gray-600">In-depth analysis of your business goals and market opportunities</p>
              </motion.div>
              <motion.div 
                className="text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-xl sm:text-2xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Custom Solution Design</h3>
                <p className="text-sm sm:text-base text-gray-600">Tailored strategies designed specifically for your unique needs</p>
              </motion.div>
              <motion.div 
                className="text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-xl sm:text-2xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Implementation & Execution</h3>
                <p className="text-sm sm:text-base text-gray-600">Expert execution with attention to detail and quality</p>
              </motion.div>
              <motion.div 
                className="text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-xl sm:text-2xl font-bold shadow-lg">
                  4
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Optimization & Growth</h3>
                <p className="text-sm sm:text-base text-gray-600">Continuous improvement for sustained long-term success</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Trusted by businesses worldwide for exceptional results</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">"SM Agency delivered exceptional results for our complete website development. Their professionalism and technical expertise were outstanding."</p>
              <h4 className="font-bold text-gray-900">John Smith</h4>
              <p className="text-sm sm:text-xs">CTO, TechGlobal Inc.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">"Their SEO optimization work was exceptional and our search rankings improved dramatically with increased qualified leads."</p>
              <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
              <p className="text-sm sm:text-xs">Marketing Director, EcoProducts Ltd</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">"Working with SM Agency was a game-changer for our business. Their Next.js development expertise delivered a lightning-fast website."</p>
              <h4 className="font-bold text-gray-900">Michael Chen</h4>
              <p className="text-sm sm:text-xs">Founder, StartUp Ventures</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">"The automation solutions saved us hundreds of hours monthly. Their team showed remarkable attention to detail."</p>
              <h4 className="font-bold text-gray-900">Emma Rodriguez</h4>
              <p className="text-sm sm:text-xs">Operations Manager, Global Retail Co.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">"Their technical expertise is outstanding, and they significantly improved our performance metrics and user experience."</p>
              <h4 className="font-bold text-gray-900">David Wilson</h4>
              <p className="text-sm sm:text-xs">CTO, FinTech Solutions</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">"The AI content solutions provided were top-notch. Our content engagement increased significantly after implementation."</p>
              <h4 className="font-bold text-gray-900">Priya Sharma</h4>
              <p className="text-sm sm:text-xs">Digital Director, Innovate Media</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">"From local SEO to website redesign, SM Agency delivered exceptional results. Our local visibility increased dramatically."</p>
              <h4 className="font-bold text-gray-900">Robert Taylor</h4>
              <p className="text-sm sm:text-xs">Owner, Local Business Group</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">"Their e-commerce optimization strategies doubled our conversion rate. The team is responsive and results-driven."</p>
              <h4 className="font-bold text-gray-900">Hassan Ali</h4>
              <p className="text-sm sm:text-xs">Growth Manager, E-commerce Hub</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">"The comprehensive digital strategy helped us expand into new markets. Their ROI-focused approach has been exceptional."</p>
              <h4 className="font-bold text-gray-900">Ayesha Noor</h4>
              <p className="text-sm sm:text-xs">VP of Marketing, Enterprise Solutions</p>
            </motion.div>


          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">Join hundreds of satisfied clients who have grown with our solutions</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-white/10 transition-colors"
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

export default HomePage;
