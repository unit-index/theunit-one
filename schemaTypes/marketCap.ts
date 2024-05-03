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
    }),
    defineField({
      name: 'unitCap',
      type: 'string',
    }),
    defineField({
      name: 'usdCapTitle',
      type: 'string',
    }),
    defineField({
      name: 'usdCap',
      type: 'string',
    }),
  ],
})