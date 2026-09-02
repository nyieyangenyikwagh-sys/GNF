import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.solutions
export default async function SolutionsPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="Solutions" title="Billing solutions shaped around your province." description="A dedicated overview of provincial billing support." /> }
