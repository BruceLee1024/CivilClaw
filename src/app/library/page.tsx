"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";

const categories = [
  { label: "全部资源", color: "text-muted", dotColor: "bg-text-muted", borderClass: "border-border-color" },
  { label: "部署", color: "accent-struct", dotColor: "bg-accent-struct shadow-[0_0_8px_rgba(255,0,122,0.8)]", borderClass: "border-accent-struct/50 bg-accent-struct/10 text-accent-struct hover:border-accent-struct hover:bg-accent-struct/20" },
  { label: "Skill", color: "accent-geo", dotColor: "bg-accent-geo shadow-[0_0_8px_rgba(0,255,157,0.8)]", borderClass: "border-accent-geo/50 bg-accent-geo/10 text-accent-geo hover:border-accent-geo hover:bg-accent-geo/20" },
  { label: "模型", color: "accent-survey", dotColor: "bg-accent-survey shadow-[0_0_8px_rgba(0,229,255,0.8)]", borderClass: "border-accent-survey/50 bg-accent-survey/10 text-accent-survey hover:border-accent-survey hover:bg-accent-survey/20" },
  { label: "安全", color: "accent-const", dotColor: "bg-accent-const shadow-[0_0_8px_rgba(255,94,0,0.8)]", borderClass: "border-accent-const/50 bg-accent-const/10 text-accent-const hover:border-accent-const hover:bg-accent-const/20" },
];

