"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";

/* ─── FAQ 数据 ─── */

interface FAQItem {
  q: string;
  a: string;
  category: string;
  related?: string;
}

const faqCategories = [
  { id: "install", label: "安装部署", icon: "rocket_launch", color: "text-accent-struct" },
  { id: "model", label: "模型配置", icon: "psychology", color: "text-accent-survey" },
  { id: "skill", label: "Skill 使用", icon: "extension", color: "text-accent-geo" },
  { id: "transport", label: "消息平台", icon: "chat", color: "text-primary" },
  { id: "security", label: "安全相关", icon: "shield", color: "text-accent-const" },
  { id: "other", label: "其他问题", icon: "help", color: "text-text-main" },
];

const faqs: FAQItem[] = [
  // ─── 安装部署 ───
  {
    q: "安装 OpenClaw 需要什么系统要求？",
    a: "需要 Node.js ≥ 22（推荐 LTS 版本）。支持 macOS、Linux 和 Windows (WSL2)。推荐 2GB 以上可用内存。如果在 Android 上运行，需要安装 Termux。",
    category: "install",
    related: "install-guide",
  },
  {
    q: "npm install -g openclaw 报错 EACCES 权限问题怎么办？",
    a: "这是 npm 全局安装的常见权限问题。解决方法：\n\n1. 使用 nvm 管理 Node.js（推荐）\n2. 或者修改 npm 全局目录：mkdir ~/.npm-global && npm config set prefix '~/.npm-global'\n3. 然后将 ~/.npm-global/bin 添加到 PATH",
    category: "install",
  },
  {
    q: "openclaw onboard 卡在 \"Waiting for connection\" 怎么办？",
    a: "这通常是网络问题或端口被占用：\n\n1. 检查 18789 端口是否被占用：lsof -i :18789\n2. 如果被占用，用 --port 参数指定其他端口\n3. 如果是网络问题，检查防火墙设置\n4. 可以运行 openclaw doctor 获取诊断信息",
    category: "install",
  },
  {
    q: "如何在服务器上后台运行 OpenClaw？",
    a: "推荐使用 daemon 模式：\n\nopenlaw daemon start\n\n也可以使用 systemd、pm2 或 screen/tmux。如果使用阿里云轻量服务器，可以参考官方一键部署教程。",
    category: "install",
    related: "install-guide",
  },
  {
    q: "OpenClaw 支持 Docker 部署吗？",
    a: "目前官方没有提供 Docker 镜像，但社区有第三方 Dockerfile。你也可以用 Cloudflare moltworker 一键部署到云端，无需管理服务器。详见装备库中的 moltworker 资源。",
    category: "install",
  },

  // ─── 模型配置 ───
  {
    q: "如何切换到 DeepSeek 模型？",
    a: "在 openclaw.json 中修改 models.default：\n\n{\n  \"models\": {\n    \"default\": {\n      \"provider\": \"deepseek\",\n      \"model\": \"deepseek-chat\",\n      \"apiBase\": \"https://api.deepseek.com/v1\",\n      \"apiKey\": \"${DEEPSEEK_API_KEY}\"\n    }\n  }\n}\n\n然后设置环境变量 DEEPSEEK_API_KEY。也可以使用本站配置生成器一键生成。",
    category: "model",
    related: "install-guide",
  },
  {
    q: "通义千问 Qwen 怎么配置？",
    a: "通义千问使用阿里云百炼 API，兼容 OpenAI 格式：\n\nprovider: \"openai\"\napiBase: \"https://dashscope.aliyuncs.com/compatible-mode/v1\"\nmodel: \"qwen-plus\" (或 qwen-turbo / qwen-max)\n\n需要在阿里云百炼控制台获取 API Key。",
    category: "model",
  },
  {
    q: "可以同时配置多个模型吗？",
    a: "可以。在 openclaw.json 的 models 字段中添加多个配置：\n\n{\n  \"models\": {\n    \"default\": { ... },\n    \"fast\": { \"model\": \"deepseek-chat\" },\n    \"smart\": { \"model\": \"claude-sonnet-4-20250514\" }\n  }\n}\n\nAgent 会根据任务复杂度自动选择合适的模型，你也可以在对话中用 @fast 或 @smart 指定。",
    category: "model",
  },
  {
    q: "Ollama 本地模型怎么配置？",
    a: "安装 Ollama 后，配置如下：\n\nprovider: \"openai\"\napiBase: \"http://localhost:11434/v1\"\nmodel: \"qwen2.5:14b\" (或其他 Ollama 支持的模型)\napiKey: \"ollama\" (任意值即可)\n\n注意本地模型的工具调用能力可能不如云端模型稳定。",
    category: "model",
  },
  {
    q: "模型 API 报错 401 Unauthorized 怎么办？",
    a: "常见原因：\n\n1. API Key 未设置或格式错误\n2. API Key 已过期或余额不足\n3. apiBase 地址不正确\n4. 环境变量名称拼写错误\n\n运行 openclaw env list 检查已设置的变量，确认 Key 和 Base URL 正确。",
    category: "model",
  },

  // ─── Skill 使用 ───
  {
    q: "如何安装第一个 Skill？",
    a: "使用 ClawHub CLI：\n\nnpx clawhub@latest install summarize\n\n安装后 Skill 会出现在项目的 skills/ 目录下。重启 Agent 即可使用。可以在本站虾饲料页面查看推荐的土木工程 Skill。",
    category: "skill",
    related: "skills-complete-guide",
  },
  {
    q: "如何自己编写一个 Skill？",
    a: "Skill 的核心是一个 SKILL.md 文件，定义了 Agent 的能力和行为。基本结构：\n\n1. 创建 skills/my-skill/ 目录\n2. 创建 SKILL.md 描述 Skill 的功能和指令\n3. 创建 skill.json 定义元数据\n4. 可选：添加 tools/ 目录放置自定义工具脚本\n\n详见「从零编写 Skill」教程。",
    category: "skill",
    related: "geotech-skill",
  },
  {
    q: "Skill 安装后不生效怎么办？",
    a: "常见原因：\n\n1. 需要重启 Agent（openclaw daemon restart）\n2. Skill 需要额外的 API Key（如 Tavily Search 需要 TAVILY_API_KEY）\n3. Skill 版本与 OpenClaw 版本不兼容\n4. 检查 skills/ 目录下是否有正确的 SKILL.md 文件",
    category: "skill",
  },
  {
    q: "ClawHub 上有多少 Skill？",
    a: "截至目前，ClawHub 社区共有 13,729 个 Skill。本站精选了约 20 个最适合土木工程师的 Skill，涵盖规范查询、造价算量、搜索研究、团队协作、自动化和知识管理等场景。",
    category: "skill",
  },

  // ─── 消息平台 ───
  {
    q: "WhatsApp 配对后收不到消息怎么办？",
    a: "检查步骤：\n\n1. 确认 Agent 正在运行：openclaw daemon status\n2. 检查 WhatsApp 连接状态：openclaw transport list\n3. 如果显示 disconnected，重新配对：openclaw transport pair whatsapp\n4. 确保手机 WhatsApp 保持在线（不要登出 Web 端）",
    category: "transport",
  },
  {
    q: "如何配对飞书机器人？",
    a: "步骤：\n\n1. 在飞书开放平台创建企业自建应用\n2. 添加机器人能力，获取 App ID 和 App Secret\n3. 配置事件订阅 URL\n4. 运行 openclaw transport pair feishu\n5. 按提示输入凭证信息\n\n详细步骤见安装教程的飞书配置部分。",
    category: "transport",
  },
  {
    q: "可以同时使用多个消息平台吗？",
    a: "可以。OpenClaw 支持同时连接 20+ 个消息平台。在 openclaw.json 的 transports 字段中启用多个平台，每个平台独立配对。Agent 会统一处理来自所有平台的消息。",
    category: "transport",
  },
  {
    q: "钉钉机器人怎么接入？",
    a: "钉钉接入步骤：\n\n1. 在钉钉开放平台创建企业内部应用\n2. 添加机器人能力\n3. 配置消息接收地址\n4. 获取 AppKey 和 AppSecret\n5. 运行 openclaw transport pair dingtalk\n\n如果使用阿里云轻量服务器，可以参考官方一键部署教程，自动集成钉钉。",
    category: "transport",
  },

  // ─── 安全相关 ───
  {
    q: "Sandbox 沙箱模式是什么？",
    a: "Sandbox 限制 Agent 的文件系统访问范围，防止 Agent 读写项目目录外的文件。启用后：\n\n- Agent 只能访问配置的工作目录\n- 无法读取系统敏感文件\n- 文件写入需要确认\n\n在 openclaw.json 中设置 security.sandbox: true 启用。",
    category: "security",
    related: "pkpm-compare",
  },
  {
    q: "exec_approval 命令审批是什么？",
    a: "启用后，Agent 在执行系统命令前会先请求你的批准。例如 Agent 想运行 npm install，你会收到确认消息，同意后才会执行。这防止 Agent 执行危险操作。\n\n强烈建议在生产环境启用此选项。",
    category: "security",
  },
  {
    q: "OpenClaw 的数据存储在哪里？",
    a: "所有数据都存储在本地：\n\n- 配置：openclaw.json（项目根目录）\n- 记忆：./memory/ 目录（Markdown 文件）\n- 对话日志：./logs/ 目录\n- Skill：./skills/ 目录\n- 心跳任务：HEARTBEAT.md\n\n所有文件都是纯文本格式，可以用 Git 版本管理。不会上传到任何云端。",
    category: "security",
  },

  // ─── 其他 ───
  {
    q: "OpenClaw 是谁创建的？",
    a: "OpenClaw 由 Peter Steinberger 创建，现由开源基金会维护。项目采用 MIT 开源协议，在 GitHub 上拥有 286K+ Stars。CivilClaw 是非官方的土木工程内容集合站。",
    category: "other",
  },
  {
    q: "OpenClaw 和 ChatGPT/Claude 有什么区别？",
    a: "关键区别：\n\n1. OpenClaw 是 Agent（能行动），ChatGPT 是 Chatbot（只能聊天）\n2. OpenClaw 本地运行，数据完全自主\n3. OpenClaw 可以通过 Skill 扩展能力\n4. OpenClaw 支持定时任务（Heartbeat）\n5. OpenClaw 可以连接多个消息平台\n6. 你可以选择任何大模型作为「大脑」",
    category: "other",
  },
  {
    q: "CivilClaw 和 OpenClaw 官方是什么关系？",
    a: "CivilClaw 是非官方的土木工程内容集合站，不隶属于 OpenClaw 官方团队。我们专注于为土木工程师提供 OpenClaw 的使用教程、Skill 推荐和最佳实践。内容基于公开信息整理。",
    category: "other",
  },
  {
    q: "如何为 CivilClaw 贡献内容？",
    a: "欢迎投稿！你可以：\n\n1. 在 GitHub 上提交 Pull Request\n2. 通过微信群反馈建议\n3. 分享你的 OpenClaw 使用经验\n\n特别欢迎土木工程场景下的 Skill 开发教程和实战案例。",
    category: "other",
  },
];

