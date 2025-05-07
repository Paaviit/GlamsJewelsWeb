import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import CategoryList from '../components/CategoryList';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { products, categories, testimonials } from '../data/productsData';

const HomePage = () => {
  // Filter for featured products
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Featured Collections
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handcrafted pieces, each created with exceptional attention to detail and quality craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/products" 
              className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition duration-300"
            >
              View All Collections
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/5370749/pexels-photo-5370749.jpeg" 
                alt="Jewelry crafting" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Crafted with Passion & Precision
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Glams Jewels, we blend traditional craftsmanship with modern design to create timeless pieces that celebrate life's precious moments. Each creation is meticulously crafted using only the finest materials.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our artisans bring decades of experience to every design, ensuring exceptional quality and attention to detail that transforms precious metals and gemstones into wearable art.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center px-6 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-medium rounded-md transition duration-300"
              >
                Our Story
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collections organized by category to find the perfect piece for any occasion.
            </p>
          </div>

          <CategoryList categories={categories} />
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Create Your Dream Jewelry
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Looking for something uniquely yours? Our master craftsmen can bring your vision to life through our custom design service.
          </p>
          <Link 
            to="/custom" 
            className="inline-flex items-center px-8 py-4 bg-white text-amber-600 hover:bg-gray-100 font-bold rounded-md transition duration-300 text-lg"
          >
            Request Custom Design
            <ChevronRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of our valued clients with Glams Jewels.
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;