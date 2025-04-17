import { ProductCategory, Product, StatData } from '../types/dataTypes';

export const categories: ProductCategory[] = [
  { id: 1, name: 'E-liquides', count: 245, growthRate: 12 },
  { id: 2, name: 'Cigarettes électroniques', count: 124, growthRate: 8 },
  { id: 3, name: 'Pods', count: 89, growthRate: 15 },
  { id: 4, name: 'Accessoires', count: 156, growthRate: 5 },
  { id: 5, name: 'Résistances', count: 78, growthRate: -2 },
  { id: 6, name: 'Batteries', count: 45, growthRate: 3 },
];

export const recentlyScrapedProducts: Product[] = [
  {
    id: 1,
    name: 'Fraise Tagada 10ml',
    category: 'E-liquides',
    brand: 'VapeFrance',
    price: 5.99,
    imageUrl: 'https://images.unsplash.com/photo-1595392029660-0142b99cef56?q=80&w=200&auto=format&fit=crop',
    scraped: new Date('2025-04-17T14:35:00'),
    url: 'https://vapestore.fr/products/fraise-tagada',
  },
  {
    id: 2,
    name: 'Pod System XY2',
    category: 'Pods',
    brand: 'VapeTech',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1577721262798-a8144b536fa8?q=80&w=200&auto=format&fit=crop',
    scraped: new Date('2025-04-17T13:12:00'),
    url: 'https://vapestore.fr/products/pod-xy2',
  },
  {
    id: 3,
    name: 'Mod Box Pro 200W',
    category: 'Cigarettes électroniques',
    brand: 'TechVape',
    price: 79.90,
    imageUrl: 'https://images.unsplash.com/photo-1560431966-9f6997c24be1?q=80&w=200&auto=format&fit=crop',
    scraped: new Date('2025-04-17T12:05:00'),
    url: 'https://vapestore.fr/products/mod-box-pro',
  },
  {
    id: 4,
    name: 'Drip Tip Résine',
    category: 'Accessoires',
    brand: 'VapeArt',
    price: 12.50,
    imageUrl: 'https://images.unsplash.com/photo-1626271656239-25b30669dc7c?q=80&w=200&auto=format&fit=crop',
    scraped: new Date('2025-04-17T11:28:00'),
    url: 'https://vapestore.fr/products/drip-tip-resine',
  },
  {
    id: 5,
    name: 'Batterie 18650 3000mAh',
    category: 'Batteries',
    brand: 'PowerVape',
    price: 8.99,
    imageUrl: 'https://images.unsplash.com/photo-1606656353056-e118dac24cf1?q=80&w=200&auto=format&fit=crop',
    scraped: new Date('2025-04-17T10:42:00'),
    url: 'https://vapestore.fr/products/batterie-18650',
  },
];

export const statData: StatData[] = [
  { label: 'Produits aspirés aujourd\'hui', value: 136, change: 12, trend: 'up' },
  { label: 'Sites analysés', value: 24, change: 3, trend: 'up' },
  { label: 'Taux de précision IA', value: 94.2, change: 1.5, trend: 'up' },
  { label: 'Temps moyen d\'aspiration', value: 2.8, change: -0.4, trend: 'down' },
];

export const weeklyScrapingData = [
  { day: 'Lun', count: 120 },
  { day: 'Mar', count: 145 },
  { day: 'Mer', count: 132 },
  { day: 'Jeu', count: 163 },
  { day: 'Ven', count: 136 },
  { day: 'Sam', count: 84 },
  { day: 'Dim', count: 72 },
];

export const categoryPerformanceData = [
  { category: 'E-liquides', success: 92, failure: 8 },
  { category: 'Cigarettes électroniques', success: 88, failure: 12 },
  { category: 'Pods', success: 95, failure: 5 },
  { category: 'Accessoires', success: 90, failure: 10 },
  { category: 'Résistances', success: 85, failure: 15 },
  { category: 'Batteries', success: 93, failure: 7 },
];

export const aiClassificationAccuracy = [
  { month: 'Jan', accuracy: 86 },
  { month: 'Fév', accuracy: 87 },
  { month: 'Mar', accuracy: 89 },
  { month: 'Avr', accuracy: 91 },
  { month: 'Mai', accuracy: 92 },
  { month: 'Juin', accuracy: 92 },
  { month: 'Juil', accuracy: 93 },
  { month: 'Août', accuracy: 92 },
  { month: 'Sep', accuracy: 93 },
  { month: 'Oct', accuracy: 94 },
  { month: 'Nov', accuracy: 94 },
  { month: 'Déc', accuracy: 95 },
];

export const sourcesData = [
  { source: 'vapefrance.com', count: 412, percentage: 28 },
  { source: 'e-clope.fr', count: 356, percentage: 24 },
  { source: 'lepetitvapoteur.com', count: 289, percentage: 19 },
  { source: 'vapoclope.fr', count: 165, percentage: 11 },
  { source: 'taklope.com', count: 134, percentage: 9 },
  { source: 'autres', count: 135, percentage: 9 },
];
