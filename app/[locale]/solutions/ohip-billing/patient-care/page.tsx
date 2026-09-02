import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.patientCare
export default async function PatientCarePage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="OHIP Billing · Patient Care" title="Patient care and practice workflows." description="A dedicated route for roster and patient-care workflow support." /> }
