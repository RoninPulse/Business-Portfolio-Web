export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  category: 'Engineering' | 'Design' | 'Marketing' | 'Strategy';
  author: {
    name: string;
    role: string;
  };
  tableOfContents: { id: string; title: string }[];
  content: string; // Markdown formatted content
}

export const blogPostsData: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'why-your-business-needs-a-custom-web-app',
    title: 'Why Your Growing Business Needs a Custom Web App in 2026',
    excerpt:
      'Off-the-shelf SaaS tools promise speed, but often trap scaling companies in fragmented silos. Here is why bespoke software architectures yield a 5x return on engineering investment.',
    publishedAt: 'February 18, 2026',
    readingTime: '6 min read',
    category: 'Engineering',
    author: {
      name: 'Kasun Jayawardena',
      role: 'Managing Director & Lead Architect',
    },
    tableOfContents: [
      { id: 'the-saas-sprawl-trap', title: 'The SaaS Sprawl Trap' },
      { id: 'unifying-workflows', title: 'Unifying Disconnected Workflows' },
      { id: 'ip-ownership', title: 'The True Value of Intellectual Property' },
      { id: 'scaling-without-seat-licenses', title: 'Scaling Without Paying Per Seat' },
      { id: 'the-verdict', title: 'The Strategic Verdict' },
    ],
    content: `
### The SaaS Sprawl Trap
Most scaling enterprises begin with good intentions: subscribe to a popular CRM, integrate a third-party billing tool, hook up an inventory add-on, and stitch them together with Zapier. For the first twelve months, this works adequately.

However, as order volume expands from hundreds to tens of thousands, the cracks emerge:
- API rate limits trigger silent background synchronization failures.
- Each new hire adds $150/month in compounding subscription seats.
- Disconnected data formats make unified executive reporting an ordeal.

### Unifying Disconnected Workflows
A custom web application is engineered specifically around your company's proprietary operating procedures. Instead of conforming your operations to a generic template, custom software enforces your unique competitive advantage.

When Northwind Logistics transitioned from disconnected software suites to an in-house Freight Operating System, container dwell times dropped by **68%** within ninety days. Why? Because the software eliminated repetitive manual data re-entry across three legacy systems.

### The True Value of Intellectual Property
When you build proprietary internal software, every dollar spent on development capitalizes directly onto your corporate balance sheet as high-value intellectual property. Investors and acquirers assign significantly higher enterprise multiples to businesses operating custom proprietary software over companies running on rented commodity tools.

### Scaling Without Paying Per Seat
Commodity SaaS platforms penalize your growth: the more staff you hire and the more customers you serve, the steeper your monthly software bill climbs. With custom software deployed on modern serverless or containerized cloud infrastructure, handling 500 users costs virtually the same as handling 5,000.

### The Strategic Verdict
If a process is commoditized (like payroll or accounting), use off-the-shelf software. But if a workflow drives your core customer value, operational speed, or revenue model, building a bespoke web application with a dedicated technology partner is one of the highest-leverage investments you can make.
    `.trim(),
  },
  {
    id: 'post-2',
    slug: 'nextjs-vs-wordpress-which-one-to-choose',
    title: 'Next.js vs WordPress: Which Platform Should Power Your Web Platform?',
    excerpt:
      'Comparing monolithic legacy CMS architectures against modern headless Next.js frameworks across performance, security, SEO, and total cost of ownership.',
    publishedAt: 'January 24, 2026',
    readingTime: '8 min read',
    category: 'Engineering',
    author: {
      name: 'Ravindu Senaratne',
      role: 'Principal Frontend Engineer',
    },
    tableOfContents: [
      { id: 'the-architectural-divide', title: 'The Architectural Divide' },
      { id: 'speed-and-core-web-vitals', title: 'Speed & Core Web Vitals' },
      { id: 'security-vulnerabilities', title: 'Security & Maintenance Overhead' },
      { id: 'content-editing-experience', title: 'The Content Editing Experience' },
      { id: 'decision-framework', title: 'Framework: How to Decide' },
    ],
    content: `
### The Architectural Divide
WordPress powered the web for over two decades. But the demands of modern web users—instant sub-second page transitions, interactive 3D visualizations, and rock-solid mobile responsiveness—have pushed traditional monolithic PHP architectures to their absolute limits.

Next.js, backed by Vercel and React, represents the modern standard: server-side rendering, edge caching, static site generation, and seamless API route orchestration within a single unified framework.

### Speed & Core Web Vitals
Google's search algorithm directly rewards sites with stellar Core Web Vitals (Largest Contentful Paint, First Input Delay, Cumulative Layout Shift).
- **Traditional WordPress:** Often requires 25+ third-party plugins, bloated jQuery libraries, and unoptimized SQL queries, frequently scoring between 35-65 on mobile PageSpeed tests.
- **Next.js App Router:** Compiles lightweight, tree-shaken JavaScript bundles, serves modern AVIF/WebP image formats automatically, and pre-renders content on edge servers, routinely achieving **95-100 scores**.

### Security & Maintenance Overhead
WordPress sites are the single largest target for automated web exploits due to outdated themes and compromised third-party plugins. Maintaining a secure WordPress installation requires perpetual plugin patching and WAF tuning.

In contrast, Next.js sites compile to immutable static assets and secure serverless microservices. With no exposed SQL database listening on open ports, attack surfaces are reduced to near zero.

### The Content Editing Experience
Clients often worry: *"If we use Next.js, how does marketing publish blog posts?"* The answer is a **Headless CMS**. By combining Next.js with modern headless platforms like Sanity, Strapi, or Contentful, marketing teams enjoy a real-time WYSIWYG editorial studio while developers retain full freedom to craft award-winning UI interactions.

### Framework: How to Decide
- **Choose WordPress if:** You have a minimal budget ($500), need a simple non-custom informational site, and do not prioritize interactive animations or enterprise web security.
- **Choose Next.js if:** You are building an ambitious corporate presence, custom e-commerce store, or SaaS portal where brand prestige, sub-second speed, and conversion rates are critical.
    `.trim(),
  },
  {
    id: 'post-3',
    slug: 'technical-seo-checklist-2026',
    title: 'The Definitive Technical SEO & AI Search Checklist for 2026',
    excerpt:
      'Search engines and AI answer engines (SearchGPT, Perplexity, Gemini) evaluate your website differently today. Here is the technical playbook to dominate search rankings.',
    publishedAt: 'January 10, 2026',
    readingTime: '7 min read',
    category: 'Marketing',
    author: {
      name: 'Ashan Rodrigo',
      role: 'Head of Growth',
    },
    tableOfContents: [
      { id: 'ai-engine-optimization', title: 'From Traditional SEO to AI Search' },
      { id: 'schema-and-json-ld', title: 'Structured Data & JSON-LD Mastery' },
      { id: 'rendering-and-edge-indexing', title: 'Server-Side Rendering & Edge Delivery' },
      { id: 'core-web-vitals-benchmarks', title: 'Core Web Vitals Thresholds' },
      { id: 'internal-link-graphs', title: 'Topical Authority & Link Graphs' },
    ],
    content: `
### From Traditional SEO to AI Search
In 2026, search is no longer just ten blue links on Google. Users are increasingly consulting conversational AI engines (SearchGPT, Perplexity, Google Gemini Overviews) to find answers and vetted service providers.

To be cited as an authoritative source by AI models, your site must provide semantically rich, verifiable facts wrapped in clean programmatic markup.

### Structured Data & JSON-LD Mastery
Search crawlers consume JSON-LD schemas to understand entity relationships without hallucination. Essential schemas every business site must deploy include:
1. \`Organization\` & \`LocalBusiness\` with exact phone, address, and social links.
2. \`Service\` schemas detailing explicit deliverables and target audiences.
3. \`FAQPage\` markup to directly capture zero-click answer snippets.
4. \`BreadcrumbList\` to indicate hierarchical site navigation.

### Server-Side Rendering & Edge Delivery
Client-side rendered Single Page Applications (SPAs) that depend on browser JavaScript execution often fail to index properly when crawler render budgets expire. Next.js App Router solves this by pre-rendering full semantic HTML on the edge, ensuring search bots see 100% of your content in under 200 milliseconds.

### Core Web Vitals Thresholds
Ensure your site strictly adheres to:
- **LCP (Largest Contentful Paint):** Under 1.8 seconds on 4G mobile.
- **INP (Interaction to Next Paint):** Under 200 milliseconds.
- **CLS (Cumulative Layout Shift):** Under 0.05.

### Topical Authority & Link Graphs
Build comprehensive content clusters around your core offerings rather than disparate generic keywords. Link related case studies directly to your service landing pages to signal deep domain expertise to search algorithms.
    `.trim(),
  },
  {
    id: 'post-4',
    slug: 'designing-high-conversion-checkout-flows',
    title: 'Designing E-Commerce Checkout Flows That Cut Cart Abandonment',
    excerpt:
      'Nearly 70% of digital shopping carts are abandoned before purchase. Explore UX principles and architectural improvements that reclaim lost revenue.',
    publishedAt: 'December 12, 2025',
    readingTime: '5 min read',
    category: 'Design',
    author: {
      name: 'Dulani Alwis',
      role: 'Head of Product Design',
    },
    tableOfContents: [
      { id: 'friction-audit', title: 'Auditing Hidden Checkout Friction' },
      { id: 'one-page-vs-multi-step', title: 'One-Page vs Multi-Step Psychology' },
      { id: 'payment-methods', title: 'Local & Digital Wallet Integration' },
      { id: 'micro-copy-and-trust', title: 'Trust Signals That Ease Anxiety' },
    ],
    content: `
### Auditing Hidden Checkout Friction
Every additional form field on a checkout page decreases conversion by an average of 4.2%. Requiring users to create a password before entering their delivery address is the single fastest way to lose an impulsive buyer.

By eliminating forced registration and offering guest checkouts with automatic address auto-complete, Lankan Leaf saw an immediate **28% decrease** in checkout abandonment.

### One-Page vs Multi-Step Psychology
For low-complexity purchases (single product, clear pricing), a streamlined single-page checkout delivers maximum speed. For high-consideration purchases with customizations or multiple shipping options, an accordion-style multi-step checkout reduces cognitive overwhelm by breaking the process into manageable micro-commitments.

### Local & Digital Wallet Integration
Entering a 16-digit credit card number on a mobile smartphone while on the move is clumsy. Integrating one-click payment rails—Apple Pay, Google Pay, and localized instant IPG options—allows customers to authenticate purchases with biometrics in under 3 seconds.

### Trust Signals That Ease Anxiety
Position security badges, return policy assurances, and transparent delivery dates directly beside the final "Pay Now" button. Reassuring buyers at the precise moment of financial commitment dramatically increases completion rates.
    `.trim(),
  },
];
