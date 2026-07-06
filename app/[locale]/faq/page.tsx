import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import FAQAccordion from "@/components/FAQAccordion";
import Icon from "@/components/Icon";
import type { Faq } from "@/data/faqs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FAQPage" });
  return { title: t("title"), description: t("subtitle") };
}

export default function FaqPage() {
  const t = useTranslations("FAQPage");
  const items = t.raw("items") as Faq[];

  return (
    <div className="pt-12 pb-20 md:pb-section-gap">
      <section className="max-w-container mx-auto px-5 md:px-20 text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4 justify-center">
          <span className="w-12 h-px bg-secondary opacity-50" aria-hidden="true" />
          <span className="text-label-caps uppercase tracking-[0.2em] font-bold text-secondary">
            {t("eyebrow")}
          </span>
          <span className="w-12 h-px bg-secondary opacity-50" aria-hidden="true" />
        </div>
        <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-6">
          {t("title")}
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8">
        <FAQAccordion items={items} />
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8 mt-16">
        <div className="bg-primary rounded-xl p-8 md:p-12 text-center">
          <Icon name="contact_support" className="!text-5xl text-secondary-fixed mb-4" />
          <h2 className="font-display text-headline-md text-on-primary mb-3">
            {t("stillHaveQuestionsTitle")}
          </h2>
          <p className="text-body-md text-on-primary/80 max-w-md mx-auto mb-8">
            {t("stillHaveQuestionsText")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container text-label-caps uppercase tracking-[0.1em] font-bold px-8 py-4 rounded hover:bg-secondary-fixed transition-colors"
          >
            {t("contactTeam")}
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
