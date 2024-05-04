import {defineField, defineType} from 'sanity'

export const milestoneItem = defineType({
  name: 'milestoneItem',
  title: 'Milestone Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'time',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'milestones',
      type: 'array', 
      of: [{type: 'string'}],
      validation: rule => rule.required()
    }),
  ],
})