const resources = [
  {
    type: ".JSON",
    typeColor: "border-accent-struct text-accent-struct",
    downloads: "286K+",
    icon: "code",
    iconColor: "text-accent-struct",
    title: "OpenClaw 官方仓库——github.com/openclaw/openclaw",
    subtitle: "TYPESCRIPT | MIT LICENSE",
    featured: true,
  },
  {
    type: ".JSON",
    typeColor: "border-accent-struct text-accent-struct",
    downloads: "13K+",
    icon: "extension",
    iconColor: "text-accent-struct",
    title: "openclaw.json 国产模型配置模板——DeepSeek/Qwen/Kimi/GLM",
    subtitle: "MODELS.PROVIDERS 配置示例",
  },
  {
    type: ".MD",
    typeColor: "border-accent-geo text-accent-geo",
    downloads: "2,361",
    icon: "description",
    iconColor: "text-accent-geo",
    title: "ClawHub Skills 官方归档——github.com/openclaw/skills",
    subtitle: "PYTHON | ALL VERSIONS ARCHIVED",
    featured: true,
  },
  {
    type: ".YAML",
    typeColor: "border-accent-survey text-accent-survey",
    downloads: "508",
    icon: "cloud_upload",
    iconColor: "text-accent-survey",
    title: "Nix 包管理器配置——nix-openclaw",
    subtitle: "NIXOS | DECLARATIVE SETUP",
  },
  {
    type: ".JS",
    typeColor: "border-primary text-primary",
    downloads: "N/A",
    icon: "cloud_queue",
    iconColor: "text-primary",
    title: "Cloudflare moltworker——云端一键部署",
    subtitle: "CLOUDFLARE WORKERS | $5/MO",
  },
  {
    type: ".TS",
    typeColor: "border-accent-struct text-accent-struct",
    downloads: "N/A",
    icon: "dashboard",
    iconColor: "text-accent-struct",
    title: "OpenClaw Studio——Web Dashboard 控制台",
    subtitle: "NEXT.JS | GATEWAY MANAGEMENT",
  },
  {
    type: ".TS",
    typeColor: "border-accent-const text-accent-const",
    downloads: "N/A",
    icon: "monitor_heart",
    iconColor: "text-accent-const",
    title: "TenacitOS Mission Control——实时监控面板",
    subtitle: "NEXT.JS + REACT 19 | COST TRACKING",
  },
  {
    type: ".SH",
    typeColor: "border-accent-survey text-accent-survey",
    downloads: "N/A",
    icon: "phone_android",
    iconColor: "text-accent-survey",
    title: "openclaw-android——在 Android 手机上运行 OpenClaw",
    subtitle: "TERMUX | NO ROOT REQUIRED",
  },
  {
    type: "教程",
    typeColor: "border-accent-survey text-accent-survey",
    downloads: "官方",
    icon: "cloud_done",
    iconColor: "text-accent-survey",
    title: "阿里云轻量应用服务器——一键部署 OpenClaw 并集成钉钉",
    subtitle: "阿里云百炼 | QWEN3.5 / KIMI-K2.5 / GLM-5",
    featured: true,
    url: "https://help.aliyun.com/zh/simple-application-server/use-cases/quickly-deploy-and-use-openclaw",
  },
  {
    type: "教程",
    typeColor: "border-accent-geo text-accent-geo",
    downloads: "精选",
    icon: "school",
    iconColor: "text-accent-geo",
    title: "OpenClaw 从入门到精通指南",
    subtitle: "完整教程 | 从零开始到实战应用",
    featured: true,
    url: "https://my.feishu.cn/docx/P6zsdsgYco6i4XxLeIccvlpvnQe",
  },
];

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((r) => {
    const query = searchQuery.toLowerCase();
    return (
      r.title.toLowerCase().includes(query) ||
      r.subtitle.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <Header />
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-10 py-8 lg:py-12 flex flex-col gap-10">
        {/* Title */}
        <div className="w-full max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-main uppercase tracking-tight border-l-4 border-primary pl-3 sm:pl-4">
            养虾装备库
          </h1>
        </div>

        {/* Search Section */}
        <section className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
          <div className="relative w-full h-14 sm:h-16 md:h-20">
            <div className="absolute inset-y-0 left-0 pl-4 sm:pl-6 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-text-muted text-2xl sm:text-3xl">search</span>
            </div>
            <input
              className="block w-full h-full pl-12 sm:pl-16 pr-6 py-3 sm:py-4 bg-surface border-2 border-border-color rounded-full text-text-main text-lg sm:text-xl md:text-2xl font-bold placeholder:text-border-color focus:ring-0 focus:border-primary focus:outline-none transition-colors shadow-lg"
              placeholder="搜索资源..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <div className="absolute right-4 sm:right-20 top-1/2 -translate-y-1/2">
                <span className="text-text-muted text-xs sm:text-sm font-mono">
                  {filteredResources.length} 个
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.label}
                className={`px-5 py-2 rounded-full border text-sm font-mono transition-colors flex items-center gap-2 ${cat.borderClass}`}
              >
                <span className={`w-2 h-2 rounded-full ${cat.dotColor}`} />
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Resource Grid */}
        <section className="w-full max-w-6xl mx-auto">
          {filteredResources.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <span className="material-symbols-outlined text-6xl text-text-muted/30">search_off</span>
              <p className="text-text-muted text-lg font-mono">
                没有找到匹配 "{searchQuery}" 的资源
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-6 py-2 rounded-full border border-border-color text-text-muted hover:border-primary hover:text-primary transition-colors text-sm font-mono"
              >
                清空搜索
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredResources.map((r, i) => {
            const Wrapper = r.url ? "a" : "div";
            const wrapperProps = r.url ? { href: r.url, target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <Wrapper
                key={i}
                {...wrapperProps}
                data-resource-card
                data-title={r.title}
                data-subtitle={r.subtitle}
                className={`bg-surface border rounded-2xl overflow-hidden group cursor-pointer flex flex-col items-center text-center gap-4 p-6 hover:border-primary/50 transition-all hover:-translate-y-1 ${
                  r.featured ? "border-primary/40" : "border-border-color"
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center bg-background-dark ${r.typeColor}`}>
                  <span className={`material-symbols-outlined text-4xl group-hover:scale-110 transition-transform ${r.iconColor}`}>
                    {r.icon}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 border text-[10px] font-mono font-bold rounded-md ${r.typeColor}`}>
                    {r.type}
                  </span>
                  <span className="text-text-muted text-[10px] font-mono flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[11px]">{r.url ? "open_in_new" : "download"}</span>{r.downloads}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 mt-auto">
                  <h3 className="text-text-main text-xs font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors">{r.title}</h3>
                  <p className="text-text-muted text-[10px] font-mono leading-tight">{r.subtitle}</p>
                </div>
              </Wrapper>
            );
          })}
            </div>
          )}
        </section>

        {/* Load More */}
        <div className="w-full max-w-6xl mx-auto flex justify-center mt-8 pb-12">
          <button className="px-8 py-4 border-2 border-border-color text-text-main font-mono font-bold tracking-widest hover:border-primary hover:text-primary transition-colors bg-background-dark flex items-center gap-2">
            <span className="material-symbols-outlined">sync</span>
            加载更多资源
          </button>
        </div>
      </main>
      <BackToTop />
    </>
  );
}
