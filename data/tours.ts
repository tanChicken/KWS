export interface ItineraryDay {
  day: number;
  location: string;
  icon: string;
  title: string;
  description: string;
}

export interface TourReview {
  name: string;
  origin: string;
  rating: number;
  text: string;
}

export interface Tour {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  duration: string;
  route: string;
  tags: string[];
  badge?: string;
  excerpt: string;
  priceFrom: number;
  bestSeller: boolean;
}

export const tours: Tour[] = [
  {
    slug: "ultimate-korea-highland-escape",
    title: "The Ultimate Korea Highland Escape",
    image: "/assets/stitch/tour-highland.jpg",
    imageAlt:
      "Rolling highlands of Gangwon-do in peak autumn foliage with a winding mountain road",
    duration: "7 Days / 6 Nights",
    route: "Seoul • Gapyeong • Gangwon-do • Busan",
    tags: ["Luxury", "Private", "Nature"],
    badge: "Bestseller",
    excerpt:
      "Leave the bustle of Seoul for the serene pine forests of Gapyeong and the majestic highlands of Gangwon-do, culminating in the coastal elegance of Busan.",
    priceFrom: 2450,
    bestSeller: true,
  },
  {
    slug: "ultimate-cherry-blossom-route",
    title: "The Ultimate Cherry Blossom Route",
    image: "/assets/stitch/tour-cherry-blossom.jpg",
    imageAlt:
      "Traditional Korean palace framed by cherry blossom branches at golden hour",
    duration: "8 Days / 7 Nights",
    route: "Seoul • Gyeongju • Busan",
    tags: ["Seasonal"],
    badge: "Bestseller",
    excerpt:
      "Experience the ephemeral beauty of Korea's spring. This carefully curated itinerary avoids the crowds, offering private viewings, traditional tea ceremonies under the blossoms, and stays in luxury hanoks.",
    priceFrom: 3800,
    bestSeller: true,
  },
  {
    slug: "winter-wonderland-christmas-markets",
    title: "Winter Wonderland & Christmas Markets",
    image: "/assets/stitch/tour-winter.jpg",
    imageAlt:
      "Snow-covered mountain resort in Pyeongchang at twilight with glowing alpine cabins",
    duration: "5 Days / 4 Nights",
    route: "Seoul • Pyeongchang",
    tags: ["Luxury"],
    excerpt:
      "Embrace the festive spirit in a winter paradise. Enjoy VIP access to premium ski resorts, private shopping experiences in Seoul's festive districts, and exclusive fine-dining holiday events.",
    priceFrom: 2900,
    bestSeller: true,
  },
  {
    slug: "seoul-metropolitan-luxury",
    title: "Seoul Metropolitan Luxury",
    image: "/assets/stitch/tour-seoul-luxury.jpg",
    imageAlt:
      "Modern Seoul skyline with N Seoul Tower rising above lush green hills",
    duration: "7 Days / 6 Nights",
    route: "Seoul",
    tags: ["Luxury"],
    excerpt:
      "Immerse yourself in the dynamic energy of South Korea's capital. Experience 5-star accommodations, private Michelin-starred dining, and exclusive guided access to both historic palaces and modern art districts.",
    priceFrom: 4500,
    bestSeller: false,
  },
  {
    slug: "jeju-island-wellness-retreat",
    title: "Jeju Island Wellness Retreat",
    image: "/assets/stitch/tour-jeju-wellness.jpg",
    imageAlt:
      "Jeju Island coastline with aquamarine waters lapping against volcanic rocks",
    duration: "5 Days / 4 Nights",
    route: "Jeju Island",
    tags: ["Wellness"],
    excerpt:
      "Escape to Korea's volcanic paradise. This curated wellness journey includes stays at premium oceanfront resorts, private yacht tours, and rejuvenating spa treatments utilizing local volcanic ash and green tea.",
    priceFrom: 3200,
    bestSeller: false,
  },
  {
    slug: "royal-heritage-immersion",
    title: "Royal Heritage Immersion",
    image: "/assets/stitch/hero-palace.jpg",
    imageAlt:
      "Traditional Korean palace in Seoul at golden hour with intricately painted wooden eaves",
    duration: "4 Days / 3 Nights",
    route: "Seoul • Suwon",
    tags: ["Cultural"],
    excerpt:
      "Walk in the footsteps of dynasties. Private after-hours palace access, hanbok ateliers, royal court cuisine, and a night in a meticulously restored luxury hanok in the heart of Bukchon.",
    priceFrom: 1950,
    bestSeller: false,
  },
];

