import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "./i18n";

export type Post = CollectionEntry<"posts">;

function isPublished(post: Post): boolean {
  return import.meta.env.DEV || !post.data.draft;
}

function byNewest(a: Post, b: Post): number {
  return b.data.date.valueOf() - a.data.date.valueOf();
}

export async function getPosts(lang?: Lang): Promise<Post[]> {
  const posts = await getCollection("posts");

  return posts
    .filter(isPublished)
    .filter((post) => (lang ? post.data.lang === lang : true))
    .sort(byNewest);
}

export async function getPost(lang: Lang, slug: string): Promise<Post | undefined> {
  const posts = await getPosts(lang);
  return posts.find((post) => post.data.slug === slug);
}

export async function getTranslation(post: Post): Promise<Post | undefined> {
  const nextLang: Lang = post.data.lang === "zh" ? "en" : "zh";
  return getPost(nextLang, post.data.slug);
}

export async function getTags(): Promise<string[]> {
  const posts = await getPosts();
  return Array.from(new Set(posts.flatMap((post) => post.data.tags))).sort((a, b) =>
    a.localeCompare(b),
  );
}

export async function getCategories(): Promise<string[]> {
  const posts = await getPosts();
  return Array.from(new Set(posts.map((post) => post.data.category))).sort((a, b) =>
    a.localeCompare(b),
  );
}

export function getPostUrl(post: Post): string {
  return `/${post.data.lang}/posts/${post.data.slug}/`;
}
