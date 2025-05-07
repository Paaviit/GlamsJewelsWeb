import React from 'react';
import { Link } from 'react-router-dom';
import { Diamond, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company & Brand */}
          <div className="mb-6">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Diamond className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-serif font-bold text-amber-400">Glams Jewels</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Crafting exquisite jewelry pieces that capture moments and create lasting memories.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Instagram size={20} />} href="#" aria-label="Instagram" />
              <SocialLink icon={<Facebook size={20} />} href="#" aria-label="Facebook" />
              <SocialLink icon={<Twitter size={20} />} href="#" aria-label="Twitter" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/products" label="Collections" />
              <FooterLink to="/custom" label="Custom Orders" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/contact" label="Contact" />
            </ul>
          </div>

          {/* Collections */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-6 text-white">Collections</h3>
            <ul className="space-y-3">
              <FooterLink to="/products#rings" label="Rings" />
              <FooterLink to="/products#necklaces" label="Necklaces" />
              <FooterLink to="/products#earrings" label="Earrings" />
              <FooterLink to="/products#bracelets" label="Bracelets" />
              <FooterLink to="/products#wedding" label="Wedding Collection" />
            </ul>
          </div>

          {/* Contact */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                <span>123 Jewelry Lane, Sparkle City, SC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span>info@glamsjewels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Glams Jewels. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-amber-500 transition duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-amber-500 transition duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-400 hover:text-amber-500 transition duration-300"
    >
      {label}
    </Link>
  </li>
);

const SocialLink = ({ 
  icon, 
  href, 
  'aria-label': ariaLabel 
}: { 
  icon: React.ReactNode; 
  href: string; 
  'aria-label': string 
}) => (
  <a 
    href={href} 
    className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
  >
    {icon}
  </a>
);

export default Footer;