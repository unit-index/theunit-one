import {defineField, defineType} from 'sanity'

export const partner = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
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
  ],
})