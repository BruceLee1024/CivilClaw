"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { articlesMeta } from "@/data/articles";

const allArticles = articlesMeta;

const categories = [
  { label: "全部", className: "bg-primary text-black" },
  {
    label: "结构",
    className:
      "border-accent-struct text-accent-struct shadow-[0_0_10px_rgba(255,0,122,0.2)]",
  },
  {
    label: "岩土",
    className:
      "border-accent-geo text-accent-geo shadow-[0_0_10px_rgba(0,255,157,0.2)]",
  },
  {
    label: "施工",
    className:
      "border-accent-survey text-accent-survey shadow-[0_0_10px_rgba(0,229,255,0.2)]",
  },
  {
    label: "造价",
    className:
      "border-accent-const text-accent-const shadow-[0_0_10px_rgba(255,94,0,0.2)]",
  },
];

/* Map each tag to keywords matched against title + excerpt */
const tagKeywords: Record<string, string[]> = {
  "#新手入门": ["安装", "入门", "指南", "从零"],
  "#Skill开发": ["Skill", "SKILL.md", "编写"],
  "#ClawHub": ["ClawHub", "clawhub"],
  "#国产模型": ["国产", "DeepSeek", "通义千问", "Kimi", "GLM"],
  "#WhatsApp": ["WhatsApp"],
  "#Docker部署": ["Docker", "VPS", "部署", "DigitalOcean"],
  "#安全加固": ["安全", "Sandbox", "exec_approval"],
  "#Heartbeat": ["Heartbeat", "定时", "自动化"],
  "#规范查询": ["规范", "条文", "PDF"],
  "#施工日志": ["施工日志", "日报", "日志"],
  "#造价算量": ["造价", "算量", "工程量", "清单"],
  "#备考": ["备考", "错题", "注册"],
};

