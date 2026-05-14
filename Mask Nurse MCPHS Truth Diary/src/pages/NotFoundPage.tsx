import { Link } from 'react-router-dom';
import { Home, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8 relative inline-block">
          <div className="text-9xl font-bold text-gradient-pink">404</div>
          <Sparkles className="absolute -top-4 -right-4 w-12 h-12 text-primary sparkle-animation" />
          <Heart className="absolute -bottom-2 -left-4 w-8 h-8 text-pink-400 float-decoration" fill="currentColor" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">
          Oops! Page Not Found
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Looks like this page doesn't exist yet. Let's get you back to the blog!
        </p>
        
        <Link to="/">
          <Button size="lg" className="bubbly-button bg-primary hover:bg-primary/90">
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </Link>
        
        <div className="mt-8 flex items-center justify-center gap-2 text-primary">
          <Heart className="w-4 h-4" fill="currentColor" />
          <Sparkles className="w-4 h-4" />
          <Heart className="w-4 h-4" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
