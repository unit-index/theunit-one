import {defineField, defineType} from 'sanity'

export const blogs = defineType({
  name: 'blogs',
  title: 'Blogs',
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
      name: 'subitle',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'tag1',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'tag2',
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