"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { 
  ArrowLeft, 
  ExternalLink, 
  // Github, 
  Layers 
} from "lucide-react";

// --- ANIMATION VARIANTS ---
const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const slideUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  // Get unique categories for the filter buttons
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-rose-600/30 font-sans pb-32">
      
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto p-6 py-8 pt-32 flex justify-between items-center">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <span className="text-zinc-600 font-mono text-xs tracking-widest uppercase">Portfolio v2.0</span>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-6 pt-12 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            Selected <br/><span className="text-rose-600">Works.</span>
          </h1>
          <p className="max-w-2xl text-xl text-zinc-400 leading-relaxed">
            A curated collection of digital products, platforms, and experiments architected over the last 9 years. Focused on performance and user-centric design.
          </p>
        </motion.div>
      </header>

      {/* Filter System */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-wrap gap-4 border-b border-zinc-900 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                ? "bg-rose-600 text-white" 
                : "bg-zinc-900 text-zinc-500 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden hover:border-rose-600/30 transition-colors"
              >
                {/* Mock Image / Background */}
                <div className="aspect-[16/9] bg-zinc-900 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-rose-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Layers className="w-16 h-16 text-zinc-800 group-hover:text-rose-600/20 transition-colors group-hover:scale-110 transition-transform duration-500" />
                   </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-rose-600 font-mono text-xs uppercase tracking-widest mb-2">
                        {project.type}
                      </p>
                      <h3 className="text-2xl font-bold group-hover:text-rose-500 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-3">
                      <a href={project.link} className="p-2 bg-zinc-900 rounded-full hover:bg-rose-600 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-zinc-500 mb-8 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-zinc-900 text-zinc-400 rounded-md border border-zinc-800 uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 text-center">
        <motion.div variants={slideUp} initial="initial" whileInView="animate">
          <h2 className="text-4xl font-bold mb-6">Have a specific project in mind?</h2>
          <Link 
            href="/contact" 
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105"
          >
            Let's Talk Shop
          </Link>
        </motion.div>
      </section>

    </main>
  );
}