import Icon from "./Icon";

interface TestimonialCardProps {
  name: string;
  origin: string;
  rating: number;
  tour?: string;
  text: string;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5 text-secondary"
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => {
        const filled = rating >= i + 1;
        const half = !filled && rating > i;
        return (
          <Icon
            key={i}
            name={half ? "star_half" : "star"}
            filled={filled || half}
            className={`text-[20px] ${filled || half ? "" : "opacity-30"}`}
          />
        );
      })}
    </div>
  );
}

export default function TestimonialCard({
  name,
  origin,
  rating,
  tour,
  text,
}: TestimonialCardProps) {
  return (
    <figure className="bg-surface-container-lowest p-8 rounded-xl border border-primary/10 shadow-card flex flex-col h-full">
      <Stars rating={rating} />
      <blockquote className="text-body-md text-on-surface-variant leading-relaxed my-6 flex-grow">
        “{text}”
      </blockquote>
      <figcaption>
        <p className="font-display text-headline-sm text-[20px] text-primary">{name}</p>
        <p className="text-label-sm text-on-surface-variant mt-1">
          {origin}
          {tour ? ` · ${tour}` : ""}
        </p>
      </figcaption>
    </figure>
  );
}
