import { checkSelectedSection } from '@/utilities/checkSelectedSection'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const isFAQSection = checkSelectedSection('faq')

const faqField = {
  faqQuestion: {
    name: 'faqQuestion',
    label: 'Question',
    type: 'text',
    required: false,
  },
  faqAnswer: {
    name: 'faqAnswer',
    label: 'Answer',
    type: 'text',
    required: false,
  },
}

export const faqFields = {
  faqRichTitle: {
    name: 'faqRichTitle',
    label: 'Title',
    type: 'richText',
    editor: lexicalEditor({
      features: ({ rootFeatures }) => [
        ...rootFeatures,
        HeadingFeature({ enabledHeadingSizes: ['h1', 'h2'] }),
        FixedToolbarFeature(),
        InlineToolbarFeature(),
      ],
    }),
    admin: { condition: isFAQSection },
  },
  faqs: {
    name: 'faqs',
    label: 'FAQs',
    type: 'array',
    fields: Object.values(faqField),
    admin: { condition: isFAQSection },
  },
}
