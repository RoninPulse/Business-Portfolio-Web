export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarInitials: string;
  rating: number;
  content: string;
  projectTag: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Marcus Vance',
    role: 'Chief Operating Officer',
    company: 'Northwind Logistics Corp',
    avatarInitials: 'MV',
    rating: 5,
    content:
      'Ronin Pulse delivered beyond our highest expectations. Their engineers built an operating platform that cut our container dwell times by nearly 70%. They act like true co-founders rather than an outsourced vendor.',
    projectTag: 'Custom Logistics Software',
  },
  {
    id: 't-2',
    name: 'Aanya Senanayake',
    role: 'Founder & CEO',
    company: 'Lankan Leaf Organics',
    avatarInitials: 'AS',
    rating: 5,
    content:
      'Our luxury headless storefront transformed our global brand image. The speed, the 3D interactions, and the effortless checkout doubled our direct consumer revenue in less than 30 days. Remarkable craft.',
    projectTag: 'Headless E-commerce',
  },
  {
    id: 't-3',
    name: 'Dinesh Wickramasinghe',
    role: 'Head of Retail Operations',
    company: 'Vertex Retail Group',
    avatarInitials: 'DW',
    rating: 5,
    content:
      'The offline-capable POS mobile app they engineered for our 40+ branch stores runs like clockwork. Even during network blackouts, our sales staff can ring up customers seamlessly. 10/10 execution.',
    projectTag: 'Mobile App & POS',
  },
  {
    id: 't-4',
    name: 'Julian Thorne',
    role: 'VP of Commercial Strategy',
    company: 'BluePeak Hospitality',
    avatarInitials: 'JT',
    rating: 5,
    content:
      'Before Ronin Pulse, OTAs captured 75% of our bookings. Their bespoke booking engine reversed that trend and saved us almost $300k in commissions in the first year alone. Their work pays for itself.',
    projectTag: 'Web Development & SEO',
  },
  {
    id: 't-5',
    name: 'Dr. Soraya Karunaratne',
    role: 'Chief Medical Officer',
    company: 'Zenith Healthcare',
    avatarInitials: 'SK',
    rating: 5,
    content:
      'Building a HIPAA-compliant telehealth platform requires extreme technical rigor. Ronin Pulse designed an encrypted, intuitive medical portal that both doctors and elderly patients find delightful to use.',
    projectTag: 'HealthTech Platform',
  },
];
