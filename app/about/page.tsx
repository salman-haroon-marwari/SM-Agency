'use client';

import { motion } from 'framer-motion';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Salman Marwari',
      role: 'CEO & Founder',
      bio: 'Salman Marwari is the CEO and Founder of SM Agency with over 15 years of hands-on experience in web development, digital marketing, and AI-powered solutions. He has worked with global clients to build scalable websites, data-driven marketing systems, and intelligent automation that deliver real business growth. His leadership focuses on innovation, performance, and long-term value. Salman combines technical expertise with strategic thinking to help brands grow sustainably in competitive international markets.',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766922140/Gemini_Generated_Image_bltcr2bltcr2bltc_rit7tt.png'
    },
    {
      name: 'Imran Tahir',
      role: 'Lead Developer & E-commerce Specialist',
      bio: 'Imran Tahir is the Lead Developer at SM Agency with more than 10 years of experience in web development and e-commerce solutions. He specializes in building high-performance websites, custom online stores, and secure, scalable platforms tailored to business needs. With a strong focus on clean code and user experience, Imran ensures that every project is fast, reliable, and conversion-focused across all devices.',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766922138/Gemini_Generated_Image_vdsjtwvdsjtwvdsj_vvxlgl.png'
    },
    {
      name: 'Aliya Khan',
      role: 'SEO Specialist & Maintenance and Growth Lead',
      bio: 'Aliya Khan brings over 10 years of experience in SEO, website maintenance, and long-term growth strategies. She specializes in search engine optimization, technical SEO, content optimization, and ongoing performance improvements. Her approach is data-driven and aligned with Google’s latest guidelines, helping businesses improve visibility, rankings, and organic traffic while keeping websites secure and up to date.',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766922137/Gemini_Generated_Image_5ivosy5ivosy5ivo_h6afas.png'
    },
    {
      name: 'Farha Khan',
      role: 'AI Solutions Architect & Business Support',
      bio: 'Farah Khan is an AI Solutions Architect with more than 10 years of experience in AI integration, automation, and business support systems. She works closely with clients to design intelligent solutions that improve efficiency, decision-making, and customer engagement. Her expertise bridges technology and business operations, ensuring AI solutions are practical, scalable, and aligned with real-world business goals.',
      image: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766922137/Gemini_Generated_Image_6lagol6lagol6lag_age7li.png'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Retention' },
    { number: '24/7', label: 'Support Available' }
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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">About SM Agency</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We are a leading digital & AI-powered service agency helping businesses grow globally 
            with cutting-edge solutions, strategic SEO, and innovative automation.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="text-center bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-indigo-100 shadow-md relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 -z-10"></div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">{achievement.number}</div>
              <div className="text-gray-700 font-medium">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Story */}
        <motion.div 
          className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 md:p-12 mb-20 border border-indigo-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 -z-10"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full -m-32"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full -m-32"></div>
          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2015, SM Agency started with a simple mission: to help businesses grow 
                through innovative digital solutions and strategic AI implementation. What began as 
                a small team of passionate developers and marketers has grown into a global agency 
                serving clients across the USA, UK, Canada, Europe, and Australia.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our team of experts specializes in cutting-edge technologies, from Next.js and 
                React to advanced AI automation and SEO strategies. We stay ahead of industry 
                trends to deliver solutions that not only meet today's needs but anticipate 
                tomorrow's challenges.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe in building long-term partnerships with our clients, providing 
                ongoing support and optimization to ensure continued growth and success.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-2xl h-80 overflow-hidden border-2 border-white/30 backdrop-blur-sm shadow-inner">
                <img 
                  src="https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766954761/Gemini_Generated_Image_vn1tzfvn1tzfvn1t_o0incn.png" 
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div className="text-center p-6"><div className="text-6xl mb-4">💼</div><h3 className="text-2xl font-bold text-gray-800">Our Mission</h3><p className="text-gray-600 mt-2">To empower businesses with innovative digital solutions</p></div>';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-indigo-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
              initial={{ opacity: 0, y: 20, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 -z-10"></div>
              <div className="text-4xl mb-4 relative z-10">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Excellence</h3>
              <p className="text-gray-700 relative z-10">
                We strive for the highest standards in everything we do, from code quality 
                to client communication and project delivery.
              </p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-indigo-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
              initial={{ opacity: 0, y: 20, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 -z-10"></div>
              <div className="text-4xl mb-4 relative z-10">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Integrity</h3>
              <p className="text-gray-700 relative z-10">
                We believe in honest communication, transparent pricing, and delivering 
                exactly what we promise to our clients.
              </p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-indigo-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
              initial={{ opacity: 0, y: 20, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 -z-10"></div>
              <div className="text-4xl mb-4 relative z-10">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Innovation</h3>
              <p className="text-gray-700 relative z-10">
                We continuously explore new technologies and methodologies to provide 
                cutting-edge solutions for our clients.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Meet the Team */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] relative overflow-hidden"
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 -z-10"></div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/400x400/3b82f6/ffffff?text=' + encodeURIComponent(member.name.split(' ')[0]);
                  }} />
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                  <div className="text-gray-700 space-y-1">
                    {member.bio.split('. ').map((sentence, idx, array) => {
                      // Add period back to all sentences except the last one that might already have it
                      const displaySentence = idx === array.length - 1 ? sentence : sentence.endsWith('.') ? sentence : sentence + '.';
                      return (
                        <div key={idx}>
                          {displaySentence}
                          {idx < array.length - 1 && <br />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 -z-10 transform -rotate-1 rounded-3xl blur-xl"></div>
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-12 text-white relative z-10 shadow-2xl border border-white/20 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </a>
              <a 
                href="/services" 
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all shadow-lg hover:shadow-xl"
              >
                View Our Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;