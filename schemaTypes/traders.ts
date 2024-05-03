import {defineField, defineType} from 'sanity'

export const traders = defineType({
  name: 'traders',
  title: 'Traders',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'sectionTitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'array', 
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'image',
      type: 'url',
    }),
  ],
})