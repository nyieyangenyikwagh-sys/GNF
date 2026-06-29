'use client'

import { Manrope, Great_Vibes } from 'next/font/google'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { useTranslations } from 'next-intl'
import {
  FileSearch,
  Settings2,
  Gauge,
  TrendingUp,
  Play,
} from 'lucide-react'

import ProvinceSelector from './province-selector'
import FeatureScroller from './feature-scroller'
import LogoMarquee from './logo-marquee'
import { HealthcareIconPattern } from './icons/healthcare-icons'
import MobileAppPromo from './mobile-app-promo'

const headingFont = Manrope({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})
const madFont = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})
interface HeroProps {
  onProvinceSelect?: (province: string) => void
}

const billingFeatures = [
  {
    title: 'Analytics',
    description:
      'Uncover missed claims, billing gaps, and revenue opportunities that have been earned but not collected.',
    icon: FileSearch,
  },
  {
    title: 'Medical Billing Management',
    description:
      'Maximize revenue and save time with automated medical billing and claims management.',
    icon: Settings2,
  },
  {
    title: 'Insights & Trends',
    description:
      'Identify opportunities to optimize your healthcare practice and improve monthly revenue.',
    icon: Gauge,
  },
  {
    title: 'Proactive Support',
    description:
      'Maximize practice potential and protect your clinic from billing errors and audit risks.',
    icon: TrendingUp,
  },
]

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
}

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

export default function Hero({ onProvinceSelect }: HeroProps) {
  const t = useTranslations('hero')

  const titleHashItems = t('titlehash')
    .split(',')
    .map((item) => item.trim())

  return (
    <>
      <section className="relative min-h-screen overflow-visible flex flex-col justify-center">
        {/* Background Image */}
        {/*
        <div className="absolute inset-0 z-0">
          <Image
            src="/cmp.jpg"
            alt="Healthcare Background"
            fill
            priority
            className="object-cover"
          />
        </div>
        */}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Healthcare Pattern */}
        <div className="absolute inset-0 opacity-10 z-10">
          <HealthcareIconPattern />
        </div>

        {/* Floating Dashboard Image */}
        <motion.div
          className="
            absolute
            left-[-200px]
            top-1/2
            -translate-y-1/2
            z-0
            hidden
            lg:block
          "
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="relative">
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                bg-cyan-400/20
                blur-3xl
                scale-125
                rounded-full
              "
            />

            <Image
              src="/cmb.jpg"
              alt="Healthcare Dashboard"
              width={10000}
              height={1000}
              priority
              className="
                opacity-30
                blur-[1px]
                drop-shadow-2xl
                rounded-3xl
              "
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <div
            className="
              grid
              lg:grid-cols-[2fr_1fr]
              gap-12
              items-center
              min-h-[68vh]
              pt-10
            "
          >
            {/* LEFT CONTENT */}
            <div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="relative"
              >
                {/* Title Glow */}
                <div
                  className="
                    absolute
                    -left-20
                    top-0
                    w-[450px]
                    h-[450px]
                    rounded-full
                    bg-red-500/10
                    blur-3xl
                  "
                />

                <h1
                  className="
                    relative
                    text-5xl
                    sm:text-6xl
                    lg:text-[6rem]
                    xl:text-[7rem]
                    font-black
                    leading-[0.9]
                    tracking-tight
                    mb-6
                    bg-gradient-to-r
                    from-red-600
                    via-white
                    to-red-600
                    bg-[length:200%_100%]
                    bg-clip-text
                    text-transparent
                    animate-canada
                  "
                >
                  {t('title')}
                </h1>

                <p className="text-2xl text-blue-100 mb-2 font-medium">
                  {t('titleSecond')}
                </p>

                <p className="text-lg text-blue-100/90 mb-6 max-w-2xl">
                  {t('subtitle')}
                </p>
              </motion.div>

              <div className="lg:translate-x-10">
                <div className="mb-6 max-w-sm">
                  <label className="block text-white text-sm font-semibold mb-4">
                    {t('selectProvince')}
                  </label>

                  <ProvinceSelector onSelect={onProvinceSelect} />
                </div>

                <button
                  className="
                    px-8
                    py-4
                    bg-red-600
                    hover:bg-red-700
                    rounded-xl
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-105
                    shadow-lg
                    shadow-red-500/30
                  "
                >
                  {t('cta')}
                </button>
              </div>
              
            </div>

            {/* RIGHT FEATURES */}
            <div className="hidden lg:flex justify-center">
              <div className="space-y-8">
                <p
                  className="
                    uppercase
                    tracking-[0.3em]
                    text-white/40
                    text-sm
                  "
                >
                  Platform Features
                </p>

                <FeatureScroller items={titleHashItems} />
              </div>
            </div>
          </div>

        {/* Stats */}
<div className="pb-0">
  <div className="border-t border-white/20 pt-6">
    <p className="text-center text-blue-100 text-sm mb-8">
      Trusted by healthcare providers across Canada
    </p>

    <div className="flex flex-col lg:flex-row items-center justify-center gap-">
      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-8">
        <div className="text-center">
          <p className="text-4xl font-bold text-white">
            500+
          </p>
          <p className="text-blue-100 text-sm">
            Healthcare Providers
          </p>
        </div>

        <div className="text-center">
          <p className="text-4xl font-bold text-white">
            2.5M+
          </p>
          <p className="text-blue-100 text-sm">
            Claims Processed
          </p>
        </div>

        <div className="text-center">
          <p className="text-4xl font-bold text-white">
            99.9%
          </p>
          <p className="text-blue-100 text-sm">
            Uptime
          </p>
        </div>
      </div>

      {/* Google Play Button */}
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
  </div>

  {/* Logo Marquee */}
  <div className="mt-10 mb-32 relative z-30">
    <LogoMarquee />
  </div>
</div>
        </div>

        {/* Stylish Floating Text */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: 'easeOut',
            delay: 0.4,
          }}
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            z-30
            w-full
            px-6
            text-center
            pointer-events-none
          "
        >
          <motion.p
            animate={{
              opacity: [0.25, 1, 0.25],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              WebkitTextStroke: '0.2px rgba(212, 29, 29, 0.56)',
              textShadow:
                '0 0 20px rgba(255, 238, 238, 0.45), 0 0 45px rgba(247, 179, 179, 0.69)',
            }}
            className={`
              ${madFont.className}
              inline-block
              bg-gradient-to-r
              from-red-950
              via-white-600
              to-cyan-400
              bg-[length:250%_250%]
              bg-clip-text
              text-transparent
              text-3xl
              md:text-4xl
              lg:text-5xl
              tracking-normal
              drop-shadow-2xl
            `}
          >
            ....Faster Claims, Better Care.
          </motion.p>
        </motion.div>

        {/* White Wave */}
        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            overflow-hidden
            leading-none
            z-10
            pointer-events-none
          "
        >
          <svg
            viewBox="0 0 1440 320"
            className="block w-full h-[120px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="
                M0,180
                C160,280 320,280 480,220
                C640,160 800,80 960,140
                C1120,200 1280,280 1440,180
                L1440,320
                L0,320
                Z
              "
            />
          </svg>
        </div>
      </section>
        

      {/* Medical Billing Info Section */}
      <motion.section
        className="relative bg-white py-24 lg:py-32 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.12,
          margin: '0px 0px -80px 0px',
        }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="
              grid
              lg:grid-cols-[1fr_1.35fr]
              gap-16
              lg:gap-24
              items-start
            "
          >
            {/* LEFT TEXT */}
            <motion.div variants={fadeLeft}>
              <motion.h2
  variants={fadeUp}
  className={`
    ${headingFont.className}
    text-5xl
    md:text-6xl
    lg:text-[5.8rem]
    font-black
    leading-[0.92]
    tracking-[-0.075em]
    text-red-600
    mb-10
    max-w-3xl
  `}
