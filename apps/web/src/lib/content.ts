import { getCollection, type CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;
export type ProjectEntry = CollectionEntry<"projects">;
export type ResourceEntry = CollectionEntry<"resources">;

export async function getSortedBlogPosts(): Promise<BlogEntry[]> {
  const entries = await getCollection("blog");

  return entries.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
  );
}

export async function getSortedProjects(): Promise<ProjectEntry[]> {
  const entries = await getCollection("projects");

  return entries.sort(
    (a, b) => b.data.updatedAt.getTime() - a.data.updatedAt.getTime()
  );
}

export async function getSortedResources(): Promise<ResourceEntry[]> {
  const entries = await getCollection("resources");

  return entries.sort(
    (a, b) => b.data.updatedAt.getTime() - a.data.updatedAt.getTime()
  );
}

export function getRelatedPosts(posts: BlogEntry[], current: BlogEntry, limit = 2) {
  return posts
    .filter((post) => {
      return (
        post.slug !== current.slug &&
        post.data.category === current.data.category
      );
    })
    .slice(0, limit);
}
