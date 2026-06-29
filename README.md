# WYS 的博客

基于 Astro 的个人技术笔记博客，部署到 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev
```

默认本地地址是 `http://localhost:4321/`。

## 新建文章

在 `src/content/blog/` 下创建 Markdown 文件，例如：

```text
src/content/blog/my-note.md
```

文章头部格式：

```md
---
title: "文章标题"
description: "一句话摘要"
pubDate: 2026-06-29
tags: ["Astro", "GitHub Pages"]
draft: false
---
```

`draft: true` 的文章不会发布。

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并发布到 GitHub Pages。
