import {useLocale} from 'next-intl';
import { Metadata } from 'next';
import {notFound} from 'next/navigation';
import localFont from 'next/font/local';
import MainLayout from '@/components/layout/MainLayout';
import { siteDescription, siteTitle, siteUrl } from '@/utils/constants';
import '../globals.css'

export const metadata: Metadata = {
  title: siteTitle,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'Unit Index',
    images: [
      {
        url: '/og.jpg',
        width: 816,
        height: 510,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    site: '@unit_index',
    creator: '@IbaiBasabe',
    images: ['/og.jpg'],
  },
}
 
const avenirFont = localFont({
  src: [
    {
      path: '../../public/fonts/ApercuPro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ApercuPro.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ApercuPro-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/ApercuPro-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
});

export default function LocaleLayout({
  children, 
  params
} : {
  children: React.ReactNode,
  params: { locale: string }
}) {
  const locale = useLocale();
 
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
 
  return (
    <html lang={locale} className={avenirFont.className}>
      <body className='text-body text-2xl'>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}