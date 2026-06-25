'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ChevronDown } from 'lucide-react'

interface ProvinceSelectorProps {
  onSelect: (province: string) => void
  selectedProvince?: string
}

export default function ProvinceSelector({
  onSelect,
  selectedProvince = 'ontario',
}: ProvinceSelectorProps) {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  const provinces = [
    { id: 'ontario', label: t('provinces.ontario') },
    { id: 'bc', label: t('provinces.bc') },
    { id: 'quebec', label: t('provinces.quebec') },
    { id: 'alberta', label: t('provinces.alberta') },
    { id: 'manitoba', label: t('provinces.manitoba') },
    { id: 'other', label: t('provinces.other') },
  ]

  const selected = provinces.find((p) => p.id === selectedProvince)

  return (
    <div className="relative inline-block w-full sm:w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-between hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all"
      >
        <span className="text-gray-900 font-medium">{selected?.label}</span>
        <ChevronDown
          size={20}
          className={`text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {provinces.map((province) => (
            <button
              key={province.id}
              onClick={() => {
                onSelect(province.id)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors ${
                selectedProvince === province.id ? 'bg-blue-100 text-blue-900 font-semibold' : 'text-gray-700'
              }`}
            >
              {province.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
