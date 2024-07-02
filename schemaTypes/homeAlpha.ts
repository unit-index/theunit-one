import {defineField, defineType} from 'sanity'

export const homeAlpha = defineType({
  name: 'homeAlpha',
  title: 'Home Alpha',
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
      name: 'image',
      type: 'url',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'bgdImage',
      type: 'url',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'btnTitle',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'btnLink',
      type: 'url',
      validation: rule => rule.required()
    }),
  ],
})