/* ─── 折叠组件 ─── */

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`rounded-2xl border transition-colors ${open ? "border-primary/30 bg-primary/5" : "border-border-color bg-surface hover:border-primary/20"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 p-4 sm:p-5 text-left"
      >
        <span className={`material-symbols-outlined text-lg mt-0.5 transition-transform ${open ? "text-primary rotate-180" : "text-text-muted"}`}>
          expand_more
        </span>
        <span className={`font-bold text-sm sm:text-base flex-1 ${open ? "text-primary" : "text-text-main"}`}>
          {item.q}
        </span>
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pl-12 sm:pl-14">
          <div className="text-text-muted text-sm leading-relaxed whitespace-pre-line">
            {item.a}
          </div>
          {item.related && (
            <Link
              href={`/blog/${item.related}`}
              className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-mono hover:bg-primary/20 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">article</span>
              查看相关教程
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── 页面组件 ─── */

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = faqs.filter((f) => {
    const matchesSearch =
      !search ||
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase());
    const matchesCat = !selectedCategory || f.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const grouped = faqCategories
    .map((cat) => ({
      ...cat,
      items: filtered.filter((f) => f.category === cat.id),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <>
      <Header />
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-10 py-8 lg:py-12 flex flex-col gap-8">
        {/* Hero */}
        <section className="w-full max-w-4xl mx-auto flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-main uppercase tracking-tight border-l-4 border-primary pl-3 sm:pl-4">
            常见问题
          </h1>
          <p className="text-text-muted text-sm leading-relaxed max-w-2xl">
            OpenClaw 安装、配置、使用中的常见问题和解决方案。找不到答案？
            <Link href="/" className="text-primary hover:underline ml-1">加微信群</Link> 直接问。
          </p>
        </section>

        {/* Search + Filter */}
        <section className="w-full max-w-4xl mx-auto flex flex-col gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-text-muted text-xl">search</span>
            </div>
            <input
              className="block w-full pl-11 pr-4 py-3 bg-surface border-2 border-border-color rounded-xl text-text-main text-sm placeholder:text-text-muted/50 focus:ring-0 focus:border-primary focus:outline-none transition-colors"
              placeholder="搜索问题..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                selectedCategory === null
                  ? "border-primary bg-primary/20 text-primary"
                  : "border-border-color bg-surface text-text-muted hover:border-primary/50"
              }`}
            >
              全部 ({faqs.length})
            </button>
            {faqCategories.map((cat) => {
              const count = faqs.filter((f) => f.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? "border-primary bg-primary/20 text-primary"
                      : "border-border-color bg-surface text-text-muted hover:border-primary/50"
                  }`}
                >
                  <span className={`material-symbols-outlined text-sm ${selectedCategory === cat.id ? "text-primary" : cat.color}`}>
                    {cat.icon}
                  </span>
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* FAQ List */}
        <section className="w-full max-w-4xl mx-auto flex flex-col gap-8">
          {grouped.map((cat) => (
            <div key={cat.id} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined text-xl ${cat.color}`}>{cat.icon}</span>
                <h2 className="text-lg font-bold text-text-main uppercase tracking-tight">{cat.label}</h2>
                <span className="text-text-muted text-xs font-mono">({cat.items.length})</span>
              </div>
              {cat.items.map((item, i) => (
                <FAQAccordion key={i} item={item} />
              ))}
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <span className="material-symbols-outlined text-4xl text-text-muted">search_off</span>
              <p className="text-text-muted font-mono text-sm">没有找到匹配的问题</p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory(null);
                }}
                className="text-primary font-mono text-xs hover:underline"
              >
                清除筛选
              </button>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="w-full max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border-color bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="font-bold text-text-main text-lg mb-2">没找到你的问题？</h3>
              <p className="text-text-muted text-sm">加入微信群或在 GitHub 上提 Issue，我们会尽快回复。</p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/openclaw/openclaw/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-border-color text-text-main font-mono font-bold text-xs uppercase tracking-wider hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">code</span>
                GitHub Issue
              </a>
            </div>
          </div>
        </section>
      </main>
      <BackToTop />
    </>
  );
}
