import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/12734651/pexels-photo-12734651.jpeg',
    title: 'Exquisite Indian Jewelry',
    subtitle: 'Crafted with Heritage and Precision',
    cta: 'Explore Collections',
    ctaLink: '/products'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/12734650/pexels-photo-12734650.jpeg',
    title: 'Custom Creations',
    subtitle: 'Personalized Pieces for Special Moments',
    cta: 'Request Custom Design',
    ctaLink: '/custom'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/12734649/pexels-photo-12734649.jpeg',
    title: 'Bridal Collection',
    subtitle: 'Traditional Elegance for Your Special Day',
    cta: 'View Bridal Collection',
    ctaLink: '/products#wedding'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center px-4 max-w-3xl">
              <h1 
                className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 opacity-0 animate-fadeIn" 
                style={{animationDelay: '300ms'}}
              >
                {slide.title}
              </h1>
              <p 
                className="text-xl md:text-2xl text-gray-100 mb-8 opacity-0 animate-fadeIn" 
                style={{animationDelay: '600ms'}}
              >
                {slide.subtitle}
              </p>
              <Link
                to={slide.ctaLink}
                className="inline-flex items-center px-6 py-3 border-2 border-amber-500 bg-amber-500 hover:bg-amber-600 hover:border-amber-600 text-white font-medium rounded-md transition duration-300 transform hover:-translate-y-1 opacity-0 animate-fadeIn"
                style={{animationDelay: '900ms'}}
              >
                {slide.cta}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-10 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-amber-500 w-12' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;