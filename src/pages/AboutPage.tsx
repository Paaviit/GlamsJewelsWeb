import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.pexels.com/photos/12734648/pexels-photo-12734648.jpeg"
          alt="Jewelry workshop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">Our Story</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Crafting timeless elegance with passion and precision
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 text-center">
              Glams Jewels: A Legacy of Excellence
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2005, Glams Jewels began as a small family workshop with a singular vision: to create jewelry that celebrates life's most precious moments. What started as a passion project quickly grew into a respected name in fine jewelry, known for exceptional craftsmanship and personalized service.
            </p>
            
            <p className="text-gray-700 mb-10 leading-relaxed">
              Today, we continue to honor our founding principles while embracing innovation and contemporary design. Each piece that leaves our workshop carries with it our commitment to quality and our belief that jewelry should be as unique as the person wearing it.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/12734647/pexels-photo-12734647.jpeg" 
                  alt="Jewelry crafting" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/12734646/pexels-photo-12734646.jpeg" 
                  alt="Jewelry showcase" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Our Philosophy
            </h3>
            
            <p className="text-gray-700 mb-10 leading-relaxed">
              At Glams Jewels, we believe that jewelry is more than an accessory—it's a personal statement, a keepsake of cherished memories, and a legacy to pass down through generations. We approach each creation with this understanding, dedicating ourselves to crafting pieces that are not only beautiful but meaningful.
            </p>

            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Our Craftsmanship
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Every Glams Jewels piece is created with meticulous attention to detail. Our master craftsmen combine traditional techniques with modern technology to achieve the perfect balance of artistry and precision. We source only the finest materials—ethically mined gemstones, responsibly sourced precious metals, and exquisite pearls—ensuring that each creation meets our exacting standards.
            </p>
            
            <p className="text-gray-700 mb-10 leading-relaxed">
              From initial sketch to final polish, each step in our creation process is handled with care and expertise. We take pride in the artistry behind our work and the joy our creations bring to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ValueCard 
              title="Quality" 
              description="We never compromise on the quality of our materials or craftsmanship, ensuring each piece meets our exacting standards."
            />
            <ValueCard 
              title="Integrity" 
              description="Honesty and transparency guide all our business practices, from sourcing materials to client relationships."
            />
            <ValueCard 
              title="Creativity" 
              description="We embrace innovation while honoring traditional techniques, creating designs that are both timeless and distinctive."
            />
            <ValueCard 
              title="Sustainability" 
              description="We are committed to responsible sourcing and ethical practices that minimize our environmental impact."
            />
            <ValueCard 
              title="Service" 
              description="We provide personalized attention to each client, ensuring their experience with us is as exceptional as the jewelry they purchase."
            />
            <ValueCard 
              title="Community" 
              description="We value our role in the community and strive to give back through various initiatives and partnerships."
            />
          </div>
        </div>
      </section>

      {/* Custom Design CTA */}
      <section className="py-16 md:py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Let's Create Something Special Together
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience the Glams Jewels difference with a custom-designed piece that tells your unique story.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/custom" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-amber-600 hover:bg-gray-100 font-bold rounded-md transition duration-300"
            >
              Request Custom Design
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold rounded-md transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
    <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default AboutPage;