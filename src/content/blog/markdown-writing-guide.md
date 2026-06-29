---
title: "Markdown 技术笔记写作模板"
description: "整理一套适合技术笔记的 Markdown 结构，方便后续复用。"
pubDate: 2026-06-29
tags: ["Markdown", "写作"]
draft: false
---

写技术笔记时，最好让文章结构稳定。这样以后回看时，可以快速定位问题背景、解决方案和结论。

## 推荐结构

一篇实践类技术笔记可以按这个顺序组织：

1. 背景：为什么要处理这个问题。
2. 现象：错误信息、截图、日志或复现步骤。
3. 分析：排查过程和关键判断。
4. 方案：最终采用的命令、代码或配置。
5. 结论：适用条件和后续注意事项。

## 代码块

写命令或代码时，给代码块加上语言标记：

```bash
npm run dev
```

```ts
export function add(a: number, b: number) {
  return a + b;
}
```

## Frontmatter

每篇文章都需要在开头写元数据：

```md
---
title: "文章标题"
description: "一句话摘要"
pubDate: 2026-06-29
tags: ["标签"]
draft: false
---
```

如果文章还不想发布，把 `draft` 改成 `true`。
