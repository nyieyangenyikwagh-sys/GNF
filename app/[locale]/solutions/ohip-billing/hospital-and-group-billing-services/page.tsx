import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'

export const metadata = routeMetadata.hospitalGroupBilling

export default async function HospitalAndGroupBillingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <RouteScaffold locale={locale} eyebrow="OHIP Billing - Hospitals & Groups" title="Hospital and group billing services." description="Coordinate multi-provider submissions, documentation handoffs, centralized exceptions, reconciliation, and leadership reporting." />
}
