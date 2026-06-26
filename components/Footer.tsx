import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Icon from "./Icon";

export default function Footer() {
  const t = useTranslations("Footer");

  const footerColumns = [
    {
      heading: t("columns.company.heading"),
      links: [
        { label: t("columns.company.about"), href: "/about" },
        { label: t("columns.company.tours"), href: "/tours" },
        { label: t("columns.company.faq"), href: "/faq" },
      ],
    },
    {
      heading: t("columns.legal.heading"),
      links: [
        { label: t("columns.legal.terms"), href: "/contact" },
        { label: t("columns.legal.privacy"), href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-on-primary">
      <div className="max-w-container mx-auto px-5 md:px-20 py-20 md:py-section-gap grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="md:col-span-2 space-y-6">
          <Link href="/" className="inline-block">
            <Image
              src="/assets/stitch/logo.png"
              alt="KWS DMC Korea logo"
              width={160}
              height={64}
              className="h-16 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-body-md text-surface-variant max-w-sm">
            {t("address")}
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-surface-variant/30 flex items-center justify-center text-surface-variant hover:text-secondary-fixed hover:border-secondary-fixed transition-colors"
            >
              <Icon name="photo_camera" className="text-[20px]" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full border border-surface-variant/30 flex items-center justify-center text-surface-variant hover:text-secondary-fixed hover:border-secondary-fixed transition-colors"
            >
              <Icon name="play_circle" className="text-[20px]" />
            </a>
            <a
              href="mailto:kws@koreawithsue.co.kr"
              aria-label="Email us"
              className="w-10 h-10 rounded-full border border-surface-variant/30 flex items-center justify-center text-surface-variant hover:text-secondary-fixed hover:border-secondary-fixed transition-colors"
            >
              <Icon name="mail" className="text-[20px]" />
            </a>
          </div>
        </div>

        {footerColumns.map((col) => (
          <div key={col.heading}>
            <h4 className="text-label-caps uppercase tracking-[0.15em] font-bold text-secondary-fixed mb-6">
              {col.heading}
            </h4>
            <ul className="space-y-4">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href as any}
                    className="text-body-md text-surface-variant hover:text-secondary-fixed transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-container mx-auto px-5 md:px-20 pb-10">
        <div className="pt-8 border-t border-on-primary/20 flex flex-col md:flex-row justify-between gap-4 text-label-caps uppercase tracking-[0.1em] font-bold text-surface-variant">
          <p>{t("rights")}</p>
          <p>{t("contactInfo")}</p>
        </div>
      </div>
    </footer>
  );
}