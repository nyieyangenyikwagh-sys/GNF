'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Manrope, Playfair_Display } from 'next/font/google'

const headingFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
})

const bodyFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export default function Testimonials() {
  const t = useTranslations('testimonials')

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Ontario Clinic Director',
      content:
        'The billing platform has streamlined our operations by 40%. Patient claims are processed faster than ever before.',
      rating: 5,
    },
    {
      name: 'Dr. Michael Chen',
      role: 'BC Healthcare Provider',
      content:
        'Excellent support team and reliable MSP claim submissions. Our denial rate dropped significantly after switching.',
      rating: 5,
    },
    {
      name: 'Dr. Marie Dupont',
      role: 'Quebec Medical Practice',
      content:
        'Outstanding bilingual support and RAMQ compliance expertise. Highly recommended for Quebec providers.',
      rating: 5,
    },
  ]

  return (
    <section
      className={`
        ${bodyFont.className}
        relative
        overflow-hidden
        py-28
        bg-[radial-gradient(circle_at_top,#eef6ff_0%,#ffffff_42%,#f8fafc_100%)]
      `}
    >
      {/* Luxury background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purplue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-yellow-200/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2
            className={`
              ${headingFont.className}
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-extrabold
              tracking-[-0.04em]
              text-slate-950
              mb-5
            `}
          >
            {t('title')}
          </h2>

          <p className="mx-auto max-w-2xl text-lg md:text-xl leading-8 text-slate-600">
            {t('description')}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 45,
                  scale: 0.96,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.75,
                    ease: 'easeOut',
                  },
                },
              }}
              whileHover={{
                y: -14,
                scale: 1.025,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/70
                bg-white/80
                p-8
                shadow-[0_25px_80px_rgba(15,23,42,0.08)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-blue-200
                hover:shadow-[0_35px_100px_rgba(37,99,235,0.18)]
              "
            >
              {/* Animated shine */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -left-full
                  top-0
                  h-full
                  w-1/2
                  skew-x-[-20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/70
                  to-transparent
                  transition-all
                  duration-1000
                  group-hover:left-[130%]
                "
              />

              {/* Soft gold corner glow */}
              <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-yellow-300/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Quote icon */}
              <div
                className="
                  mb-7
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-600
                  to-blue-800
                  text-white
                  shadow-lg
                  shadow-blue-500/25
                  transition-transform
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                "
              >
                <Quote size={26} />
              </div>

              {/* Stars */}
              <div className="flex gap-1.5 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 8, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.35,
                      delay: idx * 0.12 + i * 0.06,
                      ease: 'easeOut',
                    }}
                    whileHover={{
                      scale: 1.25,
                      rotate: 10,
                    }}
                  >
                    <Star
                      size={22}
                      className="fill-yellow-400 text-yellow-400 drop-shadow-sm"
                    />
                  </motion.span>
                ))}
              </div>

              {/* Testimonial */}
              <p
                className="
                  relative
                  text-slate-700
                  mb-8
                  text-lg
                  md:text-xl
                  leading-9
                  font-medium
                "
              >
                “{testimonial.content}”
              </p>

              {/* Divider */}
              <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-slate-900
                    to-blue-700
                    text-white
                    text-lg
                    font-extrabold
                    shadow-lg
                    shadow-blue-500/20
                  "
                >
                  {testimonial.name
                    .split(' ')
                    .slice(1, 2)
                    .join('')
                    .charAt(0)}
                </div>

                <div>
                  <p className="font-extrabold text-slate-950 text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm font-medium text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-gradient-to-r
                  from-blue-600
                  via-yellow-400
                  to-blue-600
                  transition-all
                  duration-700
                  group-hover:w-full
                "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
