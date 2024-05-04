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
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      type: 'url',
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