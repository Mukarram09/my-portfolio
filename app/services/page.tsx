"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { 
  Check, ArrowUpRight, MessageCircle, Calendar, Star, ChevronRight, 
  Layout, Smartphone, Code2, Database, Home, Briefcase, Tag, Sparkles, Hexagon, Code, FastForward, Presentation, Award,
} from "lucide-react";
import Link from "next/link";

// --- DUMMY DATA FOR THE REPLICA ---
const TECH_STACK = ["React", "Next.js", "Tailwind", "Node.js", "MongoDB", "Framer"];

const SERVICES = [
  { title: "Website Design & Dev", icon: Layout },
  { title: "App Designs & MERN", icon: Smartphone },
  { title: "MVPs & Product Design", icon: Code2 },
  { title: "Custom Engineering", icon: Database },
];

const PORTFOLIO_SECTIONS = [
  {
    title: "Landing Page Development",
    subtitle: "From landing page to all web pages",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2370&auto=format&fit=crop"
    ]
  },
  {
    title: "Full Website Designs",
    subtitle: "End-to-end user experiences built for humans",
    images: [
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2370&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2494&auto=format&fit=crop"
    ]
  }
];

const TESTIMONIALS = [
  { name: "Sarah J.", role: "Founder", text: "The delivery was phenomenal. The Next.js architecture is blazing fast.", stars: 5 },
  { name: "Marcus T.", role: "CTO", text: "Exceptional UI/UX skills. Bridged the gap between design and our backend seamlessly.", stars: 5 },
  { name: "Elena R.", role: "Director", text: "Highly responsive and communicative. The e-commerce platform looks stunning.", stars: 5 },
];

const HERO_MARQUEE_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2494&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2370&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2370&auto=format&fit=crop"
];

