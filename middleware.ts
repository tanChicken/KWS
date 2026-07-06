import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
 
export default createMiddleware(routing);
 
export const config = {
  // Matcher ignores internal Next.js files (_next, api, assets, etc.)
  // and applies routing language prefixes to all page paths.
  // `admin` is excluded so the TinaCMS dashboard (public/admin) is served
  // without a locale prefix.
  matcher: [
    "/",
    "/(en|ko|zh)/:path*",
    "/((?!api|admin|_next|_vercel|.*\\..*).*)"
  ]
};