import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ko", "zh"],
 
  // Used when no locale matches or when visiting the root path
  defaultLocale: "en"
});
 
// Wrapped navigation utilities that automatically prepend the current locale
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);