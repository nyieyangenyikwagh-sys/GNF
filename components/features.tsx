'use client'

import { useEffect, useState } from 'react'
import ProvinceTabs from '@/components/ProvinceTabs'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FeaturesProps {
  selectedProvince?: string
}

const provinceFeatures: Record<
  string,
  {
    icon: string
    title: string
    desc: string
    details: string[]
  }
> = {
  ontario: {
    icon: '🏥',
    title: 'Ontario Health Insurance Plan(OHIP)',
    desc: ' billing compliance, claims management.',
    details: [
      'OHIP submission and tracking',
      'Claims denial management',
      'Fee schedule compliance',
      '24/7 provider support',
    ],
  },

  bc: {
    icon: '⚕️',
    title: 'Medical Services Plan (MSP)',
    desc: 'Full MSP billing and claims management.',
    details: [
      'MSP claim submission',
      'Payment processing',
      'Coverage verification',
      'Audit representation',
    ],
  },

  quebec: {
    icon: '🏛️',
    title: 'Régie de l’assurance maladie du Québec',
    desc: 'Quebec healthcare billing and compliance.',
    details: [
      'RAMQ billing expertise',
      'Claims management',
      'Regulatory compliance',
      'French support',
    ],
  },

  alberta: {
    icon: '🌾',
    title: 'Alberta Health Services',
    desc: 'Complete AHS billing solutions.',
    details: [
      'AHS claim submission',
      'Payment verification',
      'Provider relations',
      'Billing optimization',
    ],
  },

  manitoba: {
    icon: '🌊',
    title: 'Manitoba Health',
    desc: 'Manitoba healthcare billing services.',
    details: [
      'Manitoba billing expertise',
      'Claims processing',
      'Fee schedule updates',
      'Provider support',
    ],
  },

  other: {
    icon: '🇨🇦',
    title: 'Other Canadian Provinces',
    desc: 'Billing support for all Canadian provinces.',
    details: [
      'Multi-province support',
      'Flexible billing solutions',
      'Regulatory guidance',
      'Custom integration',
    ],
  },
}

export default function Features({ selectedProvince: initialProvince }: FeaturesProps) {
  const [selectedProvince, setSelectedProvince] = useState(initialProvince ?? 'ontario')

  useEffect(() => {
    if (initialProvince && provinceFeatures[initialProvince]) {
      setSelectedProvince(initialProvince)
    }
  }, [initialProvince])

  const feature =
    provinceFeatures[selectedProvince] || provinceFeatures.ontario

  return (
    <section
      id="services"
      className="relative overflow-hidden pt-24 pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Healthcare Billing Built For Canada
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            Streamline billing operations, reduce claim denials, and stay
            compliant with provincial healthcare regulations across Canada.
          </p>
        </div>

        <ProvinceTabs
          selectedProvince={selectedProvince}
          onProvinceChange={setSelectedProvince}
        />

        {/* PREMIUM FEATURE CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProvince}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-[22px] bg-[#111827] shadow-2xl min-h-[450px]"
          >
            {/* Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-cyan-500/10" />

            <div className="grid lg:grid-cols-2 relative z-10">
              {/* LEFT CONTENT */}
              <div className="p-10 md:p-14 text-white">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="text-5xl">{feature.icon}</span>

                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                    Featured Province
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  {feature.title}
                </h3>

                <p className="text-lg text-slate-300 mb-8 max-w-xl">
                  {feature.desc}
                </p>

                {/* LINKS */}
                <div className="flex flex-wrap gap-8 mb-12">
                  <a
                    href="/services"
                    className="group flex items-center gap-2 text-lg font-semibold hover:text-blue-400 transition-colors"
                  >
                    Learn More
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>

                  <a
                    href="/contact"
                    className="group flex items-center gap-2 text-lg font-semibold hover:text-blue-400 transition-colors"
                  >
                    Contact Us
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>

                {/* FEATURES */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-blue-400 mt-1 flex-shrink-0"
                      />

                      <span className="text-slate-200">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE VISUAL */}
              <div className="relative min-h-[280px] sm:min-h-[400px] lg:min-h-[500px]">
                <img
                  src="/cmb.jpg"
                  alt="Healthcare Dashboard"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#111827]/70" />

                {/* FLOATING ANALYTICS CARD */}
                <div className="absolute bottom-4 right-4 w-[calc(100%-2rem)] sm:bottom-6 sm:right-6 sm:w-[320px] rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl p-5 sm:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-blue-400 text-sm font-medium">
                      Billing Analytics
                    </span>

                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                  </div>

                  <pre className="text-xs leading-6 text-slate-300 overflow-hidden">
{`{
  claims_submitted: 2547,
  approval_rate: "98.4%",
  denied_claims: "1.6%",
  avg_processing: "48h",
  provider_support: "24/7"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* PROVINCE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {Object.entries(provinceFeatures).map(([key, province]) => (
            <div
              key={key}
              onClick={() => setSelectedProvince(key)}
              className={`group rounded-3xl p-8 transition-all duration-300 cursor-pointer ${
                selectedProvince === key
                  ? 'bg-purplue-600 text-white shadow-xl scale-[1.02]'
                  : 'bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              <div className="text-4xl mb-4">{province.icon}</div>

              <h3
                className={`font-bold text-lg mb-3 ${
                  selectedProvince === key
                    ? 'text-white'
                    : 'text-slate-900'
                }`}
              >
                {province.title}
              </h3>

              <p
                className={
                  selectedProvince === key
                    ? 'text-blue-100'
                    : 'text-slate-600'
                }
              >
                {province.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
