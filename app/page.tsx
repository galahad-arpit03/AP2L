"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Moon, Sun, X } from "lucide-react";

import Hero from "@/src/components/Landing/Hero/Hero";
import TrustedPartners from "@/src/components/Landing/TrustedPartners/TrustedPartners";
import PlatformOverview from "@/src/components/Landing/PlatformOverview/PlatformOverview";
import KeySolutions from "@/src/components/Landing/KeySolutions/KeySolutions";
import CoreFeatures from "@/src/components/Landing/CoreFeatures/CoreFeatures";
import ROIMetrics from "@/src/components/Landing/ROIMetrics/ROIMetrics";
import Testimonials from "@/src/components/Landing/Testimonials/Testimonials";
import CTA from "@/src/components/common/CTA/CTA";

import { useThemeConfig } from "@/src/context/ThemeConfigContext";

const COMPONENTS = [
  { id: "hero", label: "Hero Section" },
  { id: "partners", label: "Trusted Partners" },
  { id: "platform", label: "Platform Overview" },
  { id: "solutions", label: "Key Solutions" },
  { id: "features", label: "Core Features" },
  { id: "roi", label: "ROI Metrics" },
  { id: "testimonials", label: "Testimonials" },
  { id: "cta", label: "Call to Action" },
];

export default function Home() {
  const { componentThemes, setComponentTheme, isPanelOpen, setIsPanelOpen } = useThemeConfig();

  const toggleTheme = (id: string, theme: "light" | "dark" | "global") => {
    setComponentTheme(id, theme);
  };

  // Helper to wrap a component and force its theme using Tailwind's .dark class structure
  const renderWithTheme = (id: string, Component: React.ReactNode) => {
    const theme = componentThemes[id] || "global";
    
    if (theme === "global") {
      return Component;
    }
    
    if (theme === "dark") {
      // Force dark mode context
      return (
        <div className="dark">
          {Component}
        </div>
      );
    }
    
    if (theme === "light") {
      // Force light mode context using our updated globals.css selector
      return (
        <div className="light">
           {Component}
        </div>
      );
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-50 min-h-screen flex flex-col transition-colors duration-500">
      
      {/* Floating Theme Configurator */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] flex items-center">
        <AnimatePresence>
          {isPanelOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              className="mr-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl p-5 w-80 max-h-[85vh] overflow-y-auto"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-urbanist text-lg font-bold text-slate-900 dark:text-white">Theme Builder</h3>
                  <p className="text-xs text-slate-500 mt-1">Force independent component themes</p>
                </div>
                <button 
                  onClick={() => setIsPanelOpen(false)}
                  className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
                >
                  <X size={16} />
                </button>
              </div>
              
              <div className="flex flex-col gap-3">
                {COMPONENTS.map((comp) => {
                  const currentTheme = componentThemes[comp.id] || "global";
                  
                  return (
                    <div key={comp.id} className="flex items-center justify-between group">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">
                        {comp.label}
                      </span>
                      <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1 gap-1">
                        <button 
                          onClick={() => toggleTheme(comp.id, "light")}
                          className={`px-2 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all ${currentTheme === 'light' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-700'}`}
                        >
                          L
                        </button>
                        <button 
                          onClick={() => toggleTheme(comp.id, "global")}
                          className={`px-2 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all ${currentTheme === 'global' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-400 hover:text-slate-700'}`}
                        >
                          Auto
                        </button>
                        <button 
                          onClick={() => toggleTheme(comp.id, "dark")}
                          className={`px-2 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all ${currentTheme === 'dark' ? 'bg-slate-900 shadow-sm text-white' : 'text-slate-400 hover:text-slate-700'}`}
                        >
                          D
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsPanelOpen(!isPanelOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-[0_0_40px_rgba(109,40,217,0.4)] hover:bg-violet-700 transition-all hover:scale-105 active:scale-95"
          title="Component Theme Configurator"
        >
          <Settings size={24} className={isPanelOpen ? "animate-[spin_4s_linear_infinite]" : ""} />
        </button>
      </div>

      <main className="flex-1 w-full flex flex-col relative z-0">
        {renderWithTheme("hero", 
          <div className="lg:p-2">
            <Hero />
          </div>
        )}
        
        {renderWithTheme("partners", <TrustedPartners />)}
        {renderWithTheme("platform", <PlatformOverview />)}
        {renderWithTheme("solutions", <KeySolutions />)}
        {renderWithTheme("features", <CoreFeatures />)}
        {renderWithTheme("roi", <ROIMetrics />)}
        {renderWithTheme("testimonials", <Testimonials />)}
        
        {renderWithTheme("cta", 
          <CTA 
            headline="Transform your infrastructure starting today."
            description="Join hundreds of engineering teams using our AI-driven platforms to automate testing, secure their supply chain, and guarantee uptime."
          />
        )}
      </main>
    </div>
  );
}