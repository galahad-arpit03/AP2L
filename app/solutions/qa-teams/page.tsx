"use client";

import QAHero from "@/src/components/solutions/QA/Qahero";
import CTA from "@/src/components/common/CTA/CTA";
import ThemeBuilder from "@/src/components/common/ThemeBuilder/ThemeBuilder";
import { useThemeConfig } from "@/src/context/ThemeConfigContext";

const COMPONENTS = [
  { id: "qa_hero", label: "QA Hero" },
  { id: "cta", label: "Call to Action" },
];

export default function QAPage() {
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
          "qa_hero",
          <div className="lg:p-2">
            <QAHero />
          </div>
        )}

        {renderWithTheme(
          "cta",
          <CTA
            headline="Ready to Transform Your Quality Engineering?"
            description="Accelerate software quality with AI-powered testing, intelligent automation, and enterprise-grade QA solutions."
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