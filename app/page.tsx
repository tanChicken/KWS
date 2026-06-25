import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import SectionHeader from "@/components/SectionHeader";
import TourCard from "@/components/TourCard";
import CategoryCard from "@/components/CategoryCard";
import TestimonialCard from "@/components/TestimonialCard";
import PartnerLogos from "@/components/PartnerLogos";
import { tours } from "@/data/tours";
import { categories } from "@/data/categories";
import { testimonials } from "@/data/testimonials";

const whyChooseUs = [
  {
    icon: "diversity_3",
    title: "Local Expertise",
    text: "Born and based in Korea, our consultants unlock places, tables, and moments no guidebook can reach.",
  },
  {
    icon: "tune",
    title: "Fully Tailor-Made",
    text: "Every itinerary is built from a blank page around your pace, passions, and dietary needs.",
  },
  {
    icon: "support_agent",
    title: "24/7 On-Trip Support",
    text: "A dedicated, multilingual consultant stays by your side from first inquiry to final farewell.",
  },
  {
    icon: "workspace_premium",
    title: "Premium Partnerships",
    text: "Preferred rates and privileges at Korea's finest hotels, venues, and private experiences.",
  },
];

const blogPosts = [
  {
    image: "/assets/stitch/seoul-night.jpg",
    alt: "Seoul skyline glittering at night",
    category: "City Guide",
    title: "48 Golden Hours in Seoul: A Connoisseur's Itinerary",
    excerpt:
      "From dawn at Gyeongbokgung to a midnight speakeasy in Euljiro — how to taste the capital's two souls in one weekend.",
  },
  {
    image: "/assets/stitch/about-tea-ceremony.jpg",
    alt: "Traditional Korean tea ceremony setting",
    category: "Culture",
    title: "The Quiet Luxury of the Korean Tea Ceremony",
    excerpt:
      "Inside the centuries-old ritual that slows time — and where to experience it privately with a tea master.",
  },
  {
    image: "/assets/stitch/tour-winter.jpg",
    alt: "Snow-covered alpine resort in Pyeongchang",
    category: "Seasonal",
    title: "Why Winter Is Korea's Best-Kept Secret",
    excerpt:
      "Powder slopes, steaming jjimjilbangs, and festive markets: the case for a December escape to the highlands.",
  },
];

export default function HomePage() {
  const bestSellers = tours.filter((tour) => tour.bestSeller).slice(0, 3);

  return (
    <>
      <Hero />

      {/* Spacer for the floating search bar overlap on desktop */}
      <div className="hidden md:block h-32" />

      {/* Best Selling Tours preview */}
      <section className="max-w-container mx-auto px-5 md:px-20 py-20 md:py-section-gap">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-2">
          <SectionHeader
            eyebrow="Curated Experiences"
            title="Best Selling Tours"
            subtitle="Exclusive journeys designed for the discerning traveler. Limited spots. Maximum impressions."
          />
          <Link
            href="/tours"
            className="hidden md:inline-flex items-center gap-2 mb-16 text-label-caps uppercase tracking-[0.1em] font-bold text-primary border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors whitespace-nowrap"
          >
            View All Tours
            <Icon name="arrow_forward" className="text-[16px]" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Button href="/tours" variant="outline">
            View All Tours
          </Button>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-container mx-auto px-5 md:px-20 py-20 md:py-section-gap">
          <SectionHeader
            eyebrow="Our Services"
            title="Journeys for Every Traveler"
            subtitle="From leisure and adventure to corporate MICE programs and medical tourism — one trusted partner for all of Korea."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-container mx-auto px-5 md:px-20 py-20 md:py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Travel Designed With Care"
              subtitle="We are not a marketplace. We are your Destination Management Company on the ground in Korea — accountable for every detail of your journey."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {whyChooseUs.map((item) => (
                <div key={item.title}>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={item.icon} filled className="text-secondary" />
                  </div>
                  <h3 className="font-display text-headline-sm text-[20px] text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-4 border border-primary/10 rounded translate-x-4 translate-y-4"
              aria-hidden="true"
            />
            <div className="relative h-[480px] lg:h-[600px] rounded overflow-hidden shadow-soft-lg">
              <Image
                src="/assets/stitch/about-tea-ceremony.jpg"
                alt="Elegant Korean interior prepared for a traditional tea ceremony"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Traveler Reviews */}
      <section className="bg-primary">
        <div className="max-w-container mx-auto px-5 md:px-20 py-20 md:py-section-gap">
          <SectionHeader
            eyebrow="Traveler Reviews"
            title="Stories From Our Guests"
            subtitle="Real journeys, told by the travelers and partners who lived them."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Inspiration / Blog */}
      <section className="max-w-container mx-auto px-5 md:px-20 py-20 md:py-section-gap">
        <SectionHeader
          eyebrow="Travel Inspiration"
          title="Notes From Korea"
          subtitle="Ideas, seasons, and stories to spark your next journey."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden border border-primary/10 shadow-soft hover:shadow-soft-lg transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-label-caps uppercase tracking-[0.15em] font-bold text-secondary mb-3">
                  {post.category}
                </p>
                <h3 className="font-display text-headline-sm text-[20px] text-primary mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-body-md text-on-surface-variant line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-label-caps uppercase tracking-[0.1em] font-bold text-primary group-hover:text-secondary transition-colors">
                  Read Story
                  <Icon name="arrow_forward" className="text-[16px]" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden">
        <Image
          src="/assets/stitch/hero-seoul.jpg"
          alt="Traditional Korean palace against the modern Seoul skyline"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative max-w-container mx-auto px-5 md:px-20 py-24 md:py-32 text-center">
          <h2 className="font-display text-display-lg-mobile md:text-display-lg text-on-primary mb-6">
            Ready to Discover Korea?
          </h2>
          <p className="text-body-lg text-on-primary/85 max-w-2xl mx-auto mb-10">
            Tell us your dates, interests, and dreams — our consultants will
            craft a journey worthy of them.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="gold" className="shadow-cta">
              Plan My Trip
            </Button>
            <Button href="/tours" variant="ghost-light">
              Browse Best Sellers
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
