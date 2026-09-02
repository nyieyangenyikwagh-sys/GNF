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
      <div className="rounded-full border border-border bg-card p-2 shadow-lg overflow-x-auto">
        <div className="flex gap-2">
          {provinces.map((province) => (
            <button
              type="button"
              key={province.id}
              onClick={() => onProvinceChange(province.id)}
              aria-pressed={selectedProvince === province.id}
              className={`rounded-full px-9 py-6 font-medium whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 ${
                selectedProvince === province.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
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
