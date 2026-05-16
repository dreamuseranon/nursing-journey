import { Link } from 'react-router-dom';
import { Heart, Sparkles, BookOpen, Brain, Stethoscope, Calendar, Youtube, Monitor, Coffee, Users } from 'lucide-react';
import { useState } from 'react';

function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('study');

  const tabs = [
    { id: 'study', label: 'Study Tools', icon: BookOpen },
    { id: 'mental', label: 'Mental Health', icon: Brain },
    { id: 'tips', label: 'Survival Tips', icon: Stethoscope },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16 relative">
        <div className="inline-block mb-6 relative">
          <div className="w-32 h-32 bg-gradient-cute rounded-full flex items-center justify-center mx-auto shadow-xl animate-spin-slow">
            <Stethoscope className="w-16 h-16 text-white" />
          </div>
          <Sparkles className="w-8 h-8 text-primary absolute -top-2 -right-2 sparkle-animation" />
          <Heart className="w-6 h-6 text-pink-400 absolute -bottom-2 -left-2 float-decoration" fill="currentColor" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient-pink">
          Resources 🩺
        </h1>
        <p className="text-xl handwritten font-semibold text-muted-foreground mb-4">
          Everything that actually helped me survive nursing school
        </p>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Since the program will not always give you what you need, here is what I found on my own.
          Real tools, real tips, real talk. 💕
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 border-2 ${
                isActive
                  ? 'bg-primary text-white border-primary shadow-lg scale-105'
                  : 'bg-white border-border hover:border-primary/50 text-foreground'
              }`}
            >
              <Icon className="w-5 h-5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Study Tools Tab */}
      {activeTab === 'study' && (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gradient-pink mb-2">Study Tools 📚🩺</h2>
            <p className="text-muted-foreground">The resources that actually moved the needle for me</p>
          </div>

          {/* Top Pick - Claude */}
          <div className="cute-card border-primary/40 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              My Top Pick
            </div>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-cute flex items-center justify-center flex-shrink-0 shadow-lg">
                <Monitor className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Claude AI 🩺✨</h3>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  This genuinely changed how I studied. Upload your slides directly into Claude and ask it to make quizzes, explain concepts in different ways, and identify your weak areas. It is interactive, focused, and does not pull from random outside sources like other AI tools.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  I started scoring higher once I switched from what the professors recommended to using Claude. It quizzed me, explained things until I actually understood them, and kept me focused on the actual content.
                </p>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                  <Sparkles className="w-4 h-4" />
                  Skip NotebookLM. Use this instead.
                </div>
              </div>
            </div>
          </div>

          {/* YouTube Channels */}
          <div className="cute-card border-red-200">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Youtube className="w-7 h-7 text-red-600" />
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-bold text-red-600 mb-4">YouTube Channels 🎬🩺</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-50 rounded-2xl p-4 border border-red-200">
                    <h4 className="font-bold text-red-700 mb-1">Simple Nursing</h4>
                    <p className="text-sm text-foreground/70">Short, clear, straight to the point. Amazing for pharmacology and understanding concepts fast. One of the best out there.</p>
                  </div>
                  <div className="bg-red-50 rounded-2xl p-4 border border-red-200">
                    <h4 className="font-bold text-red-700 mb-1">RegisteredNurseRN</h4>
                    <p className="text-sm text-foreground/70">Super detailed breakdowns of nursing concepts. Great for fundamentals and understanding the why behind everything.</p>
                  </div>
                  <div className="bg-red-50 rounded-2xl p-4 border border-red-200">
                    <h4 className="font-bold text-red-700 mb-1">LevelUpRN</h4>
                    <p className="text-sm text-foreground/70">Clear explanations with visual aids. Really helpful for pharm and med surg concepts. Their flashcard system is also great.</p>
                  </div>
                </div>
                <div className="mt-4 bg-red-50 rounded-2xl p-4 border border-red-200">
                  <h4 className="font-bold text-red-700 mb-1">Nexus Nursing</h4>
                  <p className="text-sm text-foreground/70">Great for NCLEX style thinking and breaking down complex nursing concepts in a digestible way. Highly recommend for exam prep.</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Slides */}
          <div className="cute-card border-purple-300">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 shadow-lg">
                <BookOpen className="w-7 h-7 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-600 mb-2">The Slides Are Your Bible 📖🩺</h3>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  I know it sounds basic but the exams pull HEAVILY from the slides. Do not sleep on them. Know them inside and out before every exam.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Pro tip -- upload them into Claude and have it quiz you on the slide content. That combination is incredibly effective.
                </p>
              </div>
            </div>
          </div>

          {/* What Did NOT Work */}
          <div className="cute-card border-orange-300 bg-orange-50/30">
            <h3 className="text-xl font-bold text-orange-600 mb-4">What Did NOT Work For Me ⚠️</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 border border-orange-200">
                <h4 className="font-bold text-orange-700 mb-1">NotebookLM</h4>
                <p className="text-sm text-foreground/70">Professors will push this heavily. I tried it and did not find it useful at all. Claude was 10x more interactive and helpful for me personally.</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-orange-200">
                <h4 className="font-bold text-orange-700 mb-1">Your Best Grade</h4>
                <p className="text-sm text-foreground/70">Heavily promoted for HESI prep. Did not address my weak areas in an interactive way. Did not help me feel more confident going into the exam.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mental Health Tab */}
      {activeTab === 'mental' && (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gradient-pink mb-2">Mental Health Resources 🧠💕</h2>
            <p className="text-muted-foreground">Because surviving nursing school is just as much mental as it is academic</p>
          </div>

          <div className="cute-card border-primary/30 bg-gradient-to-br from-pink-50 to-purple-50">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Nobody talks about the mental health toll of nursing school enough. The exhaustion, the anxiety, the self doubt. It is real and it is valid. Here is what actually helped me stay sane. 💕
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="cute-card border-green-300">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🏃</span>
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-3">Exercise 🩺</h3>
              <p className="text-foreground/80 leading-relaxed">
                This was a game changer for me. Even just a 20 minute walk after a long study session completely resets your brain. It reduces cortisol, improves focus, and genuinely makes you feel more in control when everything feels chaotic.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-3">
                You do not need a gym membership. Walk, stretch, dance in your room. Just move your body.
              </p>
            </div>

            <div className="cute-card border-blue-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-2xl">😴</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Adequate Sleep 🩺</h3>
              <p className="text-foreground/80 leading-relaxed">
                I know this sounds impossible in nursing school but sleep deprivation actually makes you retain less information. A well rested brain outperforms a tired one every single time.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-3">
                Aim for at least 7 hours before exam days. Your future self will thank you.
              </p>
            </div>

            <div className="cute-card border-pink-300">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-pink-600 mb-3">Your People 💕🩺</h3>
              <p className="text-foreground/80 leading-relaxed">
                The friends I made in this program have been everything. They are my backbone. Find your people early and invest in those relationships. They will understand what you are going through in a way nobody outside the program can.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-3">
                Study together. Cry together. Celebrate together. You need them and they need you.
              </p>
            </div>

            <div className="cute-card border-purple-300">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="text-xl font-bold text-purple-600 mb-3">Meditation 🩺</h3>
              <p className="text-foreground/80 leading-relaxed">
                Even 5 to 10 minutes of meditation before studying or before an exam can significantly reduce anxiety. Apps like Headspace or Calm are great if you are new to it.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-3">
                Box breathing also works great in the moment -- breathe in for 4 counts, hold for 4, out for 4, hold for 4. Repeat.
              </p>
            </div>
          </div>

          <div className="cute-card border-primary/30 text-center">
            <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">And Please -- Take Breaks 🩺💕</h3>
            <p className="text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              You are allowed to rest. You are allowed to have fun. You are allowed to exist outside of nursing school. Burnout is real and it will catch up with you if you do not protect your time. Schedule breaks like you schedule study sessions. They are just as important.
            </p>
          </div>
        </div>
      )}

      {/* Survival Tips Tab */}
      {activeTab === 'tips' && (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gradient-pink mb-2">Survival Tips 🩺✨</h2>
            <p className="text-muted-foreground">Things I wish someone had told me before I started</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="cute-card border-pink-300">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-xl font-bold text-pink-600 mb-3">Be Organized and Use a Calendar 🩺</h3>
              <p className="text-foreground/80 leading-relaxed">
                This is the number one tip. Get a planner or use Google Calendar and map out every exam, every clinical, every assignment due date from day one. The program will not always remind you in time so you have to be your own organizer.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-3">
                Color code by subject. Set reminders. Treat your calendar like your lifeline because in this program it basically is.
              </p>
            </div>

            <div className="cute-card border-purple-300">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-purple-600 mb-3">Know Your Slides 🩺</h3>
              <p className="text-foreground/80 leading-relaxed">
                The slides are where the exams come from. Period. Master them before every single exam. Upload them to Claude, make flashcards from them, quiz yourself on them. Whatever your method is, know those slides cold.
              </p>
            </div>

            <div className="cute-card border-orange-300">
              <div className="text-3xl mb-3">👯</div>
              <h3 className="text-xl font-bold text-orange-600 mb-3">Find Your Study Group Early 🩺</h3>
              <p className="text-foreground/80 leading-relaxed">
                Do not wait until you are struggling to find people to study with. Find your people in the first week and build that group early. Teaching concepts to each other is one of the most effective study methods and the emotional support is priceless.
              </p>
            </div>

            <div className="cute-card border-green-300">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-xl font-bold text-green-600 mb-3">Keep Your Own Master Document 🩺</h3>
              <p className="text-foreground/80 leading-relaxed">
                Announcements get buried in Canvas and emails. Keep your own running Google Doc with all important deadlines, requirements, and information. When things change (and they will change) update your doc. Do not rely on the program to keep you informed.
              </p>
            </div>

            <div className="cute-card border-blue-300">
              <div className="text-3xl mb-3">🙋</div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Ask Questions Anyway 🩺</h3>
              <p className="text-foreground/80 leading-relaxed">
                Even if you know you might get pointed back to the textbook, ask anyway and document it. If you are not getting the support you need from faculty, turn to your classmates, YouTube, and Claude. Do not let the lack of support stop you from learning.
              </p>
            </div>

            <div className="cute-card border-red-300">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="text-xl font-bold text-red-600 mb-3">Remember Why You Started 🩺</h3>
              <p className="text-foreground/80 leading-relaxed">
                There will be days when you want to quit. Days when the program feels impossible and not worth it. On those days remind yourself why you chose nursing in the first place. The program may be chaotic but your goal of becoming a nurse is real and it is worth fighting for.
              </p>
            </div>
          </div>

          <div className="cute-card border-primary/30 bg-gradient-to-br from-pink-50 to-purple-50 text-center">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">You Are Going to Make It 🩺💕</h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Nursing school is hard. MCPHS makes it harder. But you chose this path for a reason and that reason is bigger than any disorganized program. Stay organized, find your people, use the right tools, protect your mental health, and keep going. One day at a time. One exam at a time. You've got this. 
            </p>
            <div className="flex items-center justify-center gap-2 text-primary mt-6">
              <Heart className="w-5 h-5" fill="currentColor" />
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">The Masked Nurse</span>
              <Sparkles className="w-5 h-5" />
              <Heart className="w-5 h-5" fill="currentColor" />
            </div>
          </div>
        </div>
      )}

      <div className="mt-16 text-center">
        <Link to="/blog">
          <div className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
            <BookOpen className="w-5 h-5" />
            Read My Blog Posts
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ResourcesPage;
