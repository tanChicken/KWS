import fs from "fs";
import path from "path";
import matter from "gray-matter";

/** Front-matter written by Decap CMS (public/admin/config.yml). */
export interface BlogPostMeta {
  slug: string;
  title: string;
  /** ISO 8601 string — serialisable across the RSC boundary. */
  date: string;
  featuredImage: string;
  description: string;
}

export interface BlogPost extends BlogPostMeta {
  /** Raw Markdown body, rendered on the detail page via react-markdown. */
  content: string;
}

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "blog");

/** Markdown files in content/blog, or [] before the first post is published. */
function getPostFileNames(): string[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }
  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((fileName) => fileName.endsWith(".md"));
}

function parsePostFile(fileName: string): BlogPost {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(POSTS_DIRECTORY, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? "",
    // gray-matter parses unquoted YAML dates as Date objects.
    date: data.date ? new Date(data.date).toISOString() : "",
    featuredImage: data.featured_image ?? "",
    description: data.description ?? "",
    content,
  };
}

/** All posts sorted newest-first, metadata only (for the overview grid). */
export function getAllPosts(): BlogPostMeta[] {
  return getPostFileNames()
    .map((fileName) => {
      const { content: _content, ...meta } = parsePostFile(fileName);
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** A single post including its Markdown body, or null for unknown slugs. */
export function getPostBySlug(slug: string): BlogPost | null {
  // Normalising to the base name blocks path traversal via the URL segment.
  const fileName = `${path.basename(slug)}.md`;
  if (!fs.existsSync(path.join(POSTS_DIRECTORY, fileName))) {
    return null;
  }
  return parsePostFile(fileName);
}
