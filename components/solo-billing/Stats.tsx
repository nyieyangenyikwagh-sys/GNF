"use client";

import {
  HeartPulse,
  BadgeCheck,
  Users,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    number: "64+",
    title: "Specialties",
    subtitle: "Medical specialties and sub-specialties supported.",
    icon: HeartPulse,
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    number: "99%",
    title: "Response Rate",
    subtitle: "Same-day customer support from our billing team.",
    icon: BadgeCheck,
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    number: "40+",
    title: "Billing Experts",
    subtitle: "Dedicated professionals helping physicians every day.",
    icon: Users,
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    number: "$250M+",
    title: "Claims Processed",
    subtitle: "Securely processed across Canada every year.",
    icon: TrendingUp,
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-red-700">
            Trusted Across Canada
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Optimizing Billing & Revenue
            <span className="block text-blue-700">
              for Canadian Healthcare Professionals
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Thousands of physicians rely on our secure billing platform
            to simplify claims, reduce errors, and increase efficiency.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${stat.bg}`}
                >
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>

                <h3 className={`text-5xl font-extrabold ${stat.color}`}>
                  {stat.number}
                </h3>

                <h4 className="mt-5 text-xl font-semibold text-slate-900">
                  {stat.title}
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  {stat.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="mt-24 overflow-hidden rounded-3xl bg-gradient-to-r from-red-700 via-red-600 to-blue-700">
          <div className="grid gap-10 p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-4xl font-bold text-white">
                Spend Less Time Billing.
              </h3>

              <p className="mt-4 max-w-xl text-lg leading-8 text-red-100">
                Automate repetitive tasks, reduce rejected claims,
                and let your staff focus on patient care instead of paperwork.
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <button className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-red-700 transition hover:scale-105">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}