"use client";

import {
  ShieldCheck,
  FileCheck2,
  Clock3,
  BarChart3,
  Smartphone,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: FileCheck2,
    title: "Smart Claim Submission",
    description:
      "Submit OHIP and provincial claims quickly with intelligent validation to reduce rejections before submission.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Compliant",
    description:
      "Built with enterprise-grade security to protect patient information and meet Canadian healthcare standards.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Clock3,
    title: "Save Hours Every Week",
    description:
      "Automate repetitive billing tasks so your clinic can spend more time caring for patients.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: BarChart3,
    title: "Revenue Analytics",
    description:
      "Track payments, outstanding claims, and clinic performance with beautiful dashboards.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Smartphone,
    title: "Access Anywhere",
    description:
      "Manage your billing from desktop, tablet, or mobile with a fast and responsive experience.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "Canadian billing specialists are available whenever you need assistance or expert advice.",
    color: "bg-blue-100 text-blue-700",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-blue-700">
            Why Choose Solo Billing?
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Everything You Need
            <span className="block text-red-600">
              In One Billing Platform
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From claim submission to payment tracking, Solo Billing provides
            modern tools that simplify your workflow and maximize revenue.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

                <button className="mt-8 font-semibold text-red-600 transition group-hover:translate-x-2">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-24 overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Left */}
            <div className="p-12 lg:p-16">
              <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
                Built For Canadian Physicians
              </span>

              <h3 className="mt-6 text-4xl font-bold text-slate-900">
                Less Administration.
                <span className="block text-blue-700">
                  More Patient Care.
                </span>
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Solo Billing helps independent physicians and clinics simplify
                billing, eliminate paperwork, and improve cash flow without
                changing the way they practice medicine.
              </p>

              <button className="mt-10 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700">
                Start Free Trial
              </button>
            </div>

            {/* Right */}
            <div className="flex items-center justify-center bg-gradient-to-br from-blue-700 to-red-600 p-12">
              <div className="rounded-3xl bg-white p-10 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <span className="font-medium text-slate-600">
                      Claims Approved
                    </span>

                    <span className="font-bold text-green-600">
                      98.9%
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b pb-4">
                    <span className="font-medium text-slate-600">
                      Average Submission Time
                    </span>

                    <span className="font-bold text-blue-700">
                      2 mins
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b pb-4">
                    <span className="font-medium text-slate-600">
                      Clinics Supported
                    </span>

                    <span className="font-bold text-red-600">
                      9,000+
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-600">
                      Support
                    </span>

                    <span className="font-bold text-blue-700">
                      Same Day
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}