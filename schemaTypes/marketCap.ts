import {defineField, defineType} from 'sanity'

export const marketCap = defineType({
  name: 'marketCap',
  title: 'Market Caps',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'unitCapTitle',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'unitCap',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'usdCapTitle',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'usdCap',
      type: 'string',
      validation: rule => rule.required()
    }),
  ],
})