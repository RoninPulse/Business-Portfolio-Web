export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const homeStats: StatItem[] = [
  { id: 'projects', value: 120, suffix: '+', label: 'Projects Shipped', description: 'Enterprise web apps, custom software, and mobile platforms delivered on time.' },
  { id: 'clients', value: 60, suffix: '+', label: 'Satisfied Global Clients', description: 'Partners spanning North America, Europe, Australia, and Asia.' },
  { id: 'years', value: 8, suffix: '+', label: 'Years of Technical Craft', description: 'Continuous engineering discipline, modern architecture, and domain mastery.' },
  { id: 'uptime', value: 99.9, suffix: '%', label: 'Average SLA Uptime', description: 'Rock-solid reliability across high-concurrency cloud deployments.' },
];

export const marketingChartData = {
  monthlyTraffic: [
    { month: 'Jan', organic: 14000, paid: 8200 },
    { month: 'Feb', organic: 18500, paid: 11400 },
    { month: 'Mar', organic: 24200, paid: 14800 },
    { month: 'Apr', organic: 31000, paid: 17200 },
    { month: 'May', organic: 42800, paid: 21500 },
    { month: 'Jun', organic: 58400, paid: 26900 },
  ],
  leadGeneration: [
    { channel: 'Search (SEO)', leads: 420, conversion: '4.8%' },
    { channel: 'Meta Funnels', leads: 380, conversion: '3.9%' },
    { channel: 'Google P-Max', leads: 310, conversion: '4.2%' },
    { channel: 'Email Automations', leads: 220, conversion: '6.4%' },
  ],
  overallRoi: {
    averageRoas: '4.8x',
    trafficLift: '+240%',
    leadCostReduction: '-38%',
    sampleNote: 'Aggregated sample performance across client benchmark portfolios.',
  },
};

export const pricingTiers = [
  {
    id: 'starter',
    name: 'Starter Sprint',
    price: 'From $1,500',
    frequency: 'Per project milestone',
    highlighted: false,
    badge: 'Fast Launch',
    description: 'Ideal for early-stage startups and established businesses seeking a rapid, high-impact web or MVP launch.',
    features: [
      'Bespoke Next.js frontend with sub-second load times',
      'Mobile-first responsive layout (360px - 4K)',
      'Headless CMS setup for effortless content edits',
      'Full Technical SEO & Core Web Vitals optimization',
      'Contact form with rate-limiting & auto-responder',
      '30 days of post-launch hypercare & warranty',
    ],
    ctaText: 'Launch Starter Sprint',
  },
  {
    id: 'growth',
    name: 'Growth Engine',
    price: 'From $3,800',
    frequency: 'Per project / monthly sprint',
    highlighted: true,
    badge: 'Most Popular',
    description: 'Comprehensive custom software, e-commerce, or mobile app development paired with high-converting user experience.',
    features: [
      'Everything in Starter Sprint',
      'Custom backend APIs (Node.js/Go) & database architecture',
      'Interactive 3D / WebGL canvas effects & micro-interactions',
      'Authentication, role-based access control & billing integration',
      'Mobile app build (iOS & Android via Flutter/React Native)',
      'Digital marketing attribution & GA4 conversion tracking',
      '60 days of priority SLA monitoring & feature iterations',
    ],
    ctaText: 'Deploy Growth Engine',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Arm',
    price: 'Custom Quote',
    frequency: 'Tailored engagement SLA',
    highlighted: false,
    badge: 'Full Technology Arm',
    description: 'Dedicated full-stack engineering, DevOps infrastructure, and ongoing growth marketing as your external CTO & tech arm.',
    features: [
      'Dedicated cross-functional team (Tech Lead, Senior Devs, UI/UX)',
      'Multi-region AWS/GCP cloud infrastructure with 99.99% uptime',
      'Continuous CI/CD automation & automated testing pipelines',
      'High-intent SEO & multimillion-dollar paid media management',
      'Bi-weekly sprint demos and direct Slack/Linear engineering access',
      '24/7 emergency incident response with guaranteed 15-min SLA',
    ],
    ctaText: 'Request Enterprise Proposal',
  },
];
