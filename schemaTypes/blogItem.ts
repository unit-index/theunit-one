import {defineField, defineType} from 'sanity'

export const blogItem = defineType({
  name: 'blogItem',
  title: 'Single Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'language',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'blogTitle',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'cover',
      type: 'url',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'content',
      type: 'array', 
      of: [{type: 'block'},{
        type: 'image'
      }],
      validation: rule => rule.required()
    }),
    defineField({
      name: 'category',
      type: 'string',
    }),
  ],
})