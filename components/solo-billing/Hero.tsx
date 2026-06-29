"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-red-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-red-700">
              Canadian Medical Billing Software
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
              Easier Medical
              <span className="block text-red-600">
                Billing for Canadian
              </span>
              Physicians
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Spend less time on paperwork and more time caring for patients.
              Our modern billing platform helps physicians submit claims,
              reduce errors, and maximize revenue with confidence.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <span className="text-slate-700">
                  Free for your first 3 months
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <span className="text-slate-700">
                  Faster claims processing
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <span className="text-slate-700">
                  Canadian billing experts
                </span>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-5">
              <button className="flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-700">
                Start Free Trial
                <ArrowRight size={20} />
              </button>

              <button className="rounded-xl border-2 border-blue-600 px-8 py-4 text-lg font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white">
                Learn More
              </button>
            </div>

            <div className="mt-14 flex flex-wrap gap-10">
              <div>
                <h2 className="text-4xl font-bold text-red-600">9,000+</h2>
                <p className="text-slate-500">Canadian Physicians</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-700">99%</h2>
                <p className="text-slate-500">Same-day Response</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-red-600">40+</h2>
                <p className="text-slate-500">Billing Specialists</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-100 blur-3xl" />

            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?q=80&w=1400&auto=format&fit=crop"
                alt="Doctor using tablet"
                width={800}
                height={900}
                className="h-[650px] w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-10 left-10 rounded-2xl bg-white p-6 shadow-xl">
              <p className="text-sm text-slate-500">
                Average Monthly Revenue
              </p>

              <h3 className="mt-2 text-3xl font-bold text-blue-700">
                +18%
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Increase after switching
              </p>
            </div>

            {/* Floating Card */}
            <div className="absolute -top-8 -left-8 rounded-2xl bg-red-600 px-6 py-5 text-white shadow-xl">
              <p className="text-sm">Trusted Across Canada</p>

              <h3 className="mt-1 text-2xl font-bold">
                OHIP • MSP • AHCIP
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}