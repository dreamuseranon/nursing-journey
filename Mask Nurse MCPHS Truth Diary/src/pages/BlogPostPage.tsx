import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Heart, Sparkles, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPostData {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
}

function BlogPostPage() {
  const { id } = useParams();

  const posts: Record<string, BlogPostData> = {
    '1': {
      id: '1',
      title: 'Why I Started This Blog',
      category: 'Personal Thoughts',
      date: 'May 1, 2026',
      readTime: '4 min read',
      content: [
        'Hi. Welcome to The Masked Nurse.',
        'I want to start by being very clear about why this blog exists. This is not just a place for me to vent (although there will be plenty of that). This is a resource. This is the thing I wish I had found before I enrolled at MCPHS.',
        'I started this blog to bring awareness to future and potential students who may be considering MCPHS for their nursing education. My honest advice, from someone living it right now: steer clear. Go somewhere else. Do your research before you commit your time, your money, and your future to this program.',
        'Here is what nobody tells you before you sign on the dotted line.',
        'The MCPHS nursing program is disorganized in a way that genuinely impacts your ability to learn. We are talking about schedule changes with little to no notice, information that comes at the last minute, and a general lack of structure that makes an already hard program even harder. Nursing school is supposed to be challenging because the content is challenging. Not because nobody can get it together on the administrative side.',
        'The faculty is not helpful. I want to say that plainly because I think students deserve to know what they are walking into. When you do not understand a concept and you reach out for help, you are often pointed back to the textbook. That is it. Read the textbook.',
        'And the lectures? They consist largely of reading off slides. Not explaining concepts. Not breaking things down. Not making sure students actually understand the material. Just reading the slides out loud and moving on.',
        'When you ask a professor to actually explain a concept in a different way so you can understand it, the response is often dismissal or redirection. You are left to figure it out on your own. You basically have to teach yourself the material, which means you are paying thousands of dollars for a program that is not doing the teaching.',
        'I am not writing this to be dramatic. I am writing this because I genuinely believe prospective students deserve honest information. The brochures are pretty. The campus tours are polished. But the reality of being inside this program is something very different.',
        'If you are currently in the program and you feel like you are drowning, please know you are not alone and you are not the problem. You are having a normal response to a program that is not set up to support its students.',
        'And if you are thinking about applying to MCPHS nursing, I am asking you to follow along here first. Read what I share. Hear the real experience. Then make your decision.',
        'This is the blog I needed before I started. I hope it helps someone.',
      ]
    },
    '2': {
      id: '2',
      title: 'The Disorganization is Real',
      category: 'The Truth About MCPHS',
      date: 'May 8, 2026',
      readTime: '5 min read',
      content: [
        'Let me paint you a picture.',
        'It is Sunday night. You have spent the entire weekend studying for Monday clinical, reviewing skills, preparing mentally. You go to bed early because clinical starts at 6 AM.',
        'Monday morning, 5:30 AM, you check your email while getting ready.',
        'CLINICAL CANCELLED. FURTHER INFORMATION TO FOLLOW.',
        'No explanation. No heads up on Friday. No alternative plan. Just cancelled.',
        'This is not a one-time thing. This is a pattern. Schedule changes with zero notice. Assignments posted the night before they are due. Exam locations changed last minute. It is constant chaos.',
        'The worst part is that when you try to plan ahead and be organized, it does not matter because everything changes anyway.',
        'I have had professors send emails at 11 PM saying things will be different tomorrow. I have shown up to class only to find out it was moved to a different building. I have studied the wrong material because the syllabus changed without any announcement.',
        'This is supposed to be a professional program preparing us for healthcare. The level of disorganization makes me question everything.',
        'How can they expect us to be organized, professional, and detail-oriented when the program itself is none of those things?',
      ]
    },
    '3': {
      id: '3',
      title: 'Clinical Chaos: My First Day',
      category: 'The Truth About MCPHS',
      date: 'May 12, 2026',
      readTime: '6 min read',
      content: [
        'First day of clinical. I was so nervous I could barely sleep the night before.',
        'I arrived 30 minutes early. Full uniform. Name badge. Stethoscope. Everything organized in my bag. Ready to learn.',
        'And then nothing.',
        'Nobody knew where we were supposed to go. The clinical instructor was not there yet. The hospital staff had no idea students were coming. We literally stood in a hallway for 45 minutes waiting for someone to tell us what to do.',
        'When our instructor finally showed up, it turned out there was a miscommunication about which floor we would be on. Half the paperwork was not submitted. The hospital was not fully prepared for students.',
        'We spent the first two hours of clinical just trying to figure out logistics that should have been handled weeks ago.',
        'This was FIRST DAY. The day that is supposed to set the tone for the entire semester. And it was complete chaos.',
        'The hospital nurses were frustrated. The instructor seemed embarrassed. And we students were just confused and disappointed.',
        'I had imagined my first clinical would be exciting, maybe a little scary, but ultimately a great learning experience. Instead it was a masterclass in poor planning and lack of communication.',
        'This is what they do not tell you on campus tours.',
      ]
    },
    '4': {
      id: '4',
      title: 'Study Tips That Actually Work',
      category: 'Nursing School Life',
      date: 'May 15, 2026',
      readTime: '4 min read',
      content: [
        'Okay, enough negativity for a moment. Let me share what has actually helped me survive.',
        'Despite the chaos and disorganization of the program itself, I have found some study strategies that work.',
        '1. Study groups are ESSENTIAL. Not just for reviewing material, but for emotional support. Find your people early. You will need them when things get hard and they will.',
        '2. Do not rely on the schedule. Make your own study schedule based on when exams should be and stick to it even when things change. This way you are always somewhat prepared.',
        '3. Active recall is your best friend. Do not just reread notes. Test yourself constantly. Practice questions are worth their weight in gold.',
        '4. Take care of your mental health. This is not optional. The program is stressful enough without burning yourself out. Rest is productive.',
        '5. Keep a running document of important information because announcements get buried in email chains and Canvas updates. Make your own centralized notes about deadlines and requirements.',
        'These tips will not fix the program problems but they might help you navigate them a little better.',
        'We are all just trying to survive and become nurses. Take care of yourself in the process.',
      ]
    },
    '5': {
      id: '5',
      title: 'When Professors Do Not Respond',
      category: 'The Truth About MCPHS',
      date: 'May 18, 2026',
      readTime: '5 min read',
      content: [
        'Can we talk about email response times?',
        'I sent an email to a professor on Monday morning. It was an urgent question about an assignment due Friday. Important clarification I needed to complete the work correctly.',
        'No response Monday. Okay, they are busy, I get it.',
        'No response Tuesday. Starting to worry.',
        'No response Wednesday. Now I am panicking because the assignment is due in two days.',
        'Thursday afternoon, still nothing. I end up making my best guess on the assignment requirements and turning it in hoping I interpreted things correctly.',
        'Friday morning, after the assignment is already submitted, I finally get a response. Sorry for the delay, here is the clarification you needed.',
        'TOO LATE.',
        'This happens constantly. Questions about grades? Might take two weeks to hear back. Concerns about clinical? You will get a response eventually, maybe. Need clarification on requirements? Good luck.',
        'The lack of communication and support is staggering. We are paying thousands of dollars for this education and we cannot even get timely responses to basic questions.',
        'I have started assuming I will not hear back and just making decisions on my own. It is not ideal but it is the reality of trying to get through this program.',
      ]
    },
    '6': {
      id: '6',
      title: 'The Mental Health Struggle',
      category: 'Nursing School Life',
      date: 'May 22, 2026',
      readTime: '7 min read',
      content: [
        'Let us talk about something nobody warned me about: the mental health toll of nursing school.',
        'I knew it would be hard. I knew it would be stressful. But I did not know it would be THIS consuming.',
        'The constant anxiety of waiting for schedule changes. The stress of unclear expectations. The frustration of feeling unsupported. The exhaustion of clinical days starting at 5 AM. The pressure of high-stakes exams. The fear of making mistakes when patient care is involved.',
        'It all adds up.',
        'I have cried more this semester than I have in years. I have had panic attacks before exams. I have laid awake at night wondering if I made the right choice, if I can actually do this, if I am cut out for nursing.',
        'And here is what really gets me: the program creates so much of this stress unnecessarily. Sure, nursing is a stressful profession. I understand that. But the chaos and disorganization of the program itself adds a whole extra layer of anxiety that has nothing to do with actual nursing.',
        'When you are constantly worried about what will change next or what information you missed or whether you will actually have clinical next week, it is impossible to focus on learning the actual nursing content.',
        'If you are struggling with your mental health in this program, please know you are not weak. You are not failing. You are having a completely normal response to an abnormally stressful situation.',
        'Take care of yourself. Seriously. Your mental health matters more than any grade.',
      ]
    },
  };

  const post = id ? posts[id] : null;

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, this blog post does not exist yet.
        </p>
        <Link to="/blog">
          <Button>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    if (category.includes('MCPHS')) return 'bg-red-100 text-red-700 border-red-200';
    if (category.includes('Life')) return 'bg-purple-100 text-purple-700 border-purple-200';
    return 'bg-orange-100 text-orange-700 border-orange-200';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to all posts</span>
      </Link>

      <article className="cute-card border-primary/30 mb-8">
        <div className="mb-6">
          <span className={`sticker-badge border ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="h-px bg-gradient-cute mb-8" />

        <div className="prose prose-lg max-w-none">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-foreground/90 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="h-px bg-gradient-cute mt-12 mb-8" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" fill="currentColor" />
            <Sparkles className="w-5 h-5 text-primary" />
            <Heart className="w-5 h-5 text-primary" fill="currentColor" />
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 className="w-4 h-4" />
            Share Post
          </Button>
        </div>
      </article>

      <div className="cute-card border-border bg-muted/30">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-lg">Read More Stories</h3>
        </div>
        <Link to="/blog">
          <Button variant="outline" className="w-full">
            <ArrowLeft className="w-4 h-4 mr-2" />
            View All Blog Posts
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default BlogPostPage;
