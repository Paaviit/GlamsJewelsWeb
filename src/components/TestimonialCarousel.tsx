import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  avatar: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="min-w-full p-8 md:p-12 bg-white rounded-lg shadow-md"
            >
              <div className="max-w-3xl mx-auto text-center">
                <svg 
                  className="mx-auto mb-4 w-10 h-10 text-amber-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <p className="text-lg md:text-xl font-medium text-gray-700 italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center justify-center space-x-3">
                  <img 
                    className="w-12 h-12 rounded-full"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-amber-500' : 'w-2 bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;