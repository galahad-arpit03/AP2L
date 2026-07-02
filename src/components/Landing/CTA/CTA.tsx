"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3 opacity-50" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 lg:px-8 z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 mb-8 backdrop-blur-sm">
            <Sparkles size={16} className="text-violet-400" />
            <span className="font-[family-name:var(--font-manrope)] text-[12px] font-bold uppercase tracking-widest text-violet-300">
              Ready to scale?
            </span>
          </div>
          
          <h2 className="font-urbanist text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8">
            Transform your infrastructure <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              starting today.
            </span>
          </h2>
          
          <p className="font-inter text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-12">
            Join hundreds of engineering teams using our AI-driven platforms to automate testing, secure their supply chain, and guarantee uptime.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link 
              href="/contact"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-white px-8 py-4 font-inter text-base font-bold text-slate-900 transition-all hover:bg-slate-100 hover:scale-105"
            >
              Request a Demo
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/products"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900/50 px-8 py-4 font-inter text-base font-bold text-white transition-all hover:bg-slate-800 hover:border-slate-600 backdrop-blur-sm"
            >
              Explore Products
            </Link>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
