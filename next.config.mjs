import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn-images-1.medium.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'play.google.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'medium.com',
          port: '',
        },
      ],
    },
};
 
export default withNextIntl(nextConfig);
