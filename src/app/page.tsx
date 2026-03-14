import Link from "next/link";
import BackToTop from "@/components/BackToTop";

const features = [
  {
    icon: "chat",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/30",
    title: "聊天即操作",
    desc: "通过 WhatsApp、Telegram、Slack 等 20+ 消息平台直接与 Agent 对话，发消息就能执行任务。",
  },
  {
    icon: "psychology",
    color: "text-accent-struct",
    bg: "bg-accent-struct/10 border-accent-struct/30",
    title: "模型无关",
    desc: "支持 Claude、GPT、DeepSeek、通义千问、Kimi、GLM 等国内外大模型，在 openclaw.json 中自由切换。",
  },
  {
    icon: "extension",
    color: "text-accent-geo",
    bg: "bg-accent-geo/10 border-accent-geo/30",
    title: "Skill 生态",
    desc: "ClawHub 社区市场拥有大量能力扩展包。每个 Skill 就是一个 SKILL.md 文件夹，可自建可共享。",
  },
  {
    icon: "schedule",
    color: "text-accent-survey",
    bg: "bg-accent-survey/10 border-accent-survey/30",
    title: "Heartbeat 定时任务",
    desc: "Agent 每 30 分钟自动检查 HEARTBEAT.md 任务清单，无需手动触发即可执行定时工作流。",
  },
  {
    icon: "hard_drive",
    color: "text-accent-const",
    bg: "bg-accent-const/10 border-accent-const/30",
    title: "本地优先",
    desc: "所有数据（Memory、配置、对话记录）以 Markdown/YAML 文件存储在本地，用 Git 即可备份。",
  },
  {
    icon: "shield",
    color: "text-text-main",
    bg: "bg-surface-hover border-border-color",
    title: "MIT 开源",
    desc: "完全开源，GitHub 286K+ Stars。Peter Steinberger 创建，现由开源基金会维护。",
  },
];

const articles = [
  {
    id: "install-guide",
    tag: "部署",
    tagColor: "border-accent-struct text-accent-struct",
    title: "土木人 OpenClaw 完全安装指南——从零到通过 WhatsApp 运行你的第一个 AI Agent",
    date: "2026-03-08",
  },
  {
    id: "auto-review",
    tag: "平台",
    tagColor: "border-accent-survey text-accent-survey",
    title: "用 WhatsApp 远程控制你的 OpenClaw Agent——Telegram/Slack 多平台配对实战",
    date: "2026-03-06",
  },
  {
    id: "pkpm-compare",
    tag: "安全",
    tagColor: "border-accent-const text-accent-const",
    title: "OpenClaw 安全加固指南——从 Sandbox 到 exec_approval 全流程配置",
    date: "2026-03-04",
  },
  {
    id: "geotech-skill",
    tag: "Skill",
    tagColor: "border-accent-geo text-accent-geo",
    title: "从零编写你的第一个 OpenClaw Skill——SKILL.md 结构详解与实战",
    date: "2026-03-02",
  },
];

const stats = [
  { value: "286K+", label: "GitHub Stars", icon: "star" },
  { value: "54K+", label: "Forks", icon: "fork_right" },
  { value: "20+", label: "消息平台", icon: "chat" },
  { value: "MIT", label: "开源协议", icon: "license" },
];

