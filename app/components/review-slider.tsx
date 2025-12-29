'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  date: string;
}

const ReviewSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Salman Marwari',
      role: 'CEO',
      company: 'TechGlobal Inc.',
      content: 'SM Agency delivered exceptional results for our complete website development. Their professionalism, technical expertise, and attention to detail were outstanding. They exceeded our expectations and delivered on time with excellent quality. Highly recommend their services!',
      rating: 5,
      date: '2025-11-15'
    },
    {
      id: 2,
      name: 'Imran Tahir',
      role: 'Marketing Director',
      company: 'EcoProducts Ltd',
      content: 'SM Agency transformed our digital marketing strategy completely. Their SEO optimization work was exceptional and our search rankings improved dramatically with a 150% increase in qualified leads. Their team is incredibly skilled and dedicated to client success.',
      rating: 5,
      date: '2025-10-22'
    },
    {
      id: 3,
      name: 'Aliya Khan',
      role: 'Founder',
      company: 'StartUp Ventures',
      content: 'Working with SM Agency was a game-changer for our business. Their Next.js development expertise delivered a lightning-fast website that converted visitors and increased our online sales. Their innovative solutions and commitment to excellence are truly impressive.',
      rating: 5,
      date: '2025-09-30'
    },
    {
      id: 4,
      name: 'Farha Khan',
      role: 'Operations Manager',
      company: 'Global Retail Co.',
      content: 'The automation solutions implemented by SM Agency saved us hundreds of hours monthly. Their team showed remarkable attention to detail and delivered beyond our expectations. Their professionalism and dedication to quality are unmatched.',
      rating: 5,
      date: '2025-08-18'
    },
    {
      id: 5,
      name: 'Ahmed Raza',
      role: 'CTO',
      company: 'FinTech Solutions',
      content: 'We engaged SM Agency to optimize our complex web application. Their technical expertise is outstanding, and they significantly improved our performance metrics and user experience. Their problem-solving skills and innovative approach are truly exceptional.',
      rating: 5,
      date: '2025-07-25'
    },
    {
      id: 6,
      name: 'Sara Malik',
      role: 'Digital Director',
      company: 'Innovate Media',
      content: 'The AI content solutions provided by SM Agency were top-notch. Our content engagement increased by 300% after implementing their recommendations and strategic approach. Their creativity and technical skills are remarkable.',
      rating: 5,
      date: '2025-06-12'
    },
    {
      id: 7,
      name: 'Usman Sheikh',
      role: 'Owner',
      company: 'Local Business Group',
      content: 'From local SEO to website redesign, SM Agency delivered exceptional results. Our local visibility increased dramatically, bringing in more customers than ever before. Their comprehensive approach and attention to client needs are truly impressive.',
      rating: 5,
      date: '2025-05-08'
    },
    {
      id: 8,
      name: 'Hassan Ali',
      role: 'Growth Manager',
      company: 'E-commerce Hub',
      content: 'SM Agency\'s e-commerce optimization strategies doubled our conversion rate. The team is responsive, professional, and results-driven, making them our go-to partner for digital growth. Their commitment to excellence is evident in every project.',
      rating: 5,
      date: '2025-04-20'
    },
    {
      id: 9,
      name: 'Ayesha Noor',
      role: 'VP of Marketing',
      company: 'Enterprise Solutions',
      content: 'The comprehensive digital strategy developed by SM Agency helped us expand into new markets. Their ROI-focused approach has been exceptional and brought measurable results. Their strategic thinking and execution skills are top-notch.',
      rating: 5,
      date: '2025-03-15'
    },
    {
      id: 10,
      name: 'Bilal Ahmed',
      role: 'Founder',
      company: 'HealthTech Startup',
      content: 'SM Agency helped us scale from startup to industry leader. Their data-driven approach and innovative solutions are unmatched, and their team became true partners in our growth. Their dedication to client success is truly remarkable.',
      rating: 5,
      date: '2025-02-28'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + reviews.length) % reviews.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-white shadow-xl p-8">
      <div className="relative w-full h-full">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-8 italic max-w-2xl mx-auto">"{review.content}"</p>
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {review.name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-900">{review.name}</h4>
                  <p className="text-gray-600">{review.role}, {review.company}</p>
                  <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors"
        aria-label="Previous review"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors"
        aria-label="Next review"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;