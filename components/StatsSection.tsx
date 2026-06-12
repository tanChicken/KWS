interface Stat {
  value: string;
  accent: string;
  label: string;
}

const stats: Stat[] = [
  { value: "15", accent: "+", label: "Years Experience" },
  { value: "10", accent: "k", label: "Happy Travelers" },
  { value: "50", accent: "+", label: "Partner Agencies" },
  { value: "2.5", accent: "k", label: "Custom Tours" },
];

export default function StatsSection() {
  return (
    <section
      aria-label="Company statistics"
      className="py-20 md:py-24 bg-surface-container-lowest border-y border-outline-variant/20"
    >
      <div className="max-w-container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:divide-x md:divide-outline-variant/20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <p className="font-display text-display-lg text-primary mb-2">
                {stat.value}
                <span className="text-secondary">{stat.accent}</span>
              </p>
              <p className="text-label-caps uppercase tracking-[0.2em] font-bold text-on-surface-variant">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
