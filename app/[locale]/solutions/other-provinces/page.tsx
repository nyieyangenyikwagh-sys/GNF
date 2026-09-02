import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.otherProvinces
export default async function OtherProvincesPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="Other Provinces" title="Billing support beyond Ontario, BC, and Alberta." description="A dedicated overview for Manitoba, Québec, and other provincial billing environments." /> }
