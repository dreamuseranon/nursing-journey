import { Link, useLocation } from 'react-router-dom';
import { Heart, Sparkles, Stethoscope, Home, BookOpen, User, Users, Star } from 'lucide-react';

function KawaiiNurse({ size = 160, className = '' }: { size?: number, className?: string }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 160 210" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Nurse cap */}
      <ellipse cx="80" cy="42" rx="34" ry="8" fill="white" stroke="hsl(263,52%,72%)" strokeWidth="1.5"/>
      <rect x="46" y="34" width="68" height="12" rx="4" fill="white" stroke="hsl(263,52%,72%)" strokeWidth="1.5"/>
      <rect x="70" y="28" width="20" height="10" rx="3" fill="white" stroke="hsl(263,52%,72%)" strokeWidth="1.5"/>
      {/* Red cross on cap */}
      <rect x="78" y="30" width="4" height="10" rx="1" fill="hsl(340,60%,72%)"/>
      <rect x="74" y="34" width="12" height="4" rx="1" fill="hsl(340,60%,72%)"/>
      {/* Head */}
      <ellipse cx="80" cy="72" rx="30" ry="32" fill="hsl(30,40%,90%)"/>
      {/* Eyes - big kawaii */}
      <ellipse cx="68" cy="68" rx="7" ry="8" fill="hsl(250,40%,25%)"/>
      <ellipse cx="92" cy="68" rx="7" ry="8" fill="hsl(250,40%,25%)"/>
      <ellipse cx="70" cy="66" rx="2.5" ry="3" fill="white"/>
      <ellipse cx="94" cy="66" rx="2.5" ry="3" fill="white"/>
      <circle cx="71" cy="65" r="1" fill="white" opacity="0.8"/>
      <circle cx="95" cy="65" r="1" fill="white" opacity="0.8"/>
      {/* Blush */}
      <ellipse cx="58" cy="76" rx="8" ry="5" fill="hsl(340,60%,80%)" opacity="0.5"/>
      <ellipse cx="102" cy="76" rx="8" ry="5" fill="hsl(340,60%,80%)" opacity="0.5"/>
      {/* MASK - the signature element */}
      <rect x="56" y="74" width="48" height="24" rx="10" fill="hsl(195,60%,85%)" stroke="hsl(195,60%,65%)" strokeWidth="1.5"/>
      <path d="M56 82 Q80 88 104 82" stroke="hsl(195,60%,65%)" strokeWidth="1" fill="none"/>
      <path d="M56 90 Q80 96 104 90" stroke="hsl(195,60%,65%)" strokeWidth="1" fill="none" opacity="0.5"/>
      {/* Mask strings */}
      <path d="M56 78 Q46 72 50 65" stroke="hsl(195,60%,65%)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M104 78 Q114 72 110 65" stroke="hsl(195,60%,65%)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* Body - scrubs */}
      <path d="M42 108 Q42 160 48 195 L112 195 Q118 160 118 108 Q100 96 80 96 Q60 96 42 108Z" fill="hsl(195,60%,82%)" stroke="hsl(195,60%,65%)" strokeWidth="1.5"/>
      {/* Scrub details */}
      <rect x="70" y="110" width="20" height="14" rx="3" fill="white" stroke="hsl(195,60%,65%)" strokeWidth="1" opacity="0.7"/>
      {/* Red cross on scrubs */}
      <rect x="78" y="112" width="4" height="10" rx="1" fill="hsl(340,60%,72%)"/>
      <rect x="74" y="116" width="12" height="4" rx="1" fill="hsl(340,60%,72%)"/>
      {/* Arms */}
      <ellipse cx="36" cy="138" rx="12" ry="36" fill="hsl(195,60%,82%)" stroke="hsl(195,60%,65%)" strokeWidth="1.5"/>
      <ellipse cx="124" cy="138" rx="12" ry="36" fill="hsl(195,60%,82%)" stroke="hsl(195,60%,65%)" strokeWidth="1.5"/>
      {/* Right hand holding clipboard */}
      <rect x="118" y="158" width="22" height="28" rx="4" fill="hsl(40,60%,90%)" stroke="hsl(40,40%,60%)" strokeWidth="1.2"/>
      <rect x="122" y="162" width="14" height="2" rx="1" fill="hsl(263,52%,65%)" opacity="0.6"/>
      <rect x="122" y="167" width="14" height="2" rx="1" fill="hsl(263,52%,65%)" opacity="0.6"/>
      <rect x="122" y="172" width="10" height="2" rx="1" fill="hsl(263,52%,65%)" opacity="0.6"/>
      <rect x="126" y="156" width="6" height="5" rx="1" fill="hsl(263,52%,65%)" opacity="0.8"/>
      {/* Left hand holding stethoscope */}
      <path d="M24 148 Q14 138 18 125" stroke="hsl(263,52%,65%)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="17" cy="122" r="5" fill="hsl(263,52%,65%)" opacity="0.8"/>
      {/* Legs */}
      <rect x="56" y="192" width="22" height="18" rx="4" fill="hsl(250,30%,85%)"/>
      <rect x="82" y="192" width="22" height="18" rx="4" fill="hsl(250,30%,85%)"/>
      {/* Shoes */}
      <ellipse cx="67" cy="210" rx="14" ry="5" fill="white" stroke="hsl(263,52%,72%)" strokeWidth="1"/>
      <ellipse cx="93" cy="210" rx="14" ry="5" fill="white" stroke="hsl(263,52%,72%)" strokeWidth="1"/>
      {/* Sparkles around nurse */}
      <path d="M138 50 L140 44 L142 50 L148 52 L142 54 L140 60 L138 54 L132 52 Z" fill="hsl(340,60%,72%)" opacity="0.7"/>
      <path d="M20 90 L21.5 86 L23 90 L27 91.5 L23 93 L21.5 97 L20 93 L16 91.5 Z" fill="hsl(263,52%,65%)" opacity="0.6"/>
      <circle cx="145" cy="90" r="3" fill="hsl(195,60%,68%)" opacity="0.6"/>
      <circle cx="15" cy="55" r="2" fill="hsl(340,60%,72%)" opacity="0.5"/>
    </svg>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Floating medical decorations */}
      <div className="fixed top-20 left-4 pointer-events-none z-0 medical-float">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 4 L14 24 M4 14 L24 14" stroke="hsl(263,52%,65%)" strokeWidth="3.5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="fixed top-48 right-6 pointer-events-none z-0 medical-float-2">
        <svg width="26" height="38" viewBox="0 0 26 38" fill="none">
          <rect x="9" y="0" width="8" height="7" rx="2" fill="hsl(195,60%,68%)" opacity="0.7"/>
          <rect x="3" y="7" width="20" height="26" rx="4" fill="hsl(195,60%,88%)" stroke="hsl(195,60%,68%)" strokeWidth="1.5"/>
          <path d="M8 16 L18 16 M8 21 L15 21 M8 26 L12 26" stroke="hsl(195,60%,58%)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="fixed top-1/3 left-6 pointer-events-none z-0 medical-float-3">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8 26 Q8 8 16 8 Q24 8 24 17 Q24 26 16 26" stroke="hsl(158,50%,60%)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="4" fill="hsl(158,50%,60%)" opacity="0.8"/>
        </svg>
      </div>

      <div className="fixed bottom-48 right-4 pointer-events-none z-0 medical-float">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="10" width="16" height="8" rx="2" fill="hsl(340,60%,82%)" stroke="hsl(340,60%,65%)" strokeWidth="1.2"/>
          <rect x="8" y="6" width="8" height="5" rx="1.5" fill="hsl(340,60%,82%)" stroke="hsl(340,60%,65%)" strokeWidth="1.2"/>
          <line x1="20" y1="14" x2="24" y2="14" stroke="hsl(340,60%,65%)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="fixed top-64 right-4 pointer-events-none z-0 sparkle-animation">
        <Heart className="w-5 h-5" style={{color: 'hsl(340,60%,75%)', opacity: 0.35}} fill="currentColor"/>
      </div>

      <div className="fixed bottom-32 left-4 pointer-events-none z-0 medical-float-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L12 7.5L18 8L13.5 12L15 18L10 15L5 18L6.5 12L2 8L8 7.5Z" fill="hsl(263,52%,72%)" opacity="0.45"/>
        </svg>
      </div>

      {/* Kawaii nurse - fixed bottom right */}
      <div className="fixed bottom-0 right-2 pointer-events-none z-0 nurse-bob" style={{opacity: 0.22}}>
        <KawaiiNurse size={110} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-primary/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-cute rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 pulse-glow">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <Sparkles className="w-3.5 h-3.5 text-primary absolute -top-1 -right-1 sparkle-animation" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient-pink" style={{fontFamily: 'Playfair Display, serif'}}>The Masked Nurse</h1>
                <p className="text-xs text-muted-foreground handwritten leading-none">honest stories from nursing school</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {[
                { to: '/', label: 'Home', icon: Home },
                { to: '/blog', label: 'Blog', icon: BookOpen },
                { to: '/resources', label: 'Resources', icon: Star },
                { to: '/student-stories', label: 'Student Stories', icon: Users },
                { to: '/about', label: 'About', icon: User },
              ].map(({ to, label, icon: Icon }) => (
                <Link key={to} to={to} className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${isActive(to) ? 'bg-primary text-primary-foreground shadow-md' : 'hover:bg-muted text-foreground'}`}>
                  <Icon className="w-3.5 h-3.5" />{label}
                </Link>
              ))}
            </nav>

            <nav className="md:hidden flex items-center gap-1">
              {[
                { to: '/', icon: Home },
                { to: '/blog', icon: BookOpen },
                { to: '/resources', icon: Star },
                { to: '/student-stories', icon: Users },
                { to: '/about', icon: User },
              ].map(({ to, icon: Icon }) => (
                <Link key={to} to={to} className={`p-2 rounded-full ${isActive(to) ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}>
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="mt-20 border-t-2 border-primary/15 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-3">
              <KawaiiNurse size={40} />
              <span className="text-xl font-bold text-gradient-pink" style={{fontFamily: 'Playfair Display, serif'}}>The Masked Nurse</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              An anonymous space for honest stories and real experiences from nursing school. Speaking truth without consequences. 🩺
            </p>
            <div className="flex items-center gap-3 text-primary">
              <Heart className="w-4 h-4" fill="currentColor"/>
              <Stethoscope className="w-4 h-4"/>
              <Heart className="w-4 h-4" fill="currentColor"/>
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
