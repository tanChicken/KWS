import Image from "next/image";
import Button from "./Button";
import Icon from "./Icon";
import TourSearchBar from "./TourSearchBar";

const trustBadges = [
  { icon: "verified", label: "B2B & Individual Travelers" },
  { icon: "translate", label: "Multilingual Support" },
  { icon: "map", label: "Custom Korea Itineraries" },
  { icon: "handshake", label: "Trusted DMC Partner" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[760px] md:min-h-[820px] flex flex-col justify-center items-center text-center px-5 md:px-20 pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/stitch/hero-palace.jpg"
          alt="Traditional Korean palace in Seoul at golden hour sunset"
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
          Discover Korea the Right Way
        </h1>
        <p className="text-body-lg text-surface-bright mb-10 max-w-2xl mx-auto drop-shadow">
          Experience Korea with care, comfort, and unforgettable moments. We
          don&rsquo;t just plan trips — we create journeys that stay with you
          forever. Your reliable Destination Management Company in Korea.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
          <Button href="/tours" variant="gold" className="shadow-cta">
            Book Your Travel
          </Button>
          <Button href="/contact" variant="ghost-light">
            Request a Custom Quote
          </Button>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-90">
          {trustBadges.map((badge) => (
            <li
              key={badge.label}
              className="flex items-center gap-2 text-on-primary text-label-caps uppercase tracking-[0.1em] font-bold"
            >
              <Icon name={badge.icon} className="text-secondary-fixed text-[20px]" />
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
