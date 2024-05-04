import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './navigation';
 
export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales
});
 
 
export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|studio|.*\\..*).*)']
};