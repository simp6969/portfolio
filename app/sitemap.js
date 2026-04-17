// sitemap.js — Generates sitemap.xml for search engine indexing
// Helps search engines discover and index all pages correctly

export default function sitemap() {
  return [
    {
      url: "https://ariunbold.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
