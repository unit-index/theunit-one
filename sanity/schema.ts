import { type SchemaTypeDefinition } from 'sanity'
import { partner } from '@/schemaTypes/partner';
import { hero } from '@/schemaTypes/hero';
import { marketCap } from '@/schemaTypes/marketCap';
import { partners } from '@/schemaTypes/partners';
import { traders } from '@/schemaTypes/traders';
import { supports } from '@/schemaTypes/supports';
import { unit } from '@/schemaTypes/unit';
import { youtube } from '@/schemaTypes/youtube';
import { blogs } from '@/schemaTypes/blogs';
import { homepage } from '@/schemaTypes/homepage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, marketCap, supports, partner, partners, unit, youtube, traders, blogs, homepage],
}
