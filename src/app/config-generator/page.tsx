"use client";

import { useState } from "react";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";

/* ─── 数据定义 ─── */

const models = [
  {
    id: "deepseek",
    name: "DeepSeek-V3",
    provider: "deepseek",
    apiBase: "https://api.deepseek.com/v1",
    model: "deepseek-chat",
    color: "text-accent-geo",
    border: "border-accent-geo/30",
    bg: "bg-accent-geo/5",
    desc: "性价比之王，适合日常使用",
    pricing: "¥1/百万 tokens",
  },
  {
    id: "qwen",
    name: "通义千问 Qwen",
    provider: "openai",
    apiBase: "https://dashscope.aliyuncs.com/compatible-mode/v1",
    model: "qwen-plus",
    color: "text-accent-survey",
    border: "border-accent-survey/30",
    bg: "bg-accent-survey/5",
    desc: "阿里云百炼，长文本能力强",
    pricing: "¥0.8/百万 tokens",
  },
  {
    id: "kimi",
    name: "Kimi (Moonshot)",
    provider: "openai",
    apiBase: "https://api.moonshot.cn/v1",
    model: "moonshot-v1-128k",
    color: "text-accent-struct",
    border: "border-accent-struct/30",
    bg: "bg-accent-struct/5",
    desc: "128K 超长上下文，适合读长规范",
    pricing: "¥12/百万 tokens",
  },
  {
    id: "glm",
    name: "GLM-4 (智谱)",
    provider: "openai",
    apiBase: "https://open.bigmodel.cn/api/paas/v4",
    model: "glm-4-plus",
    color: "text-primary",
    border: "border-primary/30",
    bg: "bg-primary/5",
    desc: "清华系模型，工具调用稳定",
    pricing: "¥50/百万 tokens",
  },
  {
    id: "claude",
    name: "Anthropic Claude",
    provider: "anthropic",
    apiBase: "",
    model: "claude-sonnet-4-20250514",
    color: "text-accent-const",
    border: "border-accent-const/30",
    bg: "bg-accent-const/5",
    desc: "最强推理能力，适合复杂分析",
    pricing: "$3/百万 tokens",
  },
  {
    id: "gpt",
    name: "OpenAI GPT-4o",
    provider: "openai",
    apiBase: "https://api.openai.com/v1",
    model: "gpt-4o",
    color: "text-text-main",
    border: "border-border-color",
    bg: "bg-surface",
    desc: "综合能力均衡，生态最完善",
    pricing: "$2.5/百万 tokens",
  },
];

const platforms = [
  { id: "whatsapp", name: "WhatsApp", icon: "chat", color: "text-accent-geo", transport: "whatsapp" },
  { id: "telegram", name: "Telegram", icon: "send", color: "text-accent-survey", transport: "telegram" },
  { id: "feishu", name: "飞书 Feishu", icon: "forum", color: "text-primary", transport: "feishu" },
  { id: "slack", name: "Slack", icon: "tag", color: "text-accent-const", transport: "slack" },
  { id: "discord", name: "Discord", icon: "sports_esports", color: "text-accent-struct", transport: "discord" },
  { id: "dingtalk", name: "钉钉 DingTalk", icon: "work", color: "text-accent-survey", transport: "dingtalk" },
];

const skillPacks = [
  {
    id: "civil-basic",
    name: "土木基础包",
    icon: "straighten",
    color: "text-accent-struct",
    skills: ["summarize", "tavily-search", "weather"],
    desc: "规范总结 + 搜索 + 天气（施工日志必备）",
  },
  {
    id: "civil-data",
    name: "造价算量包",
    icon: "table_chart",
    color: "text-accent-survey",
    skills: ["gog", "excel-formulas", "data-export"],
    desc: "Google Sheets + Excel 公式 + 数据导出",
  },
  {
    id: "civil-research",
    name: "研究追踪包",
    icon: "travel_explore",
    color: "text-accent-geo",
    skills: ["arxiv-watcher", "browser-relay", "google-search"],
    desc: "论文追踪 + 浏览器自动化 + 搜索",
  },
  {
    id: "civil-team",
    name: "团队协作包",
    icon: "group",
    color: "text-primary",
    skills: ["feishu", "notion", "github"],
    desc: "飞书 + Notion + GitHub 集成",
  },
  {
    id: "civil-auto",
    name: "自动化包",
    icon: "auto_mode",
    color: "text-accent-const",
    skills: ["n8n", "proactive-agent", "clawhub"],
    desc: "n8n 工作流 + 主动监控 + Skill 管理",
  },
];

