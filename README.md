# 页边笔记

基于 [Axi-Theme](https://github.com/Axi404/Axi-Theme) 的 Astro 博客。保留主题的深浅色切换、文章归档、标签、Pagefind 搜索和 RSS。首页展示个人介绍、最新博文和公开项目，并预留学籍、文章和获奖。`/blog` 是博客入口。「页边笔记」是暂定站名，首篇文章是示例。

## 本地预览

使用 Node.js 24 与 pnpm 10.28.2。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

用 `pnpm build` 运行类型检查、生成静态站点并构建搜索索引。使用 `pnpm preview` 查看构建后的站点。

## 更新内容

- 站名、作者名、描述和公开联系方式在 `src/site.config.ts`。
- 显示名、公开邮箱、学籍和首页项目在 `src/profile.ts`。文章和获奖标题在 `src/components/home/PersonalHome.astro`。
- 中文文章放在 `src/content/blogs/文章目录/index.md`。英文译文可放在同目录的 `index-en.md`。参考 `hello-blog` 中的示例。
- favicon 在 `public/favicon/`。默认分享封面在 `public/images/social-card.webp`。

## 发布到 GitHub Pages

1. 在 GitHub 创建名为 `你的用户名.github.io` 的公开仓库。
2. 将本项目推送到新仓库的 `main` 分支。仓库的 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
3. 进入 **Actions → Deploy blog to GitHub Pages**。如果首次推送早于启用 Pages，手动运行工作流一次。成功后打开 `https://你的用户名.github.io/`。

工作流自动从 GitHub 仓库所有者确定站点域名。此配置面向个人站点的根路径。以后推送到 `main` 会自动更新线上站点。

## 主题与许可证

本项目修改自 [Axi404/Axi-Theme](https://github.com/Axi404/Axi-Theme)，附有上游的 [Apache-2.0 许可证](LICENSE)。改动涉及首页、站点内容和 GitHub Pages 部署配置。

首页横幅照片由 Daniel R. 拍摄，来自 [Unsplash](https://unsplash.com/photos/mountain-ridges-above-clouds-at-golden-hour-RJngzT0LRJE)，使用 [Unsplash License](https://unsplash.com/license)。
