import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import type { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href="/tours"
      className="group relative rounded-xl overflow-hidden h-64 block focus:outline-none focus:ring-2 focus:ring-secondary"
    >
      <Image
        src={category.image}
        alt={category.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <div className="w-10 h-10 rounded-full bg-surface/15 backdrop-blur-sm flex items-center justify-center mb-3 text-secondary-fixed">
          {/* <Icon name={category.icon} className="text-[20px]" /> */}
        </div>
        <h3 className="font-display text-headline-sm text-on-primary mb-1">
          {category.title}
        </h3>
        <p className="text-label-sm text-on-primary/80 max-w-xs">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
