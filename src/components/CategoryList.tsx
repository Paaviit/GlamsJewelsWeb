import React from 'react';

interface Category {
  id: string;
  name: string;
  image: string;
}

interface CategoryListProps {
  categories: Category[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {categories.map((category) => (
        <div key={category.id} className="category-card group">
          <div className="relative rounded-lg overflow-hidden h-48 shadow-md">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <h3 className="absolute bottom-4 left-0 w-full text-center text-white text-xl font-medium">
              {category.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;