import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.billingCare
export default async function BillingCarePage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="Billing Care" title="Billing workflow support for busy practices." description="Support claim review, EMR submissions, error correction, and reporting with a process that keeps every next action visible." /> }
