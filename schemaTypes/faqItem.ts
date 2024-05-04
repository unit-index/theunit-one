import {defineField, defineType} from 'sanity'

export const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'question',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'answer',
      type: 'array', 
      of: [{type: 'block'}],
      validation: rule => rule.required()
    }),
  ],
})