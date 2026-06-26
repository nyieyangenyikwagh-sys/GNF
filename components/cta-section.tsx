'use client'

import { Mail } from 'lucide-react'

export default function CTASection() {
  return (
   <section className="py-24 bg-gradient-to-r from-[#825d80] to-[#755070]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Streamline Your Healthcare Billing?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join 1000+ healthcare providers who trust us with their billing solutions. Get a free consultation today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-purplue-50 transition-colors">
            <Mail size={20} />
            Get Free Consultation
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
            Schedule Demo
          </button>
        </div>

        <p className="text-blue-100 text-sm mt-8">
          No credit card required • 15-minute demo • PIPEDA compliant
        </p>
      </div>
    </section>
  )
}
