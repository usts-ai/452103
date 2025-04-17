import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StatCard from '../components/StatCard';
import CategoryCard from '../components/CategoryCard';
import RecentProducts from '../components/RecentProducts';
import ScrapingChart from '../components/ScrapingChart';
import CategoryPerformance from '../components/CategoryPerformance';
import AIAccuracyChart from '../components/AIAccuracyChart';
import SourcesPieChart from '../components/SourcesPieChart';

import { 
  statData, 
  categories, 
  recentlyScrapedProducts, 
  weeklyScrapingData, 
  categoryPerformanceData, 
  aiClassificationAccuracy,
  sourcesData
} from '../data/mockData';

const Dashboard: React.FC = () => {
  useEffect(() => {
    document.title = 'DataVape | Dashboard';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <motion.div 
        className="relative pt-28 pb-10 px-4 mb-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform -skew-y-6 -translate-y-10 z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl font-bold text-white mb-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Tableau de bord DataVape
            </motion.h1>
            <motion.p 
              className="text-indigo-100 text-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Système d'aspiration de données pour l'industrie de la vape, propulsé par l'intelligence artificielle
            </motion.p>
          </div>
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4 pb-20">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statData.map((stat, index) => (
            <StatCard key={index} stat={stat} delay={0.1 * index} />
          ))}
        </div>
        
        {/* Deux colonnes principales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Colonne de gauche */}
          <div className="lg:col-span-2 space-y-6">
            {/* Graphique d'aspiration */}
            <ScrapingChart data={weeklyScrapingData} />
            
            {/* Catégories */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Catégories de produits</h2>
                <motion.button 
                  className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm font-medium"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Voir toutes les catégories
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.slice(0, 6).map((category, index) => (
                  <CategoryCard key={category.id} category={category} index={index} />
                ))}
              </div>
            </div>
            
            {/* Précision IA */}
            <AIAccuracyChart data={aiClassificationAccuracy} />
          </div>
          
          {/* Colonne de droite */}
          <div className="space-y-6">
            {/* Produits récents */}
            <RecentProducts products={recentlyScrapedProducts} />
            
            {/* Performance par catégorie */}
            <CategoryPerformance data={categoryPerformanceData} />
            
            {/* Sources */}
            <SourcesPieChart data={sourcesData} />
          </div>
        </div>
        
        {/* Section d'actions rapides */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-6">Actions rapides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Lancer une aspiration', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', color: 'from-blue-500 to-indigo-600' },
              { title: 'Gérer les catégories', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', color: 'from-purple-500 to-pink-600' },
              { title: 'Configurer l\'IA', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', color: 'from-amber-500 to-orange-600' },
              { title: 'Exporter les données', icon: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'from-emerald-500 to-teal-600' }
            ].map((action, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-100 rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (index * 0.1), duration: 0.3 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center mb-4`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center">{action.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
