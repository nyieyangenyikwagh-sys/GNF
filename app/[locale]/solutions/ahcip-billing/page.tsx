import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.ahcipBilling
export default async function AhcipBillingPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="AHCIP Billing" title="AHCIP billing support for Alberta practices." description="Coordinate Alberta claim preparation, AHCIP submissions, error correction, payment review, and operational reporting." /> }
