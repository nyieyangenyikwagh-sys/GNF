import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.billingCarePlus
export default async function BillingCarePlusPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="Billing Care Plus" title="Full-service billing support." description="A dedicated route for Billing Care Plus information and resources." /> }
