import type { Metadata } from 'next'

export const routeMetadata: Record<string, Metadata> = {
  billingServices: { title: 'Medical Billing Services | GNF Billing', description: 'Medical billing, claims management, practice insight, and uninsured-services support for Canadian practices.' },
  practiceCare: { title: 'Practice Care | GNF Billing', description: 'Practice insight and primary-care billing workflow support for Canadian clinic teams.' },
  billingCare: { title: 'Billing Care | GNF Billing', description: 'Claim submission, correction, EMR workflow, and billing-management support for practices.' },
  billingCarePlus: { title: 'Billing Care Plus | GNF Billing', description: 'Full-service medical billing support, including manual workflow and reconciliation assistance.' },
  uninsuredMedicalServices: { title: 'Uninsured Medical Services | GNF Billing', description: 'Organize documentation, patient handoffs, and follow-up for uninsured medical services.' },
  solutions: { title: 'Provincial Billing Solutions | GNF Billing', description: 'OHIP, MSP, AHCIP, Manitoba, and RAMQ billing workflow support for Canadian practices.' },
  ohipBilling: { title: 'OHIP Billing Support | GNF Billing', description: 'Ontario billing workflow, claims management, reconciliation, and practice support.' },
  discoverPracticeCare: { title: 'Discover Practice Care | GNF Billing', description: 'See how Practice Care supports primary-care billing insight and workflow review.' },
  transitioningToFho: { title: 'Transitioning to FHO | GNF Billing', description: 'Plan the operational and billing workflow side of an FHO transition.' },
  specialistBilling: { title: 'OHIP Billing Services for Specialists | GNF Billing', description: 'Specialist-oriented OHIP billing workflow, claim correction, and remittance support.' },
  physicianTransition: { title: 'Physician Transition Services | GNF Billing', description: 'Support billing continuity and administrative handoffs during a practice transition.' },
  patientCare: { title: 'Patient Care Workflows | GNF Billing', description: 'Roster, recall, documentation, and billing-related workflow support for Ontario practices.' },
  mspBilling: { title: 'MSP Billing Support | GNF Billing', description: 'BC MSP claims submission, error follow-up, payment reconciliation, and workflow support.' },
  ahcipBilling: { title: 'AHCIP Billing Support | GNF Billing', description: 'Alberta claims management, payment reconciliation, and practice administration support.' },
  otherProvinces: { title: 'Other Provincial Billing Support | GNF Billing', description: 'Dedicated Manitoba and Québec RAMQ billing workflow support, plus other provinces.' },
  manitobaBilling: { title: 'Manitoba Billing Support | GNF Billing', description: 'Workflow, payment reconciliation, and administrative support for Manitoba practices.' },
  ramqBilling: { title: 'RAMQ Billing Support | GNF Billing', description: 'Québec RAMQ physician-billing workflow, correction, payment-review, and reporting support.' },
}
