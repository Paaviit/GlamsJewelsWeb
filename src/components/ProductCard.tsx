import React from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition duration-500 transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        <span className="absolute top-2 left-2 bg-amber-600 text-white px-3 py-1 text-xs rounded-full">
          {category}
        </span>
        <button 
          className="absolute top-2 right-2 h-9 w-9 rounded-full bg-white/80 flex items-center justify-center text-gray-700 hover:text-red-500 transition"
          aria-label="Add to favorites"
        >
          <Heart size={20} />
        </button>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-medium text-gray-900 mb-1">{name}</h3>
        <p className="text-amber-700 font-semibold">${price.toFixed(2)}</p>
        <button 
          className="mt-3 w-full py-2 bg-amber-600 hover:bg-amber-700 text-white rounded transition duration-300 transform hover:-translate-y-1"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;