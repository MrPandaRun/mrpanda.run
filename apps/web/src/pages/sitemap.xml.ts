import type { APIRoute } from "astro";
import { getSortedBlogPosts, getSortedProjects } from "@/lib/content";
import { siteConfig } from "@/data/site";

function urlNode(path: string, lastmod?: Date): string {
  const loc = `${siteConfig.url}${path}`;
  const lastModified = lastmod ? `<lastmod>${lastmod.toISOString()}</lastmod>` : "";

  return `<url><loc>${loc}</loc>${lastModified}</url>`;
}

export const GET: APIRoute = async () => {
  const staticPaths = [
    "",
    "/about",
    "/blog",
    "/projects",
    "/resources",
    "/subscribe",
    "/subscribe/success"
  ];

  const posts = await getSortedBlogPosts();
  const projects = await getSortedProjects();

  const urls = [
    ...staticPaths.map((path) => urlNode(path, new Date())),
    ...posts.map((post) => urlNode(`/blog/${post.slug}`, post.data.publishedAt)),
    ...projects.map((project) =>
      urlNode(`/projects/${project.slug}`, project.data.updatedAt)
    )
  ].join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
