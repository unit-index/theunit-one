import Partners from '@/components/Partners'
import SplineClient from '@/components/SplineClient'
import LineButton from '@/components/button/LineButton'
import { appUrl, partners } from '@/utils/constants'
import { useTranslations } from 'next-intl'

import Image from 'next/image'

export default function Home() {
  const t = useTranslations('Index')

  return <>
    <div className='bg-home-top bg-no-repeat bg-right-top'>
      <div className='flex items-center'>
        <div className='ml-36 max-w-md flex-none'>
          <div className='text-8xl text-white mb-4'>
            <span className='font-light'>The </span>
            <span className='font-bold'>UNIT</span>
          </div>
          <div className='mb-10'>
            {t('slogan')}
          </div>
          <LineButton link={appUrl} title={t('launch-app')} />
        </div>
        <div className='flex-auto h-[770px]'>
          <iframe src='https://my.spline.design/interactivespherescopycopy-42e48f114d67ab4a32efddf569743588/' width='100%' height='100%'></iframe>
        </div>
      </div>
      <div className='flex items-center gap-48 p-32 bg-partners bg-cover mt-20'>
        <div className='flex-1'>
          <div className='text-4xl font-bold mb-4 text-white'>{t('with-support')}</div>
          <div className='text-xl'>
            {partners.join(', ')}
          </div>
        </div>
        <div className='flex-1'>
          <Partners />
        </div>
      </div>
    </div>
  </>
}
