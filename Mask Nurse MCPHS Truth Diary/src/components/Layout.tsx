import { Link, useLocation } from 'react-router-dom';
import { Heart, Sparkles, Stethoscope, Home, BookOpen, User, Users, Star } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Floating tropical medical decorations */}
      <div className="fixed top-16 left-4 pointer-events-none z-0 medical-float">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M15 3 L15 27 M3 15 L27 15" stroke="#FF6B9D" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="fixed top-44 right-6 pointer-events-none z-0 medical-float-2">
        <svg width="28" height="40" viewBox="0 0 28 40" fill="none">
          <rect x="10" y="0" width="8" height="7" rx="2" fill="#2DD4BF" opacity="0.8"/>
          <rect x="3" y="7" width="22" height="28" rx="5" fill="#E0FAFA" stroke="#2DD4BF" strokeWidth="1.5"/>
          <path d="M9 17 L19 17 M9 22 L16 22 M9 27 L13 27" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="fixed top-1/3 left-5 pointer-events-none z-0 medical-float-3">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M8 28 Q8 8 17 8 Q26 8 26 18 Q26 28 17 28" stroke="#FF8C61" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <circle cx="26" cy="26" r="5" fill="#FF8C61" opacity="0.8"/>
        </svg>
      </div>

      <div className="fixed bottom-52 right-5 pointer-events-none z-0 medical-float">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <rect x="3" y="10" width="20" height="10" rx="3" fill="#FFD93D" opacity="0.8" stroke="#FFB800" strokeWidth="1"/>
          <rect x="9" y="5" width="8" height="7" rx="2" fill="#FFD93D" opacity="0.8" stroke="#FFB800" strokeWidth="1"/>
          <line x1="23" y1="15" x2="27" y2="15" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="fixed top-72 right-4 pointer-events-none z-0 sparkle-animation">
        <Heart className="w-6 h-6" style={{color: '#FF6B9D', opacity: 0.4}} fill="currentColor"/>
      </div>

      <div className="fixed bottom-36 left-5 pointer-events-none z-0 medical-float-2">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 2 L13 8 L19.5 8.5 L14.5 13 L16 20 L11 16.5 L6 20 L7.5 13 L2.5 8.5 L9 8 Z" fill="#2DD4BF" opacity="0.5"/>
        </svg>
      </div>

      <div className="fixed top-1/2 left-3 pointer-events-none z-0 float-decoration">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="8" fill="#FFD93D" opacity="0.35"/>
        </svg>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-4 border-pink-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-cute rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 pulse-glow">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 sparkle-animation" />
              </div>
              <div>
                <h1 className="text-xl text-gradient-pink leading-tight" style={{fontFamily: 'Fredoka One, cursive'}}>The Masked Nurse</h1>
                <p className="text-xs text-muted-foreground font-semibold italic leading-none">honest stories from nursing school 🩺</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {[
                { to: '/', label: '🏠 Home', },
                { to: '/blog', label: '📖 Blog', },
                { to: '/resources', label: '⭐ Resources', },
                { to: '/student-stories', label: '💬 Student Stories', },
                { to: '/about', label: '🌸 About', },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-200 ${isActive(to) ? 'bg-gradient-cute text-white shadow-md' : 'hover:bg-pink-50 text-foreground'}`}>
                  {label}
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
                <Link key={to} to={to} className={`p-2 rounded-full ${isActive(to) ? 'bg-gradient-cute text-white' : 'hover:bg-pink-50'}`}>
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="mt-20 border-t-4 border-pink-200 bg-gradient-to-br from-pink-50 via-orange-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-cute rounded-full flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl text-gradient-pink" style={{fontFamily: 'Fredoka One, cursive'}}>The Masked Nurse</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md font-semibold">
              An anonymous space for honest stories and real experiences from nursing school 🩺 Speaking truth without consequences 🌺
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xl">🌸</span>
              <span className="text-xl">🩺</span>
              <span className="text-xl">💕</span>
              <span className="text-xl">🌺</span>
              <span className="text-xl">✨</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-lg leading-relaxed italic">
              Disclaimer: All content on this blog reflects the personal opinions, alleged experiences, and subjective perceptions of an anonymous student. All statements are alleged and represent the authors personal experience only. Nothing on this site is intended as fact, legal advice, or reporting. This blog is protected under the First Amendment as personal opinion and free speech. All patient details have been changed or omitted to protect privacy.
            </p>
            <p className="text-xs text-muted-foreground font-bold">© 2026 The Masked Nurse • Stay Anonymous, Stay True 🌺</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
