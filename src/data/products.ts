import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    description: 'Experience crystal-clear sound with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&h=600&fit=crop'
    ],
    category: 'Electronics',
    brand: 'AudioTech',
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    tags: ['wireless', 'noise-cancelling', 'premium'],
    features: ['Active Noise Cancellation', '30-hour battery', 'Quick charge', 'Premium materials']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    description: 'Track your health and fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and 7-day battery life.',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop'
    ],
    category: 'Electronics',
    brand: 'FitTech',
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    tags: ['fitness', 'smartwatch', 'health'],
    features: ['Heart rate monitoring', 'GPS tracking', '7-day battery', 'Water resistant']
  },
  {
    id: '3',
    name: 'Professional Camera Lens',
    price: 1299.99,
    description: 'Capture stunning photos with this professional-grade camera lens featuring ultra-sharp optics and weather sealing.',
    images: [
      'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1491796014055-00c0bb7884c5?w=800&h=600&fit=crop'
    ],
    category: 'Photography',
    brand: 'LensMaster',
    rating: 4.9,
    reviewCount: 45,
    inStock: true,
    tags: ['professional', 'photography', 'lens'],
    features: ['Ultra-sharp optics', 'Weather sealing', 'Fast autofocus', 'Professional grade']
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    price: 449.99,
    originalPrice: 599.99,
    description: 'Work comfortably all day with this premium ergonomic office chair featuring lumbar support and breathable mesh.',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=800&h=600&fit=crop'
    ],
    category: 'Furniture',
    brand: 'ErgoComfort',
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    tags: ['ergonomic', 'office', 'comfort'],
    features: ['Lumbar support', 'Breathable mesh', 'Height adjustable', '360° swivel']
  },
  {
    id: '5',
    name: 'Gaming Mechanical Keyboard',
    price: 159.99,
    description: 'Enhance your gaming experience with this RGB mechanical keyboard featuring tactile switches and customizable lighting.',
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&h=600&fit=crop'
    ],
    category: 'Electronics',
    brand: 'GameTech',
    rating: 4.5,
    reviewCount: 156,
    inStock: false,
    tags: ['gaming', 'mechanical', 'rgb'],
    features: ['Mechanical switches', 'RGB lighting', 'Programmable keys', 'Gaming optimized']
  },
  {
    id: '6',
    name: 'Wireless Phone Charger',
    price: 39.99,
    description: 'Charge your devices wirelessly with this sleek and efficient charging pad supporting fast charging.',
    images: [
      'https://images.unsplash.com/photo-1609592036344-c6132bab7cfc?w=800&h=600&fit=crop'
    ],
    category: 'Accessories',
    brand: 'ChargePlus',
    rating: 4.3,
    reviewCount: 78,
    inStock: true,
    tags: ['wireless', 'charger', 'fast-charging'],
    features: ['Wireless charging', 'Fast charge support', 'LED indicator', 'Universal compatibility']
  }
];

export const categories = ['All', 'Electronics', 'Photography', 'Furniture', 'Accessories'];
export const brands = ['AudioTech', 'FitTech', 'LensMaster', 'ErgoComfort', 'GameTech', 'ChargePlus'];