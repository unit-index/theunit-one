import { TypedObject } from 'sanity'
import { PortableText, PortableTextComponents } from "@portabletext/react"
import Image from 'next/image'

const components: PortableTextComponents = {
  marks: {
    strong: ({children}) => <strong className="text-gradient font-semibold">{children}</strong>,
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      const target = value.href.startsWith('http') ? '_blank' : '_self'
      return (
        <a href={value.href} rel={rel} target={target} className='text-white'>
          <div className='flex items-center gap-1'>
            {children} 
            <Image src="/external-white.svg" alt="link" width={20} height={20} />
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