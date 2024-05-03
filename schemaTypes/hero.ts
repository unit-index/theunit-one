import {defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
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
      name: 'ctaText',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      type: 'url',
    }),
    defineField({
      name: 'image',
      type: 'url',
    }),
  ],
})