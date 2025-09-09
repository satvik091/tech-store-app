import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  isLazyLoading?: boolean;
}

export const ProductCard = ({ product, isLazyLoading = true }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart, isInCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!product.inStock) return;
    
    addToCart(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${product.name} ${isWishlisted ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-t-lg bg-muted">
          {/* Image */}
          <div className="aspect-square relative">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
            <img
              src={product.images[0]}
              alt={product.name}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading={isLazyLoading ? 'lazy' : 'eager'}
              onLoad={() => setImageLoaded(true)}
            />
            
            {/* Wishlist button */}
            <button
              onClick={handleWishlist}
              className={`absolute top-3 right-3 p-2 rounded-full bg-card/90 backdrop-blur-sm shadow-sm transition-all duration-200 ${
                isWishlisted 
                  ? 'text-accent scale-110' 
                  : 'text-muted-foreground hover:text-accent hover:scale-110'
              }`}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1">
              {discountPercentage > 0 && (
                <Badge className="bg-accent text-accent-foreground">
                  -{discountPercentage}%
                </Badge>
              )}
              {!product.inStock && (
                <Badge variant="destructive">
                  Out of Stock
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
            <h3 className="font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{product.brand}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-warning fill-current'
                      : 'text-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-bold text-card-foreground">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-4 pb-4">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full ${isInCart(product.id) ? 'bg-success hover:bg-success/90' : ''}`}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {isInCart(product.id) 
            ? 'In Cart' 
            : product.inStock 
              ? 'Add to Cart' 
              : 'Out of Stock'
          }
        </Button>
      </div>
    </div>
  );
};