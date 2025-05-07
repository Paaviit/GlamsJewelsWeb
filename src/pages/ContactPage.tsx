import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="https://images.pexels.com/photos/3814539/pexels-photo-3814539.jpeg"
          alt="Contact us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We'd love to hear from you! Whether you have questions about our jewelry, need assistance with an order, or want to discuss a custom piece, our team is here to help.
              </p>

              <div className="space-y-6 mb-8">
                <ContactInfo 
                  icon={<MapPin className="h-6 w-6 text-amber-600" />}
                  title="Visit Our Showroom"
                  details={[
                    "123 Jewelry Lane",
                    "Sparkle City, SC 12345",
                    "United States"
                  ]}
                />
                
                <ContactInfo 
                  icon={<Phone className="h-6 w-6 text-amber-600" />}
                  title="Phone"
                  details={["(555) 123-4567"]}
                />
                
                <ContactInfo 
                  icon={<Mail className="h-6 w-6 text-amber-600" />}
                  title="Email"
                  details={["info@glamsjewels.com", "custom@glamsjewels.com"]}
                />
                
                <ContactInfo 
                  icon={<Clock className="h-6 w-6 text-amber-600" />}
                  title="Business Hours"
                  details={[
                    "Monday - Friday: 10am - 6pm",
                    "Saturday: 11am - 5pm",
                    "Sunday: Closed"
                  ]}
                />
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <SocialButton label="Instagram" />
                  <SocialButton label="Facebook" />
                  <SocialButton label="Pinterest" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900">
              Find Us
            </h2>
          </div>
          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden shadow-md">
            {/* This would be replaced with an actual map embed */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-600 text-center p-4">
                Interactive map would be embedded here showing the store location
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactInfo = ({ 
  icon, 
  title, 
  details 
}: { 
  icon: React.ReactNode; 
  title: string; 
  details: string[] 
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-gray-600">{detail}</p>
      ))}
    </div>
  </div>
);

const SocialButton = ({ label }: { label: string }) => (
  <a 
    href="#" 
    className="h-10 w-10 rounded-full bg-gray-200 hover:bg-amber-600 text-gray-700 hover:text-white flex items-center justify-center transition duration-300"
    aria-label={label}
  >
    {/* Icon would go here */}
    <span className="sr-only">{label}</span>
  </a>
);

export default ContactPage;