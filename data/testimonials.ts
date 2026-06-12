export interface Testimonial {
  name: string;
  origin: string;
  rating: number;
  tour: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Amara Okafor",
    origin: "Lagos, Nigeria",
    rating: 5,
    tour: "The Ultimate Cherry Blossom Route",
    text: "From the private blossom viewings to the hanok stays, every moment felt designed just for us. Jane DMC Korea turned a dream trip into something far beyond what we imagined.",
  },
  {
    name: "Henrik Johansson",
    origin: "Stockholm, Sweden",
    rating: 5,
    tour: "Corporate Incentive Program",
    text: "We brought 120 delegates to Seoul and the logistics were immaculate. Transfers, venues, dining — everything ran to the minute. The most reliable DMC partner we have worked with in Asia.",
  },
  {
    name: "Yuki Tanaka",
    origin: "Osaka, Japan",
    rating: 4.5,
    tour: "Jeju Island Wellness Retreat",
    text: "A serene, beautifully paced escape. The volcanic spa treatments and oceanfront resort were exceptional, and our consultant adjusted the itinerary effortlessly when the weather shifted.",
  },
];
