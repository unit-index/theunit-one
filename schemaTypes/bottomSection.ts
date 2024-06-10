import {defineField, defineType} from 'sanity'

export const bottomSection = defineType({
  name: 'bottomSection',
  title: 'Home Bottom Section',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'url',
      validation: rule => rule.required()
    }),
  ],
})