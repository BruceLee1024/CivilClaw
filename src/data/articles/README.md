# 文章管理指南

## 目录结构

```
src/data/articles/
├── README.md                          # 本文档
├── types.ts                           # 类型定义
├── index.ts                           # 索引文件（聚合所有文章）
├── install-guide.tsx                  # 文章1
├── auto-review.tsx                    # 文章2
├── skills-complete-guide.tsx          # 文章18
└── ...                                # 其他文章
```

## 添加新文章

### 步骤 1: 创建文章文件

在 `src/data/articles/` 目录下创建新文件，文件名使用 kebab-case（小写+短横线），如 `new-article.tsx`

### 步骤 2: 使用模板填写内容

```tsx
import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
  id: "new-article",                    // 必须与文件名一致
  tag: "结构",                          // 结构/岩土/施工/造价
  tagClass: "border-accent-struct text-accent-struct",  // 对应标签的样式类
  title: "文章标题",
  excerpt: "文章摘要，显示在列表页",
  author: "张工",
  date: "2026-03-14",                   // YYYY-MM-DD 格式
  readTime: "15 min",
  featured: false,                      // 是否置顶
  icon: "rocket_launch",                // Material Symbols 图标名
  iconColor: "text-accent-struct",      // 图标颜色类
};

export const content: ReactNode = (
  <>
    <P>文章内容开始...</P>
    
    <H>一、章节标题</H>
    <P>段落内容</P>
    
    <Terminal label="终端示例">{`$ npm install openclaw`}</Terminal>
    
    <Tip>提示信息（蓝色背景）</Tip>
    
    <Warn>警告信息（红色背景）</Warn>
    
    <Concept title="概念标题">
      概念解释内容
    </Concept>
  </>
);
```

### 步骤 3: 在索引文件中注册

编辑 `src/data/articles/index.ts`：

1. 添加导入语句：
```ts
import * as newArticle from "./new-article";
```

2. 在 `articlesMeta` 数组中添加：
```ts
export const articlesMeta: ArticleMeta[] = [
  // ... 其他文章
  newArticle.meta,
];
```

3. 在 `articleContent` 对象中添加：
```ts
export const articleContent: Record<string, ReactNode> = {
  // ... 其他文章
  "new-article": newArticle.content,
};
```

### 步骤 4: 验证

运行开发服务器查看效果：
```bash
npm run dev
```

访问 `http://localhost:3000/blog/new-article` 查看文章页面。

## 可用组件

### 文本组件
- `<P>` - 段落
- `<H>` - 章节标题（带左侧边框）
- `<Code>` - 行内代码

### 容器组件
- `<Terminal label="标签">代码内容</Terminal>` - 终端/代码块
- `<Tip>提示内容</Tip>` - 蓝色提示框
- `<Warn>警告内容</Warn>` - 红色警告框
- `<Concept title="标题">内容</Concept>` - 概念卡片

### 标签样式类

| 标签 | tagClass | iconColor |
|------|----------|-----------|
| 结构 | `border-accent-struct text-accent-struct` | `text-accent-struct` |
| 岩土 | `border-accent-geo text-accent-geo` | `text-accent-geo` |
| 施工 | `border-accent-survey text-accent-survey` | `text-accent-survey` |
| 造价 | `border-accent-const text-accent-const` | `text-accent-const` |

### Material Symbols 图标

常用图标名称：
- `rocket_launch` - 火箭
- `architecture` - 建筑
- `terrain` - 地形
- `construction` - 施工
- `extension` - 扩展
- `school` - 学校
- `web` - 网页
- 更多图标：https://fonts.google.com/icons

## 注意事项

1. **文章ID必须唯一**，且与文件名保持一致
2. **日期格式**必须是 `YYYY-MM-DD`
3. **修改共享组件**（`ArticleComponents.tsx`）会影响所有文章
4. 添加新文章后需要重新构建：`npm run build`
5. 文章内容使用 JSX 语法，可以包含任何 React 组件
