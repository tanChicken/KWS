import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  return { title: t("storyTitle"), description: t("heroSubtitle") };
}

interface ExpertiseItem {
  title: string;
  text: string;
}

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  const storyParagraphs = t.raw("storyParagraphs") as string[];
  const leadershipParagraphs = t.raw("leadershipParagraphs") as string[];
  const expertiseItems = t.raw("expertiseItems") as ExpertiseItem[];

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[70vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/stitch/about-hero.jpg"
          alt={t("heroAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.6]"
        />
        <div className="relative z-10 max-w-container mx-auto px-5 md:px-20 text-center">
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-on-primary mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-body-lg text-on-primary/90 max-w-2xl mx-auto leading-relaxed">
            {t("heroSubtitle")}
          </p>
        </div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Company story */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-container mx-auto px-5 md:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 w-full space-y-8">
              <SectionHeader
                eyebrow={t("storyEyebrow")}
                title={t("storyTitle")}
              />
              <div className="space-y-6 text-on-surface-variant text-body-lg leading-relaxed -mt-10">
                {storyParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              {/* <div className="relative"> */}
                <div
                  className="absolute -inset-4 border border-primary/10 rounded translate-x-4 translate-y-4"
                  aria-hidden="true"
                />
                <div className="relative w-full h-[420px] md:h-[600px] rounded overflow-hidden shadow-soft-lg">
                  <Image
                    src="/assets/stitch/about-temple.jpg"
                    alt={t("storyImageAlt")}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-container mx-auto px-gutter">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-display-lg text-primary font-display">
                {t("leadershipTitle")}
              </h2>
              <h3 className="text-headline-sm text-secondary">
                {t("leadershipName")}
              </h3>
              <div className="space-y-4 text-body-md text-on-surface">
                {leadershipParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-container mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="text-display-lg text-primary font-display">
              {t("expertiseTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-soft border border-outline-variant hover:shadow-soft-lg transition-shadow duration-300 flex flex-col h-full"
              >
                <h3 className="text-headline-sm text-primary font-display mb-3">
                  {item.title}
                </h3>
                <p className="text-body-md text-on-surface">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-container mx-auto px-5 md:px-20 text-center">
          <h2 className="font-display text-headline-md text-primary mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
            {t("ctaSubtitle")}
          </p>
          <Button href="/contact" variant="primary">
            {t("ctaButton")}
          </Button>
        </div>
      </section>
    </>
  );
}
