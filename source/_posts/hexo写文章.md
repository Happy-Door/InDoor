---
title: hexo写文章
author: Benetaid
categories:
  - 未分类
tags:
  - 默认标签
toc: true
comments: true
description: ''
date: 2025-11-29 20:57:10
updated:
---

Hexo 新建文章时会自动复制 scaffolds/post.md 的内容作为文章开头。

如果你执行：
```
hexo new post "hexo写文章"
```

它会生成：
```
source/_posts/hexo写文章.md
```

并将 scaffolds/post.md 的内容复制进去。

文章开头有一个 Front-Matter（YAML 头部），用于告诉 Hexo 和主题这篇文章的各种元数据。保留并更改你需要的部分。
