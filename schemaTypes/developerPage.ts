import {defineField, defineType} from 'sanity'

export const developerPage = defineType({
  name: 'developerPage',
  title: 'Developer Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'language',
      type: 'string',
    }),
    defineField({
      name: 'pageTitle',
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
      name: 'milestoneTitle',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'milestones',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'milestoneItem'}
          ]
        }
      ],
      validation: rule => rule.required()
    }),
    defineField({
      name: 'developerLinks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'developerLink'}
          ]
        }
      ],
      validation: rule => rule.required()
    }),
  ],
})