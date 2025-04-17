import React from 'react';
import { motion } from 'framer-motion';
import { StatData } from '../types/dataTypes';

interface StatCardProps {
  stat: StatData;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, delay }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-full opacity-50"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-gray-500 font-medium text-sm">{stat.label}</h3>
          <div className={`flex items-center ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            <span className="text-sm font-medium mr-1">
              {stat.trend === 'up' ? '+' : ''}{stat.change}%
            </span>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              initial={{ y: 0 }}
              animate={{ y: stat.trend === 'up' ? -2 : 2 }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
            >
              {stat.trend === 'up' ? (
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              )}
            </motion.svg>
          </div>
        </div>
        <motion.div
          className="text-3xl font-bold text-gray-800"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.2, type: 'spring', stiffness: 120 }}
        >
          {typeof stat.value === 'number' && stat.value % 1 === 0 ? 
            stat.value.toLocaleString() : 
            stat.value.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
          {stat.label.includes('Taux') && '%'}
          {stat.label.includes('Temps') && ' s'}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatCard;
