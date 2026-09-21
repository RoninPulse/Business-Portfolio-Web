export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Development' | 'Pricing' | 'Support';
}

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Why is the company named "Ronin Pulse"?',
    answer:
      'In Japanese history, a Ronin was an independent samurai bound not to an overlord, but to a master craftsmanship code and absolute loyalty to the mission at hand. "Pulse" embodies continuous energy, precision timing, and technological heartbeat. As Ronin Pulse, we serve as your elite, independent technology arm—fighting exclusively for your growth without the rigid bureaucracy of traditional agencies.',
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'How does working with Ronin Pulse compare to hiring an in-house team or freelance devs?',
    answer:
      'Hiring full-time engineers incurs recruitment fees, benefits, idle overhead, and high churn risk. Freelancers often lack full-stack breadth (frontend, backend, DevOps, and marketing). Ronin Pulse provides a complete, senior-level cross-functional engineering team that plugs directly into your business for a fraction of the cost, with guaranteed delivery timelines and enterprise SLAs.',
  },
  {
    id: 'faq-3',
    category: 'Development',
    question: 'What is your typical project delivery timeline?',
    answer:
      'High-impact corporate web applications and custom landing experiences are generally delivered in 3 to 6 weeks. Complex custom software platforms, mobile applications, and enterprise ERP/CRMs typically take 6 to 12 weeks, broken down into two-week agile sprint demos so you test working software continuously.',
  },
  {
    id: 'faq-4',
    category: 'Development',
    question: 'Do we own the full intellectual property (IP) and source code?',
    answer:
      'Absolutely 100%. Upon project completion and balance settlement, full copyright, proprietary source code, database architectures, and design assets in Figma are transferred exclusively to your company. There are zero licensing lock-ins.',
  },
  {
    id: 'faq-5',
    category: 'Pricing',
    question: 'How do you price your software development and digital marketing engagements?',
    answer:
      'We offer transparent, fixed-scope milestone contracts for defined projects (so you never receive surprise bills), as well as dedicated monthly sprint retainer models for fast-moving startups and enterprises requiring continuous innovation. Our packages start from $500 for focused initiatives up to custom enterprise tiers.',
  },
  {
    id: 'faq-6',
    category: 'Support',
    question: 'What ongoing support and maintenance do you provide after launch?',
    answer:
      'Every project includes a complimentary 30-day hypercare warranty period with bug fixes and operational guidance. Beyond that, we offer tiered SLA support contracts covering 24/7 server monitoring, security patches, regular database backups, and dedicated developer hours for feature iterations.',
  },
  {
    id: 'faq-7',
    category: 'General',
    question: 'Can you collaborate with clients located outside Sri Lanka in different time zones?',
    answer:
      'Yes, over 60% of our client portfolio spans the UK, Australia, Europe, North America, and Singapore. Our senior engineers maintain overlapping working hours with GMT, EST, and AEST time zones, utilizing Slack, GitHub, Linear, and Loom for seamless asynchronous communication.',
  },
  {
    id: 'faq-8',
    category: 'Development',
    question: 'What modern technologies do you build with?',
    answer:
      'Our primary stack is modern TypeScript: Next.js (App Router), React, Node.js, Tailwind CSS, Three.js, PostgreSQL, Docker, and AWS. For mobile, we build fluid 60fps applications with Flutter and React Native. We avoid outdated, bloated legacy CMSs to ensure sub-second speeds and bulletproof security.',
  },
];
