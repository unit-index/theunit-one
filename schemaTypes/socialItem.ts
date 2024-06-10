import {defineField, defineType} from 'sanity'

export const socialItem = defineType({
  name: 'socialItem',
  title: 'Social Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'name',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'logo',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'ctaText',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'ctaLink',
      type: 'string',
      validation: rule => rule.required()
    }),
  ],
})