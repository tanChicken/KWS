import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import SectionHeader from "@/components/SectionHeader";
import StatsSection from "@/components/StatsSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Jane DMC Korea is a premium Destination Management Company crafting bespoke journeys, exclusive access, and seamless travel across South Korea.",
};

const principles = [
  {
    icon: "flag",
    title: "Mission",
    text: "To design unparalleled Korean travel experiences that foster deep connections and lasting memories.",
  },
  {
    icon: "verified",
    title: "Integrity",
    text: "Upholding the highest standards of transparency and reliability in every partnership and itinerary.",
  },
  {
    icon: "star",
    title: "Excellence",
    text: "A relentless commitment to flawless execution and meticulous curation in all we do.",
  },
  {
    icon: "volunteer_activism",
    title: "Authenticity",
    text: "Showcasing the true soul of Korea, respecting its heritage while embracing its modern vibrancy.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[70vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/stitch/about-hero.jpg"
          alt="Traditional Korean palace against mist-covered mountains at dawn"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.6]"
        />
        <div className="relative z-10 max-w-container mx-auto px-5 md:px-20 text-center">
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-on-primary mb-6">
            Discover the Soul of Korea
          </h1>
          <p className="text-body-lg text-on-primary/90 max-w-2xl mx-auto leading-relaxed">
            Your premier gateway to bespoke journeys, exclusive access, and
            seamless travel experiences across South Korea.
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
                eyebrow="Our Story"
                title="Welcome to Jane DMC Korea"
              />
              <div className="space-y-6 text-on-surface-variant text-body-lg leading-relaxed -mt-10">
                <p>
                  We are your trusted and reliable travel partner, dedicated to
                  showcasing the authentic beauty, vibrant culture, and
                  unparalleled hospitality of South Korea.
                </p>
                <p>
                  Founded on a passion for excellence, we curate experiences
                  that transcend the ordinary. Every itinerary is a
                  masterpiece, crafted with meticulous attention to detail and
                  a profound respect for our timeless heritage.
                </p>
                <p>
                  From individual travelers seeking once-in-a-lifetime moments
                  to global agencies entrusting us with their most valued
                  clients, we deliver Korea — the right way.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <div
                  className="absolute -inset-4 border border-primary/10 rounded translate-x-4 translate-y-4"
                  aria-hidden="true"
                />
                <div className="relative w-full h-[420px] md:h-[600px] rounded overflow-hidden shadow-soft-lg">
                  <Image
                    src="/assets/stitch/about-teahouse.jpg"
                    alt="Elegant Korean teahouse interior with warm sunlight through paper screens"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding principles */}
      <section className="py-20 md:py-24 bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-container mx-auto px-5 md:px-20">
          <SectionHeader
            align="center"
            title="Guiding Principles"
            subtitle="The foundational values that elevate every journey we design."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="group bg-surface-container-lowest p-8 rounded border border-primary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-card"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={principle.icon} filled className="text-secondary" />
                </div>
                <h3 className="font-display text-headline-sm text-primary mb-3">
                  {principle.title}
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise bento grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-container mx-auto px-5 md:px-20">
          <SectionHeader eyebrow="Our Services" title="Unrivaled Expertise" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[600px]">
            {/* Large feature: Curated Travel */}
            <div className="md:col-span-2 relative rounded overflow-hidden group h-72 md:h-auto">
              <Image
                src="/assets/stitch/service-curated.jpg"
                alt="Tranquil Korean landscape framed by traditional wooden architecture"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-on-primary">
                <span className="text-label-caps uppercase tracking-[0.15em] font-bold text-secondary-fixed mb-2 block">
                  01
                </span>
                <h3 className="font-display text-headline-sm mb-2">Curated Travel</h3>
                <p className="text-body-md text-on-primary/80 max-w-md">
                  Bespoke leisure itineraries designed for the discerning
                  traveler, blending culture, luxury, and unseen locales.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 md:h-full">
              {/* VIP & Concierge */}
              <div className="flex-1 relative rounded overflow-hidden group bg-surface-container-low border border-primary/10 h-56 md:h-auto">
                <Image
                  src="/assets/stitch/service-vip.jpg"
                  alt="Premium concierge welcome amenities on a gold tray"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-label-caps uppercase tracking-[0.15em] font-bold text-secondary-fixed mb-2 block">
                    02
                  </span>
                  <h3 className="font-display text-headline-sm text-on-primary">
                    VIP &amp; Concierge
                  </h3>
                </div>
              </div>

              {/* Corporate & MICE */}
              <div className="flex-1 relative rounded overflow-hidden group bg-primary h-56 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-container" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-on-primary">
                  <span className="text-label-caps uppercase tracking-[0.15em] font-bold text-secondary-fixed mb-2 block">
                    03
                  </span>
                  <h3 className="font-display text-headline-sm mb-2">
                    Corporate &amp; MICE
                  </h3>
                  <div className="mt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-body-md text-on-primary/70">Explore</span>
                    <Icon name="arrow_forward" className="text-secondary-fixed" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* CTA */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-container mx-auto px-5 md:px-20 text-center">
          <h2 className="font-display text-headline-md text-primary mb-4">
            Let&rsquo;s Craft Your Korea Story
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
            Speak with a consultant who knows every valley, table, and tide of
            the peninsula.
          </p>
          <Button href="/contact" variant="primary">
            Start the Conversation
          </Button>
        </div>
      </section>
    </>
  );
}
