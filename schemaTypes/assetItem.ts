import {defineField, defineType} from 'sanity'

export const assetItem = defineType({
  name: 'assetItem',
  title: 'BrandAsset Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'type',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'assetUrls',
      type: 'array', 
      of: [{type: 'url'}],
      validation: rule => rule.required()
    }),
  ],
})