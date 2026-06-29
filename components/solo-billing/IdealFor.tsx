    "use client";

import {
  CheckCircle2,
  Building2,
  Stethoscope,
  Users,
  ArrowRight,
} from "lucide-react";

const soloFeatures = [
  "Independent physicians",
  "Family medicine clinics",
  "Walk-in clinics",
  "Specialists",
  "Virtual care practices",
  "Locum physicians",
];

const clinicFeatures = [
  "Multi-provider support",
  "Shared billing dashboard",
  "Revenue tracking",
  "Role-based permissions",
  "Automated reports",
  "Dedicated account manager",
];

export default function IdealFor() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            WHO IS SOLO BILLING FOR?
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Built for Every
            <span className="block text-red-600">
              Canadian Practice
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're a solo physician or managing a growing clinic,
            Solo Billing adapts to your workflow so you can focus on
            delivering exceptional patient care.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Solo Practice */}

          <div className="rounded-3xl bg-white p-10 shadow-lg border border-slate-200">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-red-100">
              <Stethoscope className="h-10 w-10 text-red-600" />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              Solo Physicians
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              Everything an independent physician needs to submit claims,
              track payments, and maximize revenue with minimal effort.
            </p>

            <div className="mt-8 space-y-4">
              {soloFeatures.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-red-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700">
              Start Free Trial
              <ArrowRight size={18} />
            </button>

          </div>

          {/* Clinics */}

          <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-red-600 p-10 text-white shadow-xl">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20">
              <Building2 className="h-10 w-10" />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Clinics & Group Practices
            </h3>

            <p className="mt-4 leading-7 text-blue-100">
              Powerful tools for clinics managing multiple physicians,
              staff members, and billing workflows from a single platform.
            </p>

            <div className="mt-8 space-y-4">

              {clinicFeatures.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span>{item}</span>
                </div>
              ))}

            </div>

            <button className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-red-600 transition hover:bg-slate-100">
              Contact Sales
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

        {/* Bottom Stats */}

        <div className="mt-24 rounded-3xl bg-white border border-slate-200 shadow-lg p-10">

          <div className="grid gap-10 md:grid-cols-3">

            <div className="text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <Users className="h-10 w-10 text-red-600" />
              </div>

              <h3 className="mt-6 text-4xl font-bold text-red-600">
                9,000+
              </h3>

              <p className="mt-2 text-slate-600">
                Physicians Using Solo Billing
              </p>

            </div>

            <div className="text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <Building2 className="h-10 w-10 text-blue-700" />
              </div>

              <h3 className="mt-6 text-4xl font-bold text-blue-700">
                500+
              </h3>

              <p className="mt-2 text-slate-600">
                Clinics Across Canada
              </p>

            </div>

            <div className="text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <Stethoscope className="h-10 w-10 text-red-600" />
              </div>

              <h3 className="mt-6 text-4xl font-bold text-red-600">
                98.9%
              </h3>

              <p className="mt-2 text-slate-600">
                Claims Successfully Processed
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}