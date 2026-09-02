import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { routeContent } from '@/lib/route-content'

type RouteScaffoldProps = {
  locale: string
  eyebrow: string
  title: string
  description: string
}

export default function RouteScaffold({ locale, eyebrow, title, description }: RouteScaffoldProps) {
  const content = routeContent[title]

  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="bg-muted px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-primary">{eyebrow}</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[.98] tracking-tight text-foreground md:text-6xl lg:text-7xl">{title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>
            <Link href={`/${locale}#contact`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Book a free assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
        {content && <>
          <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-2">
              {content.sections.map((section) => (
                <section key={section.title} className="rounded-2xl border border-border bg-card p-7 md:p-8">
                  <h2 className="text-2xl font-extrabold tracking-tight text-card-foreground">{section.title}</h2>
                  <p className="mt-4 leading-7 text-muted-foreground">{section.body}</p>
                  {section.bullets && <ul className="mt-6 grid gap-3" role="list">
                    {section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-6 text-card-foreground"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{bullet}</li>)}
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
