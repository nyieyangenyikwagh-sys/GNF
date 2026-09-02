'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = [
  { name: 'Coca-Cola', src: '/brand-logos/coca-cola.svg' },
  { name: 'Ogilvy', src: '/brand-logos/ogilvy.png' },
  { name: 'R/GA', src: '/brand-logos/rga.jpg' },
  { name: 'Wonder', src: '/brand-logos/wonder.png' },
  { name: 'Guess', src: '/brand-logos/guess.png' },
  { name: 'Delivery Hero', src: '/brand-logos/delivery-hero.png' },
  { name: 'Nubank', src: '/brand-logos/nubank.svg' },
]

export default function LogoMarquee() {
  return (
    <div className="overflow-hidden py-6 sm:py-8" aria-label="Brands we work with">
      <motion.div
        className="flex w-max items-center gap-4 sm:gap-6 lg:gap-8"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="
              flex
              h-14
              min-w-32
              flex-shrink-0
              items-center
              justify-center
              sm:h-16
              sm:min-w-40
              rounded-xl
              bg-white/95
              px-4
              shadow-lg
            "
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={180}
              height={64}
              className="h-8 w-auto max-w-24 object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 sm:h-10 sm:max-w-32"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
