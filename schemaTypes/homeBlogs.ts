import {defineField, defineType} from 'sanity'

export const homeBlogs = defineType({
  name: 'homeBlogs',
  title: 'Home Blogs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'language',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'sectionTitle',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'readMoreText',
      type: 'string',
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