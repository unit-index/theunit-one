import {defineField, defineType} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string'
    }),
    defineField({
      name: 'sections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'hero'},
            {type: 'blogs'},
            {type: 'marketCap'},
            {type: 'supports'},
            {type: 'partners'},
            {type: 'traders'},
            {type: 'unit'},
            {type: 'youtube'},
          ]
        }
      ]
    }),
  ],
})