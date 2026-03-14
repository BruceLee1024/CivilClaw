"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { articlesMeta } from "@/data/articles/index";

/* ─── 搜索数据源 ─── */

interface SearchItem {
  type: "article" | "skill" | "page" | "command";
  title: string;
  desc: string;
  href: string;
  icon: string;
  color: string;
}

const skills = [
  { name: "Summarize", slug: "summarize", desc: "一键总结 PDF、网页、音频、视频内容" },
  { name: "Tavily Search", slug: "tavily-search", desc: "AI 优化的实时网页搜索" },
  { name: "GOG (Google Workspace)", slug: "gog", desc: "Google Sheets / Docs / Drive / Gmail" },
  { name: "Excel Formulas", slug: "excel-formulas", desc: "生成和解释 Excel 公式与函数" },
  { name: "arXiv Watcher", slug: "arxiv-watcher", desc: "搜索和总结 arXiv 论文" },
  { name: "飞书 Feishu", slug: "feishu", desc: "飞书/Lark 集成" },
  { name: "Notion", slug: "notion", desc: "读写 Notion 页面和数据库" },
  { name: "GitHub", slug: "github", desc: "完整 GitHub CLI 集成" },
  { name: "n8n Workflow", slug: "n8n", desc: "可视化工作流自动化引擎" },
  { name: "Obsidian", slug: "obsidian", desc: "读写 Obsidian 知识库" },
  { name: "Weather", slug: "weather", desc: "获取实时天气状况和预报" },
  { name: "Browser Relay", slug: "browser-relay", desc: "完整浏览器自动化" },
];

const pages: SearchItem[] = [
  { type: "page", title: "首页", desc: "CivilClaw 虾塘首页", href: "/", icon: "home", color: "text-primary" },
  { type: "page", title: "养虾手册", desc: "全部博客文章", href: "/blog", icon: "article", color: "text-accent-struct" },
  { type: "page", title: "虾饲料仓库", desc: "Skill 推荐列表", href: "/skills", icon: "extension", color: "text-accent-geo" },
  { type: "page", title: "养虾装备库", desc: "资源和工具推荐", href: "/library", icon: "folder_open", color: "text-accent-survey" },
  { type: "page", title: "配置生成器", desc: "交互式生成 openclaw.json", href: "/config-generator", icon: "tune", color: "text-primary" },
  { type: "page", title: "命令速查表", desc: "OpenClaw CLI 命令参考", href: "/commands", icon: "terminal", color: "text-accent-const" },
  { type: "page", title: "常见问题 FAQ", desc: "安装配置使用常见问题", href: "/faq", icon: "help", color: "text-accent-survey" },
];

const commandItems: SearchItem[] = [
  { type: "command", title: "openclaw onboard", desc: "交互式安装向导", href: "/commands", icon: "terminal", color: "text-primary" },
  { type: "command", title: "openclaw start", desc: "启动 Gateway 服务", href: "/commands", icon: "terminal", color: "text-primary" },
  { type: "command", title: "openclaw config", desc: "查看和修改配置", href: "/commands", icon: "settings", color: "text-accent-struct" },
  { type: "command", title: "clawhub install", desc: "安装 Skill", href: "/commands", icon: "download", color: "text-accent-geo" },
  { type: "command", title: "openclaw transport pair", desc: "配对消息平台", href: "/commands", icon: "chat", color: "text-accent-survey" },
  { type: "command", title: "openclaw doctor", desc: "诊断常见问题", href: "/commands", icon: "bug_report", color: "text-accent-const" },
];

function buildSearchIndex(): SearchItem[] {
  const articles: SearchItem[] = articlesMeta.map((a) => ({
    type: "article",
    title: a.title,
    desc: `${a.tag} · ${a.author} · ${a.date}`,
    href: `/blog/${a.id}`,
    icon: a.icon || "article",
    color: a.iconColor || "text-primary",
  }));

  const skillItems: SearchItem[] = skills.map((s) => ({
    type: "skill",
    title: s.name,
    desc: s.desc,
    href: "/skills",
    icon: "extension",
    color: "text-accent-geo",
  }));

  return [...pages, ...articles, ...skillItems, ...commandItems];
}

