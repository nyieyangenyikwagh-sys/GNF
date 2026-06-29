"use client";

import { Check, Star } from "lucide-react";

const features = [
  "Unlimited claim submissions",
  "OHIP & Provincial billing",
  "Real-time claim tracking",
  "Payment reconciliation",
  "Revenue analytics dashboard",
  "Secure cloud storage",
  "Dedicated Canadian support",
  "Automatic billing reminders",
];

export default function Pricing() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Simple Pricing
            <span className="block text-blue-700">
              No Hidden Fees
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Everything your clinic needs to submit claims efficiently,
            increase revenue, and reduce administrative workload.
          </p>
        </div>

        {/* Pricing Cards */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* LEFT CARD */}

          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Solo Practice
            </span>

            <h3 className="mt-8 text-4xl font-bold text-slate-900">
              Start Free
            </h3>

            <div className="mt-4 flex items-end gap-2">
              <span className="text-6xl font-extrabold text-red-600">
                $0
              </span>

              <span className="mb-2 text-slate-500">
                for first 3 months
              </span>
            </div>

            <p className="mt-6 text-slate-600 leading-7">
              Experience Solo Billing completely free.
              No setup fees. No commitment.
            </p>

            <button className="mt-10 w-full rounded-xl bg-red-600 py-4 text-lg font-semibold text-white transition hover:bg-red-700">
              Start Free Trial
            </button>

            <div className="mt-10 space-y-5">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <div className="rounded-full bg-green-100 p-1">
                    <Check
                      size={16}
                      className="text-green-600"
                    />
                  </div>

                  <span className="text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT CARD */}

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-red-600 p-10 text-white shadow-2xl">

            <div className="absolute right-6 top-6 rounded-full bg-white/20 px-4 py-2">
              <div className="flex items-center gap-2">
                <Star size={16} fill="white" />
                <span className="text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            </div>

            <h3 className="text-4xl font-bold">
              Clinic & Group Practice
            </h3>

            <p className="mt-6 text-lg text-blue-100">
              Designed for growing clinics that require
              advanced reporting, multi-provider billing,
              and premium support.
            </p>

            <div className="mt-10 space-y-6">

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h4 className="font-semibold">
                  Multi-Physician Billing
                </h4>

                <p className="mt-2 text-blue-100">
                  Manage multiple physicians under one
                  secure dashboard.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h4 className="font-semibold">
                  Advanced Analytics
                </h4>

                <p className="mt-2 text-blue-100">
                  Track revenue trends, payment delays,
                  and clinic performance.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h4 className="font-semibold">
                  Priority Support
                </h4>

                <p className="mt-2 text-blue-100">
                  Same-day assistance from Canadian
                  billing experts.
                </p>
              </div>

            </div>

            <button className="mt-10 w-full rounded-xl bg-white py-4 text-lg font-semibold text-red-600 transition hover:bg-slate-100">
              Contact Sales
            </button>

          </div>

        </div>

        {/* Bottom Banner */}

        <div className="mt-24 rounded-3xl bg-slate-900 p-12 text-center">

          <h3 className="text-4xl font-bold text-white">
            Ready to simplify your billing?
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Join thousands of Canadian physicians already
            using Solo Billing to improve cash flow,
            reduce rejected claims, and spend more time
            with patients.
          </p>

          <button className="mt-10 rounded-xl bg-red-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-red-700">
            Get Started Today
          </button>

        </div>

      </div>
    </section>
  );
}