import { Heart, Sparkles, Shield, MessageCircle, Stethoscope } from 'lucide-react';

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-block mb-6 relative">
          <div className="w-32 h-32 bg-gradient-cute rounded-full flex items-center justify-center mx-auto shadow-xl">
            <Stethoscope className="w-16 h-16 text-white" />
          </div>
          <Sparkles className="w-8 h-8 text-primary absolute -top-2 -right-2 sparkle-animation" />
          <Heart className="w-6 h-6 text-pink-400 absolute -bottom-2 -left-2 float-decoration" fill="currentColor" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient-pink">
          About The Masked Nurse
        </h1>
        
        <p className="text-xl handwritten font-semibold text-muted-foreground">
          Anonymous. Honest. Unfiltered.
        </p>
      </div>

      {/* Main Content */}
      <div className="cute-card border-primary/30 mb-12">
        <div className="prose prose-lg max-w-none">
          <div className="flex items-start gap-3 mb-6">
            <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" />
            <div>
              <h2 className="text-2xl font-bold mb-4 mt-0">Who I Am</h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                I am a nursing student currently at MCPHS and I created this space because I wanted somewhere to vocalize the problems and issues I have encountered while being in this program.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-0">
                This is also a space for any upcoming students who may be interested in MCPHS -- I invite you to follow me here on this journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Box */}
      <div className="cute-card border-red-300 bg-red-50/50 mb-12">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-3">My Honest Advice?</h3>
            <p className="text-red-800 font-medium text-lg leading-relaxed">
              Stay away. This program is unorganized, chaotic, and a mess and I would steer clear.
            </p>
          </div>
        </div>
      </div>

      {/* Why Anonymous */}
      <div className="cute-card border-purple-300 bg-purple-50/30 mb-12">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-600 mb-3">Why Stay Anonymous?</h3>
            <p className="text-foreground/90 leading-relaxed">
              I am staying anonymous so I can speak freely without consequences. Just honest stories and real experiences from inside the program.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-3">
              This space is about truth, not politics. It's about giving a voice to students who feel unheard and sharing the reality that admissions won't tell you.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="cute-card border-pink-300">
          <Sparkles className="w-8 h-8 text-pink-500 mb-4" />
          <h3 className="text-xl font-bold mb-3 text-pink-600">My Mission</h3>
          <p className="text-foreground/80 text-sm leading-relaxed">
            To create an honest, safe space where current and prospective students can hear the real truth about MCPHS nursing program -- the good, the bad, and the chaotic.
          </p>
        </div>
        
        <div className="cute-card border-mint-300">
          <Heart className="w-8 h-8 text-green-500 mb-4" fill="currentColor" />
          <h3 className="text-xl font-bold mb-3 text-green-600">What You'll Find Here</h3>
          <p className="text-foreground/80 text-sm leading-relaxed">
            Real experiences, unfiltered stories, honest advice, and a community where you can see what nursing school is actually like behind the glossy brochures.
          </p>
        </div>
      </div>

      {/* Closing */}
      <div className="text-center cute-card border-primary/30 bg-gradient-to-br from-pink-50 to-lavender-50">
        <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-4">You're Not Alone</h3>
        <p className="text-lg text-foreground/90 mb-4 max-w-2xl mx-auto">
          If you're feeling frustrated, confused, or overwhelmed by the disorganization -- know that you're not alone. This is your space too.
        </p>
        <div className="flex items-center justify-center gap-2 text-primary">
          <Heart className="w-5 h-5" fill="currentColor" />
          <Sparkles className="w-5 h-5" />
          <Heart className="w-5 h-5" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
