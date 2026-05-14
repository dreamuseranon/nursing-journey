import { Link, useLocation } from 'react-router-dom';
import { Heart, Sparkles, Stethoscope, Home, BookOpen, User } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="min-h-screen">
      {/* Floating decorations */}
      <div className="fixed top-10 left-10 text-pink-300 opacity-50 float-decoration pointer-events-none z-0">
        <Heart className="w-8 h-8" fill="currentColor" />
      </div>
      <div className="fixed top-32 right-20 text-purple-300 opacity-40 float-decoration pointer-events-none z-0" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-10 h-10" />
      </div>
      <div className="fixed bottom-20 left-1/4 text-coral-400 opacity-30 float-decoration pointer-events-none z-0" style={{ animationDelay: '2s' }}>
        <Heart className="w-6 h-6" fill="currentColor" />
      </div>
      <div className="fixed top-1/3 right-10 text-mint-400 opacity-40 sparkle-animation pointer-events-none z-0">
        <Sparkles className="w-7 h-7" />
      </div>
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-4 border-primary/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-cute rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <Sparkles className="w-4 h-4 text-primary absolute -top-1 -right-1 sparkle-animation" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient-pink">
                  The Masked Nurse
                </h1>
                <p className="text-xs text-muted-foreground handwritten">
                  honest stories from nursing school
                </p>
              </div>
            </Link>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <Link
                to="/"
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  isActive('/')
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'hover:bg-muted'
                }`}
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link
                to="/blog"
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  isActive('/blog')
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'hover:bg-muted'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Blog
              </Link>
              <Link
                to="/about"
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  isActive('/about')
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'hover:bg-muted'
                }`}
              >
                <User className="w-4 h-4" />
                About
              </Link>
            </nav>
            
            {/* Mobile nav */}
            <nav className="md:hidden flex items-center gap-2">
              <Link
                to="/"
                className={`p-2 rounded-full ${
                  isActive('/') ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
              >
                <Home className="w-5 h-5" />
              </Link>
              <Link
                to="/blog"
                className={`p-2 rounded-full ${
                  isActive('/blog') ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
              >
                <BookOpen className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className={`p-2 rounded-full ${
                  isActive('/about') ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
              >
                <User className="w-5 h-5" />
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="relative z-10">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="mt-20 border-t-4 border-primary/20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-gradient-pink">The Masked Nurse</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              An anonymous space for honest stories and real experiences from nursing school.
              Speaking truth without consequences.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Heart className="w-4 h-4" fill="currentColor" />
              <Sparkles className="w-4 h-4" />
              <Heart className="w-4 h-4" fill="currentColor" />
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 The Masked Nurse • Stay Anonymous, Stay True
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
