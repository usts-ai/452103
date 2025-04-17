import React from 'react';
import { motion } from 'framer-motion';
import { AIAccuracyData } from '../types/dataTypes';

interface AIAccuracyChartProps {
  data: AIAccuracyData[];
}

const AIAccuracyChart: React.FC<AIAccuracyChartProps> = ({ data }) => {
  // Trouver min et max pour le scaling
  const minValue = Math.min(...data.map(item => item.accuracy)) * 0.95; // 95% de la valeur minimale pour avoir un peu d'espace
  const maxValue = 100; // 100% est le maximum pour la précision

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Précision de l'IA</h2>
        <p className="text-gray-500 mt-1">Évolution de la précision de classification sur 12 mois</p>
      </div>
      
      <div className="relative h-64">
        {/* Lignes horizontales */}
        {[0, 25, 50, 75, 100].map((level, index) => (
          <div key={index} className="absolute w-full h-px bg-gray-100" style={{ bottom: `${level}%` }}>
            <span className="absolute -left-7 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">{level}%</span>
          </div>
        ))}
        
        {/* Courbe */}
        <div className="absolute inset-0 flex items-end">
          <svg className="w-full h-full" viewBox={`0 0 ${data.length - 1} 100`} preserveAspectRatio="none">
            {/* Aire sous la courbe */}
            <motion.path
              d={`
                M0,${100 - (data[0].accuracy - minValue) / (maxValue - minValue) * 100}
                ${data.map((item, i) => `L${i},${100 - (item.accuracy - minValue) / (maxValue - minValue) * 100}`).join(' ')}
                L${data.length - 1},100 L0,100 Z
              `}
              fill="url(#gradient)"
              opacity="0.3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.8, duration: 1 }}
            />
            
            {/* Ligne de la courbe */}
            <motion.path
              d={`
                M0,${100 - (data[0].accuracy - minValue) / (maxValue - minValue) * 100}
                ${data.map((item, i) => `L${i},${100 - (item.accuracy - minValue) / (maxValue - minValue) * 100}`).join(' ')}
              `}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* Points sur la courbe */}
            {data.map((item, i) => (
              <motion.circle
                key={i}
                cx={i}
                cy={100 - (item.accuracy - minValue) / (maxValue - minValue) * 100}
                r="4"
                fill="#6366F1"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + (i * 0.05), duration: 0.5, type: "spring" }}
                className="hover:r-6 cursor-pointer transition-all"
              />
            ))}
            
            {/* Définition du gradient */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Labels des mois en bas */}
      <div className="grid grid-cols-12 mt-4">
        {data.map((item, index) => (
          <div key={index} className="text-center text-xs text-gray-500">
            {item.month}
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-indigo-600 mr-2"></div>
          <span className="text-gray-600 text-sm">Précision (%)</span>
        </div>
        <div className="text-indigo-600 font-semibold">
          Moyenne: {(data.reduce((sum, item) => sum + item.accuracy, 0) / data.length).toFixed(1)}%
        </div>
      </div>
    </motion.div>
  );
};

export default AIAccuracyChart;
