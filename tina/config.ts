import { defineConfig } from "tinacms";

// On Vercel the deployed branch is exposed as VERCEL_GIT_COMMIT_REF;
// locally we fall back to main.
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  "main";

export default defineConfig({
  branch,

  // Both values come from the Tina Cloud project (app.tina.io).
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    // Emits the admin SPA to public/admin, served at /admin on the site.
    outputFolder: "admin",
    publicFolder: "public",
  },

  // Uploaded images are committed to public/uploads and served from /uploads
  // (same location the Decap setup used, so existing image paths keep working).
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "content/blog",
        format: "md",
        ui: {
          // The filename becomes the URL slug (lib/blog.ts derives slugs from
          // filenames), so generate it from the title and lock it afterwards —
          // renaming a published file would break its URL.
          filename: {
            readonly: true,
            slugify: (values) =>
              (values?.title ?? "")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, ""),
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
            required: true,
          },
          {
            type: "image",
            name: "featured_image",
            label: "Featured Image",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: { component: "textarea" },
            description: "Short summary shown on the blog overview cards.",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
