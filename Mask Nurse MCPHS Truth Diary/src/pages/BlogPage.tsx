import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight, AlertCircle, BookOpen, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

function BlogPage() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFilter || 'all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, color: 'text-primary' },
    { id: 'the-truth-about-mcphs', name: 'The Truth About MCPHS', icon: AlertCircle, color: 'text-red-500' },
    { id: 'nursing-school-life', name: 'Nursing School Life', icon: Heart, color: 'text-purple-500' },
    { id: 'personal', name: 'Personal Thoughts', icon: MessageCircle, color: 'text-orange-500' },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Why I Started This Blog',
      excerpt: 'This is not just a place for me to vent. This is a resource. This is the thing I wish I had found before I enrolled at MCPHS.',
      category: 'personal',
      date: 'May 1, 2026',
      readTime: '4 min read'
    },
    {
      id: '2',
      title: 'The Disorganization is Real',
      excerpt: 'The clinical placement process at MCPHS is a mess. Emails go unanswered, phone calls go unanswered, and you cannot even leave a voicemail because the box is full.',
      category: 'the-truth-about-mcphs',
      date: 'May 8, 2026',
      readTime: '5 min read'
    },
    {
      id: '3',
      title: 'When the People Meant to Help You Cannot',
      excerpt: 'We were given wrong information and wrong answers during review sessions. Things that showed up on our exams. And we did not get those points back.',
      category: 'the-truth-about-mcphs',
      date: 'May 12, 2026',
      readTime: '6 min read'
    },
    {
      id: '4',
      title: 'Study Methods That Actually Helped Me',
      excerpt: 'The slides, YouTube, Simple Nursing, and Claude. Honestly Claude made the biggest difference. I started scoring higher once I stopped using what the program recommended.',
      category: 'nursing-school-life',
      date: 'May 15, 2026',
      readTime: '4 min read'
    },
    {
      id: '5',
      title: 'The HESI and Feeling Unprepared',
      excerpt: 'Most of us did not feel prepared for the HESI final. Not because we did not study but because we were not taught effectively throughout the semester.',
      category: 'the-truth-about-mcphs',
      date: 'May 18, 2026',
      readTime: '5 min read'
    },
    {
      id: '6',
      title: 'Protecting Your Mental Health in This Program',
      excerpt: 'Nursing school is hard. But there is a difference between the normal hard and the kind of hard that comes from being in a program that does not support you well.',
      category: 'nursing-school-life',
      date: 'May 22, 2026',
      readTime: '5 min read'
    },
  ];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'the-truth-about-mcphs':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'nursing-school-life':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'personal':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-pink-100 text-pink-700 border-pink-200';
    }
  };

  const getCategoryName = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.name : category;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <div className="sticker-badge bg-gradient-cute text-white text-lg px-6 py-2">
            <BookOpen className="w-5 h-5" />
            <span>My Stories</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient-pink">
          Blog Posts
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real experiences, honest thoughts, and unfiltered stories from nursing school
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Filter by Category
        </h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`sticker-badge border-2 transition-all ${
                  isActive
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105'
                    : 'bg-white border-border hover:border-primary/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="group">
            <article className="cute-card border-border hover:border-primary/40 h-full flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className={`sticker-badge text-xs border ${getCategoryColor(post.category)}`}>
                  {getCategoryName(post.category)}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{post.readTime}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 cute-card border-border">
          <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-semibold mb-2">No posts in this category yet</h3>
          <p className="text-muted-foreground mb-6">Check back soon for more stories!</p>
          <Button onClick={() => setSelectedCategory('all')} variant="outline">
            View All Posts
          </Button>
        </div>
      )}

      <div className="cute-card border-primary/30 bg-gradient-to-br from-pink-50 to-purple-50 text-center">
        <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-3">Want to Know More?</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Read about why I started this blog and my mission to share the truth
        </p>
        <Link to="/about">
          <Button className="bubbly-button bg-primary hover:bg-primary/90">
            <Heart className="w-4 h-4 mr-2" />
            About The Masked Nurse
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default BlogPage;
