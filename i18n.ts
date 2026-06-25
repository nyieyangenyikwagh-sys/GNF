import { getRequestConfig } from 'next-intl/server'

export const locales = ['en', 'fr'] as const
export type Locale = (typeof locales)[number]

export default getRequestConfig(async ({ locale: requestLocale }) => {
  const locale = requestLocale && locales.includes(requestLocale as any) ? requestLocale : 'en'
  
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
