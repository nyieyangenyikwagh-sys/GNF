"use client";

import {
  ArrowRight,
  ShieldCheck,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Secure & Compliant",
    description: "Built to protect patient data with enterprise-grade security.",
  },
  {
    icon: Clock3,
    title: "Save Time",
    description: "Automate repetitive billing tasks and reduce paperwork.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Across Canada",
    description: "Thousands of physicians rely on Solo Billing every day.",
  },
];

export default function FooterCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-red-700 py-24">

      {/* Background Decorations */}

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-red-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur">
            Ready to Get Started?
          </span>

          <h2 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
            Billing Shouldn't
            <span className="block text-red-200">
              Slow You Down
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-blue-100">
            Join thousands of Canadian physicians using Solo Billing to
            simplify claims, reduce administrative work, and maximize
            revenue while focusing on patient care.
          </p>

        </div>

        {/* Benefits */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-red-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-blue-100">
                  {benefit.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* CTA Buttons */}

        <div className="mt-20 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <button className="flex items-center gap-3 rounded-xl bg-red-600 px-10 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-red-700">
            Start Free Trial
            <ArrowRight size={20} />
          </button>

          <button className="rounded-xl border-2 border-white px-10 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-blue-700">
            Book a Demo
          </button>

        </div>

        {/* Trust Numbers */}

        <div className="mt-24 grid gap-10 border-t border-white/20 pt-12 text-center md:grid-cols-4">

          <div>
            <h3 className="text-5xl font-extrabold text-white">
              9,000+
            </h3>

            <p className="mt-3 text-blue-100">
              Physicians
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-extrabold text-white">
              $250M+
            </h3>

            <p className="mt-3 text-blue-100">
              Claims Processed
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-extrabold text-white">
              98.9%
            </h3>

            <p className="mt-3 text-blue-100">
              Approval Rate
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-extrabold text-white">
              24/7
            </h3>

            <p className="mt-3 text-blue-100">
              Cloud Access
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}