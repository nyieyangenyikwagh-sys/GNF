import RouteScaffold from '@/components/route-scaffold'
import { routeMetadata } from '@/lib/route-metadata'
export const metadata = routeMetadata.billingCarePlus
export default async function BillingCarePlusPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return <RouteScaffold locale={locale} eyebrow="Billing Care Plus" title="Full-service billing support." description="Delegate manual claim preparation, quality review, submissions, exception follow-up, and reconciliation while retaining clear oversight." /> }
