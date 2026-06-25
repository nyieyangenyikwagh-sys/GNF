'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'



type CountUpProps = {
  end: number
  suffix?: string
  duration?: number
  replayKey?: number
}

function CountUp({
  end,
  suffix = '',
  duration = 1.5,
  replayKey = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null)

  const isInView = useInView(ref, {
    once: false,
    amount: 0.6,
  })

  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) {
      setValue(0)
      return
    }

    setValue(0)

    const controls = animate(0, end, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setValue(Math.round(latest))
      },
    })

    return () => controls.stop()
  }, [isInView, end, duration, replayKey])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const t = useTranslations('stats')

  const [replayKeys, setReplayKeys] = useState([0, 0, 0, 0])

  const stats = [
    {
      value: 92,
      suffix: '%',
      label: t('firstPass'),
    },
    {
      value: 24,
      suffix: 'h',
      label: t('turnaround'),
    },
    {
      value: 4,
      suffix: '%',
      label: t('denials'),
    },
    {
      value: 1000,
      suffix: '+',
      label: t('providers'),
    },
  ]

  const replayAnimation = (index: number) => {
    setReplayKeys((prev) =>
      prev.map((key, idx) => (idx === index ? key + 1 : key))
    )
  }

  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.25,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              onHoverStart={() => replayAnimation(idx)}
              whileHover={{
                y: -8,
                scale: 1.04,
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: 'easeOut',
                  },
                },
              }}
              transition={{
                duration: 0.25,
                ease: 'easeOut',
              }}
              className="
                text-center
                cursor-pointer
                rounded-3xl
                px-6
                py-8
                transition-colors
                duration-300
                hover:bg-white/60
                hover:shadow-xl
                hover:shadow-blue-500/10
              "
            >
              <div className="text-5xl sm:text-6xl font-black text-blue-600 mb-4 tracking-tight">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={1.6}
                  replayKey={replayKeys[idx]}
                />
              </div>

              <p className="text-lg text-gray-700 font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}