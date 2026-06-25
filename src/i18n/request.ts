import { getRequestConfig } from 'next-intl/server'

const locales = ['en', 'fr']

export default getRequestConfig(async ({ locale }) => {
  // Default to 'en' if locale is undefined
  const resolvedLocale = locale || 'en'

  // Check if locale is supported
  if (!locales.includes(resolvedLocale)) {
    throw new Error(`Unsupported locale: ${resolvedLocale}`)
  }

  try {
    const messages = await import(`../../messages/${resolvedLocale}.json`)
    return {
      messages: messages.default,
    }
  } catch (error) {
    console.error(`Failed to load messages for locale: ${resolvedLocale}`, error)
    throw error
  }
})
