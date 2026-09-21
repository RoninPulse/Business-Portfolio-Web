export interface ClientItem {
  id: string;
  name: string;
  industry: string;
  symbol: string;
  tagline: string;
}

export const clientsData: ClientItem[] = [
  { id: 'c-1', name: 'Northwind Labs', industry: 'Logistics & Supply Chain', symbol: 'NW', tagline: 'Global Freight' },
  { id: 'c-2', name: 'Lankan Leaf', industry: 'Artisan D2C Organics', symbol: 'LL', tagline: 'Single Estate' },
  { id: 'c-3', name: 'Vertex Retail', industry: 'Omni-channel Commerce', symbol: 'VX', tagline: 'Retail Network' },
  { id: 'c-4', name: 'BluePeak Hotels', industry: 'Luxury Hospitality', symbol: 'BP', tagline: 'Boutique Escapes' },
  { id: 'c-5', name: 'Orbit Logistics', industry: 'Fleet IoT & Telematics', symbol: 'OL', tagline: 'Smart Fleet' },
  { id: 'c-6', name: 'Zenith Clinics', industry: 'HealthTech & Telehealth', symbol: 'ZC', tagline: 'Care Connected' },
  { id: 'c-7', name: 'PulsePay', industry: 'Fintech & Cross-border Payments', symbol: 'PP', tagline: 'Global Payments' },
  { id: 'c-8', name: 'Apex Athletic', industry: 'Performance Gear', symbol: 'AA', tagline: 'Activewear' },
  { id: 'c-9', name: 'AeroVault', industry: 'Cloud Infrastructure Security', symbol: 'AV', tagline: 'Zero Trust' },
  { id: 'c-10', name: 'Cinnabar Media', industry: 'Publishing & Media', symbol: 'CM', tagline: 'Digital Media' },
  { id: 'c-11', name: 'Kandy Craft Co.', industry: 'Luxury Heritage Goods', symbol: 'KC', tagline: 'Handcrafted' },
  { id: 'c-12', name: 'Solaria Energy', industry: 'Renewable Power Systems', symbol: 'SE', tagline: 'Clean Tech' },
];
