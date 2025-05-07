import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/productsData';

const ProductsPage = () => {
  const location = useLocation();
  const [filter, setFilter] = useState('all');
  const [displayProducts, setDisplayProducts] = useState(products);
  
  // Handle hash navigation for categories
  useEffect(() => {
    if (location.hash) {
      const category = location.hash.slice(1); // Remove the # symbol
      const matchingCategory = categories.find(
        c => c.name.toLowerCase() === category.toLowerCase()
      );
      
      if (matchingCategory) {
        setFilter(matchingCategory.name);
      }
    }
  }, [location]);
  
  // Filter products when category filter changes
  useEffect(() => {
    if (filter === 'all') {
      setDisplayProducts(products);
    } else {
      setDisplayProducts(
        products.filter(product => product.category === filter)
      );
    }
  }, [filter]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="https://images.pexels.com/photos/2697786/pexels-photo-2697786.jpeg"
          alt="Jewelry collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Collections</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Discover the perfect piece to complement your personal style
            </p>
          </div>
        </div>
      </section>

      {/* Product Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <FilterButton 
              label="All" 
              active={filter === 'all'} 
              onClick={() => setFilter('all')} 
            />
            {categories.map(category => (
              <FilterButton 
                key={category.id}
                label={category.name} 
                active={filter === category.name} 
                onClick={() => setFilter(category.name)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              {filter === 'all' ? 'All Collections' : filter}
            </h2>
            <p className="text-gray-600">
              {filter === 'all' 
                ? `Showing all ${products.length} products` 
                : `Showing ${displayProducts.length} products in ${filter}`}
            </p>
          </div>

          {displayProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {displayProducts.map(product => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-700 mb-4">No products found in this category.</p>
              <button 
                onClick={() => setFilter('all')}
                className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition duration-300"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const FilterButton = ({ 
  label, 
  active, 
  onClick 
}: { 
  label: string; 
  active: boolean; 
  onClick: () => void 
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full transition duration-300 ${
      active 
        ? 'bg-amber-600 text-white' 
        : 'bg-white text-gray-800 hover:bg-gray-100'
    }`}
  >
    {label}
  </button>
);

export default ProductsPage;