const advancedOptions = [
  { id: "sandbox", label: "启用 Sandbox 安全沙箱", key: "sandbox", default: true, desc: "限制 Agent 文件系统访问范围" },
  { id: "exec_approval", label: "命令执行需审批", key: "exec_approval", default: true, desc: "Agent 执行系统命令前需要你确认" },
  { id: "heartbeat", label: "启用 Heartbeat 定时任务", key: "heartbeat", default: false, desc: "Agent 每 30 分钟自动检查任务清单" },
  { id: "memory", label: "启用持久化 Memory", key: "memory", default: true, desc: "Agent 会记住之前的对话和偏好" },
];

/* ─── 组件 ─── */

export default function ConfigGeneratorPage() {
  const [selectedModel, setSelectedModel] = useState<string>("deepseek");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["whatsapp"]);
  const [selectedSkillPacks, setSelectedSkillPacks] = useState<string[]>(["civil-basic"]);
  const [options, setOptions] = useState<Record<string, boolean>>(() => {
    const defaults: Record<string, boolean> = {};
    advancedOptions.forEach((o) => (defaults[o.id] = o.default));
    return defaults;
  });
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(1);

  const togglePlatform = (id: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const toggleSkillPack = (id: string) => {
    setSelectedSkillPacks((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const toggleOption = (id: string) => {
    setOptions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // 生成配置
  const generateConfig = () => {
    const model = models.find((m) => m.id === selectedModel)!;
    const platfs = platforms.filter((p) => selectedPlatforms.includes(p.id));
    const allSkills = skillPacks
      .filter((sp) => selectedSkillPacks.includes(sp.id))
      .flatMap((sp) => sp.skills);
    const uniqueSkills = [...new Set(allSkills)];

    const config: Record<string, unknown> = {
      $schema: "https://openclaw.ai/schema/openclaw.json",
      name: "civil-agent",
      version: "1.0.0",
      models: {
        default: {
          provider: model.provider,
          model: model.model,
          ...(model.apiBase ? { apiBase: model.apiBase } : {}),
          apiKey: `\${${model.id.toUpperCase()}_API_KEY}`,
        },
      },
      transports: Object.fromEntries(
        platfs.map((p) => [
          p.transport,
          {
            enabled: true,
            token: `\${${p.transport.toUpperCase()}_TOKEN}`,
          },
        ])
      ),
      skills: uniqueSkills,
      security: {
        sandbox: options.sandbox,
        exec_approval: options.exec_approval,
      },
      memory: {
        enabled: options.memory,
        backend: "markdown",
        path: "./memory",
      },
      ...(options.heartbeat
        ? {
            heartbeat: {
              enabled: true,
              interval_minutes: 30,
              tasks_file: "./HEARTBEAT.md",
            },
          }
        : {}),
    };

    return JSON.stringify(config, null, 2);
  };

  const configJson = generateConfig();

  const handleCopy = () => {
    navigator.clipboard.writeText(configJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([configJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "openclaw.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Header />
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-10 py-8 lg:py-12 flex flex-col gap-8">
        {/* Hero */}
        <section className="w-full max-w-5xl mx-auto flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-main uppercase tracking-tight border-l-4 border-primary pl-3 sm:pl-4">
            配置生成器
          </h1>
          <p className="text-text-muted text-sm leading-relaxed max-w-2xl">
            交互式生成 <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">openclaw.json</code> 配置文件。
            选择你的大模型、消息平台和 Skill 组合，一键生成可用配置。
          </p>
        </section>

        {/* Steps indicator */}
        <section className="w-full max-w-5xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-4">
            {[
              { n: 1, label: "选择模型" },
              { n: 2, label: "消息平台" },
              { n: 3, label: "Skill 组合" },
              { n: 4, label: "高级选项" },
            ].map((s, i) => (
              <button
                key={s.n}
                onClick={() => setStep(s.n)}
                className={`flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border text-xs sm:text-sm font-mono transition-all ${
                  step === s.n
                    ? "border-primary bg-primary/20 text-primary font-bold"
                    : step > s.n
                    ? "border-accent-geo/30 bg-accent-geo/5 text-accent-geo"
                    : "border-border-color bg-surface text-text-muted"
                }`}
              >
                <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold ${
                  step === s.n
                    ? "bg-primary text-background-dark"
                    : step > s.n
                    ? "bg-accent-geo/20 text-accent-geo"
                    : "bg-surface-hover text-text-muted"
                }`}>
                  {step > s.n ? "✓" : s.n}
                </span>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            ))}
          </div>
        </section>

        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 lg:gap-8">
          {/* Left: Configuration panel */}
          <div className="flex flex-col gap-6">
            {/* Step 1: Model Selection */}
            {step === 1 && (
              <section className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">psychology</span>
                  <h2 className="text-lg font-bold text-text-main uppercase tracking-tight">选择大模型</h2>
                </div>
                <p className="text-text-muted text-xs font-mono">选择一个作为默认模型，后续可在配置中添加多个</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {models.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedModel(m.id)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        selectedModel === m.id
                          ? `${m.border} ${m.bg} ring-1 ring-current`
                          : "border-border-color bg-surface hover:border-primary/30"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-bold text-sm ${selectedModel === m.id ? m.color : "text-text-main"}`}>
                          {m.name}
                        </span>
                        {selectedModel === m.id && (
                          <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        )}
                      </div>
                      <p className="text-text-muted text-xs mb-2">{m.desc}</p>
                      <span className="text-xs font-mono text-text-muted">{m.pricing}</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="self-end px-6 py-2.5 rounded-full bg-primary text-background-dark font-mono font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-2 mt-2"
                >
                  下一步
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </section>
            )}

            {/* Step 2: Platform Selection */}
            {step === 2 && (
              <section className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent-geo text-xl">chat</span>
                  <h2 className="text-lg font-bold text-text-main uppercase tracking-tight">消息平台</h2>
                </div>
                <p className="text-text-muted text-xs font-mono">选择一个或多个消息平台与 Agent 通讯</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {platforms.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => togglePlatform(p.id)}
                      className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 ${
                        selectedPlatforms.includes(p.id)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border-color bg-surface hover:border-primary/30 text-text-muted"
                      }`}
                    >
                      <span className={`material-symbols-outlined text-2xl ${selectedPlatforms.includes(p.id) ? "text-primary" : p.color}`}>
                        {p.icon}
                      </span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">{p.name}</span>
                      {selectedPlatforms.includes(p.id) && (
                        <span className="material-symbols-outlined text-primary text-sm">check</span>
                      )}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-2.5 rounded-full border border-border-color text-text-muted font-mono font-bold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    上一步
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-6 py-2.5 rounded-full bg-primary text-background-dark font-mono font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-2"
                  >
                    下一步
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </section>
            )}

            {/* Step 3: Skill Packs */}
            {step === 3 && (
              <section className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent-struct text-xl">extension</span>
                  <h2 className="text-lg font-bold text-text-main uppercase tracking-tight">Skill 组合包</h2>
                </div>
                <p className="text-text-muted text-xs font-mono">选择预配置的 Skill 组合，可多选</p>
                <div className="flex flex-col gap-3">
                  {skillPacks.map((sp) => (
                    <button
                      key={sp.id}
                      onClick={() => toggleSkillPack(sp.id)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-4 ${
                        selectedSkillPacks.includes(sp.id)
                          ? "border-primary bg-primary/5"
                          : "border-border-color bg-surface hover:border-primary/30"
                      }`}
                    >
                      <span className={`material-symbols-outlined text-2xl mt-0.5 ${selectedSkillPacks.includes(sp.id) ? "text-primary" : sp.color}`}>
                        {sp.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`font-bold text-sm ${selectedSkillPacks.includes(sp.id) ? "text-primary" : "text-text-main"}`}>
                            {sp.name}
                          </span>
                          {selectedSkillPacks.includes(sp.id) && (
                            <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                          )}
                        </div>
                        <p className="text-text-muted text-xs mt-1">{sp.desc}</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {sp.skills.map((s) => (
                            <span key={s} className="px-2 py-0.5 rounded-full bg-surface-hover border border-border-color text-text-muted text-[10px] font-mono">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-2.5 rounded-full border border-border-color text-text-muted font-mono font-bold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    上一步
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="px-6 py-2.5 rounded-full bg-primary text-background-dark font-mono font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-2"
                  >
                    下一步
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </section>
            )}

            {/* Step 4: Advanced Options */}
            {step === 4 && (
              <section className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent-const text-xl">tune</span>
                  <h2 className="text-lg font-bold text-text-main uppercase tracking-tight">高级选项</h2>
                </div>
                <p className="text-text-muted text-xs font-mono">安全和自动化相关配置</p>
                <div className="flex flex-col gap-3">
                  {advancedOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => toggleOption(opt.id)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-4 ${
                        options[opt.id]
                          ? "border-primary/30 bg-primary/5"
                          : "border-border-color bg-surface"
                      }`}
                    >
                      <div className={`w-10 h-6 rounded-full relative transition-colors ${
                        options[opt.id] ? "bg-primary" : "bg-surface-hover border border-border-color"
                      }`}>
                        <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                          options[opt.id] ? "translate-x-4" : "translate-x-0.5"
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`font-bold text-sm ${options[opt.id] ? "text-primary" : "text-text-main"}`}>
                          {opt.label}
                        </span>
                        <p className="text-text-muted text-xs mt-0.5">{opt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <button
                    onClick={() => setStep(3)}
                    className="px-6 py-2.5 rounded-full border border-border-color text-text-muted font-mono font-bold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    上一步
                  </button>
                </div>
              </section>
            )}
          </div>

          {/* Right: Live Preview */}
          <div className="flex flex-col gap-4">
            <div className="sticky top-20">
              <div className="rounded-2xl border border-border-color bg-surface overflow-hidden">
                {/* Preview header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border-color bg-[#151515]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent-struct/80" />
                    <div className="w-3 h-3 rounded-full bg-accent-survey/80" />
                    <div className="w-3 h-3 rounded-full bg-accent-geo/80" />
                  </div>
                  <span className="text-text-muted font-mono text-xs">openclaw.json</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-hover border border-border-color text-text-muted hover:text-primary hover:border-primary/50 transition-colors text-xs font-mono"
                    >
                      <span className="material-symbols-outlined text-sm">
                        {copied ? "check" : "content_copy"}
                      </span>
                      {copied ? "已复制" : "复制"}
                    </button>
                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors text-xs font-mono"
                    >
                      <span className="material-symbols-outlined text-sm">download</span>
                      下载
                    </button>
                  </div>
                </div>
                {/* Code preview */}
                <div className="p-4 max-h-[60vh] overflow-y-auto overflow-x-auto">
                  <pre className="font-mono text-xs sm:text-sm leading-relaxed text-text-main whitespace-pre">
                    {configJson}
                  </pre>
                </div>
              </div>

              {/* Summary badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 rounded-full border border-accent-geo/30 bg-accent-geo/5 text-accent-geo text-[10px] font-mono font-bold uppercase tracking-wider">
                  {models.find((m) => m.id === selectedModel)?.name}
                </span>
                {selectedPlatforms.map((p) => (
                  <span key={p} className="px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-mono font-bold uppercase tracking-wider">
                    {platforms.find((pl) => pl.id === p)?.name}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-full border border-accent-struct/30 bg-accent-struct/5 text-accent-struct text-[10px] font-mono font-bold uppercase tracking-wider">
                  {skillPacks.filter((sp) => selectedSkillPacks.includes(sp.id)).flatMap((sp) => sp.skills).length} Skills
                </span>
              </div>

              {/* Usage hint */}
              <div className="mt-4 p-4 rounded-xl border border-border-color bg-background-dark">
                <p className="text-text-muted text-xs font-mono mb-2">使用方法：</p>
                <div className="flex flex-col gap-1.5 text-xs font-mono">
                  <span className="text-text-main">1. 下载或复制配置到项目根目录</span>
                  <span className="text-text-main">2. 设置环境变量（API Key 等）</span>
                  <code className="text-primary bg-primary/10 px-2 py-1 rounded mt-1">
                    export {models.find((m) => m.id === selectedModel)?.id.toUpperCase()}_API_KEY=&quot;your-key&quot;
                  </code>
                  <span className="text-text-main mt-1">3. 运行 OpenClaw</span>
                  <code className="text-primary bg-primary/10 px-2 py-1 rounded">
                    openclaw onboard --install-daemon
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BackToTop />
    </>
  );
}
