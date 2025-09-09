import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "Page Not Found - TechStore";
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-card-foreground mb-2">Page Not Found</h2>
          <p className="text-muted-foreground mb-6">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="btn-primary">
            <a href="/">
              <Home className="h-4 w-4 mr-2" />
              Go to Home
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/">
              <Search className="h-4 w-4 mr-2" />
              Browse Products
            </a>
          </Button>
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          Error Code: 404 | Requested: {location.pathname}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
