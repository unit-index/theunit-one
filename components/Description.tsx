import { TypedObject } from 'sanity'
import { PortableText, PortableTextComponents } from "@portabletext/react"

const components: PortableTextComponents = {
  marks: {
    strong: ({children}) => <strong className="text-white font-normal">{children}</strong>,
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      const target = value.href.startsWith('http') ? '_blank' : '_self'
      return (
        <a href={value.href} rel={rel} target={target} className='underline text-white'>
          {children}
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