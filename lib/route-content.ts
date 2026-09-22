export type ContentSection = { title: string; body: string; bullets?: string[] }
export type ContentLink = { title: string; description: string; href: string }
export type ContentFaq = { question: string; answer: string }
export type RouteContent = {
  spotlight?: { title: string; body: string; points?: string[] }
  sections: ContentSection[]
  links?: ContentLink[]
  faq?: ContentFaq[]
}

export const routeContent: Record<string, RouteContent> = {
  'Medical billing services for every practice.': {
    sections: [
      { title: 'Billing Care ', body: ' Hospital Specialists', bullets: ['I need help getting my daily bills to the MOH (I use paper)', 'I have difficulty managing my errors', 'I feel like I’m missing revenue opportunities'] },
      { title: 'Practice Care', body: 'Family doctors', bullets: ['I have difficulty managing my errors', 'I feel like I’m missing revenue opportunities', 'I am not realizing my bonus potential'] },
      { title: 'Billing Care Plus', body: 'Specialists/Family Doctors on EMRs', bullets: ['I have billing integrated into my EMR', 'I have difficulty managing my errors', 'I feel like I’m missing revenue opportunities', 'I am not realizing my bonus potential'] },
      { title: 'Practice Care Plus', body: 'Specialists/Family Doctors on EMRs', bullets: ['I have difficulty managing my errors', 'I feel like I’m missing revenue opportunities', 'I am not realizing my bonus potential'] },
         ],
    faq: [
      { question: 'Can a clinic keep its current EMR workflow?', answer: 'The appropriate workflow depends on the EMR and practice setup. The first step is to map how claims are created, reviewed, submitted, and corrected today.' },
      { question: 'Is full-service billing the only option?', answer: 'No. A practice can use focused support for insights, submissions, corrections, reconciliation, or uninsured-service organization.' },
      { question: 'What should a practice prepare for an assessment?', answer: 'A basic overview of the current workflow, team responsibilities, common claim issues, and reporting needs is usually enough to begin.' },
    ],
  },
  'Practice insight for primary care teams.': {
    spotlight: { title: 'Turn practice data into decisions your team can use.', body: 'Practice Care connects billing activity, roster information, incentives, and follow-up in a practical review process for primary-care teams.', points: ['Billing opportunity review', 'Roster and panel visibility', 'Bonus tracking', 'Practice reporting'] },
    sections: [
      { title: 'Find the story behind the numbers', body: 'Organized reporting helps physicians understand where revenue comes from, which items need attention, and how recurring billing patterns affect the practice.', bullets: ['Payment and activity summaries', 'Missed-opportunity review', 'Clear monthly priorities'] },
      { title: 'Keep rosters and panels current', body: 'A consistent roster-review process makes changes, outside-use questions, and patient follow-up easier to see and assign across the team.', bullets: ['Panel-status review', 'Patient follow-up lists', 'Defined administrative ownership'] },
      { title: 'Track premiums and incentives', body: 'Bring eligible activities, documentation needs, and approaching deadlines into one review rhythm so opportunities are less likely to be overlooked.' },
      { title: 'Move from insight to action', body: 'Reports are paired with practical next steps. The team can review recommendations, approve appropriate work, and carry improvements into the next cycle.' },
    ],
    links: [
      { title: 'Discover Practice Care', description: 'Explore the Ontario-focused reporting and optimization workflow.', href: '/solutions/ohip-billing/discover-practice-care' },
      { title: 'Patient Care', description: 'Connect roster insight with patient recall workflows.', href: '/solutions/ohip-billing/patient-care' },
    ],
  },
  'Billing workflow support for busy practices.': {
    spotlight: { title: 'Take the friction out of everyday claim management.', body: 'Billing Care supports practices that use an EMR and want a more dependable process for reviewing, submitting, correcting, and tracking claims.', points: ['EMR-based review', 'Claim submission', 'Error correction', 'Performance visibility'] },
    sections: [
      { title: 'Start with a billing workflow review', body: 'Map how claims move from documentation to submission, identify common delays, and establish a clear handoff between physicians, staff, and billing support.' },
      { title: 'Submit with fewer loose ends', body: 'A structured pre-submission check helps surface missing information and unusual items before they become avoidable rework.', bullets: ['Documentation checkpoints', 'Submission readiness review', 'Visible approval steps'] },
      { title: 'Resolve errors and resubmit', body: 'Rejected or held claims enter a defined correction queue with ownership, supporting context, and follow-through to the next result.' },
      { title: 'See what is happening', body: 'Regular reporting gives the practice a useful view of submissions, corrections, outstanding items, and recurring issues without requiring staff to rebuild the picture manually.' },
    ],
    links: [
      { title: 'Billing Care Plus', description: 'See a more hands-on option for manual billing workflows.', href: '/billing-services/billing-care-plus' },
      { title: 'Practice Care', description: 'Add deeper practice reporting and operational insight.', href: '/billing-services/practice-care' },
    ],
  },
  'Full-service billing support.': {
    spotlight: { title: 'A billing team for the work that cannot stay on your desk.', body: 'Billing Care Plus combines hands-on claim preparation with review, submission, exception management, and reporting for practices that need operational support.', points: ['Manual source entry', 'Quality review', 'Third-party workflows', 'Reconciliation'] },
    sections: [
      { title: 'Turn source records into ready claims', body: 'Day sheets and other approved source information are organized and entered through a consistent process, reducing the burden on physicians and clinic staff.' },
      { title: 'Review before submission', body: 'Claims receive a practical completeness and consistency check before submission, with questions routed back through an agreed approval process.', bullets: ['Source-document handling', 'Pre-submission checks', 'Physician approval controls'] },
      { title: 'Support complex billing paths', body: 'Create separate, visible workflows for workers’ compensation, third-party insurers, direct patient billing, or other items that do not fit the standard insured-claim path.' },
      { title: 'Keep the practice informed', body: 'Paid, outstanding, corrected, and follow-up items are summarized so the practice retains visibility while delegating the daily work.' },
    ],
    links: [
      { title: 'Specialist Billing', description: 'Explore full-service workflows shaped for specialist practices.', href: '/solutions/ohip-billing/ohip-billing-services-for-specialists' },
      { title: 'Hospital and Group Billing', description: 'Coordinate billing across larger clinical teams.', href: '/solutions/ohip-billing/hospital-and-group-billing-services' },
    ],
  },
  'A clearer uninsured-services workflow.': {
    spotlight: { title: 'Make uninsured services easier for staff and patients.', body: 'Create one understandable process for identifying services, communicating fees, issuing invoices, collecting payments, and maintaining records.', points: ['Service identification', 'Patient communication', 'Invoices and receipts', 'Activity reporting'] },
    sections: [
      { title: 'Define the uninsured-service path', body: 'Separate uninsured activities from insured claims at the start, with clear service categories, documentation expectations, and staff responsibilities.' },
      { title: 'Create a consistent payment experience', body: 'Standardize how invoices, payment options, receipts, and outstanding balances are handled so patients receive clear information and staff follow the same steps.', bullets: ['Transparent fee communication', 'Secure payment handoff', 'Invoice and receipt records'] },
      { title: 'Support setup and daily administration', body: 'A practical onboarding plan can cover fee schedules, internal roles, patient materials, reporting needs, and the recurring tasks required to keep the program current.' },
      { title: 'Communicate before questions become friction', body: 'Plain-language notices and repeatable follow-up help patients understand which services are uninsured, what options are available, and what happens next.' },
    ],
    faq: [
      { question: 'What can an uninsured-services review cover?', answer: 'It can examine service categories, documentation, patient communication, invoicing, payment handling, outstanding balances, and reporting.' },
      { question: 'Can the workflow fit an existing clinic process?', answer: 'Yes. The recommended starting point is the clinic’s current systems, staff roles, and patient touchpoints.' },
    ],
  },
  'Billing solutions shaped around your province.': {
    sections: [
      { title: 'OHIP billing in Ontario', body: 'A dependable Ontario workflow connects accurate documentation with claim submission, error management, remittance review, and follow-up. Primary-care teams may also need support that considers FHO workflows, while specialists need processes that reflect their own documentation and submission patterns.', bullets: ['Claims submission, correction, and reconciliation', 'Primary-care and FHO workflow support', 'Specialist billing and uninsured-services process support'] },
      { title: 'MSP billing in British Columbia', body: 'BC practices benefit from a clear claims process that makes exceptions visible, aligns payment information with submitted work, and keeps billing administration from becoming a recurring interruption.', bullets: ['Claims submission and reconciliation', 'Billing-error follow-up', 'Revenue and administrative workflow review'] },
      { title: 'AHCIP billing in Alberta', body: 'Alberta practices need a claims-management process that can surface exceptions, support payment review, and adapt as the practice considers different payment arrangements.', bullets: ['Claims and error handling', 'Payment and reconciliation workflows', 'Practice administration and payment-model considerations'] },
      { title: 'Manitoba and Québec', body: 'Manitoba and Québec each require their own billing approach. Manitoba practices should use a workflow tailored to their provincial environment. In Québec, RAMQ is the Régie de l’assurance maladie du Québec; its physician-billing processes should be treated as their own operational context, not as an OHIP or MSP variant.', bullets: ['Dedicated Manitoba billing support', 'Dedicated RAMQ/Québec billing support', 'A structured path for other provincial environments'] },
    ],
    links: [
      { title: 'Discover Practice Care', description: 'See how billing information can support Ontario primary-care operations.', href: '/solutions/ohip-billing/discover-practice-care' },
      { title: 'Transitioning to FHO', description: 'Plan the billing and workflow side of a transition.', href: '/solutions/ohip-billing/transitioning-to-fho' },
      { title: 'Billing Services for Specialists', description: 'Explore specialist-focused OHIP billing support.', href: '/solutions/ohip-billing/ohip-billing-services-for-specialists' },
      { title: 'Physician Transition Services', description: 'Prepare billing operations for a change in practice.', href: '/solutions/ohip-billing/physician-transition-services' },
      { title: 'Patient Care', description: 'Organize roster and patient-care workflow support.', href: '/solutions/ohip-billing/patient-care' },
      { title: 'Hospital and Group Billing Services', description: 'Coordinate OHIP billing across hospital and multi-provider teams.', href: '/solutions/ohip-billing/hospital-and-group-billing-services' },
      { title: 'Manitoba Billing', description: 'Visit the dedicated Manitoba route.', href: '/solutions/other-provinces/manitoba-billing' },
      { title: 'RAMQ Billing', description: 'Visit the dedicated Québec/RAMQ route.', href: '/solutions/other-provinces/ramq-billing' },
    ],
  },
  'OHIP billing support for Ontario practices.': {
    spotlight: { title: 'Keep more of your OHIP workflow visible and moving.', body: 'Connect claim preparation, submissions, error resolution, payment review, and practice reporting in one Ontario-focused operating rhythm.', points: ['OHIP submissions', 'Error reconciliation', 'Roster oversight', 'Revenue reporting'] },
    sections: [
      { title: 'Manage the complete claim lifecycle', body: 'Build a process that connects documentation, claim review, submission, exception handling, corrected claims, and remittance reconciliation.', bullets: ['Submission readiness checks', 'Rejected and held claim queues', 'Payment follow-through'] },
      { title: 'Make errors actionable', body: 'Turn error messages into assigned tasks with the documentation and context required to correct and resubmit the claim.' },
      { title: 'Understand billing performance', body: 'Regular reporting can highlight payment drivers, outstanding work, recurring exceptions, and areas where the practice should investigate further.' },
      { title: 'Support different Ontario practice models', body: 'Primary care, FHO teams, specialists, and hospital groups need different workflows. The service model should reflect how care is documented and delivered in each setting.' },
    ], links: [
    { title: 'Discover Practice Care', description: 'Primary-care insight and workflow support.', href: '/solutions/ohip-billing/discover-practice-care' },
    { title: 'Transitioning to FHO', description: 'Plan the operational side of a transition.', href: '/solutions/ohip-billing/transitioning-to-fho' },
    { title: 'Billing Services for Specialists', description: 'Specialist-oriented billing support.', href: '/solutions/ohip-billing/ohip-billing-services-for-specialists' },
    { title: 'Physician Transition Services', description: 'Support for a practice move or new role.', href: '/solutions/ohip-billing/physician-transition-services' },
    { title: 'Patient Care', description: 'Roster and patient-care workflows.', href: '/solutions/ohip-billing/patient-care' },
    { title: 'Hospital and Group Billing Services', description: 'Coordinated workflows for hospital and group billing.', href: '/solutions/ohip-billing/hospital-and-group-billing-services' },
  ] },
  'Discover Practice Care.': {
    spotlight: { title: 'See where primary-care revenue and workflow connect.', body: 'Practice Care organizes complex funding activity into focused reports and practical follow-up for Ontario primary-care teams.', points: ['Out-of-basket review', 'Premium tracking', 'Roster insight', 'Monthly action plans'] },
    sections: [
      { title: 'Review out-of-basket activity', body: 'Compare billing patterns, surface questions, and identify documentation or workflow areas that deserve a closer look without asking physicians to analyze raw claim data.' },
      { title: 'Keep premiums and bonuses in view', body: 'Track progress, relevant activity, and approaching milestones through a repeatable review rather than a year-end scramble.' },
      { title: 'Understand the roster picture', body: 'Make panel changes, outside-use patterns, enrollment questions, and patient follow-up easier for the team to discuss and assign.', bullets: ['Roster movement review', 'Outside-use visibility', 'Follow-up ownership'] },
      { title: 'Build a monthly improvement rhythm', body: 'Translate reporting into a short list of approved actions, review the result, and use what the team learns to improve the next cycle.' },
    ],
  },
  'Transitioning to FHO.': {
    spotlight: { title: 'Plan the move to FHO with the operational picture in view.', body: 'A structured assessment helps physicians understand workflow, roster, reporting, and billing implications before committing to a transition.', points: ['Readiness review', 'Roster preparation', 'Workflow planning', 'Post-transition support'] },
    sections: [
      { title: 'Understand the model change', body: 'Review how the current FHG or fee-for-service workflow differs from the proposed FHO environment, including the administrative responsibilities the team will inherit.' },
      { title: 'Assess practice readiness', body: 'Look at roster information, staffing, documentation habits, reporting needs, and existing billing issues before setting the transition sequence.', bullets: ['Current-state workflow map', 'Roster and data review', 'Responsibility planning'] },
      { title: 'Prepare the transition steps', body: 'Create a practical sequence for applications, communications, internal process changes, and staff preparation, with clear ownership for each milestone.' },
      { title: 'Stabilize the new workflow', body: 'After transition, monitor submissions, roster changes, premiums, and team handoffs so questions are addressed while the new operating rhythm is still forming.' },
    ],
    faq: [{ question: 'Does every practice benefit from the same transition plan?', answer: 'No. The appropriate plan depends on the current model, roster, team capacity, systems, and the physician’s operational priorities.' }],
  },
  'OHIP billing services for specialists.': {
    spotlight: { title: 'Specialist billing deserves a specialist workflow.', body: 'Coordinate manual entries, specialty-specific documentation, rejected claims, third-party billing, and payment follow-up without losing visibility.', points: ['Manual claim support', 'Specialty-aware review', 'Third-party claims', 'Accounts receivable'] },
    sections: [
      { title: 'Start with how your specialty works', body: 'Clinical setting, referral context, schedules, procedures, and source documentation shape the billing process. The workflow should reflect that reality.' },
      { title: 'Handle the work end to end', body: 'Organize approved source records, prepare claims, complete quality checks, submit, and follow exceptions through correction and resubmission.', bullets: ['Day-sheet and source entry', 'Pre-submission review', 'Rejected-claim follow-up'] },
      { title: 'Separate non-standard claims', body: 'Give WSIB, federal programs, university coverage, private insurers, and direct patient accounts their own documented paths where applicable.' },
      { title: 'Report at the level you need', body: 'Provide physicians and group leaders with visibility into paid, outstanding, corrected, and aging items without burying important decisions in raw transactions.' },
    ],
  },
  'Physician transition services.': {
    spotlight: { title: 'Protect continuity through a practice transition.', body: 'Retirement, a sale, a new role, or locum coverage creates clinical and administrative handoffs that benefit from early, structured planning.', points: ['Transition roadmap', 'Practice information review', 'Stakeholder communication', 'Billing continuity'] },
    sections: [
      { title: 'Clarify the transition goal', body: 'Define whether the priority is retirement, a practice sale, temporary coverage, relocation, or joining a new setting, then identify the decisions and dependencies involved.' },
      { title: 'Prepare practice information', body: 'Organize the operational, financial, roster, and workflow information required for informed conversations while keeping appropriate professional advice in scope.' },
      { title: 'Coordinate people and requirements', body: 'Plan communication with group colleagues, staff, patients, relevant organizations, and professional advisers so responsibilities and timing are clear.', bullets: ['Stakeholder communication plan', 'Roster and record handoffs', 'Access and responsibility checklist'] },
      { title: 'Maintain billing continuity', body: 'Assign ownership for claims in progress, rejected items, remittance review, outstanding balances, and reporting through the effective transition date.' },
    ],
  },
  'Patient care and practice workflows.': {
    spotlight: { title: 'Create a dependable rhythm for rosters and recalls.', body: 'Bring patient-panel maintenance and recall administration into a clear workflow that supports timely follow-up without overwhelming clinic staff.', points: ['Roster maintenance', 'Recall lists', 'Patient outreach', 'Completion tracking'] },
    sections: [
      { title: 'Keep the patient panel current', body: 'Review enrollment status, identify records requiring attention, and assign the administrative work needed to maintain accurate roster information.' },
      { title: 'Build recall workflows by need', body: 'Define eligible patient groups, timing, outreach steps, booking handoffs, and completion rules for each recall program.', bullets: ['Patient identification criteria', 'Outreach and booking steps', 'Documented completion status'] },
      { title: 'Give staff a manageable queue', body: 'Replace disconnected lists with prioritized work that shows who needs contact, what has already happened, and which cases require clinical input.' },
      { title: 'Review outcomes and improve', body: 'Use regular summaries to understand response, outstanding work, and process bottlenecks, then adjust the next recall cycle.' },
    ],
  },
  'Hospital and group billing services.': {
    spotlight: { title: 'One coordinated billing view for complex clinical teams.', body: 'Hospital departments and specialist groups need processes that handle provider volume, varied documentation, exceptions, and leadership reporting across the whole team.', points: ['Multi-provider workflows', 'Centralized exceptions', 'Group reconciliation', 'Leadership reporting'] },
    sections: [
      { title: 'Design around the department', body: 'Map providers, clinical settings, source documentation, submission routes, and internal approvals before standardizing the billing workflow.' },
      { title: 'Support multiple specialties', body: 'Create consistent controls while preserving the documentation and billing differences that matter to emergency medicine, pediatrics, anesthesia, internal medicine, and other specialties.' },
      { title: 'Centralize exception work', body: 'Route missing information, rejected claims, and follow-up to a visible queue with clear ownership instead of relying on individual memory or inboxes.', bullets: ['Provider-level task ownership', 'Supporting-document requests', 'Correction and resubmission tracking'] },
      { title: 'Give leaders a useful view', body: 'Summarize activity, exceptions, reconciliation, and outstanding priorities at group level while retaining the detail needed to investigate individual items.' },
    ], links: [
    { title: 'OHIP Billing', description: 'Explore Ontario billing workflow support for practices and groups.', href: '/solutions/ohip-billing' },
    { title: 'Billing Care Plus', description: 'See full-service support for high-touch billing administration.', href: '/billing-services/billing-care-plus' },
  ], faq: [
    { question: 'Can a group use its existing clinical systems?', answer: 'The starting point is to understand the current systems and handoffs, then design a billing process around the workflow the group already relies on.' },
    { question: 'What does a group review include?', answer: 'It can cover the submission process, exception ownership, documentation handoffs, remittance review, and the reporting leaders need to make informed decisions.' },
  ] },
  'MSP billing support for BC practices.': {
    spotlight: { title: 'A clearer MSP billing workflow for BC physicians.', body: 'Bring claims, rejected items, payment information, and practice reporting into a consistent process that works with your established clinical systems.', points: ['MSP claim review', 'Error correction', 'Payment reconciliation', 'Practice reporting'] },
    sections: [
      { title: 'Prepare and review MSP claims', body: 'Create a dependable handoff from clinical documentation to claim readiness, with appropriate checks before work enters the submission queue.' },
      { title: 'Resolve rejected and held items', body: 'Make exceptions visible, assign the information required, and track corrected claims through resubmission rather than letting them disappear into an informal backlog.', bullets: ['Exception categorization', 'Correction ownership', 'Resubmission follow-through'] },
      { title: 'Reconcile payment information', body: 'Compare submitted work with payment results and flag discrepancies or recurring patterns that warrant further investigation.' },
      { title: 'Work with the practice you already have', body: 'Whether the team relies primarily on an EMR or includes approved paper-based steps, the billing process should complement daily operations and reduce duplicate work.' },
    ],
    faq: [{ question: 'Can MSP support work with an existing EMR?', answer: 'The workflow can be designed around the practice’s current systems after reviewing how claims, errors, and payment information are handled today.' }],
  },
  'AHCIP billing support for Alberta practices.': {
    spotlight: { title: 'Connect the full AHCIP claim journey.', body: 'Support Alberta practices from claim preparation and submission through error correction, payment review, and operational reporting.', points: ['Claim preparation', 'AHCIP submissions', 'Error reconciliation', 'Payment insight'] },
    sections: [
      { title: 'Organize claim inputs', body: 'Define how approved billing information reaches the submission workflow, who reviews questions, and what must be complete before a claim moves forward.' },
      { title: 'Manage submissions and exceptions', body: 'Keep submitted, rejected, held, and corrected items visible so each next action has an owner and a follow-up date.', bullets: ['Submission-status review', 'Error investigation', 'Correction and resubmission'] },
      { title: 'Understand payment activity', body: 'Reconcile results against submitted work and use regular summaries to give physicians and managers a clearer view of revenue activity.' },
      { title: 'Prepare for operational change', body: 'When staffing, systems, or payment arrangements change, document new responsibilities and reporting needs before the practice is relying on the new process.' },
    ],
  },
  'Billing support beyond Ontario, BC, and Alberta.': {
    spotlight: { title: 'Province-aware support without a one-size-fits-all process.', body: 'Start with the rules, systems, documentation, and team responsibilities in your province, then build a billing workflow around the practice.', points: ['Local workflow review', 'Full-service options', 'Error management', 'Financial visibility'] },
    sections: [
    { title: 'Province-aware support begins with the local workflow', body: 'Provincial billing systems are not interchangeable. A useful engagement starts by understanding how claims, records, payment information, and administrative responsibilities are handled in that practice.' },
    { title: 'Dedicated Manitoba and Québec treatment', body: 'Manitoba billing and Québec RAMQ billing each receive their own route and operational discussion. Other provincial practices can begin with a workflow assessment rather than a one-size-fits-all process.', bullets: ['Manitoba-specific workflow support', 'RAMQ/Québec-specific workflow support', 'A practical starting point for other provinces'] },
    { title: 'Choose the right level of support', body: 'A practice may need focused error management, hands-on submissions, payment reconciliation, reporting, or a coordinated combination of services.', bullets: ['Workflow assessment', 'Submission support', 'Exception and payment review'] },
    { title: 'Keep financial activity visible', body: 'Use practical summaries to understand submitted work, payment results, outstanding questions, and recurring process issues.' },
  ], links: [
    { title: 'Manitoba Billing', description: 'Explore the Manitoba billing workflow page.', href: '/solutions/other-provinces/manitoba-billing' },
    { title: 'RAMQ Billing', description: 'Explore the Québec RAMQ workflow page.', href: '/solutions/other-provinces/ramq-billing' },
  ] },
  'Billing support for Manitoba practices.': { sections: [
    { title: 'A Manitoba workflow should stand on its own', body: 'Treat Manitoba billing as its own practice process: document the local workflow, identify claim and payment handoffs, and make exception follow-up visible.' },
    { title: 'Bring order to daily administration', body: 'A simple routine for submission review, documentation checks, and payment reconciliation can reduce uncertainty for physicians and clinic staff.', bullets: ['Claims and documentation workflow review', 'Exception and follow-up ownership', 'Payment and revenue reporting process'] },
  ] },
  'RAMQ billing support for Québec practices.': { sections: [
    { title: 'Work in the RAMQ context', body: 'RAMQ refers to Québec’s Régie de l’assurance maladie du Québec. Its physician-billing administration should be approached as a Québec-specific workflow, with clear documentation, submission, correction, and payment-review steps.' },
    { title: 'Keep the process usable for the practice team', body: 'Make responsibilities, records, and follow-up visible so the billing process supports the team’s day-to-day work rather than creating a separate administrative burden.', bullets: ['Québec-specific workflow mapping', 'Claims exception and correction process', 'Payment reconciliation and practice reporting'] },
  ] },
}
