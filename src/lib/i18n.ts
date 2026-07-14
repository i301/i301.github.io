export type Lang = "zh" | "en";

export const languages: Record<Lang, string> = {
  zh: "中文",
  en: "English",
};

export const defaultLang: Lang = "zh";

export const copy = {
  zh: {
    siteTitle: "Zhou 的主页",
    siteDescription: "Zhou 关于工程、设计、AI 和长期思考的双语主页。",
    latestPosts: "最新文章",
    allPosts: "全部文章",
    tags: "标签",
    categories: "分类",
    archive: "归档",
    language: "语言",
    readMore: "阅读全文",
    draft: "草稿",
    published: "发布",
    updated: "更新",
    translation: "English",
    noPosts: "暂无文章。",
    backToPosts: "返回文章列表",
  },
  en: {
    siteTitle: "Zhou's Home",
    siteDescription: "Zhou's bilingual home for engineering, design, AI, and long-lived thinking.",
    latestPosts: "Latest Posts",
    allPosts: "All Posts",
    tags: "Tags",
    categories: "Categories",
    archive: "Archive",
    language: "Language",
    readMore: "Read more",
    draft: "Draft",
    published: "Published",
    updated: "Updated",
    translation: "中文",
    noPosts: "No posts yet.",
    backToPosts: "Back to posts",
  },
} as const;

export function getOppositeLang(lang: Lang): Lang {
  return lang === "zh" ? "en" : "zh";
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === "zh" ? "zh-CN" : "en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}
