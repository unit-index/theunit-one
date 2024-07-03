import {defineField, defineType} from 'sanity'

export const aboutItem = defineType({
  name: 'aboutItem',
  title: 'About Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'itemTitle',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'image',
      type: 'url',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'description',
      type: 'array', 
      of: [{type: 'block'}],
      validation: rule => rule.required()
    }),
  ],
})