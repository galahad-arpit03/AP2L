"use client";

import { motion, Variants } from "framer-motion";
import {
  GitBranch,
  Cloud,
  Server,
  Shield,
  Database,
  Code2,
  Terminal,
  Layers,
  Activity
} from "lucide-react";

const technologies = [
  {
    id: "cicd",
    name: "CI/CD Tools",
    icon: GitBranch,
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "Argo CD", "CircleCI"],
  },
  {
    id: "cloud",
    name: "Cloud Platforms",
    icon: Cloud,
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Helm"],
  },
  {
    id: "iac",
    name: "Infrastructure as Code",
    icon: Server,
    items: ["Terraform", "Pulumi", "CloudFormation", "Ansible", "Chef"],
  },
  {
    id: "security",
    name: "Security Tools",
    icon: Shield,
    items: ["Snyk", "Trivy", "Aqua", "Checkov", "SonarQube"],
  },
  {
    id: "database",
    name: "Databases & Cache",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    id: "monitoring",
    name: "Monitoring & Observability",
    icon: Activity,
    items: ["Prometheus", "Grafana", "Datadog", "New Relic", "Splunk"],
  },
  {
    id: "programming",
    name: "Programming Languages",
    icon: Code2,
    items: ["Go", "Python", "Java", "Rust", "Node.js", "TypeScript"],
  },
  {
    id: "orchestration",
    name: "Orchestration & Scheduling",
    icon: Layers,
    items: ["Kubernetes", "Docker Swarm", "Nomad", "Mesos", "ECS"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export default function DevTechnologies() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[130px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header */}
        <div className="mb-16 max-w-3xl text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-inter text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
              Technologies
            </p>
            <h2 className="mt-4 font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Compatible with Your Stack
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              AP2L integrates with the tools you already use. No migration required.
            </p>
          </motion.div>
        </div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 dark:hover:border-violet-600 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-fuchsia-500/0 group-hover:from-violet-500/5 group-hover:via-violet-500/5 group-hover:to-fuchsia-500/5 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-violet-500/20">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <h3 className="mb-2 font-urbanist font-bold text-base text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {tech.name}
                  </h3>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-1.5"
                  >
                    {tech.items.map((item) => (
                      <motion.span
                        key={item}
                        variants={tagVariants}
                        className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors group-hover:bg-violet-50 dark:group-hover:bg-violet-900/20"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="mt-4 h-0.5 w-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-300 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Integration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl border border-violet-200 dark:border-violet-800/50 bg-violet-50/50 dark:bg-violet-900/20 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">
              <Terminal size={20} />
            </div>
            <div>
              <p className="font-urbanist font-bold text-slate-900 dark:text-white">
                Need a specific integration?
              </p>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400">
                We support custom integrations for your tech stack
              </p>
            </div>
          </div>
          <a
            href="/contact"
            className="whitespace-nowrap rounded-full bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:scale-105 hover:shadow-violet-500/50"
          >
            Request Integration
          </a>
        </motion.div>
      </div>
    </section>
  );
}