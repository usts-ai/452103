import React from 'react';
import { motion } from 'framer-motion';
import { SourceData } from '../types/dataTypes';

interface SourcesPieChartProps {
  data: SourceData[];
}

const SourcesPieChart: React.FC<SourcesPieChartProps> = ({ data }) => {
  const colors = [
    'bg-indigo-500',
    'bg-blue-500',
    'bg-purple-500',
    'bg-cyan-500',
    'bg-teal-500',
    'bg-gray-500'
  ];

  // Calculer les cumulatifs pour les positions des segments du donut
  const total = data.reduce((sum, item) => sum + item.percentage, 0);
  let cumulativePercentage = 0;

  const segments = data.map((item, index) => {
    const startPercentage = cumulativePercentage;
    cumulativePercentage += (item.percentage / total) * 100;
    const endPercentage = cumulativePercentage;
    
    return {
      ...item,
      startPercentage,
      endPercentage,
      color: colors[index % colors.length]
    };
  });

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Sources des données</h2>
        <p className="text-gray-500 mt-1">Distribution des produits par site source</p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-square relative">
            <svg viewBox="0 0 100 100" className="w-full">
              {segments.map((segment, index) => {
                const pathDescription = describeArc(
                  50, 50, 40, 
                  (segment.startPercentage * 3.6), 
                  (segment.endPercentage * 3.6)
                );
                
                return (
                  <motion.path
                    key={index}
                    d={pathDescription}
                    fill="none"
                    stroke={segment.color.replace('bg-', 'var(--')}
                    strokeWidth="20"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8 + (index * 0.1), duration: 1 }}
                    className={segment.color.replace('bg-', 'stroke-')}
                  />
                );
              })}
              <circle cx="50" cy="50" r="30" fill="white" />
              <text 
                x="50" 
                y="47" 
                fontSize="12" 
                textAnchor="middle" 
                fill="#6B7280"
              >
                Sources
              </text>
              <text 
                x="50" 
                y="60" 
                fontSize="16" 
                textAnchor="middle" 
                fontWeight="bold" 
                fill="#1F2937"
              >
                {data.length}
              </text>
            </svg>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-6 md:mt-0 space-y-4">
          {segments.map((segment, index) => (
            <motion.div 
              key={index} 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + (index * 0.1), duration: 0.3 }}
            >
              <div className={`w-4 h-4 rounded-full ${segment.color} mr-3`}></div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">{segment.source}</span>
                  <span className="text-gray-500">{segment.percentage}%</span>
                </div>
                <div className="mt-1 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full ${segment.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${segment.percentage}%` }}
                    transition={{ delay: 1.2 + (index * 0.1), duration: 0.7 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.button
        className="w-full mt-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors"
        whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
        whileTap={{ y: 0, boxShadow: 'none' }}
      >
        Exporter les données
      </motion.button>
    </motion.div>
  );
};

// Fonction pour calculer le tracé d'un arc de cercle
function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
  return [
    "M", start.x, start.y, 
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
}

export default SourcesPieChart;
