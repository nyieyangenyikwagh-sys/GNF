'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { getLatestBlogPosts } from '@/lib/blog-data'
import { useParams } from 'next/navigation'
import { ArrowRight, Calendar, User } from 'lucide-react'

export default function BlogSection() {
  const t = useTranslations()
  const params = useParams()
  const locale = params.locale as string || 'en'
  const latestPosts = getLatestBlogPosts(3)
  const blogImages: Record<string, { src: string; alt: string }> = {
    'ohip-billing-best-practices': { src: '/medium-shot-smiley-doctor-holding-tablet.jpg', alt: 'Physician reviewing information on a tablet' },
    'msp-claims-denied-why': { src: '/front-view-male-doctor-medical-suit-with-stethoscope-blue-surface.jpg', alt: 'Physician with a stethoscope in a clinical setting' },
    'ramq-billing-updates-quebec': { src: '/woman-doctor-wearing-white-coat-with-stethoscope-with-smile-face-pointing-with-finger-side-standing-isolated-blue.jpg', alt: 'Physician in a white coat' },
  }

  const getPostContent = (locale: string, post: any, field: string) => {
    if (locale === 'fr') {
      return post[`${field}Fr`] || post[field]
    }
    return post[field]
  }

  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
              {t('blog.title')}
            </h2>
            <p className="text-muted-foreground">Stay updated with healthcare billing insights</p>
          </div>
          <Link
            href={`/${locale}/blog`}
            className="hidden items-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:inline-flex"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blogImages[post.slug].src}
                  alt={blogImages[post.slug].alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString(locale === 'fr' ? 'fr-CA' : 'en-CA')}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    {post.author}
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-bold text-card-foreground transition-colors group-hover:text-primary">
                  {getPostContent(locale, post, 'title')}
                </h3>

                <p className="mb-4 line-clamp-2 text-muted-foreground">
                  {getPostContent(locale, post, 'excerpt')}
                </p>

                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
            className="block w-full rounded-lg border border-primary py-3 text-center font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
