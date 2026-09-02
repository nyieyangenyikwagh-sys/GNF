import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.billingCare
export default async function BillingCarePage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="Billing Care" title="Billing workflow support for busy practices." description="A dedicated route for Billing Care information and resources." /> }
