import type { Metadata } from "next";
import TourCard from "@/components/TourCard";
import TourFilters from "@/components/TourFilters";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Best Selling Tours",
  description:
    "Discover Jane DMC Korea's handpicked best selling journeys — seasonal routes, luxury escapes, and cultural immersions across South Korea.",
};

export default function ToursPage() {
  return (
    <div className="pt-12 pb-20 md:pb-section-gap">
      <section className="max-w-container mx-auto px-5 md:px-20 text-center mb-16">
        <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-6">
          Best Selling Tours
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Discover why thousands choose our handpicked journeys. Limited spots.
          Maximum impressions.
        </p>
      </section>

      <section className="max-w-container mx-auto px-5 md:px-20">
        <div className="flex flex-col lg:flex-row gap-gutter items-start">
          <TourFilters />

          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <p className="text-body-md text-on-surface-variant">
                Showing <strong className="text-primary">{tours.length}</strong>{" "}
                exclusive experiences
              </p>
              <div className="flex items-center space-x-2">
                <label
                  htmlFor="sort"
                  className="text-label-sm text-on-surface-variant hidden sm:block"
                >
                  Sort by:
                </label>
                <select
                  id="sort"
                  className="text-body-md bg-transparent border-none text-primary focus:ring-0 cursor-pointer pr-8"
                >
                  <option>Recommended</option>
                  <option>Price: High to Low</option>
                  <option>Duration: Long to Short</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tours.map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button
                type="button"
                className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors"
              >
                Discover More Journeys
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
