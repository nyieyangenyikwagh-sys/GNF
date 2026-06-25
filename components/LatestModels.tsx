'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Manrope } from 'next/font/google'

const headingFont = Manrope({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
})

type Model = {
  name: string
  image: string
  links: string[]
}

const models: Model[] = [
  {
    name: 'Newly Practicing Physicians',
    image: '/images/newly-practicing-physicians.jpg',
    links: ['Billing Setup', 'Claim Support', 'Practice Growth'],
  },
  {
    name: 'Individual Physicians',
    image: '/images/individual-physicians.jpg',
    links: ['Ontario', 'British Columbia', 'Alberta'],
  },
  {
    name: 'Physician Groups',
    image: '/images/physician-groups.jpg',
    links: ['Ontario', 'British Columbia', 'Alberta'],
  },
  {
    name: 'Medical Office Assistants & Billing Agents',
    image: '/images/medical-office-assistants.jpg',
    links: ['Billing Training', 'Claim Review', 'Office Support'],
  },
]

const carouselModels = [...models, ...models]

export default function LatestModels() {
  return (
    <section className="relative overflow-hidden bg-[#f4f2ee] py-24">
      {/* HEADER */}
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className={`
            ${headingFont.className}
            text-4xl
            md:text-5xl
            font-extrabold
            tracking-[-0.04em]
            text-[#4b0909]
          `}
        >
          Built for every healthcare professional
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="
            mx-auto
            mt-6
            max-w-4xl
            text-xl
            md:text-2xl
            leading-relaxed
            text-[#4b0909]/80
          "
        >
          Simple, reliable billing support for physicians, clinics, groups,
          assistants, and billing teams.
        </motion.p>
      </div>

      {/* CAROUSEL */}
      <div className="relative mt-20 overflow-hidden">
        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#f4f2ee] to-transparent" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#f4f2ee] to-transparent" />

        <motion.div
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            flex
            w-max
            gap-6
            px-6
            md:px-10
          "
        >
          {carouselModels.map((model, index) => (
            <motion.article
              key={`${model.name}-${index}`}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              transition={{
                duration: 0.25,
                ease: 'easeOut',
              }}
              className="
                group
                relative
                h-[560px]
                w-[430px]
                shrink-0
                overflow-hidden
                rounded-[24px]
                bg-[#ecebe6]
                shadow-lg
                shadow-black/10
              "
            >
              <Image
                src={model.image}
                alt={model.name}
                fill
                sizes="430px"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />

              {/* Dark image overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/75
                  via-black/25
                  to-transparent
                  transition-opacity
                  duration-500
                  group-hover:opacity-60
                "
              />

              {/* Title before hover */}
              <div
                className="
                  absolute
                  left-12
                  right-8
                  bottom-11
                  transition-all
                  duration-500
                  ease-out
                  group-hover:opacity-0
                  group-hover:translate-y-8
                "
              >
                <h3
                  className={`
                    ${headingFont.className}
                    text-white
                    text-[34px]
                    md:text-[38px]
                    font-extrabold
                    leading-[1.05]
                    tracking-[-0.045em]
                    drop-shadow-lg
                  `}
                >
                  {model.name}
                </h3>
              </div>

              {/* Hidden list panel on hover */}
              <div
                className="
                  absolute
                  left-0
                  right-0
                  bottom-0
                  translate-y-full
                  rounded-t-[24px]
                  bg-[#ecebe6]
                  px-9
                  pt-9
                  pb-8
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:translate-y-0
                "
              >
                <h3
                  className={`
                    ${headingFont.className}
                    text-[30px]
                    font-extrabold
                    leading-tight
                    tracking-[-0.04em]
                    text-neutral-900
                    mb-6
                  `}
                >
                  {model.name}
                </h3>

                <div>
                  {model.links.map((link) => (
                    <a
                      key={link}
                      href="/services"
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-neutral-500/50
                        py-4
                        text-[18px]
                        font-extrabold
                        text-neutral-800
                        transition-colors
                        duration-300
                        hover:text-red-600
                      "
                    >
                      <span>{link}</span>

                      <ArrowRight
                        size={24}
                        strokeWidth={3}
                        className="
                          text-black
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}