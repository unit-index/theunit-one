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
import { Blogs as BlogInfo, Hero, MarketCap, Partners as PartnerItems, Supports, Traders, Unit, Youtube, Dao, Farm, BottomSection } from '@/sanity.types'
import ThemeButton from '@/components/button/ThemeButton';
import GradientBox from '@/components/GradientBox';

const query = gql`
  query getHomePage($locale: String!) {
    allHomepage(where: {language: {eq: $locale}}) {
    _id
  	sections {
      ... on Blogs {
        _type
        sectionTitle
        description: descriptionRaw
      }
      ... on Hero {
        _type
        sectionTitle
        description: descriptionRaw
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
        description: descriptionRaw
      }
      ... on Dao {
        _type
        sectionTitle
        description: descriptionRaw
        buttonText
        buttonLink
        image
      }
      ... on Farm {
        _type
        sectionTitle
        description: descriptionRaw
      }
      ... on BottomSection {
        _type
        image
      }
      ... on Unit {
        _type
        sectionTitle
        feature1Title
        feature1: feature1Raw
        feature2Title
        feature2: feature2Raw
      }
      ... on Youtube {
        _type
        sectionTitle
        description: descriptionRaw
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
  const events = await request(sanityGraphqlEndpoint, query, { locale })
  
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
  const dao = data.find((d: any) => d._type === 'dao') as Dao;
  const farm = data.find((d: any) => d._type === 'farm') as Farm;
  const bottomSection = data.find((d: any) => d._type === 'bottomSection') as BottomSection;
  const blogInfo = data.find((d: any) => d._type === 'blogs') as BlogInfo;

  return <>

    {/* -------------------- First Screen: slogan and the balance animation ------------------ */}
    <div className='h-screen flex flex-col justify-center items-center gap-6'>
      <div className='font-bold text-[80px] leading-[100px] max-w-[808px] text-center'>
        {hero.sectionTitle}
      </div>
      <div className='max-w-[808px] text-center'>
        <Description text={hero.description} />
      </div>
      <div className='w-full flex flex-col gap-0 items-center'>
        <ThemeButton link={hero.ctaText} title={hero.ctaText} />
        <img src={hero.image} alt='UNIT' className='w-full' />
      </div>
    </div>


    <div className='flex flex-col gap-32 max-w-[1248px] mx-auto mt-32'>
    {/* -------------------- Partners Section ------------------ */}
    <div className='flex flex-col items-center gap-16'>
        <div className='text-[48px] text-center'>{supports.sectionTitle}</div>
          <Partners partners={partners.partners as any} />
      </div>




      {/* -------------------- Value Accounted ------------------ */}
      <div>
        <div className='w-full flex items-center mb-2'>
          <div className='bg-[#C6C6C6] h-[1px] flex-auto' />
          <div className='flex-none px-8 font-bold text-[72px] leading-[90px]'>
            {caps.unitCap}
          </div>
          <div className='bg-[#C6C6C6] h-[1px] flex-auto' />
        </div>
        <div className='text-center font-light'>
          {caps.unitCapTitle}
        </div>
      </div>

      <GradientBox className='relative flex justify-between pl-20 py-28 items-center'>
        <div className='font-bold text-[64px] leading-[80px]'>{unit.sectionTitle}</div>
        <div className='absolute -right-8 flex items-center gap-8'>
          <div className='rounded-lg py-8 px-12 bg-white max-w-[395px] shadow-2xl'>
            <GradientBox className='rounded-full py-2 px-3 font-bold mb-2.5 inline-block'>
              {unit.feature1Title}
            </GradientBox>
            <Description text={unit.feature1} />
          </div>
          <div className='rounded-lg py-8 px-12 bg-white max-w-[439px] shadow-2xl'>
            <GradientBox className='rounded-full py-2 px-3 font-bold mb-2.5 inline-block'>
              {unit.feature2Title}
            </GradientBox>
            <Description text={unit.feature2} />
          </div>
        </div>
      </GradientBox>

      <div className='flex items-center border border-[#E7E7E7] gap-[59px]'>
        <img className='flex-none h-[417px]' src={dao.image} alt='UNIT DAO' />
        <div>
          <div className='font-medium text-[48px] leading-[60px] mb-2'>{dao.sectionTitle}</div>
          <Description text={dao.description} />
          <ThemeButton link={dao.buttonLink} title={dao.buttonText} className='mt-11 inline-block' />
        </div>
      </div>

      <div className='max-w-[450px]'>
        <div className='mb-5 font-medium text-[48px] leading-[60px]'>
          {farm.sectionTitle}
        </div>
        <Description text={farm.description} />
      </div>
    

    {/* -------------------- Youtube Channel ------------------ */}
    <div className='text-4xl text-center font-semibold mb-4 text-white'>{youtube.sectionTitle}</div>
    <div className='text-xl text-center max-w-[44rem] mx-auto mb-7 w-full'>
      <Description text={youtube.description} />
    </div>
    <iframe
      src={youtube.videoUrl}
      title={youtube.videoTitle}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className='max-w-4xl mx-auto w-full aspect-video shadow-2xl shadow-white/20'
    ></iframe>

    {/* -------------------- From the blog ------------------ */}
    <Blogs 
      readMore={t('read-more')} 
      title={blogInfo.sectionTitle} 
    >
      <Description text={blogInfo.description} />
    </Blogs>
    </div>
  </>
}
