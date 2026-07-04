"use client";

import { motion, Variants } from "framer-motion";
import { 
  AlertCircle, 
  Clock, 
  GitBranch, 
  TrendingUp, 
  Users, 
  Shield,
  XCircle
} from "lucide-react";

const challenges = [
  {
    id: "test-coverage",
    title: "Inadequate Test Coverage",
    description: "Critical bugs slip through to production",
    icon: AlertCircle,
    impact: "40% defects reach production"
  },
  {
    id: "slow-cycles",
    title: "Slow Testing Cycles",
    description: "Bottlenecks delay releases by days",
    icon: Clock,
    impact: "70% longer release cycles"
  },
  {
    id: "maintenance",
    title: "Test Maintenance Overhead",
    description: "Constant updates waste QA time",
    icon: GitBranch,
    impact: "40% of QA time lost"
  },
  {
    id: "skill-gap",
    title: "Skill Gaps in Testing",
    description: "Finding skilled QA engineers is hard",
    icon: Users,
    impact: "6+ months to onboard"
  },
  {
    id: "security",
    title: "Security Vulnerabilities",
    description: "Security testing is often an afterthought",
    icon: Shield,
    impact: "$4.45M breach cost"
  },
  {
    id: "performance",
    title: "Performance Bottlenecks",
    description: "Load testing skipped or done late",
    icon: TrendingUp,
    impact: "60% outages due to perf"
  }
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
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export default function QAChallenges() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        
        {/* Header - Compact */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* <p className="font-inter text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
              The Problems
            </p> */}
            <h2 className="mt-2 font-urbanist text-3xl md:text-4xl font-medium tracking-tight text-slate-900 dark:text-white">
              What's Holding You Back?
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-inter text-slate-600 dark:text-slate-400 mt-2 md:mt-0 max-w-sm text-right"
          >
            Modern QA teams face these critical challenges
          </motion.p>
        </div>

        {/* Challenges Grid - Compact 3x2 layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={challenge.id}
                variants={itemVariants}
                className="group relative flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icon with subtle background */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/30">
                  <Icon size={18} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-urbanist text-sm font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {challenge.title}
                  </h3>
                  
                  <p className="font-inter text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-0.5">
                    {challenge.description}
                  </p>

                  {/* Impact Tag */}
                  <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[10px] font-medium">
                    <XCircle size={10} />
                    {challenge.impact}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom indicator */}
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="font-inter text-sm text-slate-500 dark:text-slate-400">
            <span className="text-violet-600 dark:text-violet-400 font-semibold">6 critical challenges</span> — all solved with AP2L's AI-powered testing platform
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}