import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogPostCardProps {
  post: BlogPostMeta;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const locale = useLocale();
  const t = useTranslations("BlogPage");
  const detailHref = `/blog/${post.slug}`;

  const formattedDate = new Date(post.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="flex flex-col group">
      <Link
        href={detailHref}
        className="relative aspect-[4/3] mb-6 overflow-hidden rounded-xl block"
      >
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm text-primary text-label-caps uppercase tracking-[0.1em] font-bold px-3 py-1.5 rounded">
          {formattedDate}
        </span>
      </Link>

      <h3 className="font-display text-headline-sm leading-tight text-primary group-hover:text-secondary transition-colors mb-3">
        <Link href={detailHref}>{post.title}</Link>
      </h3>
      <p className="text-body-md text-on-surface-variant line-clamp-2 mb-4">
        {post.description}
      </p>
      <Link
        href={detailHref}
        className="text-label-caps uppercase tracking-[0.1em] font-bold text-secondary mt-auto hover:opacity-80 transition-opacity"
      >
        {t("readStory")}
      </Link>
    </article>
  );
}
