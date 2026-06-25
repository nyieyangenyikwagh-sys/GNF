'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { getLatestBlogPosts } from '@/lib/blog-data'
import { useParams } from 'next/navigation'
import { ArrowRight, Calendar, User } from 'lucide-react'

export default function BlogSection() {
  const t = useTranslations()
  const params = useParams()
  const locale = params.locale as string || 'en'
  const latestPosts = getLatestBlogPosts(3)

  const getPostContent = (locale: string, post: any, field: string) => {
    if (locale === 'fr') {
      return post[`${field}Fr`] || post[field]
    }
    return post[field]
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              {t('blog.title')}
            </h2>
            <p className="text-gray-600">Stay updated with healthcare billing insights</p>
          </div>
          <Link
            href={`/${locale}/blog`}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-3 text-blue-600 font-semibold hover:text-blue-700 transition-colors border border-blue-600 rounded-lg hover:bg-blue-50"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
            >
              {/* Placeholder for post image */}
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-4xl">
                📝
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString(locale === 'fr' ? 'fr-CA' : 'en-CA')}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    {post.author}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {getPostContent(locale, post, 'title')}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {getPostContent(locale, post, 'excerpt')}
                </p>

                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  {t('blog.readMore')}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href={`/${locale}/blog`}
            className="block w-full py-3 text-center text-blue-600 font-semibold hover:text-blue-700 transition-colors border border-blue-600 rounded-lg hover:bg-blue-50"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
