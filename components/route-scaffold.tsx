import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { routeContent } from '@/lib/route-content'

type RouteScaffoldProps = {
  locale: string
  eyebrow: string
  title: string
  description: string
}

type VisualProfile = {
  image: string
  imagePosition: string
  variant: 'split' | 'offset' | 'editorial'
  serviceLabel: string
}

const defaultProfile: VisualProfile = {
  image: '/medium-shot-smiley-doctor-holding-tablet.jpg',
  imagePosition: 'center',
  variant: 'split',
  serviceLabel: 'Practice-ready support',
}

const visualProfiles: Record<string, VisualProfile> = {
  'Medical billing services for every practice.': { image: '/medium-shot-smiley-doctor-holding-tablet.jpg', imagePosition: 'center 28%', variant: 'split', serviceLabel: 'End-to-end billing' },
  'Practice insight for primary care teams.': { image: '/young-nurse-white-uniform-checks-patient-with-stethoscope-front-view.jpg', imagePosition: 'center', variant: 'editorial', serviceLabel: 'Primary care insight' },
  'Billing workflow support for busy practices.': { image: '/front-view-male-doctor-medical-suit-checking-his-body-with-stethoscope-blue-surface.jpg', imagePosition: 'center', variant: 'offset', serviceLabel: 'Claims workflow' },
  'Full-service billing support.': { image: '/woman-doctor-wearing-white-coat-with-stethoscope-with-smile-face-pointing-with-finger-side-standing-isolated-blue.jpg', imagePosition: 'center', variant: 'split', serviceLabel: 'Full-service support' },
  'A clearer uninsured-services workflow.': { image: '/young-nurse-face-mask-hand-gloves-checks-patient-with-stethoscope.jpg', imagePosition: 'center', variant: 'editorial', serviceLabel: 'Uninsured services' },
  'Billing solutions shaped around your province.': { image: '/front-view-male-doctor-medical-suit-with-stethoscope-blue-background-pandemic-covid-virus-hospital-vaccine-coronavirus-drug.jpg', imagePosition: 'center', variant: 'offset', serviceLabel: 'Across Canada' },
  'OHIP billing support for Ontario practices.': { image: '/front-view-male-doctor-medical-suit-with-stethoscope-blue-surface.jpg', imagePosition: 'center 25%', variant: 'split', serviceLabel: 'Ontario · OHIP' },
  'Discover Practice Care.': { image: '/medium-shot-smiley-doctor-holding-tablet.jpg', imagePosition: 'right center', variant: 'editorial', serviceLabel: 'Ontario · Practice Care' },
  'Transitioning to FHO.': { image: '/young-nurse-black-face-mask-checks-patient-with-stethoscope.jpg', imagePosition: 'center', variant: 'offset', serviceLabel: 'Ontario · FHO transition' },
  'OHIP billing services for specialists.': { image: '/front-view-male-doctor-medical-suit-checking-his-body-with-stethoscope-blue-surface (1).jpg', imagePosition: 'center', variant: 'editorial', serviceLabel: 'Ontario · Specialists' },
  'Physician transition services.': { image: '/front-view-male-doctor-medical-suit-checking-his-body-with-stethoscope-blue-surface (2).jpg', imagePosition: 'center', variant: 'split', serviceLabel: 'Practice transitions' },
  'Patient care and practice workflows.': { image: '/young-nurse-white-uniform-checks-patient-with-stethoscope-front-view.jpg', imagePosition: 'left center', variant: 'offset', serviceLabel: 'Patient workflows' },
  'Hospital and group billing services.': { image: '/front-view-male-doctor-medical-suit-with-stethoscope-blue-background-pandemic-covid-virus-hospital-vaccine-coronavirus-drug.jpg', imagePosition: 'right center', variant: 'editorial', serviceLabel: 'Hospitals & groups' },
  'MSP billing support for BC practices.': { image: '/young-nurse-black-face-mask-checks-patient-with-stethoscope.jpg', imagePosition: 'center', variant: 'split', serviceLabel: 'British Columbia · MSP' },
  'AHCIP billing support for Alberta practices.': { image: '/woman-doctor-wearing-white-coat-with-stethoscope-with-smile-face-pointing-with-finger-side-standing-isolated-blue.jpg', imagePosition: 'center', variant: 'offset', serviceLabel: 'Alberta · AHCIP' },
  'Billing support beyond Ontario, BC, and Alberta.': { image: '/young-nurse-face-mask-hand-gloves-checks-patient-with-stethoscope.jpg', imagePosition: 'right center', variant: 'editorial', serviceLabel: 'Provincial support' },
  'Billing support for Manitoba practices.': { image: '/front-view-male-doctor-medical-suit-with-stethoscope-blue-surface.jpg', imagePosition: 'left center', variant: 'offset', serviceLabel: 'Manitoba billing' },
  'RAMQ billing support for Québec practices.': { image: '/medium-shot-smiley-doctor-holding-tablet.jpg', imagePosition: 'center', variant: 'split', serviceLabel: 'Québec · RAMQ' },
}

