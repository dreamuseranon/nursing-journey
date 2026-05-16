import { Link, useNavigate } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight, BookOpen, AlertCircle, MessageCircle, Search, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

function CartoonNurse({ size = 200 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hair - flowing auburn */}
      <ellipse cx="100" cy="58" rx="38" ry="42" fill="hsl(20,65%,42%)"/>
      <path d="M62 55 Q55 90 58 130 Q65 125 70 115 Q68 90 72 70Z" fill="hsl(20,65%,38%)"/>
      <path d="M138 55 Q145 90 142 130 Q135 125 130 115 Q132 90 128 70Z" fill="hsl(20,65%,38%)"/>
      <path d="M70 115 Q66 140 70 165 Q78 170 80 160 Q76 140 78 120Z" fill="hsl(20,65%,38%)"/>
      <path d="M130 115 Q134 140 130 165 Q122 170 120 160 Q124 140 122 120Z" fill="hsl(20,65%,38%)"/>

      {/* Nurse cap */}
      <path d="M68 48 Q100 35 132 48 L128 58 Q100 48 72 58Z" fill="white" stroke="hsl(263,52%,72%)" strokeWidth="1.5"/>
      <rect x="82" y="38" width="36" height="14" rx="5" fill="white" stroke="hsl(263,52%,72%)" strokeWidth="1.5"/>
      {/* Red cross on cap */}
      <rect x="96" y="40" width="8" height="14" rx="2" fill="hsl(340,70%,60%)"/>
      <rect x="90" y="45" width="20" height="6" rx="2" fill="hsl(340,70%,60%)"/>

      {/* Face */}
      <ellipse cx="100" cy="78" rx="32" ry="34" fill="hsl(25,60%,88%)"/>

      {/* Eyes - big cute cartoon style */}
      <ellipse cx="86" cy="72" rx="10" ry="11" fill="white"/>
      <ellipse cx="114" cy="72" rx="10" ry="11" fill="white"/>
      <ellipse cx="86" cy="73" rx="7" ry="8" fill="hsl(200,80%,35%)"/>
      <ellipse cx="114" cy="73" rx="7" ry="8" fill="hsl(200,80%,35%)"/>
      <ellipse cx="86" cy="73" rx="4" ry="5" fill="hsl(210,90%,20%)"/>
      <ellipse cx="114" cy="73" rx="4" ry="5" fill="hsl(210,90%,20%)"/>
      {/* Eye shine */}
      <ellipse cx="89" cy="70" rx="2.5" ry="3" fill="white"/>
      <ellipse cx="117" cy="70" rx="2.5" ry="3" fill="white"/>
      <circle cx="90" cy="69" r="1" fill="white"/>
      <circle cx="118" cy="69" r="1" fill="white"/>
      {/* Eyelashes */}
      <path d="M76 64 Q78 60 80 63" stroke="hsl(20,40%,25%)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M82 62 Q83 58 85 61" stroke="hsl(20,40%,25%)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M88 62 Q90 58 91 61" stroke="hsl(20,40%,25%)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M120 62 Q121 58 123 61" stroke="hsl(20,40%,25%)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M115 62 Q117 58 118 61" stroke="hsl(20,40%,25%)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M109 64 Q111 60 113 63" stroke="hsl(20,40%,25%)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Eyebrows */}
      <path d="M77 61 Q86 56 95 60" stroke="hsl(20,50%,30%)" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M105 60 Q114 56 123 61" stroke="hsl(20,50%,30%)" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Blush */}
      <ellipse cx="74" cy="82" rx="10" ry="6" fill="hsl(340,70%,80%)" opacity="0.55"/>
      <ellipse cx="126" cy="82" rx="10" ry="6" fill="hsl(340,70%,80%)" opacity="0.55"/>

      {/* Medical mask - cute with pattern */}
      <rect x="72" y="84" width="56" height="26" rx="10" fill="hsl(195,65%,82%)" stroke="hsl(195,65%,60%)" strokeWidth="1.5"/>
      <path d="M72 93 Q100 100 128 93" stroke="hsl(195,65%,60%)" strokeWidth="1" fill="none"/>
      <path d="M72 101 Q100 107 128 101" stroke="hsl(195,65%,60%)" strokeWidth="1" fill="none" opacity="0.5"/>
      {/* Small hearts on mask */}
      <path d="M88 91 Q88 88 91 88 Q94 88 94 91 Q94 94 88 97 Q82 94 82 91 Q82 88 85 88 Q88 88 88 91Z" fill="hsl(340,70%,72%)" opacity="0.6" transform="scale(0.5) translate(88,90)"/>
      {/* Mask strings */}
      <path d="M72 88 Q60 83 64 75" stroke="hsl(195,65%,60%)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M128 88 Q140 83 136 75" stroke="hsl(195,65%,60%)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Body - white uniform */}
      <path d="M55 120 Q52 175 55 220 L145 220 Q148 175 145 120 Q125 108 100 108 Q75 108 55 120Z" fill="white" stroke="hsl(263,52%,75%)" strokeWidth="1.5"/>
      {/* Uniform collar blue trim */}
      <path d="M80 110 Q100 120 120 110 L118 125 Q100 132 82 125Z" fill="hsl(195,60%,75%)" opacity="0.8"/>
      {/* Red cross on uniform */}
      <rect x="96" y="138" width="8" height="22" rx="2" fill="hsl(340,70%,65%)" opacity="0.8"/>
      <rect x="90" y="145" width="20" height="8" rx="2" fill="hsl(340,70%,65%)" opacity="0.8"/>
      {/* Pocket */}
      <rect x="60" y="145" width="18" height="14" rx="3" fill="hsl(195,60%,90%)" stroke="hsl(195,60%,70%)" strokeWidth="1"/>

      {/* LEFT ARM - waving up enthusiastically */}
      <path d="M55 120 Q40 110 28 88 Q22 75 30 68 Q38 62 44 72 Q50 82 52 95 Q54 108 58 118Z" fill="white" stroke="hsl(263,52%,75%)" strokeWidth="1.5"/>
      {/* Waving hand */}
      <ellipse cx="30" cy="65" rx="14" ry="12" fill="hsl(25,60%,88%)"/>
      {/* Fingers spread out waving */}
      <path d="M20 58 Q17 48 20 44 Q23 42 25 48 Q24 54 22 58Z" fill="hsl(25,60%,88%)" stroke="hsl(20,30%,75%)" strokeWidth="0.8"/>
      <path d="M26 55 Q24 44 27 40 Q31 38 32 45 Q31 51 28 55Z" fill="hsl(25,60%,88%)" stroke="hsl(20,30%,75%)" strokeWidth="0.8"/>
      <path d="M33 54 Q32 43 35 40 Q39 39 39 46 Q38 52 35 55Z" fill="hsl(25,60%,88%)" stroke="hsl(20,30%,75%)" strokeWidth="0.8"/>
      <path d="M39 56 Q39 46 42 44 Q46 44 45 51 Q44 56 41 57Z" fill="hsl(25,60%,88%)" stroke="hsl(20,30%,75%)" strokeWidth="0.8"/>
      <path d="M18 63 Q14 55 17 51 Q20 49 22 55 Q22 60 20 63Z" fill="hsl(25,60%,88%)" stroke="hsl(20,30%,75%)" strokeWidth="0.8"/>

      {/* RIGHT ARM - holding stethoscope */}
      <path d="M145 120 Q158 130 164 155 Q166 168 158 172 Q150 175 146 162 Q142 148 140 132Z" fill="white" stroke="hsl(263,52%,75%)" strokeWidth="1.5"/>
      {/* Hand */}
      <ellipse cx="160" cy="168" rx="11" ry="10" fill="hsl(25,60%,88%)"/>
      {/* Stethoscope */}
      <path d="M160 168 Q172 160 175 148 Q178 136 170 130 Q162 124 156 132 Q152 140 158 146 Q164 152 168 148" stroke="hsl(263,52%,60%)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="168" cy="148" r="6" fill="hsl(263,52%,65%)" stroke="hsl(263,52%,50%)" strokeWidth="1.5"/>
      <circle cx="156" cy="133" r="4" fill="hsl(263,52%,72%)" opacity="0.8"/>

      {/* Legs */}
      <rect x="68" y="218" width="26" height="22" rx="5" fill="hsl(250,25%,82%)"/>
      <rect x="106" y="218" width="26" height="22" rx="5" fill="hsl(250,25%,82%)"/>
      {/* Shoes */}
      <ellipse cx="81" cy="240" rx="18" ry="7" fill="white" stroke="hsl(263,52%,72%)" strokeWidth="1.2"/>
      <ellipse cx="119" cy="240" rx="18" ry="7" fill="white" stroke="hsl(263,52%,72%)" strokeWidth="1.2"/>

      {/* Sparkles around her */}
      <path d="M170 50 L172 44 L174 50 L180 52 L174 54 L172 60 L170 54 L164 52 Z" fill="hsl(340,60%,72%)" opacity="0.9"/>
      <path d="M18 100 L19.5 95 L21 100 L26 101.5 L21 103 L19.5 108 L18 103 L13 101.5 Z" fill="hsl(263,52%,65%)" opacity="0.8"/>
      <circle cx="175" cy="90" r="4" fill="hsl(195,60%,68%)" opacity="0.8"/>
      <circle cx="15" cy="70" r="3" fill="hsl(340,60%,72%)" opacity="0.6"/>
      <path d="M165 108 L166 104 L167 108 L171 109 L167 110 L166 114 L165 110 L161 109 Z" fill="hsl(195,60%,68%)" opacity="0.7"/>
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
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">

          {/* Left text */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <div className="inline-block mb-5">
              <div className="sticker-badge bg-gradient-cute text-white text-base px-5 py-2">
                <Sparkles className="w-4 h-4" />
                <span>Speaking Truth Anonymously</span>
                <Heart className="w-4 h-4" fill="currentColor" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
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

            <form onSubmit={handleSearch} className="max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search posts... HESI, clinical, MCPHS"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-24 py-3 rounded-full border-2 border-border bg-white focus:outline-none focus:border-primary transition-colors text-sm placeholder:text-muted-foreground shadow-sm"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors">
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Right - cartoon nurse waving */}
          <div className="flex-shrink-0 order-1 md:order-2 relative">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl opacity-15 bg-gradient-cute scale-90 translate-y-10" />
              <div className="nurse-bob relative z-10">
                <CartoonNurse size={220} />
              </div>
              {/* Floating badges */}
              <div className="absolute top-8 -left-6 bg-white rounded-2xl px-3 py-1.5 shadow-lg border border-primary/20 text-xs font-bold text-primary float-decoration" style={{animationDelay: '0.5s'}}>
                🩺 RN Student
              </div>
              <div className="absolute top-1/2 -right-8 bg-white rounded-2xl px-3 py-1.5 shadow-lg border border-pink-200 text-xs font-bold text-pink-600 float-decoration" style={{animationDelay: '1.5s'}}>
                💬 Anonymous
              </div>
              <div className="absolute bottom-24 -left-8 bg-white rounded-2xl px-3 py-1.5 shadow-lg border border-sky-200 text-xs font-bold text-sky-600 float-decoration" style={{animationDelay: '1s'}}>
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
          <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
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
