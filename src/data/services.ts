export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  tags: string[];
  deliverables: string[];
  processSteps: { title: string; desc: string }[];
  technologies: string[];
  faqs: { q: string; a: string }[];
  stats: { label: string; value: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'web-dev',
    slug: 'web-design-development',
    title: 'Web Design & Development',
    shortDescription:
      'High-performance, bespoke websites, headless portals, and corporate web platforms engineered for maximum conversion and speed.',
    fullDescription:
      'We construct web platforms that do more than just exist—they command attention and convert visitors. From ultra-fast corporate websites to complex customer portals, we combine award-winning aesthetic direction with robust modern frontend engineering. Built on Next.js, React, and server-driven architectures, every page loads instantly, ranks at the top of search results, and scales smoothly.',
    iconName: 'Globe',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Headless CMS', 'High Performance'],
    deliverables: [
      'Tailored UI/UX architecture & interactive design',
      'Next.js App Router & serverless deployment',
      'Headless CMS integration (Sanity, Strapi, Contentful)',
      'Sub-second load times & 95+ Core Web Vitals',
      'Enterprise-grade SEO & OpenGraph optimization',
      'Responsive design across 360px to 4K displays',
    ],
    processSteps: [
      { title: 'Architecture & Wireframing', desc: 'User flows, information architecture, and low-fidelity prototypes to align on objectives.' },
      { title: 'Creative Art Direction', desc: 'Design language exploration, typography, high-impact animations, and interactive mockups.' },
      { title: 'Frontend & API Engineering', desc: 'Pixel-perfect development with Next.js, Tailwind CSS, TypeScript, and micro-interactions.' },
      { title: 'Performance & QA Audit', desc: 'Rigorous cross-device testing, accessibility audits, and sub-second speed optimization.' },
      { title: 'Deployment & Hypercare', desc: 'Zero-downtime DNS migration, analytics tracking, and continuous monitoring.' },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GraphQL', 'Vercel'],
    faqs: [
      {
        q: 'How long does a custom website build usually take?',
        a: 'Typical corporate projects take 3 to 6 weeks from strategy to deployment, while larger customer portals or headless platforms take 6 to 10 weeks depending on complexity.',
      },
      {
        q: 'Can our internal team edit website content easily?',
        a: 'Yes. We pair every build with a structured headless CMS (such as Sanity, Strapi, or WordPress via GraphQL) that allows your team to publish pages, modify copy, and upload media without touching code.',
      },
      {
        q: 'Will the website be optimized for mobile and Google SEO?',
        a: 'Every website we deliver is built mobile-first and scores 90+ on Google PageSpeed Insights, with semantic HTML, JSON-LD schemas, and dynamic OpenGraph cards included out of the box.',
      },
    ],
    stats: [
      { label: 'Avg. PageSpeed Score', value: '98/100' },
      { label: 'Client Conversion Lift', value: '+42%' },
      { label: 'Projects Shipped', value: '45+' },
    ],
  },
  {
    id: 'custom-software',
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    shortDescription:
      'Mission-critical enterprise software, bespoke ERP/CRM systems, internal automations, and scalable SaaS platforms built to scale.',
    fullDescription:
      'Off-the-shelf software often forces your business into someone else’s rigid workflow. We engineer tailored software systems that map exactly to your operational DNA. Whether it is an ERP to synchronize inventory across multiple warehouses, an automated financial reporting pipeline, or a multi-tenant SaaS product, we engineer reliable, cloud-native architectures.',
    iconName: 'Cpu',
    tags: ['Bespoke ERP/CRM', 'SaaS Architecture', 'REST & GraphQL APIs', 'PostgreSQL', 'Node.js'],
    deliverables: [
      'Tailored ERP, CRM, and inventory management systems',
      'Multi-tenant SaaS application foundations',
      'Robust REST & GraphQL microservices',
      'Role-based access control (RBAC) & OAuth security',
      'Automated batch data processing & business reporting',
      'Comprehensive API documentation & SDKs',
    ],
    processSteps: [
      { title: 'Systems Analysis', desc: 'Mapping business workflows, bottleneck discovery, and database entity relationships.' },
      { title: 'Architecture Design', desc: 'Microservices or modular monolith architecture, database schema, and security planning.' },
      { title: 'Sprint Development', desc: 'Bi-weekly iterative delivery with automated CI/CD pipelines and interactive demo builds.' },
      { title: 'Security & Load Testing', desc: 'Penetration testing, concurrent user simulation, and database indexing benchmarks.' },
      { title: 'Production Handover', desc: 'Database migrations, operational staff training, and 24/7 SLA infrastructure support.' },
    ],
    technologies: ['Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    faqs: [
      {
        q: 'How do you guarantee the security of sensitive company data?',
        a: 'We implement end-to-end encryption at rest (AES-256) and in transit (TLS 1.3), granular role-based permissions, automated vulnerability scans, and rigorous audit trails.',
      },
      {
        q: 'Can you integrate with our legacy databases or accounting systems?',
        a: 'Yes. We specialize in building secure gateway APIs and ETL pipelines that bridge modern web services with legacy SQL, SAP, QuickBooks, or third-party webhooks.',
      },
    ],
    stats: [
      { label: 'Uptime Reliability', value: '99.98%' },
      { label: 'Operational Efficiency', value: '+65%' },
      { label: 'SaaS Systems Live', value: '18+' },
    ],
  },
  {
    id: 'mobile-dev',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription:
      'Native-feel iOS and Android mobile experiences engineered with Flutter and React Native for buttery-smooth 60fps performance.',
    fullDescription:
      'Empower your users wherever they are. We create intuitive, engaging iOS and Android applications that feel native, responsive, and tactile. Leveraging Flutter and React Native, we deliver simultaneous cross-platform releases from a unified codebase—drastically reducing your time to market and development overhead without compromising fluid gestures, offline capabilities, or device hardware integrations.',
    iconName: 'Smartphone',
    tags: ['iOS', 'Android', 'Flutter', 'React Native', 'Offline-First'],
    deliverables: [
      'Cross-platform iOS and Android apps from unified codebase',
      'Biometric authentication (FaceID / Fingerprint)',
      'Push notification pipelines with granular segmentation',
      'Offline-first data sync with local SQLite/WatermelonDB',
      'Apple App Store & Google Play Store submission & approval',
      'Real-time analytics and crash reporting telemetry',
    ],
    processSteps: [
      { title: 'Mobile UX & Prototypes', desc: 'Native touch gestures, haptic feedback design, and interactive mobile prototypes.' },
      { title: 'Core App Engineering', desc: 'State management, offline caching, and responsive layouts across iOS and Android screens.' },
      { title: 'Hardware Integration', desc: 'Camera, geolocation, Bluetooth, and biometric sensor connectivity.' },
      { title: 'Beta Testing Flight', desc: 'TestFlight and Google Play Internal testing with real target user cohorts.' },
      { title: 'Store Launch', desc: 'Metadata preparation, screenshot generation, compliance checks, and live release.' },
    ],
    technologies: ['Flutter', 'React Native', 'Dart', 'Swift', 'Kotlin', 'Firebase', 'Supabase'],
    faqs: [
      {
        q: 'Do you handle the App Store and Play Store approval process?',
        a: 'Yes, we take care of the entire submission lifecycle, including app privacy compliance, store assets, certificates, and responding to reviewer guidelines.',
      },
      {
        q: 'Can the app function when the user has poor or no internet connection?',
        a: 'Yes. We architect offline-first caching so users can browse data and queue actions locally, which automatically sync once connection is restored.',
      },
    ],
    stats: [
      { label: 'Avg. App Store Rating', value: '4.8 ★' },
      { label: 'Total Downloads Driven', value: '350K+' },
      { label: 'Launch Approval Rate', value: '100%' },
    ],
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce-solutions',
    title: 'E-commerce Solutions',
    shortDescription:
      'High-converting online stores, headless Shopify architectures, and bespoke multi-currency payment checkout flows.',
    fullDescription:
      'Turn digital traffic into recurring revenue with lightning-fast, frictionless shopping experiences. From custom Shopify Plus storefronts to headless Next.js Commerce setups, we craft purchasing journeys that minimize cart abandonment and maximize average order value. Integrated with local and international gateways (Stripe, PayPal, PayHere, Commercial Bank IPG).',
    iconName: 'ShoppingBag',
    tags: ['Shopify Plus', 'WooCommerce', 'Headless Commerce', 'Stripe / PayHere', 'High Conversion'],
    deliverables: [
      'Custom theme design and headless storefront development',
      'Frictionless 1-page checkout flows',
      'Multi-currency and localized language support',
      'Automated inventory & warehouse synchronization',
      'Abandoned cart recovery & automated email workflows',
      'Integration with local & international payment gateways',
    ],
    processSteps: [
      { title: 'Merchandising & Catalog Audit', desc: 'Analyzing SKU hierarchies, customer buying journeys, and checkout friction.' },
      { title: 'High-Converting UI/UX', desc: 'Designing sticky add-to-cart flows, clear value propositions, and mobile-first product cards.' },
      { title: 'Platform Development', desc: 'Building custom Shopify Liquid themes or headless Next.js Commerce setups.' },
      { title: 'Payment & Logistics Setup', desc: 'Configuring payment gateways, automated shipping calculation, and invoice triggers.' },
      { title: 'Launch & Conversion Testing', desc: 'A/B testing checkout steps, pixel tracking, and live order simulation.' },
    ],
    technologies: ['Shopify', 'Next.js Commerce', 'WooCommerce', 'Stripe', 'PayHere', 'Klaviyo'],
    faqs: [
      {
        q: 'Which payment gateways can you integrate for Sri Lankan and global customers?',
        a: 'We integrate Stripe, PayPal, PayHere, Seylan/Commercial IPG, WebXPay, and Apple Pay/Google Pay with automatic currency conversion.',
      },
      {
        q: 'Can you migrate our existing store from WooCommerce to Shopify or Next.js?',
        a: 'Yes, we provide full data migration of customers, orders, products, reviews, and 301 redirects to preserve your existing SEO rankings.',
      },
    ],
    stats: [
      { label: 'Checkout Speed', value: '< 1.2s' },
      { label: 'Cart Abandonment Drop', value: '-28%' },
      { label: 'GMV Processed', value: '$8.5M+' },
    ],
  },
  {
    id: 'ui-ux',
    slug: 'ui-ux-brand-design',
    title: 'UI/UX & Brand Design',
    shortDescription:
      'World-class digital product design, interactive design systems, and distinctive brand identities that leave a lasting mark.',
    fullDescription:
      'Exceptional software begins with emotional connection and effortless usability. We craft modern, visceral brand identities and digital interfaces that turn complex workflows into intuitive joys. From design tokens and atomic component libraries in Figma to interactive 3D visual languages, we bridge human psychology with engineering precision.',
    iconName: 'Palette',
    tags: ['Design Systems', 'Figma', 'Interactive Prototypes', 'Brand Identity', 'UX Research'],
    deliverables: [
      'Comprehensive Figma design systems with interactive tokens',
      'User journey mapping, wireframing & usability research',
      'Brand guidelines, vector typography & color systems',
      'High-fidelity interactive prototypes with micro-interactions',
      'Design token handoff for frontend engineering teams',
      'Iconography sets & custom digital asset libraries',
    ],
    processSteps: [
      { title: 'Discovery & Moodboards', desc: 'Deconstructing brand ethos, competitive landscape, and visual references.' },
      { title: 'Wireframes & Information Flow', desc: 'Architecting intuitive layouts, visual hierarchy, and screen transitions.' },
      { title: 'High-Fidelity Interface Design', desc: 'Pixel-perfect UI design adhering to modern design tokens and WCAG contrast.' },
      { title: 'Interactive Prototyping', desc: 'Clickable Figma prototypes with realistic motion choreography and user testing.' },
      { title: 'Token & Component Handoff', desc: 'Structured component specifications for rapid developer implementation.' },
    ],
    technologies: ['Figma', 'Adobe Creative Cloud', 'Spline 3D', 'Principle', 'Design Tokens'],
    faqs: [
      {
        q: 'Do you deliver source files in Figma?',
        a: 'Yes, you receive complete ownership of well-organized Figma files containing reusable components, variants, auto-layouts, and design token libraries.',
      },
      {
        q: 'How do you validate that the design is intuitive for real users?',
        a: 'We conduct usability testing sessions with interactive prototypes to observe friction points, task completion time, and emotional response before writing code.',
      },
    ],
    stats: [
      { label: 'Design System Adoption', value: '100%' },
      { label: 'User Task Completion', value: '+54%' },
      { label: 'Design Awards Won', value: '12' },
    ],
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing-seo',
    title: 'Digital Marketing & SEO',
    shortDescription:
      'Data-driven performance marketing, technical SEO dominance, and high-ROI paid ad campaigns that flood your pipeline with qualified leads.',
    fullDescription:
      'Building a masterpiece is only half the battle—the world has to discover it. Our digital marketing arm pairs deep algorithmic expertise with creative storytelling to engineer sustainable growth. We dominate high-intent search keywords, manage targeted paid acquisition across Meta and Google, and set up automated retargeting funnels that maximize your return on ad spend (ROAS).',
    iconName: 'TrendingUp',
    tags: ['Technical SEO', 'Meta Ads', 'Google Ads', 'Content Strategy', 'ROAS Optimization'],
    deliverables: [
      'Technical SEO architecture, schema markup & speed optimization',
      'High-intent Google Ads (Search & Performance Max) management',
      'Targeted Meta Ads (Facebook & Instagram) acquisition funnels',
      'Data-driven content strategy & thought leadership articles',
      'Custom GA4 attribution tracking & Looker Studio dashboards',
      'Email marketing automation & customer retention sequences',
    ],
    processSteps: [
      { title: 'Growth Audit & Keyword Mapping', desc: 'Uncovering competitor gaps, high-intent search phrases, and CPA benchmarks.' },
      { title: 'Tracking & Attribution Setup', desc: 'Installing GA4, Meta CAPI, Google Tag Manager, and conversion API events.' },
      { title: 'Creative Campaign Production', desc: 'Developing scroll-stopping ad copy, visual assets, and high-converting landing pages.' },
      { title: 'Algorithmic Optimization', desc: 'Daily budget reallocation, bid strategy adjustments, and negative keyword filtering.' },
      { title: 'Transparent Reporting', desc: 'Live Looker Studio dashboard access with weekly video walkthroughs of ROI metrics.' },
    ],
    technologies: ['Google Ads', 'Meta Ads Manager', 'GA4', 'Ahrefs', 'Semrush', 'Looker Studio'],
    faqs: [
      {
        q: 'How quickly can we expect to see results from SEO and paid ads?',
        a: 'Paid ad campaigns (Google/Meta) begin generating qualified leads within 48 to 72 hours of launch. SEO compounding results typically manifest within 60 to 90 days.',
      },
      {
        q: 'How do you measure campaign success?',
        a: 'We track bottom-line commercial metrics: Cost Per Acquisition (CPA), Return On Ad Spend (ROAS), Qualified Pipeline Value, and Organic Search Share of Voice.',
      },
    ],
    stats: [
      { label: 'Avg. Client ROAS', value: '4.8x' },
      { label: 'Organic Traffic Lift', value: '+240%' },
      { label: 'Ad Spend Managed', value: '$1.4M+' },
    ],
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-devops-hosting',
    title: 'Cloud, DevOps & Hosting',
    shortDescription:
      'Bulletproof cloud infrastructure, automated CI/CD pipelines, container orchestration, and zero-downtime hosting configurations.',
    fullDescription:
      'Modern applications require resilient, self-healing infrastructure. We architect automated cloud environments on AWS, Google Cloud, and edge networks that scale seamlessly from 1,000 to 1,000,000 concurrent requests. With automated Dockerized CI/CD pipelines, your engineering team can deploy features with zero downtime and total peace of mind.',
    iconName: 'Server',
    tags: ['AWS', 'Docker', 'CI/CD Pipelines', 'Cloudflare', 'Zero Downtime'],
    deliverables: [
      'Multi-region AWS / GCP architecture setup',
      'Automated GitHub Actions CI/CD deployment pipelines',
      'Docker containerization & Kubernetes / ECS orchestration',
      'Cloudflare enterprise edge caching & DDoS protection',
      'Automated daily backup & disaster recovery protocols',
      '24/7 server health monitoring & alerting (Datadog/UptimeKuma)',
    ],
    processSteps: [
      { title: 'Infrastructure Review', desc: 'Assessing server costs, single points of failure, and latency bottlenecks.' },
      { title: 'Infrastructure as Code (IaC)', desc: 'Writing modular Terraform or Docker configurations for reproducible deployments.' },
      { title: 'Pipeline Automation', desc: 'Constructing automated testing, linting, and build deployment workflows.' },
      { title: 'Edge Caching & Security', desc: 'Configuring WAF rules, SSL enforcement, and edge asset caching.' },
      { title: 'Failover Verification', desc: 'Simulating node outages and testing automated database replication.' },
    ],
    technologies: ['AWS', 'Docker', 'GitHub Actions', 'Terraform', 'Cloudflare', 'Nginx', 'PostgreSQL'],
    faqs: [
      {
        q: 'Can you help reduce our existing AWS or cloud hosting bills?',
        a: 'Yes. Our cloud audits routinely slash client infrastructure expenditure by 30% to 50% through rightsizing instances, auto-scaling, and edge caching.',
      },
      {
        q: 'What happens if a server crashes in the middle of the night?',
        a: 'Our systems feature self-healing container groups that spin up replacement instances automatically, while alerting our engineering team in real time.',
      },
    ],
    stats: [
      { label: 'Infrastructure Uptime', value: '99.99%' },
      { label: 'Avg. Cloud Cost Cut', value: '-38%' },
      { label: 'Deploy Time', value: '< 90s' },
    ],
  },
  {
    id: 'it-consulting',
    slug: 'it-consulting-support',
    title: 'IT Consulting & Support',
    shortDescription:
      'Strategic technology roadmapping, cybersecurity audits, ongoing maintenance SLAs, and expert technical guidance.',
    fullDescription:
      'Technology should be an accelerator for your enterprise, never an impediment. As your dedicated technology arm, Ronin Pulse provides strategic advisory services to guide your CTO and leadership team. From assessing cybersecurity posture to designing long-term digital transformation roadmaps, we stand by your side with 24/7 SLA maintenance support.',
    iconName: 'ShieldCheck',
    tags: ['Cybersecurity', 'Tech Audits', 'SLA Support', 'Architecture Review', 'Digital Transformation'],
    deliverables: [
      'Comprehensive cybersecurity & vulnerability audit reports',
      'Technology stack modernization roadmaps',
      'Vendor evaluation & technical due diligence',
      'Dedicated 24/7 SLA maintenance & incident response',
      'Employee cybersecurity training & phishing defense',
      'Data compliance & regulatory alignment documentation',
    ],
    processSteps: [
      { title: 'Deep Discovery Audit', desc: 'Evaluating existing software architecture, tech debt, and security vulnerabilities.' },
      { title: 'Strategic Roadmap', desc: 'Delivering prioritized recommendations balancing budget, risk, and commercial impact.' },
      { title: 'Action Plan Execution', desc: 'Fixing critical security vulnerabilities and modernizing legacy codebases.' },
      { title: 'SLA Support Setup', desc: 'Establishing dedicated communication channels, emergency escalation trees, and uptime monitors.' },
      { title: 'Quarterly Tech Reviews', desc: 'Reviewing performance KPIs, emerging tech opportunities, and cost optimizations.' },
    ],
    technologies: ['OWASP', 'SonarQube', 'Linux', 'Tailscale', 'Bitwarden', 'SentinelOne'],
    faqs: [
      {
        q: 'What is included in your monthly support SLA?',
        a: 'Our SLAs include guaranteed response times (as low as 15 minutes for critical incidents), security patch management, automated backups, and monthly developer hours for feature updates.',
      },
      {
        q: 'Do you offer fractional CTO / advisory services for early-stage companies?',
        a: 'Yes. We act as your fractional Chief Technology Officer to help recruit engineers, make architectural choices, and present tech roadmaps to investors.',
      },
    ],
    stats: [
      { label: 'Emergency SLA Response', value: '< 15m' },
      { label: 'Security Vulnerabilities Solved', value: '100%' },
      { label: 'Client Retention Rate', value: '98%' },
    ],
  },
];
