'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'

type MenuItem = { title: string; description: string; href: string; children?: { title: string; href: string }[] }

const billingItems: MenuItem[] = [
  { title: 'Medical Billing Services', description: 'Every medical billing need covered, from a small clinic to a large practice.', href: '/billing-services' },
  { title: 'Practice Care', description: 'Practice insights, revenue optimization, and automated billing for primary care.', href: '/billing-services/practice-care' },
  { title: 'Billing Care', description: 'Automated billing submissions and error correction right in your EMR.', href: '/billing-services/billing-care' },
  { title: 'Billing Care Plus', description: 'A full-service billing solution that takes manual submissions off your plate.', href: '/billing-services/billing-care-plus' },
  { title: 'Uninsured Medical Services', description: 'A complete solution for managing uninsured services activities.', href: '/billing-services/uninsured-medical-services' },
]

const solutionItems: MenuItem[] = [
  { title: 'Solutions', description: 'Take your practice from good to great with billing management that lets you focus on patient care.', href: '/solutions' },
  { title: 'OHIP Billing', description: 'Automated OHIP billing management and revenue optimization for Ontario physicians.', href: '/solutions/ohip-billing', children: [
    { title: 'Discover Practice Care', href: '/solutions/ohip-billing/discover-practice-care' },
    { title: 'Transitioning to FHO', href: '/solutions/ohip-billing/transitioning-to-fho' },
    { title: 'Billing Services for Specialists', href: '/solutions/ohip-billing/ohip-billing-services-for-specialists' },
    { title: 'Physician Transition Services', href: '/solutions/ohip-billing/physician-transition-services' },
    { title: 'Patient Care', href: '/solutions/ohip-billing/patient-care' },
    { title: 'Hospital and Group Billing Services', href: '/solutions/ohip-billing/hospital-and-group-billing-services' },
  ] },
  { title: 'MSP Billing', description: 'Automated MSP billing, error reconciliation, and reporting for BC physicians.', href: '/solutions/msp-billing' },
  { title: 'AHCIP Billing', description: 'Full-service Alberta billing and payment model transition support.', href: '/solutions/ahcip-billing' },
  { title: 'Other Provinces', description: 'Billing management and revenue optimization beyond Ontario, Alberta, and BC.', href: '/solutions/other-provinces', children: [
    { title: 'Manitoba Billing', href: '/solutions/other-provinces/manitoba-billing' },
    { title: 'RAMQ Billing', href: '/solutions/other-provinces/ramq-billing' },
  ] },
]

const codeGroups = [
  { title: 'AHCIP', links: [
    ['Alberta billing support', '/solutions/ahcip-billing'],
  ] },
  { title: 'MSP', links: [
    ['BC billing support', '/solutions/msp-billing'],
  ] },
  { title: 'OHIP', links: [
    ['Ontario billing support', '/solutions/ohip-billing'],
  ] },
]

function localHref(path: string, locale: string) { return `/${locale}${path}` }

function ServiceMenu({ label, items, locale }: { label: string; items: MenuItem[]; locale: string }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const show = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpen(true) }
  const hide = () => { closeTimer.current = setTimeout(() => setOpen(false), 120) }

  return <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
    <button aria-expanded={open} onClick={() => setOpen((value) => !value)} className="flex items-center gap-1 py-6 text-sm font-semibold text-slate-700 transition hover:text-[#7e0e58]">
      {label}<ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
    </button>
    {open && <div className="fixed left-1/2 top-[74px] z-50 w-[min(1120px,calc(100vw-2rem))] -translate-x-1/2 pt-2">
      <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_22px_48px_rgba(26,34,56,.18)] sm:p-6 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-7">
          <Link onClick={() => setOpen(false)} href={localHref(items[0].href, locale)} className="rounded-2xl bg-[#7e0e58] p-5 text-white transition hover:bg-[#680847] lg:col-span-4 lg:p-7">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-white/65">{label}</p>
            <h2 className="mt-4 text-2xl font-bold leading-tight">{items[0].title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/80">{items[0].description}</p>
            <span className="mt-6 inline-block text-sm font-bold">Learn more →</span>
          </Link>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-8">
            {items.slice(1).map((item) => <div key={item.href}>
              <Link onClick={() => setOpen(false)} href={localHref(item.href, locale)} className="text-base font-bold text-slate-800 transition hover:text-[#7e0e58]">{item.title}</Link>
              <p className="mt-1.5 text-sm leading-5 text-slate-500">{item.description}</p>
              {item.children && <div className="mt-3 grid gap-1.5 border-l border-[#7e0e58]/20 pl-3">
                {item.children.map(child => <Link onClick={() => setOpen(false)} className="text-xs font-medium text-slate-600 hover:text-[#7e0e58]" href={localHref(child.href, locale)} key={child.href}>{child.title}</Link>)}
              </div>}
            </div>)}
          </div>
        </div>
      </div>
    </div>}
  </div>
}

