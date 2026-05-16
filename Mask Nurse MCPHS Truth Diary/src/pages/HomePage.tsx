import { Link, useNavigate } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight, BookOpen, AlertCircle, MessageCircle, Search, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

function KawaiiNurse({ size = 160 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 160 210" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="80" cy="42" rx="34" ry="8" fill="white" stroke="hsl(263,52%,72%)" strokeWidth="1.5"/>
      <rect x="46" y="34" width="68" height="12" rx="4" fill="white" stroke="hsl(263,52%,72%)" strokeWidth="1.5"/>
      <rect x="70" y="28" width="20" height="10" rx="3" fill="white" stroke="hsl(263,52%,72%)" strokeWidth="1.5"/>
      <rect x="78" y="30" width="4" height="10" rx="1" fill="hsl(340,60%,72%)"/>
      <rect x="74" y="34" width="12" height="4" rx="1" fill="hsl(340,60%,72%)"/>
      <ellipse cx="80" cy="72" rx="30" ry="32" fill="hsl(30,40%,90%)"/>
      <ellipse cx="68" cy="68" rx="7" ry="8" fill="hsl(250,40%,25%)"/>
      <ellipse cx="92" cy="68" rx="7" ry="8" fill="hsl(250,40%,25%)"/>
      <ellipse cx="70" cy="66" rx="2.5" ry="3" fill="white"/>
      <ellipse cx="94" cy="66" rx="2.5" ry="3" fill="white"/>
      <circle cx="71" cy="65" r="1" fill="white" opacity="0.8"/>
      <circle cx="95" cy="65" r="1" fill="white" opacity="0.8"/>
      <ellipse cx="58" cy="76" rx="8" ry="5" fill="hsl(340,60%,80%)" opacity="0.5"/>
      <ellipse cx="102" cy="76" rx="8" ry="5" fill="hsl(340,60%,80%)" opacity="0.5"/>
      <rect x="56" y="74" width="48" height="24" rx="10" fill="hsl(195,60%,85%)" stroke="hsl(195,60%,65%)" strokeWidth="1.5"/>
      <path d="M56 82 Q80 88 104 82" stroke="hsl(195,60%,65%)" strokeWidth="1" fill="none"/>
      <path d="M56 90 Q80 96 104 90" stroke="hsl(195,60%,65%)" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M56 78 Q46 72 50 65" stroke="hsl(195,60%,65%)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M104 78 Q114 72 110 65" stroke="hsl(195,60%,65%)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M42 108 Q42 160 48 195 L112 195 Q118 160 118 108 Q100 96 80 96 Q60 96 42 108Z" fill="hsl(195,60%,82%)" stroke="hsl(195,60%,65%)" strokeWidth="1.5"/>
      <rect x="70" y="110" width="20" height="14" rx="3" fill="white" stroke="hsl(195,60%,65%)" strokeWidth="1" opacity="0.7"/>
      <rect x="78" y="112" width="4" height="10" rx="1" fill="hsl(340,60%,72%)"/>
      <rect x="74" y="116" width="12" height="4" rx="1" fill="hsl(340,60%,72%)"/>
      <ellipse cx="36" cy="138" rx="12" ry="36" fill="hsl(195,60%,82%)" stroke="hsl(195,60%,65%)" strokeWidth="1.5"/>
      <ellipse cx="124" cy="138" rx="12" ry="36" fill="hsl(195,60%,82%)" stroke="hsl(195,60%,65%)" strokeWidth="1.5"/>
      <rect x="118" y="158" width="22" height="28" rx="4" fill="hsl(40,60%,90%)" stroke="hsl(40,40%,60%)" strokeWidth="1.2"/>
      <rect x="122" y="162" width="14" height="2" rx="1" fill="hsl(263,52%,65%)" opacity="0.6"/>
      <rect x="122" y="167" width="14" height="2" rx="1" fill="hsl(263,52%,65%)" opacity="0.6"/>
      <rect x="122" y="172" width="10" height="2" rx="1" fill="hsl(263,52%,65%)" opacity="0.6"/>
      <rect x="126" y="156" width="6" height="5" rx="1" fill="hsl(263,52%,65%)" opacity="0.8"/>
      <path d="M24 148 Q14 138 18 125" stroke="hsl(263,52%,65%)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="17" cy="122" r="5" fill="hsl(263,52%,65%)" opacity="0.8"/>
      <rect x="56" y="192" width="22" height="18" rx="4" fill="hsl(250,30%,85%)"/>
      <rect x="82" y="192" width="22" height="18" rx="4" fill="hsl(250,30%,85%)"/>
      <ellipse cx="67" cy="210" rx="14" ry="5" fill="white" stroke="hsl(263,52%,72%)" strokeWidth="1"/>
      <ellipse cx="93" cy="210" rx="14" ry="5" fill="white" stroke="hsl(263,52%,72%)" strokeWidth="1"/>
      <path d="M138 50 L140 44 L142 50 L148 52 L142 54 L140 60 L138 54 L132 52 Z" fill="hsl(340,60%,72%)" opacity="0.8"/>
      <path d="M20 90 L21.5 86 L23 90 L27 91.5 L23 93 L21.5 97 L20 93 L16 91.5 Z" fill="hsl(263,52%,65%)" opacity="0.7"/>
      <circle cx="145" cy="90" r="3" fill="hsl(195,60%,68%)" opacity="0.7"/>
    </svg>
  );
}

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const recentPosts = [
    {
      id: '6',
      title: 'Protecting Your Mental Health in This Program',
      excerpt: 'Nursing school is hard. But there is a difference between the normal hard and the kind that comes from being in a program that does not support you.',
      category: 'Nursing School Life',
      date: 'May 22, 2026',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      id: '5',
      title: 'The HESI and Feeling Unprepared',
      excerpt: 'Most of us did not feel prepared for the HESI final. Not because we did not study but because we were not taught effectively.',
      category: 'The Truth About MCPHS',
      date: 'May 18, 2026',
      color: 'bg-pink-100 text-pink-700'
    },
    {
      id: '4',
      title: 'Study Methods That Actually Helped Me',
      excerpt: 'The slides, YouTube, Simple Nursing, and Claude. Honestly Claude made the biggest difference.',
      category: 'Nursing School Life',
      date: 'May 15, 2026',
      color: 'bg-sky-100 text-sky-700'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Hero Section */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* Left -- text */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block mb-5">
              <div className="sticker-badge bg-gradient-cute text-white text-base px-5 py-2">
                <Sparkles className="w-4 h-4" />
                <span>Speaking Truth Anonymously</span>
                <Heart className="w-4 h-4" fill="currentColor" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="text-gradient-pink">The Masked</span>
              <br />
              <span className="text-gradient-pink">Nurse 🩺</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-2 handwritten font-semibold">
              An anonymous MCPHS nursing student sharing honest stories
            </p>

            <p className="text-base text-foreground/75 max-w-lg mb-8">
              Real experiences. No filter. No consequences.
              Just truth about what nursing school is really like.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              <Link to="/blog">
                <Button size="lg" className="bubbly-button bg-primary hover:bg-primary/90 text-white">
                  Read My Stories
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="bubbly-button border-2 border-primary/40">
                  About Me
                  <Heart className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Search */}
            <form onSubmit={handleSearch} className="max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search posts... HESI, clinical, MCPHS"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-24 py-3 rounded-full border-2 border-border bg-white focus:outline-none focus:border-primary transition-colors text-sm text-foreground placeholder:text-muted-foreground shadow-sm"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors">
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Right -- kawaii nurse */}
          <div className="flex-shrink-0 relative">
            <div className="relative">
              {/* Glow background */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-20 bg-gradient-cute scale-75 translate-y-8" />
              <div className="nurse-bob relative z-10">
                <KawaiiNurse size={200} />
              </div>
              {/* Floating badges around nurse */}
              <div className="absolute top-4 -left-8 bg-white rounded-2xl px-3 py-2 shadow-lg border border-primary/20 text-xs font-bold text-primary float-decoration" style={{animationDelay: '0.5s'}}>
                🩺 RN Student
              </div>
              <div className="absolute top-1/2 -right-10 bg-white rounded-2xl px-3 py-2 shadow-lg border border-secondary/20 text-xs font-bold text-pink-600 float-decoration" style={{animationDelay: '1.5s'}}>
                💬 Anonymous
              </div>
              <div className="absolute bottom-16 -left-10 bg-white rounded-2xl px-3 py-2 shadow-lg border border-accent/20 text-xs font-bold text-sky-600 float-decoration" style={{animationDelay: '1s'}}>
                ✦ MCPHS Truth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Write About */}
      <section className="mb-20">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Stethoscope className="w-5 h-5 text-primary" />
          <h2 className="text-3xl font-bold text-center">What I Write About</h2>
          <Stethoscope className="w-5 h-5 text-primary" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="cute-card border-primary/25 hover:border-primary/50">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-700">The Truth About MCPHS</h3>
            <p className="text-muted-foreground text-sm">
              Unfiltered stories about the disorganization, chaos, and reality of this program. What they do not tell you during recruitment.
            </p>
          </div>

          <div className="cute-card border-sky-200 hover:border-sky-400">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-sky-700">Nursing School Life</h3>
            <p className="text-muted-foreground text-sm">
              Day-to-day experiences, study methods, mental health, and everything in between.
            </p>
          </div>

          <div className="cute-card border-pink-200 hover:border-pink-400">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-pink-700">Personal Thoughts</h3>
            <p className="text-muted-foreground text-sm">
              Reflections, honest advice, and real talk about navigating this journey anonymously.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-primary" fill="currentColor" />
            <h2 className="text-3xl font-bold">Recent Posts</h2>
          </div>
          <Link to="/blog">
            <Button variant="ghost" className="text-primary hover:text-primary/80 text-sm">
              View All <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <div className="cute-card border-border hover:border-primary/30 h-full">
                <div className={`sticker-badge ${post.color} mb-4 text-xs`}>
                  {post.category}
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MCPHS CTA */}
      <section className="mt-20 text-center">
        <div className="cute-card border-primary/25 bg-gradient-to-br from-purple-50 via-pink-50 to-sky-50 max-w-2xl mx-auto">
          <div className="flex justify-center mb-4">
            <KawaiiNurse size={80} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Thinking about MCPHS? 🩺</h2>
          <p className="text-base mb-6 text-muted-foreground">
            Read my honest experiences before making your decision.
            This is what they will not tell you on campus tours.
          </p>
          <Link to="/blog?category=the-truth-about-mcphs">
            <Button size="lg" className="bubbly-button bg-primary hover:bg-primary/90 text-white">
              <AlertCircle className="w-4 h-4 mr-2" />
              Read The Truth
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
