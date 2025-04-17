import React from 'react';
import { motion } from 'framer-motion';
import { ProductCategory } from '../types/dataTypes';

interface CategoryCardProps {
  category: ProductCategory;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  const colors = [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-rose-500 to-red-600',
    'from-cyan-500 to-blue-600',
  ];

  const bgColor = colors[index % colors.length];
  
  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-lg relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
      whileHover={{ 
        y: -5, 
        boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.2)',
        transition: { duration: 0.2 }
      }}
    >
      <div className={`bg-gradient-to-br ${bgColor} p-6 pb-20`}>
        <h3 className="text-white font-bold text-xl">{category.name}</h3>
        <p className="text-white text-opacity-90 mt-1">
          {category.count} produits
        </p>
      </div>
      <div className="bg-white px-6 pt-6 pb-4 -mt-16 rounded-t-3xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-500 font-medium">Croissance</span>
          <div className={`flex items-center ${category.growthRate >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            <span className="text-sm font-semibold">
              {category.growthRate > 0 ? '+' : ''}{category.growthRate}%
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {category.growthRate >= 0 ? (
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              )}
            </svg>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <motion.div 
            className={`h-2 rounded-full bg-gradient-to-r ${bgColor}`}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, Math.max(20, category.count / 3))}%` }}
            transition={{ delay: 0.3 + (0.1 * index), duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-end">
          <motion.button
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Voir détails →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
