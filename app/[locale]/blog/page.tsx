'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { getAllBlogPosts } from '@/lib/blog-data'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowLeft, Calendar, User } from 'lucide-react'

export default function BlogPage() {
  const t = useTranslations()
  const params = useParams()
  const locale = params.locale as string || 'en'
  const allPosts = getAllBlogPosts()

  const getPostContent = (locale: string, post: any, field: string) => {
    if (locale === 'fr') {
      return post[`${field}Fr`] || post[field]
    }
    return post[field]
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Back Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Stay updated with the latest healthcare billing insights and best practices
          </p>

          <div className="space-y-8">
            {allPosts.map((post) => (
              <article
                key={post.id}
                className="border-b border-gray-200 pb-8 last:border-b-0"
              >
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString(locale === 'fr' ? 'fr-CA' : 'en-CA')}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    {post.author}
                  </div>
                  <span className="px-2 py-1 bg-purplue-100 text-blue-700 rounded text-xs font-semibold">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/${locale}/blog/${post.slug}`}>
                    {getPostContent(locale, post, 'title')}
                  </Link>
                </h2>

                <p className="text-gray-600 mb-4 text-lg">
                  {getPostContent(locale, post, 'excerpt')}
                </p>

                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read Full Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
