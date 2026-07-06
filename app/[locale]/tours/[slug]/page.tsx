import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Icon from "@/components/Icon";
import { getTourDetail } from "@/data/tours";

interface TourPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

interface ItineraryText {
  location: string;
  title: string;
  description: string;
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const tour = getTourDetail(slug);

  if (!tour) {
    return { title: "Tour Not Found" };
  }

  const t = await getTranslations({ locale, namespace: "Tours" });
  return {
    title: t(`${slug}.title`),
    description: t(`${slug}.excerpt`),
  };
}

export default async function TourDetailPage({ params }: TourPageProps) {
  const { locale, slug } = await params;
  const tour = getTourDetail(slug);

  // No data entry for this slug → standard Next.js 404 page.
  if (!tour) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "TourDetailPage" });
  const tt = await getTranslations({ locale, namespace: "Tours" });

  const tags = tt.raw(`${slug}.tags`) as string[];
  // Translated itinerary text, aligned by index with the structural
  // itinerary (day number + icon) that lives in data/tours.ts.
  const itineraryText = tt.raw(`${slug}.itinerary`) as ItineraryText[];

  return (
    <div className="pt-12 pb-24 md:pb-section-gap">
      <div className="max-w-container mx-auto px-5 md:px-20">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 text-label-caps uppercase tracking-[0.1em] font-bold text-on-surface-variant"
        >
          <ol className="inline-flex items-center flex-wrap gap-y-1">
            <li>
              <Link href="/" className="hover:text-secondary">
                {t("home")}
              </Link>
            </li>
            <li className="flex items-center">
              <Icon name="chevron_right" className="text-sm mx-1" />
              <Link href="/tours" className="hover:text-secondary">
                {t("tours")}
              </Link>
            </li>
            <li aria-current="page" className="flex items-center">
              <Icon name="chevron_right" className="text-sm mx-1" />
              <span className="text-primary">{tt(`${slug}.title`)}</span>
            </li>
          </ol>
        </nav>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <section className="relative rounded-xl overflow-hidden h-[420px] md:h-[500px] shadow-soft-lg group">
            <Image
              src={tour.heroImage}
              alt={tt(`${slug}.imageAlt`)}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-container-low text-primary text-label-caps uppercase tracking-[0.1em] font-bold px-3 py-1.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-display text-display-lg-mobile md:text-display-lg text-on-primary mb-2">
                {tt(`${slug}.title`)}
              </h1>
              <p className="text-body-lg text-on-primary/90 flex items-center gap-2">
                <Icon name="route" />
                {tt(`${slug}.route`)}
              </p>
            </div>
          </section>

          {/* Itinerary Highlights */}
          <section>
            <div className="text-center mb-12">
              <h2 className="font-display text-headline-md text-primary inline-block pb-2 border-b-2 border-secondary">
                {t("itineraryHighlights")}
              </h2>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-surface-variant before:to-transparent">
              {tour.itinerary.map((day, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  {/* Timeline node */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-surface-container text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                    <Icon name={day.icon} className="text-sm font-bold" />
                  </div>

                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface rounded-lg p-6 shadow-soft border border-surface-variant/30 group-hover:border-secondary/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-label-caps uppercase tracking-[0.15em] font-bold text-secondary">
                        {t("day", { day: day.day })}
                      </span>
                      <span className="text-label-caps uppercase tracking-[0.1em] font-bold text-on-surface-variant flex items-center gap-1">
                        <Icon name="location_on" className="text-[16px]" />
                        {itineraryText[i]?.location}
                      </span>
                    </div>
                    <h3 className="font-display text-headline-sm text-primary mb-2">
                      {itineraryText[i]?.title}
                    </h3>
                    <p className="text-body-md text-on-surface-variant">
                      {itineraryText[i]?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Closing CTA */}
          <section className="bg-surface-container rounded-xl p-8 md:p-10 shadow-soft border border-surface-variant/50 text-center space-y-6">
            <h2 className="font-display text-headline-md text-primary">
              {tour.cta ? tt(`${slug}.cta.title`) : t("ctaTitleFallback")}
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              {tour.cta ? tt(`${slug}.cta.text`) : t("ctaTextFallback")}
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="text-label-caps uppercase tracking-[0.1em] font-bold bg-secondary text-on-secondary px-12 py-4 rounded-lg hover:opacity-90 transition-opacity shadow-soft inline-flex items-center gap-2"
              >
                {t("bookNow")}
                <Icon name="arrow_forward" className="text-sm" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
