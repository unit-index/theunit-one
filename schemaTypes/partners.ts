import {defineField, defineType} from 'sanity'

export const partners = defineType({
  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields: [
    defineField({
      name: 'partners',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'partner'}
          ]
        }
      ]
    }),
  ],
})