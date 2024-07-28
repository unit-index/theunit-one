import { TypedObject } from 'sanity'
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import { PortableText, PortableTextComponents } from "@portabletext/react"
import Image from 'next/image'
import { client } from '@/sanity/lib/client'

const SampleImageComponent = ({value}: {value: any}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      src={urlBuilder(client).image(value).width(800).fit('max').auto('format').url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '48px',
        marginBottom: '48px',
      }}
    />
  )
}

const components: PortableTextComponents = {
  types: {
    image: SampleImageComponent,
  },
  marks: {
    strong: ({children}) => <strong className="text-gradient font-semibold">{children}</strong>,
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      const target = value.href.startsWith('http') ? '_blank' : '_self'
      return (
        <a href={value.href} rel={rel} target={target}>
          <div className='inline-flex items-center gap-1'>
            <div className='text-gradient underline font-semibold'>{children} </div>
            <Image src="/external.svg" alt="link" width={20} height={20} />
          </div>
        </a>
      )
    },
  },
}



export default function Description({ text }: { text: TypedObject | TypedObject[]}) {
  return (
    <PortableText 
      value={text} 
      components={components}
    />
  )
}