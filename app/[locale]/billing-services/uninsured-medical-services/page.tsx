import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.uninsuredMedicalServices
export default async function UninsuredMedicalServicesPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="Uninsured Medical Services" title="A clearer uninsured-services workflow." description="A dedicated route for uninsured medical services support." /> }
