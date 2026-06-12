export interface Category {
  title: string;
  icon: string;
  image: string;
  imageAlt: string;
  description: string;
}

export const categories: Category[] = [
  {
    title: "Leisure Tours",
    icon: "beach_access",
    image: "/assets/stitch/hero-palace.jpg",
    imageAlt: "Korean palace at golden hour",
    description: "Bespoke leisure itineraries blending culture, luxury, and unseen locales.",
  },
  {
    title: "Adventure",
    icon: "hiking",
    image: "/assets/stitch/tour-highland-mobile.jpg",
    imageAlt: "Highland trails of Gangwon-do",
    description: "Highland treks, coastal trails, and four-season outdoor escapes.",
  },
  {
    title: "Corporate & MICE",
    icon: "business_center",
    image: "/assets/stitch/service-mice.jpg",
    imageAlt: "Corporate MICE event in Seoul",
    description: "Meetings, incentives, conferences, and exhibitions executed to the minute.",
  },
  {
    title: "Wellness Retreats",
    icon: "spa",
    image: "/assets/stitch/tour-jeju-wellness.jpg",
    imageAlt: "Jeju Island coastline",
    description: "Restorative journeys through spas, temples, and volcanic island calm.",
  },
  {
    title: "Medical Tourism",
    icon: "health_and_safety",
    image: "/assets/stitch/service-medical.jpg",
    imageAlt: "Premium medical tourism services",
    description: "World-class clinics paired with discreet, fully managed recovery stays.",
  },
  {
    title: "VIP & Concierge",
    icon: "diamond",
    image: "/assets/stitch/service-vip.jpg",
    imageAlt: "Premium concierge welcome amenities",
    description: "Private jets, after-hours access, and white-glove personal service.",
  },
];
