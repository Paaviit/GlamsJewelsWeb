import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Diamond } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Diamond className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-serif font-bold text-amber-800">Glams Jewels</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" active={location.pathname === '/'} />
            <NavLink to="/products" label="Collections" active={location.pathname === '/products'} />
            <NavLink to="/custom" label="Custom Orders" active={location.pathname === '/custom'} />
            <NavLink to="/about" label="About" active={location.pathname === '/about'} />
            <NavLink to="/contact" label="Contact" active={location.pathname === '/contact'} />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-amber-800 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-3 py-3">
              <MobileNavLink to="/" label="Home" />
              <MobileNavLink to="/products" label="Collections" />
              <MobileNavLink to="/custom" label="Custom Orders" />
              <MobileNavLink to="/about" label="About" />
              <MobileNavLink to="/contact" label="Contact" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, label, active }: { to: string; label: string; active: boolean }) => (
  <Link 
    to={to} 
    className={`text-lg font-medium transition duration-300 hover:text-amber-600 ${
      active ? 'text-amber-600 font-semibold' : 'text-gray-800'
    }`}
  >
    {label}
  </Link>
);

const MobileNavLink = ({ to, label }: { to: string; label: string }) => (
  <Link 
    to={to} 
    className="text-xl py-2 text-gray-800 font-medium hover:text-amber-600 transition duration-300"
  >
    {label}
  </Link>
);

export default Navbar;