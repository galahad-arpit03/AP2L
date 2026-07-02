"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  TerminalSquare, 
  ShieldAlert, 
  LifeBuoy,
  BadgeDollarSign
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    id: "qa-teams",
    title: "For QA Teams",
    description: "Accelerate your testing lifecycle, improve requirement coverage, and deploy with absolute confidence using AI-driven automation.",
    href: "/solutions/qa-teams",
    icon: CheckCircle2,
    imageLight: "/images/solutions/qa-teams-light.png",
    imageDark: "/images/solutions/qa-teams-dark.png",
    span: "md:col-span-3", // 2 items in top row of 6-col grid
  },
  {
    id: "devops",
    title: "For DevOps",
    description: "Seamlessly integrate security and observability directly into your CI/CD pipelines for unbreakable, high-velocity deployments.",
    href: "/solutions/devops",
    icon: TerminalSquare,
    imageLight: "/images/solutions/devops-light.png",
    imageDark: "/images/solutions/devops-dark.png",
    span: "md:col-span-3", // 2 items in top row of 6-col grid
  },
  {
    id: "security-compliance",
    title: "For Security",
    description: "Ensure complete regulatory readiness and proactive vulnerability mitigation across your ecosystem.",
    href: "/solutions/security-compliance",
    icon: ShieldAlert,
    imageLight: "/images/solutions/security-light.png",
    imageDark: "/images/solutions/security-dark.png",
    span: "md:col-span-2", // 3 items in bottom row of 6-col grid
  },
  {
    id: "it-support",
    title: "For IT Support",
    description: "Automate incident management, slash resolution times, and elevate service delivery with intelligent routing.",
    href: "/solutions/it-support",
    icon: LifeBuoy,
    imageLight: "/images/solutions/it-support-light.png",
    imageDark: "/images/solutions/it-support-dark.png",
    span: "md:col-span-2", // 3 items in bottom row of 6-col grid
  },
  {
    id: "fintech",
    title: "For FinTech",
    description: "Detect anomalies in real-time, enforce stringent AML compliance, and protect sensitive financial data.",
    href: "/solutions/fintech",
    icon: BadgeDollarSign,
    imageLight: "/images/solutions/fintech-light.png",
    imageDark: "/images/solutions/fintech-dark.png",
    span: "md:col-span-2", // 3 items in bottom row of 6-col grid
  },
];

export default function KeySolutions() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 xl:px-12 z-10">
        
        {/* Header section - Left Aligned, No Eyebrow */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl"
          >
            Built for High-Performance Teams
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-inter text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
          >
            Whether you&apos;re securing infrastructure or automating testing, our AI-driven platforms are engineered to solve your specific challenges.
          </motion.p>
        </div>

        {/* 2 on top, 3 on bottom layout (6-col grid on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative h-[360px] ${solution.span}`}
              >
                <Link
                  href={solution.href}
                  className="relative flex h-full flex-col overflow-hidden rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md dark:shadow-none transition-all duration-500 hover:shadow-lg dark:hover:shadow-slate-900/50 hover:-translate-y-1"
                >
                  {/* Top: Image Graphic */}
                  <div className="relative flex-1 bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800">
                    <img src={solution.imageLight} alt={solution.title} className="absolute inset-0 w-full h-full object-cover dark:hidden transition-transform duration-700 group-hover:scale-105" />
                    <img src={solution.imageDark} alt={solution.title} className="absolute inset-0 w-full h-full object-cover hidden dark:block transition-transform duration-700 group-hover:scale-105" />
                  </div>

                  {/* Bottom: Centered Content */}
                  <div className="flex h-[150px] flex-col items-center justify-center px-6 text-center bg-white dark:bg-slate-900">
                    <h3 className="mb-2 font-urbanist text-xl font-medium tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400 line-clamp-1">
                      {solution.title}
                    </h3>
                    <p className="font-inter text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm line-clamp-3">
                      {solution.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
