import {defineField, defineType} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'sections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'hero'},
            {type: 'homeBlogs'},
            {type: 'marketCap'},
            {type: 'supports'},
            {type: 'partners'},
            {type: 'homeVault'},
            {type: 'homeAlpha'},
            {type: 'dao'},
            {type: 'farm'},
            {type: 'bottomSection'},
          ]
        }
      ],
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
      name: 'faqs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'faqItem'}
          ]
        }
      ],
      validation: rule => rule.required()
    }),
  ],
})