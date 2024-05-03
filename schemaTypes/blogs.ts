import {defineField, defineType} from 'sanity'

export const blogs = defineType({
  name: 'blogs',
  title: 'Blogs',
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
  ],
})