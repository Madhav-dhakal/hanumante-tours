import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";


const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-24 h-24 mx-auto mb-6">
            <img 
              src="/lovable-uploads/2df12698-9722-4578-8439-376d7f8dfa62.png"
              alt="Hanumante Tours & Travels Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl font-semibold text-foreground mb-2">Trail Not Found</p>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Looks like this path doesn't lead anywhere. Let us guide you back to explore our amazing tours and adventures.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90" size="lg">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;