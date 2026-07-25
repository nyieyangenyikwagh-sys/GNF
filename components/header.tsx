'use client'

import { useEffect, useState } from 'react'
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
  ] },
  { title: 'MSP Billing', description: 'Automated MSP billing, error reconciliation, and reporting for BC physicians.', href: '/solutions/msp-billing' },
  { title: 'AHCIP Billing', description: 'Full-service Alberta billing and payment model transition support.', href: '/solutions/ahcip-billing' },
  { title: 'Other Provinces', description: 'Billing management and revenue optimization beyond Ontario, Alberta, and BC.', href: '/solutions/other-provinces' },
]

const codeGroups = [
  { title: 'AHCIP', links: [
    ['Alberta Health Billing Codes', 'https://www.dr-bill.ca/alberta-health-billing-codes'],
    ['Alberta Health Explanatory Codes', 'https://www.dr-bill.ca/alberta-health-billing-explanatory-codes-2'],
    ['Service Codes & Modifiers', 'https://www.dr-bill.ca/blog/ahcip/alberta-health-service-codes-modifier-definitions'],
  ] },
  { title: 'MSP', links: [
    ['MSP Billing Codes', 'https://www.dr-bill.ca/msp_billing_codes'],
    ['MSP Billing Explanatory Codes', 'https://www.dr-bill.ca/msp-billing-explanatory-codes'],
    ['MSP Cut-off Dates', 'https://www.dr-bill.ca/msp-cut-off-dates'],
  ] },
  { title: 'OHIP', links: [
    ['OHIP Billing Codes', 'https://www.dr-bill.ca/ohip_billing_codes'],
    ['OHIP Diagnostic Codes', 'https://www.dr-bill.ca/ohip-diagnostic-codes'],
    ['OHIP Billing Error Codes', 'https://www.dr-bill.ca/ohip-billing-error-codes'],
    ['OHIP Cut-off Dates', 'https://www.dr-bill.ca/ohip-cut-off-dates'],
  ] },
]

function localHref(path: string, locale: string) { return `/${locale}${path}` }

function ServiceMenu({ label, items, locale }: { label: string; items: MenuItem[]; locale: string }) {
  return <div className="group relative">
    <button className="flex items-center gap-1 py-6 text-sm font-semibold text-slate-700 transition hover:text-[#7e0e58]">
      {label}<ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
    </button>
    <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[min(1120px,calc(100vw-2rem))] -translate-x-1/2 pt-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
      <div className="rounded-b-3xl border border-slate-100 bg-white p-8 shadow-[0_22px_48px_rgba(26,34,56,.18)]">
        <div className="grid grid-cols-12 gap-7">
          <Link href={localHref(items[0].href, locale)} className="col-span-4 rounded-2xl bg-[#7e0e58] p-7 text-white transition hover:bg-[#680847]">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-white/65">{label}</p>
            <h2 className="mt-4 text-2xl font-bold leading-tight">{items[0].title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/80">{items[0].description}</p>
            <span className="mt-6 inline-block text-sm font-bold">Learn more →</span>
          </Link>
          <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-6">
            {items.slice(1).map((item) => <div key={item.href}>
              <Link href={localHref(item.href, locale)} className="text-base font-bold text-slate-800 transition hover:text-[#7e0e58]">{item.title}</Link>
              <p className="mt-1.5 text-sm leading-5 text-slate-500">{item.description}</p>
              {item.children && <div className="mt-3 grid gap-1.5 border-l border-[#7e0e58]/20 pl-3">
                {item.children.map(child => <Link className="text-xs font-medium text-slate-600 hover:text-[#7e0e58]" href={localHref(child.href, locale)} key={child.href}>{child.title}</Link>)}
              </div>}
            </div>)}
          </div>
        </div>
      </div>
    </div>
  </div>
}

function CodeMenu({ locale }: { locale: string }) {
  return <div className="group relative">
    <button className="flex items-center gap-1 py-6 text-sm font-semibold text-slate-700 transition hover:text-[#7e0e58]">Code<ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" /></button>
    <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[min(920px,calc(100vw-2rem))] -translate-x-1/2 pt-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
      <div className="rounded-b-3xl border border-slate-100 bg-white p-8 shadow-[0_22px_48px_rgba(26,34,56,.18)]">
        <div className="mb-6 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#7e0e58]">Billing resources</p><h2 className="mt-1 text-2xl font-bold text-slate-800">Provincial billing codes</h2></div><Link href={localHref('/code', locale)} className="text-sm font-bold text-[#7e0e58]">View all resources →</Link></div>
        <div className="grid grid-cols-3 gap-8">{codeGroups.map(group => <div key={group.title}><h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">{group.title}</h3><div className="grid gap-2">{group.links.map(([title, href]) => <a key={href} href={href} target="_blank" rel="noreferrer" className="text-sm leading-5 text-slate-600 hover:text-[#7e0e58]">{title}</a>)}</div></div>)}</div>
      </div>
    </div>
  </div>
}

export default function Header() {
  const pathname = usePathname(); const [open, setOpen] = useState(false); const [mounted, setMounted] = useState(false); const { resolvedTheme, setTheme } = useTheme()
  useEffect(() => setMounted(true), []); const locale = pathname.split('/')[1] || 'en'
  const mobileLinks = [...billingItems.map(x => x.href), ...solutionItems.map(x => x.href), '/code']
  return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
    <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-8">
      <Link href={`/${locale}`} className="flex items-center gap-2.5"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7e0e58] text-xl font-bold text-white">+</span><span className="text-xl font-extrabold tracking-tight text-slate-800">GNF<span className="text-[#7e0e58]">Billing</span></span></Link>
      <nav className="hidden items-center gap-7 xl:flex"><ServiceMenu label="Medical Billing Services" items={billingItems} locale={locale} /><ServiceMenu label="Solutions" items={solutionItems} locale={locale} /><CodeMenu locale={locale} /><Link href={`/${locale}/documentation`} className="text-sm font-semibold text-slate-700 hover:text-[#7e0e58]">Resources</Link></nav>
      <div className="flex items-center gap-2"><Link href="#contact" className="hidden rounded-full bg-[#7e0e58] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#680847] sm:inline-flex">Book assessment</Link><button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className="hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:block">{mounted && resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button><button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 xl:hidden">{open ? <X /> : <Menu />}</button></div>
    </div>
    {open && <div className="border-t border-slate-100 bg-white px-5 py-5 xl:hidden"><div className="grid gap-1">{mobileLinks.map(href => <Link onClick={() => setOpen(false)} key={href} href={localHref(href, locale)} className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-[#7e0e58]/5">{href.split('/').filter(Boolean).pop()?.replaceAll('-', ' ')}</Link>)}</div></div>}
  </header>
}
