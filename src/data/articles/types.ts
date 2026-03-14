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
}

export interface Article extends ArticleMeta {
  content: ReactNode;
}
