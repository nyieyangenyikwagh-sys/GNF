'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getBlogPost } from '@/lib/blog-data'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function BlogPostPage() {
  const params = useParams()
  const locale = params.locale as string || 'en'
  const slug = params.slug as string
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    const foundPost = getBlogPost(slug)
    setPost(foundPost)
  }, [slug])

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Post not found</h1>
            <Link href={`/${locale}/blog`} className="text-blue-600 hover:text-blue-700 font-semibold">
              Back to blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const getContent = (field: string) => {
    if (locale === 'fr') {
      return post[`${field}Fr`] || post[field]
    }
    return post[field]
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          {/* Header Image Placeholder */}
          <div className="mb-8 h-80 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white text-6xl">
            📝
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              {new Date(post.date).toLocaleDateString(locale === 'fr' ? 'fr-CA' : 'en-CA')}
            </div>
            <div className="flex items-center gap-2">
              <User size={18} />
              {post.author}
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            {getContent('title')}
          </h1>

          {/* Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-700 space-y-6 whitespace-pre-wrap leading-relaxed">
              {getContent('content')}
            </div>
          </article>

          {/* Related Posts Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Continue Reading</h3>
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Posts →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
