import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Icon from "@/components/Icon";
import BlogPostCard from "@/components/BlogPostCard";
import { getAllPosts } from "@/lib/blog";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPage" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPage" });

  // Newest-first; the latest post becomes the featured story.
  const posts = getAllPosts();
  const [featuredPost, ...gridPosts] = posts;

  return (
    <div className="pb-20 md:pb-section-gap">
      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/stitch/hero-palace.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/70" />
        <div className="relative z-10 max-w-4xl px-5 md:px-0 text-center">
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-on-primary mb-6">
            {t("title")}
          </h1>
          <p className="text-body-lg text-on-primary/90 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="max-w-container mx-auto px-5 md:px-20 py-24 text-center">
          <p className="text-body-lg text-on-surface-variant">{t("empty")}</p>
        </section>
      ) : (
        <>
          {/* Featured post */}
          {featuredPost && (
            <section className="max-w-container mx-auto px-5 md:px-20 py-16 md:py-24">
              <article className="grid grid-cols-1 lg:grid-cols-12 bg-surface-container-lowest rounded-xl overflow-hidden border border-surface-variant/50 shadow-soft hover:shadow-soft-lg transition-shadow duration-300 group">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="relative lg:col-span-7 h-[320px] lg:h-[520px] overflow-hidden block"
                >
                  <Image
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-16">
                  <span className="text-label-caps uppercase tracking-[0.1em] font-bold text-secondary mb-4">
                    {t("featured")} •{" "}
                    {new Date(featuredPost.date).toLocaleDateString(locale, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <h2 className="font-display text-headline-md text-primary mb-6">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-body-md text-on-surface-variant mb-8">
                    {featuredPost.description}
                  </p>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-3 text-label-caps uppercase tracking-[0.1em] font-bold text-primary group/btn"
                  >
                    {t("readMore")}
                    <Icon
                      name="arrow_forward"
                      className="text-secondary group-hover/btn:translate-x-2 transition-transform"
                    />
                  </Link>
                </div>
              </article>
            </section>
          )}

          {/* Post grid */}
          {gridPosts.length > 0 && (
            <section className="max-w-container mx-auto px-5 md:px-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter gap-y-16">
                {gridPosts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
