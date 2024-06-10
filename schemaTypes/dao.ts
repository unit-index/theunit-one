import {defineField, defineType} from 'sanity'

export const dao = defineType({
  name: 'dao',
  title: 'UNIT DAO',
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
      name: 'buttonText',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'buttonLink',
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