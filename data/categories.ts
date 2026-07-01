export interface Category {
  /** Stable key used to look up translations in the "Categories" namespace. */
  key: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    key: "mice-solutions",
    image: "/assets/stitch/hero-palace.jpg",
    description: "Professional planning and management of meetings, incentives, conferences, and exhibitions.",
  },
  {
    key: "corporate-events",
    image: "/assets/stitch/service-mice.jpg",
    description: "Comprehensive event management services for corporate meetings, executive programs, and business events.",
  },
  {
    key: "incentive-travel",
    image: "/assets/stitch/namdaemun.jpg",
    description: "Customized travel experiences designed to motivate, reward, and inspire participants.",
  },
  {
    key: "educational-programs",
    image: "/assets/stitch/educational.jpg",
    description: "Tailor-made educational tours, academic exchanges, and student travel programs.",
  },
  {
    key: "luxury-travel",
    image: "/assets/stitch/service-vip.jpg",
    description: "Exclusive and personalized itineraries featuring premium accommodations, VIP services, and unique experiences.",
  },
  {
    key: "cultural-experiences",
    image: "/assets/stitch/cultural.jpg",
    description: "Authentic programs showcasing Korea's rich heritage, culture, traditions, and lifestyle.",
  },
  {
    key: "group-fit-services",
    image: "/assets/stitch/service-curated.jpg",
    description: "Comprehensive travel arrangements for groups and independent travelers.",
  },
  {
    key: "technical-industry-visits",
    image: "/assets/stitch/skyline.jpg",
    description: "Specialized programs providing access to Korea's leading industries, institutions, and innovation sectors.",
  },
];
