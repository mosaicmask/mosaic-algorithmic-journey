import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "Algorithmic journey",
  description: "这是捡破烂的小z的算法学习之旅，希望能给在算法学习路上迷茫的你，带来一点点参考。",
  theme: recoTheme({
    // home: '/Home',
    logo: "/logo.png",
    style: "@vuepress-reco/style-default",
    author: "捡破烂的小z",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/data-structure/": [
        {
          text: "前言",
          children: ["home", "parsing", "statement"],
        },
        {
          text: "开始旅程",
          children: ["api", "plugin"],
        },
      ],
      "/docs/algorithm-parsing/": [
        {
          text: "前言",
          children: ["home"],
        },
        {
          text: "简单",
          children: [],
        },
        {
          text: "中等",
          children: [],
        },
        {
          text: "困难",
          children: [],
        },
      ],
    },
    navbar: [
      // { text: "首页", link: "/Home" },
      // { text: "Categories", link: "/categories/reco/1/" },
      {
        text: "旅程",
        children: [
          { text: "基本数据结构", link: "/docs/data-structure/home" },
          { text: "算法解析", link: "/docs/algorithm-parsing/home" },
        ],
      },
      { text: "算法练习", link: "/tags/tag1/1/" },
    ],
  }),
  // debug: true,
});
