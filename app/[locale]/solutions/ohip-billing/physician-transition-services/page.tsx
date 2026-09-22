import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.physicianTransition
export default async function PhysicianTransitionServicesPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="OHIP Billing - Transition Services" title="Physician transition services." description="Plan retirement, a sale, locum coverage, or a new practice role while protecting administrative and billing continuity." /> }
