import { Field } from 'payload'

export const sectionFields: Field = {
  name: 'section',
  type: 'select',
  options: [
    {
      label: 'Default',
      value: 'default',
    },
    {
      label: 'Custom',
      value: 'custom',
    },
    {
      label: 'With Signature',
      value: 'signature',
    },
    {
      label: 'Planning',
      value: 'planning',
    },
    {
      label: 'Burial Options',
      value: 'burial-options',
    },
    {
      label: 'Burial Options List',
      value: 'burial-options-list',
    },
    {
      label: 'Statistics',
      value: 'stats',
    },
    {
      label: 'Guidance and Comfort',
      value: 'guidance-and-comfort',
    },
    {
      label: 'Grief Support',
      value: 'grief-support',
    },
    {
      label: 'Resources',
      value: 'resources',
    },
    {
      label: 'News',
      value: 'news',
    },
    {
      label: 'Contact',
      value: 'contact',
    },
    {
      label: 'Benefit',
      value: 'benefit',
    },
    {
      label: 'Testimonial',
      value: 'testimonial',
    },
    {
      label: 'Planning Process',
      value: 'planning-process',
    },
    {
      label: 'Faq',
      value: 'faq',
    },
  ],
  required: true,
}
