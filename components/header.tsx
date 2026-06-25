'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currentLocale = pathname.split('/')[1] || 'en'
  const otherLocale = currentLocale === 'en' ? 'fr' : 'en'

  const navLinks = [
    { label: t('Medical Billing Services'), href: '#Medical Billing Services' },
    { label: t('Solutions'), href: '#services' },
    { label: t('code'), href: '#code' },
    { label: t('documentation'), href: `/${currentLocale}/documentation` },
    { label: t('blog'), href: `/${currentLocale}/blog` },
    { label: t('pricing'), href: '#pricing' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${currentLocale}`} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">+</span>
              </div>
              <span className="font-bold text-xl text-gray-900 hidden sm:inline">
                GNF-Billing
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
   <nav className="hidden md:flex items-center gap-8 flex-1 ml-12">
  {navLinks.map((link, idx) => {

    // Medical Billing Services
    if (link.label === t('Medical Billing Services')) {
      return (
        <div
          key={idx}
          className="relative group"
        >
          <button className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">
            {link.label}
          </button>

          {/* Hover Safe Area */}
          <div
  className="
    absolute
    top-full
    left-[25vw]
    -translate-x-1/2
    pt-10
    hidden
    group-hover:block
    z-50
  "
>

            <div
              className="
                w-[1300px]
                rounded-3xl
                bg-white
                shadow-2xl
                border
                border-gray-100
                p-10
              "
            >
              <div className="grid grid-cols-2 gap-10">

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-900">
                    Medical Billing Services GNF Billing
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Canada's trusted healthcare billing and revenue
                    cycle management partner helping clinics and
                    physicians maximize revenue.
                  </p>
                </div>

                <div className="space-y-4">
                  <a href="#" className="block hover:text-blue-600">
                    Company
                  </a>

                  <a href="#" className="block hover:text-blue-600">
                    Our Mission
                  </a>

                  <a href="#" className="block hover:text-blue-600">
                    Leadership
                  </a>

                  <a href="#" className="block hover:text-blue-600">
                    Careers
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      )
    }

    // Solutions
    if (link.label === t('Solutions')) {
      return (
        <div
          key={idx}
          className="relative group"
        >
          <button className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">
            {link.label}
          </button>

          {/* Hover Safe Area */}
             <div
  className="
    absolute
    top-full
    left-[25vw]
    -translate-x-1/2
    pt-10
    hidden
    group-hover:block
    z-50
  "
>
            <div
              className="
                w-[1300px]
                rounded-3xl
                bg-white
                shadow-2xl
                border
                border-gray-100
                p-10
              "
            >
              <div className="grid grid-cols-3 gap-10">

                <div>
                  <h3 className="text-xl font-semibold mb-5 text-blue-900">
                    Billing Services
                  </h3>

                  <div className="space-y-3">
                    <a href="#" className="block hover:text-blue-600">
                      OHIP Billing
                    </a>

                    <a href="#" className="block hover:text-blue-600">
                      AHCIP Billing
                    </a>

                    <a href="#" className="block hover:text-blue-600">
                      MSP Billing
                    </a>

                    <a href="#" className="block hover:text-blue-600">
                      Provincial Billing
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-5 text-blue-900">
                    Revenue Services
                  </h3>

                  <div className="space-y-3">
                    <a href="#" className="block hover:text-blue-600">
                      Error Reconciliation
                    </a>

                    <a href="#" className="block hover:text-blue-600">
                      Reporting & Analytics
                    </a>

                    <a href="#" className="block hover:text-blue-600">
                      Payment Model Transition
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-5 text-blue-900">
                    Provinces
                  </h3>

                  <div className="space-y-3">
                    <a href="#" className="block hover:text-blue-600">
                      Ontario
                    </a>

                    <a href="#" className="block hover:text-blue-600">
                      Alberta
                    </a>

                    <a href="#" className="block hover:text-blue-600">
                      British Columbia
                    </a>

                    <a href="#" className="block hover:text-blue-600">
                      Saskatchewan
                    </a>

                    <a href="#" className="block hover:text-blue-600">
                      Manitoba
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )
    }

    // code
    if (link.label === t('code')) {
      return (
        <div
          key={idx}
          className="relative group"
        >
          <button className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">
            {link.label}
          </button>

          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block z-50">

            <div
              className="
                w-[800px]
                rounded-3xl
                bg-white
                shadow-2xl
                border
                border-gray-100
                p-10
              "
            >
              <div className="grid grid-cols-2 gap-10">

                <div>
                  <h3 className="text-xl font-semibold mb-5 text-blue-900">
                    Plans
                  </h3>

                  <div className="space-y-3">
                    <a href="#" className="block hover:text-blue-600">
                      Starter
                    </a>

                    <a href="#" className="block hover:text-blue-600">
                      Growth
                    </a>

                    <a href="#" className="block hover:text-blue-600">
                      Enterprise
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-5 text-blue-900">
                    Resources
                  </h3>

                  <div className="space-y-3">
                    <a href="#" className="block hover:text-blue-600">
                      Pricing Guide
                    </a>

                    <a href="#" className="block hover:text-blue-600">
                      ROI Calculator
                    </a>

                    <a href="#" className="block hover:text-blue-600">
                      Request Quote
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )
    }

    // NORMAL LINKS
    return (
      <Link
        key={idx}
        href={link.href}
        className="
          text-gray-700
          text-sm
          font-medium
          hover:text-blue-600
          transition-colors
        "
      >
        {link.label}
      </Link>
    )

  })}

          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <Link
              href={`/${otherLocale}${pathname.replace(`/${currentLocale}`, '')}`}
              className="px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              {currentLocale === 'en' ? 'FR' : 'EN'}
            </Link>

            {/* Sign In Button */}
            <Link
              href="#signin"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors"
            >
              {t('signIn')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-200">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="block px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100 rounded transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-2 border-t border-gray-200 mt-4 pt-4 flex gap-2">
              <Link
                href={`/${otherLocale}${pathname.replace(`/${currentLocale}`, '')}`}
                className="flex-1 text-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                {currentLocale === 'en' ? 'Français' : 'English'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
