import {defineField, defineType} from 'sanity'

export const unit = defineType({
  name: 'unit',
  title: 'UNIT',
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
      name: 'spline',
      type: 'url',
      validation: rule => rule.required(),
    }),
  ],
})