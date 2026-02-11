import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(["learn", "build", "think"]),
    tags: z.array(z.string()),
    publishedAt: z.coerce.date(),
    readTime: z.string(),
    nextAction: z.array(z.string())
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    status: z.enum(["in-progress", "shipped", "archived"]),
    stack: z.array(z.string()),
    repoUrl: z.string().url(),
    demoUrl: z.string().url(),
    updatedAt: z.coerce.date(),
    problem: z.string(),
    hypothesis: z.string(),
    buildProcess: z.array(z.string()),
    resultsMetrics: z.array(z.string()),
    retrospective: z.array(z.string()),
    relatedPosts: z.array(z.string())
  })
});

const resources = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.enum([
      "tool-stack",
      "prompt-template",
      "checklist",
      "learning-reference"
    ]),
    link: z.string(),
    description: z.string(),
    updatedAt: z.coerce.date(),
    downloadName: z.string().optional()
  })
});

export const collections = {
  blog,
  projects,
  resources
};
