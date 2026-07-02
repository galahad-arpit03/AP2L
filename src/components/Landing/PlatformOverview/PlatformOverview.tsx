"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Activity, 
  TestTube2, 
  Headset, 
  Search, 
  FileCheck2, 
  Layers,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const initialProducts = [
  {
    id: "shieldvue",
    title: "ShieldVUE",
    description: "End-to-End Software Supply Chain Security. Protect your infrastructure with automated SBOM management and continuous vulnerability scanning.",
    href: "/products/shieldvue",
    icon: ShieldCheck,
    tags: ["SBOM Management", "Vulnerability Scanning", "Zero Trust"],
  },
  {
    id: "netraa",
    title: "NETRAA AI-OPS",
    description: "Explainable AI for Intelligent Observability and rapid Root Cause Analysis.",
    href: "/products/netraa",
    icon: Activity,
    tags: ["Predictive Alerts", "Log Analytics"],
  },
  {
    id: "cliqtest",
    title: "cliQTest",
    description: "AI-Powered Test Automation Platform enabling zero-touch continuous testing.",
    href: "/products/cliqtest",
    icon: TestTube2,
    tags: ["No-Code Automation", "Cross-Browser"],
  },
  {
    id: "jupiter",
    title: "JUPITER",
    description: "Modern, AI-Powered IT Service Desk. Resolve tickets faster with intelligent routing and self-service capabilities.",
    href: "/products/jupiter",
    icon: Headset,
    tags: ["ITSM Automation", "SLA Tracking", "Smart Routing"],
  },
  {
    id: "finxplore",
    title: "FINXPLORE",
    description: "Real-time AI-Powered Risk & Fraud Detection for financial institutions.",
    href: "/products/finxplore",
    icon: Search,
    tags: ["AML Compliance", "Anomaly Detection"],
  },
  {
    id: "swikruti",
    title: "SWIKRUTI",
    description: "Consent Management & DPDPA Compliance platform for enterprise privacy.",
    href: "/products/swikruti",
    icon: FileCheck2,
    tags: ["Data Privacy", "DPDPA Ready"],
  },
  {
    id: "saransh",
    title: "SARANSH",
    description: "AI-Enabled Service Virtualization. Isolate subsystems and simulate behaviors.",
    href: "/products/saransh",
    icon: Layers,
    tags: ["API Mocking", "Stateful Sim"],
  },
];

export default function PlatformOverview() {
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    const timer = setInterval(() => {
      setProducts((prev) => {
        const next = [...prev];
        const first = next.shift();
        if (first) next.push(first);
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const activeProduct = products[0];
  const visibleList = products.slice(1, 5); // Show 4 items in the list

  return (
    <section className="relative w-full py-24 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        
        {/* Header section */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Latest Platforms
            </h2>
            <p className="mt-4 font-inter text-lg text-slate-600 dark:text-slate-400">
              Explore our interconnected suite of high-performance AI solutions.
            </p>
          </div>
          
          {/* <Link 
            href="/products" 
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-900/10 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 font-[family-name:var(--font-manrope)] text-[12px] font-bold uppercase tracking-widest text-slate-900 dark:text-white transition-all hover:scale-105 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Explore all platforms
            <ArrowRight size={16} />
          </Link> */}
        </div>

        {/* Dynamic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Active Large Card */}
          <div className="lg:col-span-7 h-[480px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, x: -20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "anticipate" }}
                className="absolute inset-0"
              >
                <Link
                  href={activeProduct.href}
                  className="group relative flex h-full w-full flex-col overflow-hidden rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md dark:shadow-none transition-all hover:shadow-lg hover:-translate-y-1 dark:hover:shadow-slate-900/50 cursor-pointer"
                >
                  {/* Top: Image Placeholder */}
                  <div className="relative h-2/3 w-full bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center overflow-hidden">
                    {/* Pulsing background glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10" />
                    
                    <activeProduct.icon size={100} strokeWidth={1} className="text-slate-300 dark:text-slate-600 transition-transform duration-700 group-hover:scale-110 group-hover:text-violet-500 relative z-10" />
                  </div>
                  
                  {/* Bottom: Content */}
                  <div className="flex h-1/3 flex-col justify-center p-6 md:p-8 bg-white dark:bg-slate-900 relative z-20">
                    <div className="mb-3 flex items-center gap-3">
                       <p className="font-[family-name:var(--font-manrope)] text-[12px] font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                        {activeProduct.tags[0]}
                      </p>
                      <span className="text-slate-300 dark:text-slate-700">•</span>
                      <p className="font-inter text-[13px] text-slate-500 dark:text-slate-400">
                        Featured Platform
                      </p>
                    </div>
                    
                    <h3 className="mb-2 font-urbanist text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">
                      {activeProduct.title}
                    </h3>
                    <p className="font-inter text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
                      {activeProduct.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: List of 4 visible cards */}
          <div className="lg:col-span-5 flex flex-col gap-3 h-[480px]">
            <AnimatePresence mode="popLayout">
              {visibleList.map((product) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -30 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 150, damping: 20 }}
                    className="flex-1"
                  >
                    <Link
                      href={product.href}
                      className="group relative flex h-full items-center gap-4 overflow-hidden rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all cursor-pointer hover:shadow-md p-3"
                    >
                      {/* Left side Image Placeholder */}
                      <div className="flex h-[80px] w-[120px] shrink-0 items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800/80 text-slate-300 dark:text-slate-600 transition-colors duration-500 group-hover:bg-violet-50 dark:group-hover:bg-violet-900/20 group-hover:text-violet-500 overflow-hidden relative">
                        <Icon size={36} strokeWidth={1} className="transition-transform duration-700 group-hover:scale-110 relative z-10" />
                      </div>
                      
                      {/* Right side Content */}
                      <div className="flex-1 py-1">
                        <p className="mb-1 font-[family-name:var(--font-manrope)] text-[10px] font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                          {product.tags[0]}
                        </p>
                        <h4 className="mb-1 font-urbanist text-lg md:text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400 line-clamp-1">
                          {product.title}
                        </h4>
                        <p className="font-inter text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
