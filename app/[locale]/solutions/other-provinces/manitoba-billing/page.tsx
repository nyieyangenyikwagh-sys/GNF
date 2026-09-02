import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.manitobaBilling
export default async function ManitobaBillingPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="Manitoba Billing" title="Billing support for Manitoba practices." description="A dedicated route for Manitoba billing workflows." /> }
