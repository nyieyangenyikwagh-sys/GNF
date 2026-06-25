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
      <button className="flex items-center gap-1 text-gray-700 font-medium">
        Solutions
        <ChevronDown size={16} />
      </button>

      {open && (
        <div
          className="
            absolute
            top-full
            left-1/2
            -translate-x-1/2
            mt-4
            w-[1000px]
            bg-white
            rounded-2xl
            shadow-2xl
            p-8
            z-50
          "
        >
          <div className="grid grid-cols-3 gap-10">

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-3xl text-red-500 font-light mb-4">
                Optimize Healthcare Revenue
              </h3>

              <p className="text-gray-600">
                Complete Canadian healthcare billing
                and revenue cycle management.
              </p>

              <button className="mt-6 border border-red-500 text-red-500 px-4 py-2 rounded-lg">
                Learn More
              </button>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4">
                Billing Services
              </h4>

              <div className="space-y-3">
                <Link href="/ohip">OHIP Billing</Link>
                <Link href="/ahcip">AHCIP Billing</Link>
                <Link href="/msp">MSP Billing</Link>
                <Link href="/provincial">Provincial Billing</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4">
                Revenue Services
              </h4>

              <div className="space-y-3">
                <Link href="/reconciliation">
                  Error Reconciliation
                </Link>

                <Link href="/reporting">
                  Revenue Reporting
                </Link>

                <Link href="/arp">
                  ARP Transition
                </Link>

                <Link href="/analytics">
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