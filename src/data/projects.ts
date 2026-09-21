export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string; // Fictional client name
  category: 'Web' | 'Software' | 'Mobile' | 'Marketing' | 'Branding' | 'Cloud';
  year: string;
  featured: boolean;
  servicesUsed: string[];
  techStack: string[];
  gradientTheme: string; // Used for local on-brand procedural card graphic
  accentColor: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

// NOTE: All projects and client organizations listed here are realistic sample data.
export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    slug: 'northwind-freight-platform',
    title: 'Northwind Global Freight Operating System',
    client: 'Northwind Logistics Corp',
    category: 'Software',
    year: '2025',
    featured: true,
    servicesUsed: ['Custom Software Development', 'Cloud, DevOps & Hosting', 'UI/UX Design'],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS ECS', 'Redis'],
    gradientTheme: 'from-red-950/80 via-zinc-900 to-black',
    accentColor: '#E0053F',
    tagline: 'End-to-end multi-modal shipment intelligence and customs automation.',
    overview:
      'Northwind Logistics managed over 15,000 maritime and air cargo containers monthly across 8 global ports using disconnected spreadsheets and legacy desktop software. Ronin Pulse engineered a real-time, cloud-native Freight Operating System that unified container tracking, bill of lading documentation, and automated customs compliance.',
    challenge:
      'Manual data entry across disjunct customs databases caused up to 48-hour container dwell times and frequent demurrage penalties. Port managers lacked visibility into incoming cargo delays, creating massive dispatch bottlenecks.',
    solution:
      'We architected a high-throughput event-driven system with WebSocket telemetry for real-time AIS vessel tracking, integrated automated optical character recognition (OCR) for shipping manifests, and built an intuitive role-based dispatch dashboard.',
    results: [
      { metric: '-68%', label: 'Container Dwell Time' },
      { metric: '$420K', label: 'Annual Demurrage Savings' },
      { metric: '100%', label: 'Real-time Cargo Visibility' },
    ],
    testimonial: {
      quote:
        'Ronin Pulse felt like an organic extension of our engineering team. Their relentless focus on speed and reliability eliminated our port dispatch headaches.',
      author: 'Marcus Vance',
      role: 'Chief Operating Officer',
      company: 'Northwind Logistics Corp',
    },
  },
  {
    id: 'proj-2',
    slug: 'lankan-leaf-tea-ecommerce',
    title: 'Lankan Leaf Artisan Single-Estate Storefront',
    client: 'Lankan Leaf Organics',
    category: 'Web',
    year: '2025',
    featured: true,
    servicesUsed: ['Web Design & Development', 'E-commerce Solutions', 'Digital Marketing & SEO'],
    techStack: ['Next.js App Router', 'Shopify Storefront API', 'Tailwind CSS', 'Stripe', 'Klaviyo'],
    gradientTheme: 'from-amber-950/60 via-zinc-900 to-black',
    accentColor: '#FF2D5F',
    tagline: 'Bespoke headless luxury shopping experience for single-origin Ceylon tea.',
    overview:
      'Lankan Leaf wanted to transition from wholesale export to a direct-to-consumer luxury brand selling rare single-estate teas to discerning European and North American consumers. We built an experiential, sub-second headless storefront with localized currencies and interactive flavor wheel exploration.',
    challenge:
      'Their existing WooCommerce setup took over 4 seconds to load internationally and failed to convey the premium craftsmanship and terroir of their artisan single-estate teas.',
    solution:
      'We designed an editorial, cinematic headless storefront leveraging Next.js 14 on edge nodes, linked to Shopify for frictionless multi-currency checkouts, with interactive 3D tea-leaf tasting notes.',
    results: [
      { metric: '+310%', label: 'Direct Online Revenue' },
      { metric: '0.8s', label: 'Average Page Load Time' },
      { metric: '4.9%', label: 'Global Conversion Rate' },
    ],
    testimonial: {
      quote:
        'The aesthetic precision Ronin Pulse brought to Lankan Leaf elevated our brand onto the global stage. Our online conversion doubled in the first month.',
      author: 'Aanya Senanayake',
      role: 'Founder & Managing Director',
      company: 'Lankan Leaf Organics',
    },
  },
  {
    id: 'proj-3',
    slug: 'vertex-retail-pos-mobile',
    title: 'Vertex OmniPOS & Inventory Mobile App',
    client: 'Vertex Retail Group',
    category: 'Mobile',
    year: '2024',
    featured: true,
    servicesUsed: ['Mobile App Development', 'Custom Software Development', 'UI/UX Design'],
    techStack: ['Flutter', 'Dart', 'Go Microservices', 'SQLite', 'Bluetooth ESC/POS'],
    gradientTheme: 'from-rose-950/70 via-neutral-900 to-black',
    accentColor: '#E0053F',
    tagline: 'High-speed offline-capable point of sale app across 40+ retail branches.',
    overview:
      'Vertex needed a rapid tablet and mobile POS application for floor staff to look up inventory, scan barcodes, and tender sales anywhere inside their lifestyle department stores, even during frequent mall network drops.',
    challenge:
      'Traditional desktop registers created long checkout queues during peak weekend sales, and frequent store Wi-Fi disruptions halted billing completely.',
    solution:
      'We engineered an offline-first Flutter application featuring instant Bluetooth thermal printer connectivity, barcode camera scanning, and conflict-free replicated data types (CRDT) for background stock syncing.',
    results: [
      { metric: '< 8s', label: 'Average Checkout Duration' },
      { metric: '100%', label: 'Uptime During Network Cuts' },
      { metric: '+34%', label: 'Weekend Sales Volume' },
    ],
    testimonial: {
      quote:
        'Our floor associates love using the app. It eliminated checkout lines and completely modernized our store shopping experience.',
      author: 'Dinesh Wickramasinghe',
      role: 'Head of Retail Operations',
      company: 'Vertex Retail Group',
    },
  },
  {
    id: 'proj-4',
    slug: 'bluepeak-resorts-booking',
    title: 'BluePeak Luxury Escapes Booking Engine',
    client: 'BluePeak Hospitality Group',
    category: 'Web',
    year: '2024',
    featured: true,
    servicesUsed: ['Web Design & Development', 'UI/UX Design', 'Digital Marketing & SEO'],
    techStack: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS', 'PostgreSQL', 'Stripe'],
    gradientTheme: 'from-cyan-950/60 via-zinc-900 to-black',
    accentColor: '#FF2D5F',
    tagline: 'Immersive resort booking engine with interactive 3D room walkthroughs.',
    overview:
      'BluePeak operates luxury boutique resorts across Sri Lanka and the Maldives. They sought to reduce dependency on high-commission Online Travel Agencies (OTAs like Booking.com) by building an irresistible direct booking portal.',
    challenge:
      'Over 75% of room bookings were captured by third-party OTAs, costing hundreds of thousands in commissions each year.',
    solution:
      'We constructed a tactile, high-luxury web booking engine featuring ambient audio, interactive 360 resort maps, dynamic seasonal packages, and an expedited 2-click reservation flow.',
    results: [
      { metric: '+185%', label: 'Direct Booking Growth' },
      { metric: '$290K', label: 'OTA Commission Saved' },
      { metric: '94/100', label: 'Mobile Performance Score' },
    ],
    testimonial: {
      quote:
        'Our direct bookings surpassed OTAs for the first time in company history within 90 days of launching the new site.',
      author: 'Julian Thorne',
      role: 'VP of Commercial Strategy',
      company: 'BluePeak Hospitality Group',
    },
  },
  {
    id: 'proj-5',
    slug: 'zenith-clinics-telehealth',
    title: 'Zenith Health Patient Telehealth & EHR Platform',
    client: 'Zenith Healthcare Network',
    category: 'Software',
    year: '2024',
    featured: true,
    servicesUsed: ['Custom Software Development', 'IT Consulting & Support', 'Cloud, DevOps & Hosting'],
    techStack: ['React', 'Node.js', 'WebRTC', 'HIPAA Enclave AWS', 'PostgreSQL', 'Redis'],
    gradientTheme: 'from-emerald-950/60 via-zinc-900 to-black',
    accentColor: '#E0053F',
    tagline: 'HIPAA-compliant encrypted telemedicine, lab results, and doctor scheduling.',
    overview:
      'Zenith Clinics required a comprehensive patient engagement portal where patients could consult specialists over HD encrypted video, view electronic lab reports, and manage recurring medication deliveries.',
    challenge:
      'Rigid medical confidentiality regulations and fragmented doctor schedules made building a unified patient video and prescription system technically challenging.',
    solution:
      'We delivered an end-to-end encrypted WebRTC telehealth suite on HIPAA-compliant AWS infrastructure with calendar sync, automated SMS appointment reminders, and digital prescription issuance.',
    results: [
      { metric: '85,000+', label: 'Virtual Consultations Held' },
      { metric: '-45%', label: 'Patient No-Show Rate' },
      { metric: '99.99%', label: 'HIPAA Compliant Uptime' },
    ],
    testimonial: {
      quote:
        'The telehealth platform built by Ronin Pulse revolutionized patient accessibility. The video quality is flawless and our physicians find it exceptionally intuitive.',
      author: 'Dr. Soraya Karunaratne',
      role: 'Chief Medical Officer',
      company: 'Zenith Healthcare Network',
    },
  },
  {
    id: 'proj-6',
    slug: 'orbit-fleet-telematics-iot',
    title: 'Orbit Logistics Real-Time Fleet Telematics',
    client: 'Orbit Fleet Systems',
    category: 'Cloud',
    year: '2024',
    featured: true,
    servicesUsed: ['Cloud, DevOps & Hosting', 'Custom Software Development'],
    techStack: ['Go', 'TimescaleDB', 'MQTT IoT Gateway', 'Docker', 'AWS Fargate', 'Next.js'],
    gradientTheme: 'from-purple-950/60 via-zinc-900 to-black',
    accentColor: '#FF2D5F',
    tagline: 'Sub-second GPS telemetry ingestion processing 2.5 million IoT pings daily.',
    overview:
      'Orbit operates commercial freight carriers and refrigeration trucks. They needed real-time driver diagnostics, geofencing alarms, and cargo temperature monitoring to comply with food safety standards.',
    challenge:
      'Ingesting hundreds of MQTT GPS sensor messages per second caused latency spikes and database deadlocks on their legacy servers.',
    solution:
      'We rebuilt their ingestion pipeline using high-performance Go microservices writing to an optimized TimescaleDB cluster with automated automated geofence triggering and live map streaming.',
    results: [
      { metric: '2.5M+', label: 'Sensor Pings / Day' },
      { metric: '< 50ms', label: 'Telemetry Ingestion Latency' },
      { metric: '-22%', label: 'Fuel Wastage via Idling Alerts' },
    ],
    testimonial: {
      quote:
        'Ronin Pulse has deep engineering depth. Their cloud telemetry architecture handles heavy data loads without breaking a sweat.',
      author: 'Rohan de Silva',
      role: 'Director of Technology',
      company: 'Orbit Fleet Systems',
    },
  },
  {
    id: 'proj-7',
    slug: 'pulsepay-fintech-brand-design',
    title: 'PulsePay Next-Gen Merchant Banking Brand',
    client: 'PulsePay Global',
    category: 'Branding',
    year: '2025',
    featured: false,
    servicesUsed: ['UI/UX & Brand Design', 'Web Design & Development'],
    techStack: ['Figma', 'WebGL', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    gradientTheme: 'from-red-900/60 via-zinc-900 to-black',
    accentColor: '#E0053F',
    tagline: 'Brand identity system, 3D card visualizer, and interactive design system.',
    overview:
      'PulsePay launched a cross-border merchant payout card for digital nomads and agencies across Asia. Ronin Pulse designed the complete visual identity, typography system, holographic physical card mockups, and interactive launch website.',
    challenge:
      'The fintech space is crowded with lookalike minimalist brands. PulsePay needed an energetic, authoritative identity that communicated both security and cutting-edge agility.',
    solution:
      'We crafted a high-contrast dark visual system with dynamic neon red pulse accents, precision vector iconography, and interactive 3D WebGL card interactions on their website.',
    results: [
      { metric: '45,000+', label: 'Waitlist Signups at Launch' },
      { metric: '3', label: 'International Design Accolades' },
      { metric: '100%', label: 'Design System Token Coverage' },
    ],
    testimonial: {
      quote:
        'The brand identity and 3D web experience Ronin Pulse crafted gave us instant credibility with institutional banking partners and early adopters alike.',
      author: 'Elena Rostova',
      role: 'Co-Founder & CEO',
      company: 'PulsePay Global',
    },
  },
  {
    id: 'proj-8',
    slug: 'apex-fitness-meta-ads-scale',
    title: 'Apex Athletic Performance Ad Acquisition Funnel',
    client: 'Apex Fitness Gear',
    category: 'Marketing',
    year: '2024',
    featured: false,
    servicesUsed: ['Digital Marketing & SEO', 'Web Design & Development'],
    techStack: ['Meta Ads API', 'Google Ads', 'GA4 Attribution', 'Next.js Landing Pages'],
    gradientTheme: 'from-orange-950/60 via-zinc-900 to-black',
    accentColor: '#FF2D5F',
    tagline: 'Hyper-targeted Meta and Google acquisition funnels generating 5.4x ROAS.',
    overview:
      'Apex Athletic sells premium ergonomic training apparel. They were struggling with soaring customer acquisition costs (CAC) across standard social media ads. Ronin Pulse revamped their creative direction, landing pages, and algorithmic bid strategy.',
    challenge:
      'Apple iOS 14 privacy changes caused their Meta pixel attribution to misfire, resulting in wasted ad budget and declining returns.',
    solution:
      'We implemented server-side Conversions API (CAPI), engineered 12 high-converting custom Next.js landing pages with sub-second loads, and developed high-hook UGC video ad variations.',
    results: [
      { metric: '5.4x', label: 'Average Blended ROAS' },
      { metric: '-41%', label: 'Customer Acquisition Cost' },
      { metric: '+$1.1M', label: 'Incremental Revenue' },
    ],
    testimonial: {
      quote:
        'Ronin Pulse is the only agency we’ve partnered with that actually understands both data engineering and high-converting marketing creative.',
      author: 'Tariq Mansoor',
      role: 'Head of Growth',
      company: 'Apex Fitness Gear',
    },
  },
  {
    id: 'proj-9',
    slug: 'aero-vault-devops-automation',
    title: 'AeroVault Multi-Cloud CI/CD & Kubernetes',
    client: 'AeroVault Cloud Security',
    category: 'Cloud',
    year: '2025',
    featured: false,
    servicesUsed: ['Cloud, DevOps & Hosting', 'IT Consulting & Support'],
    techStack: ['Kubernetes', 'Terraform', 'AWS EKS', 'GitHub Actions', 'Datadog'],
    gradientTheme: 'from-blue-950/60 via-zinc-900 to-black',
    accentColor: '#E0053F',
    tagline: 'Zero-downtime multi-cluster Kubernetes deployment with automated failover.',
    overview:
      'AeroVault provides zero-trust identity storage for enterprise apps. Ronin Pulse designed and implemented their multi-region AWS and GCP container infrastructure with automated Terraform deployment pipelines.',
    challenge:
      'Engineering teams were experiencing slow manual release cycles taking up to 4 hours per release, with frequent staging environment drift.',
    solution:
      'We built GitOps-driven deployment workflows with ArgoCD and GitHub Actions, automated preview environments for every pull request, and configured real-time synthetic latency alerts.',
    results: [
      { metric: '< 9m', label: 'Commit-to-Production Time' },
      { metric: '0', label: 'Deployment Downtime Incidents' },
      { metric: '-44%', label: 'Staging Infrastructure Spend' },
    ],
    testimonial: {
      quote:
        'Deployments went from high-stress late-night events to routine background occurrences. Our engineering velocity skyrocketed.',
      author: 'Chirath Fernando',
      role: 'Lead Infrastructure Architect',
      company: 'AeroVault Cloud Security',
    },
  },
];
