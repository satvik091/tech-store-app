export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  tags: string[];
  features: string[];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface FilterOptions {
  categories: string[];
  priceRange: [number, number];
  brands: string[];
  inStockOnly: boolean;
}

export type SortOption = 'price-low' | 'price-high' | 'rating' | 'newest' | 'popular';