export const highlandEscape = {
  ...tours[0],
  heroImage: "/assets/stitch/tour-highland.jpg",
  overview:
    "Embark on a curated journey through the picturesque landscapes of South Korea. Leaving the bustling energy of Seoul, retreat to the serene pine forests of Gapyeong before ascending into the majestic highlands of Gangwon-do. This exclusive itinerary blends tranquil nature walks, premium local gastronomy, and high-end accommodations, culminating in the vibrant coastal elegance of Busan. Designed for the discerning traveler seeking a seamless balance of deep cultural immersion and luxurious relaxation.",
  facts: [
    { label: "Duration", value: "7 Days" },
    { label: "Group Size", value: "2 - 8 Pax" },
    { label: "Pace", value: "Relaxed" },
    { label: "Guide", value: "Expert" },
  ],
  itinerary: [
    {
      day: 1,
      location: "Seoul",
      icon: "flight_land",
      title: "Arrival & Urban Elegance",
      description:
        "Private chauffeur transfer from Incheon to your 5-star suite. Evening welcome dinner featuring modern royal court cuisine at a Michelin-starred venue overlooking the Han River.",
    },
    {
      day: 2,
      location: "Gapyeong",
      icon: "forest",
      title: "Tranquil Pine Forests",
      description:
        "Morning departure to Gapyeong. Enjoy a private guided walk through the Garden of Morning Calm, followed by a serene tea ceremony in a traditional pavilion.",
    },
    {
      day: 3,
      location: "Gangwon-do",
      icon: "landscape",
      title: "Ascent to the Highlands",
      description:
        "Travel deeper into the majestic Gangwon-do mountains. Check into your luxury wellness retreat. Afternoon at leisure to enjoy panoramic mountain views and spa facilities.",
    },
    {
      day: 4,
      location: "Pyeongchang",
      icon: "pets",
      title: "Daegwallyeong Sheep Farm",
      description:
        "A gentle morning among the rolling pastures of the Daegwallyeong highlands. Private picnic lunch with locally sourced delicacies before an afternoon of alpine scenery.",
    },
    {
      day: 5,
      location: "Seoraksan",
      icon: "hiking",
      title: "Seoraksan National Park",
      description:
        "Guided exploration of Korea's most celebrated national park. Cable car ascent to Gwongeumseong Fortress, granite peaks, and a tranquil temple visit at Sinheungsa.",
    },
    {
      day: 6,
      location: "Busan",
      icon: "sailing",
      title: "Coastal Elegance",
      description:
        "Scenic transfer to Busan. Sunset stroll along Haeundae Beach, private yacht cruise past Gwangan Bridge, and a farewell seafood tasting at a celebrated coastal restaurant.",
    },
    {
      day: 7,
      location: "Busan",
      icon: "flight_takeoff",
      title: "Departure",
      description:
        "Leisurely morning at your seafront suite before a private chauffeured transfer to Gimhae International Airport, carrying memories crafted to last a lifetime.",
    },
  ] as ItineraryDay[],
  included: [
    { icon: "hotel", text: "Premium 5-star and boutique luxury accommodations." },
    { icon: "directions_car", text: "Private chauffeured transfers in executive vehicles." },
    { icon: "restaurant", text: "Daily curated breakfasts and select fine-dining dinners." },
    { icon: "person", text: "Expert English-speaking private guide for excursions." },
  ],
  notIncluded: [
    { icon: "flight", text: "International round-trip airfare." },
    { icon: "local_hospital", text: "Travel and medical insurance (highly recommended)." },
    { icon: "credit_card", text: "Personal expenses, gratuities, and unscheduled meals." },
  ],
  gallery: [
    {
      image: "/assets/stitch/tour-highland-mobile.jpg",
      alt: "Misty highland ridges of Gangwon-do at dawn",
    },
    {
      image: "/assets/stitch/about-tea-ceremony.jpg",
      alt: "Traditional Korean tea ceremony in a sunlit pavilion",
    },
    {
      image: "/assets/stitch/tour-winter.jpg",
      alt: "Alpine resort lights in Pyeongchang at twilight",
    },
    {
      image: "/assets/stitch/seoul-night.jpg",
      alt: "Seoul skyline glittering at night",
    },
  ],
  reviews: [
    {
      name: "Eleanor Whitmore",
      origin: "London, United Kingdom",
      rating: 5,
      text: "Every detail was flawless — from the Michelin-starred welcome dinner to the quiet morning at the sheep farm. The most effortless luxury travel we have ever experienced.",
    },
    {
      name: "Daniel & Mia Chen",
      origin: "Singapore",
      rating: 5,
      text: "The highlands were breathtaking and the pacing was perfect. Our guide's knowledge turned every stop into a story. We are already planning our return with Jane DMC Korea.",
    },
    {
      name: "Sofia Almeida",
      origin: "São Paulo, Brazil",
      rating: 4.5,
      text: "A beautifully curated balance of nature, cuisine, and rest. The private transfers made the long distances feel like part of the experience rather than a chore.",
    },
  ] as TourReview[],
};
