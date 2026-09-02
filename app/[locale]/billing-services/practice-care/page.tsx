import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.practiceCare
export default async function PracticeCarePage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="Practice Care" title="Practice insight for primary care teams." description="A dedicated route for Practice Care information and resources." /> }
