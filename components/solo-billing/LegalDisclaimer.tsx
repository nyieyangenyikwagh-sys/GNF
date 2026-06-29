"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Lock,
  FileText,
  HeartPulse,
} from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Privacy & Security",
    content:
      "Solo Billing is designed with security and privacy at its core. We use encrypted communication, secure cloud infrastructure, role-based access control, and continuous monitoring to help safeguard physician and patient information.",
  },
  {
    icon: Lock,
    title: "Compliance",
    content:
      "Our platform is designed to support Canadian healthcare organizations by following industry best practices for privacy, confidentiality, and secure handling of health information. Organizations remain responsible for ensuring compliance with provincial and federal regulations applicable to their practice.",
  },
  {
    icon: FileText,
    title: "Medical Billing Disclaimer",
    content:
      "Claim approvals and reimbursement timelines depend on provincial health authorities and the accuracy of submitted information. Solo Billing provides software tools to assist physicians but does not guarantee payment or claim approval.",
  },
  {
    icon: HeartPulse,
    title: "Support Commitment",
    content:
      "Our Canadian support team is committed to helping physicians resolve billing issues quickly through onboarding assistance, training resources, and ongoing customer support.",
  },
];

export default function LegalDisclaimer() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <footer className="bg-slate-950 text-white">

      {/* Disclaimer */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <span className="rounded-full bg-red-600/20 px-4 py-2 text-sm font-semibold text-red-300">
            Legal & Compliance
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Transparency You Can Trust
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            We believe healthcare professionals deserve complete
            transparency regarding security, compliance, and billing
            practices.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {items.map((item, index) => {
            const Icon = item.icon;
            const active = open === index;

            return (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
              >
                <button
                  onClick={() =>
                    setOpen(active ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left transition hover:bg-slate-800"
                >
                  <div className="flex items-center gap-4">

                    <div className="rounded-xl bg-red-600/20 p-3">
                      <Icon className="text-red-400" />
                    </div>

                    <span className="text-lg font-semibold">
                      {item.title}
                    </span>

                  </div>

                  {active ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </button>

                {active && (
                  <div className="border-t border-slate-800 px-6 py-6 text-slate-400 leading-8">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </section>

      {/* Footer */}

      <section className="border-t border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}

            <div>

              <h3 className="text-2xl font-bold">
                <span className="text-red-500">Solo</span>{" "}
                <span className="text-blue-400">Billing</span>
              </h3>

              <p className="mt-5 leading-7 text-slate-400">
                Modern Canadian medical billing software built
                for physicians, specialists, and healthcare
                clinics.
              </p>

            </div>

            {/* Product */}

            <div>

              <h4 className="font-semibold text-white">
                Product
              </h4>

              <ul className="mt-5 space-y-3 text-slate-400">

                <li className="hover:text-white cursor-pointer">
                  Features
                </li>

                <li className="hover:text-white cursor-pointer">
                  Pricing
                </li>

                <li className="hover:text-white cursor-pointer">
                  Security
                </li>

                <li className="hover:text-white cursor-pointer">
                  Integrations
                </li>

              </ul>

            </div>

            {/* Company */}

            <div>

              <h4 className="font-semibold text-white">
                Company
              </h4>

              <ul className="mt-5 space-y-3 text-slate-400">

                <li className="hover:text-white cursor-pointer">
                  About
                </li>

                <li className="hover:text-white cursor-pointer">
                  Careers
                </li>

                <li className="hover:text-white cursor-pointer">
                  Blog
                </li>

                <li className="hover:text-white cursor-pointer">
                  Contact
                </li>

              </ul>

            </div>

            {/* Legal */}

            <div>

              <h4 className="font-semibold text-white">
                Legal
              </h4>

              <ul className="mt-5 space-y-3 text-slate-400">

                <li className="hover:text-white cursor-pointer">
                  Privacy Policy
                </li>

                <li className="hover:text-white cursor-pointer">
                  Terms of Service
                </li>

                <li className="hover:text-white cursor-pointer">
                  Cookie Policy
                </li>

                <li className="hover:text-white cursor-pointer">
                  Accessibility
                </li>

              </ul>

            </div>

          </div>

          <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">

            <p>
              © {new Date().getFullYear()} Solo Billing. All rights
              reserved.
            </p>

            <p className="mt-3 text-sm">
              Built for Canadian physicians with security,
              privacy, and simplicity in mind.
            </p>

          </div>

        </div>

      </section>

    </footer>
  );
}