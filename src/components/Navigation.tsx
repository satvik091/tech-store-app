import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Layers } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-foreground">
              UI Store
            </Link>
            
            <div className="hidden md:flex space-x-4">
              <Button 
                variant={location.pathname === '/' ? 'default' : 'ghost'} 
                size="sm"
                asChild
              >
                <Link to="/">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Products
                </Link>
              </Button>
              
              <Button 
                variant={location.pathname === '/components' ? 'default' : 'ghost'} 
                size="sm"
                asChild
              >
                <Link to="/components">
                  <Layers className="mr-2 h-4 w-4" />
                  Components
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button variant="outline" size="sm">
                <ShoppingBag className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                    variant="destructive"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </div>
            
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;