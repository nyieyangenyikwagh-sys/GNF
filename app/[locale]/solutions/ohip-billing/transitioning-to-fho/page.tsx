import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.transitioningToFho
export default async function TransitioningToFhoPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="OHIP Billing · FHO" title="Transitioning to FHO." description="A dedicated route for physicians considering an FHO transition." /> }
