import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import SectionHeader from "@/components/SectionHeader";
import StatsSection from "@/components/StatsSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "KWS DMC Korea is a premium Destination Management Company crafting bespoke journeys, exclusive access, and seamless travel across South Korea.",
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
          alt="Traditional Korean palace wall"
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
                eyebrow="ABOUT US"
                title="Welcome to KWS DMC Korea"
              />
              <div className="space-y-6 text-on-surface-variant text-body-lg leading-relaxed -mt-10">
                <p>
                  Founded on 1 June 2026, KOREA DMC – KOREA WITH SUE (KWS) is a professional Destination Management Company (DMC) dedicated to delivering exceptional travel and event management services throughout Korea.
                </p>
                <p>
                  Leveraging extensive industry expertise, strong local partnerships, and comprehensive destination knowledge, we provide customized solutions tailored to the unique objectives of our clients and partners. Our commitment to professionalism, operational excellence, and service quality enables us to deliver seamless experiences and successful outcomes across a wide range of travel and event programs.
                </p>
                <p>
                  At KWS, we strive to create lasting value through innovative planning, meticulous execution, and personalized service, ensuring that every project is managed to the highest standards.
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

      {/* Leadership Section (Replaces Guiding Principles) */}
<section className="py-20 bg-surface">
  <div className="max-w-container mx-auto px-gutter">
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
      
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <h2 className="text-display-lg text-primary font-display">
          Leadership
        </h2>
        <h3 className="text-headline-sm text-secondary">
          Ms. Sue Kim, Chief Executive Officer
        </h3>
        
        <div className="space-y-4 text-body-md text-on-surface">
          <p>
            KOREA DMC – KOREA WITH SUE (KWS) is led by Ms. Sue Kim, a highly respected tourism professional with more than 25 years of experience in the travel and hospitality industry.
          </p>
          <p>
            Throughout her distinguished career, Ms. Kim has successfully designed and managed international MICE events, incentive programs, corporate meetings, educational tours, and luxury travel experiences for clients from around the world.
          </p>
          <p>
            Her extensive industry expertise, strong supplier relationships, and unwavering commitment to service excellence have earned the trust and confidence of global partners and stakeholders.
          </p>
          <p>
            Recognized for her professionalism, leadership, and dedication to quality, Ms. Kim brings a strategic and client-focused approach to every project. Her vision is to position KWS as a trusted and innovative destination management partner, delivering authentic Korean experiences and world-class travel solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* Our Expertise Section */}
<section className="py-20 bg-surface">
  <div className="max-w-container mx-auto px-gutter">
    
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-display-lg text-primary font-display">
        Our Expertise
      </h2>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* Card 1: MICE Solutions */}
      <div className="bg-white p-8 rounded-2xl shadow-soft border border-outline-variant hover:shadow-soft-lg transition-shadow duration-300 flex flex-col h-full">
        <h3 className="text-headline-sm text-primary font-display mb-3">
          MICE Solutions
        </h3>
        <p className="text-body-md text-on-surface">
          Professional planning and management of meetings, incentives, conferences, and exhibitions.
        </p>
      </div>

      {/* Card 2: Corporate Events */}
      <div className="bg-white p-8 rounded-2xl shadow-soft border border-outline-variant hover:shadow-soft-lg transition-shadow duration-300 flex flex-col h-full">
        <h3 className="text-headline-sm text-primary font-display mb-3">
          Corporate Events
        </h3>
        <p className="text-body-md text-on-surface">
          Comprehensive event management services for corporate meetings, executive programs, and business events.
        </p>
      </div>

      {/* Card 3: Incentive Travel */}
      <div className="bg-white p-8 rounded-2xl shadow-soft border border-outline-variant hover:shadow-soft-lg transition-shadow duration-300 flex flex-col h-full">
        <h3 className="text-headline-sm text-primary font-display mb-3">
          Incentive Travel
        </h3>
        <p className="text-body-md text-on-surface">
          Customized travel experiences designed to motivate, reward, and inspire participants.
        </p>
      </div>

      {/* Card 4: Educational Programs */}
      <div className="bg-white p-8 rounded-2xl shadow-soft border border-outline-variant hover:shadow-soft-lg transition-shadow duration-300 flex flex-col h-full">
        <h3 className="text-headline-sm text-primary font-display mb-3">
          Educational Programs
        </h3>
        <p className="text-body-md text-on-surface">
          Tailor-made educational tours, academic exchanges, and student travel programs.
        </p>
      </div>

      {/* Card 5: Luxury Travel */}
      <div className="bg-white p-8 rounded-2xl shadow-soft border border-outline-variant hover:shadow-soft-lg transition-shadow duration-300 flex flex-col h-full">
        <h3 className="text-headline-sm text-primary font-display mb-3">
          Luxury Travel
        </h3>
        <p className="text-body-md text-on-surface">
          Exclusive and personalized itineraries featuring premium accommodations, VIP services, and unique experiences.
        </p>
      </div>

      {/* Card 6: Cultural Experiences */}
      <div className="bg-white p-8 rounded-2xl shadow-soft border border-outline-variant hover:shadow-soft-lg transition-shadow duration-300 flex flex-col h-full">
        <h3 className="text-headline-sm text-primary font-display mb-3">
          Cultural Experiences
        </h3>
        <p className="text-body-md text-on-surface">
          Authentic programs showcasing Korea's rich heritage, culture, traditions, and lifestyle.
        </p>
      </div>

      {/* Card 7: Group & FIT Services */}
      <div className="bg-white p-8 rounded-2xl shadow-soft border border-outline-variant hover:shadow-soft-lg transition-shadow duration-300 flex flex-col h-full">
        <h3 className="text-headline-sm text-primary font-display mb-3">
          Group & FIT Services
        </h3>
        <p className="text-body-md text-on-surface">
          Comprehensive travel arrangements for groups and independent travelers.
        </p>
      </div>

      {/* Card 8: Technical & Industry Visits */}
      <div className="bg-white p-8 rounded-2xl shadow-soft border border-outline-variant hover:shadow-soft-lg transition-shadow duration-300 flex flex-col h-full">
        <h3 className="text-headline-sm text-primary font-display mb-3">
          Technical &amp; Industry Visits
        </h3>
        <p className="text-body-md text-on-surface">
          Specialized programs providing access to Korea's leading industries, institutions, and innovation sectors.
        </p>
      </div>

    </div>
  </div>
</section>

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
            Contact Us Now
          </Button>
        </div>
      </section>
    </>
  );
}
