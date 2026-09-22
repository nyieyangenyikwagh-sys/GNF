import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.practiceCare
export default async function PracticeCarePage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="Practice Care" title="Practice insight for primary care teams." description="Bring billing activity, roster information, incentives, and reporting into a clearer monthly workflow for your primary-care team." /> }
