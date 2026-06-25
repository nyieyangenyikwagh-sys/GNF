import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as any)) {
    notFound()
  }

  let messages: any = {}
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch {
    messages = (await import(`../../messages/en.json`)).default
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
