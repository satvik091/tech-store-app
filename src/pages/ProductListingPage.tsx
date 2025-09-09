import { useState, useMemo, useEffect } from 'react';
import { Filter, Grid, List, ShoppingCart, SortAsc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/ProductCard';
import { SearchBar } from '@/components/SearchBar';
import { FilterSidebar } from '@/components/FilterSidebar';
import { mockProducts } from '@/data/products';
import { FilterOptions, SortOption, Product } from '@/types/product';
import { useCart } from '@/hooks/useCart';

const ProductListingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    priceRange: [0, 2000],
    brands: [],
    inStockOnly: false
  });
  
  const { cart } = useCart();

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = mockProducts.filter(product => {
      // Search query
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (!matchesSearch) return false;

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }

      // Stock filter
      if (filters.inStockOnly && !product.inStock) {
        return false;
      }

      return true;
    });

    // Sort products
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id.localeCompare(a.id); // Mock: using ID as date
        case 'popular':
        default:
          return b.reviewCount - a.reviewCount;
      }
    });
  }, [searchQuery, sortBy, filters]);

  // Handle SEO
  useEffect(() => {
    document.title = `Premium E-Commerce Store - ${filteredAndSortedProducts.length} Products`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `Shop from our collection of ${filteredAndSortedProducts.length} premium products. Find electronics, furniture, photography equipment and more with fast shipping.`
      );
    }
  }, [filteredAndSortedProducts.length]);

  const getActiveFilterCount = () => {
    return filters.categories.length + 
           filters.brands.length + 
           (filters.inStockOnly ? 1 : 0) +
           (filters.priceRange[0] > 0 || filters.priceRange[1] < 2000 ? 1 : 0);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gradient">TechStore</h1>
              {cart.itemCount > 0 && (
                <Button variant="outline" className="relative">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                    {cart.itemCount}
                  </Badge>
                </Button>
              )}
            </div>
          </div>

          {/* Search and Controls */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search products, brands, categories..."
              />
            </div>
            
            <div className="flex items-center gap-2">
              {/* Sort */}
              <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
                <SelectTrigger className="w-48">
                  <SortAsc className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="hidden md:flex border border-border rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="px-3"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="px-3"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Filter Toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden relative"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                {getActiveFilterCount() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                    {getActiveFilterCount()}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-80 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              isOpen={showFilters}
              onClose={() => setShowFilters(false)}
            />
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-card-foreground">
                  {filteredAndSortedProducts.length} Products
                </h2>
                {searchQuery && (
                  <p className="text-muted-foreground">
                    Results for "{searchQuery}"
                  </p>
                )}
              </div>
              
              {getActiveFilterCount() > 0 && (
                <Badge variant="secondary">
                  {getActiveFilterCount()} filter{getActiveFilterCount() !== 1 ? 's' : ''} active
                </Badge>
              )}
            </div>

            {/* Products */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'
                  : 'space-y-4'
              }>
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    isLazyLoading={true}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <h3 className="text-lg font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search criteria or filters to find what you're looking for.
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchQuery('');
                      setFilters({
                        categories: [],
                        priceRange: [0, 2000],
                        brands: [],
                        inStockOnly: false
                      });
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;