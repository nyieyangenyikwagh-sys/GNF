'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import LatestModels from '@/components/LatestModels'
import Stats from '@/components/stats'
import MobileAppCTA from '@/components/mobile-app-promo'
import Testimonials from '@/components/testimonials'
import BlogSection from '@/components/blog-section'
import FAQ from '@/components/faq'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Page() {
  const [selectedProvince, setSelectedProvince] = useState('ontario')

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <Hero onProvinceSelect={setSelectedProvince} />

      <Features selectedProvince={selectedProvince} />

      <LatestModels />

      <Stats />

      <Testimonials />

      <BlogSection />

      <FAQ />

      <MobileAppCTA />

      <CTASection />

      <Footer />
    </main>
  )
}