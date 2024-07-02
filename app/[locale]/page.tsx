import Partners from '@/components/Partners'
import { localUSDPlaceholder } from '@/utils/constants'
import { headers } from 'next/headers';
import { useLocale, useTranslations } from 'next-intl'
import Blogs from '@/components/Blogs'
import { sanityGraphqlEndpoint } from '@/sanity/lib/client'
import Description from '@/components/Description'
import { request, gql } from 'graphql-request'
import { Blogs as BlogInfo, Hero, MarketCap, Partners as PartnerItems, Supports, Unit, Dao, Farm, BottomSection, FaqItem, SocialItem, HomeVault, HomeAlpha } from '@/sanity.types'
import ThemeButton from '@/components/button/ThemeButton';
import GradientBox from '@/components/GradientBox';
import Image from 'next/image';
import FAQ from '@/components/FAQ';

const socialColors = [
  '#000000',
  '#8259DD',
  '#29BDFD',
]

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
      ... on HomeAlpha {
        _type
        sectionTitle
        description: descriptionRaw
        image
        btnTitle
        btnLink
      }
      ... on HomeVault {
        _type
        sectionTitle
        description: descriptionRaw
        image
        btnTitle
        btnLink
      }
    } 
    socials {
      logo
      ctaLink
      ctaText
      description
    }
    faqs {
      question
      answer: answerRaw
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
  
  return <Home allData={(events as any).allHomepage[0]} isMobile={isMobile} />
}



function Home({
  allData,
  isMobile
} : {
  allData: any,
  isMobile: boolean
}) {

  const t = useTranslations('Index');
  const data = allData.sections;

  const hero = data.find((d: any) => d._type === 'hero') as Hero;
  const caps = data.find((d: any) => d._type === 'marketCap') as MarketCap;
  const supports = data.find((d: any) => d._type === 'supports') as Supports;
  const partners = data.find((d: any) => d._type === 'partners') as PartnerItems;
  const homeVault = data.find((d: any) => d._type === 'homeVault') as HomeVault;
  const homeAlpha = data.find((d: any) => d._type === 'homeAlpha') as HomeAlpha;
  const dao = data.find((d: any) => d._type === 'dao') as Dao;
  const farm = data.find((d: any) => d._type === 'farm') as Farm;
  const blogInfo = data.find((d: any) => d._type === 'blogs') as BlogInfo;
  const bottomSection = data.find((d: any) => d._type === 'bottomSection') as BottomSection;
  const faqs: FaqItem[] = allData.faqs as unknown as FaqItem[];
  const socials: SocialItem[] = allData.socials as unknown as SocialItem[];
  

  return <>

    {/* -------------------- First Screen: slogan and the balance animation ------------------ */}
    <div className='h-screen flex flex-col justify-center items-center gap-7'>
      <div className='font-bold text-[80px] text-title leading-[100px] max-w-[808px] text-center'>
        {hero.sectionTitle}
      </div>
      <div className='max-w-[808px] text-center'>
        <Description text={hero.description} />
      </div>
      <div className='w-full flex flex-col gap-0 items-center'>
        <ThemeButton link={hero.ctaText} title={hero.ctaText} />
      </div>
    </div>


    <div className='flex flex-col gap-32 max-w-[1300px] mx-auto mt-32'>
    {/* -------------------- Partners Section ------------------ */}
    <div className='bg-union bg-center bg-no-repeat'>
    <div className='flex flex-col items-center gap-16 mb-32'>
        <div className='text-[48px] text-center text-title'>{supports.sectionTitle}</div>
          <Partners partners={partners.partners as any} />
      </div>




      {/* -------------------- Value Accounted ------------------ */}
      <div className='text-title'>
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
    </div>

      <div className='grid grid-cols-2 items-center'>
        <img src={homeVault.image} alt="TINU" className='w-full' />
        <div className='px-12 text-center'>
          <div className='text-[48px] text-title mb-2 leading-[1.3]'>
            {homeVault.sectionTitle}
          </div>
          <div className='text-2xl mb-11'>
            <Description text={homeVault.description} />
          </div>
          <ThemeButton link={homeVault.btnLink} title={homeVault.btnTitle} className='px-24' />
        </div>
      </div>

      <div className='grid grid-cols-2 items-center'>
        <div className='px-12 text-center'>
          <div className='text-[48px] text-title mb-2 leading-[1.3]'>
            {homeAlpha.sectionTitle}
          </div>
          <div className='text-2xl mb-11'>
            <Description text={homeAlpha.description} />
          </div>
          <ThemeButton link={homeAlpha.btnLink} title={homeAlpha.btnTitle} className='px-10' />
        </div>
        <img src={homeAlpha.image} alt="TINU" className='w-full h-auto' />
      </div>

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


      <div className="grid gap-10 grid-cols-1 md:grid-cols-3 text-white">
          {socials.map((so, index) => (
              <CommunityLink key={so.name} item={so} index={index} />
          ))}
      </div>
    

    {/* -------------------- From the blog ------------------ */}
    <Blogs 
      readMore={t('read-more')} 
      title={blogInfo.sectionTitle} 
    >
      <Description text={blogInfo.description} />
    </Blogs>

    <div className="flex flex-col gap-6">
                {faqs.map((faq) => (
                    <FAQ 
                        key={faq._id}
                        question={faq.question} 
                        answer={(
                            <Description text={faq.answer} />
                        )} 
                    />
                ))}
            </div>

            <div className='flex items-center justify-center mb-32'>
                <Image src={bottomSection.image} alt='UNIT' width={386} height={124} />
            </div>
    </div>
  </>
}


export function CommunityLink({
  index,
  item,
} : {
  item: SocialItem,
  index: number,
}) {
return (
      <div className="h-56 flex gap-9 p-8 rounded-xl items-start" style={{ backgroundColor: socialColors[index] }}>
        <img className='flex-none' src={item.logo} alt={item.name} width={80} height={80} />
        <div className='h-full flex flex-col'>
          <div className='flex-auto'>
            {item.description}
          </div>
          <div className='w-fit flex-none rounded bg-white inline-flex px-3 py-1 items-center' style={{ color: socialColors[index] }}>
            {item.ctaText}
            
        <img 
                  src={`/social-${index+1}.svg`}
                  alt={item.name} 
                  width={20}
                  className="inline-block pl-1"
              />
          </div>
        </div>
      </div>
)
}