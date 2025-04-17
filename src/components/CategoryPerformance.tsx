import React from 'react';
import { motion } from 'framer-motion';
import { CategoryPerformance as CategoryPerformanceType } from '../types/dataTypes';

interface CategoryPerformanceProps {
  data: CategoryPerformanceType[];
}

const CategoryPerformance: React.FC<CategoryPerformanceProps> = ({ data }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Performance par catégorie</h2>
        <p className="text-gray-500 mt-1">Taux de réussite d'aspiration par catégorie</p>
      </div>
      
      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">{item.category}</span>
              <span className="text-gray-600">{item.success}%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-green-300 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${item.success}%` }}
                transition={{ delay: 0.1 * index + 0.6, duration: 1, ease: "easeOut" }}
              />
            </div>
            <div className="flex text-xs justify-between">
              <span className="text-green-600">{item.success}% réussi</span>
              <span className="text-red-500">{item.failure}% échoué</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-100">
        <motion.button
          className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium rounded-lg transition-colors"
          whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(4, 120, 87, 0.3)' }}
          whileTap={{ y: 0, boxShadow: 'none' }}
        >
          Voir rapport détaillé
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CategoryPerformance;
