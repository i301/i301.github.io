export type Lang = "zh" | "en";

export const languages: Record<Lang, string> = {
  zh: "中文",
  en: "English",
};

export const defaultLang: Lang = "zh";

export const copy = {
  zh: {
    siteTitle: "Zhou 的影像书房",
    siteDescription:
      "电影、书籍、摄影与短片的私人索引。记录值得重看的镜头、值得反复翻页的段落，也收藏日常里偶然出现的光。",
    latestPosts: "最近分享",
    allPosts: "全部笔记",
    tags: "标签",
    categories: "片单、书架与相册",
    archive: "影像索引",
    language: "语言",
    readMore: "进入笔记",
    draft: "草稿",
    published: "发布",
    updated: "更新",
    translation: "English",
    noPosts: "暂无影像笔记。",
    backToPosts: "返回影像索引",
  },
  en: {
    siteTitle: "Zhou's Image & Book Room",
    siteDescription:
      "A quiet index of films, books, photography, and short films: scenes worth rewatching, pages worth revisiting, and light worth keeping.",
    latestPosts: "Recent Notes",
    allPosts: "All Notes",
    tags: "Tags",
    categories: "Shelves",
    archive: "Index",
    language: "Language",
    readMore: "Open note",
    draft: "Draft",
    published: "Published",
    updated: "Updated",
    translation: "中文",
    noPosts: "No notes yet.",
    backToPosts: "Back to index",
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
