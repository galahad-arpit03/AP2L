"use client";

import { motion, Variants } from "framer-motion";
import {
  AlertCircle,
  Clock,
  GitBranch,
  Shield,
  Server,
  Zap,
} from "lucide-react";

const challenges = [
  {
    id: "deployment-speed",
    title: "Slow Deployments",
    description: "Manual processes delay releases",
    icon: Clock,
    impact: "70% slower",
    severity: 85,
  },
  {
    id: "security-gaps",
    title: "Security Vulnerabilities",
    description: "Testing is an afterthought",
    icon: Shield,
    impact: "$4.45M breach",
    severity: 95,
  },
  {
    id: "infrastructure",
    title: "Infrastructure Sprawl",
    description: "Multi-cloud complexity",
    icon: Server,
    impact: "45% budget waste",
    severity: 70,
  },
  {
    id: "observability",
    title: "Limited Observability",
    description: "No real-time insights",
    icon: AlertCircle,
    impact: "70% unresolved",
    severity: 75,
  },
  {
    id: "configuration",
    title: "Configuration Drift",
    description: "Inconsistent environments",
    icon: GitBranch,
    impact: "60% incidents",
    severity: 65,
  },
  {
    id: "automation",
    title: "Automation Debt",
    description: "Legacy scripts overhead",
    icon: Zap,
    impact: "50% time lost",
    severity: 60,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

export default function DevChallenges() {
  return (
    <section className="relative w-full py-10 md:py-14 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 lg:px-8 z-10">
        {/* Header – compact */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
              The Problems
            </p>
            <h2 className="mt-1 font-urbanist text-2xl md:text-3xl font-medium tracking-tight text-slate-900 dark:text-white">
              What's Slowing Your DevOps?
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-inter text-sm text-slate-600 dark:text-slate-400 mt-2 md:mt-0"
          >
            6 critical challenges
          </motion.p>
        </div>

        {/* Horizontal Meter Rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={challenge.id}
                variants={itemVariants}
                className="group relative h-14 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 transition-all duration-300 hover:shadow-md"
              >
                {/* Severity Background Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${challenge.severity}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500/40 via-violet-500/30 to-fuchsia-500/40 dark:from-violet-400/30 dark:via-violet-400/20 dark:to-fuchsia-400/30"
                />

                {/* Content */}
                <div className="relative flex items-center h-full px-4 gap-3">
                  {/* Icon */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/80 dark:bg-slate-900/80 text-violet-600 dark:text-violet-400 transition-all duration-300 group-hover:bg-violet-600 dark:group-hover:bg-violet-500 group-hover:text-white">
                    <Icon size={15} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <span className="font-urbanist text-sm font-semibold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors whitespace-nowrap">
                    {challenge.title}
                  </span>

                  {/* Description */}
                  <span className="hidden sm:inline font-inter text-xs text-slate-600 dark:text-slate-400">
                    {challenge.description}
                  </span>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Impact */}
                  <span className="font-inter text-xs font-medium text-slate-700 dark:text-slate-300 bg-white/70 dark:bg-slate-900/70 px-3 py-1 rounded-full whitespace-nowrap">
                    {challenge.impact}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="font-inter text-sm text-slate-500 dark:text-slate-400">
            <span className="text-violet-600 dark:text-violet-400 font-semibold">6 critical challenges</span> — solved with AP2L's DevOps platform
          </p>
          <a
            href="#capabilities"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
          >
            See how we solve them →
          </a>
        </motion.div>
      </div>
    </section>
  );
}