import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ToursPage" });
  return { title: t("title"), description: t("subtitle") };
}

export default function ToursPage() {
  const t = useTranslations("ToursPage");

  return (
    <div className="pt-12 pb-20 md:pb-section-gap">
      <section className="max-w-container mx-auto px-5 md:px-20 text-center mb-16">
        <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-6">
          {t("title")}
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </section>

      <section className="max-w-container mx-auto px-5 md:px-20">
        <div className="flex flex-col lg:flex-row gap-gutter items-start">
          <div className="w-full">
            <div className="flex justify-between items-center mb-8">
              <p className="text-body-md text-on-surface-variant">
                {t("showing", { count: tours.length })}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tours.map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
