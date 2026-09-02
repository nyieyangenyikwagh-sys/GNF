'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import MegaMenu from './mega-menu'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav
      className="
        fixed
        top-4
        left-1/2
        -translate-x-1/2
        z-50
        w-[95%]
        max-w-7xl
        rounded-2xl
        backdrop-blur-xl
        bg-white/10
        border
        border-white/10
        shadow-lg
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">

          <Link href="/en">
            <span className="text-2xl font-bold text-white">
              GNF-Billing
            </span>
          </Link>

          <div className="flex items-center gap-10">

            <MegaMenu />

            <Link
              href="/en/code"
              className="text-white/90 hover:text-white transition-colors"
            >
              code
            </Link>

            <Link
              href="/en/documentation"
              className="text-white/90 hover:text-white transition-colors"
            >
              Documentation
            </Link>

            <Link
              href="/en/billing-services"
              className="text-white/90 hover:text-white transition-colors"
            >
              Billing Services
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={() =>
                setTheme(theme === 'dark' ? 'light' : 'dark')
              }
              className="
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-xl
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                text-white
                hover:bg-white/20
                transition-all
                duration-300
              "
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-300" />
              ) : (
                <Moon className="h-5 w-5 text-white" />
              )}
            </button>

          </div>

        </div>
      </div>
    </nav>
  )
}
