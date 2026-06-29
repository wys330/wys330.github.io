---
title: "博客搭建记录：Astro 与 GitHub Pages"
description: "记录这个博客的技术选型、目录结构和后续写作流程。"
pubDate: 2026-06-29
tags: ["Astro", "GitHub Pages", "博客"]
draft: false
---

这篇文章用来记录博客的第一版搭建思路，后续如果调整框架、主题或部署方式，也可以继续在这里补充。

## 技术选型

这个博客选择 Astro 作为静态站点框架。它适合以 Markdown 为主的内容站点，默认构建结果是静态文件，部署到 GitHub Pages 很直接。

当前写作流程是：

1. 在本地 `src/content/blog/` 目录新建 Markdown 文件。
2. 在文章头部填写标题、摘要、发布时间和标签。
3. 本地运行 `npm run dev` 预览。
4. 提交并推送到 GitHub，等待 GitHub Actions 自动发布。

## 目录说明

核心目录如下：

```text
src/content/blog/   Markdown 文章
src/pages/          页面路由
src/layouts/        页面布局
src/styles/         全局样式
.github/workflows/  自动部署流程
```

## 后续计划

后面可以继续补充代码高亮主题、评论系统、搜索功能和分类页。第一版先保持简洁，保证写作和发布流程稳定。
