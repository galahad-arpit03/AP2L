import NetraaHero from "@/src/components/Products/Netraa/Hero/Hero";
import BusinessValues from "@/src/components/Products/Netraa/BusinessValues/BusinessValues";
import KeyCapabilities from "@/src/components/Products/Netraa/KeyCapabilities/KeyCapabilities";
import CTA from "@/src/components/common/CTA/CTA";

export const metadata = {
  title: "Netraa AI-OPS | AP2L",
  description: "End-to-End Intelligent Observability, Powered By AI. Consolidate your logs, metrics, and traces into a single, AI-driven platform.",
};

export default function NetraaPage() {
  return (
    <main className="min-h-screen bg-white">
      <NetraaHero />
      <BusinessValues />
      <KeyCapabilities />
      <CTA forceLight={true} />
    </main>
  );
}
