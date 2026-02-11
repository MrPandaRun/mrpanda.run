import type { APIRoute } from "astro";
import { siteConfig } from "@/data/site";

export const GET: APIRoute = async () => {
  const body = `User-agent: *\nAllow: /\nSitemap: ${siteConfig.url}/sitemap.xml\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
