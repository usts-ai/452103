export interface ProductCategory {
  id: number;
  name: string;
  count: number;
  growthRate: number;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  imageUrl: string;
  scraped: Date;
  url: string;
}

export interface StatData {
  label: string;
  value: number;
  change: number;
  trend: 'up' | 'down';
}

export interface ScrapingData {
  day: string;
  count: number;
}

export interface CategoryPerformance {
  category: string;
  success: number;
  failure: number;
}

export interface AIAccuracyData {
  month: string;
  accuracy: number;
}

export interface SourceData {
  source: string;
  count: number;
  percentage: number;
}
