import Image from "next/image";
import { Link } from "@/i18n/routing"; // Updated to use your localized routing
import { useTranslations } from "next-intl";
import type { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const t = useTranslations("Categories");

  return (
    <Link
      href="/tours"
      className="group relative rounded-xl overflow-hidden h-64 block focus:outline-none focus:ring-2 focus:ring-secondary"
    >
      <Image
        src={category.image}
        alt={t(`${category.key}.imageAlt`)}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

      {/* Realigned text container without the icon circle */}
      <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
        <h3 className="font-display text-headline-sm text-on-primary mb-1">
          {t(`${category.key}.title`)}
        </h3>
        <p className="text-label-sm text-on-primary/80 max-w-xs">
          {t(`${category.key}.description`)}
        </p>
      </div>
    </Link>
  );
}
