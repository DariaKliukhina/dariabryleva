import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, DEFAULT_LOCALE } from "./navigation";

export default createMiddleware({
  // A list of all locales that are supported

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,
  localePrefix,
  locales,
});

export const config = {
  matcher: ["/", "/(ru|en)/:path*"],
};
