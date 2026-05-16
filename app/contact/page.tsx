"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  // Github, 
  // Linkedin, 
  // Twitter 
} from "lucide-react";

// --- ANIMATION VARIANTS ---
const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const slideUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-rose-600/30 font-sans pb-32">
      
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto p-6 py-8 pt-32">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </nav>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-6 pt-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Column: Text & Info */}
        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-12">
          
          <motion.div variants={slideUp}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Let's build <br/>
              <span className="text-zinc-500">something great.</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-md">
              I'm currently available for freelance projects, open source collaboration, and full-time frontend engineering roles.
            </p>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={slideUp} className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="p-4 bg-zinc-900 rounded-xl group-hover:bg-rose-600/10 group-hover:text-rose-600 transition-colors">
                <Mail className="w-6 h-6 text-zinc-400 group-hover:text-rose-600 transition-colors" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-medium">Email</p>
                <p className="text-lg font-semibold text-zinc-200">hello@macdev-studio.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 bg-zinc-900 rounded-xl">
                <MapPin className="w-6 h-6 text-zinc-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-medium">Location</p>
                <p className="text-lg font-semibold text-zinc-200">Available Worldwide (Remote)</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 bg-zinc-900 rounded-xl">
                <Clock className="w-6 h-6 text-zinc-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-medium">Working Hours</p>
                <p className="text-lg font-semibold text-zinc-200">9:00 AM — 6:00 PM (EST)</p>
              </div>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div variants={slideUp} className="pt-8 border-t border-zinc-900">
            <p className="text-sm text-zinc-500 font-medium mb-4">Also find me on</p>
            {/*<div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-zinc-900 rounded-lg hover:bg-rose-600/10 hover:text-rose-600 transition-colors text-zinc-400">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>*/}
          </motion.div>

        </motion.div>

        {/* Right Column: Contact Form UI */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }}
          className="bg-zinc-950 border border-zinc-800/50 p-8 md:p-12 rounded-3xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">First Name</label>
                <input 
                  type="text" 
                  placeholder="John" 
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-all placeholder:text-zinc-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe" 
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-all placeholder:text-zinc-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-all placeholder:text-zinc-600"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Message</label>
              <textarea 
                rows={5}
                placeholder="Tell me about your project..." 
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-all placeholder:text-zinc-600 resize-none"
              ></textarea>
            </div>

            <button 
              type="button" 
              className="w-full flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 rounded-xl transition-colors group mt-4"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            
          </form>
        </motion.div>

      </div>
    </main>
  );
}