import Partners from '@/components/Partners'
import SplineClient from '@/components/SplineClient'
import LinkButton from '@/components/button/LinkButton'
import Image from 'next/image'
import LineButton from '@/components/button/LineButton'
import { appUrl, localUSDPlaceholder, partners } from '@/utils/constants'
import { headers } from 'next/headers';
import { useTranslations } from 'next-intl'
import indexFund from '@/public/index-fund.png'
import Blogs from '@/components/Blogs'
import Accounted from '@/components/Accounted'
import { whiteTrans } from '@/utils/TranslationHelper'
import clientPromise from '@/utils/mongodb'
import { getUnitHourlyData } from "@/utils/db";
import homeTop from '@/public/home-top.png'
import BlurContainer from '@/components/BlurContainer'

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
  let data = localUSDPlaceholder;
  if (process.env.NODE_ENV === 'production') {
    data = await getUnitData();
  }
  const headerList = headers();
  const userAgent = headerList.get('user-agent') ?? '';
  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  
  return <Home usdData={data} isMobile={isMobile} />
}


function Home({
  usdData,
  isMobile
} : {
  usdData: number,
  isMobile: boolean
}) {
  const t = useTranslations('Index')

  return <div className='bg-home-bottom bg-no-repeat bg-bottom bg-contain pb-56'>

    {/* -------------------- First Screen: slogan and the balance animation ------------------ */}

    <div className='lg:hidden mt-12'>
      <Image src={homeTop} alt='The Unit' priority />
    </div>

    <div className='mt-16 lg:mt-0 xl:mt-0 flex items-center'>
      <div className='mx-auto text-center lg:text-left lg:ml-12 xl:ml-36 max-w-xs sm:max-w-md flex-none'>
        <div className='text-7xl text-white mb-4'>
          <span className='font-bold'>UNIT</span>
        </div>
        <div className='mb-10 px-2 sm:px-0'>
          {t.rich('slogan', whiteTrans)}
        </div>
        <LineButton link={appUrl} title={t('launch-app')} className='w-60' />
      </div>
      <div className='hidden lg:block lg:flex-auto bg-home-top bg-contain bg-no-repeat bg-center lg:h-[480px] xl:h-[660px] 2xl:h-screen' />
    </div>


    <div className='bg-home-bgd1 bg-no-repeat bg-left pt-16 pb-16'>
      {/* -------------------- Value Accounted ------------------ */}
      <div className='lg:flex items-center gap-24 justify-center my-32'>
        <Accounted title={t('accounted-in', {unit: 'UNIT'})} />
        <div className='w-0 h-12 lg:block lg:w-[1px] lg:h-7 bg-gray-light'></div>
        <Accounted title={t('accounted-in', {unit: 'USD'})} usdData={usdData} />
      </div>


      {/* -------------------- Partners Section ------------------ */}
      <div className='block xl:flex items-center xl:gap-48 p-8 xl:p-32 bg-partners bg-cover mt-20'>
        <BlurContainer className='block text-center mb-12 xl:mb-0 xl:text-left xl:flex-1 lg:px-16'>
          <div className='text-4xl font-semibold mb-4 text-white'>{t('with-support')}</div>
          <div className='text-xl'>
            {partners.join(', ')}
          </div>
        </BlurContainer>
        <div className='block xl:flex-1'>
          <Partners />
        </div>
      </div>
    </div>


    {/* -------------------- UNIT Ø Introduction ------------------ */}
    <div className='flex items-center gap-32 xl:gap-40 px-8 xl:px-40 mb-32'>
      {!isMobile && <div className='hidden lg:block lg:flex-1 pointer-events-none lg:h-96 lg:w-40 xl:h-[36rem]'>
        <SplineClient url='https://prod.spline.design/noP1fbdLdVrd-p58/scene.splinecode' />
      </div>}
      <BlurContainer className='text-center lg:text-left flex-1 xl:py-12 xl:px-16'>
        <div className='text-4xl font-semibold mb-4 text-white'>UNIT Ø</div>
        <div className='text-xl'>
          {t.rich('unit-algorithm', whiteTrans)}
          &nbsp;
          <span>
            <LinkButton 
              title={t.rich('launch-app', whiteTrans)} 
              link={appUrl} 
              small 
            />
          </span>
          &nbsp;
          {t.rich('to-play', whiteTrans)}
        </div>
      </BlurContainer>
    </div>
    

    {/* -------------------- Youtube Channel ------------------ */}
    <div className='text-4xl text-center font-semibold mb-4 text-white'>{t('our-channel')}</div>
    <div className='text-xl text-center max-w-[44rem] mx-auto mb-7 w-full'>{t.rich('channel-intro', whiteTrans)}</div>
    <iframe
      src="https://www.youtube.com/embed/AY21_jBE-oQ?rel=0"
      title="How to Create and Update a UNIT Vault"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className='max-w-4xl mx-auto w-full aspect-video shadow-2xl shadow-white/20'
    ></iframe>

    {/* -------------------- Index Table ------------------ */}
    <div className='px-8 lg:px-32 py-16 my-40 relative'>
      <div className='absolute left-0 lg:left-32 bottom-16 top-16 right-32 rounded-lg' />
      <div className='flex items-center gap-20 bg-black-bgd/40 backdrop-blur-sm rounded-lg border border-gray-border px-1 md:px-9 py-8 md:py-24 bg-index bg-no-repeat bg-[length:60%] bg-right-bottom'>
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

    {/* -------------------- From the blog ------------------ */}
    <Blogs 
      readMore={t('read-more')} 
      title={t('from-blog')} 
      subtitle={t.rich('blog-desc', whiteTrans)} 
    />
  </div>
}
