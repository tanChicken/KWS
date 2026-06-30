export interface ItineraryDay {
  /** Day number or range, e.g. "1" or "1–3". Rendered as "Day {day}". */
  day: string;
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
  /** Omitted for tailored/quote-on-request programs. */
  priceFrom?: number;
  bestSeller: boolean;
}

export interface TourFact {
  label: string;
  value: string;
}

export interface TourListItem {
  icon: string;
  text: string;
}

export interface TourPhoto {
  image: string;
  alt: string;
}

/**
 * Full content for a single tour detail page. Everything the reusable
 * `/tours/[slug]` template renders comes from here — add a new entry to
 * `tourDetails` below and a new tour page exists automatically.
 *
 * Only the fields used by the (simplified) template are required:
 *   heroImage, itinerary, and the listing fields inherited from `Tour`.
 * The rest (overview, facts, gallery, reviews…) are kept for future
 * sections and are safe to omit.
 */
export interface TourDetail extends Tour {
  /** Large image shown in the page hero. */
  heroImage: string;
  /** One sentence shown under the hero title; defaults to `route`. */
  routeLabel?: string;
  /** The day-by-day timeline — the core of the template. */
  itinerary: ItineraryDay[];
  /** Closing call-to-action block. */
  cta?: { title: string; text: string };
  /** Optional richer sections (not rendered by the simplified template yet). */
  overview?: string;
  facts?: TourFact[];
  included?: TourListItem[];
  notIncluded?: TourListItem[];
  gallery?: TourPhoto[];
  reviews?: TourReview[];
}

/**
 * Tour listing cards (shown on /tours and the homepage best-sellers grid).
 * These programs are starting frameworks — durations, hotel grades, and
 * routing are tailored per client brief, so pricing is quote-on-request.
 */
export const tours: Tour[] = [
  {
    slug: "seoul-heritage-culture-discovery",
    title: "Seoul Heritage & Culture Discovery",
    image: "/assets/stitch/hero-palace.jpg",
    imageAlt:
      "Gyeongbokgung Palace in Seoul with traditional painted eaves at golden hour",
    duration: "5 Days / 4 Nights",
    route: "Seoul",
    tags: ["Cultural", "Group & FIT"],
    badge: "Popular",
    excerpt:
      "A foundational journey through Korea's capital, blending royal heritage with the rhythms of modern Seoul.",
    bestSeller: true,
  },
  {
    slug: "korea-grand-classic",
    title: "Korea Grand Classic — Seoul, Jeonju & Busan",
    image: "/assets/stitch/hero-seoul.jpg",
    imageAlt: "Seoul city skyline at dusk with mountains in the distance",
    duration: "8 Days / 7 Nights",
    route: "Seoul • Jeonju • Gyeongju • Busan",
    tags: ["Cultural", "Group & FIT"],
    badge: "Signature",
    excerpt:
      "The signature cross-country circuit linking the capital, the spiritual south, and the coastal city.",
    bestSeller: true,
  },
  {
    slug: "k-wave-hallyu-experience",
    title: "K-Wave Hallyu Experience",
    image: "/assets/stitch/seoul-night.jpg",
    imageAlt:
      "Neon-lit Seoul street at night in the Hongdae entertainment district",
    duration: "6 Days / 5 Nights",
    route: "Seoul • Nami Island",
    tags: ["K-Wave", "Cultural"],
    excerpt:
      "Built for fans of K-pop, K-drama, and Korean entertainment culture.",
    bestSeller: false,
  },
  {
    slug: "mice-incentive-premium-seoul",
    title: "MICE & Incentive Program — Premium Seoul",
    image: "/assets/stitch/service-mice.jpg",
    imageAlt: "Corporate MICE event setup in a Seoul convention hall",
    duration: "5 Days / 4 Nights",
    route: "Seoul",
    tags: ["MICE", "Incentive", "Corporate"],
    excerpt:
      "A turnkey incentive framework for groups of 30–500, fully scalable.",
    bestSeller: false,
  },
  {
    slug: "luxury-korea-private-journey",
    title: "Luxury Korea — Private Curated Journey",
    image: "/assets/stitch/service-vip.jpg",
    imageAlt: "Premium concierge welcome amenities in a luxury Korean suite",
    duration: "7 Days / 6 Nights",
    route: "Seoul • Jeju",
    tags: ["Luxury", "Private"],
    badge: "Bestseller",
    excerpt:
      "A small-group or private itinerary built around premium hospitality and exclusive access.",
    bestSeller: true,
  },
  {
    slug: "korea-educational-program",
    title: "Korea Educational Program — University & Industry",
    image: "/assets/stitch/service-curated.jpg",
    imageAlt: "Students and visitors exploring a Korean cultural site",
    duration: "7 Days / 6 Nights",
    route: "Seoul • Gyeonggi",
    tags: ["Educational", "Industry Visits"],
    excerpt:
      "Designed for university cohorts, faculty-led groups, and student exchange programs.",
    bestSeller: false,
  },
  {
    slug: "winter-korea-ski-snow",
    title: "Winter Korea — Ski & Snow Festival",
    image: "/assets/stitch/tour-winter.jpg",
    imageAlt:
      "Snow-covered ski resort slopes in Pyeongchang at twilight with glowing cabins",
    duration: "6 Days / 5 Nights",
    route: "Seoul • Pyeongchang",
    tags: ["Seasonal", "Group & FIT"],
    excerpt:
      "Seasonal program (December–February) combining alpine resort time with capital sightseeing.",
    bestSeller: false,
  },
  {
    slug: "korea-culinary-journey",
    title: "Korea Culinary Journey",
    image: "/assets/stitch/about-tea-ceremony.jpg",
    imageAlt:
      "Traditional Korean tea and regional dishes arranged in a sunlit setting",
    duration: "6 Days / 5 Nights",
    route: "Seoul • Jeonju • Andong • Busan",
    tags: ["Culinary", "Cultural", "Luxury"],
    excerpt:
      "A food-led itinerary across the peninsula's most distinctive regional cuisines.",
    bestSeller: false,
  },
];

