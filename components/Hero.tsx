import Image from "next/image";
import { useTranslations } from "next-intl"; // Import the translation hook
import Button from "./Button";
import Icon from "./Icon";
import TourSearchBar from "./TourSearchBar";

export default function Hero() {
  // Target the "Hero" namespace in your JSON files
  const t = useTranslations("Hero"); 

  // Move the badges array inside so it can use the 't' function
  const trustBadges = [
    { icon: "verified", label: t("badges.b2b") },
    { icon: "translate", label: t("badges.multilingual") },
    { icon: "map", label: t("badges.custom") },
    { icon: "handshake", label: t("badges.trusted") },
  ];

  return (
    <section className="relative min-h-[760px] md:min-h-[820px] flex flex-col justify-center items-center text-center px-5 md:px-20 pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/stitch/hero-palace.jpg"
          alt={t("altPalace")} // Translated alt text
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center py-24 md:py-32">
        <h1 className="font-display text-display-lg-mobile md:text-display-lg text-on-primary mb-6 drop-shadow-md">
          {t("title")} {/* Translated heading */}
        </h1>
        <p className="text-body-lg text-surface-bright mb-10 max-w-2xl mx-auto drop-shadow">
          {t("subtitle")} {/* Translated paragraph */}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
          <Button href="/tours" variant="gold" className="shadow-cta">
            {t("ctaBook")} {/* Translated button */}
          </Button>
          <Button href="/contact" variant="ghost-light">
            {t("ctaQuote")} {/* Translated button */}
          </Button>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-90">
          {trustBadges.map((badge) => (
            <li
              key={badge.label}
              className="flex items-center gap-2 text-on-primary text-label-caps uppercase tracking-[0.1em] font-bold"
            >
              <Icon name={badge.icon as any} className="text-secondary-fixed text-[20px]" />
              <span>{badge.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Floating search bar overlapping the hero bottom edge */}
      <div className="relative z-20 w-full max-w-container translate-y-1/2 -mt-10 hidden md:block">
        <TourSearchBar />
      </div>
      <div className="relative z-20 w-full -mb-8 mt-4 md:hidden">
        <TourSearchBar />
      </div>
    </section>
  );
}