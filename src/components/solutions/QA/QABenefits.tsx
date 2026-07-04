"use client";

import { motion, Variants } from "framer-motion";
import {
  Rocket,
  CheckCircle2,
  Shield,
  BarChart3,
  Clock,
  Users,
  GitBranch,
  Zap,
} from "lucide-react";

const benefits = [
  {
    id: "speed",
    icon: Rocket,
    stat: "2x",
    label: "Faster Release Cycles",
    description: "Automate test execution across environments.",
  },
  {
    id: "coverage",
    icon: CheckCircle2,
    stat: "95%",
    label: "Test Coverage",
    description: "AI-generated comprehensive test suites.",
  },
  {
    id: "defects",
    icon: Shield,
    stat: "70%",
    label: "Less Defects",
    description: "Predict issues before production.",
  },
  {
    id: "roi",
    icon: BarChart3,
    stat: "3x",
    label: "ROI",
    description: "Reduce QA costs while improving quality.",
  },
  {
    id: "efficiency",
    icon: Clock,
    stat: "40%",
    label: "Less Manual Effort",
    description: "Automate repetitive workflows.",
  },
  {
    id: "team",
    icon: Users,
    stat: "2x",
    label: "Team Productivity",
    description: "Empower QA engineers using AI.",
  },
//   {
//     id: "quality",
//     icon: GitBranch,
//     stat: "99.9%",
//     label: "Release Quality",
//     description: "Regression testing before deployment.",
//   },
//   {
//     id: "integrations",
//     icon: Zap,
//     stat: "50+",
//     label: "Integrations",
//     description: "GitHub, Jira, Jenkins and more.",
//   },
];

const RADIUS = 210;
const NODE_COUNT = benefits.length;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

export default function QABenefits() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500 py-16 md:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-violet-500/5 dark:bg-violet-500/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-fuchsia-500/4 dark:bg-fuchsia-500/6 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          {/* <p className="font-inter text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Business Value
          </p> */}
          <h2 className="mt-4 font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Benefits of AI-Powered Testing
          </h2>
          <p className="mt-4 font-inter text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real results from enterprise QA teams using AP2L's AI-powered testing platform.
          </p>
        </motion.div>

        {/* Desktop Orbit Layout */}
        <div className="hidden lg:block relative h-[700px] w-full">
          {/* SVG Connector Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 700 700"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#d946ef" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            {benefits.map((_, i) => {
              const angle = (i / NODE_COUNT) * 2 * Math.PI - Math.PI / 2;
              const x = 350 + RADIUS * Math.cos(angle);
              const y = 350 + RADIUS * Math.sin(angle);
              return (
                <motion.line
                  key={i}
                  x1="350"
                  y1="350"
                  x2={x}
                  y2={y}
                  stroke="url(#lineGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.8 }}
                />
              );
            })}
          </svg>

          {/* Center Element */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              {/* Rotating gradient ring */}
              <motion.div
                className="absolute -inset-4 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, #8b5cf6, #d946ef, #8b5cf6, transparent)",
                  opacity: 0.4,
                  borderRadius: "50%",
                }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-violet-500/20 dark:border-violet-400/20"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  borderStyle: "dashed",
                  borderWidth: "1px",
                }}
              />
              {/* Glow */}
              <div className="absolute -inset-6 rounded-full bg-violet-600/10 dark:bg-violet-500/10 blur-2xl" />
              {/* Center content */}
              <div className="relative w-44 h-44 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 shadow-2xl shadow-violet-500/10 flex flex-col items-center justify-center">
                <span className="font-urbanist text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  AP2L
                </span>
                <span className="mt-0.5 font-inter text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  AI Testing Platform
                </span>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Benefit Nodes */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="absolute inset-0"
          >
            {benefits.map((benefit, i) => {
              const angle = (i / NODE_COUNT) * 2 * Math.PI - Math.PI / 2;
              const x = 50 + (RADIUS / 700) * 100 * Math.cos(angle) + "%";
              const y = 50 + (RADIUS / 700) * 100 * Math.sin(angle) + "%";

              return (
                <motion.div
                  key={benefit.id}
                  variants={nodeVariants}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: y, left: x }}
                  whileHover={{
                    scale: 1.08,
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                >
                  <div className="group relative w-48 p-4 rounded-xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/40 dark:border-slate-700/40 shadow-sm hover:shadow-xl transition-shadow duration-300 hover:border-violet-300/50 dark:hover:border-violet-600/30 text-center">
                    {/* Hover glow */}
                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-violet-600/0 via-violet-600/0 to-fuchsia-600/0 group-hover:from-violet-600/10 group-hover:via-violet-600/5 group-hover:to-fuchsia-600/10 transition-all duration-500 blur-xl -z-10" />
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 dark:group-hover:bg-violet-500 group-hover:text-white transition-all duration-300"
                        whileHover={{ rotate: -8 }}
                      >
                        <benefit.icon size={18} strokeWidth={1.5} />
                      </motion.div>

                      {/* Stat */}
                      <div className="mt-2 font-urbanist text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        {benefit.stat}
                      </div>

                      {/* Label */}
                      <div className="font-urbanist text-xs font-bold text-slate-900 dark:text-white leading-tight">
                        {benefit.label}
                      </div>

                      {/* Description */}
                      <p className="mt-1 font-inter text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Tablet Layout - 2 Columns */}
        <div className="hidden md:block lg:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                variants={nodeVariants}
                whileHover={{ scale: 1.03 }}
                className="group p-5 rounded-xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/40 dark:border-slate-700/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-violet-300/50 dark:hover:border-violet-600/30 text-center"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 dark:group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                  <benefit.icon size={22} strokeWidth={1.5} />
                </div>
                <div className="mt-3 font-urbanist text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {benefit.stat}
                </div>
                <div className="font-urbanist font-bold text-sm text-slate-900 dark:text-white">
                  {benefit.label}
                </div>
                <p className="mt-1 font-inter text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Layout - Vertical Timeline */}
        <div className="md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4 max-w-sm mx-auto"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.id}
                variants={nodeVariants}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/40 dark:border-slate-700/40 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 dark:group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                  <benefit.icon size={20} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-urbanist font-bold text-sm text-slate-900 dark:text-white">
                      {benefit.label}
                    </span>
                    <span className="font-urbanist text-xs font-extrabold text-violet-600 dark:text-violet-400">
                      {benefit.stat}
                    </span>
                  </div>
                  <p className="font-inter text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Tagline */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 text-center"
        >
          <p className="font-inter text-sm text-slate-500 dark:text-slate-400">
            <span className="text-violet-600 dark:text-violet-400 font-semibold">
              {benefits.length} measurable benefits
            </span>{" "}
            — delivering tangible ROI for enterprise QA teams
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}