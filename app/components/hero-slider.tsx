'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      src: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766956828/hero1_lktmpq.png',
      alt: 'Digital Marketing Solution',
      title: 'Digital Marketing Excellence',
      description: 'Transform your online presence with our cutting-edge digital marketing strategies.'
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766956829/hero2_snhat7.png',
      alt: 'AI Powered Solutions',
      title: 'AI-Powered Solutions',
      description: 'Leverage artificial intelligence to automate and optimize your business processes.'
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766956828/hero3_et4vdp.png',
      alt: 'SEO Optimization',
      title: 'SEO Optimization',
      description: 'Rank higher on search engines and drive more organic traffic to your website.'
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766956829/hero4_rczb4f.png',
      alt: 'Web Development',
      title: 'Web Development',
      description: 'Build fast, responsive, and conversion-focused websites that engage your audience.'
    },
    {
      id: 5,
      src: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766956828/hero5_tdjq2x.png',
      alt: 'E-commerce Growth',
      title: 'E-commerce Growth',
      description: 'Scale your online store with our comprehensive e-commerce solutions.'
    },
    {
      id: 6,
      src: 'https://res.cloudinary.com/dqxqa6uvw/image/upload/v1766956830/hero6_ghjlbc.png',
      alt: 'Data Driven Results',
      title: 'Our Team Of Experts',
      description: 'Our team of experts combines deep industry experience with modern AI-driven strategies to build scalable, high-impact digital solutions. From development to growth, we help brands move faster, smarter, and ahead of the competition.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-xl">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-20" />
            <div className="absolute inset-0 flex items-center justify-center z-30 text-center px-4">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-xl text-white mb-8">{slide.description}</p>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors"
                  onClick={() => {
                    if (slide.id === 1) {
                      window.location.href = '/services';
                    } else if (slide.id === 2) {
                      window.location.href = '/services';
                    } else if (slide.id === 3) {
                      window.location.href = '/services';
                    } else if (slide.id === 4) {
                      window.location.href = '/services';
                    } else if (slide.id === 5) {
                      window.location.href = '/services';
                    } else {
                      window.location.href = '/contact';
                    }
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;