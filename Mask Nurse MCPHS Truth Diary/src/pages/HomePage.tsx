import { Link, useNavigate } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight, BookOpen, AlertCircle, MessageCircle, Search } from 'lucide-react';
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
      title: 'Protecting Your Mental Health in This Program',
      excerpt: 'Nursing school is hard. But there is a difference between the normal hard and the kind of hard that comes from being in a program that does not support you well.',
      category: 'Nursing School Life',
      date: 'May 22, 2026',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      id: '5',
      title: 'The HESI and Feeling Unprepared',
      excerpt: 'Most of us did not feel prepared for the HESI final. Not because we did not study but because we were not taught effectively throughout the semester.',
      category: 'The Truth About MCPHS',
      date: 'May 18, 2026',
      color: 'bg-red-100 text-red-700'
    },
    {
      id: '4',
      title: 'Study Methods That Actually Helped Me',
      excerpt: 'The slides, YouTube, Simple Nursing, and Claude. Honestly Claude made the biggest difference.',
      category: 'Nursing School Life',
      date: 'May 15, 2026',
      color: 'bg-purple-100 text-purple-700'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <section className="text-center mb-20 relative">
        <div className="inline-block mb-6">
          <div className="sticker-badge bg-gradient-cute text-white text-lg px-6 py-2">
            <Sparkles className="w-5 h-5" />
            <span>Speaking Truth Anonymously</span>
            <Heart className="w-5 h-5" fill="currentColor" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient-pink">The Masked Nurse</span>
          <Sparkles className="inline-block w-10 h-10 ml-2 text-primary sparkle-animation" />
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 handwritten font-semibold max-w-2xl mx-auto">
          An anonymous nursing student sharing honest stories from MCPHS
        </p>

        <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-8">
          Real experiences. No filter. No consequences.
          Just truth about what nursing school is really like.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Link to="/blog">
            <Button size="lg" className="bubbly-button bg-primary hover:bg-primary/90 text-primary-foreground">
              Read My Stories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="bubbly-button border-2">
              About Me
              <Heart className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts... try HESI, clinical, MCPHS"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-32 py-3 rounded-full border-2 border-border bg-white focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground shadow-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors"
            >
              Search
            </button>
          </div>
        </form>
      </section>

      <section className="mb-20">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-center">What I Write About</h2>
          <Sparkles className="w-6 h-6 text-primary" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="cute-card border-primary/30 hover:border-primary/60">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-pink-600">The Truth About MCPHS</h3>
            <p className="text-muted-foreground">
              Unfiltered stories about the disorganization, chaos, and reality of this program.
              What they do not tell you during recruitment.
            </p>
          </div>

          <div className="cute-card border-purple-300 hover:border-purple-400">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-600">Nursing School Life</h3>
            <p className="text-muted-foreground">
              Day-to-day experiences, study methods, mental health, and everything in between.
            </p>
          </div>

          <div className="cute-card border-orange-300 hover:border-orange-400">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-orange-600">Personal Thoughts</h3>
            <p className="text-muted-foreground">
              Reflections, honest advice, and real talk about navigating this journey anonymously.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-primary" fill="currentColor" />
            <h2 className="text-3xl font-bold">Recent Posts</h2>
          </div>
          <Link to="/blog">
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <div className="cute-card border-border hover:border-primary/40 h-full">
                <div className={`sticker-badge ${post.color} mb-4 text-xs`}>
                  {post.category}
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20 text-center">
        <div className="cute-card border-primary/30 bg-gradient-to-br from-pink-50 to-purple-50 max-w-2xl mx-auto">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Thinking about MCPHS?</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            Read my honest experiences before making your decision.
            This is what they will not tell you on campus tours.
          </p>
          <Link to="/blog?category=the-truth-about-mcphs">
            <Button size="lg" className="bubbly-button bg-primary hover:bg-primary/90">
              <AlertCircle className="w-5 h-5 mr-2" />
              Read The Truth
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
