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
        'Let me talk about clinical placement. Because this has been one of the most frustrating parts of this entire program.',
        'The clinical placement process at MCPHS is a mess. And a big part of that comes down to communication, or the complete lack of it.',
        'There is one person handling clinical placements for nursing students. One person. And reaching her is nearly impossible.',
        'Emails go unanswered. Phone calls go unanswered. And if you think you can leave a voicemail? Think again. Her voicemail box is completely full. As in, you cannot even leave a message because it is maxed out.',
        'Let that sink in for a second. The voicemail box of the person responsible for coordinating your clinical placements is so full that it cannot accept new messages. That alone tells you everything you need to know about how backed up and overwhelmed this situation is.',
        'It is clear to anyone paying attention that this role requires more support. One person should not be solely responsible for managing clinical placements for an entire nursing program without proper backup or resources.',
        'But instead of acknowledging that and fixing it, the program just lets it continue. Students are left waiting, stressing, and scrambling for information about where they will be placed and when.',
        'Clinical placement is not a minor detail. It is a core part of our nursing education. When communication around it is this poor, it directly impacts our ability to prepare, plan, and show up ready to learn.',
        'I am not here to attack anyone personally. But I do think students considering this program deserve to know what they are walking into. When you cannot get basic information about something as important as your clinical placement, it creates a level of stress and uncertainty that should not exist.',
        'This is one of many reasons I would encourage prospective students to really think carefully before choosing MCPHS.',
      ]
    },
    '3': {
      id: '3',
      title: 'When the People Meant to Help You Cannot',
      category: 'The Truth About MCPHS',
      date: 'May 12, 2026',
      readTime: '6 min read',
      content: [
        'Let us talk about getting extra help in this program. Because the experience has been something else.',
        'We have tutors assigned to the nursing program. On paper that sounds great. In practice it has been one of the most frustrating parts of this semester.',
        'Our tutor also handles grading for pharmacology assignments. Early in the semester we started having exam review sessions and it became clear pretty quickly that something was off.',
        'We were given wrong information and wrong answers during review sessions. Things that showed up on our exams. And when we got those questions wrong, we did not get the points back. Even though the incorrect information came directly from the review session. That is beyond frustrating.',
        'The sessions themselves were not useful. We would do jeopardy style reviews where the slides got read out loud. When you asked for a concept to be broken down or asked why a specific answer was correct, the response was to read the textbook or ask your professor.',
        'Which raises an obvious question. Why are we here if we cannot actually review material with you? What is the point of a tutoring session where you cannot get tutoring?',
        'As nursing students we need to be able to trust the people guiding us. When you are given wrong information and it costs you points on an exam, and nobody takes accountability for that, it shakes your confidence in the entire support system.',
        'The bar for who is qualified to support nursing students should be higher. We are learning things that will directly impact patient safety one day. We deserve better than being told to read the textbook when we are asking for help understanding a concept.',
        'This is not personal. This is about standards. And right now the standards are not where they need to be.',
      ]
    },
    '4': {
      id: '4',
      title: 'Study Methods That Actually Helped Me',
      category: 'Nursing School Life',
      date: 'May 15, 2026',
      readTime: '4 min read',
      content: [
        'Okay let me actually be helpful for a second and share what worked for me this semester because some of this genuinely changed how I was scoring.',
        'First, the slides will be your best friend. I know that sounds basic but the exams pull heavily from the slides so do not sleep on them.',
        'YouTube is incredible for nursing content. There are so many nursing educators on there who actually break down concepts in a way that makes sense. Use them.',
        'Simple Nursing is also really good. Short, clear, straight to the point. Great for pharmacology especially.',
        'And then there is Claude. Honestly this one made the biggest difference for me.',
        'I started uploading my slides directly into Claude and asking it to make quizzes for me, explain concepts in different ways, and help me identify weak areas. It is incredibly interactive and it stays focused on what you give it instead of pulling from random outside sources.',
        'The professors will heavily promote NotebookLM. I tried it. I did not find it helpful at all. I started scoring higher once I switched to Claude and I think it is because the interaction is more dynamic and personalized.',
        'You are going to have to do a lot of self teaching in this program. That is just the reality. So find the tools that work for you and use them without guilt.',
        'You are not failing because you have to find outside resources. You are just being resourceful in a program that does not always give you what you need.',
      ]
    },
    '5': {
      id: '5',
      title: 'The HESI and Feeling Unprepared',
      category: 'The Truth About MCPHS',
      date: 'May 18, 2026',
      readTime: '5 min read',
      content: [
        'Let us talk about the HESI.',
        'The HESI is a major exam and for most of us in fundamentals this semester, we did not feel prepared for it. Not because we did not study. But because we were not taught effectively throughout the semester.',
        'When you spend an entire semester in a program where lectures consist of reading off slides, where asking for help gets you pointed back to a textbook, and where the support systems in place are not actually supporting you, it shows up when it is time for a high stakes exam.',
        'The professors heavily promoted a resource called Your Best Grade for HESI prep. I can only speak for myself but I did not find it helpful. It did not address my weak areas in an interactive way and it did not help me feel more confident going into the exam.',
        'What actually helped me was Claude. I uploaded my course materials, identified the topics I was weakest on, and worked through them interactively. It quizzed me, explained things in different ways when I did not understand, and kept me focused on the actual content.',
        'The fact that students are having to figure out their own prep strategies for a major exam because the in-program support is not sufficient says a lot about where this program is falling short.',
        'Prospective students should know that the HESI is a real exam that requires real preparation. Go in with a plan and do not rely solely on what the program provides because it may not be enough.',
        'You deserve to feel prepared. Make sure you build your own toolkit because this program may not build it for you.',
      ]
    },
    '6': {
      id: '6',
      title: 'Protecting Your Mental Health in This Program',
      category: 'Nursing School Life',
      date: 'May 22, 2026',
      readTime: '5 min read',
      content: [
        'Nursing school is hard. We all know this going in. But there is a difference between the normal hard of learning a demanding subject and the kind of hard that comes from being in a program that does not support you well.',
        'MCPHS is both.',
        'I want to talk about mental health because I think it is one of the most important things to prepare for before you start any nursing program. And it is something nobody really warns you about.',
        'You will have moments where you question everything. Whether you made the right choice, whether you are cut out for this, whether you can actually make it through. Those feelings are normal. What is not normal is when a significant part of that stress comes from the disorganization and lack of support in your program rather than just the difficulty of the content itself.',
        'The thing that has kept me going is my people. The friends I have made in this program have been everything. They are my backbone. They understand exactly what I am going through because they are going through it too. We check on each other, we study together, we remind each other that we are not failing even when it feels that way.',
        'If you are starting this program or any nursing program, invest in those relationships early. Find your people. Build that support system because you are going to need it.',
        'And if you are already in it and you are struggling, please know you are not alone. What you are feeling is valid. The program is chaotic and that chaos takes a real toll.',
        'Take care of yourself first. Reach out to the people around you. Lean on your support system. And remember that getting through this program is not just about studying hard. It is about protecting your mental and emotional health along the way.',
        'You deserve to make it to the other side of this whole and okay.',
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
