import Icon from "./Icon";

const partners = [
  { name: "Korea Tourism Organization", icon: "verified" },
  { name: "Seoul Convention Bureau", icon: "location_city" },
  { name: "Asiana Premium Partners", icon: "flight" },
  { name: "Lotte Hotels & Resorts", icon: "hotel" },
  { name: "Jeju Wellness Alliance", icon: "spa" },
];

export default function PartnerLogos() {
  return (
    <section aria-label="Our partners" className="py-16 bg-surface-container-low border-y border-outline-variant/20">
      <div className="max-w-container mx-auto px-5 md:px-20">
        <p className="text-center text-label-caps uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-10">
          Trusted by leading travel brands & agencies worldwide
        </p>
        <ul className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="flex items-center gap-2 text-on-surface-variant/70 hover:text-primary transition-colors"
            >
              <Icon name={partner.icon} className="text-[28px] text-secondary/70" />
              <span className="font-display text-[18px] font-semibold">
                {partner.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
