'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowLeft, BookOpen, FileText, HelpCircle } from 'lucide-react'

export default function DocumentationPage() {
  const t = useTranslations()
  const params = useParams()
  const locale = params.locale as string || 'en'

  const docSections = [
    {
      title: 'Getting Started',
      titleFr: 'Démarrage',
      description: 'Learn the basics of our healthcare billing platform',
      descriptionFr: 'Apprenez les bases de notre plateforme de facturation des soins de santé',
      icon: <BookOpen className="w-8 h-8" />,
      items: ['Overview', 'Installation', 'Configuration', 'First Steps'],
    },
    {
      title: 'API Reference',
      titleFr: 'Référence API',
      description: 'Complete API documentation for developers',
      descriptionFr: 'Documentation complète de l\'API pour les développeurs',
      icon: <FileText className="w-8 h-8" />,
      items: ['Authentication', 'Endpoints', 'Request Format', 'Response Codes'],
    },
    {
      title: 'Provincial Guides',
      titleFr: 'Guides Provinciaux',
      description: 'Province-specific billing guidelines and requirements',
      descriptionFr: 'Directives et exigences de facturation spécifiques à chaque province',
      icon: <HelpCircle className="w-8 h-8" />,
      items: ['OHIP (Ontario)', 'MSP (BC)', 'RAMQ (Quebec)', 'Other Provinces'],
    },
  ]

  const getDocContent = (locale: string, section: any, field: string) => {
    if (locale === 'fr') {
      return section[`${field}Fr`] || section[field]
    }
    return section[field]
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="py-12">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-semibold transition-colors"
            >
              <ArrowLeft size={20} />
              Back Home
            </Link>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {locale === 'fr' ? 'Documentation' : 'Documentation'}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {locale === 'fr'
                ? 'Tout ce que vous devez savoir pour utiliser notre plateforme de facturation des soins de santé'
                : 'Everything you need to know to use our healthcare billing platform'}
            </p>
          </div>

          {/* Quick Search */}
          <div className="mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder={locale === 'fr' ? 'Rechercher dans la documentation...' : 'Search documentation...'}
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {docSections.map((section, idx) => (
              <div
                key={idx}
                className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow bg-white"
              >
                <div className="text-blue-600 mb-4">{section.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {getDocContent(locale, section, 'title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {getDocContent(locale, section, 'description')}
                </p>

                <div className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <button
                      key={itemIdx}
                      className="block text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline text-left w-full"
                    >
                      → {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Articles */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-12 mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {locale === 'fr' ? 'Articles en vedette' : 'Featured Articles'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {locale === 'fr' ? 'Configuration initiale' : 'Initial Setup'}
                </h4>
                <p className="text-gray-600 mb-4">
                  {locale === 'fr'
                    ? 'Configurez votre compte et vos paramètres de facturation'
                    : 'Set up your account and billing settings'}
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                  {locale === 'fr' ? 'En savoir plus →' : 'Learn more →'}
                </a>
              </article>

              <article className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {locale === 'fr' ? 'Meilleures pratiques' : 'Best Practices'}
                </h4>
                <p className="text-gray-600 mb-4">
                  {locale === 'fr'
                    ? 'Conseils pour optimiser votre processus de facturation'
                    : 'Tips to optimize your billing process'}
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                  {locale === 'fr' ? 'En savoir plus →' : 'Learn more →'}
                </a>
              </article>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {locale === 'fr' ? 'Questions fréquemment posées' : 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <details
                  key={item}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
                    {locale === 'fr'
                      ? `Question fréquente ${item}`
                      : `Frequently Asked Question ${item}`}
                    <span>+</span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    {locale === 'fr'
                      ? 'Voici la réponse à cette question fréquemment posée.'
                      : 'This is the answer to this frequently asked question.'}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Support CTA */}
          <div className="bg-gray-900 text-white rounded-lg p-12 text-center mb-20">
            <h3 className="text-2xl font-bold mb-4">
              {locale === 'fr' ? 'Besoin d\'aide?' : 'Need Help?'}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {locale === 'fr'
                ? 'Contactez notre équipe de support pour toute question ou assistance.'
                : 'Contact our support team for any questions or assistance.'}
            </p>
            <button className="px-8 py-3 bg-purplue-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              {locale === 'fr' ? 'Nous contacter' : 'Contact Us'}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