function CodeMenu({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false)
  return <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
    <button aria-expanded={open} onClick={() => setOpen((value) => !value)} className="flex items-center gap-1 py-6 text-sm font-semibold text-slate-700 transition hover:text-[#7e0e58]">Code<ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} /></button>
    {open && <div className="fixed left-1/2 top-[74px] z-50 w-[min(920px,calc(100vw-2rem))] -translate-x-1/2 pt-2">
      <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_22px_48px_rgba(26,34,56,.18)] sm:p-6 lg:p-8">
        <div className="mb-6 flex items-center justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#7e0e58]">Billing resources</p><h2 className="mt-1 text-2xl font-bold text-slate-800">Provincial billing codes</h2></div><Link onClick={() => setOpen(false)} href={localHref('/code', locale)} className="shrink-0 text-sm font-bold text-[#7e0e58]">View all resources →</Link></div>
        <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">{codeGroups.map(group => <div key={group.title}><h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">{group.title}</h3><div className="grid gap-2">{group.links.map(([title, href]) => <Link onClick={() => setOpen(false)} key={href} href={localHref(href, locale)} className="text-sm leading-5 text-slate-600 hover:text-[#7e0e58]">{title}</Link>)}</div></div>)}</div>
      </div>
    </div>}
  </div>
}

function MobileServiceMenu({ label, items, locale, onNavigate }: { label: string; items: MenuItem[]; locale: string; onNavigate: () => void }) {
  return <details className="group rounded-lg hover:bg-[#7e0e58]/5">
    <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-700"><span>{label}</span><ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" /></summary>
    <div className="grid gap-1 border-t border-slate-100 px-3 py-2">
      {items.map(item => <div key={item.href} className="grid gap-1">
        <Link onClick={onNavigate} href={localHref(item.href, locale)} className="py-1.5 text-sm font-medium text-slate-700 hover:text-[#7e0e58]">{item.title}</Link>
        {item.children?.map(child => <Link onClick={onNavigate} href={localHref(child.href, locale)} key={child.href} className="pl-3 py-1 text-xs font-medium text-slate-600 hover:text-[#7e0e58]">{child.title}</Link>)}
      </div>)}
    </div>
  </details>
}

function MobileCodeMenu({ locale, onNavigate }: { locale: string; onNavigate: () => void }) {
  return <details className="group rounded-lg hover:bg-[#7e0e58]/5">
    <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-700"><span>Code</span><ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" /></summary>
    <div className="grid gap-1 border-t border-slate-100 px-3 py-2">
      <Link onClick={onNavigate} href={localHref('/code', locale)} className="py-1.5 text-sm font-medium text-slate-700 hover:text-[#7e0e58]">All resources</Link>
      {codeGroups.flatMap(group => group.links).map(([title, href]) => <Link onClick={onNavigate} href={localHref(href, locale)} key={href} className="py-1 text-xs font-medium text-slate-600 hover:text-[#7e0e58]">{title}</Link>)}
    </div>
  </details>
}

export default function Header() {
  const pathname = usePathname(); const [open, setOpen] = useState(false); const [mounted, setMounted] = useState(false); const { resolvedTheme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])
  const locale = pathname.split('/')[1] || 'en'
  return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
    <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-5 lg:px-8">
      <Link href={`/${locale}`} className="flex shrink-0 items-center gap-2 sm:gap-2.5"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7e0e58] text-lg font-bold text-white sm:h-9 sm:w-9 sm:text-xl">+</span><span className="text-lg font-extrabold tracking-tight text-slate-800 sm:text-xl">GNF<span className="text-[#7e0e58]">Billing</span></span></Link>
      <nav className="hidden min-w-0 items-center gap-4 2xl:gap-7 xl:flex"><ServiceMenu label="Medical Billing Services" items={billingItems} locale={locale} /><ServiceMenu label="Solutions" items={solutionItems} locale={locale} /><CodeMenu locale={locale} /><Link href={`/${locale}/documentation`} className="whitespace-nowrap text-sm font-semibold text-slate-700 hover:text-[#7e0e58]">Resources</Link></nav>
      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2"><Link href="#contact" className="hidden rounded-full bg-[#7e0e58] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#680847] 2xl:inline-flex">Book assessment</Link><button aria-label="Toggle color theme" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100">{mounted ? (resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />) : <span className="block h-[18px] w-[18px]" />}</button><button aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 xl:hidden">{open ? <X /> : <Menu />}</button></div>
    </div>
    {open && <nav className="border-t border-slate-100 bg-white px-5 py-5 xl:hidden"><div className="grid gap-1"><MobileServiceMenu label="Medical Billing Services" items={billingItems} locale={locale} onNavigate={() => setOpen(false)} /><MobileServiceMenu label="Solutions" items={solutionItems} locale={locale} onNavigate={() => setOpen(false)} /><MobileCodeMenu locale={locale} onNavigate={() => setOpen(false)} /><Link onClick={() => setOpen(false)} href={`/${locale}/documentation`} className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-[#7e0e58]/5">Resources</Link></div></nav>}
  </header>
}
