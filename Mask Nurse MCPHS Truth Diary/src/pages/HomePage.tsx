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
      bg: 'from-purple-50 to-blue-50',
      border: 'border-purple-200',
      tag: 'bg-purple-100 text-purple-600',
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
      tag: 'bg-pink-100 text-pink-600',
      isNew: true
    },
    {
      id: '4',
      title: 'Study Methods That Helped Me 📖',
      excerpt: 'The slides, YouTube, Simple Nursing, and Claude. Honestly Claude made the biggest difference for me this semester.',
      category: 'Nursing School Life',
      date: 'May 15, 2026',
      bg: 'from-blue-50 to-teal-50',
      border: 'border-blue-200',
      tag: 'bg-blue-100 text-blue-600',
      isNew: false
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Hero */}
      <section className="mb-20">
        <div className="relative rounded-3xl p-8 md:p-14 border-2 border-pink-200 overflow-hidden text-center" style={{background: 'linear-gradient(135deg, #FFF0F7 0%, #F5F0FF 40%, #EEF6FF 70%, #F0FDFB 100%)'}}>

          {/* Soft blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none" style={{background: '#FFB7D5'}}/>
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-25 blur-3xl pointer-events-none" style={{background: '#B8E0FF'}}/>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full opacity-20 blur-2xl pointer-events-none" style={{background: '#C9B8FF'}}/>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full opacity-20 blur-2xl pointer-events-none" style={{background: '#7DDDD4'}}/>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-pink-200 rounded-full px-5 py-2 mb-6 shadow-sm">
              <span>🌸</span>
              <span className="font-bold text-sm" style={{color: '#FF9EC8'}}>Speaking Truth Anonymously</span>
              <span>✨</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl mb-5 text-gradient-pink leading-tight">
              The Masked Nurse 🩺
            </h1>

            <p className="text-lg md:text-xl font-bold italic mb-3 max-w-2xl mx-auto" style={{color: '#C9B8FF'}}>
              An anonymous MCPHS nursing student sharing honest stories
            </p>

            <p className="text-base max-w-xl mx-auto mb-10 font-semibold text-muted-foreground">
              Real experiences. No filter. No consequences. Just truth about what nursing school is really like 💌
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Link to="/blog">
                <Button size="lg" className="bubbly-button text-white text-base px-8 border-0" style={{background: 'linear-gradient(135deg, #FFB7D5, #C9B8FF)'}}>
                  Read My Stories 📖
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="bubbly-button border-2 text-base px-8" style={{borderColor: '#B8E0FF', color: '#7DADD4'}}>
                  About Me 🌸
                </Button>
              </Link>
            </div>

            {/* Search */}
            <form onSubmit={handleSearch} className="max-w-lg mx-auto">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5" style={{color: '#FFB7D5'}}/>
                <input
                  type="text"
                  placeholder="🔍 Search posts... HESI, clinical, MCPHS"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-28 py-4 rounded-full border-2 border-pink-200 bg-white/90 focus:outline-none focus:border-purple-300 transition-colors font-semibold text-sm shadow-md placeholder:text-pink-300"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-white px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity shadow-sm" style={{background: 'linear-gradient(135deg, #FFB7D5, #C9B8FF)'}}>
                  Search ✨
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Kawaii stats */}
      <section className="mb-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="cute-card border-pink-200 text-center py-5" style={{background: 'linear-gradient(135deg, #FFF0F7, #FFE4F0)'}}>
            <div className="text-4xl mb-2">🩺</div>
            <div className="text-2xl text-pink-500">6 Posts</div>
            <div className="text-xs text-muted-foreground font-semibold mt-1">and counting 💕</div>
          </div>
          <div className="cute-card border-purple-200 text-center py-5" style={{background: 'linear-gradient(135deg, #F5F0FF, #EDE8FF)'}}>
            <div className="text-4xl mb-2">🎭</div>
            <div className="text-2xl text-purple-500">100% Anon</div>
            <div className="text-xs text-muted-foreground font-semibold mt-1">always safe 🌸</div>
          </div>
          <div className="cute-card border-blue-200 text-center py-5" style={{background: 'linear-gradient(135deg, #EEF6FF, #E4F0FF)'}}>
            <div className="text-4xl mb-2">💌</div>
            <div className="text-2xl text-blue-500">Real Talk</div>
            <div className="text-xs text-muted-foreground font-semibold mt-1">no filter ✨</div>
          </div>
        </div>
      </section>

      {/* What I Write About */}
      <section className="mb-16">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-2xl">🌸</span>
          <h2 className="text-4xl text-center text-gradient-pink">What I Write About</h2>
          <span className="text-2xl">🌸</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="cute-card border-pink-200 hover:border-pink-400" style={{background: 'linear-gradient(135deg, #FFF0F7, #FFE4EF)'}}>
            <div className="text-4xl mb-4">🚨</div>
            <h3 className="text-xl mb-2 text-pink-500">The Truth About MCPHS</h3>
            <p className="text-muted-foreground text-sm font-semibold">
              Unfiltered stories about the disorganization, chaos, and reality of this program. What they do not tell you during recruitment.
            </p>
          </div>

          <div className="cute-card border-purple-200 hover:border-purple-400" style={{background: 'linear-gradient(135deg, #F5F0FF, #EDE8FF)'}}>
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl mb-2 text-purple-500">Nursing School Life</h3>
            <p className="text-muted-foreground text-sm font-semibold">
              Day-to-day experiences, study methods, mental health, and everything in between. The real nursing school experience.
            </p>
          </div>

          <div className="cute-card border-blue-200 hover:border-blue-400" style={{background: 'linear-gradient(135deg, #EEF6FF, #E4F0FF)'}}>
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl mb-2 text-blue-500">Personal Thoughts</h3>
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
            <h2 className="text-4xl text-gradient-pink">Recent Posts</h2>
          </div>
          <Link to="/blog">
            <Button variant="ghost" className="font-bold" style={{color: '#FFB7D5'}}>
              View All ✨ <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <div className={`cute-card bg-gradient-to-br ${post.bg} ${post.border} h-full relative`}>
                {post.isNew && (
                  <div className="absolute -top-3 -right-3 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md" style={{background: 'linear-gradient(135deg, #FFB7D5, #C9B8FF)'}}>
                    NEW ✨
                  </div>
                )}
                <div className={`sticker-badge ${post.tag} mb-4 text-xs`}>
                  {post.category}
                </div>
                <h3 className="text-lg mb-2 text-foreground hover:text-pink-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 font-semibold">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground font-bold">
                  <span>{post.date}</span>
                  <ArrowRight className="w-4 h-4 text-pink-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="cute-card border-pink-200 text-center relative overflow-hidden" style={{background: 'linear-gradient(135deg, #FFF0F7, #F5F0FF, #EEF6FF)'}}>
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-30 blur-2xl pointer-events-none" style={{background: '#FFB7D5'}}/>
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-25 blur-2xl pointer-events-none" style={{background: '#B8E0FF'}}/>
          <div className="relative z-10">
            <div className="text-5xl mb-4">🩺🌸✨</div>
            <h2 className="text-4xl mb-4 text-gradient-pink">
              Thinking about MCPHS?
            </h2>
            <p className="text-base mb-6 text-muted-foreground font-semibold max-w-md mx-auto">
              Read my honest experiences before making your decision. This is what they will not tell you on campus tours 💌
            </p>
            <Link to="/blog?category=the-truth-about-mcphs">
              <Button size="lg" className="bubbly-button text-white border-0 text-base px-8" style={{background: 'linear-gradient(135deg, #FFB7D5, #C9B8FF)'}}>
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
