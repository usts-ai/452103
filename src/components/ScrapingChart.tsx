import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ScrapingData {
  day: string;
  count: number;
}

interface ScrapingChartProps {
  data: ScrapingData[];
}

const ScrapingChart: React.FC<ScrapingChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  
  // Trouver la valeur maximale pour le scaling
  const maxValue = Math.max(...data.map(item => item.count));
  
  useEffect(() => {
    // Animation des barres pourrait être gérée ici si besoin
  }, []);

  return (
    <motion.div
      ref={chartRef}
      className="bg-white rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Activité d'aspiration</h2>
        <p className="text-gray-500 mt-1">Nombre de produits aspirés cette semaine</p>
      </div>
      
      <div className="flex items-end justify-between h-60 pt-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.div 
              className="w-12 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg relative group"
              style={{ height: `${(item.count / maxValue) * 100}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${(item.count / maxValue) * 100}%` }}
              transition={{ delay: 0.1 * index + 0.5, duration: 0.8, ease: "easeOut" }}
              whileHover={{ filter: 'brightness(1.1)' }}
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.count} produits
              </div>
            </motion.div>
            <div className="text-gray-600 text-sm mt-2">{item.day}</div>
          </div>
        ))}
      </div>
      
      {/* Ligne de référence */}
      <div className="w-full h-px bg-gray-200 mt-4"></div>
      
      <div className="flex justify-between mt-6">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
          <span className="text-gray-600 text-sm">Produits aspirés</span>
        </div>
        <motion.button
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Rapport détaillé
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ScrapingChart;
