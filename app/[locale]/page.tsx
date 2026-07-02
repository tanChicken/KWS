import Image from "next/image";
// IMPORTANT: Swapped next/link for our i18n link
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
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

export default function HomePage() {
  // Target the "HomePage" namespace in your JSON dictionary
  const t = useTranslations("HomePage");
  
  const bestSellers = tours.filter((tour) => tour.bestSeller).slice(0, 3);

  // Moved inside so we can translate the text
  const whyChooseUs = [
    {
      icon: "diversity_3",
      title: t("whyChooseUs.items.localExpertise.title"),
      text: t("whyChooseUs.items.localExpertise.text"),
    },
    {
      icon: "tune",
      title: t("whyChooseUs.items.tailorMade.title"),
      text: t("whyChooseUs.items.tailorMade.text"),
    },
    {
      icon: "support_agent",
      title: t("whyChooseUs.items.support.title"),
      text: t("whyChooseUs.items.support.text"),
    },
    {
      icon: "workspace_premium",
      title: t("whyChooseUs.items.partnerships.title"),
      text: t("whyChooseUs.items.partnerships.text"),
    },
  ];

  // Moved inside so we can translate the text
  const blogPosts = [
    {
      image: "/assets/stitch/seoul-night.jpg",
      alt: t("blog.posts.seoul.alt"),
      category: t("blog.posts.seoul.category"),
      title: t("blog.posts.seoul.title"),
      excerpt: t("blog.posts.seoul.excerpt"),
    },
    {
      image: "/assets/stitch/about-tea-ceremony.jpg",
      alt: t("blog.posts.tea.alt"),
      category: t("blog.posts.tea.category"),
      title: t("blog.posts.tea.title"),
      excerpt: t("blog.posts.tea.excerpt"),
    },
    {
      image: "/assets/stitch/tour-winter.jpg",
      alt: t("blog.posts.winter.alt"),
      category: t("blog.posts.winter.category"),
      title: t("blog.posts.winter.title"),
      excerpt: t("blog.posts.winter.excerpt"),
    },
  ];

  return (
    <>
      {/* Hero handles its own translations internally! */}
      <Hero />

      {/* <div className="hidden md:block h-32" /> */}

      {/* Best Selling Tours */}
      <section className="max-w-container mx-auto px-5 md:px-20 py-20 md:py-section-gap">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-2">
          <SectionHeader
            eyebrow={t("bestSelling.eyebrow")}
            title={t("bestSelling.title")}
            subtitle={t("bestSelling.subtitle")}
          />
          <Link
            href="/tours"
            className="hidden md:inline-flex items-center gap-2 mb-16 text-label-caps uppercase tracking-[0.1em] font-bold text-primary border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors whitespace-nowrap"
          >
            {t("bestSelling.viewAll")}
            <Icon name="arrow_forward" className="text-[16px]" />
          </Link>
        </div>
        
        {/* Note: TourCard data itself will need to be translated next! */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Button href="/tours" variant="outline">
            {t("bestSelling.viewAll")}
          </Button>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-container mx-auto px-5 md:px-20 py-20 md:py-section-gap">
          <SectionHeader
            eyebrow={t("services.eyebrow")}
            title={t("services.title")}
            subtitle={t("services.subtitle")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.key} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-container mx-auto px-5 md:px-20 py-20 md:py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow={t("whyChooseUs.eyebrow")}
              title={t("whyChooseUs.title")}
              subtitle={t("whyChooseUs.subtitle")}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {whyChooseUs.map((item) => (
                <div key={item.title}>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} filled className="text-secondary" />
                  </div>
                  <h3 className="font-display text-headline-sm text-[20px] text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            {/* <div
              className="absolute -inset-4 border border-primary/10 rounded translate-x-4 translate-y-4"
              aria-hidden="true"
            /> */}
            <div className="relative h-[480px] lg:h-[600px] rounded overflow-hidden shadow-soft-lg">
              <Image
                src="/assets/stitch/about-teahouse.jpg"
                alt={t("whyChooseUs.altTeaCeremony")}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Traveler Reviews */}
      {/* <section className="bg-primary">
        <div className="max-w-container mx-auto px-5 md:px-20 py-20 md:py-section-gap">
          <SectionHeader
            eyebrow={t("reviews.eyebrow")}
            title={t("reviews.title")}
            subtitle={t("reviews.subtitle")}
            light
          /> */}
          {/* Note: Testimonials data itself will need to be translated next! */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Travel Inspiration / Blog */}
      {/* <section className="max-w-container mx-auto px-5 md:px-20 py-20 md:py-section-gap">
        <SectionHeader
          eyebrow={t("blog.eyebrow")}
          title={t("blog.title")}
          subtitle={t("blog.subtitle")}
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
                  {t("blog.readStory")}
                  <Icon name="arrow_forward" className="text-[16px]" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section> */}

      {/* Closing CTA */}
      <section className="relative overflow-hidden">
        <Image
          src="/assets/stitch/hero-seoul.jpg"
          alt={t("cta.altPalace")}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative max-w-container mx-auto px-5 md:px-20 py-24 md:py-32 text-center">
          <h2 className="font-display text-display-lg-mobile md:text-display-lg text-on-primary mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-body-lg text-on-primary/85 max-w-2xl mx-auto mb-10">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="gold" className="shadow-cta">
              {t("cta.buttonPlan")}
            </Button>
            <Button href="/tours" variant="ghost-light">
              {t("cta.buttonBrowse")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}