/* ─── 搜索组件 ─── */

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const allItems = buildSearchIndex();

  const results = query.trim()
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.desc.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  // Group results by type
  const grouped = [
    { type: "page" as const, label: "页面", items: results.filter((r) => r.type === "page") },
    { type: "article" as const, label: "文章", items: results.filter((r) => r.type === "article") },
    { type: "skill" as const, label: "Skill", items: results.filter((r) => r.type === "skill") },
    { type: "command" as const, label: "命令", items: results.filter((r) => r.type === "command") },
  ].filter((g) => g.items.length > 0);

  const flatResults = grouped.flatMap((g) => g.items);

  const handleSelect = useCallback(
    (item: SearchItem) => {
      setOpen(false);
      setQuery("");
      router.push(item.href);
    },
    [router]
  );

  // Keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when opening
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [open]);

  // Arrow keys navigation
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, flatResults.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && flatResults[selectedIndex]) {
        e.preventDefault();
        handleSelect(flatResults[selectedIndex]);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, flatResults, selectedIndex, handleSelect]);

  // Reset selection on query change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!open) return null;

  let itemCounter = 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="relative w-full max-w-xl mx-4 bg-background-dark border border-border-color rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden">
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border-color">
          <span className="material-symbols-outlined text-text-muted text-xl">search</span>
          <input
            ref={inputRef}
            className="flex-1 bg-transparent text-text-main text-base font-mono placeholder:text-text-muted/50 focus:outline-none"
            placeholder="搜索文章、Skill、命令、页面..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded border border-border-color bg-surface text-text-muted text-[10px] font-mono">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[50vh] overflow-y-auto">
          {query.trim() && results.length === 0 && (
            <div className="flex flex-col items-center gap-2 py-10 text-center">
              <span className="material-symbols-outlined text-3xl text-text-muted">search_off</span>
              <p className="text-text-muted text-sm font-mono">没有找到 &quot;{query}&quot; 相关结果</p>
            </div>
          )}

          {!query.trim() && (
            <div className="px-5 py-6">
              <p className="text-text-muted text-xs font-mono mb-4">快速导航</p>
              <div className="grid grid-cols-2 gap-2">
                {pages.slice(0, 6).map((page) => (
                  <button
                    key={page.href}
                    onClick={() => handleSelect(page)}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-border-color bg-surface hover:border-primary/50 hover:bg-primary/5 transition-colors text-left"
                  >
                    <span className={`material-symbols-outlined text-lg ${page.color}`}>{page.icon}</span>
                    <span className="text-text-main text-xs font-bold">{page.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {grouped.map((group) => (
            <div key={group.type}>
              <div className="px-5 py-2 bg-surface/50 border-b border-border-color/50">
                <span className="text-text-muted text-[10px] font-mono uppercase tracking-widest">
                  {group.label} ({group.items.length})
                </span>
              </div>
              {group.items.map((item) => {
                const currentIdx = itemCounter++;
                return (
                  <button
                    key={`${item.type}-${item.title}-${item.href}`}
                    onClick={() => handleSelect(item)}
                    className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${
                      currentIdx === selectedIndex
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-surface-hover text-text-main"
                    }`}
                  >
                    <span className={`material-symbols-outlined text-lg ${currentIdx === selectedIndex ? "text-primary" : item.color}`}>
                      {item.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold truncate">{item.title}</div>
                      <div className="text-text-muted text-xs truncate">{item.desc}</div>
                    </div>
                    <span className="material-symbols-outlined text-sm text-text-muted opacity-0 group-hover:opacity-100">
                      arrow_forward
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-2.5 border-t border-border-color bg-surface/50">
          <div className="flex items-center gap-3 text-[10px] font-mono text-text-muted">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border border-border-color bg-surface">↑↓</kbd>
              导航
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border border-border-color bg-surface">↵</kbd>
              打开
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border border-border-color bg-surface">esc</kbd>
              关闭
            </span>
          </div>
          <span className="text-[10px] font-mono text-text-muted">
            {results.length > 0 ? `${results.length} 个结果` : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── 搜索触发按钮（用于 Header） ─── */

export function SearchTrigger() {
  const handleClick = () => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true })
    );
  };

  return (
    <button
      onClick={handleClick}
      className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-color bg-surface hover:border-primary/50 transition-colors text-text-muted text-xs font-mono"
    >
      <span className="material-symbols-outlined text-sm">search</span>
      搜索
      <kbd className="ml-1 px-1.5 py-0.5 rounded border border-border-color bg-background-dark text-[10px]">
        ⌘K
      </kbd>
    </button>
  );
}
