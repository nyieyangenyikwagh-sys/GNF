export interface BlogPost {
  id: string
  slug: string
  title: string
  titleFr: string
  excerpt: string
  excerptFr: string
  content: string
  contentFr: string
  date: string
  author: string
  category: string
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ohip-billing-best-practices',
    title: 'OHIP Billing Best Practices for 2024',
    titleFr: 'Meilleures pratiques de facturation RHOP pour 2024',
    excerpt: 'Learn the latest OHIP billing guidelines and how to optimize your claims submission process.',
    excerptFr: 'Découvrez les dernières directives de facturation RHOP et comment optimiser votre processus de soumission de réclamations.',
    content: `# OHIP Billing Best Practices for 2024

OHIP billing requires careful attention to detail and adherence to the latest guidelines. Here are the key practices to ensure compliance and maximize your claim acceptance rates.

## Key Changes for 2024

1. **Fee Schedule Updates** - New procedure codes and fee adjustments
2. **Documentation Requirements** - Enhanced requirements for complex cases
3. **Electronic Submission** - Complete transition to electronic claims

## Tips for Success

- Maintain detailed patient records
- Verify coverage before treatment
- Submit claims within the required timeframe
- Keep documentation for audits`,
    contentFr: `# Meilleures pratiques de facturation RHOP pour 2024

La facturation RHOP nécessite une attention particulière au détail et le respect des dernières directives.

## Changements clés pour 2024

1. **Mises à jour du barème** - Nouveaux codes de procédure et ajustements tarifaires
2. **Exigences de documentation** - Exigences accrues pour les cas complexes
3. **Soumission électronique** - Transition complète vers les réclamations électroniques`,
    date: '2024-01-15',
    author: 'Healthcare Team',
    category: 'OHIP',
  },
  {
    id: '2',
    slug: 'msp-claims-denied-why',
    title: 'Why Are My MSP Claims Being Denied?',
    titleFr: 'Pourquoi mes réclamations RSP sont-elles rejetées?',
    excerpt: 'Common reasons for MSP claim denials and how to prevent them in your practice.',
    excerptFr: 'Raisons courantes du rejet des réclamations RSP et comment les prévenir dans votre pratique.',
    content: `# Why Are My MSP Claims Being Denied?

MSP claim denials can impact your practice\'s revenue. Let\'s explore the common reasons and solutions.

## Top Reasons for Denials

1. **Incomplete Information** - Missing provider details
2. **Coverage Issues** - Patient not eligible
3. **Duplicate Claims** - Previously submitted claims
4. **Coding Errors** - Incorrect procedure codes

## Prevention Strategies

- Verify coverage status
- Double-check all patient information
- Use standardized coding
- Submit electronically for faster processing`,
    contentFr: `# Pourquoi mes réclamations RSP sont-elles rejetées?

Les rejets de réclamations RSP peuvent affecter les revenus de votre pratique.

## Principales raisons de rejet

1. **Informations incomplètes** - Détails du prestataire manquants
2. **Problèmes de couverture** - Patient non admissible
3. **Réclamations en double** - Réclamations précédemment soumises`,
    date: '2024-01-20',
    author: 'Billing Experts',
    category: 'MSP',
  },
  {
    id: '3',
    slug: 'ramq-billing-updates-quebec',
    title: 'RAMQ Billing Updates and Compliance Guide',
    titleFr: 'Mises à jour de facturation RAMQ et guide de conformité',
    excerpt: 'Latest RAMQ updates for Quebec healthcare providers. Stay compliant with new regulations.',
    excerptFr: 'Dernières mises à jour RAMQ pour les fournisseurs de soins de santé du Québec.',
    content: `# RAMQ Billing Updates and Compliance Guide

Quebec\'s healthcare system requires specific billing compliance. Here\'s what you need to know.

## Recent RAMQ Updates

1. **Payment Processing** - Updated payment schedules
2. **Documentation** - Enhanced audit requirements
3. **Penalties** - Updated non-compliance penalties

## Best Practices

- Maintain bilingual records
- Keep current with RAMQ updates
- Use approved submission methods`,
    contentFr: `# Mises à jour de facturation RAMQ et guide de conformité

Le système de santé du Québec nécessite une conformité de facturation spécifique.

## Récentes mises à jour RAMQ

1. **Traitement des paiements** - Calendriers de paiement mis à jour
2. **Documentation** - Exigences d'audit améliorées`,
    date: '2024-01-25',
    author: 'Quebec Healthcare Team',
    category: 'RAMQ',
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getLatestBlogPosts(limit: number = 3): BlogPost[] {
  return getAllBlogPosts().slice(0, limit)
}
