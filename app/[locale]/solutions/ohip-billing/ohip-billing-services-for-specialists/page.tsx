import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.specialistBilling
export default async function OhipSpecialistBillingPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="OHIP Billing · Specialists" title="OHIP billing services for specialists." description="A dedicated route for specialist billing support." /> }
