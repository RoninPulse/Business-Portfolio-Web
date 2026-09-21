export const siteConfig = {
  name: 'Ronin Pulse',
  stylisedName: 'RŌNIN PULSE',
  tagline: 'Your Technology Arm',
  detailedTagline: 'Your Technology Arm. Custom software solutions & digital marketing.',
  description:
    'Ronin Pulse is your dedicated technology arm. We architect cutting-edge custom software, high-performance web applications, scalable mobile solutions, and data-driven digital marketing campaigns.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://roninpulse.com',
  ogImage: '/images/og-image.png',
  contact: {
    phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || '+94 78 421 6666',
    phoneTel: 'tel:+94784216666',
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '94784216666',
    whatsappLink: 'https://wa.me/94784216666?text=Hi%20Ronin%20Pulse%2C%20I%27d%20like%20to%20discuss%20a%20project',
    email: process.env.CONTACT_TO_EMAIL || 'hello@roninpulse.com',
    address: 'Ronin Pulse HQ, Sri Lanka',
    googleMapsUrl: process.env.NEXT_PUBLIC_MAP_URL || 'https://maps.app.goo.gl/e4bpthmWTCsKRXn1A',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM (GMT+5:30)',
  },
  socials: [
    {
      name: 'Facebook',
      url: 'https://web.facebook.com/RoninPulseYTA/',
      handle: '@RoninPulseYTA',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ronin_pulse/',
      handle: '@ronin_pulse',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@roninpulse_yta',
      handle: '@roninpulse_yta',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/ronin-pulse',
      handle: 'Ronin Pulse',
    },
    {
      name: 'X',
      url: 'https://x.com/RoninPulse_YTA',
      handle: '@RoninPulse_YTA',
    },
  ],
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services', hasMegaMenu: true },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Process', href: '/process' },
    { label: 'Team', href: '/team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

export type SiteConfig = typeof siteConfig;
