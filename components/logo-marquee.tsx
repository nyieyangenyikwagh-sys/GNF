'use client'

import { motion } from 'framer-motion'

const logos = [
  'Coca-Cola',
  'Ogilvy',
  'R/GA',
  'Wonder',
  'Guess',
  'Delivery Hero',
  'Nubank',
]

export default function LogoMarquee() {
  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
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
            key={i}
            className="
              text-white/40
              text-2xl
              font-semibold
              flex-shrink-0
            "
          >
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  )
}