export default function HomePage() {
  const [isFaster, setIsFaster] = useState(false);
  
  // For the sticky scroll section
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <main className="min-h-screen bg-[#030508] text-white selection:bg-teal-500/30 font-sans overflow-x-hidden relative">
      
      {/* --- THE SIGNATURE LIGHT BEAM BACKGROUND --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1000px] bg-gradient-to-b from-teal-400/20 via-emerald-400/5 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[800px] bg-gradient-to-b from-white/30 to-transparent blur-[60px] pointer-events-none" />

      {/* --- 1. NAVBAR --- */}
      {/*<nav className="d-none fixed top-0 w-full z-50 bg-[#030508]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 cursor-pointer text-xl font-bold tracking-tight">
            <img src="/images/logo1.png" className="h-[50px]" />
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {[
              { name: "Home", icon: Home, href: "#" },
              { name: "Services", icon: Briefcase, href: "#services" },
              { name: "Pricing", icon: Tag, href: "#pricing" },
              { name: "Testimonials", icon: Star, href: "#testimonials" },
            ].map((item) => (
              <Link key={item.name} href={item.href} className="flex items-center gap-2 hover:text-white transition group">
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-rose-500 transition-colors" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            
            <div className="hidden md:flex items-center gap-5">
              <a href="https://x.com/mac_dev9/" target="_blank" className="text-zinc-400 hover:text-white transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-[#229ED9] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-[#25D366] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.388 0 12.034c0 2.126.551 4.195 1.6 6.014L.203 23.454l5.545-1.455a12.012 12.012 0 0 0 6.283 1.761h.005c6.645 0 12.031-5.386 12.031-12.035 0-3.22-1.254-6.248-3.533-8.527C18.256 1.253 15.23 0 12.031 0zm0 19.78h-.003a9.97 9.97 0 0 1-5.083-1.388l-.364-.216-3.774.99.996-3.68-.237-.378A9.957 9.957 0 0 1 2.03 12.035c0-5.503 4.48-9.983 9.984-9.983 2.67 0 5.178 1.041 7.065 2.93 1.886 1.89 2.924 4.398 2.924 7.068 0 5.505-4.481 9.985-9.985 9.985zm5.474-7.481c-.3-.15-1.776-.877-2.052-.978-.276-.1-.477-.15-.678.15-.2.302-.777.978-.952 1.179-.176.201-.351.226-.652.075-1.343-.671-2.455-1.282-3.414-2.923-.204-.349.202-.323.498-.918.099-.201.05-.376-.025-.526-.075-.15-.678-1.632-.93-2.235-.246-.588-.495-.508-.678-.517-.175-.008-.376-.008-.577-.008-.2 0-.526.075-.801.376-.276.301-1.052 1.028-1.052 2.507 0 1.48 1.077 2.91 1.228 3.111.15.2 2.122 3.238 5.14 4.54 1.761.76 2.454.825 3.32.695.952-.143 2.877-1.177 3.279-2.316.401-1.14.401-2.118.276-2.319-.125-.2-.477-.301-.777-.451z"/></svg>
              </a>
            </div>

            <Link href="#pricing">
              <button className="flex items-center gap-3 bg-gradient-to-r from-zinc-900 to-rose-950/40 border border-zinc-800 hover:border-rose-600 text-white pl-5 pr-1.5 py-1.5 rounded-full font-medium transition-all group shadow-lg shadow-rose-900/10">
                <span className="text-sm tracking-wide">View Pricing & Plans</span>
                <div className="bg-white text-black rounded-full p-2 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </Link>

          </div>
        </div>
      </nav>*/}

      {/* --- 2. HERO SECTION (Left Aligned & Themed) --- */}
      <section className="relative pt-32 pb-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 z-10 min-h-[90vh] items-center">
        
        {/* Left Column: Text & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left"
        >
          
          {/* Expertise Pill */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm mb-8 shadow-lg">
            <span className="text-xs text-zinc-300 font-medium">Expertise in industry leading tools</span>
            <div className="flex items-center gap-2 border-l border-white/10 pl-3">
              {/* Simplified Tech Icons (Figma, JS, TS, React, Node, Next) */}
              <span className="text-[10px] font-bold text-[#F24E1E]">Fg</span>
              <span className="text-[10px] font-bold text-[#F7DF1E]">JS</span>
              <span className="text-[10px] font-bold text-[#3178C6]">TS</span>
              <span className="text-[10px] font-bold text-[#61DAFB]">Re</span>
              <span className="text-[10px] font-bold text-[#339933]">Nd</span>
              <span className="text-[10px] font-bold text-white bg-black px-1 rounded">Nx</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-medium tracking-tighter leading-[1.05] mb-6 text-white">
            We <span className="relative inline-block px-2">
              <span className="relative z-10 font-serif italic">design</span>
              {/* The box around "design" */}
              <svg className="absolute inset-0 w-full h-full text-zinc-700/80 -z-0 scale-110" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <rect x="2" y="10" width="96" height="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="2" cy="10" r="3" fill="#e11d48" /> {/* Rose dot */}
                <circle cx="98" cy="90" r="3" fill="#e11d48" /> {/* Rose dot */}
              </svg>
            </span> & develop <br/>
            products, websites & apps
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-lg leading-relaxed">
            For brands ready to stand out, sell more, and look unforgettable on every screen.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-14 w-full sm:w-auto">
            
            {/* Book a Call Button (Glowing Red Theme) */}
            <Link href="#contact" className="w-full sm:w-auto">
              <button className="flex w-full items-center justify-between sm:justify-start gap-4 bg-gradient-to-r from-zinc-950 to-rose-950/40 border border-zinc-800 hover:border-rose-600 text-white pl-6 pr-2 py-2 rounded-full font-medium transition-all group shadow-[0_0_30px_rgba(225,29,72,0.15)] hover:shadow-[0_0_30px_rgba(225,29,72,0.3)]">
                <span>Book a call with us</span>
                <div className="bg-white text-black rounded-full p-2.5 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </Link>

            {/* Chat Status Button */}
            <button className="flex w-full sm:w-auto items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition">
              {/*<span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>*/}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.388 0 12.034c0 2.126.551 4.195 1.6 6.014L.203 23.454l5.545-1.455a12.012 12.012 0 0 0 6.283 1.761h.005c6.645 0 12.031-5.386 12.031-12.035 0-3.22-1.254-6.248-3.533-8.527C18.256 1.253 15.23 0 12.031 0zm0 19.78h-.003a9.97 9.97 0 0 1-5.083-1.388l-.364-.216-3.774.99.996-3.68-.237-.378A9.957 9.957 0 0 1 2.03 12.035c0-5.503 4.48-9.983 9.984-9.983 2.67 0 5.178 1.041 7.065 2.93 1.886 1.89 2.924 4.398 2.924 7.068 0 5.505-4.481 9.985-9.985 9.985zm5.474-7.481c-.3-.15-1.776-.877-2.052-.978-.276-.1-.477-.15-.678.15-.2.302-.777.978-.952 1.179-.176.201-.351.226-.652.075-1.343-.671-2.455-1.282-3.414-2.923-.204-.349.202-.323.498-.918.099-.201.05-.376-.025-.526-.075-.15-.678-1.632-.93-2.235-.246-.588-.495-.508-.678-.517-.175-.008-.376-.008-.577-.008-.2 0-.526.075-.801.376-.276.301-1.052 1.028-1.052 2.507 0 1.48 1.077 2.91 1.228 3.111.15.2 2.122 3.238 5.14 4.54 1.761.76 2.454.825 3.32.695.952-.143 2.877-1.177 3.279-2.316.401-1.14.401-2.118.276-2.319-.125-.2-.477-.301-.777-.451z"/></svg>
              Chat with MacDev now
            </button>
          </div>

          {/* Vertical Checklist */}
          <div className="flex flex-col gap-4">
            {['Super fast delivery', 'Unlimited revisions', 'Full deliverables', 'Clear communications'].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + (i * 0.1) }}
                key={item} 
                className="flex items-center gap-3"
              >
                <Check className="w-5 h-5 text-rose-600 font-bold" />
                <span className="text-zinc-300 font-medium text-lg">{item}</span>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Right Column: Visuals & Themed Light Beam */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5 }}
          className="relative hidden lg:block h-full w-full"
        >
          {/* The Themed Light Beam (Rose/Red) */}
          <div className="absolute top-[-10%] right-[10%] w-[150px] h-[120%] bg-gradient-to-b from-white via-rose-500 to-transparent blur-[60px] pointer-events-none rotate-[15deg] opacity-70 mix-blend-screen z-20" />
          <div className="absolute top-0 right-[5%] w-[400px] h-[100%] bg-gradient-to-b from-rose-600/30 to-transparent blur-[100px] pointer-events-none z-10" />

          {/* Placeholder for the UI Mockups behind the beam */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607799279861-4dddfa1dd4cb?q=80&w=2370&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-20 rounded-3xl border border-white/5 grayscale" />
        </motion.div>
        
      </section>

      {/* --- HERO BOTTOM MARQUEE --- */}
      <div className="w-full relative overflow-hidden pb-24 -mt-12 z-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex gap-6 min-w-max px-6"
        >
          {/* We double the array so the infinite scroll loops seamlessly */}
          {[...HERO_MARQUEE_IMAGES, ...HERO_MARQUEE_IMAGES].map((img, i) => (
            <div 
              key={i} 
              className="relative w-[280px] h-[400px] md:w-[350px] md:h-[500px] rounded-2xl overflow-hidden border border-white/5 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 bg-zinc-900 cursor-pointer"
            >
              <Image 
                src={img} 
                alt="Portfolio Work Showcase" 
                fill 
                className="object-cover object-top" 
                sizes="(max-width: 768px) 280px, 350px"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- 3. SERVICES GRID (Bento Box Layout) --- */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-32 z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm mb-6">
            <div className="w-5 h-5 rounded-full border border-rose-600 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-rose-600 rounded-sm rotate-45" />
            </div>
            <span className="text-sm text-zinc-300 font-medium">MacDev Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 font-serif">Design & Custom Development</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Web designs, product design, pitch decks, MVP builds, web engineering, software development, and marketing collateral. We do it all.
          </p>
        </div>

        {/* 3x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Website Design */}
          <div className="bg-[#f8f9fa] rounded-[2rem] p-8 h-[340px] relative overflow-hidden group flex flex-col justify-end">
            
            {/* Floating Images */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[120%] flex justify-center gap-4 group-hover:scale-105 transition-transform duration-700">
               <div className="w-40 h-32 bg-black rounded-xl border border-zinc-800 shadow-2xl -rotate-12 translate-y-4 overflow-hidden relative">
                 <Image src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=600&auto=format&fit=crop" alt="UI" fill className="object-cover opacity-60"/>
               </div>
               <div className="w-40 h-40 bg-white rounded-xl border border-zinc-200 shadow-2xl rotate-6 z-10 overflow-hidden relative">
                 <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" alt="UI" fill className="object-cover"/>
               </div>
            </div>
            
            {/* Bottom Content: Tech Chips & Title */}
            <div className="relative z-20 mt-auto">
               <div className="flex items-center gap-3 mb-4">
                 
                 {/* Design Tools Cluster */}
                 <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 py-2 rounded-2xl shadow-sm border border-zinc-200/50">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#F24E1E]/10 text-[#F24E1E] cursor-pointer hover:-translate-y-[3px] transition-transform duration-300">Fg</div>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-black text-white cursor-pointer hover:-translate-y-[3px] transition-transform duration-300">Fr</div>
                 </div>
                 
                 {/* Dev Tools Cluster */}
                 <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 py-2 rounded-2xl shadow-sm border border-zinc-200/50">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#F7DF1E] text-black cursor-pointer hover:-translate-y-[3px] transition-transform duration-300">JS</div>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#38BDF8]/10 text-[#38BDF8] cursor-pointer hover:-translate-y-[3px] transition-transform duration-300">Tw</div>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#3178C6] text-white cursor-pointer hover:-translate-y-[3px] transition-transform duration-300">TS</div>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#61DAFB]/10 text-[#61DAFB] cursor-pointer hover:-translate-y-[3px] transition-transform duration-300">Re</div>
                 </div>

               </div>
               <h3 className="text-xl font-medium text-black">Website design & dev</h3>
            </div>
          </div>

          {/* Card 2: App Designs */}
          <div className="bg-[#f8f9fa] rounded-[2rem] p-8 h-[340px] relative overflow-hidden group flex flex-col justify-end">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[120%] flex justify-center gap-4 group-hover:scale-105 transition-transform duration-700">
               <div className="w-24 h-48 bg-white rounded-[2rem] border-4 border-zinc-100 shadow-xl -rotate-6 translate-y-4 overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop" alt="App" fill className="object-cover"/>
               </div>
               <div className="w-24 h-48 bg-white rounded-[2rem] border-4 border-zinc-100 shadow-xl rotate-12 z-10 overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop" alt="App" fill className="object-cover"/>
               </div>
            </div>
            <div className="relative z-20 space-y-2 mt-auto">
               <Sparkles className="w-6 h-6 text-emerald-500" />
               <h3 className="text-xl font-medium text-black">App Designs & Screenshots</h3>
            </div>
          </div>

          {/* Card 3: MVPs */}
          <div className="bg-[#f8f9fa] rounded-[2rem] p-8 h-[340px] relative overflow-hidden group flex flex-col justify-end">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[120%] flex justify-center group-hover:scale-105 transition-transform duration-700">
               <div className="w-56 h-36 bg-white rounded-xl border border-zinc-200 shadow-2xl rotate-3 overflow-hidden relative">
                 <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" alt="Dashboard" fill className="object-cover"/>
               </div>
            </div>
            <div className="relative z-20 space-y-2 mt-auto">
               <Hexagon className="w-6 h-6 text-emerald-500" />
               <h3 className="text-xl font-medium text-black">MVPs & Product design</h3>
            </div>
          </div>

          {/* Card 4: Custom Code (Themed Red/Rose Highlight) */}
          <div className="bg-gradient-to-br from-rose-950 via-rose-900/60 to-zinc-950 border border-rose-800/30 rounded-[2rem] p-8 h-[340px] relative overflow-hidden group flex flex-col justify-end shadow-[0_0_40px_rgba(225,29,72,0.15)]">

            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[120%] flex justify-center gap-4 group-hover:scale-105 transition-transform duration-700">
               <div className="w-48 h-32 bg-zinc-900 rounded-xl border border-rose-500/20 shadow-2xl -rotate-6 translate-y-2 overflow-hidden relative">
                 <Image src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=600&auto=format&fit=crop" alt="Code" fill className="object-cover opacity-80"/>
               </div>
               <div className="w-40 h-32 bg-blue-900/20 rounded-xl border border-blue-500/20 shadow-2xl rotate-12 z-10 backdrop-blur-md" />
            </div>
            
            {/* Bottom Content: Title Left, Chips Right */}
            <div className="relative z-20 mt-auto flex justify-between items-end w-full">
               
               {/* Left: Icon & Title */}
               <div className="space-y-2">
                 <Code className="w-6 h-6 text-rose-400" />
                 <h3 className="text-xl font-medium text-white">Custom code</h3>
               </div>

               {/* Right: Stacked Tech Chips */}
               <div className="flex flex-col items-end gap-2">
                 {/* Top Row */}
                 <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-rose-500/20">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#F7DF1E] text-black cursor-pointer hover:-translate-y-[3px] transition-transform duration-300">JS</div>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#38BDF8]/20 text-[#38BDF8] cursor-pointer hover:-translate-y-[3px] transition-transform duration-300">Tw</div>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#3178C6] text-white cursor-pointer hover:-translate-y-[3px] transition-transform duration-300">TS</div>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#61DAFB]/20 text-[#61DAFB] cursor-pointer hover:-translate-y-[3px] transition-transform duration-300">Re</div>
                 </div>
                 {/* Bottom Row */}
                 <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-rose-500/20 mr-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#339933]/20 text-[#339933] cursor-pointer hover:-translate-y-[3px] transition-transform duration-300">Nd</div>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-white text-black cursor-pointer hover:-translate-y-[3px] transition-transform duration-300">Nx</div>
                 </div>
               </div>

            </div>
          </div>

          {/* Card 5: Ad Campaigns */}
          <div className="bg-[#f8f9fa] rounded-[2rem] p-8 h-[340px] relative overflow-hidden group flex flex-col justify-end">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[120%] flex justify-center gap-4 group-hover:scale-105 transition-transform duration-700">
               <div className="w-40 h-32 bg-orange-100 rounded-xl border border-orange-200 shadow-2xl -rotate-6 translate-y-4" />
               <div className="w-40 h-32 bg-zinc-900 rounded-xl shadow-2xl rotate-6 z-10" />
            </div>
            <div className="relative z-20 space-y-2 mt-auto">
               <FastForward className="w-6 h-6 text-emerald-500" />
               <h3 className="text-xl font-medium text-black">Ad Campaign Designs - Marketing</h3>
            </div>
          </div>

          {/* Card 6: Pitch Decks */}
          <div className="bg-[#f8f9fa] rounded-[2rem] p-8 h-[340px] relative overflow-hidden group flex flex-col justify-end">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[120%] flex justify-center gap-4 group-hover:scale-105 transition-transform duration-700">
               <div className="w-48 h-28 bg-zinc-900 rounded-xl shadow-2xl -rotate-12 translate-y-4 flex items-center justify-center text-white font-bold text-2xl">Velto</div>
               <div className="w-48 h-28 bg-purple-600 rounded-xl shadow-2xl rotate-6 z-10 flex items-center p-4 text-white font-bold text-xl">Why Velto is better</div>
            </div>
            <div className="relative z-20 space-y-2 mt-auto">
               <Presentation className="w-6 h-6 text-emerald-500" />
               <h3 className="text-xl font-medium text-black">Pitch Decks & Collateral</h3>
            </div>
          </div>

        </div>
      </section>

      {/* --- 4. STICKY PORTFOLIO SHOWCASE (The video effect) --- */}
      <section ref={containerRef} className="max-w-7xl mx-auto px-6 py-32 relative">
        {PORTFOLIO_SECTIONS.map((section, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-16 mb-40 relative">
            
            {/* Left Side: Sticky Text */}
            <div className="lg:w-1/3">
              <div className="sticky top-40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Layout className="w-4 h-4 text-teal-500" />
                  </div>
                  <span className="font-medium">Web Design</span>
                </div>
                <h2 className="text-5xl font-medium tracking-tight mb-4 leading-tight">{section.title}</h2>
                <p className="text-zinc-500 text-lg mb-8">{section.subtitle}</p>
                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition group">
                  See Full Project 
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Side: Scrolling Images */}
            <div className="lg:w-2/3 flex flex-col gap-8">
              {section.images.map((img, i) => (
                <div key={i} className="w-full h-[600px] relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900">
                  <Image 
                    src={img} 
                    alt="Project Screenshot" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              ))}
            </div>

          </div>
        ))}
      </section>

      {/* --- 5. PRICING SECTION --- */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        
        {/* Header with Architectural Dashed Boxes */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 text-white leading-tight">
            Pricing & Plans for premium <br className="hidden md:block"/>
            <span className="relative inline-block px-4 py-1 mt-2 md:mt-0 mr-4">
              <span className="relative z-10 font-serif">Designs</span>
              <svg className="absolute inset-0 w-full h-full text-zinc-600 -z-0" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <rect x="0" y="0" width="100" height="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="0" cy="0" r="3" fill="#e11d48" /> {/* Rose dot */}
                <circle cx="100" cy="100" r="3" fill="#e11d48" /> {/* Rose dot */}
              </svg>
            </span>
            & 
            <span className="relative inline-block px-4 py-1 mt-2 md:mt-0 ml-4">
              <span className="relative z-10 font-serif">Development</span>
              <svg className="absolute inset-0 w-full h-full text-zinc-600 -z-0" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <rect x="0" y="0" width="100" height="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="0" cy="0" r="3" fill="#e11d48" /> {/* Rose dot */}
                <circle cx="100" cy="100" r="3" fill="#e11d48" /> {/* Rose dot */}
              </svg>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* CARD 1: RETAINER */}
          <div className="bg-[#0a0a0a] border border-zinc-800/80 rounded-[2rem] p-8 md:p-10 relative overflow-hidden flex flex-col shadow-2xl">
            {/* Bottom Glow (Neutral) */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-zinc-800/30 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex-grow">
              <Award className="w-8 h-8 text-white mb-4" />
              
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-white tracking-tight">Retainer</h3>
                {/* Toggle */}
                <div className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-8 h-4 bg-zinc-700 group-hover:bg-zinc-600 rounded-full relative transition-colors">
                    <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5" />
                  </div>
                  <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Make it Faster</span>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 mb-8">
                <p className="text-sm text-zinc-300">Ideal for those who need an ongoing quick design support.</p>
              </div>

              <ul className="flex flex-col text-sm text-zinc-300 divide-y divide-zinc-800/60 mb-10">
                {[
                  "1 Active request at a time (design or development, any)",
                  "1 Senior designer & 1 Senior Developer if needed",
                  "Bi-weekly progress meetings",
                  "Fast turnaround",
                  "Unlimited design requests",
                  "Unlimited revisions on each design & dev request",
                  "48-hours updates",
                  "Communication through Slack, Loom & Meetings"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 py-3.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3 py-3.5">
                  <Sparkles className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-snug text-rose-400 font-medium">Free Development with Framer to develop landing pages</span>
                </li>
                <li className="flex items-start gap-3 py-3.5">
                  <Sparkles className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-snug text-rose-400 font-medium">Free custom web engineering (ReactJS, NextJS, NodeJS, Flask etc)</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$3999/</span>
                <span className="text-zinc-500 text-sm">per month</span>
              </div>
              <button className="w-full bg-white text-black hover:bg-zinc-200 py-3.5 rounded-xl font-bold transition-colors mb-4">
                Book a Call
              </button>
              <div className="flex gap-3">
                <button className="flex-1 bg-transparent border border-zinc-700 hover:border-zinc-500 rounded-xl py-2.5 text-xs font-medium text-zinc-300 transition-colors">
                  Connect on Whatsapp
                </button>
                <button className="flex-1 bg-transparent border border-zinc-700 hover:border-zinc-500 rounded-xl py-2.5 text-xs font-medium text-zinc-300 transition-colors">
                  Connect on Telegram
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2: LANDING PAGE (Themed Red/Rose) */}
          <div className="bg-[#0a0a0a] border border-rose-900/30 rounded-[2rem] p-8 md:p-10 relative overflow-hidden flex flex-col shadow-2xl">
            {/* Top & Bottom Glow (Rose Theme) */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-rose-900/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-rose-900/20 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex-grow">
              <p className="text-rose-500 text-xs font-bold tracking-wider uppercase mb-3 block">10 days delivery</p>
              
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-white tracking-tight">Landing Page</h3>
                {/* Active Toggle */}
                <div className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-8 h-4 bg-zinc-700 rounded-full relative transition-colors">
                    <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5" />
                  </div>
                  <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Make it Faster</span>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 mb-8">
                <p className="text-sm text-zinc-300">Ideal for a single, high-impact landing page designed to maximize conversions.</p>
              </div>

              <ul className="flex flex-col text-sm text-zinc-300 divide-y divide-zinc-800/60 mb-6">
                {[
                  "Fully Custom Design",
                  "Delivery in 10 days",
                  "Desktop & Mobile Responsive Design",
                  "Brand Consistency",
                  "Figma File",
                  "Updates every 48 hours",
                  "Unlimited Revisions",
                  "+$400 For Each Extra Web Page"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 py-3.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Add-ons with Rose Toggles */}
              <div className="flex flex-col gap-4 mb-10 pt-4">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-4 bg-zinc-700 rounded-full relative cursor-pointer flex-shrink-0">
                      <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5" />
                    </div>
                    <span className="text-sm text-rose-400 font-medium">Website development (Framer) +$1k</span>
                 </div>
                 <div className="flex items-center gap-3">
                    {/* Checked state styling */}
                    <div className="w-8 h-4 bg-rose-600 rounded-full relative cursor-pointer flex-shrink-0 transition-colors shadow-[0_0_10px_rgba(225,29,72,0.5)]">
                      <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5" />
                    </div>
                    <span className="text-sm text-rose-400 font-medium">Custom Web Engineering - (NextJS/ReactJS/Other) +$1k</span>
                 </div>
              </div>

            </div>

            <div className="relative z-10 mt-auto">
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$1000/</span>
                <span className="text-zinc-500 text-sm">one time</span>
              </div>
              <button className="w-full bg-white text-black hover:bg-zinc-200 py-3.5 rounded-xl font-bold transition-colors mb-4">
                Book a Call
              </button>
              <div className="flex gap-3">
                <button className="flex-1 bg-transparent border border-zinc-700 hover:border-zinc-500 rounded-xl py-2.5 text-xs font-medium text-zinc-300 transition-colors">
                  Connect on Whatsapp
                </button>
                <button className="flex-1 bg-transparent border border-zinc-700 hover:border-zinc-500 rounded-xl py-2.5 text-xs font-medium text-zinc-300 transition-colors">
                  Connect on Telegram
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 6. TESTIMONIALS (Horizontal Marquee) --- */}
      <section id="testimonials" className="py-24 border-t border-white/5 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">Testimonials</h2>
          <p className="text-zinc-500">Let's see what our clients say about us!</p>
        </div>

        <div className="relative w-full flex overflow-hidden">
          {/* Framer motion infinite scroll */}
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            className="flex gap-6 px-6 min-w-max"
          >
            {/* Double the array for seamless looping */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((test, i) => (
              <div key={i} className="w-[400px] bg-white/[0.03] border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                <p className="text-zinc-300 text-lg leading-relaxed mb-8">"{test.text}"</p>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(test.stars)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
                  </div>
                  <h4 className="font-bold">{test.name}</h4>
                  <p className="text-sm text-zinc-500">{test.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 py-12 text-center text-zinc-500 text-sm">
        <div className="flex items-center justify-center gap-2 mb-4">
          {/*<div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center font-bold text-white text-xs">M</div>
          <span className="font-bold text-white text-lg">MacDev</span>*/}
          <Link href="/" className="flex items-center gap-3 cursor-pointer text-xl font-bold tracking-tight">
            <img src="/images/logo1.png" className="h-[50px]" />
          </Link>
        </div>
        <p>© {new Date().getFullYear()} MacDev Studio. Building for the modern web.</p>
      </footer>

    </main>
  );
}