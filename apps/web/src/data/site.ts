export const siteConfig = {
  name: "mrpanda.run",
  brandName: "Mr Panda",
  tagline: "Learn AI in public, ship projects in public, and document real retrospectives.",
  description:
    "Mr Panda's public learning site: weekly actionable AI tasks, project retrospectives, and reusable resources.",
  url: "https://www.mrpanda.run",
  email: "hello@mrpanda.run",
  defaultTitle: "Mr Panda | Learn AI in Public",
  ogImage: "/og-cover.svg"
};

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" }
] as const;

export const platformLinks = [
  { label: "X", href: "https://x.com/mrpandarun" },
  { label: "GitHub", href: "https://github.com/mrpandarun" }
] as const;

export const blogCategories = ["all", "learn", "build", "think"] as const;

export const projectStatuses = [
  "all",
  "in-progress",
  "shipped",
  "archived"
] as const;

export const resourceTypeOrder = [
  "tool-stack",
  "prompt-template",
  "checklist",
  "learning-reference"
] as const;