const glossary = [
  ["Gateway", "网关控制面板（核心进程）"],
  ["Skill", "能力扩展包（SKILL.md）"],
  ["ClawHub", "Skill 社区市场"],
  ["Heartbeat", "定时心跳任务"],
  ["Memory", "持久化记忆（Markdown）"],
  ["openclaw.json", "主配置文件"],
  ["Sandbox", "安全沙箱模式"],
  ["onboard", "安装向导命令"],
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ─── Sticky Nav ─── */}
      <nav className="sticky top-0 z-50 w-full border-b border-border-color bg-background-dark/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center text-background-dark">
              <span className="material-symbols-outlined text-lg font-bold">hub</span>
            </div>
            <span className="text-text-main font-bold text-lg tracking-tight uppercase">CivilClaw <span className="text-text-muted font-normal text-sm">土木社区</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/blog" className="text-text-muted hover:text-text-main text-sm font-mono uppercase tracking-widest transition-colors">养虾手册</Link>
            <Link href="/skills" className="text-text-muted hover:text-text-main text-sm font-mono uppercase tracking-widest transition-colors">虾饲料</Link>
            <Link href="/library" className="text-text-muted hover:text-text-main text-sm font-mono uppercase tracking-widest transition-colors">装备库</Link>
            <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-main text-sm font-mono uppercase tracking-widest transition-colors">GitHub</a>
            <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-main text-sm font-mono uppercase tracking-widest transition-colors">Docs</a>
          </div>
          <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-background-dark font-mono font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined text-sm">star</span>
            286K+ Stars
          </a>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden">
        {/* Decorative layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[5%] w-[min(700px,80vw)] h-[min(700px,80vw)] bg-primary/[0.04] rounded-full blur-[160px]" />
          <div className="absolute bottom-[10%] right-[5%] w-[min(500px,60vw)] h-[min(500px,60vw)] bg-accent-struct/[0.04] rounded-full blur-[140px]" />
          <div className="absolute top-[60%] left-[50%] w-[min(400px,50vw)] h-[min(400px,50vw)] bg-accent-geo/[0.03] rounded-full blur-[120px]" />
          {/* Horizontal accent line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-16 py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Text */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-border-color bg-surface/80 backdrop-blur text-xs font-mono text-text-muted w-fit">
                <span className="w-2 h-2 rounded-full bg-accent-geo animate-pulse" />
                Peter Steinberger 创建 · 开源基金会维护 · MIT License
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-tighter leading-[0.95] uppercase">
                <span className="text-text-main">土木人的</span>
                <br />
                <span className="text-primary inline-block mt-1 sm:mt-2">OpenClaw</span>
                <br />
                <span className="text-text-main inline-block mt-1 sm:mt-2">养虾基地</span>
              </h1>

              <p className="max-w-xl text-text-muted text-base sm:text-lg leading-relaxed">
                全网都在“养龙虾”，土木人也不能落下。OpenClaw 是 GitHub 286K+ Stars 的开源 AI Agent，能替你查规范、算量、写日志、追论文。这里有你需要的一切：安装教程、虾饲料推荐、国产模型配置和云端部署指南。
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Link href="/blog/install-guide" className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-primary text-background-dark font-mono font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">rocket_launch</span>
                  开始安装
                </Link>
                <Link href="/blog" className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-border-color text-text-main font-mono font-bold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">article</span>
                  养虾手册
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 mt-4 border-t border-border-color/50">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-center gap-2 sm:gap-3">
                    <span className="material-symbols-outlined text-primary text-base sm:text-lg">{s.icon}</span>
                    <span className="text-text-main font-bold text-base sm:text-lg tracking-tight">{s.value}</span>
                    <span className="text-text-muted font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Terminal */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden border border-border-color bg-surface-darker shadow-2xl shadow-primary/5">
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border-color bg-[#151515]">
                  <div className="w-3 h-3 rounded-full bg-accent-struct/80" />
                  <div className="w-3 h-3 rounded-full bg-primary/80" />
                  <div className="w-3 h-3 rounded-full bg-accent-geo/80" />
                  <span className="ml-4 text-text-muted font-mono text-xs tracking-widest">terminal</span>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 overflow-x-auto max-w-full">
                  <pre className="font-mono text-xs sm:text-sm leading-loose max-w-full">
<span className="text-text-muted"># 一键安装</span>
{"\n"}<span className="text-accent-geo">$</span> <span className="text-text-main">curl -fsSL https://openclaw.ai/install.sh | bash</span>
{"\n"}
{"\n"}<span className="text-text-muted"># 或 npm 安装</span>
{"\n"}<span className="text-accent-geo">$</span> <span className="text-text-main">npm install -g openclaw@latest</span>
{"\n"}
{"\n"}<span className="text-text-muted"># 运行向导</span>
{"\n"}<span className="text-accent-geo">$</span> <span className="text-text-main">openclaw onboard --install-daemon</span>
{"\n"}<span className="text-primary">✓ Gateway 已启动 · ws://127.0.0.1:18789</span>
{"\n"}<span className="text-primary">✓ WhatsApp 已配对 · 给你的 Agent 发消息试试！</span>
                  </pre>
                </div>
              </div>

              {/* Quick links under terminal */}
              <div className="grid grid-cols-3 gap-3">
                <Link href="/skills" className="bg-surface border border-border-color rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/50 transition-colors group">
                  <span className="material-symbols-outlined text-accent-geo text-xl group-hover:text-primary transition-colors">extension</span>
                  <span className="text-text-muted text-[10px] font-mono uppercase tracking-widest group-hover:text-text-main transition-colors">虾饲料</span>
                </Link>
                <Link href="/library" className="bg-surface border border-border-color rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/50 transition-colors group">
                  <span className="material-symbols-outlined text-accent-survey text-xl group-hover:text-primary transition-colors">folder_open</span>
                  <span className="text-text-muted text-[10px] font-mono uppercase tracking-widest group-hover:text-text-main transition-colors">装备库</span>
                </Link>
                <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="bg-surface border border-border-color rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/50 transition-colors group">
                  <span className="material-symbols-outlined text-accent-const text-xl group-hover:text-primary transition-colors">code</span>
                  <span className="text-text-muted text-[10px] font-mono uppercase tracking-widest group-hover:text-text-main transition-colors">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted/40">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="material-symbols-outlined text-sm animate-bounce">expand_more</span>
        </div>
      </section>

      {/* ─── Features Bento Grid ─── */}
      <section className="w-full px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14 gap-3">
            <span className="px-4 py-1.5 rounded-full border border-border-color bg-surface text-text-muted font-mono text-xs uppercase tracking-widest">核心特性</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-main uppercase tracking-tight">为什么选 OpenClaw</h2>
            <p className="text-text-muted max-w-xl text-sm">由 Peter Steinberger 创建的开源个人 AI 助手——不只是聊天机器人，而是一个能替你行动的自主 Agent。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className={`bg-surface rounded-[2rem] border border-border-color bento-card p-8 flex flex-col gap-4`}>
                <div className={`w-12 h-12 rounded-2xl border ${f.bg} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-xl ${f.color}`}>{f.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-text-main">{f.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 虾饲料入口 ─── */}
      <section className="w-full px-6 py-20 bg-surface border-y border-border-color">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <span className="px-4 py-1.5 rounded-full border border-accent-geo/30 bg-accent-geo/5 text-accent-geo font-mono text-xs uppercase tracking-widest">给你的虾加餐</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-main uppercase tracking-tight">虾饲料仓库</h2>
            <p className="text-text-muted max-w-xl text-sm">ClawHub 托管 13,729 个社区 Skill。我们按土木工程场景筛选了最实用的 Skill——规范查询、造价算量、施工日志、团队协作、论文追踪，一行命令即可安装。</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-5xl">
            {[
              { icon: "straighten", label: "规范查询", color: "text-accent-struct", border: "border-accent-struct/30 bg-accent-struct/5" },
              { icon: "table_chart", label: "造价算量", color: "text-accent-survey", border: "border-accent-survey/30 bg-accent-survey/5" },
              { icon: "travel_explore", label: "搜索研究", color: "text-accent-geo", border: "border-accent-geo/30 bg-accent-geo/5" },
              { icon: "forum", label: "团队协作", color: "text-primary", border: "border-primary/30 bg-primary/5" },
              { icon: "auto_mode", label: "自动化", color: "text-accent-const", border: "border-accent-const/30 bg-accent-const/5" },
              { icon: "school", label: "备考管理", color: "text-text-main", border: "border-border-color bg-surface" },
            ].map((c) => (
              <div key={c.label} className={`rounded-2xl border ${c.border} p-5 flex flex-col items-center gap-2`}>
                <span className={`material-symbols-outlined text-2xl ${c.color}`}>{c.icon}</span>
                <span className={`font-mono text-xs font-bold ${c.color} uppercase tracking-wider`}>{c.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="rounded-xl border border-border-color bg-background-dark p-4 font-mono text-sm">
              <span className="text-accent-geo">$</span> <span className="text-text-main">npx clawhub@latest install summarize</span>
            </div>
            <Link href="/skills" className="px-8 py-4 rounded-full bg-primary text-background-dark font-mono font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-2 mt-2">
              <span className="material-symbols-outlined text-lg">extension</span>
              查看全部 Skill 推荐
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Quick Start ─── */}
      <section className="w-full px-6 py-20 bg-surface border-y border-border-color">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary font-mono text-xs uppercase tracking-widest w-fit">三步快速开始</span>
            <h2 className="text-4xl font-bold text-text-main uppercase tracking-tight">10 分钟上手</h2>
            <div className="flex flex-col gap-4">
              {[
                { n: "1", title: "安装 OpenClaw", code: "npm install -g openclaw@latest", note: "需要 Node.js ≥ 22" },
                { n: "2", title: "运行 Onboard 向导", code: "openclaw onboard --install-daemon", note: "配置 API Key + 消息平台配对" },
                { n: "3", title: "发消息给你的 Agent", code: "在 WhatsApp/Telegram 中发消息", note: "Agent 会回复并执行任务" },
              ].map((step) => (
                <div key={step.n} className="flex items-start gap-4 p-5 bg-background-dark rounded-2xl border border-border-color">
                  <div className="w-9 h-9 rounded-full bg-primary text-background-dark flex items-center justify-center font-mono font-bold text-sm shrink-0">{step.n}</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-text-main mb-1">{step.title}</h4>
                    <code className="text-primary font-mono text-xs bg-black px-3 py-1.5 rounded-lg block overflow-x-auto">{step.code}</code>
                    <p className="text-text-muted text-xs mt-2 font-mono">{step.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/blog/install-guide" className="text-primary font-mono text-sm hover:underline flex items-center gap-1 w-fit mt-2">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
              查看完整安装教程（含国产模型配置）
            </Link>
          </div>

          {/* Glossary */}
          <div className="bg-background-dark rounded-[2rem] border border-border-color p-8 flex flex-col gap-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-primary">translate</span>
              <h3 className="font-bold text-text-main uppercase tracking-wider text-sm">OpenClaw 术语速查</h3>
            </div>
            <div className="flex flex-col text-sm font-mono">
              {glossary.map(([term, meaning], i) => (
                <div key={term} className={`flex justify-between py-3 ${i < glossary.length - 1 ? "border-b border-border-color/30" : ""}`}>
                  <span className="text-primary">{term}</span>
                  <span className="text-text-muted text-right">{meaning}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Architecture Diagram ─── */}
      <section className="w-full px-6 py-20">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
          <div className="text-center flex flex-col gap-3">
            <span className="px-4 py-1.5 rounded-full border border-border-color bg-surface text-text-muted font-mono text-xs uppercase tracking-widest mx-auto">架构概览</span>
            <h2 className="text-4xl font-bold text-text-main uppercase tracking-tight">Gateway 驱动一切</h2>
          </div>

          <div className="w-full rounded-[2rem] border border-border-color bg-surface p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Input */}
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">输入层 · 消息平台</span>
                {["WhatsApp", "Telegram", "Slack", "Discord", "iMessage", "Feishu (飞书)"].map((ch) => (
                  <div key={ch} className="flex items-center gap-3 px-4 py-2.5 bg-background-dark rounded-xl border border-border-color">
                    <div className="w-2 h-2 rounded-full bg-accent-geo" />
                    <span className="text-text-main text-sm font-mono">{ch}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 px-4 py-2.5 bg-background-dark rounded-xl border border-border-color/50">
                  <div className="w-2 h-2 rounded-full bg-text-muted" />
                  <span className="text-text-muted text-sm font-mono">+ 14 more channels</span>
                </div>
              </div>

              {/* Center */}
              <div className="flex flex-col gap-4 items-center justify-center">
                <div className="w-full rounded-2xl border-2 border-primary bg-primary/5 p-6 flex flex-col items-center gap-3 text-center">
                  <span className="material-symbols-outlined text-4xl text-primary">hub</span>
                  <h3 className="text-lg font-bold text-primary uppercase tracking-wider">Gateway</h3>
                  <p className="text-text-muted text-xs font-mono">ws://127.0.0.1:18789</p>
                  <p className="text-text-muted text-xs">单进程控制面板<br />会话路由 · 工具管理 · 事件总线</p>
                </div>
                <div className="flex items-center gap-2 text-text-muted">
                  <span className="material-symbols-outlined text-sm">arrow_downward</span>
                  <span className="font-mono text-xs">Agent Runtime</span>
                  <span className="material-symbols-outlined text-sm">arrow_downward</span>
                </div>
                <div className="w-full grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-accent-struct/30 bg-accent-struct/5 p-3 text-center">
                    <span className="text-accent-struct font-mono text-xs font-bold">SKILL</span>
                    <p className="text-text-muted text-[10px] mt-1">能力扩展</p>
                  </div>
                  <div className="rounded-xl border border-accent-survey/30 bg-accent-survey/5 p-3 text-center">
                    <span className="text-accent-survey font-mono text-xs font-bold">MEMORY</span>
                    <p className="text-text-muted text-[10px] mt-1">持久记忆</p>
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">模型层 · LLM Provider</span>
                {[
                  { name: "Anthropic Claude", color: "bg-accent-const" },
                  { name: "DeepSeek-V3", color: "bg-accent-geo" },
                  { name: "通义千问 Qwen", color: "bg-accent-survey" },
                  { name: "OpenAI GPT", color: "bg-text-muted" },
                  { name: "Kimi (Moonshot)", color: "bg-accent-struct" },
                  { name: "GLM-4 (智谱)", color: "bg-primary" },
                ].map((m) => (
                  <div key={m.name} className="flex items-center gap-3 px-4 py-2.5 bg-background-dark rounded-xl border border-border-color">
                    <div className={`w-2 h-2 rounded-full ${m.color}`} />
                    <span className="text-text-main text-sm font-mono">{m.name}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 px-4 py-2.5 bg-background-dark rounded-xl border border-border-color/50">
                  <div className="w-2 h-2 rounded-full bg-text-muted" />
                  <span className="text-text-muted text-sm font-mono">Ollama 本地模型</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Latest Articles ─── */}
      <section className="w-full px-6 py-20 bg-surface border-y border-border-color">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="px-4 py-1.5 rounded-full border border-border-color bg-background-dark text-text-muted font-mono text-xs uppercase tracking-widest">最新内容</span>
              <h2 className="text-4xl font-bold text-text-main uppercase tracking-tight mt-4">养虾手册</h2>
            </div>
            <Link href="/blog" className="text-primary font-mono text-sm uppercase tracking-widest hover:underline flex items-center gap-1">
              查看全部 <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {articles.map((a, i) => (
              <Link key={a.id} href={`/blog/${a.id}`} className="group">
                <article className={`bg-background-dark rounded-[2rem] border overflow-hidden hover:border-primary/50 transition-colors h-full flex flex-col p-7 gap-4 ${i === 0 ? "border-primary/30 md:col-span-2" : "border-border-color"}`}>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full border bg-black text-xs font-bold uppercase tracking-wider ${a.tagColor}`}>{a.tag}</span>
                    <span className="text-text-muted font-mono text-xs">{a.date}</span>
                  </div>
                  <h3 className={`font-bold text-text-main group-hover:text-primary transition-colors leading-tight ${i === 0 ? "text-2xl" : "text-lg"}`}>
                    {a.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="w-full px-6 py-28 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-text-main uppercase tracking-tight leading-tight">
            准备好让 AI<br /><span className="text-primary">帮你干活</span>了吗
          </h2>
          <p className="text-text-muted max-w-lg">
            安装 OpenClaw，配置你的国产大模型，通过微信/Telegram 给 Agent 发第一条消息。10 分钟即可上手。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
            <Link href="/blog/install-guide" className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-primary text-background-dark font-mono font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-lg">terminal</span>
              查看安装教程
            </Link>
            <Link href="/library" className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-border-color text-text-main font-mono font-bold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
              浏览装备库
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 关于我们 ─── */}
      <section className="w-full px-6 py-20 bg-surface border-y border-border-color">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary font-mono text-xs uppercase tracking-widest w-fit">关于我们</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-main uppercase tracking-tight leading-tight">
              让每一个土木人<br />都能乘上 <span className="text-primary">AI 的东风</span>
            </h2>
            <p className="text-text-muted text-sm leading-relaxed max-w-2xl">
              AI Agent 已经能帮你查规范、算工程量、写施工日志、追踪前沿论文——但大多数土木人还不知道怎么开始。CivilClaw 的使命很简单：<strong className="text-text-main">降低门槛，让每一个土木工程师都能用上 AI</strong>。无论你是设计院画图狗、工地搬砖人、还是备考注册岩土的学生党，这里都是你的虾塘。
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 shrink-0">
            <div className="w-40 h-40 rounded-xl overflow-hidden border border-border-color">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/CivilClaw/wechat-qr.jpg" alt="微信二维码" className="w-full h-full object-cover" />
            </div>
            <span className="text-text-muted text-[11px] font-mono">扫码加微信 · 加入养虾群</span>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="w-full border-t border-border-color bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center text-background-dark">
                <span className="material-symbols-outlined text-sm font-bold">hub</span>
              </div>
              <span className="text-text-main font-bold uppercase tracking-tight">CivilClaw</span>
            </div>
            <p className="text-text-muted text-xs font-mono leading-relaxed">
              土木工程师的 AI Agent<br />内容集合站
            </p>
          </div>
          <div>
            <h4 className="text-text-main font-bold text-xs uppercase tracking-widest mb-4">站内导航</h4>
            <div className="flex flex-col gap-2">
              <Link href="/blog" className="text-text-muted text-sm hover:text-primary transition-colors">养虾手册</Link>
              <Link href="/skills" className="text-text-muted text-sm hover:text-primary transition-colors">虾饲料</Link>
              <Link href="/library" className="text-text-muted text-sm hover:text-primary transition-colors">装备库</Link>
              <Link href="/blog/install-guide" className="text-text-muted text-sm hover:text-primary transition-colors">安装教程</Link>
            </div>
          </div>
          <div>
            <h4 className="text-text-main font-bold text-xs uppercase tracking-widest mb-4">OpenClaw 官方</h4>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm hover:text-primary transition-colors">GitHub</a>
              <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm hover:text-primary transition-colors">官方文档</a>
              <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm hover:text-primary transition-colors">openclaw.ai</a>
              <a href="https://clawhub.com" target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm hover:text-primary transition-colors">ClawHub</a>
            </div>
          </div>
          <div>
            <h4 className="text-text-main font-bold text-xs uppercase tracking-widest mb-4">相关项目</h4>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/cloudflare/moltworker" target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm hover:text-primary transition-colors">Cloudflare moltworker</a>
              <a href="https://github.com/grp06/openclaw-studio" target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm hover:text-primary transition-colors">OpenClaw Studio</a>
              <a href="https://github.com/AidanPark/openclaw-android" target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm hover:text-primary transition-colors">openclaw-android</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-6 border-t border-border-color flex flex-wrap items-center justify-between gap-4">
          <p className="text-text-muted font-mono text-xs">
            CivilClaw 土木社区 · 非官方内容集合站 · 数据来源于公开信息
          </p>
          <p className="text-text-muted font-mono text-xs">
            OpenClaw © Peter Steinberger & contributors · MIT License
          </p>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}
