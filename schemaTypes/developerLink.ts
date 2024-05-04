import {defineField, defineType} from 'sanity'

export const developerLink = defineType({
  name: 'developerLink',
  title: 'Developer Link',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'linkTitle',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'linkLogo',
      type: 'url',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'link',
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