import { checkSelectedSection } from '@/utilities/checkSelectedSection'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const isGuideSection = checkSelectedSection('guidance-and-comfort')

export const guidanceAndComfortFields = {
  guideBadgeText: {
    name: 'badgeText',
    type: 'text',
    required: false,
    admin: { condition: isGuideSection },
  },
  guideTitle: {
    name: 'guideTitle',
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
    admin: { condition: isGuideSection },
  },
  guideDescription: {
    name: 'guideDescription',
    type: 'text',
    required: false,
    admin: { condition: isGuideSection },
  },
}
