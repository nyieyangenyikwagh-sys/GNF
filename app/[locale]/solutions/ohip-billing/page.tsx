import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.ohipBilling
export default async function OhipBillingPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="OHIP Billing" title="OHIP billing support for Ontario practices." description="Connect OHIP claim review, submissions, error resolution, roster oversight, and payment reporting in one dependable workflow." /> }
