import { Link, useLocation } from 'react-router-dom';
import { Heart, Sparkles, Stethoscope, Home, BookOpen, User, Users, Star } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Floating kawaii medical decorations */}
      <div className="fixed top-16 left-4 pointer-events-none z-0 medical-float">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M15 3 L15 27 M3 15 L27 15" stroke="#FFB7D5" strokeWidth="4.5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="fixed top-44 right-5 pointer-events-none z-0 medical-float-2">
        <svg width="26" height="38" viewBox="0 0 26 38" fill="none">
          <rect x="9" y="0" width="8" height="7" rx="2" fill="#B8E0FF" opacity="0.9"/>
          <rect x="2" y="7" width="22" height="26" rx="5" fill="#EEF7FF" stroke="#B8E0FF" strokeWidth="1.5"/>
          <path d="M8 16 L18 16 M8 21 L15 21 M8 26 L12 26" stroke="#7DDDD4" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="fixed top-1/3 left-4 pointer-events-none z-0 medical-float-3">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M7 26 Q7 8 16 8 Q25 8 25 17 Q25 26 16 26" stroke="#C9B8FF" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <circle cx="25" cy="24" r="5" fill="#C9B8FF" opacity="0.8"/>
        </svg>
      </div>

      <div className="fixed bottom-52 right-4 pointer-events-none z-0 medical-float">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <rect x="3" y="10" width="20" height="10" rx="3" fill="#FFB7D5" opacity="0.8" stroke="#FF9EC8" strokeWidth="1"/>
          <rect x="9" y="5" width="8" height="7" rx="2" fill="#FFB7D5" opacity="0.8" stroke="#FF9EC8" strokeWidth="1"/>
          <line x1="23" y1="15" x2="27" y2="15" stroke="#FF9EC8" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="fixed top-72 right-3 pointer-events-none z-0 sparkle-animation">
        <Heart className="w-6 h-6" style={{color: '#FFB7D5', opacity: 0.5}} fill="currentColor"/>
      </div>

      <div className="fixed bottom-36 left-4 pointer-events-none z-0 medical-float-2">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 2 L13 7.5 L19.5 8 L14.5 12.5 L16 19 L11 15.5 L6 19 L7.5 12.5 L2.5 8 L9 7.5 Z" fill="#B8E0FF" opacity="0.6"/>
        </svg>
      </div>

      <div className="fixed top-1/2 right-3 pointer-events-none z-0 float-decoration-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="9" fill="#7DDDD4" opacity="0.3"/>
        </svg>
      </div>

      <div className="fixed bottom-64 left-3 pointer-events-none z-0 sparkle-animation" style={{animationDelay:'1s'}}>
        <Sparkles className="w-5 h-5" style={{color: '#C9B8FF', opacity: 0.45}}/>
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
                <Sparkles className="w-4 h-4 absolute -top-1 -right-1 sparkle-animation" style={{color: '#C9B8FF'}}/>
              </div>
              <div>
                <h1 className="text-xl text-gradient-pink leading-tight">The Masked Nurse</h1>
                <p className="text-xs text-muted-foreground font-semibold italic leading-none">honest stories from nursing school 🩺</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {[
                { to: '/', label: '🏠 Home' },
                { to: '/blog', label: '📖 Blog' },
                { to: '/resources', label: '⭐ Resources' },
                { to: '/student-stories', label: '💬 Student Stories' },
                { to: '/about', label: '🌸 About' },
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

      <footer className="mt-20 border-t-4 border-pink-200 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-cute rounded-full flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl text-gradient-pink">The Masked Nurse</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md font-semibold">
              An anonymous space for honest stories and real experiences from nursing school 🩺 Speaking truth without consequences 🌸
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xl">🌸</span>
              <span className="text-xl">🩺</span>
              <span className="text-xl">💕</span>
              <span className="text-xl">🫧</span>
              <span className="text-xl">✨</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-lg leading-relaxed italic">
              Disclaimer: All content on this blog reflects the personal opinions, alleged experiences, and subjective perceptions of an anonymous student. All statements are alleged and represent the authors personal experience only. Nothing on this site is intended as fact, legal advice, or reporting. This blog is protected under the First Amendment as personal opinion and free speech. All patient details have been changed or omitted to protect privacy.
            </p>
            <p className="text-xs text-muted-foreground font-bold">© 2026 The Masked Nurse • Stay Anonymous, Stay True 🌸</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
