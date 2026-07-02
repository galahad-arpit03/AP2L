"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const solutions = [
  {
    id: "qa-teams",
    shortName: "QA",
    title: "For QA Teams",
    subtitle: "AI-driven Test Automation",
    description: "Accelerate your testing lifecycle, improve requirement coverage, and deploy with absolute confidence using AI-driven automation. Our comprehensive testing suite leverages machine learning to automatically generate edge-case scenarios, minimizing manual intervention while guaranteeing flawless production releases.",
    href: "/solutions/qa-teams",
    imageLight: "/images/solutions/qa-teams-light.png",
    imageDark: "/images/solutions/qa-teams-dark.png",
  },
  {
    id: "devops",
    shortName: "DEVOPS",
    title: "For DevOps",
    subtitle: "CI/CD Integration & Observability",
    description: "Seamlessly integrate security and observability directly into your CI/CD pipelines for unbreakable, high-velocity deployments. Gain deep, real-time insights into your application performance, identify bottlenecks instantly, and orchestrate automated rollbacks when deployment thresholds are breached.",
    href: "/solutions/devops",
    imageLight: "/images/solutions/devops-light.png",
    imageDark: "/images/solutions/devops-dark.png",
  },
  {
    id: "security-compliance",
    shortName: "SEC",
    title: "For Security",
    subtitle: "Vulnerability & Compliance Management",
    description: "Ensure complete regulatory readiness and proactive vulnerability mitigation across your ecosystem. Our zero-trust architecture continuously scans your software supply chain, generates comprehensive SBOMs, and automatically enforces security policies across all your distributed environments.",
    href: "/solutions/security-compliance",
    imageLight: "/images/solutions/security-light.png",
    imageDark: "/images/solutions/security-dark.png",
  },
  {
    id: "it-support",
    shortName: "ITSM",
    title: "For IT Support",
    subtitle: "Intelligent Incident Management",
    description: "Automate incident management, slash resolution times, and elevate service delivery with intelligent routing. Empower your IT personnel with AI-assisted root cause analysis and predictive maintenance alerts to solve critical infrastructure issues before they impact your end-users.",
    href: "/solutions/it-support",
    imageLight: "/images/solutions/it-support-light.png",
    imageDark: "/images/solutions/it-support-dark.png",
  },
  {
    id: "fintech",
    shortName: "FIN",
    title: "For FinTech",
    subtitle: "Risk & Fraud Detection",
    description: "Detect anomalies in real-time, enforce stringent AML compliance, and protect sensitive financial data. Our advanced risk-scoring engines evaluate millions of transactions per second to neutralize fraudulent activities while ensuring a frictionless experience for your legitimate customers.",
    href: "/solutions/fintech",
    imageLight: "/images/solutions/fintech-light.png",
    imageDark: "/images/solutions/fintech-dark.png",
  },
];

export default function KeySolutions() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);

  return (
    <section className="relative w-full py-16 md:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 xl:px-12 z-10">
        
        {/* Header section - Left Aligned, No Eyebrow */}
        <div className="mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl text-left"
          >
            Built for High-Performance Teams
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-inter text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed text-left"
          >
            Whether you&apos;re securing infrastructure or automating testing, our AI-driven platforms are engineered to solve your specific challenges.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[700px] gap-4">
          {solutions.map((solution) => {
            const isActive = activeTab === solution.id;
            
            return (
              <motion.div
                key={solution.id}
                layout
                onClick={() => setActiveTab(solution.id)}
                className={`relative flex flex-col lg:flex-row overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 transition-colors duration-300 cursor-pointer ${
                  isActive 
                    ? "bg-white dark:bg-slate-900 shadow-md dark:shadow-none" 
                    : "bg-slate-50 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-900/60"
                }`}
                animate={{ 
                  flex: isActive ? (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 1 : "none") : "none",
                  width: typeof window !== 'undefined' && window.innerWidth >= 1024 ? (isActive ? "100%" : "60px") : "100%",
                  height: isActive ? "auto" : (typeof window !== 'undefined' && window.innerWidth < 1024 ? "60px" : "100%")
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex lg:flex-col items-center justify-center gap-6 p-4 lg:py-8 lg:px-4 lg:w-[80px] shrink-0 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900/30">
                  <span 
                    className="hidden lg:block font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap text-2xl rotate-180"
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    {solution.shortName}
                  </span>
                  <span 
                    className="hidden lg:block text-slate-500 uppercase tracking-widest text-[11px] font-semibold rotate-180 whitespace-nowrap" 
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    {solution.title}
                  </span>
                  {/* Mobile title */}
                  <span className="lg:hidden font-bold text-slate-800 dark:text-slate-200 mr-2 text-xl">
                    {solution.shortName}
                  </span>
                  <span className="lg:hidden text-slate-500 uppercase tracking-widest text-xs font-semibold">
                    {solution.title}
                  </span>
                </div>

                {/* Expanded Content Area */}
                <div 
                  className={`flex-1 overflow-hidden transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 lg:opacity-100"
                  }`}
                >
                  <div className="w-full lg:min-w-[500px] h-full p-6 lg:p-10 flex flex-col">
                    <h3 className="text-3xl font-urbanist font-semibold text-slate-900 dark:text-white">
                      {solution.title}
                    </h3>
                    <p className="text-sm font-inter text-slate-500 dark:text-slate-400 mt-2">
                      AP2L Innovation Lab | Global Access
                    </p>
                    
                    <div className="mt-6 relative w-full flex-1 min-h-[160px] rounded-md overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <Image src={solution.imageLight} alt={solution.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover dark:hidden" />
                      <Image src={solution.imageDark} alt={solution.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover hidden dark:block" />
                    </div>
                    
                    <p className="mt-6 font-inter text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
                      {solution.description}
                    </p>
                    
                    <div className="mt-6">
                      <Link 
                        href={solution.href} 
                        className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      >
                        READ MORE <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
