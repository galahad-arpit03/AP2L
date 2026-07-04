"use client";

import { motion, Variants } from "framer-motion";
import { 
  Code2, 
  GitBranch, 
  TestTube2, 
  Bug, 
  Shield, 
  Rocket,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    id: "plan",
    title: "Plan & Analyze",
    description: "AI analyzes your application and identifies test scenarios",
    icon: Code2,
  },
  {
    id: "generate",
    title: "Generate Tests",
    description: "Creates comprehensive test suites covering all layers",
    icon: TestTube2,
  },
  {
    id: "execute",
    title: "Execute & Monitor",
    description: "Parallel execution across browsers with real-time monitoring",
    icon: GitBranch,
  },
  {
    id: "analyze",
    title: "Analyze & Debug",
    description: "AI analytics identify failures and suggest fixes",
    icon: Bug,
  },
  {
    id: "secure",
    title: "Security & Compliance",
    description: "Automated scanning ensures enterprise security standards",
    icon: Shield,
  },
  {
    id: "deploy",
    title: "Deploy & Release",
    description: "Quality gates ensure only high-quality code reaches production",
    icon: Rocket,
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function QAWorkflow() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        
        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* <p className="font-inter text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
              How We Solve
            </p> */}
            <h2 className="mt-4 font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Streamlined Testing Workflow
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              From planning to deployment — AP2L automates every step of the testing lifecycle.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Workflow Steps */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Icon Wrapper */}
                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-violet-300 dark:border-violet-700 text-violet-400 dark:text-violet-600 transition-all duration-300 group-hover:border-violet-600 dark:group-hover:border-violet-400 group-hover:bg-violet-600 dark:group-hover:bg-violet-500 group-hover:text-white dark:group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-500/30">
                    <Icon size={26} strokeWidth={1.5} className="transition-colors duration-300" />
                  </div>

                  {/* Connector Line with gaps on both sides */}
{!isLast && (
  <div className="hidden xl:block absolute top-1/2 left-[calc(100%+20px)] -translate-y-1/2 w-28">
    <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-violet-300 via-violet-400 to-fuchsia-400 dark:from-violet-700 dark:via-violet-600 dark:to-fuchsia-600" />
  </div>
)}
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="font-urbanist text-sm font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-inter text-xs leading-relaxed text-slate-500 dark:text-slate-400 max-w-[160px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-violet-300 dark:border-violet-700 text-violet-400 dark:text-violet-600 hover:border-violet-600 dark:hover:border-violet-400 hover:bg-violet-600 dark:hover:bg-violet-500 hover:text-white dark:hover:text-white transition-all duration-300">
              <Rocket size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-urbanist font-bold text-slate-900 dark:text-white text-sm">
                Ready to transform your QA process?
              </p>
              <p className="font-inter text-sm text-slate-500 dark:text-slate-400">
                See how AP2L automates your testing workflow
              </p>
            </div>
          </div>
          <a
            href="/contact"
            className="group flex items-center gap-2 whitespace-nowrap rounded-full bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:scale-105 hover:shadow-violet-500/50"
          >
            Book a Demo
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}