'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const defaultItems = [
  'Direct Photoshoots',
  'Cast Characters',
  'Stay On Brand',
  'Upscale to 4K',
  'Draft Storyboards',
]

interface FeatureScrollerProps {
  items?: string[]
}

export default function FeatureScroller({ items = defaultItems }: FeatureScrollerProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[80px] overflow-hidden">
      <motion.div
        animate={{
          y: -index * 80,
        }}
        transition={{
          duration: 0.7,
          ease: 'easeInOut',
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            className="
              h-[80px]
              flex
              items-center
              text-3xl
              lg:text-5xl
              font-bold
              text-white/70
            "
          >
            <span className="text-red-500 mr-4">▶</span>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
