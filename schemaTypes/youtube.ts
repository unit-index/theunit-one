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
    }),
    defineField({
      name: 'description',
      type: 'array', 
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'videoTitle',
      type: 'string',
    }),
    defineField({
      name: 'videoUrl',
      type: 'url',
    }),
  ],
})