export default function RouteScaffold({ locale, eyebrow, title, description }: RouteScaffoldProps) {
  const content = routeContent[title]
  const profile = visualProfiles[title] ?? defaultProfile
  const isEditorial = profile.variant === 'editorial'
  const isOffset = profile.variant === 'offset'

  return (
    <>
      <Header />
      <main className="bg-background">
        <section className={`relative overflow-hidden px-6 py-16 md:py-20 lg:py-24 ${isEditorial ? 'bg-white' : 'bg-muted'}`}>
          <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full border-[48px] border-primary/5" />
          <div className={`relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16 ${isOffset ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <div className={isEditorial ? 'lg:py-10' : ''}>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-primary">{eyebrow}</p>
            <h1 className={`mt-5 font-extrabold leading-[.98] tracking-tight text-foreground ${isEditorial ? 'text-5xl md:text-7xl' : 'text-5xl md:text-6xl lg:text-7xl'}`}>{title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>
            <Link href={`/${locale}#contact`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Book a free assessment <ArrowRight className="h-4 w-4" />
            </Link>
            </div>
            <div className={`relative min-h-[360px] overflow-hidden shadow-2xl md:min-h-[460px] ${isEditorial ? 'rounded-t-[7rem] rounded-b-[2rem]' : isOffset ? 'rounded-[2rem] lg:-rotate-2' : 'rounded-[2rem]'}`}>
              <Image src={profile.image} alt="Healthcare professional supporting a Canadian medical practice" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" style={{ objectPosition: profile.imagePosition }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-white/75">Designed around your workflow</p>
                <p className="mt-2 text-xl font-bold">{profile.serviceLabel}</p>
              </div>
            </div>
          </div>
        </section>
        <section
  className="relative overflow-hidden bg-slate-950 text-white"
>
  <div className="mx-auto grid max-w-7xl lg:min-h-[470px] lg:grid-cols-[1.05fr_.95fr]">
  <div className="relative z-10 flex flex-col justify-center px-6 py-16 md:px-10 lg:px-16 lg:py-20">
    <p className="text-sm font-bold uppercase tracking-[.18em] text-white/80">
      GNF Billing
    </p>

    <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight">
      {content?.spotlight?.title ?? 'Start with a clearer billing workflow.'}
    </h2>

    <p className="mt-4 max-w-xl leading-7 text-white/75">
      {content?.spotlight?.body ?? 'Bring submissions, follow-up, reporting, and practice priorities into one clearer billing workflow.'}
    </p>

    {content?.spotlight?.points && <ul className="mt-7 grid gap-3 sm:grid-cols-2" role="list">
      {content.spotlight.points.map((point) => <li key={point} className="flex items-center gap-2 text-sm font-semibold text-white/90"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />{point}</li>)}
    </ul>}

  </div>
  <div className="relative min-h-[320px] lg:min-h-full">
    <Image src={profile.image} alt="Medical billing support in practice" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" style={{ objectPosition: profile.imagePosition }} />
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
  </div>
  </div>
</section>

        {content && <>
          <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className={`grid gap-6 ${isEditorial ? 'lg:grid-cols-[1.15fr_.85fr]' : 'lg:grid-cols-2'}`}>
              {content.sections.map((section, index) => (
                <section key={section.title} className={`border border-border bg-card p-7 md:p-8 ${isOffset ? 'rounded-[2rem] odd:lg:translate-y-8' : isEditorial && index === 0 ? 'rounded-r-[3rem] border-l-4 border-l-primary' : 'rounded-2xl'}`}>
                  <h2 className="text-2xl font-extrabold tracking-tight text-card-foreground">{section.title}</h2>
                  <p className="mt-4 leading-7 text-muted-foreground">{section.body}</p>
                  {section.bullets && <ul className="mt-6 grid gap-3" role="list">
                    {section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-6 text-card-foreground"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{bullet}</li>)}
                  </ul>}
                </section>
              ))}
            </div>
          </section>
          {content.links && <section className="border-y border-border bg-muted px-6 py-16">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground">Explore related support</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {content.links.map((link) => <Link key={link.href} href={`/${locale}${link.href}`} className="rounded-xl border border-border bg-card p-5 transition hover:border-primary/50 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <h3 className="font-bold text-card-foreground">{link.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{link.description}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">Learn more <ArrowRight className="h-4 w-4" /></span>
                </Link>)}
              </div>
            </div>
          </section>}
          {content.faq && <section className="mx-auto max-w-4xl px-6 py-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">Frequently asked questions</h2>
            <div className="mt-8 grid gap-3">
              {content.faq.map((item) => <details key={item.question} className="rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer rounded-sm font-bold text-card-foreground marker:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{item.question}</summary>
                <p className="mt-3 leading-7 text-muted-foreground">{item.answer}</p>
              </details>)}
            </div>
          </section>}
        </>}
        <section className="bg-primary px-6 py-16 text-center text-primary-foreground">
          <p className="text-sm font-bold uppercase tracking-[.18em] opacity-70">GNF Billing</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold tracking-tight">Start with a clearer billing workflow.</h2>
          <p className="mx-auto mt-4 max-w-xl opacity-80">Book an assessment to discuss your practice, administrative process, and billing priorities.</p>
          <Link href={`/${locale}#contact`} className="mt-7 inline-flex rounded-full bg-primary-foreground px-6 py-3 font-bold text-primary transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground">Book a free assessment</Link>
        </section>

      </main>
      <Footer />
    </>
  )
}
