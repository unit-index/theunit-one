import {defineField, defineType} from 'sanity'

export const youtube = defineType({
  name: 'youtube',
  title: 'Youtube',
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
      name: 'videoTitle',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'videoUrl',
      type: 'url',
      validation: rule => rule.required()
    }),
  ],
})