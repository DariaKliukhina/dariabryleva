import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, DEFAULT_LOCALE} from './navigation';
 
export default createMiddleware({
  // A list of all locales that are supported
 
  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,
  localePrefix,
  locales
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|en)/:path*']
};