import { Heart, Sparkles, Shield, MessageCircle, Stethoscope, AlertTriangle } from 'lucide-react';

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

      {/* Who I Am */}
      <div className="cute-card border-primary/30 mb-12">
        <div className="flex items-start gap-3 mb-6">
          <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" />
          <div>
            <h2 className="text-2xl font-bold mb-4 mt-0">Hi, I am The Masked Nurse</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              I am just a nursing student trying to make it through a program that has honestly been one of the most chaotic experiences of my life. I am staying anonymous because I still have to survive this program and graduate. But I refuse to stay silent.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              I created this space because I needed somewhere to be honest. Not the polished, filtered version of nursing school you see on brochures. The real version. The frustrating, exhausting, sometimes infuriating version that nobody talks about.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              And more than anything, I created this because students at MCPHS do not have a voice. When we bring up issues, it goes nowhere. Faculty do not hear us out. Concerns get dismissed. And nothing changes. So I decided to create my own space to say what needs to be said.
            </p>
          </div>
        </div>
      </div>

      {/* Warning Box */}
      <div className="cute-card border-red-300 bg-red-50/50 mb-12">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-3">If You Are Considering MCPHS</h3>
            <p className="text-red-800 font-medium text-lg leading-relaxed mb-3">
              Stay away. I genuinely mean that.
            </p>
            <p className="text-red-800 leading-relaxed">
              This school is money hungry. They are not setting their students up for success as future nurses. The program is disorganized, the support is lacking, and when students speak up about it, nothing happens. You deserve better than that before you even start.
            </p>
          </div>
        </div>
      </div>

      {/* No Voice */}
      <div className="cute-card border-purple-300 bg-purple-50/30 mb-12">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-600 mb-3">Students Do Not Have a Voice Here</h3>
            <p className="text-foreground/90 leading-relaxed mb-3">
              That is the part that gets me the most. When something is wrong and you try to address it, it is a dead end. Faculty do not acknowledge the issues. Administration does not fix them. You are just expected to keep paying and keep showing up and figure it out on your own.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              This blog is my voice. And I hope it becomes a resource for anyone who feels the same way, or who is still deciding whether to enroll here. You deserve honest information before you make that decision.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="cute-card border-pink-300">
          <Sparkles className="w-8 h-8 text-pink-500 mb-4" />
          <h3 className="text-xl font-bold mb-3 text-pink-600">Why This Exists</h3>
          <p className="text-foreground/80 text-sm leading-relaxed">
            To give students a space to be heard and to give prospective students the honest truth before they commit. No sugarcoating. No politics. Just real experiences from someone living it.
          </p>
        </div>

        <div className="cute-card border-green-300">
          <Shield className="w-8 h-8 text-green-500 mb-4" />
          <h3 className="text-xl font-bold mb-3 text-green-600">Why I Stay Anonymous</h3>
          <p className="text-foreground/80 text-sm leading-relaxed">
            Because I still have to finish this program. Staying anonymous means I can speak freely without consequences. The truth matters more than my name.
          </p>
        </div>
      </div>

      {/* Closing */}
      <div className="text-center cute-card border-primary/30 bg-gradient-to-br from-pink-50 to-purple-50">
        <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-4">You Are Not Alone</h3>
        <p className="text-lg text-foreground/90 mb-4 max-w-2xl mx-auto">
          If you are currently in this program and feeling frustrated, overlooked, or just exhausted, this space is for you too. What you are feeling is valid. And you are not the only one feeling it.
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
