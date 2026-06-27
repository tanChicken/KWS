"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { ChangeEvent, useTransition } from "react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    
    // startTransition prevents the UI from freezing while Next.js fetches the new route
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative inline-block">
      <select
        defaultValue={currentLocale}
        onChange={handleLanguageChange}
        disabled={isPending}
        className={`appearance-none bg-transparent border border-gray-300 text-sm rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer transition-opacity ${
          isPending ? "opacity-50 cursor-not-allowed" : "hover:border-gray-400"
        }`}
      >
        <option value="en">English</option>
        <option value="ko">한국어</option>
        <option value="zh">中文</option>
      </select>
      
      {/* Custom dropdown arrow to match standard UI patterns */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}