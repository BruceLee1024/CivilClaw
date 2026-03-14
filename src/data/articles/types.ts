import type { ReactNode } from "react";

export interface ArticleMeta {
  id: string;
  tag: string;
  tagClass: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  icon: string;
  iconColor: string;
  wordCount?: number; // 字数统计（可选）
}

export interface Article extends ArticleMeta {
  content: ReactNode;
}
