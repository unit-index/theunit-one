import {defineField, defineType} from 'sanity'

export const menu = defineType({
  name: 'menu',
  title: 'Menu',
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
      name: 'logo',
      type: 'url',
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
      name: 'menuItems',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'menuItem'}
          ]
        }
      ],
      validation: rule => rule.required()
    }),
    defineField({
      name: 'socialItems',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'socialItem'}
          ]
        }
      ],
      validation: rule => rule.required()
    }),
  ],
})