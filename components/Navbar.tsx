"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Icon from "./Icon";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  const navLinks = [
    { label: t("links.home"), href: "/" },
    { label: t("links.tours"), href: "/tours" },
    { label: t("links.about"), href: "/about" },
    { label: t("links.faq"), href: "/faq" },
    { label: t("links.contact"), href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl shadow-nav">
      <div className="max-w-container mx-auto px-5 md:px-20 flex justify-between items-center h-20">
        <Link href="/" className="flex items-center h-full py-2" onClick={() => setMenuOpen(false)}>
          <Image
            src="/assets/stitch/logo.png"
            alt="KWS DMC Korea logo"
            width={160}
            height={64}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className={`text-label-caps uppercase tracking-[0.1em] font-bold pb-1 transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-primary border-b-2 border-secondary"
                  : "text-on-surface-variant hover:text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />

          <Link
            href="/contact"
            className="border border-primary text-primary px-6 py-2.5 rounded text-label-caps uppercase tracking-[0.1em] font-bold hover:bg-surface-variant transition-colors"
          >
            {t("contactUs")}
          </Link>
          <Link
            href="/contact"
            className="bg-primary text-on-primary px-6 py-2.5 rounded text-label-caps uppercase tracking-[0.1em] font-bold hover:bg-primary-container transition-colors shadow-sm"
          >
            {t("planMyTrip")}
          </Link>
        </div>

        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden text-primary p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-20 bg-surface z-40 flex flex-col md:hidden">
          <nav aria-label="Mobile" className="flex flex-col p-5 space-y-6">
            <div className="flex items-center justify-between border-b border-surface-variant pb-4 mb-2">
              <span className="text-on-surface-variant font-bold uppercase tracking-wider text-sm">{t("language")}</span>
              <LanguageSwitcher />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                onClick={() => setMenuOpen(false)}
                className={`font-display text-display-lg-mobile border-b border-surface-variant pb-2 ${
                  isActive(link.href) ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-5 space-y-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full px-6 py-4 bg-secondary text-on-secondary text-label-caps uppercase tracking-[0.1em] font-bold rounded text-center"
            >
              {t("planMyTrip")}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full px-6 py-4 bg-primary text-on-primary text-label-caps uppercase tracking-[0.1em] font-bold rounded text-center"
            >
              {t("contactUs")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}