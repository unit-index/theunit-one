import {defineField, defineType} from 'sanity'

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'menuTitle',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'external',
      type: 'boolean',
    }),
    defineField({
      name: 'menuLink',
      type: 'string',
      validation: rule => rule.required()
    }),
  ],
})