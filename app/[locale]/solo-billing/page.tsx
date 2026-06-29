import Hero from "../../../components/solo-billing/Hero";
import Stats from "../../../components/solo-billing/Stats";
import Features from "../../../components/solo-billing/Features";
import Pricing from "../../../components/solo-billing/Pricing";
import FooterCTA from "../../../components/solo-billing/FooterCTA";
import LegalDisclaimer from "../../../components/solo-billing/LegalDisclaimer";

export default function SoloBillingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Hero */}
      <Hero />

      {/* Statistics */}
      <Stats />

      {/* Features */}
      <Features />

      {/* Pricing */}
      <Pricing />

      {/* CTA */}
      <FooterCTA />

      {/* Legal */}
      <LegalDisclaimer />
    </main>
  );
}