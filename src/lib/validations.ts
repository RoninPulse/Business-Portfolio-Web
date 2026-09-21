import { z } from 'zod';

export const serviceOptions = [
  'Web Design & Development',
  'Custom Software Development',
  'Mobile App Development',
  'E-commerce Solutions',
  'UI/UX & Brand Design',
  'Digital Marketing & SEO',
  'Cloud, DevOps & Hosting',
  'IT Consulting & Support',
] as const;

export const budgetOptions = [
  '< $500',
  '$500 – $2k',
  '$2k – $5k',
  '$5k – $10k',
  '$10k+',
  'Not sure',
] as const;

export const timelineOptions = [
  'Immediate (< 2 weeks)',
  'Within 1 month',
  '1 – 3 months',
  '3+ months',
  'Flexible',
] as const;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(80, { message: 'Full name cannot exceed 80 characters.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .max(30, { message: 'Phone number cannot exceed 30 characters.' })
    .optional()
    .or(z.literal('')),
  company: z
    .string()
    .max(100, { message: 'Company name cannot exceed 100 characters.' })
    .optional()
    .or(z.literal('')),
  service: z.enum(serviceOptions, {
    errorMap: () => ({ message: 'Please select a valid service.' }),
  }),
  budget: z.string().optional().or(z.literal('')),
  timeline: z.string().optional().or(z.literal('')),
  message: z
    .string()
    .min(20, { message: 'Message must be at least 20 characters long so we can understand your requirements.' })
    .max(3000, { message: 'Message cannot exceed 3000 characters.' }),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy to proceed.',
  }),
  websiteHoneypot: z.string().optional().or(z.literal('')), // honeypot must remain empty
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
