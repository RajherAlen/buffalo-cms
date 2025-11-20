import { checkSelectedSection } from '@/utilities/checkSelectedSection'

const isCemeteryLocationsSection = checkSelectedSection('cemetery-locations')

// Single cemetery item fields
const cemeteryItemFields = {
  title: {
    name: 'cemeteryTitle',
    label: 'Cemetery Name',
    type: 'text',
    required: true,
  },
  address: {
    name: 'cemeteryAddress',
    label: 'Address',
    type: 'text',
    required: true,
  },
  phone: {
    name: 'cemeteryPhone',
    label: 'Phone Number',
    type: 'text',
    required: false,
  },

  hoursWeekdays: {
    name: 'hoursWeekdays',
    label: 'Hours (Mon–Fri)',
    type: 'text',
    required: false,
  },

  hoursSaturday: {
    name: 'hoursSaturday',
    label: 'Hours (Saturday)',
    type: 'text',
    required: false,
  },

  detailsLink: {
    name: 'detailsLink',
    label: 'Details Link',
    type: 'text',
    required: false,
  },

  image: {
    name: 'image',
    label: 'Image',
    type: 'upload',
    relationTo: 'media',
    required: false,
  },
}

export const cemeteryLocationsFields = {
  cemeteryLayout: {
    name: 'cemeteryLayout',
    type: 'select',
    defaultValue: 'list',
    label: 'Layout',
    options: [
      { label: 'List', value: 'list' },
      { label: 'Preview', value: 'preview' },
    ],
    admin: { condition: isCemeteryLocationsSection },
  },

  cemeteries: {
    name: 'cemeteries',
    label: 'Cemetery Locations',
    type: 'array',
    fields: Object.values(cemeteryItemFields),
    admin: { condition: isCemeteryLocationsSection },
  },
}