const tags = Object.keys(tagKeywords);

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return allArticles.filter((a) => {
      /* category filter */
      if (activeCategory !== "全部" && a.tag !== activeCategory) return false;
      /* tag keyword filter */
      if (activeTag) {
        const kws = tagKeywords[activeTag] ?? [];
        const hay = `${a.title} ${a.excerpt}`.toLowerCase();
        if (!kws.some((k) => hay.includes(k.toLowerCase()))) return false;
      }
      /* search filter */
      if (search.trim()) {
        const hay = `${a.title} ${a.excerpt} ${a.author}`.toLowerCase();
        if (!hay.includes(search.trim().toLowerCase())) return false;
      }
      return true;
    });
  }, [activeCategory, activeTag, search]);

  const featured = filtered.length > 0 ? filtered[0] : null;
  const rest = filtered.slice(1);

  return (
    <>
      <Header />
      <main className="w-full flex flex-col pt-8 pb-32 px-6">
        <div className="max-w-5xl mx-auto w-full mb-8">
          <h1 className="text-4xl font-bold uppercase tracking-tight text-text-main border-l-4 border-primary pl-4">
            养虾手册
          </h1>
        </div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-9 flex flex-col gap-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((f) => {
                const isActive = f.label === activeCategory;
                return (
                  <button
                    key={f.label}
                    onClick={() => {
                      setActiveCategory(f.label);
                      setActiveTag(null);
                    }}
                    className={`px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider transition-all ${
                      isActive
                        ? f.className
                        : `bg-black ${f.className} hover:bg-surface`
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>

            {/* Featured Article */}
            {featured ? (
              <Link href={`/blog/${featured.id}`} className="group">
                <article className="bg-surface rounded-[2rem] border border-primary/50 hover:border-primary transition-colors overflow-hidden relative">
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-[120px] text-primary">
                      {featured.icon}
                    </span>
                  </div>
                  <div className="p-8 flex flex-col gap-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1 rounded-full border bg-black text-xs font-bold uppercase tracking-wider ${featured.tagClass}`}
                      >
                        {featured.tag}
                      </span>
                      {activeCategory === "全部" && !activeTag && !search && (
                        <span className="px-3 py-1 rounded-full border border-primary text-primary bg-black text-xs font-bold uppercase tracking-wider">
                          置顶
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-text-main group-hover:text-primary transition-colors leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-text-muted text-sm line-clamp-2 max-w-3xl">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 font-mono text-xs text-text-muted uppercase mt-2">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          person
                        </span>
                        {featured.author}
                      </span>
                      <span>//</span>
                      <span>{featured.date}</span>
                      <span>//</span>
                      <span>阅读 {featured.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ) : (
              <div className="py-16 flex flex-col items-center gap-3 text-text-muted">
                <span className="material-symbols-outlined text-[48px] opacity-30">
                  search_off
                </span>
                <p className="font-mono text-sm">没有找到匹配的文章</p>
              </div>
            )}

            {/* Article Grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rest.map((a) => (
                  <Link key={a.id} href={`/blog/${a.id}`} className="group">
                    <article className="bg-surface rounded-[2rem] border border-border-color overflow-hidden hover:border-primary/50 transition-colors h-full flex flex-col">
                      <div className="p-6 flex flex-col gap-3 flex-1">
                        <div className="flex items-center justify-between">
                          <span
                            className={`px-2 py-0.5 rounded-full border bg-black text-[10px] font-bold uppercase tracking-wider leading-none ${a.tagClass}`}
                          >
                            {a.tag}
                          </span>
                          <span
                            className={`material-symbols-outlined text-3xl opacity-30 group-hover:opacity-60 transition-opacity ${a.iconColor}`}
                          >
                            {a.icon}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors line-clamp-2">
                          {a.title}
                        </h3>
                        <p className="text-text-muted text-sm line-clamp-2 flex-1">
                          {a.excerpt}
                        </p>
                        <div className="flex items-center justify-between font-mono text-[11px] text-text-muted uppercase mt-2 pt-3 border-t border-border-color/50">
                          <span>
                            {a.author} · {a.date}
                          </span>
                          <span>阅读 {a.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}

            {filtered.length > 0 && (
              <div className="py-4 flex justify-center">
                <button className="font-mono text-sm text-text-muted hover:text-primary uppercase tracking-widest flex items-center gap-2 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    expand_more
                  </span>
                  加载更多文章
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:flex col-span-3 flex-col gap-6">
            <div className="bg-surface rounded-xl p-4 border border-border-color">
              <div className="flex w-full items-center bg-black border border-border-color rounded-lg focus-within:border-primary transition-colors p-2">
                <span className="material-symbols-outlined text-text-muted ml-2 text-[20px]">
                  search
                </span>
                <input
                  className="w-full bg-transparent border-none focus:ring-0 text-text-main text-sm font-mono placeholder:text-text-muted placeholder:uppercase px-2"
                  placeholder="搜索文章..."
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="bg-surface rounded-xl p-5 border border-border-color flex flex-col gap-4">
              <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider border-b border-border-color pb-2">
                热门标签
              </h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setActiveTag(activeTag === tag ? null : tag);
                      setActiveCategory("全部");
                    }}
                    className={`px-3 py-1 border text-xs font-mono rounded-lg cursor-pointer transition-colors ${
                      activeTag === tag
                        ? "bg-primary/20 border-primary text-primary"
                        : "bg-black border-border-color text-text-main hover:border-primary"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1c0d] rounded-xl p-5 border border-primary/30 flex flex-col gap-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full" />
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  campaign
                </span>
                <h4 className="font-bold uppercase text-sm tracking-wide">
                  系统公告
                </h4>
              </div>
              <p className="text-xs text-text-muted font-mono leading-relaxed mt-2">
                Peter Steinberger 已加入 OpenAI，OpenClaw 转入开源基金会维护。运行 npm install -g openclaw@latest 升级到最新版。
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
