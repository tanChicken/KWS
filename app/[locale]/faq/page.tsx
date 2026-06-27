import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import Icon from "@/components/Icon";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about Jane DMC Korea's tours, hotel categories, dietary accommodations, customization options, and B2B partnership services.",
};

export default function FaqPage() {
  return (
    <div className="pt-12 pb-20 md:pb-section-gap">
      <section className="max-w-container mx-auto px-5 md:px-20 text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4 justify-center">
          <span className="w-12 h-px bg-secondary opacity-50" aria-hidden="true" />
          <span className="text-label-caps uppercase tracking-[0.2em] font-bold text-secondary">
            Support
          </span>
          <span className="w-12 h-px bg-secondary opacity-50" aria-hidden="true" />
        </div>
        <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Everything you need to know before entrusting us with your journey.
          Can&rsquo;t find your answer? Our consultants reply within 24 hours.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8">
        <FAQAccordion items={faqs} />
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8 mt-16">
        <div className="bg-primary rounded-xl p-8 md:p-12 text-center">
          <Icon name="contact_support" className="!text-5xl text-secondary-fixed mb-4" />
          <h2 className="font-display text-headline-md text-on-primary mb-3">
            Still Have Questions?
          </h2>
          <p className="text-body-md text-on-primary/80 max-w-md mx-auto mb-8">
            Whether you are an individual traveler or a partner agency, our
            team is ready to help you plan with confidence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container text-label-caps uppercase tracking-[0.1em] font-bold px-8 py-4 rounded hover:bg-secondary-fixed transition-colors"
          >
            Contact Our Team
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
