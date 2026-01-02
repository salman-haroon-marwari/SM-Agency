'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const CEOPortfolioPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-rotate slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const leadershipExperience = [
    {
      title: 'CEO & Founder',
      company: 'SM Agency',
      period: '2015 - Present',
      description: 'Leading a digital & AI-powered service agency with global reach, focusing on web development, SEO, and AI solutions.'
    },
    {
      title: 'Digital Strategy Director',
      company: 'Global Tech Solutions',
      period: '2017 - 2020',
      description: 'Developed comprehensive digital strategies for Fortune 500 companies, resulting in 40% increase in online engagement.'
    },
    {
      title: 'AI Implementation Lead',
      company: 'Innovation Labs',
      period: '2015 - 2017',
      description: 'Pioneered AI implementation projects for various industries, focusing on automation and efficiency improvements.'
    },
    {
      title: 'Senior Developer',
      company: 'Healthy Technology Solutions LLC.',
      period: '2010 - 2015',
      description: 'Led development teams in creating scalable web applications using modern technologies like React, Node.js, and cloud platforms.'
    }
  ];

  const education = [
    {
      degree: "Matric in Computer Science",
      institution: "AL-Sehar School",
      period: "2005",
      description: "Completed with good percentage."
    },
    {
      degree: "Intermediate in Computer Science",
      institution: "Degree College Karachi",
      period: "2007",
      description: "Completed with good percentage."
    },
    {
      degree: "BSE, Computer Software Engineering",
      institution: "MBJ Institute",
      period: "Jan 2008 - Oct 2012",
      description: "Grade: CGPA 3.4 / 4.0. Activities and societies: Coding & Programming Projects"
    },
    {
      degree: "Artificial Intelligence (Online Training)",
      institution: "Stanford University – Online (Stanford Engineering Everywhere)",
      period: "2013 - 2017",
      description: "Specialized in Artificial Intelligence & Machine Learning."
    }
  ];

  const achievements = [
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '25+', label: 'Countries Served' },
    { value: '50+', label: 'Team Members' }
  ];

  const skills = [
    { name: 'Strategic Leadership', level: 95 },
    { name: 'Digital Transformation', level: 90 },
    { name: 'AI & Automation', level: 85 },
    { name: 'Business Development', level: 90 },
    { name: 'Team Management', level: 88 },
    { name: 'SEO & Marketing', level: 80 },
    { name: 'Artificial Intelligence (Stanford Online Learning)', level: 92 },
    { name: 'Machine Learning Fundamentals', level: 88 },
    { name: 'AI Concepts & Applications', level: 90 }
  ];

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
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Meet Our CEO
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Salman Marwari</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Visionary leader with 12+ years of experience in digital transformation and AI innovation
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {achievement.value}
                  </div>
                  <div className="text-gray-600 mt-2">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Profile Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 h-full border border-indigo-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 -z-10"></div>
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
                  <div className="relative w-full h-full overflow-hidden rounded-full">
                    <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                      <img 
                        src="https://res.cloudinary.com/dqxqa6uvw/image/upload/v1767313329/Gemini_Generated_Image_c11v8nc11v8nc11v_ho95ny.png" 
                        alt="Salman Marwari, CEO"
                        className="w-full h-full object-cover flex-shrink-0"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1767313329/Gemini_Generated_Image_c11v8nc11v8nc11v_ho95ny.png';
                        }}
                      />
                      <img 
                        src="https://res.cloudinary.com/dqxqa6uvw/image/upload/v1767313362/salman-marwari-3_syxapu.png" 
                        alt="Salman Marwari, CEO - Image 2"
                        className="w-full h-full object-cover flex-shrink-0"
                      />
                      <img 
                        src="https://res.cloudinary.com/dqxqa6uvw/image/upload/v1767313329/Gemini_Generated_Image_jvved5jvved5jvve_ntxsam.png" 
                        alt="Salman Marwari, CEO - Image 3"
                        className="w-full h-full object-cover flex-shrink-0"
                      />
                      <img 
                        src="https://res.cloudinary.com/dqxqa6uvw/image/upload/v1767313647/salman-marwari-2_hubtyl.png" 
                        alt="Salman Marwari, CEO - Image 4"
                        className="w-full h-full object-cover flex-shrink-0"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    <div className={`w-2 h-2 rounded-full ${currentImage === 0 ? 'bg-white' : 'bg-white bg-opacity-50'}`}></div>
                    <div className={`w-2 h-2 rounded-full ${currentImage === 1 ? 'bg-white' : 'bg-white bg-opacity-50'}`}></div>
                    <div className={`w-2 h-2 rounded-full ${currentImage === 2 ? 'bg-white' : 'bg-white bg-opacity-50'}`}></div>
                    <div className={`w-2 h-2 rounded-full ${currentImage === 3 ? 'bg-white' : 'bg-white bg-opacity-50'}`}></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Salman Marwari</h3>
                <p className="text-indigo-600 font-medium mb-4">CEO & Founder</p>
                <div className="flex flex-col items-center space-y-2 mb-6">
                  <Link href="https://linktr.ee/SalmanMarwari" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition-colors">
                    <span className="sr-only">Linktree</span>
                    <img src="/linktree.png" alt="Linktree" className="w-6 h-6" />
                  </Link>
                  <span className="text-xs text-gray-600">Linktree</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">Contact CEO</p>
                <p className="text-gray-600 text-sm">
                  Passionate about digital innovation and creating solutions that drive business growth
                </p>
                
                {/* Projects Completed Section */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Projects Completed</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { name: 'E-commerce Platform', description: 'Complete online store solution with payment integration', icon: '🛒' },
                      { name: 'AI Chatbot', description: 'Intelligent customer service automation system', icon: '🤖' },
                      { name: 'Real Estate Portal', description: 'Property listing and management platform', icon: '🏠' },
                      { name: 'Healthcare App', description: 'Patient management and appointment system', icon: '🏥' },
                      { name: 'Fintech Solution', description: 'Secure payment and transaction platform', icon: '💳' },
                      { name: 'Education LMS', description: 'Learning management system for institutions', icon: '🎓' },
                      { name: 'Restaurant Delivery', description: 'Food ordering and delivery platform', icon: '🍕' },
                      { name: 'Travel Booking', description: 'Comprehensive travel and booking system', icon: '✈️' },
                      { name: 'Fitness Tracker', description: 'Health and workout management application', icon: '💪' },
                      { name: 'Social Media Tool', description: 'Content management and analytics platform', icon: '📊' },
                      { name: 'Supply Chain Mgmt', description: 'End-to-end logistics and inventory solution', icon: '📦' },
                      { name: 'Video Streaming', description: 'On-demand content delivery platform', icon: '📺' },
                      { name: 'IoT Dashboard', description: 'Smart device monitoring and control system', icon: '🌐' },
                      { name: 'Crypto Wallet', description: 'Secure digital asset management app', icon: '🔒' },
                      { name: 'AR Shopping', description: 'Augmented reality product visualization', icon: '👓' },
                      { name: 'Legal Document', description: 'Automated contract generation system', icon: '📋' },
                      { name: 'Energy Monitor', description: 'Smart utility consumption tracking', icon: '⚡' },
                      { name: 'Recruitment Portal', description: 'Talent acquisition and management system', icon: '👥' },
                      { name: 'Car Rental', description: 'Automated vehicle booking platform', icon: '🚗' },
                      { name: 'Agriculture Tech', description: 'Smart farming and crop management system', icon: '🌱' }
                    ].map((project, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                        <div className="text-2xl mb-2">{project.icon}</div>
                        <h5 className="font-medium text-gray-900 text-sm mb-1">{project.name}</h5>
                        <p className="text-xs text-gray-600">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            {/* Leadership Experience */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 border border-indigo-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 -z-10"></div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">Leadership Experience</h3>
              <div className="space-y-8">
                {leadershipExperience.map((exp, index) => (
                  <motion.div 
                    key={index}
                    className="relative pl-8 border-l-2 border-indigo-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full"></div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <h4 className="text-lg font-bold text-gray-900">{exp.title}</h4>
                        <span className="text-indigo-600 font-medium text-sm bg-indigo-50 px-3 py-1 rounded-full mt-1 sm:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 border border-indigo-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 -z-10"></div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">Education</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className="relative pl-8 border-l-2 border-indigo-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full"></div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                        <span className="text-indigo-600 font-medium text-sm bg-indigo-50 px-3 py-1 rounded-full mt-1 sm:mt-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-blue-600 font-medium mb-3">{edu.institution}</p>
                      <p className="text-gray-600">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 border border-indigo-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 -z-10"></div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">Core Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div 
          className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Leadership Philosophy</h3>
            <p className="text-lg mb-6">
              "Innovation is the ability to see change as an opportunity - not a threat. At SM Agency, 
              we believe in empowering our team to think creatively, embrace technology, and deliver 
              exceptional value to our clients."
            </p>
            <p className="text-lg">
              "Our success is measured not just by our growth, but by the success of our clients and 
              the satisfaction of our team members. Together, we're building a future where technology 
              and human creativity work in harmony."
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect with Our CEO</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in learning more about our vision and approach? Connect with Salman on LinkedIn 
            or reach out through our contact page.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
            >
              Contact Us
            </Link>
            <Link 
              href="https://linktr.ee/salman_marwari" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center space-x-2"
            >
              <img src="/linktree.png" alt="Linktree" className="w-5 h-5" />
              <span>Linktree</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CEOPortfolioPage;