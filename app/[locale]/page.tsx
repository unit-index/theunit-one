import Partners from '@/components/Partners'
import SplineClient from '@/components/SplineClient'
import LineButton from '@/components/button/LineButton'
import { appUrl, localUSDPlaceholder } from '@/utils/constants'
import { headers } from 'next/headers';
import { useLocale, useTranslations } from 'next-intl'
import Blogs from '@/components/Blogs'
import Accounted from '@/components/Accounted'
import BlurContainer from '@/components/BlurContainer'
import { sanityGraphqlEndpoint } from '@/sanity/lib/client'
import Description from '@/components/Description'
import { request, gql } from 'graphql-request'
import { Blogs as BlogInfo, Hero, MarketCap, Partners as PartnerItems, Supports, Traders, Unit, Youtube } from '@/sanity.types'

const query = gql`
  query getHomePage($locale: String!) {
    allHomepage(where: {language: {eq: $locale}}) {
    _id
  	sections {
      ... on Blogs {
        _type
        sectionTitle
        descriptionRaw
      }
      ... on Hero {
        _type
        sectionTitle
        descriptionRaw
        ctaText
        ctaLink
        image
      }
      ... on MarketCap {
        _type
        unitCap
        unitCapTitle
        usdCap
        usdCapTitle
      }
      ... on Partners {
        _type
        partners {
          name
          logo
        }
      }
      ... on Supports {
        _type
        sectionTitle
        descriptionRaw
      }
      ... on Traders {
        _type
        sectionTitle
        descriptionRaw
        image
      }
      ... on Unit {
        _type
        sectionTitle
        descriptionRaw
        spline
      }
      ... on Youtube {
        _type
        sectionTitle
        descriptionRaw
        videoUrl
        videoTitle
      }
    } 
  }
  }
`

export default async function HomePage() {
  let data = localUSDPlaceholder;
  const headerList = headers();
  const locale = useLocale();
  const userAgent = headerList.get('user-agent') ?? '';
  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  const events = await request(sanityGraphqlEndpoint!, query, { locale })
  
  return <Home data={(events as any).allHomepage[0].sections} isMobile={isMobile} />
}



function Home({
  data,
  isMobile
} : {
  data: any,
  isMobile: boolean
}) {

  const t = useTranslations('Index');

  const hero = data.find((d: any) => d._type === 'hero') as Hero;
  const caps = data.find((d: any) => d._type === 'marketCap') as MarketCap;
  const supports = data.find((d: any) => d._type === 'supports') as Supports;
  const partners = data.find((d: any) => d._type === 'partners') as PartnerItems;
  const unit = data.find((d: any) => d._type === 'unit') as Unit;
  const youtube = data.find((d: any) => d._type === 'youtube') as Youtube;
  const traders = data.find((d: any) => d._type === 'traders') as Traders;
  const blogInfo = data.find((d: any) => d._type === 'blogs') as BlogInfo;

  return <div className='bg-home-bottom bg-no-repeat bg-bottom bg-contain pb-56'>

    {/* -------------------- First Screen: slogan and the balance animation ------------------ */}
    <div className='mt-16 lg:mt-0 xl:mt-0 flex items-center'>
      <div className='mx-auto text-center lg:text-left lg:ml-12 xl:ml-36 max-w-xs sm:max-w-md flex-none'>
        <div className='text-7xl text-white mb-4'>
          <span className='font-bold'>{hero.sectionTitle}</span>
        </div>
        <div className='mb-10 px-2 sm:px-0'>
          <Description text={hero.descriptionRaw} />
        </div>
        <LineButton link={appUrl} title={t('launch-app')} className='w-60' />
      </div>
      <img className='h-screen' src={hero.image!} alt='The Unit' />
    </div>


    <div className='bg-home-bgd1 bg-no-repeat bg-left pt-16 pb-16'>
      {/* -------------------- Value Accounted ------------------ */}
      <div className='lg:flex items-center gap-24 justify-center my-32'>
        <Accounted title={caps.unitCapTitle} data={caps.unitCap} />
        <div className='w-0 h-12 lg:block lg:w-[1px] lg:h-7 bg-gray-light'></div>
        <Accounted title={caps.usdCapTitle} data={caps.usdCap} isUSD />
      </div>


      {/* -------------------- Partners Section ------------------ */}
      <div className='block xl:flex items-center xl:gap-48 p-8 xl:p-32 bg-partners bg-cover mt-20'>
        <BlurContainer className='block text-center mb-12 xl:mb-0 xl:text-left xl:flex-1 lg:px-16'>
          <div className='text-4xl font-semibold mb-4 text-white'>{supports.sectionTitle}</div>
          <div className='text-xl'>
            <Description text={supports.descriptionRaw} />
          </div>
        </BlurContainer>
        <div className='block xl:flex-1'>
          <Partners partners={partners.partners as any} />
        </div>
      </div>
    </div>


    {/* -------------------- UNIT Ø Introduction ------------------ */}
    <div className='flex items-center gap-32 xl:gap-40 px-8 xl:px-40 mb-32'>
      {!isMobile && <div className='hidden lg:block lg:flex-1 pointer-events-none lg:h-96 lg:w-40 xl:h-[36rem]'>
        <SplineClient url={unit.spline} />
      </div>}
      <BlurContainer className='text-center lg:text-left flex-1 xl:py-12 xl:px-16'>
        <div className='text-4xl font-semibold mb-4 text-white'>{unit.sectionTitle}</div>
        <div className='text-xl'>
          <Description text={unit.descriptionRaw} />
        </div>
      </BlurContainer>
    </div>
    

    {/* -------------------- Youtube Channel ------------------ */}
    <div className='text-4xl text-center font-semibold mb-4 text-white'>{youtube.sectionTitle}</div>
    <div className='text-xl text-center max-w-[44rem] mx-auto mb-7 w-full'>
      <Description text={youtube.descriptionRaw} />
    </div>
    <iframe
      src={youtube.videoUrl}
      title={youtube.videoTitle}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className='max-w-4xl mx-auto w-full aspect-video shadow-2xl shadow-white/20'
    ></iframe>

    {/* -------------------- Index Table ------------------ */}
    <div className='px-8 lg:px-32 py-16 my-40 relative'>
      <div className='absolute left-0 lg:left-32 bottom-16 top-16 right-32 rounded-lg' />
      <div className='flex items-center gap-20 bg-black-bgd/40 backdrop-blur-sm rounded-lg border border-gray-border px-1 md:px-9 py-8 md:py-24 bg-index bg-no-repeat bg-[length:60%] bg-right-bottom'>
        <div className='flex-1 px-3 lg:pl-11 lg:pr-0 text-center lg:text-left'>
          <div className='text-4xl font-semibold mb-4 text-white'>{traders.sectionTitle}</div>
          <div className='text-xl'>
            <Description text={traders.descriptionRaw} />
          </div>
        </div>
        <div className='hidden lg:block flex-1'>
          <img src={traders.image} alt='Index Fund' className='w-full' />
        </div>
      </div>
    </div>

    {/* -------------------- From the blog ------------------ */}
    <Blogs 
      readMore={t('read-more')} 
      title={blogInfo.sectionTitle} 
    >
      <Description text={blogInfo.descriptionRaw} />
    </Blogs>
  </div>
}
