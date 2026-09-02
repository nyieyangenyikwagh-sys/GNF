import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.discoverPracticeCare
export default async function DiscoverPracticeCarePage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="OHIP Billing · Practice Care" title="Discover Practice Care." description="A dedicated route for Practice Care in Ontario." /> }
