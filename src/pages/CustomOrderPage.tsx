import React from 'react';
import CustomOrderForm from '../components/CustomOrderForm';
import { ChevronRight } from 'lucide-react';

const CustomOrderPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="https://images.pexels.com/photos/5370749/pexels-photo-5370749.jpeg"
          alt="Custom jewelry design"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Custom Creations</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Design the perfect piece that tells your unique story
            </p>
          </div>
        </div>
      </section>

      {/* Process Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Your Journey to a Custom Piece
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial concept to the final creation, we guide you through every step of the custom design process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <ProcessStep 
              number="1" 
              title="Consultation" 
              description="Share your vision and inspiration with our design team through a personalized consultation."
            />
            <ProcessStep 
              number="2" 
              title="Design" 
              description="Our artisans create detailed sketches and renderings based on your ideas and preferences."
            />
            <ProcessStep 
              number="3" 
              title="Creation" 
              description="Master craftsmen bring your design to life using traditional techniques and premium materials."
            />
            <ProcessStep 
              number="4" 
              title="Delivery" 
              description="Receive your one-of-a-kind creation, beautifully packaged and ready to cherish forever."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Why Choose Custom?
              </h3>
              <ul className="space-y-4">
                <Feature text="Unique designs tailored specifically to your preferences" />
                <Feature text="Incorporate meaningful elements and personal symbolism" />
                <Feature text="Reimagine family heirlooms into modern treasures" />
                <Feature text="Perfect fit and comfort through personalized sizing" />
                <Feature text="Create a truly one-of-a-kind piece that tells your story" />
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/11482853/pexels-photo-11482853.jpeg" 
                alt="Custom jewelry sketch" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Start Your Custom Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete the form below to begin the process of creating your custom piece. Our team will contact you within 48 hours to discuss your vision.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <CustomOrderForm />
          </div>
        </div>
      </section>
    </div>
  );
};

const ProcessStep = ({ 
  number, 
  title, 
  description 
}: { 
  number: string; 
  title: string; 
  description: string 
}) => (
  <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition duration-300">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-600 text-white text-xl font-bold mb-4">
      {number}
    </div>
    <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Feature = ({ text }: { text: string }) => (
  <li className="flex items-start space-x-3">
    <span>
      <ChevronRight className="h-5 w-5 text-amber-600 mt-0.5" />
    </span>
    <span className="text-gray-700">{text}</span>
  </li>
);

export default CustomOrderPage;