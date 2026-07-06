import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import Icon from "@/components/Icon";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

/** ~200 words per minute, floored at one minute. */
const wordsPerMinute = 200;

/** Maps Markdown elements onto the "Timeless Heritage" design system. */
const markdownComponents: Components = {
  // A post body should never re-declare the page <h1>; demote it.
  h1: ({ children }) => (
    <h2 className="font-display text-headline-md text-primary pt-4 mb-6">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h2 className="font-display text-headline-md text-primary pt-4 mb-6">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-headline-sm text-primary pt-2 mb-4">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-body-lg text-on-surface-variant leading-relaxed mb-8">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-secondary underline underline-offset-4 hover:opacity-80 transition-opacity"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-8 space-y-2 text-body-lg text-on-surface-variant">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-8 space-y-2 text-body-lg text-on-surface-variant">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-secondary pl-6 italic text-on-surface-variant mb-8 [&>p]:mb-0">
      {children}
    </blockquote>
  ),
  img: ({ src, alt }) => (
    // Editors upload arbitrary sizes via the CMS, so a plain <img> is used
    // here — next/image requires known dimensions for remote-style content.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === "string" ? src : undefined}
      alt={alt ?? ""}
      loading="lazy"
      className="w-full h-auto object-cover rounded-xl shadow-soft my-10"
    />
  ),
  hr: () => <hr className="border-surface-variant my-12" />,
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.featuredImage }],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);

  // No Markdown file for this slug → standard Next.js 404 page.
  if (!post) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "BlogPostPage" });
  const tb = await getTranslations({ locale, namespace: "BlogPage" });

  const formattedDate = new Date(post.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const readingMinutes = Math.max(
    1,
    Math.round(post.content.split(/\s+/).length / wordsPerMinute)
  );

  // Up to three other recent stories for the closing section.
  const morePosts = getAllPosts()
    .filter((other) => other.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="pt-12 pb-24 md:pb-section-gap">
      <div className="max-w-container mx-auto px-5 md:px-20">
        {/* Back to blog */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-label-caps uppercase tracking-[0.1em] font-bold text-on-surface-variant hover:text-secondary transition-colors mb-10"
        >
          <Icon name="arrow_back" className="text-sm" />
          {t("backToBlog")}
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-4">
              {post.title}
            </h1>
            <p className="font-display text-headline-sm italic text-on-surface-variant mb-8">
              {post.description}
            </p>
            <div className="flex items-center justify-center gap-4 text-label-caps uppercase tracking-[0.1em] font-bold text-on-surface-variant">
              <span>{formattedDate}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>{t("minRead", { minutes: readingMinutes })}</span>
            </div>
          </header>

          {/* Featured image */}
          <section className="relative rounded-xl overflow-hidden h-[320px] md:h-[500px] shadow-soft-lg mb-16">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </section>

          {/* Body */}
          <article className="max-w-2xl mx-auto">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {post.content}
            </ReactMarkdown>
          </article>

          {/* Continue your journey */}
          {morePosts.length > 0 && (
            <section className="border-t border-surface-variant mt-20 pt-16">
              <h2 className="font-display text-headline-sm text-primary mb-8 text-center">
                {t("continueJourney")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {morePosts.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/blog/${other.slug}`}
                    className="group"
                  >
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-secondary mb-2">
                      {new Date(other.date).toLocaleDateString(locale, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                    <p className="font-display text-lg text-on-surface group-hover:text-primary transition-colors">
                      {other.title}
                    </p>
                    <span className="inline-block mt-3 text-label-caps uppercase tracking-[0.1em] font-bold text-on-surface-variant group-hover:text-secondary transition-colors">
                      {tb("readStory")}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
