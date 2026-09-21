export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  avatarInitials: string;
  bio: string;
  skills: string[];
  socials: {
    linkedin?: string;
    github?: string;
    x?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: 'm-1',
    name: 'Kasun Jayawardena',
    role: 'Managing Director & Lead Architect',
    tagline: 'Systems Architect with 12+ years building distributed cloud platforms.',
    avatarInitials: 'KJ',
    bio: 'Pioneered core software architectures for enterprise logistics and fintech networks across Asia and Europe. Obsessed with low-latency systems and samurai code discipline.',
    skills: ['System Architecture', 'Go', 'Distributed DBs', 'Kubernetes'],
    socials: {
      linkedin: 'https://www.linkedin.com/company/ronin-pulse',
      github: 'https://github.com',
      x: 'https://x.com/RoninPulse_YTA',
    },
  },
  {
    id: 'm-2',
    name: 'Dulani Alwis',
    role: 'Head of Product Design & Creative Direction',
    tagline: 'Creative technologist crafting tactile 3D interactions and design systems.',
    avatarInitials: 'DA',
    bio: 'Former lead designer at prominent digital agencies in Singapore. Believes that beauty and functional ergonomics must coexist harmoniously in every interface.',
    skills: ['UI/UX Design', 'Design Systems', 'WebGL Art Direction', 'Figma'],
    socials: {
      linkedin: 'https://www.linkedin.com/company/ronin-pulse',
      x: 'https://x.com/RoninPulse_YTA',
    },
  },
  {
    id: 'm-3',
    name: 'Ravindu Senaratne',
    role: 'Principal Frontend Engineer',
    tagline: 'Next.js, Three.js and performance animation specialist.',
    avatarInitials: 'RS',
    bio: 'Crafts buttery-smooth 60fps web experiences. Expert in Three.js, WebGL shaders, Framer Motion, and sub-second Core Web Vitals optimization.',
    skills: ['React / Next.js', 'Three.js / R3F', 'TypeScript', 'Tailwind CSS'],
    socials: {
      linkedin: 'https://www.linkedin.com/company/ronin-pulse',
      github: 'https://github.com',
    },
  },
  {
    id: 'm-4',
    name: 'Nadeesha Perera',
    role: 'Lead Cloud & DevOps Engineer',
    tagline: 'AWS certified architect building self-healing container infrastructure.',
    avatarInitials: 'NP',
    bio: 'Manages zero-downtime infrastructure and multi-region failover. Passionate about automated GitOps pipelines and automated security telemetry.',
    skills: ['AWS / GCP', 'Terraform', 'Docker & K8s', 'CI/CD Automation'],
    socials: {
      linkedin: 'https://www.linkedin.com/company/ronin-pulse',
      github: 'https://github.com',
    },
  },
  {
    id: 'm-5',
    name: 'Ashan Rodrigo',
    role: 'Head of Performance Marketing & Growth',
    tagline: 'Algorithmic growth strategist driving multimillion dollar ad campaigns.',
    avatarInitials: 'AR',
    bio: 'Specialist in high-intent Google search bidding, Meta CAPI data funnels, and conversion rate optimization (CRO) that turn visitors into recurring pipeline.',
    skills: ['Google Ads', 'Meta CAPI', 'Technical SEO', 'GA4 Analytics'],
    socials: {
      linkedin: 'https://www.linkedin.com/company/ronin-pulse',
      x: 'https://x.com/RoninPulse_YTA',
    },
  },
  {
    id: 'm-6',
    name: 'Samanthi Silva',
    role: 'Principal Mobile Engineer',
    tagline: 'Cross-platform mobile architect engineering offline-first applications.',
    avatarInitials: 'SS',
    bio: 'Has shipped 20+ applications to the Apple App Store and Google Play Store with top tier user reviews. Expert in Flutter state architecture and hardware sensors.',
    skills: ['Flutter', 'React Native', 'Dart / Swift', 'SQLite / Offline-first'],
    socials: {
      linkedin: 'https://www.linkedin.com/company/ronin-pulse',
      github: 'https://github.com',
    },
  },
];
