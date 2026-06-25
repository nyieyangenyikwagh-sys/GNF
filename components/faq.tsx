'use client'

import { useTranslations } from 'next-intl'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
  const t = useTranslations('faq')
  const [openItem, setOpenItem] = useState<number | null>(0)

  const faqs = [
    {
      question: t('q1'),
      answer: t('a1'),
    },
    {
      question: t('q2'),
      answer: t('a2'),
    },
    {
      question: t('q3'),
      answer: t('a3'),
    },
    {
      question: t('q4'),
      answer: t('a4'),
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              open={openItem === idx}
              className="group border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow"
            >
              <summary
                onClick={() => setOpenItem(openItem === idx ? null : idx)}
                className="cursor-pointer p-6 flex items-center justify-between font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-600 transition-transform ${
                    openItem === idx ? 'rotate-180' : ''
                  }`}
                />
              </summary>
              <div className="px-6 pb-6 text-gray-700 border-t border-gray-200 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
