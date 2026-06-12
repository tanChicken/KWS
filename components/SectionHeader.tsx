interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-3 mb-4 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="w-12 h-px bg-secondary opacity-50" aria-hidden="true" />
          <span className="font-body text-label-caps uppercase tracking-[0.2em] font-bold text-secondary">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`font-display text-headline-md ${
          light ? "text-on-primary" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-body-md max-w-2xl ${
            light ? "text-on-primary/80" : "text-on-surface-variant"
          } ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
