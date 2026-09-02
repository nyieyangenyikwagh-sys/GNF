import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.mspBilling
export default async function MspBillingPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="MSP Billing" title="MSP billing support for BC practices." description="A dedicated route for Medical Services Plan billing workflows." /> }
