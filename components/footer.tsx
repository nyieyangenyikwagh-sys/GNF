'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { Shield, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const t = useTranslations()
  const params = useParams()
  const locale = params.locale as string || 'en'

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">GNF</span>
              </div>
              <span className="font-semibold text-amber-100">GNF-Bill</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Streamlined healthcare billing solutions for Canadian providers.
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-400">
              <Shield size={16} />
              {t('footer.compliance')}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}`} className="hover:text-blue-400 transition-colors">
                  {t('nav.Medical Billing Services')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#services`} className="hover:text-blue-400 transition-colors">
                  {t('nav.Solutions')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#code`} className="hover:text-blue-400 transition-colors">
                  {t('nav.code')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/documentation`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('nav.documentation')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/blog`} className="hover:text-blue-400 transition-colors">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-blue-400 transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-blue-400 transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#contact`} className="hover:text-blue-400 transition-colors">
                  {t('footer.pricing')}
                </Link>
              </li>
            </ul>
          </div>

          {/* pricing Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">pricing</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@careflow.ca" className="hover:text-blue-400 transition-colors">
                  info@careflow.ca
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Toronto, ON, Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            &copy; 2024 GNF-Bill. {t('footer.copyright')}.
          </p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <Link href={`/${locale}`} className="hover:text-blue-400 transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link href={`/${locale}`} className="hover:text-blue-400 transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
