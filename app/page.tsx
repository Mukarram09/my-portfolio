"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Code, BookUser, Zap } from "lucide-react";
import { PROJECTS, SERVICES, SKILLS } from "@/lib/data";

// --- ANIMATION VARIANTS (Typed for successful Vercel build) ---
const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const slideUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const staggerContainer: Variants = {
  animate: { transition: { staggerChildren: 0.15 } },
};

const techMarquee: Variants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: { 
        repeat: Infinity, 
        repeatType: "loop", 
        duration: 48, 
        ease: "linear" 
      },
    },
  },
};

// --- DATA ---
const skills = ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Node.js", "TypeScript", "UI/UX", "Git", "Framer Motion", "Vercel"];

const services = [
  { icon: Code, title: "Website Development" },
  { icon: BookUser, title: "Custom UI Solutions" },
  { icon: Zap, title: "Frontend Optimization" },
];

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "100%", label: "Code Quality" },
  { value: "9+", label: "Years Experience" },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-rose-600/30 font-sans">
      
      {/* 1. Header (Navbar) */}
      <motion.nav 
        variants={fadeIn} initial="initial" animate="animate"
        className="max-w-7xl mx-auto flex items-center justify-between p-6 py-8"
      >
        <span className="text-xl font-bold tracking-tight">MacDev-Studio</span>
        <div className="flex gap-10 text-sm font-medium text-zinc-300">
          {["Home", "About", "Projects", "Contact"].map(item => (
            <motion.a 
              key={item} 
              href="#" 
              whileHover={{ y: -1, textShadow: "0px 0px 8px #fff" }} 
              className="hover:text-white transition"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* 2. Hero Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16 py-16">
        
        <motion.div variants={slideUp} initial="initial" animate="animate">
          <motion.p variants={fadeIn} className="text-3xl font-medium tracking-tight mb-3">
            Hello.
          </motion.p>
          
          <div className="flex items-center gap-5 mb-3">
            <div className="w-16 h-[2px] bg-rose-600 mt-2" />
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
              I’m a seasoned<br/>
              <span className="text-rose-600">Frontend Developer</span>
            </h1>
          </div>

          <p className="max-w-lg text-lg text-zinc-400 mb-10 leading-relaxed">
            With 9+ years of experience crafting modern, performant digital experiences. Focus on Next.js, Framer, and building scalable interfaces from scratch.
          </p>

          <div className="flex gap-4">
            <motion.button whileHover={{ scale: 1.05 }} className="bg-rose-600 text-white font-semibold text-sm px-7 py-3 rounded-md hover:bg-rose-700 transition">
              Discuss a project?
            </motion.button>
            <motion.button whileHover={{ scale: 1.05, borderColor: '#fff' }} className="border border-zinc-700 text-white font-semibold text-sm px-7 py-3 rounded-md hover:border-zinc-500 transition">
              My resume
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 1.2, ease: "easeOut" } }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full border-[12px] border-zinc-800 flex items-center justify-center p-8">
            <div className="w-full h-full rounded-full border-4 border-rose-600 relative opacity-40">
              <span className="absolute text-rose-600/40 text-4xl top-10 left-10">&lt;/&gt;</span>
              <span className="absolute text-rose-600/40 text-4xl bottom-10 right-10">...</span>
            </div>
          </div>
          
          <div className="relative w-72 h-96 md:w-96 md:h-[32rem] rounded-3xl overflow-hidden shadow-xl border-4 border-zinc-900 bg-zinc-900">
            <Image src="/images/avatar-1.png" alt="Developer Avatar" fill className="object-cover" priority/>
          </div>
        </motion.div>
      </section>

      {/* 3. Tech Stack Marquee */}
      <section className="bg-zinc-900 border-y border-zinc-800/50 py-7 overflow-hidden whitespace-nowrap mb-16">
        <motion.div variants={techMarquee} animate="animate" className="flex gap-20 px-6 w-max">
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`} className="text-sm font-medium text-zinc-500 uppercase tracking-widest">{skill}</span>
          ))}
        </motion.div>
      </section>

      {/* 4. About & Services */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 pb-24 items-start">
        <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.4 }} className="flex flex-col gap-6 md:border-r border-zinc-800 pr-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={slideUp} className="flex items-center gap-6 p-6 rounded-2xl bg-zinc-950 border border-zinc-800/40 shadow-inner group hover:border-rose-600/30 transition">
                <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-rose-600/10 transition">
                  <Icon className="w-7 h-7 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-100">{service.title}</h3>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }} viewport={{ once: true, amount: 0.4 }}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About me</h2>
          <p className="max-w-xl text-lg text-zinc-400 mb-12 leading-relaxed">
            Starting my journey 9+ years ago, I fell in love with creating robust digital solutions from scratch. Through countless product launches, I have mastered the art of bridging complex functionality with elegant frontend architecture.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map(stat => (
              <div key={stat.label} className="border-l-2 border-rose-600 pl-5">
                <p className="text-4xl font-bold text-rose-600 tracking-tighter mb-1">{stat.value}</p>
                <p className="text-sm text-zinc-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-900">
        <h2 className="text-3xl font-bold mb-12">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((proj, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-zinc-900 rounded-xl mb-6 overflow-hidden border border-zinc-800 group-hover:border-rose-600/50 transition-all">
                {/* Add project images here in the future */}
                <div className="relative w-full h-full flex items-center justify-center text-zinc-800 font-bold text-4xl group-hover:scale-110 transition-transform">
                  {/*0{i + 1}*/}
                  <Image src={proj.image} alt="project image" fill className="object-cover" priority/>
                </div>
              </div>
              <p className="text-rose-600 text-xs font-mono mb-2 uppercase tracking-widest">{proj.type}</p>
              <h3 className="text-2xl font-bold mb-3">{proj.title}</h3>
              <p className="text-zinc-500 mb-4">{proj.description}</p>
              <div className="flex gap-2">
                {proj.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded uppercase">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to start?</h2>
          <p className="text-zinc-400 text-xl mb-12">I'm currently available for freelance and full-time opportunities.</p>
          <a href="mailto:your@email.com" className="text-3xl md:text-5xl font-medium text-rose-600 underline underline-offset-8 decoration-1 hover:text-rose-500 transition">
            hello@macdev-studio.com
          </a>
        </motion.div>
      </section>

      <footer className="p-12 text-center text-zinc-600 text-sm border-t border-zinc-900">
        © {new Date().getFullYear()} MacDev-Studio. All rights reserved.
      </footer>
    </main>
  );
}