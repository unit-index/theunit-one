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
      validation: rule => rule.required()
    }),
    defineField({
      name: 'description',
      type: 'array', 
      of: [{type: 'block'}],
      validation: rule => rule.required()
    }),
    defineField({
      name: 'ctaText',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'ctaLink',
      type: 'url',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'image',
      type: 'url',
      validation: rule => rule.required()
    }),
  ],
})