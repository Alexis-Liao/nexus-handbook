# 知合 Nexus 官网

知合 Nexus 官方网站与《圆桌领读人手册》网页版，基于 [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) 构建。官网内容来源于《知合 NEXUS 品牌手册 2025》。

## 本地预览

```bash
npm install
npm run dev
```

打开终端提示的本地地址（默认 `http://localhost:4321`）。

## 站点结构

**官网**

- `/` — 首页（使命愿景、项目概览、落点、反馈）
- `/about/` — 关于（文化平原、营地点）
- `/philosophy/` — 理念与方法（博雅教育、圆桌）
- `/programs/` — 读书营（暑期/冬季/线上、时间线、课程案例）
- `/team/` — 团队（理事会、各工作组）
- `/join/` — 参与（参与方式、优势、合作案例）

**领读人手册**

- `/handbook/` — 手册首页
- `/handbook/start/` — 致领读人
- `/handbook/01-about/` … `/handbook/05-camp/` — 五个章节

## 技术栈

- [Astro](https://astro.build) + [Starlight](https://starlight.astro.build)
