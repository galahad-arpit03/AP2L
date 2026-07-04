"use client";

import { motion, Variants } from "framer-motion";
import {
  Code2,
  GitBranch,
  Shield,
  Activity,
  Rocket,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    id: "plan",
    title: "Plan & Code",
    description: "Version control and collaboration with automated code reviews.",
    icon: Code2,
  },
  {
    id: "build",
    title: "Build & Test",
    description: "Automated builds with integrated testing and quality gates.",
    icon: GitBranch,
  },
  {
    id: "secure",
    title: "Security Scan",
    description: "Shift-left security scanning for vulnerabilities and compliance.",
    icon: Shield,
  },
  {
    id: "deploy",
    title: "Deploy & Monitor",
    description: "Automated deployment with real-time observability and alerts.",
    icon: Activity,
  },
  {
    id: "release",
    title: "Release & Scale",
    description: "Seamless releases with auto-scaling and performance optimization.",
    icon: Rocket,
  },
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

export default function DevWorkflow() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-inter text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
              How We Solve
            </p>
            <h2 className="mt-4 font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
              End-to-End DevOps Workflow
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              From code commit to production — AP2L automates and secures every step.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Workflow Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative"
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
                {/* Connector Line */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-[52px] left-[calc(50%+28px)] w-[calc(100%-56px)] h-[2px]">
                    <div className="w-full h-full bg-gradient-to-r from-violet-300 via-violet-400 to-fuchsia-400 dark:from-violet-700 dark:via-violet-600 dark:to-fuchsia-600" />
                  </div>
                )}

                {/* Step Number */}
                <div className="mb-3 text-xs font-bold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 px-3 py-1 rounded-full">
                  Step {index + 1}
                </div>

                {/* Icon */}
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-violet-300 dark:border-violet-700 text-violet-400 dark:text-violet-600 transition-all duration-300 group-hover:border-violet-600 dark:group-hover:border-violet-400 group-hover:bg-violet-600 dark:group-hover:bg-violet-500 group-hover:text-white dark:group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-500/30">
                  <Icon size={26} strokeWidth={1.5} className="transition-colors duration-300" />
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
        <motion.div
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
                Ready to transform your DevOps pipeline?
              </p>
              <p className="font-inter text-sm text-slate-500 dark:text-slate-400">
                See how AP2L automates your entire delivery lifecycle
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
        </motion.div>
      </div>
    </section>
  );
}