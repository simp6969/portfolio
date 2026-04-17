// robots.js — Generates robots.txt for search engine crawlers
// Fixes "Page with redirect" by ensuring crawlers can access all pages directly

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://ariunbold.dev/sitemap.xml",
  };
}
