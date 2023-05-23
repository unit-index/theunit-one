import Partners from '@/components/Partners'
import SplineClient from '@/components/SplineClient'
import LinkButton from '@/components/button/LinkButton'
import Image from 'next/image'
import LineButton from '@/components/button/LineButton'
import { appUrl, partners } from '@/utils/constants'
import { useTranslations } from 'next-intl'
import indexFund from '@/public/index-fund.png'
import Blogs from '@/components/Blogs'
import Accounted from '@/components/Accounted'
import FadeWrapper from '@/components/FadeWrapper'
import { whiteTrans } from '@/utils/TranslationHelper'
import clientPromise from '@/utils/mongodb'
import { getUnitHourlyData } from "@/utils/db";

async function getUnitData() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const data = await getUnitHourlyData(db);
    return data;
  } catch(e) {
    throw e;
  }
}


export default async function HomePage() {
  const data = await getUnitData();
  
  return <Home usdData={data} />
}


function Home({
  usdData
} : {
  usdData: number
}) {
  const t = useTranslations('Index')

  return <>

    {/* -------------------- First Screen: slogan and the balance animation ------------------ */}

    <div className='mt-32 lg:mt-16 xl:mt-0 flex items-center'>
      <div className='mx-auto text-center lg:text-left lg:ml-12 xl:ml-36 max-w-md flex-none'>
        <div className='text-7xl text-white mb-4'>
          <span className='font-light'>The </span>
          <span className='font-bold'>UNIT</span>
        </div>
        <div className='mb-10'>
          {t.rich('slogan', whiteTrans)}
        </div>
        <LineButton link={appUrl} title={t('launch-app')} />
      </div>
      <div className='hidden lg:block lg:flex-auto lg:h-[480px] xl:h-[600px] 2xl:h-screen pointer-events-none'>
        <iframe src='https://my.spline.design/interactivespherescopycopy-42e48f114d67ab4a32efddf569743588/' width='100%' height='100%'></iframe>
      </div>
    </div>


    {/* -------------------- Value Accounted ------------------ */}
    <FadeWrapper>
      <div className='lg:flex items-center gap-24 justify-center my-32'>
        <Accounted title={t('accounted-in', {unit: 'UNIT'})} />
        <div className='w-0 h-12 lg:block lg:w-[1px] lg:h-7 bg-gray-light'></div>
        <Accounted title={t('accounted-in', {unit: 'USD'})} usdData={usdData} />
      </div>
    </FadeWrapper>


    {/* -------------------- Partners Section ------------------ */}
    <FadeWrapper>
      <div className='block xl:flex items-center xl:gap-48 p-8 xl:p-32 bg-partners bg-cover mt-20'>
        <div className='block text-center mb-12 xl:mb-0 xl:text-left xl:flex-1'>
          <div className='text-4xl font-semibold mb-4 text-white'>{t('with-support')}</div>
          <div className='text-xl'>
            {partners.join(', ')}
          </div>
        </div>
        <div className='block xl:flex-1'>
          <Partners />
        </div>
      </div>
    </FadeWrapper>


    {/* -------------------- UNIT Ø Introduction ------------------ */}
    <FadeWrapper>
      <div className='flex items-center gap-40 px-8 lg:px-40 py-24 my-32'>
        <div className='hidden lg:block lg:flex-1 pointer-events-none'>
          <SplineClient url='https://prod.spline.design/noP1fbdLdVrd-p58/scene.splinecode' />
        </div>
        <div className='text-center lg:text-left flex-1'>
          <div className='text-4xl font-semibold mb-4 text-white'>UNIT Ø</div>
          <div className='text-xl'>
            {t.rich('unit-algorithm', whiteTrans)}
          </div>
          <div className='flex items-center justify-center lg:justify-start gap-2 pt-2'>
            <LinkButton 
              title={t.rich('launch-app', whiteTrans)} 
              link={appUrl} 
              small 
            />
            <div className='text-xl'>
              {t.rich('to-play', whiteTrans)}
            </div>
          </div>
        </div>
      </div>
    </FadeWrapper>
    

    {/* -------------------- Youtube Channel ------------------ */}
    <FadeWrapper>
      <div className='text-4xl text-center font-semibold mb-4 text-white'>{t('our-channel')}</div>
      <div className='text-xl text-center max-w-2xl mx-auto mb-7 w-full'>{t.rich('channel-intro', whiteTrans)}</div>
      <iframe
        src="https://www.youtube.com/embed/VP1kvgJheR8?controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className='max-w-4xl mx-auto w-full aspect-video shadow-2xl shadow-white/20'
      ></iframe>
    </FadeWrapper>

    {/* -------------------- Index Table ------------------ */}
    <FadeWrapper>
      <div className='px-8 lg:px-32 py-16 my-40 relative'>
        <div className='absolute left-0 lg:left-32 bottom-16 top-16 right-32 bg-index bg-no-repeat bg-left-bottom rounded-lg' />
        <div className='flex items-center gap-20 bg-black-bgd/40 backdrop-blur-sm rounded-lg border border-gray-border px-9 py-24'>
          <div className='flex-1 px-3 lg:pl-11 lg:pr-0 text-center lg:text-left'>
            <div className='text-4xl font-semibold mb-4 text-white'>{t('traders-investors')}</div>
            <div className='text-xl'>{t.rich('manage-fund-desc', whiteTrans)}</div><br />
            <div className='text-xl'>{t.rich('borrow-unit-desc', whiteTrans)}</div>
          </div>
          <div className='hidden lg:block flex-1'>
            <Image src={indexFund} alt='Index Fund' className='w-full' />
          </div>
        </div>
      </div>
    </FadeWrapper>

    {/* -------------------- From the blog ------------------ */}

    <FadeWrapper>
      <Blogs 
        readMore={t('read-more')} 
        title={t('from-blog')} 
        subtitle={t.rich('blog-desc', whiteTrans)} 
      />
    </FadeWrapper>
  </>
}
