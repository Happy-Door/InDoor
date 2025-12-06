---
title: git操作手册-第2版
categories:
  - 新弟子进！
tags:
  - 默认标签
toc: true
comments: true
description: ''
# plugins:
#   - mathjax
date: 2025-12-06 21:27:36
author: 土土
updated:
---

继第一版 {% post_link Git功法入门 %} 后，在增加了分支控制并简化操作流程的基础上，逍遥门整合出了第二版 git 操作手册！

<!-- more -->

# Git 操作手册

> 这是为 **不熟悉 Git 的成员** 准备的教程  
> 不会 Git 也能照着做完一次完整协作！

熟悉 git 或者想直接操作请跳转 [第一次修改前的 3 步](#第一次修改前的-3-步) 或 [开始修改](#开始修改)。

## 什么是 Git？

Git 是一个 **版本控制工具**，可以：

- 记录每次修改
- 回退到任意历史版本
- 多人同时开发而互不干扰
- 通过 Pull Request 审核才能进入主仓库（我们已启用！）

## 安装与环境准备

### ① 安装 Git

[https://git-scm.com/download/win](https://git-scm.com/download/win)
一路 Next → Next → 完成即可

### ② 初次使用需要配置身份（否则无法提交）

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

> *你的名字与邮箱将会出现在仓库贡献记录中*

### ③ Windows 建议使用 **Git Bash**

右键目录 → *Git Bash Here*
或者：

```bash
cd 你的项目目录
```

## Happy Door 分支协作规范

> 主分支 `master` 已启用保护 → 不允许直接 push
> 所有修改必须通过 **分支 → PR → 审核 → 合并**

工作流如下：

```
克隆仓库 → 创建个人分支 → 修改内容 → commit → push → Pull Request → 审核通过 → 合并
```

## 第一次修改前的 3 步

### 1）克隆仓库到本地

```bash
git clone https://github.com/Happy-Door/InDoor.git
cd InDoor
```

### 2）每次开发前先同步最新代码

```bash
git pull origin main
```

以防代码冲突

### 3）创建你自己的分支（非常重要!!!）

```bash
git checkout -b your-name-task
```

示例：

```
feature/alkaid-add-pdf
fix/vci-path-error
doc/git-guide-update
```

不需要每次更改都新建分支，但建议针对不同功能 / 任务创建独立分支。

## 开始修改

修改你想改的文件后执行：

### ① 查看更改

```bash
git status
```

### ② 把文件加入提交列表

```bash
git add 文件名
// 或所有更改一次性添加
git add .
```

### ③ 提交（commit）并附上说明文字

```bash
git commit -m "feat: 新增VCI笔记"
```

Commit 信息规范推荐：

| 类型    | 示例      |
| ----- | ------- |
| feat  | 新功能     |
| fix   | 修bug    |
| docs  | 文档/指南更新 |
| style | UI样式调整  |

---

## 推到远程仓库（push）

```bash
git push origin 你的分支名
```

示例：

```bash
git push origin feature/alkaid-add-pdf
```

成功后 GitHub 会提示你：

> Create Pull Request

这一步意味着你准备将修改提交给门派审核！

## Pull Request（PR）审核流程

你通过本地 git 创建了 PR（如上一步所说），
还需要使用 GitHub 的网页界面创建 PR

**步骤：**

1. 打开 GitHub → 你的分支 → **New Pull Request**
2. 选择 目标分支为 master
3. 填写说明内容 → 点击 *Create Pull Request*
4. 等待队友 Review
5. 审核通过后 **才能被合并**


> 你不需要合并自己的 PR
> PR 应由其他成员审核并 Merge

你也可以去 Review 别人的改动 

## Hexo 特有流程（写博客时必做）

Git 提交和 PR 合并 ≠ 网站自动更新  
你需要在本地生成并部署：

```bash
hexo clean   // 若出现未更新情况可以清缓存
hexo g       // generate 生成静态文件
hexo s       // 可选，本地预览网站效果
hexo d       // deploy 上传页面
```

# 🎉 恭喜你！你已经掌握 git 操作的完整流程！

感谢各位的捧场，今天的早课结束啦ᕕ ( ᐛ ) ᕗ
