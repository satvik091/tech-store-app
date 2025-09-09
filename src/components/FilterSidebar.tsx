import { useState } from 'react';
import { ChevronDown, ChevronUp, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { FilterOptions } from '@/types/product';
import { categories, brands } from '@/data/products';

interface FilterSidebarProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const FilterSidebar = ({ 
  filters, 
  onFiltersChange, 
  isOpen, 
  onClose,
  className = "" 
}: FilterSidebarProps) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    brand: true,
    availability: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    const updatedCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    
    onFiltersChange({ ...filters, categories: updatedCategories });
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    const updatedBrands = checked
      ? [...filters.brands, brand]
      : filters.brands.filter(b => b !== brand);
    
    onFiltersChange({ ...filters, brands: updatedBrands });
  };

  const handlePriceChange = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: [value[0], value[1]] as [number, number] });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      categories: [],
      priceRange: [0, 2000],
      brands: [],
      inStockOnly: false
    });
  };

  const getActiveFilterCount = () => {
    return filters.categories.length + 
           filters.brands.length + 
           (filters.inStockOnly ? 1 : 0) +
           (filters.priceRange[0] > 0 || filters.priceRange[1] < 2000 ? 1 : 0);
  };

  const FilterSection = ({ 
    title, 
    sectionKey, 
    children 
  }: { 
    title: string; 
    sectionKey: keyof typeof expandedSections; 
    children: React.ReactNode 
  }) => (
    <div>
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full flex items-center justify-between py-3 font-medium text-card-foreground hover:text-primary transition-colors"
      >
        {title}
        {expandedSections[sectionKey] ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      {expandedSections[sectionKey] && (
        <div className="pb-4">{children}</div>
      )}
      <Separator className="my-2" />
    </div>
  );

  return (
    <div className={`surface-elevated ${className} ${isOpen ? 'block' : 'hidden lg:block'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="font-semibold text-card-foreground">Filters</h2>
          {getActiveFilterCount() > 0 && (
            <Badge variant="secondary" className="ml-2">
              {getActiveFilterCount()}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            disabled={getActiveFilterCount() === 0}
          >
            Clear All
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="lg:hidden"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Filter Content */}
      <div className="p-4 space-y-1">
        {/* Categories */}
        <FilterSection title="Categories" sectionKey="category">
          <div className="space-y-3">
            {categories.filter(cat => cat !== 'All').map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={filters.categories.includes(category)}
                  onCheckedChange={(checked) => 
                    handleCategoryChange(category, checked as boolean)
                  }
                />
                <label
                  htmlFor={`category-${category}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </FilterSection>

        {/* Price Range */}
        <FilterSection title="Price Range" sectionKey="price">
          <div className="space-y-4">
            <div className="px-2">
              <Slider
                value={filters.priceRange}
                onValueChange={handlePriceChange}
                max={2000}
                min={0}
                step={10}
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        </FilterSection>

        {/* Brands */}
        <FilterSection title="Brands" sectionKey="brand">
          <div className="space-y-3">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={filters.brands.includes(brand)}
                  onCheckedChange={(checked) => 
                    handleBrandChange(brand, checked as boolean)
                  }
                />
                <label
                  htmlFor={`brand-${brand}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </FilterSection>

        {/* Availability */}
        <FilterSection title="Availability" sectionKey="availability">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="in-stock"
              checked={filters.inStockOnly}
              onCheckedChange={(checked) => 
                onFiltersChange({ ...filters, inStockOnly: checked as boolean })
              }
            />
            <label
              htmlFor="in-stock"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              In Stock Only
            </label>
          </div>
        </FilterSection>
      </div>
    </div>
  );
};