import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import BookingPanel from "@/components/BookingPanel";
import TestimonialCard from "@/components/TestimonialCard";
import { highlandEscape } from "@/data/tours";

export const metadata: Metadata = {
  title: "The Ultimate Korea Highland Escape",
  description:
    "A 7-day luxury journey from Seoul through the pine forests of Gapyeong and the highlands of Gangwon-do to coastal Busan, by Jane DMC Korea.",
};

export default function HighlandEscapePage() {
  const tour = highlandEscape;

  return (
    <div className="pt-12 pb-24 md:pb-section-gap">
      <div className="max-w-container mx-auto px-5 md:px-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-label-caps uppercase tracking-[0.1em] font-bold text-on-surface-variant">
          <ol className="inline-flex items-center flex-wrap gap-y-1">
            <li>
              <Link href="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <Icon name="chevron_right" className="text-sm mx-1" />
              <Link href="/tours" className="hover:text-secondary">
                Tours
              </Link>
            </li>
            <li aria-current="page" className="flex items-center">
              <Icon name="chevron_right" className="text-sm mx-1" />
              <span className="text-primary">{tour.title}</span>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-gutter items-start">
          {/* Left column: content */}
          <div className="w-full lg:w-2/3 space-y-16">
            {/* Hero */}
            <section className="relative rounded-xl overflow-hidden h-[420px] md:h-[500px] shadow-soft-lg group">
              <Image
                src={tour.heroImage}
                alt={tour.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <div className="flex gap-2 mb-4">
                  {tour.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-low text-primary text-label-caps uppercase tracking-[0.1em] font-bold px-3 py-1.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="font-display text-display-lg-mobile md:text-display-lg text-on-primary mb-2">
                  {tour.title}
                </h1>
                <p className="text-body-lg text-on-primary/90 flex items-center gap-2">
                  <Icon name="route" />
                  Seoul — Gapyeong — Gangwon-do — Busan
                </p>
              </div>
            </section>

            {/* Overview */}
            <section className="bg-surface-container rounded-xl p-6 md:p-8 shadow-soft border border-surface-variant/50">
              <h2 className="font-display text-headline-md text-primary mb-6">
                Tour Overview
              </h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                {tour.overview}
              </p>
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-surface-variant/50">
                {tour.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-label-caps uppercase tracking-[0.1em] font-bold text-on-surface-variant mb-1">
                      {fact.label}
                    </dt>
                    <dd className="font-display text-headline-sm text-primary">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Itinerary timeline */}
            <section>
              <h2 className="font-display text-headline-md text-primary mb-8 border-b-2 border-secondary inline-block pb-2">
                Itinerary Highlights
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-surface-variant before:to-transparent">
                {tour.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-surface-container text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                      <Icon name={day.icon} className="text-sm font-bold" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface rounded-lg p-6 shadow-soft border border-surface-variant/30 group-hover:border-secondary/50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-label-caps uppercase tracking-[0.15em] font-bold text-secondary">
                          Day {day.day}
                        </span>
                        <span className="text-label-caps uppercase tracking-[0.1em] font-bold text-on-surface-variant flex items-center gap-1">
                          <Icon name="location_on" className="text-[16px]" />
                          {day.location}
                        </span>
                      </div>
                      <h3 className="font-display text-headline-sm text-primary mb-2">
                        {day.title}
                      </h3>
                      <p className="text-body-md text-on-surface-variant">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Included / Not included */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface rounded-xl p-8 shadow-soft border-t-4 border-t-secondary">
                <h3 className="font-display text-headline-sm text-primary mb-6 flex items-center gap-2">
                  <Icon name="check_circle" className="text-secondary" />
                  What&rsquo;s Included
                </h3>
                <ul className="space-y-4 text-body-md text-on-surface-variant">
                  {tour.included.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <Icon name={item.icon} className="text-sm text-secondary mt-1" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface rounded-xl p-8 shadow-soft border-t-4 border-t-surface-variant">
                <h3 className="font-display text-headline-sm text-primary mb-6 flex items-center gap-2">
                  <Icon name="cancel" className="text-outline" />
                  Not Included
                </h3>
                <ul className="space-y-4 text-body-md text-on-surface-variant opacity-80">
                  {tour.notIncluded.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <Icon name={item.icon} className="text-sm mt-1" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="font-display text-headline-md text-primary mb-8 border-b-2 border-secondary inline-block pb-2">
                Gallery
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {tour.gallery.map((photo, index) => (
                  <div
                    key={photo.image}
                    className={`relative rounded-xl overflow-hidden group ${
                      index === 0 ? "col-span-2 h-72 md:h-96" : "h-48 md:h-64"
                    }`}
                  >
                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Route map placeholder */}
            <section className="bg-surface rounded-xl overflow-hidden shadow-soft h-[400px] relative border border-surface-variant/30 flex items-center justify-center">
              <div className="absolute inset-0 bg-surface-container opacity-50" />
              <Icon
                name="map"
                className="!text-6xl text-surface-variant/60 absolute"
              />
              <div className="z-10 text-center px-6">
                <h3 className="font-display text-headline-sm text-primary mb-2">
                  Interactive Route Map
                </h3>
                <p className="text-body-md text-on-surface-variant mb-4">
                  Seoul to Busan via the Highlands
                </p>
                <button
                  type="button"
                  className="text-label-caps uppercase tracking-[0.1em] font-bold bg-transparent border border-primary text-primary px-4 py-2.5 rounded hover:bg-primary hover:text-on-primary transition-colors"
                >
                  Explore Route
                </button>
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="font-display text-headline-md text-primary mb-8 border-b-2 border-secondary inline-block pb-2">
                Traveler Reviews
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tour.reviews.map((review) => (
                  <TestimonialCard key={review.name} {...review} />
                ))}
              </div>
            </section>
          </div>

          {/* Right column: sticky booking panel (desktop) */}
          <div className="w-full lg:w-1/3 hidden lg:block">
            <BookingPanel />
          </div>
        </div>
      </div>

      {/* Mobile sticky bottom CTA */}
      <div className="fixed bottom-0 inset-x-0 bg-surface-container-lowest border-t border-outline-variant p-4 shadow-[0_-10px_20px_rgba(45,71,57,0.05)] z-40 lg:hidden flex justify-between items-center">
        <div>
          <p className="text-label-sm text-on-surface-variant">Starting from</p>
          <p className="font-display text-headline-sm text-primary">
            ${tour.priceFrom.toLocaleString()}{" "}
            <span className="text-body-md text-on-surface-variant font-body font-normal">
              / pp
            </span>
          </p>
        </div>
        <Link
          href="/contact"
          className="bg-secondary text-on-secondary text-label-caps uppercase tracking-[0.1em] font-bold px-6 py-3.5 rounded hover:opacity-90 transition-opacity"
        >
          Send Request
        </Link>
      </div>
    </div>
  );
}