/** Shared closing message — every program is tailored to the client brief. */
const tailoredCta = {
  text: "This itinerary is a starting framework — durations, hotel grades, inclusions, and routing are fully tailored to your brief. Send us a request and we'll respond with a proposal within two business days.",
};

/**
 * Detailed content for each tour, keyed by slug. The `/tours/[slug]` page
 * looks a tour up here by its URL segment.
 *
 * 👉 To add a new tour detail page:
 *    1. Add (or reuse) the listing entry in `tours` above.
 *    2. Add an entry here with the same `slug` and its itinerary + images.
 *    That's it — `/tours/<your-slug>` will render with the shared template.
 */
export const tourDetails: Record<string, TourDetail> = {
  "seoul-heritage-culture-discovery": {
    ...tours[0],
    heroImage: "/assets/stitch/hero-palace.jpg",
    cta: { title: "Ready to discover Seoul's heritage?", ...tailoredCta },
    itinerary: [
      {
        day: "1",
        location: "Seoul",
        icon: "flight_land",
        title: "Arrival & Welcome",
        description:
          "Incheon Airport meet-and-greet and private transfer to your hotel in Myeongdong. Welcome dinner of Korean BBQ with a hanbok-clad host introducing Korean dining etiquette.",
      },
      {
        day: "2",
        location: "Seoul",
        icon: "castle",
        title: "Royal Seoul",
        description:
          "Gyeongbokgung Palace with the Royal Guard Changing Ceremony, the National Folk Museum, a Bukchon Hanok Village walking tour with a licensed guide, and Insadong for traditional tea and crafts. Evening: the Nanta non-verbal performance.",
      },
      {
        day: "3",
        location: "Seoul",
        icon: "temple_buddhist",
        title: "Spiritual & Scenic Seoul",
        description:
          "Jogyesa Temple and a templestay introduction, N Seoul Tower via the Namsan cable car, and the Ihwa Mural Village. Dinner cruise on the Han River.",
      },
      {
        day: "4",
        location: "Seoul / DMZ",
        icon: "fence",
        title: "Living Seoul & the DMZ",
        description:
          "A DMZ half-day tour (Imjingak, the Third Tunnel, Dora Observatory), then Dongdaemun Design Plaza and Gwangjang Market for street food. Farewell dinner: traditional Korean royal court cuisine (hanjeongsik).",
      },
      {
        day: "5",
        location: "Seoul",
        icon: "flight_takeoff",
        title: "Departure",
        description:
          "Hotel check-out and private transfer to Incheon Airport.",
      },
    ],
  },

  "korea-grand-classic": {
    ...tours[1],
    heroImage: "/assets/stitch/hero-seoul.jpg",
    cta: { title: "Ready for the grand circuit?", ...tailoredCta },
    itinerary: [
      {
        day: "1–3",
        location: "Seoul",
        icon: "location_city",
        title: "Capital Highlights",
        description:
          "Gyeongbokgung Palace, Bukchon Hanok Village, Myeongdong and Hongdae, a DMZ excursion, and a Han River cruise across three immersive days in Seoul.",
      },
      {
        day: "4",
        location: "Jeonju",
        icon: "train",
        title: "Seoul → Jeonju by KTX",
        description:
          "High-speed transfer to Jeonju. Explore the Hanok Village, a bibimbap cooking class, and a hanji paper workshop, with an overnight stay in a traditional hanok guesthouse.",
      },
      {
        day: "5",
        location: "Gyeongju",
        icon: "temple_buddhist",
        title: "Jeonju → Gyeongju",
        description:
          "Bulguksa Temple (UNESCO), the Seokguram Grotto, the Tumuli Park royal tombs, and the Cheomseongdae Observatory.",
      },
      {
        day: "6",
        location: "Busan",
        icon: "directions_boat",
        title: "Gyeongju → Busan",
        description:
          "Haedong Yonggungsa seaside temple, the colourful Gamcheon Culture Village, and the bustling Jagalchi Fish Market.",
      },
      {
        day: "7",
        location: "Busan",
        icon: "set_meal",
        title: "Coastal Busan",
        description:
          "Haeundae Beach, BIFF Square, and Beomeosa Temple, with a farewell dinner at a hanwoo grill house.",
      },
      {
        day: "8",
        location: "Busan",
        icon: "flight_takeoff",
        title: "Departure",
        description: "Private transfer to Gimhae International Airport.",
      },
    ],
  },

  "k-wave-hallyu-experience": {
    ...tours[2],
    heroImage: "/assets/stitch/seoul-night.jpg",
    cta: { title: "Ready to live the K-Wave?", ...tailoredCta },
    itinerary: [
      {
        day: "1",
        location: "Seoul",
        icon: "music_note",
        title: "Arrival & Hongdae Nightlife",
        description:
          "Arrival in Seoul followed by an evening among Hongdae's indie music streets and live busking performances.",
      },
      {
        day: "2",
        location: "Seoul",
        icon: "theater_comedy",
        title: "Entertainment District Tour",
        description:
          "HYBE, SM, and JYP building exteriors in Yongsan and Seongsu, K-pop merch flagships, and lunch at an idol-frequented café. Afternoon dance class with a professional choreographer, then a live show in Hongdae.",
      },
      {
        day: "3",
        location: "Gapyeong",
        icon: "photo_camera",
        title: "K-Drama Locations",
        description:
          "Petite France and Nami Island — filming sites for Winter Sonata and many recent dramas — plus the Garden of Morning Calm.",
      },
      {
        day: "4",
        location: "Seoul",
        icon: "spa",
        title: "Style & Beauty",
        description:
          "Olive Young flagship, an optional dermatology consultation, personal colour analysis, an Apgujeong-Rodeo styling tour, and dinner in Gangnam.",
      },
      {
        day: "5",
        location: "Seoul",
        icon: "mic_external_on",
        title: "Studio & Show",
        description:
          "An SBS or KBS studio visit (subject to schedule), optional live music-show recording attendance, and a farewell dinner in Itaewon.",
      },
      {
        day: "6",
        location: "Seoul",
        icon: "flight_takeoff",
        title: "Departure",
        description: "Transfer to Incheon Airport.",
      },
    ],
  },

  "mice-incentive-premium-seoul": {
    ...tours[3],
    heroImage: "/assets/stitch/service-mice.jpg",
    cta: { title: "Planning an incentive or conference?", ...tailoredCta },
    itinerary: [
      {
        day: "1",
        location: "Seoul",
        icon: "celebration",
        title: "Arrival & Welcome Reception",
        description:
          "VIP airport fast-track, branded transfers, and a welcome cocktail on a 5-star hotel rooftop with a traditional samulnori percussion performance.",
      },
      {
        day: "2",
        location: "Seoul",
        icon: "business_center",
        title: "Conference Day",
        description:
          "Full-day plenary at a Seoul convention venue (COEX, Grand Walkerhall, or the Signiel ballroom) with professional AV and interpretation, themed coffee breaks, and a networking lunch. Evening gala dinner with a K-pop tribute performance and awards ceremony.",
      },
      {
        day: "3",
        location: "Seoul",
        icon: "groups",
        title: "Team Building & CSR",
        description:
          "Choose a Korean cooking competition with a celebrity chef, a hanbok-and-hanok team challenge in Bukchon, or a CSR meal-kit packing activity for a partnered local charity. Evening free for networking.",
      },
      {
        day: "4",
        location: "Seoul",
        icon: "redeem",
        title: "Reward Day",
        description:
          "Half-day Seoul highlights, an afternoon at Hyundai Premium Outlet or Lotte Duty Free, and a farewell dinner cruise on the Han River with a fireworks finale (subject to permit).",
      },
      {
        day: "5",
        location: "Seoul",
        icon: "flight_takeoff",
        title: "Departure",
        description: "VIP send-off and transfer to Incheon Airport.",
      },
    ],
  },

  "luxury-korea-private-journey": {
    ...tours[4],
    heroImage: "/assets/stitch/service-vip.jpg",
    cta: { title: "Ready for a private curated journey?", ...tailoredCta },
    itinerary: [
      {
        day: "1–3",
        location: "Seoul",
        icon: "diamond",
        title: "Exclusive Seoul",
        description:
          "Stay at the Signiel or Four Seasons with a private palace tour before public hours, a Michelin-starred dinner at Mingles or La Yeon, a private tea ceremony with a tea master, and a helicopter transfer to a private golf round at Anyang or Nine Bridges (seasonal).",
      },
      {
        day: "4",
        location: "Jeju",
        icon: "flight_takeoff",
        title: "Seoul → Jeju",
        description:
          "Private jet or business-class flight to Jeju and check-in at the Grand Hyatt Jeju or Shilla Jeju.",
      },
      {
        day: "5–6",
        location: "Jeju",
        icon: "sailing",
        title: "Island Indulgence",
        description:
          "Private yacht charter along the southern coast, a guided Hallasan hike with a naturalist, a haenyeo abalone-diving demonstration, Michelin-recommended seafood omakase, and an oreum sunrise breakfast.",
      },
      {
        day: "7",
        location: "Jeju",
        icon: "flight_takeoff",
        title: "Departure",
        description: "Private transfer for your onward journey.",
      },
    ],
  },

  "korea-educational-program": {
    ...tours[5],
    heroImage: "/assets/stitch/service-curated.jpg",
    cta: { title: "Planning a study or exchange program?", ...tailoredCta },
    itinerary: [
      {
        day: "1",
        location: "Seoul",
        icon: "flight_land",
        title: "Arrival & Orientation",
        description: "Arrival in Seoul and a program orientation session.",
      },
      {
        day: "2",
        location: "Seoul",
        icon: "school",
        title: "University Campus Visits",
        description:
          "Seoul National University and Yonsei or Korea University: lectures by partner faculty, student-ambassador campus tours, and lunch in the student cafeterias.",
      },
      {
        day: "3",
        location: "Seoul",
        icon: "science",
        title: "Industry Innovation Day",
        description:
          "Samsung d'light or Innovation Museum, LG Science Park, an optional Naver HQ tour, and a workshop with a Korean startup founder.",
      },
      {
        day: "4",
        location: "Seoul",
        icon: "translate",
        title: "Language & Culture Workshop",
        description:
          "A half-day intensive at a partner language institute, plus hanbok, traditional games, and calligraphy.",
      },
      {
        day: "5",
        location: "Seoul",
        icon: "museum",
        title: "Heritage Context",
        description:
          "Gyeongbokgung Palace, the National Museum of Korea, and the War Memorial of Korea for historical context.",
      },
      {
        day: "6",
        location: "Gyeonggi",
        icon: "factory",
        title: "Industrial Visit",
        description:
          "Hyundai Motor Studio or the Pyeongtaek manufacturing facility (subject to corporate approval) and a DMZ educational tour.",
      },
      {
        day: "7",
        location: "Seoul",
        icon: "military_tech",
        title: "Reflection & Departure",
        description:
          "A closing reflection session, certificate presentation, and departure.",
      },
    ],
  },

  "winter-korea-ski-snow": {
    ...tours[6],
    heroImage: "/assets/stitch/tour-winter.jpg",
    cta: { title: "Ready to hit the slopes?", ...tailoredCta },
    itinerary: [
      {
        day: "1",
        location: "Seoul",
        icon: "flight_land",
        title: "Arrival in Seoul",
        description: "Arrival and transfer to your Seoul hotel.",
      },
      {
        day: "2",
        location: "Pyeongchang",
        icon: "downhill_skiing",
        title: "Seoul → Yongpyong Resort",
        description:
          "Transfer to slope-side accommodation in Pyeongchang, with ski or snowboard rental and a lesson from an English-speaking instructor.",
      },
      {
        day: "3",
        location: "Pyeongchang",
        icon: "ac_unit",
        title: "Full Ski Day",
        description:
          "A full lift pass and lunch on the mountain, with optional snow tubing for non-skiers and an evening Korean BBQ.",
      },
      {
        day: "4",
        location: "Gangwon-do",
        icon: "festival",
        title: "Winter Festival",
        description:
          "The Hwacheon Sancheoneo Ice Festival (January), or a Nami Island winter walk and the Garden of Morning Calm Lighting Festival, before returning to Seoul.",
      },
      {
        day: "5",
        location: "Seoul",
        icon: "photo_camera",
        title: "Snowy Seoul",
        description:
          "Gyeongbokgung in the snow, hanbok rental for photos, Myeongdong shopping, and a jjimjilbang (Korean spa) experience.",
      },
      {
        day: "6",
        location: "Seoul",
        icon: "flight_takeoff",
        title: "Departure",
        description: "Transfer to Incheon Airport.",
      },
    ],
  },

  "korea-culinary-journey": {
    ...tours[7],
    heroImage: "/assets/stitch/about-tea-ceremony.jpg",
    cta: { title: "Hungry to taste Korea?", ...tailoredCta },
    itinerary: [
      {
        day: "1",
        location: "Seoul",
        icon: "ramen_dining",
        title: "Seoul Arrival",
        description:
          "Welcome dinner with a Gwangjang Market night food tour led by a local food writer.",
      },
      {
        day: "2",
        location: "Seoul",
        icon: "soup_kitchen",
        title: "Seoul Foundations",
        description:
          "A kimchi-making class at the Museum of Kimchi, a hanjeongsik royal court lunch, an afternoon café tour through Seongsu, and dinner at a Michelin-recommended modern Korean restaurant.",
      },
      {
        day: "3",
        location: "Jeonju",
        icon: "rice_bowl",
        title: "Jeonju by KTX",
        description:
          "Bibimbap origin tasting, a makgeolli rice-wine brewery tour, and a hanok village street-food crawl.",
      },
      {
        day: "4",
        location: "Andong",
        icon: "local_bar",
        title: "Andong & Hahoe Village",
        description:
          "Andong jjimdak cooking, the Hahoe Folk Village (UNESCO), and a soju distillery tour at the Andong Soju Museum.",
      },
      {
        day: "5",
        location: "Busan",
        icon: "set_meal",
        title: "Busan by KTX",
        description:
          "An early-morning Jagalchi Fish Market tour, a hoe (raw fish) lunch, dwaeji gukbap tasting, and a farewell dinner at a hanwoo specialist.",
      },
      {
        day: "6",
        location: "Busan",
        icon: "flight_takeoff",
        title: "Departure",
        description: "Departure from Gimhae International Airport.",
      },
    ],
  },
};

/** Look up a tour's full detail content by its URL slug. */
export function getTourDetail(slug: string): TourDetail | undefined {
  return tourDetails[slug];
}

/** All slugs that have a detail page (useful for generateStaticParams). */
export function getTourSlugs(): string[] {
  return Object.keys(tourDetails);
}
