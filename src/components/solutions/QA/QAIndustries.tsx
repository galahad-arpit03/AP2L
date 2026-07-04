"use client";

import { motion, Variants } from "framer-motion";
import {
  Building2,
  Wallet,
  Stethoscope,
  ShoppingCart,
  Globe2,
  Cpu,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const industries = [
  {
    id: "fintech",
    name: "FinTech & Banking",
    description: "Ensure compliance, security, and performance for financial applications.",
    icon: Wallet,
    stats: "99.99% uptime",
    wide: true,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "HIPAA‑compliant testing for critical healthcare applications.",
    icon: Stethoscope,
    stats: "100% compliance",
    wide: false,
  },
  {
    id: "ecommerce",
    name: "E‑commerce & Retail",
    description: "Handle peak loads with automated performance testing.",
    icon: ShoppingCart,
    stats: "10M+ transactions",
    wide: false,
  },
  {
    id: "enterprise",
    name: "Enterprise Software",
    description: "Complex enterprise application testing at scale.",
    icon: Building2,
    stats: "95% coverage",
    wide: true,
  },
  {
    id: "tech",
    name: "SaaS & Technology",
    description: "Continuous testing for rapid release cycles.",
    icon: Cpu,
    stats: "50+ releases/mo",
    wide: false,
  },
  {
    id: "global",
    name: "Global Enterprises",
    description: "Distributed testing for multi‑region deployments.",
    icon: Globe2,
    stats: "Global scale",
    wide: false,
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function QAIndustries() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background – only theme colors */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/10 dark:bg-violet-500/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/10 dark:bg-fuchsia-500/20 rounded-full blur-[130px] translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          {/* <p className="font-inter text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Industries
          </p> */}
          <h2 className="mt-4 font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Trusted Across Industries
          </h2>
          <p className="mt-4 font-inter text-lg text-slate-600 dark:text-slate-400">
            From FinTech to Healthcare, organizations worldwide rely on AP2L for quality assurance.
          </p>
        </motion.div>

        {/* Desktop Bento Grid – explicit layout */}
        <div className="hidden lg:grid grid-cols-3 gap-4 auto-rows-min">
          {/* Row 1: FinTech (wide) + Healthcare */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-2 row-span-1 group p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 dark:hover:border-violet-600"
          >
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105">
                <Wallet size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-urbanist text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                FinTech & Banking
              </h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Ensure compliance, security, and performance for financial applications.
              </p>
              <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                <TrendingUp size={14} className="text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  99.99% uptime
                </span>
              </div>
              <div className="mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-300 group-hover:w-full" />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-1 row-span-1 group p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 dark:hover:border-violet-600"
          >
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105">
                <Stethoscope size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-urbanist text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Healthcare
              </h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                HIPAA‑compliant testing for critical healthcare applications.
              </p>
              <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                <TrendingUp size={14} className="text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  100% compliance
                </span>
              </div>
              <div className="mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-300 group-hover:w-full" />
            </div>
          </motion.div>

          {/* Row 2: E-commerce + Enterprise (wide) */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-1 row-span-1 group p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 dark:hover:border-violet-600"
          >
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105">
                <ShoppingCart size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-urbanist text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                E‑commerce & Retail
              </h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Handle peak loads with automated performance testing.
              </p>
              <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                <TrendingUp size={14} className="text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  10M+ transactions
                </span>
              </div>
              <div className="mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-300 group-hover:w-full" />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-2 row-span-1 group p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 dark:hover:border-violet-600"
          >
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105">
                <Building2 size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-urbanist text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Enterprise Software
              </h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Complex enterprise application testing at scale.
              </p>
              <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                <TrendingUp size={14} className="text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  95% coverage
                </span>
              </div>
              <div className="mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-300 group-hover:w-full" />
            </div>
          </motion.div>

          {/* Row 3: SaaS + Global */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-1 row-span-1 group p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 dark:hover:border-violet-600"
          >
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105">
                <Cpu size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-urbanist text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                SaaS & Technology
              </h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Continuous testing for rapid release cycles.
              </p>
              <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                <TrendingUp size={14} className="text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  50+ releases/mo
                </span>
              </div>
              <div className="mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-300 group-hover:w-full" />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-1 row-span-1 group p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 dark:hover:border-violet-600"
          >
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105">
                <Globe2 size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-urbanist text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Global Enterprises
              </h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Distributed testing for multi‑region deployments.
              </p>
              <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                <TrendingUp size={14} className="text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Global scale
                </span>
              </div>
              <div className="mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-300 group-hover:w-full" />
            </div>
          </motion.div>
        </div>

        {/* Tablet & Mobile – 2 columns then 1 */}
        <div className="lg:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.id}
                  variants={itemVariants}
                  className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 dark:hover:border-violet-600"
                >
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-urbanist text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="mt-2 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {industry.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                      <TrendingUp size={14} className="text-violet-600 dark:text-violet-400" />
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        {industry.stats}
                      </span>
                    </div>
                    <div className="mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-300 group-hover:w-full" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Trust Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-violet-600 dark:text-violet-400" size={24} />
            <span className="font-inter text-sm text-slate-600 dark:text-slate-400">
              500+ Enterprise Clients
            </span>
          </div>
          <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-violet-600 dark:text-violet-400" size={24} />
            <span className="font-inter text-sm text-slate-600 dark:text-slate-400">
              100M+ Tests Executed
            </span>
          </div>
          <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-violet-600 dark:text-violet-400" size={24} />
            <span className="font-inter text-sm text-slate-600 dark:text-slate-400">
              50+ Countries
            </span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}