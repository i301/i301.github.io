export type Lang = "zh" | "en";

export const languages: Record<Lang, string> = {
  zh: "中文",
  en: "English",
};

export const defaultLang: Lang = "zh";

export const copy = {
  zh: {
    siteTitle: "Zhou AI Notes",
    siteDescription:
      "聚焦大模型、AI Agent 与开发者工具的研究型博客，追踪 OpenAI、Anthropic、Google 以及国内模型公司的关键变化。",
    latestPosts: "AI 研究笔记",
    allPosts: "文章",
    tags: "标签",
    categories: "主题",
    archive: "AI / Agent / 大模型",
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
    siteTitle: "Zhou AI Notes",
    siteDescription:
      "Research notes on frontier models, AI agents, and developer tools across OpenAI, Anthropic, Google, and Chinese AI labs.",
    latestPosts: "AI Research Notes",
    allPosts: "Posts",
    tags: "Tags",
    categories: "Topics",
    archive: "AI / Agents / Models",
    language: "Language",
    readMore: "Read article",
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
