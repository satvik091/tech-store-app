import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({ 
  value, 
  onChange, 
  placeholder = "Search products...",
  className = ""
}: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChange('');
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`relative transition-all duration-200 ${
        isFocused ? 'scale-105' : ''
      }`}>
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`pl-10 pr-10 h-12 bg-surface border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 ${
            isFocused ? 'shadow-md' : 'shadow-sm'
          }`}
        />

        {value && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 hover:bg-muted"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      {isFocused && (
        <div className="absolute inset-0 -z-10 bg-primary/5 rounded-lg blur-xl" />
      )}
    </div>
  );
};