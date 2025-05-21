---
title: Git功法入门
toc: true
date: 2025/5/21 
categories: [新弟子进！]
---

# 前言

本篇旨在介绍逍遥门日常生活中常用的几个git操作，帮助不熟悉git的朋友快速上手，
顺便给某些总是记不住这些操作的家伙（逃）充当备忘录。

# 准备工作

## Git是什么？

**Git** 是一个开源的分布式版本控制系统，用于跟踪文件和目录的更改。Git 通过记录文件的变更历史，允许开发者在不同的时间点查看文件的版本，并且可以轻松地回溯到任何特定的版本。Git 也广泛用于多人合作构建项目（比如我们的happy door!）。

## Git 的安装

### 下载 Git
访问 Git 官方网站（https://git-scm.com），下载适合 Windows 的安装包。
运行安装程序，按照提示进行安装。在安装过程中，可以选择默认的设置，它会自动配置一些常用的 Git 工具，如 Git Bash（一个命令行工具，方便在 Windows 系统中使用 Git 命令，后面会提到）。

### Git 的配置

**全局配置用户名和邮箱**  
打开命令行工具（如 Git Bash、终端等），输入以下命令配置用户名：
git config --global user.name "Your Name"
把 “Your Name” 替换为你自己的名字。
输入以下命令配置邮箱：
git config --global user.email "your_email@example.com"
把 “your_email@example.com” 替换为你自己的邮箱地址。这些信息会在你提交代码到仓库时被记录，用于标识提交者。

### 关于 Git Bash 
Windows 系统下，打开文件资源管理器，进入特定的目录，然后右键 → “显示更多选项” → Git Bash。<br>
（当然，也可以打开后使用cd 切换到目标目录）

**Git Bash 和终端和命令提示符相比有什么好处？**<br>
事实上，Windows系统的很多终端命令和Liunx、Unix系统有所差异，而Git Bash 作为一个基于 MinGW 的环境，它在 Windows 系统上提供了一个类似 Unix 的命令行界面。这意味着你在 Windows 系统上可以使用许多常见的 Unix 命令和工具（如 ls、cp、mv、grep 等），而不需要安装额外的软件。<br>
此外，Git Bash 是 Git for Windows 的一部分，它专门为 Git 操作设计，提供了对 Git 命令的优化支持。在 Git Bash 中运行 Git 命令时，你可能会获得更好的性能和更友好的提示信息。<br>
好吧，更多的我也编不出来了......不用白不用嘛。

**部分快捷键**
或者你可以鼠标右键解决一切（）。
Ctrl + (Fn) + Insert：复制。
Shift + (Fn) + Insert：粘贴。

## Git 的主要操作

下面是在逍遥门经常出现的 Git 使用场景:

### 修改文件并提交

你可以直接在我们的github网站上操作，但通常来说我们更建议你使用git。

1. **创建一个文件夹来存放你的代码，进入这个文件夹，然后初始化仓库**：
   ```bash
   git init
   ```
   这个操作会生成 .git 隐藏文件夹，里面包含了 Git 仓库的所有配置和数据。

2. **添加远程仓库地址**：
   ```bash
   git remote add origin https://github.com/your_username/your_repository.git
   ```
   我们是在GitHub这个代码托管平台上创建的仓库，需要在命令行中输入以上命令将远程仓库地址添加到本地仓库：

   这里的 “origin” 是一个默认的远程仓库别名，你可以根据需要使用其他名字，但 “origin” 是最常用的。同时，将 “https://github.com/your_username/your_repository.git” 替换为你自己的远程仓库地址，比如我们的内门就是https://github.com/Happy-Door/InDoor (记得加“.git”!)。

3. **拉取更改**：
    ```bash
    git pull origin <branch-name>
    ```
   从远程仓库拉取更改并合并到当前分支，也是获取仓库最新代码的途径。这样以后你就可以在本地修改你想修改的文件了！<br>
   相当于git fetch origin（获取远程仓库的最新内容） 加上 git merge origin/main（将远程分支的更改合并到当前本地分支）。如果存在冲突，Git 会提示你解决这些冲突。


4. **查看状态**：
   ```bash
   git status
   ```
   查看当前仓库的状态，包括未提交的更改。一般在进行push操作前，我们都建议进行这个操作，确保所有的改变都已提交，防止代码发生冲突。

5. **添加文件**：
   ```bash
   git add <file>
   ```
   在git status告诉你有变化的文件后，你就可以执行这个操作将文件添加到暂存区，准备提交。（**注意！**这里的文件名必须包含完整的相对路径，比如`/path/to/file.txt`，具体的已经在git bash的提示信息中给出来了~）

   另外，如果是Windows用户，你很可能会看到
   ```bash
   warning: in the working copy of 'source/_posts/gitguideline.md', CRLF will be replaced by LF the next time Git touches it
   ```
   这是因为Git默认使用CRLF（回车符+换行符）作为行结束符，而Windows系统默认使用LF作为行结束符。<br>
   总之，你可以选择通过以下命令设置全局配置或仓库特定配置，这样以后Git不会自动转换换行符，文件中的换行符将保持原样。<br>
   全局配置：
   ```bash
   git config --global core.autocrlf false
   ```
   仓库特定配置(移动到仓库所在的目录)：
   ```bash
   git config core.autocrlf false
   ```


6. **提交更改**：
   ```bash
   git commit -m "Commit message"
   ```
   接下来，将暂存区的更改提交到本地仓库，并添加提交信息。

7. **推送更改**：
    ```bash
    git push origin <branch-name>
    ```
   当你git status没有问题后，将本地分支的更改推送到远程仓库。

**在第一次创建之后**，你就只需要使用4、5、6、7完成一次提交了。

### 其他常见操作

1. **查看提交历史**：
   ```bash
   git log
   ```
   查看提交历史记录。

2. **创建分支**：
   ```bash
   git branch <branch-name>
   ```
   创建一个新的分支。

3. **切换分支**：
   ```bash
   git checkout <branch-name>
   ```
   切换到指定的分支。

4. **合并分支**：
   ```bash
   git merge <branch-name>
   ```
   将指定分支的更改合并到当前分支。

5. **克隆仓库**：
   ```bash
   git clone <repository-url>
   ```
从远程仓库克隆一个副本到本地。效果相当于git remote add origin <url> 加上 git fetch origin。

# 结束之前

由于我们的逍遥门采用了hexo主题，所以直接提交是不能在主页上看到变化的。想要即刻看到变化，请进行以下操作！
1. **生成静态文件**
  ```bash
  hexo generate
  ```
2. **部署到远程仓库**
  ```bash
  hexo deploy
  ```
3. 如果出现了意外情况，比如新的内容还是没有加载出来，可以等一会儿或者使用命令**hexo clean**，再进行上面的两个操作。

# 结束！
感谢各位的捧场，今天的早课结束啦ᕕ ( ᐛ ) ᕗ