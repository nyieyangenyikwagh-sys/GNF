'use client'

interface ProvinceTabsProps {
  selectedProvince: string
  onProvinceChange: (province: string) => void
}

const provinces = [
  { id: 'ontario', label: 'OHIP' },
  { id: 'bc', label: 'MSP' },
  { id: 'quebec', label: 'RAMQ' },
  { id: 'alberta', label: 'AHS' },
  { id: 'manitoba', label: 'Manitoba' },
  { id: 'other', label: 'Other' },
]

export default function ProvinceTabs({
  selectedProvince,
  onProvinceChange,
}: ProvinceTabsProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-white rounded-full p-2 shadow-lg border border-gray-100 overflow-x-auto">
        <div className="flex gap-2">
          {provinces.map((province) => (
            <button
              key={province.id}
              onClick={() => onProvinceChange(province.id)}
              className={`px-9 py-6 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                selectedProvince === province.id
                  ? 'bg-[rgb(0,38,77)] text-white shadow-lg'
                    : 'text-[rgb(142, 8, 8)] hover:bg-gray-100'
                    }`}
            >
              {province.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}