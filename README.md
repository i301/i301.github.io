# Bilingual Astro Blog

Astro static blog for GitHub Pages with local Markdown/MDX publishing and bilingual Chinese/English posts.

## Local Development

```powershell
npm install
npm run dev
```

Open the local URL printed by Astro.

## Write A Post

Create two files with the same `slug`:

- `src/content/posts/zh/my-post.mdx`
- `src/content/posts/en/my-post.mdx`

Use this frontmatter:

```yaml
---
title: "文章标题"
description: "文章摘要"
date: 2026-07-14
updated: 2026-07-14
slug: "my-post"
lang: "zh"
tags: ["Tag"]
category: "Category"
cover: "/images/default-cover.svg"
draft: false
---
```

For the English version, set `lang: "en"` and keep the same `slug`.

## Images

- Shared images: `public/images/`
- Post-specific source images: `src/assets/posts/<slug>/`
- Public image references use paths like `/images/default-cover.svg`.

## Build

```powershell
npm run check
npm run build
```

Production builds exclude posts with `draft: true`.

## GitHub Pages

This project is configured for a user Pages repository such as `username.github.io`.

Before publishing, update `site` in `astro.config.mjs`:

```js
site: "https://your-github-username.github.io",
```

Then push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys the site automatically.
