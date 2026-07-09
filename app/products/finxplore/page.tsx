import FinxploreHero from "@/src/components/Products/Finxplore/Hero/Hero";
import BusinessValues from "@/src/components/Products/Finxplore/BusinessValues/BusinessValues";
import KeyCapabilities from "@/src/components/Products/Finxplore/KeyCapabilities/KeyCapabilities";
import Integrations from "@/src/components/Products/Finxplore/Integrations/Integrations";
import CTA from "@/src/components/common/CTA/CTA";

export const metadata = {
  title: "Finxplore | AP2L",
  description: "Real-time AI-Powered Risk & Fraud Detection for financial institutions. Protect your business with intelligent anomaly detection and AML compliance.",
};

export default function FinxplorePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <FinxploreHero />
      <BusinessValues />
      <KeyCapabilities />
      <Integrations />
      <CTA forceLight={true} />
    </main>
  );
}