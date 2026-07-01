export interface Category {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
}

export const categories: Category[] = [
  {
    title: "MICE Solutions",
    image: "/assets/stitch/hero-palace.jpg",
    imageAlt: "Korean palace at golden hour",
    description: "Professional planning and management of meetings, incentives, conferences, and exhibitions.",
  },
  {
    title: "Corporate Events",
    // icon: "hiking",
    image: "/assets/stitch/tour-highland-mobile.jpg",
    imageAlt: "Highland trails of Gangwon-do",
    description: "Comprehensive event management services for corporate meetings, executive programs, and business events.",
  },
  {
    title: "Incentive Travel",
    // icon: "business_center",
    image: "/assets/stitch/service-mice.jpg",
    imageAlt: "Corporate MICE event in Seoul",
    description: "Customized travel experiences designed to motivate, reward, and inspire participants.",
  },
  {
    title: "Educational Programs",
    // icon: "spa",
    image: "/assets/stitch/tour-jeju-wellness.jpg",
    imageAlt: "Jeju Island coastline",
    description: "Tailor-made educational tours, academic exchanges, and student travel programs.",
  },
  {
    title: "Luxury Travel",
    // icon: "health_and_safety",
    image: "/assets/stitch/service-medical.jpg",
    imageAlt: "Premium medical tourism services",
    description: "Exclusive and personalized itineraries featuring premium accommodations, VIP services, and unique experiences.",
  },
  {
    title: "Cultural Experiences",
    // icon: "diamond",
    image: "/assets/stitch/service-vip.jpg",
    imageAlt: "Premium concierge welcome amenities",
    description: "Authentic programs showcasing Korea's rich heritage, culture, traditions, and lifestyle.",
  },
  {
    title: "Group & FIT Services",
    // icon: "diamond",
    image: "/assets/stitch/service-vip.jpg",
    imageAlt: "Premium concierge welcome amenities",
    description: "Comprehensive travel arrangements for groups and independent travelers.",
  },
  {
    title: "Technical & Industry Visits",
    // icon: "diamond",
    image: "/assets/stitch/service-vip.jpg",
    imageAlt: "Premium concierge welcome amenities",
    description: "Specialized programs providing access to Korea's leading industries, institutions, and innovation sectors.",
  },
  
];
