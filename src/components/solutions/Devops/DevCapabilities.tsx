"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitBranch,
  Cloud,
  Shield,
  Activity,
  Server,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    id: "ci-cd",
    title: "Intelligent CI/CD Automation",
    description: "Automate your entire delivery pipeline with AI-powered orchestration and intelligent quality gates.",
    icon: GitBranch,
    features: ["Automated testing", "Smart quality gates", "Rollback automation", "Deployment insights"],
  },
  {
    id: "observability",
    title: "Real-Time Observability",
    description: "Gain deep insights into your applications with end-to-end tracing and predictive analytics.",
    icon: Activity,
    features: ["Distributed tracing", "Log aggregation", "Performance metrics", "Anomaly detection"],
  },
  {
    id: "security",
    title: "DevSecOps Integration",
    description: "Embed security into every stage of your pipeline with automated scanning and compliance checks.",
    icon: Shield,
    features: ["SAST & DAST integration", "SBOM generation", "Policy enforcement", "Compliance reporting"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure as Code",
    description: "Manage and provision cloud resources with declarative configurations and version control.",
    icon: Server,
    features: ["Terraform integration", "Cloud provisioning", "State management", "Drift detection"],
  },
  {
    id: "cloud",
    title: "Multi-Cloud Management",
    description: "Seamlessly manage deployments across AWS, Azure, GCP, and hybrid environments.",
    icon: Cloud,
    features: ["AWS, Azure, GCP", "Hybrid cloud", "Kubernetes management", "Auto-scaling"],
  },
  {
    id: "automation",
    title: "Workflow Automation",
    description: "Automate repetitive tasks and orchestrate complex workflows across your entire toolchain.",
    icon: Zap,
    features: ["Task orchestration", "Event-driven automation", "Custom workflows", "Integration hub"],
  },
];

export default function DevCapabilities() {
  const [selectedId, setSelectedId] = useState(capabilities[0].id);
  const selected = capabilities.find((c) => c.id === selectedId) || capabilities[0];

  return (
    <section className="relative w-full py-16 md:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-inter text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
              Capabilities
            </p>
            <h2 className="mt-4 font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Enterprise DevOps Capabilities
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              From CI/CD automation to observability and security — everything you need to build and scale.
            </p>
          </motion.div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left - Capability List */}
          <div className="lg:col-span-4 space-y-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              const isSelected = selectedId === cap.id;
              return (
                <motion.button
                  key={cap.id}
                  onClick={() => setSelectedId(cap.id)}
                  whileHover={{ x: 6 }}
                  className={`group relative w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                    isSelected
                      ? "bg-white dark:bg-slate-900 shadow-lg dark:shadow-none border border-violet-200 dark:border-violet-900/50"
                      : "bg-transparent border border-transparent hover:bg-white/50 dark:hover:bg-slate-900/50"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                      isSelected
                        ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30"
                        : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 group-hover:bg-slate-300 dark:group-hover:bg-slate-600"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-urbanist font-bold text-sm transition-colors ${
                        isSelected
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                      }`}
                    >
                      {cap.title}
                    </h4>
                    <p
                      className={`text-xs transition-colors ${
                        isSelected
                          ? "text-slate-500 dark:text-slate-400"
                          : "text-slate-500 dark:text-slate-500"
                      }`}
                    >
                      {cap.features.length} features
                    </p>
                  </div>
                  {isSelected && (
                    <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-8 rounded-l-full bg-gradient-to-b from-violet-600 to-fuchsia-600" />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right - Detail View */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg dark:shadow-none p-8"
              >
                {/* Decorative Gradient */}
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 blur-2xl" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20">
                      {(() => {
                        const Icon = selected.icon;
                        return <Icon size={28} strokeWidth={1.5} />;
                      })()}
                    </div>
                    <div>
                      <h3 className="font-urbanist text-2xl font-bold text-slate-900 dark:text-white">
                        {selected.title}
                      </h3>
                      <p className="mt-1 font-inter text-sm text-slate-600 dark:text-slate-400">
                        {selected.description}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    {selected.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                      >
                        <CheckCircle2 size={16} className="text-violet-600 dark:text-violet-400 shrink-0" />
                        <span className="font-inter text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8"
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-slate-900 transition-all hover:scale-105 hover:shadow-lg"
                    >
                      Explore {selected.title}
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}