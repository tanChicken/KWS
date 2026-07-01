import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Icon from "./Icon";
import type { Tour } from "@/data/tours";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const t = useTranslations("Tours");
  const tc = useTranslations("TourCard");
  const badges = useTranslations("Badges");
  const detailHref = `/tours/${tour.slug}`;

  const tags = t.raw(`${tour.slug}.tags`) as string[];

  return (
    <article className="bg-surface-container-lowest rounded-xl overflow-hidden border border-surface-variant/50 shadow-soft hover:shadow-soft-lg transition-shadow duration-300 flex flex-col">
      <div className="relative h-64 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent z-10 pointer-events-none" />
        <Image
          src={tour.image}
          alt={t(`${tour.slug}.imageAlt`)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          {tags.slice(0, 1).map((tag) => (
            <span
              key={tag}
              className="bg-primary-fixed text-on-primary-fixed text-label-caps uppercase tracking-[0.1em] font-bold px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
          {tour.badge && (
            <span className="bg-surface/90 backdrop-blur-sm text-primary text-label-caps uppercase tracking-[0.1em] font-bold px-3 py-1.5 rounded-full">
              {badges(tour.badge)}
            </span>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display text-headline-sm text-primary line-clamp-2 mb-2">
          {t(`${tour.slug}.title`)}
        </h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-on-surface-variant">
          <span className="flex items-center gap-1 text-label-sm">
            <Icon name="schedule" className="text-[18px]" />
            {t(`${tour.slug}.duration`)}
          </span>
          <span className="flex items-center gap-1 text-label-sm">
            <Icon name="location_on" className="text-[18px]" />
            {t(`${tour.slug}.route`)}
          </span>
        </div>
        <p className="text-body-md text-on-surface-variant mb-6 line-clamp-3">
          {t(`${tour.slug}.excerpt`)}
        </p>
        <div className="mt-auto">
          <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-4">
            {tour.priceFrom
              ? tc("fromPrice", { price: `$${tour.priceFrom.toLocaleString()}` })
              : ""}
          </p>
          <div className="pt-4 border-t border-surface-variant flex gap-3">
            <Link
              href={detailHref}
              className="flex-1 text-label-caps uppercase tracking-[0.1em] font-bold text-primary border border-primary py-2.5 rounded hover:bg-surface-variant transition-colors text-center"
            >
              {tc("viewDetails")}
            </Link>
            <Link
              href="/contact"
              className="flex-1 text-label-caps uppercase tracking-[0.1em] font-bold bg-secondary text-on-secondary py-2.5 rounded hover:opacity-90 transition-opacity text-center"
            >
              {tour.bestSeller ? tc("bookNow") : tc("sendRequest")}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
