import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Blog posts are read from the filesystem at request time (lib/blog.ts);
  // make sure the Markdown files are bundled into the Vercel functions.
  outputFileTracingIncludes: {
    "/[locale]/blog": ["./content/blog/**/*"],
    "/[locale]/blog/[slug]": ["./content/blog/**/*"],
  },
  async redirects() {
    return [
      // Next.js does not auto-serve index.html for public/ subfolders, so
      // point /admin at the TinaCMS admin entry file explicitly.
      { source: "/admin", destination: "/admin/index.html", permanent: false },
    ];
  },
};

export default withNextIntl(nextConfig);