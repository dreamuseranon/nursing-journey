import { Link, useNavigate } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight, BookOpen, AlertCircle, MessageCircle, Search, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

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
      title: 'Protecting Your Mental Health 🧠',
      excerpt: 'Nursing school is hard. But there is a difference between the normal hard and the kind that comes from a program that does not support you.',
      category: 'Nursing School Life',
      date: 'May 22, 2026',
      bg: 'from-teal-50 to-cyan-50',
      border: 'border-teal-200',
      tag: 'bg-teal-100 text-teal-700',
      isNew: true
    },
    {
      id: '5',
      title: 'The HESI and Feeling Unprepared 😤',
      excerpt: 'Most of us did not feel prepared. Not because we did not study but because we were not taught effectively throughout the semester.',
      category: 'The Truth About MCPHS',
      date: 'May 18, 2026',
      bg: 'from-pink-50 to-rose-50',
      border: 'border-pink-200',
      tag: 'bg-pink-100 text-pink-700',
      isNew: true
    },
    {
      id: '4',
      title: 'Study Methods That Helped Me 📖',
      excerpt: 'The slides, YouTube, Simple Nursing, and Claude. Honestly Claude made the biggest difference for me this semester.',
      category: 'Nursing School Life',
      date: 'May 15, 2026',
      bg: 'from-orange-50 to-amber-50',
      border: 'border-orange-200',
      tag: 'bg-orange-100 text-orange-700',
      isNew: false
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Hero */}
      <section className="mb-20">
        <div className="relative bg-gradient-to-br from-pink-50 via-orange-50 to-teal-50 rounded-3xl p-8 md:p-12 border-2 border-pink-200 overflow-hidden">

          {/* Background blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{background: 'radial-gradient(circle, #FF6B9D, transparent)'}} />
          <div className="absolute bottom-0 left-20 w-48 h-48 rounded-full opacity-15 blur-3xl" style={{background: 'radial-gradient(circle, #2DD4BF, transparent)'}} />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full opacity-15 blur-2xl" style={{background: 'radial-gradient(circle, #FFD93D, transparent)'}} />

          <div className="relative z-10 text-center">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-pink-200 rounded-full px-5 py-2 mb-6 shadow-sm">
              <span className="text-base">🌺</span>
              <span className="font-bold text-sm text-pink-600">Speaking Truth Anonymously</span>
              <span className="text-base">✨</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl mb-4 text-gradient-pink leading-tight" style={{fontFamily: 'Fredoka One, cursive'}}>
              The Masked Nurse 🩺
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 font-bold italic mb-3 max-w-2xl mx-auto">
              An anonymous MCPHS nursing student sharing honest stories
            </p>

            <p className="text-base text-foreground/60 max-w-xl mx-auto mb-8 font-semibold">
              Real experiences. No filter. No consequences. Just truth about what nursing school is really like 💌
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Link to="/blog">
                <Button size="lg" className="bubbly-button bg-gradient-cute hover:opacity-90 text-white text-base px-8 border-0">
                  Read My Stories 📖
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="bubbly-button border-2 border-pink-300 text-pink-600 hover:bg-pink-50 text-base px-8">
                  About Me 🌸
                </Button>
              </Link>
            </div>

            {/* Search */}
            <form onSubmit={handleSearch} className="max-w-lg mx-auto">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
                <input
                  type="text"
                  placeholder="🔍 Search posts... HESI, clinical, MCPHS"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-28 py-4 rounded-full border-2 border-pink-200 bg-white/90 focus:outline-none focus:border-pink-400 transition-colors font-semibold text-sm shadow-md placeholder:text-pink-300"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-cute text-white px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity shadow-sm">
                  Search ✨
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="mb-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="cute-card border-pink-200 text-center py-4">
            <div className="text-3xl mb-1">🩺</div>
            <div className="text-2xl font-bold text-pink-600" style={{fontFamily: 'Fredoka One, cursive'}}>6 Posts</div>
            <div className="text-xs text-muted-foreground font-semibold">and counting</div>
          </div>
          <div className="cute-card border-teal-200 text-center py-4">
            <div className="text-3xl mb-1">🎭</div>
            <div className="text-2xl font-bold text-teal-600" style={{fontFamily: 'Fredoka One, cursive'}}>100% Anon</div>
            <div className="text-xs text-muted-foreground font-semibold">always safe</div>
          </div>
          <div className="cute-card border-orange-200 text-center py-4">
            <div className="text-3xl mb-1">💌</div>
            <div className="text-2xl font-bold text-orange-600" style={{fontFamily: 'Fredoka One, cursive'}}>Real Talk</div>
            <div className="text-xs text-muted-foreground font-semibold">no filter</div>
          </div>
        </div>
      </section>

      {/* What I Write About */}
      <section className="mb-16">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-2xl">🌺</span>
          <h2 className="text-4xl text-center" style={{fontFamily: 'Fredoka One, cursive'}}>What I Write About</h2>
          <span className="text-2xl">🌺</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="cute-card border-pink-200 bg-gradient-to-br from-pink-50 to-rose-50 hover:border-pink-400">
            <div className="text-4xl mb-4">🚨</div>
            <h3 className="text-xl mb-2 text-pink-600" style={{fontFamily: 'Fredoka One, cursive'}}>The Truth About MCPHS</h3>
            <p className="text-muted-foreground text-sm font-semibold">
              Unfiltered stories about the disorganization, chaos, and reality of this program. What they do not tell you during recruitment.
            </p>
          </div>

          <div className="cute-card border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50 hover:border-teal-400">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl mb-2 text-teal-600" style={{fontFamily: 'Fredoka One, cursive'}}>Nursing School Life</h3>
            <p className="text-muted-foreground text-sm font-semibold">
              Day-to-day experiences, study methods, mental health, and everything in between. The real nursing school experience.
            </p>
          </div>

          <div className="cute-card border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 hover:border-orange-400">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl mb-2 text-orange-600" style={{fontFamily: 'Fredoka One, cursive'}}>Personal Thoughts</h3>
            <p className="text-muted-foreground text-sm font-semibold">
              Reflections, honest advice, and real talk about navigating this journey anonymously without consequences.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💕</span>
            <h2 className="text-4xl" style={{fontFamily: 'Fredoka One, cursive'}}>Recent Posts</h2>
          </div>
          <Link to="/blog">
            <Button variant="ghost" className="text-pink-500 hover:text-pink-600 font-bold">
              View All ✨ <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <div className={`cute-card bg-gradient-to-br ${post.bg} ${post.border} h-full relative`}>
                {post.isNew && (
                  <div className="absolute -top-3 -right-3 bg-gradient-cute text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    NEW ✨
                  </div>
                )}
                <div className={`sticker-badge ${post.tag} mb-4 text-xs`}>
                  {post.category}
                </div>
                <h3 className="text-lg mb-2 text-foreground hover:text-pink-600 transition-colors" style={{fontFamily: 'Fredoka One, cursive'}}>
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 font-semibold">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground font-bold">
                  <span>{post.date}</span>
                  <ArrowRight className="w-4 h-4 text-pink-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="cute-card border-pink-300 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20 blur-2xl" style={{background: '#FF6B9D'}} />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-15 blur-2xl" style={{background: '#2DD4BF'}} />
          <div className="relative z-10">
            <div className="text-5xl mb-4">🩺🌺✨</div>
            <h2 className="text-4xl mb-4 text-gradient-pink" style={{fontFamily: 'Fredoka One, cursive'}}>
              Thinking about MCPHS?
            </h2>
            <p className="text-base mb-6 text-muted-foreground font-semibold max-w-md mx-auto">
              Read my honest experiences before making your decision. This is what they will not tell you on campus tours 💌
            </p>
            <Link to="/blog?category=the-truth-about-mcphs">
              <Button size="lg" className="bubbly-button bg-gradient-cute hover:opacity-90 text-white border-0 text-base px-8">
                🚨 Read The Truth
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
