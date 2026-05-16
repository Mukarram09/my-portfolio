"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  Briefcase, 
  Code2, 
  Terminal, 
  Network, 
  Database, 
  Server, 
  Zap, 
  Layout, 
  Wrench, 
  GraduationCap,
  BookOpen
} from "lucide-react";

// --- ANIMATION VARIANTS (Typed for successful Vercel build) ---
const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const slideUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  animate: { transition: { staggerChildren: 0.15 } },
};

// --- DATA ---
const EXPERIENCE = [
  {
    year: "2025 — Present",
    role: "Lead Frontend Engineer / Founder",
    company: "MacDev9-Studio",
    description: "Architecting high-performance digital experiences. Specializing in Next.js, React, and Framer Motion for premium web applications and scalable e-commerce brand identities.",
    icon: Code2
  },
  {
    year: "2018 — Present",
    role: "Senior Full Stack Developer",
    company: "Adware Technologies Pvt Ltd",
    description: "Spearheaded complex web platforms utilizing the MERN stack. Mentored junior developers and established UI/UX best practices.",
    icon: Terminal
  },
  {
    year: "2017 — Present",
    role: "Frontend Developer",
    company: "Adware Technologies Pvt Ltd",
    description: "Began the journey crafting responsive interfaces. Mastered the fundamentals of HTML, CSS, JavaScript, and bridging the gap between design and engineering.",
    icon: Briefcase
  }
];

const LEARNING = [
  { title: "Scalability & Load Balancing", desc: "Horizontal scaling, sharding, replication", icon: Network },
  { title: "Caching Strategies", desc: "Redis, CDN, cache invalidation patterns", icon: Database },
  { title: "Distributed Systems", desc: "Message queues, event-driven architecture", icon: Server },
  { title: "High-Throughput Design", desc: "Rate limiting, database optimization, indexing", icon: Zap },
];

const SKILL_CATEGORIES = [
  { 
    name: "Frontend", icon: Layout, 
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Redux", "React Query", "Context API", "Expo"] 
  },
  { 
    name: "Backend", icon: Server, 
    skills: ["Node.js", "NestJS", "Express", "REST APIs", "Stripe"] 
  },
  { 
    name: "Database", icon: Database, 
    skills: ["PostgreSQL", "MongoDB", "Prisma"] 
  },
  { 
    name: "Tools", icon: Wrench, 
    skills: ["Git", "GitHub", "Docker", "Jest", "React Testing Library", "Axios"] 
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-rose-600/30 font-sans pb-32">
      
      {/* 1. Header (Navbar) */}
      {/*<motion.nav 
        variants={fadeIn} initial="initial" animate="animate"
        className="max-w-7xl mx-auto flex items-center justify-between p-6 py-8"
      >
        <Link href="/" className="text-xl font-bold tracking-tight">
          <img src="/images/logo1.png" className="h-[50px]" />
        </Link>
        <div className="flex gap-10 text-sm font-medium text-zinc-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/my_portfolio" className="hover:text-white transition">Portfolio</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>
      </motion.nav>*/}  


      {/* Navbar */}
      <nav className="max-w-5xl mx-auto p-6 py-8 pt-32">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 pt-12 pb-24 border-b border-zinc-900">
        <motion.div variants={slideUp} initial="initial" animate="animate">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            The story behind <br/>
            <span className="text-zinc-500">the code.</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-zinc-400 leading-relaxed">
            <p>
              I am a seasoned software developer with nearly a decade of experience translating complex problems into elegant, scalable digital interfaces. My focus is on the sweet spot between cutting-edge performance and robust architecture.
            </p>
            <p>
              Whether it's configuring a Next.js frontend, building out custom e-commerce flows, or preparing a robust MERN stack backend, I build tools that empower businesses to scale. At MacDev-Studio, the goal is always uncompromising quality.
            </p>
          </div>
        </motion.div>
      </header>

      {/* Main Content Grid */}
      <div className="max-w-5xl mx-auto px-6 pt-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Experience Timeline */}
        <div className="lg:col-span-5">
          <motion.h2 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-sm font-mono text-rose-600 uppercase tracking-[0.2em] mb-12 flex items-center gap-3"
          >
            <Briefcase className="w-4 h-4" /> Work Experience
          </motion.h2>

          <motion.div 
            variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.1 }}
            className="relative border-l border-zinc-800 ml-3 space-y-12"
          >
            {EXPERIENCE.map((job, index) => {
              const Icon = job.icon;
              return (
                <motion.div key={index} variants={slideUp} className="relative pl-10">
                  <div className="absolute -left-[17px] top-1 bg-[#080808] border border-zinc-700 p-2 rounded-full">
                    <Icon className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div className="flex flex-col gap-1 mb-2">
                    <h3 className="text-xl font-bold text-zinc-100">{job.role}</h3>
                    <span className="text-rose-600 font-mono text-xs">{job.year}</span>
                  </div>
                  <h4 className="text-md text-zinc-300 font-medium mb-3">{job.company}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{job.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Column: Learning, Skills, Education */}
        <div className="lg:col-span-7 space-y-24">
          
          {/* Currently Learning Section */}
          <section>
            <motion.h2 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-sm font-mono text-rose-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-3"
            >
              <BookOpen className="w-4 h-4" /> Currently Learning
            </motion.h2>
            <p className="text-zinc-500 mb-8 text-sm">Sharpening my system design fundamentals</p>
            
            <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LEARNING.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div key={index} variants={slideUp} className="bg-zinc-900/30 border border-zinc-800/50 p-5 rounded-xl hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-zinc-900 rounded-lg text-rose-600"><Icon className="w-4 h-4" /></div>
                      <h3 className="font-semibold text-zinc-200 text-sm">{item.title}</h3>
                    </div>
                    <p className="text-xs text-zinc-500">{item.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>

          {/* Technical Skills Section */}
          <section>
            <motion.h2 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-sm font-mono text-rose-600 uppercase tracking-[0.2em] mb-8 flex items-center gap-3"
            >
              <Code2 className="w-4 h-4" /> Technical Skills
            </motion.h2>
            
            <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SKILL_CATEGORIES.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div key={index} variants={slideUp} className="bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-6">
                      <Icon className="w-5 h-5 text-zinc-400" />
                      <h3 className="font-semibold text-zinc-200">{category.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map(skill => (
                        <span key={skill} className="text-xs font-medium px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>

          {/* Education Section */}
          <section>
            <motion.h2 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-sm font-mono text-rose-600 uppercase tracking-[0.2em] mb-8 flex items-center gap-3"
            >
              <GraduationCap className="w-4 h-4" /> Education
            </motion.h2>

            <motion.div variants={slideUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <div>
                <h3 className="font-bold text-zinc-100 text-lg mb-1">BA — Bachelor Of Arts</h3>
                <p className="text-zinc-500 text-sm">Chaudhary Charan Singh University</p>
              </div>
              <div className="text-right">
                <span className="text-rose-600 font-mono text-sm font-semibold">2015</span>
                <p className="text-zinc-500 text-xs mt-1">CGPA 7.68/10</p>
              </div>
            </motion.div>

            <motion.div variants={slideUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-bold text-zinc-100 text-lg mb-1">MCA — Computer Science</h3>
                <p className="text-zinc-500 text-sm">Indira Gandhi National Open University</p>
              </div>
              <div className="text-right">
                <span className="text-rose-600 font-mono text-sm font-semibold">2025</span>
                <p className="text-zinc-500 text-xs mt-1">CGPA 7.68/10</p>
              </div>
            </motion.div>
          </section>

        </div>
      </div>
    </main>
  );
}