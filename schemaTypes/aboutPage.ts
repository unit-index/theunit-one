import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
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
      validation: rule => rule.required()
    }),
    defineField({
      name: 'description',
      type: 'array', 
      of: [{type: 'block'}],
      validation: rule => rule.required()
    }),
    defineField({
      name: 'faqTitle',
      type: 'string',
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