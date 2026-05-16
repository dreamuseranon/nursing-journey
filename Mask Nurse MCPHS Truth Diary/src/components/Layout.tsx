import { Link, useLocation } from 'react-router-dom';
import { Heart, Sparkles, Stethoscope, Home, BookOpen, User, Users, Star } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Floating medical decorations */}
      <div className="fixed top-16 left-6 pointer-events-none z-0 medical-float">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4 L16 28 M4 16 L28 16" stroke="hsl(265,55%,68%)" strokeWidth="4" strokeLinecap="round"/>
          <rect x="10" y="10" width="12" height="12" rx="2" fill="hsl(265,55%,68%)" opacity="0.3"/>
        </svg>
      </div>

      <div className="fixed top-40 right-8 pointer-events-none z-0 medical-float-2">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="12" stroke="hsl(340,65%,75%)" strokeWidth="2" fill="hsl(340,65%,95%)"/>
          <path d="M14 8 L14 20 M8 14 L20 14" stroke="hsl(340,65%,65%)" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="fixed top-64 left-12 pointer-events-none z-0 medical-float-3">
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none">
          <rect x="8" y="0" width="8" height="6" rx="2" fill="hsl(200,65%,72%)" opacity="0.6"/>
          <rect x="4" y="6" width="16" height="24" rx="3" fill="hsl(200,65%,88%)" stroke="hsl(200,65%,72%)" strokeWidth="1.5"/>
          <path d="M8 14 L16 14 M8 18 L14 18 M8 22 L12 22" stroke="hsl(200,65%,60%)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="fixed bottom-40 left-8 pointer-events-none z-0 medical-float">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M6 24 Q6 6 15 6 Q24 6 24 15 Q24 24 15 24" stroke="hsl(158,50%,68%)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <circle cx="24" cy="22" r="4" fill="hsl(158,50%,68%)" opacity="0.7"/>
        </svg>
      </div>

      <div className="fixed top-1/3 right-6 pointer-events-none z-0 medical-float-2">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 2 L13.5 8 L20 8.5 L15 13 L16.5 20 L11 16.5 L5.5 20 L7 13 L2 8.5 L8.5 8 Z" fill="hsl(265,55%,78%)" opacity="0.5"/>
        </svg>
      </div>

      <div className="fixed bottom-60 right-12 pointer-events-none z-0 medical-float-3">
        <Heart className="w-6 h-6 text-pink-300 opacity-40" fill="currentColor" />
      </div>

      <div className="fixed top-80 left-4 pointer-events-none z-0 sparkle-animation">
        <Sparkles className="w-5 h-5 opacity-20" style={{color: 'hsl(200,65%,72%)'}} />
      </div>

      {/* Nurse corner illustration */}
      <div className="fixed bottom-0 right-0 pointer-events-none z-0" style={{opacity: 0.07}}>
        <svg width="140" height="180" viewBox="0 0 140 180" fill="none">
          <ellipse cx="70" cy="60" rx="25" ry="28" fill="hsl(340,30%,85%)"/>
          <rect x="52" y="48" width="36" height="8" rx="4" fill="white"/>
          <path d="M45 90 Q45 130 50 160 L90 160 Q95 130 95 90 Q82 80 70 80 Q58 80 45 90Z" fill="white" stroke="hsl(200,65%,72%)" strokeWidth="2"/>
          <path d="M55 90 L55 130" stroke="hsl(200,65%,72%)" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M85 90 L85 130" stroke="hsl(200,65%,72%)" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M58 105 Q70 98 82 105" stroke="hsl(265,55%,68%)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <ellipse cx="44" cy="115" rx="10" ry="30" fill="white" stroke="hsl(200,65%,72%)" strokeWidth="1.5"/>
          <ellipse cx="96" cy="115" rx="10" ry="30" fill="white" stroke="hsl(200,65%,72%)" strokeWidth="1.5"/>
          <path d="M96 100 L115 85" stroke="hsl(265,55%,68%)" strokeWidth="2" strokeLinecap="round"/>
          <rect x="113" y="78" width="16" height="8" rx="2" fill="hsl(200,65%,72%)"/>
          <line x1="129" y1="82" x2="134" y2="82" stroke="hsl(265,55%,68%)" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M60 160 L55 180 L85 180 L80 160Z" fill="hsl(265,55%,78%)"/>
        </svg>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-primary/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-cute rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 pulse-glow">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <Sparkles className="w-4 h-4 text-primary absolute -top-1 -right-1 sparkle-animation" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient-pink" style={{fontFamily: 'Playfair Display, serif'}}>The Masked Nurse</h1>
                <p className="text-xs text-muted-foreground handwritten">honest stories from nursing school</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <Link to="/" className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${isActive('/') ? 'bg-primary text-primary-foreground shadow-md' : 'hover:bg-muted text-foreground'}`}>
                <Home className="w-4 h-4" />Home
              </Link>
              <Link to="/blog" className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${isActive('/blog') ? 'bg-primary text-primary-foreground shadow-md' : 'hover:bg-muted text-foreground'}`}>
                <BookOpen className="w-4 h-4" />Blog
              </Link>
              <Link to="/resources" className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${isActive('/resources') ? 'bg-primary text-primary-foreground shadow-md' : 'hover:bg-muted text-foreground'}`}>
                <Star className="w-4 h-4" />Resources
              </Link>
              <Link to="/student-stories" className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${isActive('/student-stories') ? 'bg-primary text-primary-foreground shadow-md' : 'hover:bg-muted text-foreground'}`}>
                <Users className="w-4 h-4" />Student Stories
              </Link>
              <Link to="/about" className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${isActive('/about') ? 'bg-primary text-primary-foreground shadow-md' : 'hover:bg-muted text-foreground'}`}>
                <User className="w-4 h-4" />About
              </Link>
            </nav>

            <nav className="md:hidden flex items-center gap-1">
              <Link to="/" className={`p-2 rounded-full ${isActive('/') ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}><Home className="w-5 h-5" /></Link>
              <Link to="/blog" className={`p-2 rounded-full ${isActive('/blog') ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}><BookOpen className="w-5 h-5" /></Link>
              <Link to="/resources" className={`p-2 rounded-full ${isActive('/resources') ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}><Star className="w-5 h-5" /></Link>
              <Link to="/student-stories" className={`p-2 rounded-full ${isActive('/student-stories') ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}><Users className="w-5 h-5" /></Link>
              <Link to="/about" className={`p-2 rounded-full ${isActive('/about') ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}><User className="w-5 h-5" /></Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {children}
      </main>

      <footer className="mt-20 border-t-2 border-primary/15 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-gradient-pink" style={{fontFamily: 'Playfair Display, serif'}}>The Masked Nurse</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              An anonymous space for honest stories and real experiences from nursing school. Speaking truth without consequences.
            </p>
            <div className="flex items-center gap-3 text-primary">
              <Heart className="w-4 h-4" fill="currentColor" />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 20Q6 6 12 6Q18 6 18 13Q18 20 12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="18" cy="18" r="3" fill="currentColor"/></svg>
              <Heart className="w-4 h-4" fill="currentColor" />
            </div>
            <p className="text-xs text-muted-foreground max-w-lg leading-relaxed italic">
              Disclaimer: All content on this blog reflects the personal opinions, alleged experiences, and subjective perceptions of an anonymous student. All statements are alleged and represent the authors personal experience only. Nothing on this site is intended as fact, legal advice, or reporting. This blog is protected under the First Amendment as personal opinion and free speech. All patient details have been changed or omitted to protect privacy.
            </p>
            <p className="text-xs text-muted-foreground">© 2026 The Masked Nurse • Stay Anonymous, Stay True</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
