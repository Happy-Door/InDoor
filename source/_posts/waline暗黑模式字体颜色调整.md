---
title:
  waline暗黑模式字体颜色调整
author:
  土土
date: 2025-12-02 11:27:06
---

# 问题：暗黑模式下waline评论与背景颜色接近，难以看清

本篇记录如何在 Volantis 中覆盖 waline 的暗黑模式评论字体颜色。

<!-- more -->

waline 的评论正文颜色加载自（cdn.yml中设置）官方的 waline.css，其中
```
--waline-color: #444;
```
Waline 评论正文使用的是：
```
[data-waline] p {
  color: var(--waline-color);
}
```
**解决方案**：
在 themes\volantis\source\css\_style\_plugins\_dark\dark_async.styl 中增加：
```
async_dark()
  ···

  if hexo-config('comments.service')=='waline'
    --waline-color: #c1c1c1ff !important; // 评论正文颜色
    ···

@media (prefers-color-scheme: dark)
  :root
    --color-mode: 'dark'
  :root:not([color-scheme])
    async_dark()
    @import 'dark_plugins'
[color-scheme='dark']
  async_dark()
  @import 'dark_plugins'
```

这样就覆盖原本的文字颜色设置了。完整源码请查看[这里](https://github.com/Happy-Door/InDoor)