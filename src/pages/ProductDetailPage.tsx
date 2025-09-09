import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  ShoppingCart, 
  Star, 
  Plus, 
  Minus,
  Truck,
  Shield,
  RotateCcw,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ImageGallery } from '@/components/ImageGallery';
import { ProductCard } from '@/components/ProductCard';
import { mockProducts } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart, isInCart, getItemQuantity } = useCart();
  const { toast } = useToast();

  const product = mockProducts.find(p => p.id === id);

  // Redirect if product not found
  useEffect(() => {
    if (!product) {
      navigate('/', { replace: true });
    }
  }, [product, navigate]);

  // SEO and meta tags
  useEffect(() => {
    if (product) {
      document.title = `${product.name} - TechStore`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          `${product.description.slice(0, 155)}...`
        );
      }
    }
  }, [product]);

  if (!product) {
    return null;
  }

  // Related products (same category, excluding current product)
  const relatedProducts = mockProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const currentCartQuantity = getItemQuantity(product.id);

  const handleAddToCart = () => {
    if (!product.inStock) return;
    
    addToCart(product, quantity);
    toast({
      title: "Added to Cart",
      description: `${quantity} ${product.name}${quantity > 1 ? 's' : ''} added to your cart.`,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${product.name} ${isWishlisted ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Sharing failed');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Product link copied to clipboard.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav className="border-b border-border bg-surface/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-primary hover:text-primary-hover transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">{product.category}</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-card-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Image Gallery */}
          <div>
            <ImageGallery 
              images={product.images} 
              productName={product.name}
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{product.brand}</Badge>
                {discountPercentage > 0 && (
                  <Badge className="bg-accent text-accent-foreground">
                    -{discountPercentage}% OFF
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>
              
              <h1 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-2">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-warning fill-current'
                          : 'text-muted-foreground/30'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-card-foreground">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3 text-card-foreground">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium">Quantity:</label>
                  <div className="flex items-center border border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      className="h-9 w-9 p-0"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 text-sm font-medium min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-9 w-9 p-0"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {currentCartQuantity > 0 && (
                  <div className="text-sm text-muted-foreground">
                    {currentCartQuantity} already in cart
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 h-12 text-base"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {isInCart(product.id) 
                    ? 'Add More to Cart' 
                    : product.inStock 
                      ? `Add to Cart - $${(product.price * quantity).toFixed(2)}`
                      : 'Out of Stock'
                  }
                </Button>

                <Button
                  variant="outline"
                  onClick={handleWishlist}
                  className="h-12 px-4"
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current text-accent' : ''}`} />
                </Button>

                <Button
                  variant="outline"
                  onClick={handleShare}
                  className="h-12 px-4"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-surface rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-card-foreground">Free Shipping</p>
                  <p className="text-sm text-muted-foreground">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-card-foreground">30-Day Returns</p>
                  <p className="text-sm text-muted-foreground">Easy return policy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-card-foreground">2-Year Warranty</p>
                  <p className="text-sm text-muted-foreground">Manufacturer warranty included</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
              <h4 className="font-semibold mt-6 mb-3 text-card-foreground">Features & Benefits</h4>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Brand</span>
                  <span className="text-muted-foreground">{product.brand}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Category</span>
                  <span className="text-muted-foreground">{product.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Rating</span>
                  <span className="text-muted-foreground">{product.rating}/5</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">In Stock</span>
                  <span className={product.inStock ? "text-success" : "text-destructive"}>
                    {product.inStock ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold">{product.rating}</div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-warning fill-current'
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">Based on {product.reviewCount} reviews</p>
                </div>
              </div>
              <div className="text-center py-8 text-muted-foreground">
                <p>Review system coming soon. Customer reviews will be displayed here.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-card-foreground">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard 
                  key={relatedProduct.id} 
                  product={relatedProduct}
                  isLazyLoading={true}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;