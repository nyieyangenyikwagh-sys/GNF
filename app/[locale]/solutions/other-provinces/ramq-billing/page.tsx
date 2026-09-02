import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.ramqBilling
export default async function RamqBillingPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="RAMQ Billing" title="RAMQ billing support for Québec practices." description="A dedicated route for Régie de l’assurance maladie du Québec billing workflows." /> }
