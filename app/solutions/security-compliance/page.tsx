"use client";

import SecHero from "@/src/components/solutions/security/SecHero";
import CTA from "@/src/components/common/CTA/CTA";
import ThemeBuilder from "@/src/components/common/ThemeBuilder/ThemeBuilder";
import { useThemeConfig } from "@/src/context/ThemeConfigContext";

const COMPONENTS = [
  { id: "security_hero", label: "Security Hero" },
  { id: "cta", label: "Call to Action" },
];

export default function SecurityPage() {
  const { componentThemes } = useThemeConfig();

  const renderWithTheme = (
    id: string,
    Component: React.ReactNode
  ) => {
    const theme = componentThemes[id] || "global";

    if (theme === "global") {
      return Component;
    }

    if (theme === "dark") {
      return <div className="dark">{Component}</div>;
    }

    if (theme === "light") {
      return <div className="light">{Component}</div>;
    }

    return Component;
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-50 min-h-screen flex flex-col transition-colors duration-500">
      <ThemeBuilder components={COMPONENTS} />

      <main className="flex-1 w-full flex flex-col relative z-0">
        {renderWithTheme(
          "security_hero",
          <div className="lg:p-2">
            <SecHero />
          </div>
        )}

        {renderWithTheme(
          "cta",
          <CTA
            headline="Strengthen Your Security & Compliance"
            description="Protect your applications, infrastructure, and software supply chain with AI-powered security, continuous compliance, vulnerability management, and enterprise-grade cyber resilience."
            primaryButtonText="Book a Demo"
            primaryButtonLink="/contact"
            secondaryButtonText="Talk to Our Experts"
            secondaryButtonLink="/contact"
          />
        )}
      </main>
    </div>
  );
}