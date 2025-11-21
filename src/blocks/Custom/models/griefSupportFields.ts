import { checkSelectedSection } from '@/utilities/checkSelectedSection'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const isGriefSupportSection = checkSelectedSection('grief-support')

const isPromoB = (_data: any, _siblingData: any, parentData: any) => {
  return (
    parentData?.blockData.section === 'grief-support' &&
    parentData?.blockData.promoLayot === 'promo-b'
  )
}

const isPromoA = (_data: any, _siblingData: any, parentData: any) => {
  return (
    parentData?.blockData.section === 'grief-support' &&
    parentData?.blockData.promoLayot === 'promo-a'
  )
}

// Individual card fields
const supportCardFields = {
  title: {
    name: 'supportTitle',
    type: 'richText',
    editor: lexicalEditor({
      features: ({ rootFeatures }) => [
        ...rootFeatures,
        HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
        FixedToolbarFeature(),
        InlineToolbarFeature(),
      ],
    }),
    required: true,
  },
  description: {
    name: 'supportDescription',
    type: 'textarea',
    required: true,
  },
  buttonText: {
    name: 'supportButtonText',
    type: 'text',
    required: false,
  },
  link: {
    name: 'supportLink',
    type: 'text',
    required: false,
  },
}

export const griefSupportFields = {
  griefTitle: {
    name: 'griefTitle',
    type: 'richText',
    label: 'Section Title',
    editor: lexicalEditor({
      features: ({ rootFeatures }) => [
        ...rootFeatures,
        HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
        FixedToolbarFeature(),
        InlineToolbarFeature(),
      ],
    }),
    required: false,
    admin: { condition: isGriefSupportSection },
  },
  promoLayot: {
    name: 'promoLayot',
    type: 'select',
    label: 'Promo Layout',
    defaultValue: 'promo-a',
    options: [
      { label: 'Promo A', value: 'promo-a' },
      { label: 'Promo B', value: 'promo-b' },
    ],
  },
  griefSubtitle: {
    name: 'griefSubtitle',
    type: 'textarea',
    label: 'Section Subtitle / Description',
    required: false,
    admin: { condition: isGriefSupportSection },
  },
  supportCards: {
    name: 'supportCards',
    type: 'array',
    label: 'Support Cards',
    fields: Object.values(supportCardFields),
    admin: { condition: isPromoA },
  },
  promoImage: {
    name: 'promoImage',
    label: 'Promo Image',
    type: 'upload',
    relationTo: 'media',
    required: false,
    admin: { condition: isPromoB },
  },
}