>
  
  Medical billing and getting paid should not be complicated.
</motion.h2>

              <motion.p
                variants={fadeUp}
                className="
                  text-lg
                  md:text-xl
                  leading-9
                  text-gray-600
                  max-w-2xl
                "
              >
                DoctorCare delivers fully transparent and detailed financial
                reporting, analytics, insights, and simple recommendations that
                ensure healthcare providers finally have peace of mind in
                understanding exactly how they are paid and how to optimize
                their revenue every month.
              </motion.p>
            </motion.div>

            {/* RIGHT FEATURES */}
            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-x-16 gap-y-16"
            >
              {billingFeatures.map((feature) => {
                const Icon = feature.icon

                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: 'easeOut',
                    }}
                    className="group"
                  >
                    <motion.div
                      className="
                        mb-8
                        inline-flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        text-gray-400
                        transition-colors
                        duration-300
                        group-hover:text-red-600
                      "
                      whileHover={{
                        scale: 1.1,
                        rotate: 2,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: 'easeOut',
                      }}
                    >
                      <Icon strokeWidth={1.7} className="h-16 w-16" />
                    </motion.div>

                    <h3
                      className="
                        text-2xl
                        md:text-3xl
                        font-bold
                        text-gray-500
                        mb-6
                        transition-colors
                        duration-300
                        group-hover:text-gray-800
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        text-lg
                        md:text-xl
                        leading-8
                        text-gray-600
                        max-w-md
                      "
                    >
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </motion.section>
      
    </>
  )
}