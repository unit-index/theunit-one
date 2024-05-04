import {defineField, defineType} from 'sanity'

export const communityPage = defineType({
  name: 'communityPage',
  title: 'Community Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'language',
      type: 'string',
    }),
    defineField({
      name: 'pageTitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'array', 
      of: [{type: 'block'}],
      validation: rule => rule.required()
    }),
    defineField({
      name: 'socials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'socialItem'}
          ]
        }
      ],
      validation: rule => rule.required()
    }),
    defineField({
      name: 'assetsTitle',
      type: 'string',
    }),
    defineField({
      name: 'brandAssets',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'assetItem'}
          ]
        }
      ],
      validation: rule => rule.required()
    }),
  ],
})