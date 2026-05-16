import { Link } from 'react-router-dom';
import { Heart, Sparkles, MessageCircle, ArrowRight, Users, Shield, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

function StudentStoriesPage() {
  const publishedStories = [
    // Add student submitted stories here as they come in
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block mb-6 relative">
          <div className="w-32 h-32 bg-gradient-cute rounded-full flex items-center justify-center mx-auto shadow-xl">
            <Users className="w-16 h-16 text-white" />
          </div>
          <Sparkles className="w-8 h-8 text-primary absolute -top-2 -right-2 sparkle-animation" />
          <Heart className="w-6 h-6 text-pink-400 absolute -bottom-2 -left-2 float-decoration" fill="currentColor" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient-pink">
          Student Stories
        </h1>

        <p className="text-xl handwritten font-semibold text-muted-foreground mb-4">
          Real voices. Real experiences. Shared anonymously.
        </p>

        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          This is a space for current and former MCPHS students to share their experiences.
          You are not alone and your story deserves to be heard.
        </p>
      </div>

      {/* Submit Your Story CTA */}
      <div className="cute-card border-primary/30 bg-gradient-to-br from-pink-50 to-purple-50 mb-16 text-center">
        <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
        <p className="text-lg text-foreground/80 mb-4 max-w-2xl mx-auto">
          Have an experience at MCPHS you want to share? A clinical story, a frustration,
          something that happened that others need to know about? Submit it here anonymously.
        </p>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm">
          All submissions are completely anonymous. I will review each one and publish
          approved stories on this page. Your name will never appear anywhere.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfQlL2W7HxZ4kLnzNr2MzAsLVGZwMFbkZGFFvVrtu_4O9ZnFA/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="bubbly-button bg-primary hover:bg-primary/90 text-white">
            <MessageCircle className="w-5 h-5 mr-2" />
            Submit Your Story
          </Button>
        </a>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-center">How It Works</h2>
          <Sparkles className="w-6 h-6 text-primary" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="cute-card border-pink-300 text-center">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4 mx-auto">
              <MessageCircle className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-pink-600">1. Submit</h3>
            <p className="text-muted-foreground text-sm">
              Fill out the anonymous form with your story or experience.
              No name, no email, nothing that identifies you.
            </p>
          </div>

          <div className="cute-card border-purple-300 text-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-600">2. Review</h3>
            <p className="text-muted-foreground text-sm">
              I review every submission to make sure it protects your anonymity
              and meets the community guidelines before publishing.
            </p>
          </div>

          <div className="cute-card border-green-300 text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-green-600">3. Published</h3>
            <p className="text-muted-foreground text-sm">
              Approved stories get published right here on this page so others
              can read them and know they are not alone.
            </p>
          </div>
        </div>
      </div>

      {/* Published Stories */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-6 h-6 text-primary" fill="currentColor" />
          <h2 className="text-3xl font-bold">Published Stories</h2>
        </div>

        {publishedStories.length === 0 ? (
          <div className="cute-card border-border text-center py-16">
            <Sparkles className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">Stories Coming Soon</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Be the first to share your experience. Every submission helps build
              a resource for students who come after you.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfQlL2W7HxZ4kLnzNr2MzAsLVGZwMFbkZGFFvVrtu_4O9ZnFA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="bubbly-button">
                <MessageCircle className="w-4 h-4 mr-2" />
                Submit Your Story
              </Button>
            </a>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {publishedStories.map((story: any) => (
              <div key={story.id} className="cute-card border-border hover:border-primary/40">
                <div className="flex items-center gap-2 mb-3">
                  <span className="sticker-badge bg-purple-100 text-purple-700 border-purple-200 text-xs border">
                    {story.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{story.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{story.content}</p>
                <div className="mt-4 pt-4 border-t flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="w-3 h-3" />
                  <span>Submitted anonymously</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Community Guidelines */}
      <div className="cute-card border-orange-300 bg-orange-50/30">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-3">Community Guidelines</h3>
            <ul className="text-foreground/80 space-y-2 text-sm">
              <li>All stories are shared anonymously. Do not include your name or anything that identifies you.</li>
              <li>Do not include the full names of other students.</li>
              <li>Faculty and staff names may be included if relevant to your experience.</li>
              <li>Keep it honest and factual. Share what you experienced.</li>
              <li>This is a space for real experiences, not personal attacks.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="mt-12 text-center">
        <Link to="/blog">
          <Button variant="outline" className="bubbly-button">
            <ArrowRight className="w-4 h-4 mr-2" />
            Read The Blog
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default StudentStoriesPage;
