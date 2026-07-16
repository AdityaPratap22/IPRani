import type { BlogEntry } from "./_types";
import data from "./_registry.json";

export const blogRegistry: BlogEntry[] = data as BlogEntry[];

export function findBlog(category: string, slug: string) {
  return blogRegistry.find((b) => b.category === category && b.slug === slug);
}

export function getBlogsByCategory(category: string) {
  return blogRegistry.filter((b) => b.category === category);
}
