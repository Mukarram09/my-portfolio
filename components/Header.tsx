"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Home, Briefcase, Tag, Star, ArrowUpRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        variants={fadeIn} initial="initial" animate="animate"
        className="fixed top-0 w-full z-50 bg-[#030508]/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Mobile/Tablet: Hamburger Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-zinc-300 hover:text-white transition z-50"
          >
            <Menu className="w-7 h-7" />
          </button>

          {/* Left/Center: Logo */}
          <Link 
            href="/" 
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex items-center gap-3 cursor-pointer z-50"
          >
            <img src="/images/logo1.png" className="h-[50px]" />
          </Link>

          {/* Invisible placeholder to balance flex-between on mobile */}
          <div className="w-7 h-7 lg:hidden"></div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {[
              { name: "Home", icon: Home, href: "/" },
              { name: "Services", icon: Briefcase, href: "/services" },
              { name: "Projects", icon: Tag, href: "/projects" },
              { name: "About", icon: Star, href: "/about" },
            ].map((item) => (
              <Link key={item.name} href={item.href} className="flex items-center gap-2 hover:text-white transition group">
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-rose-500 transition-colors" />
              </Link>
            ))}
          </div>

          {/* Right: Socials + CTA Button (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-6">
            
            <div className="flex items-center gap-5">
              {/* X / Twitter */}
              <a href="https://x.com/mac_dev9" target="_blank" className="text-zinc-400 hover:text-white transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Telegram */}
              <a href="#" className="text-zinc-400 hover:text-[#229ED9] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              {/* WhatsApp */}
              <a href="#" className="text-zinc-400 hover:text-[#25D366] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.388 0 12.034c0 2.126.551 4.195 1.6 6.014L.203 23.454l5.545-1.455a12.012 12.012 0 0 0 6.283 1.761h.005c6.645 0 12.031-5.386 12.031-12.035 0-3.22-1.254-6.248-3.533-8.527C18.256 1.253 15.23 0 12.031 0zm0 19.78h-.003a9.97 9.97 0 0 1-5.083-1.388l-.364-.216-3.774.99.996-3.68-.237-.378A9.957 9.957 0 0 1 2.03 12.035c0-5.503 4.48-9.983 9.984-9.983 2.67 0 5.178 1.041 7.065 2.93 1.886 1.89 2.924 4.398 2.924 7.068 0 5.505-4.481 9.985-9.985 9.985zm5.474-7.481c-.3-.15-1.776-.877-2.052-.978-.276-.1-.477-.15-.678.15-.2.302-.777.978-.952 1.179-.176.201-.351.226-.652.075-1.343-.671-2.455-1.282-3.414-2.923-.204-.349.202-.323.498-.918.099-.201.05-.376-.025-.526-.075-.15-.678-1.632-.93-2.235-.246-.588-.495-.508-.678-.517-.175-.008-.376-.008-.577-.008-.2 0-.526.075-.801.376-.276.301-1.052 1.028-1.052 2.507 0 1.48 1.077 2.91 1.228 3.111.15.2 2.122 3.238 5.14 4.54 1.761.76 2.454.825 3.32.695.952-.143 2.877-1.177 3.279-2.316.401-1.14.401-2.118.276-2.319-.125-.2-.477-.301-.777-.451z"/></svg>
              </a>
            </div>

            <Link href="/contact">
              <button className="flex items-center gap-3 bg-gradient-to-r from-zinc-900 to-rose-950/40 border border-zinc-800 hover:border-rose-600 text-white pl-5 pr-1.5 py-1.5 rounded-full font-medium transition-all group shadow-lg shadow-rose-900/10">
                <span className="text-sm tracking-wide">Hire Me</span>
                <div className="bg-white text-black rounded-full p-2 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Slide-Out Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[75vw] sm:w-[50vw] bg-[#0a0a0a] border-r border-rose-900/20 z-[70] p-6 lg:hidden flex flex-col shadow-2xl shadow-black"
            >
              <div className="flex items-center justify-between mb-12 mt-2">
                <div className="flex items-center gap-2">
                  <img src="/images/logo1.png" className="h-[30px]" />
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-zinc-400 hover:text-white transition p-2 bg-white/5 rounded-full border border-white/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-6 text-lg font-medium text-zinc-300">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500 transition flex items-center gap-4 border-b border-white/5 pb-4"><Home className="w-5 h-5 text-zinc-500"/> Home</Link>
                <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500 transition flex items-center gap-4 border-b border-white/5 pb-4"><Home className="w-5 h-5 text-zinc-500"/>Services</Link>
                <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500 transition flex items-center gap-4 border-b border-white/5 pb-4"><Tag className="w-5 h-5 text-zinc-500"/> Projects</Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500 transition flex items-center gap-4 border-b border-white/5 pb-4"><Star className="w-5 h-5 text-zinc-500"/> About</Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-rose-500 transition flex items-center gap-4 pb-4"><Briefcase className="w-5 h-5 text-zinc-500"/> Contact</Link>
              </div>

              <div className="mt-auto pt-8 border-t border-rose-900/20 text-sm text-zinc-500">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full bg-rose-600 text-white font-bold py-3 rounded-xl hover:bg-rose-700 transition-colors mb-6">
                    Hire Me
                  </button>
                </Link>
                <p className="text-center">hello@macdev-studio.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}