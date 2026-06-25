'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, Star } from 'lucide-react'
import { Manrope } from 'next/font/google'

const font = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

export default function MobileAppPromo() {
  return (
    <section
      className={`
        ${font.className}
        relative
        left-1/2
        w-screen
        -translate-x-1/2
        overflow-hidden
        bg-[#795274]
        py-16
        lg:py-20
      `}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-32 h-[320px] w-[420px] rounded-full bg-black/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_0.95fr]">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h2
            className="
              text-5xl
              font-extrabold
              leading-[1.08]
              tracking-[-0.06em]
              text-white
              md:text-6xl
              lg:text-[4.8rem]
            "
          >
            Download the mobile companion app today
          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-xl
              font-semibold
              leading-9
              text-white/95
              md:text-2xl
            "
          >
            Submit claims anytime, anywhere and enjoy effortless medical
            billing.
          </p>

          {/* Rating */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.4, y: 8 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.06,
                    ease: 'easeOut',
                  }}
                >
                  <Star
                    size={28}
                    className="fill-[#f6b34d] text-[#f6b34d]"
                  />
                </motion.span>
              ))}
            </div>

            <p className="text-xl font-extrabold text-white">
              4.4 average app rating
            </p>
          </div>

          {/* App Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#"
              className="
                group
                flex
                h-[68px]
                min-w-[230px]
                items-center
                gap-4
                rounded-lg
                border
                border-white/45
                bg-white/5
                px-6
                text-white
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/15
                hover:shadow-2xl
                hover:shadow-black/20
              "
            >
              <span className="text-4xl leading-none"></span>

              <span className="leading-tight">
                <span className="block text-sm font-semibold">
                  Download on the
                </span>
                <span className="block text-2xl font-extrabold">
                  App Store
                </span>
              </span>
            </a>

            <a
              href="#"
              className="
                group
                flex
                h-[68px]
                min-w-[230px]
                items-center
                gap-4
                rounded-lg
                border
                border-white/45
                bg-white/5
                px-6
                text-white
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/15
                hover:shadow-2xl
                hover:shadow-black/20
              "
            >
              <span className="flex h-10 w-10 items-center justify-center">
                <Play size={36} fill="white" />
              </span>

              <span className="leading-tight">
                <span className="block text-sm font-semibold">
                  GET IT ON
                </span>
                <span className="block text-2xl font-extrabold">
                  Google Play
                </span>
              </span>
            </a>
          </div>
        </motion.div>

        {/* RIGHT PHONE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="
            relative
            hidden
            min-h-[520px]
            lg:block
          "
        >
          <motion.div
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              absolute
              -right-10
              top-1/2
              h-[620px]
              w-[720px]
              -translate-y-1/2
            "
          >
            <Image
              src="/images/mobile-app-phones.png"
              alt="Mobile app preview"
              fill
              priority
              className="
                object-contain
                drop-shadow-[0_40px_80px_rgba(0,0,0,0.35)]
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}