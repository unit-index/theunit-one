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
      name: 'feature1Title',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'feature1',
      type: 'array', 
      of: [{type: 'block'}],
      validation: rule => rule.required()
    }),
    defineField({
      name: 'feature2Title',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'feature2',
      type: 'array', 
      of: [{type: 'block'}],
      validation: rule => rule.required()
    }),
  ],
})