import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types/dataTypes';

interface RecentProductsProps {
  products: Product[];
}

const RecentProducts: React.FC<RecentProductsProps> = ({ products }) => {
  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800">Produits récemment aspirés</h2>
        <p className="text-gray-500 mt-1">Derniers produits ajoutés à la base de données</p>
      </div>
      <div className="divide-y divide-gray-100">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="p-5 hover:bg-gray-50 transition-colors cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index + 0.4, duration: 0.3 }}
            whileHover={{ backgroundColor: '#f9fafb' }}
          >
            <div className="flex items-center space-x-4">
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-16 h-16 rounded-md object-cover shadow-sm"
                />
              </motion.div>
              <div className="flex-1 min-w-0">
                <h3 className="text-md font-medium text-gray-800 truncate">{product.name}</h3>
                <div className="flex items-center mt-1">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800">
                    {product.category}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    {product.brand}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-lg font-semibold text-gray-800">
                  {product.price.toFixed(2)} €
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {formatTime(product.scraped)}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <motion.button
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
          whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)' }}
          whileTap={{ y: 0, boxShadow: 'none' }}
        >
          Voir tous les produits
        </motion.button>
      </div>
    </motion.div>
  );
};

export default RecentProducts;
