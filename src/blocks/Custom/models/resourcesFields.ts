import { checkSelectedSection } from '@/utilities/checkSelectedSection'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const resourcesLinksFieldsArray = {
  title: {
    name: 'resourceTitle',
    type: 'text',
    required: true,
  },
  url: {
    name: 'resourceUrl',
    type: 'text',
    required: true,
  },
  description: {
    name: 'resourceDescription',
    type: 'textarea',
  },
}

export const resourcesFields = {
  resourceTitle: {
    name: 'resourceTitle',
    type: 'richText',
    editor: lexicalEditor({
      features: ({ rootFeatures }) => {
        return [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ]
      },
    }),
    admin: {
      condition: checkSelectedSection('resources'),
    },
  },
  resourcesLinks: {
    name: 'resourcesLinks',
    type: 'array',
    admin: {
      condition: checkSelectedSection('resources'),
    },
    fields: Object.values(resourcesLinksFieldsArray),
  },
}
