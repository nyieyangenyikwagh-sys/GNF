'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function MegaMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Menu Button */}
      <button
        type="button"
        className="flex items-center gap-1 font-medium text-gray-700 transition-colors hover:text-red-600"
      >
        Solutions
        <ChevronDown size={16} />
      </button>

      {open && (
        <div
          className="
            absolute
            left-1/2
            top-full
            z-50
            mt-4
            w-[1000px]
            -translate-x-1/2
            rounded-2xl
            bg-white
            p-8
            shadow-2xl
          "
        >
          <div className="grid grid-cols-3 gap-10">
            {/* Left Card */}
            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="mb-4 text-3xl font-light text-red-500">
                Optimize Healthcare Revenue
              </h3>

              <p className="text-gray-600">
                Complete Canadian healthcare billing and revenue cycle
                management.
              </p>

              <Link
                href="/en/solo-billing"
                className="mt-6 inline-block rounded-lg border border-red-500 px-4 py-2 text-red-500 transition-all hover:bg-red-500 hover:text-white"
              >
                Learn More
              </Link>
            </div>

            {/* Billing Services */}
            <div>
              <h4 className="mb-4 text-xl font-bold">
                <Link
                  href="/en/solo-billing"
                  className="transition-colors hover:text-red-600"
                >
                  Billing Services
                </Link>
              </h4>

              <div className="flex flex-col space-y-3">
                <Link
                  href="/en/solo-billing"
                  className="transition-colors hover:text-red-600"
                >
                  OHIP Billing
                </Link>

                <Link
                  href="/ahcip"
                  className="transition-colors hover:text-red-600"
                >
                  AHCIP Billing
                </Link>

                <Link
                  href="/msp"
                  className="transition-colors hover:text-red-600"
                >
                  MSP Billing
                </Link>

                <Link
                  href="/provincial"
                  className="transition-colors hover:text-red-600"
                >
                  Provincial Billing
                </Link>
              </div>
            </div>

            {/* Revenue Services */}
            <div>
              <h4 className="mb-4 text-xl font-bold">
                Revenue Services
              </h4>

              <div className="flex flex-col space-y-3">
                <Link
                  href="/reconciliation"
                  className="transition-colors hover:text-red-600"
                >
                  Error Reconciliation
                </Link>

                <Link
                  href="/reporting"
                  className="transition-colors hover:text-red-600"
                >
                  Revenue Reporting
                </Link>

                <Link
                  href="/arp"
                  className="transition-colors hover:text-red-600"
                >
                  ARP Transition
                </Link>

                <Link
                  href="/analytics"
                  className="transition-colors hover:text-red-600"
                >
                  Analytics
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}