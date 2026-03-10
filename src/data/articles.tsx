import type { ReactNode } from "react";

/* ─── Types ─── */
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

/* ─── Shared helpers ─── */
function Code({ children }: { children: string }) {
  return (
    <code className="text-primary bg-black px-1.5 py-0.5 rounded font-mono text-sm">
      {children}
    </code>
  );
}

function Terminal({
  label,
  children,
}: {
  label: string;
  children: string;
}) {
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-border-color bg-surface-darker shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border-color bg-[#151515]">
        <span className="text-text-muted font-mono text-xs tracking-widest">
          {label}
        </span>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed text-[#A9B7C6]">
          {children}
        </pre>
      </div>
    </div>
  );
}

function H({ children }: { children: string }) {
  return (
    <h3 className="text-2xl font-bold uppercase tracking-wide mt-10 mb-4 border-l-4 border-primary pl-4">
      {children}
    </h3>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-text-main/80 text-sm mb-4">{children}</p>;
}

function Warn({ children }: { children: ReactNode }) {
  return (
    <div className="p-4 bg-accent-struct/5 border border-accent-struct/20 rounded-xl">
      <p className="text-sm text-accent-struct font-mono">{children}</p>
    </div>
  );
}

function Tip({ children }: { children: ReactNode }) {
  return (
    <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
      <p className="text-sm text-primary font-mono">{children}</p>
    </div>
  );
}

function Concept({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="p-4 bg-background-dark rounded-xl border border-border-color">
      <h4 className="text-sm font-bold text-primary mb-2">{title}</h4>
      <p className="text-text-muted text-sm font-mono">{children}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Metadata for all 12 articles (listing page uses this)
   ═══════════════════════════════════════════════════════ */
export const articlesMeta: ArticleMeta[] = [
  {
    id: "install-guide",
    tag: "结构",
    tagClass: "border-accent-struct text-accent-struct",
    title:
      "土木人 OpenClaw 完全安装指南——从零到通过 WhatsApp 运行你的第一个 AI Agent",
    excerpt:
      "写给完全没接触过 AI Agent 的土木工程师。从npm install、openclaw onboard 到配置国产模型（DeepSeek/通义千问），手把手带你入门。",
    author: "张工",
    date: "2026-03-08",
    readTime: "15 min",
    featured: true,
    icon: "rocket_launch",
    iconColor: "text-accent-struct",
  },
  {
    id: "auto-review",
    tag: "结构",
    tagClass: "border-accent-struct text-accent-struct",
    title:
      "用 WhatsApp 远程控制你的 OpenClaw Agent——Telegram/Slack 多平台配对实战",
    excerpt:
      "OpenClaw 支持 20+ 消息平台，本文详解 WhatsApp、Telegram、Slack 的配对流程和常见问题，以及如何用 allowFrom 白名单控制访问权限。",
    author: "王工",
    date: "2026-03-06",
    readTime: "12 min",
    featured: false,
    icon: "architecture",
    iconColor: "text-accent-struct",
  },
  {
    id: "pkpm-compare",
    tag: "结构",
    tagClass: "border-accent-struct text-accent-struct",
    title:
      "OpenClaw 安全加固指南——从 Sandbox 到 exec_approval 全流程配置",
    excerpt:
      "CrowdStrike 和 Cisco 均报告了 OpenClaw 安全风险。本文详解如何配置 Sandbox 模式、exec_approval 权限控制、Tailscale 远程访问。",
    author: "李工",
    date: "2026-03-04",
    readTime: "20 min",
    featured: false,
    icon: "calculate",
    iconColor: "text-accent-survey",
  },
  {
    id: "geotech-skill",
    tag: "岩土",
    tagClass: "border-accent-geo text-accent-geo",
    title:
      "从零编写你的第一个 OpenClaw Skill——SKILL.md 结构详解与实战",
    excerpt:
      "Skill 是 OpenClaw 的能力扩展包。本文从 SKILL.md 的结构开始，手把手教你编写一个自定义 Skill 并发布到 ClawHub。",
    author: "陈工",
    date: "2026-03-02",
    readTime: "18 min",
    featured: false,
    icon: "terrain",
    iconColor: "text-accent-geo",
  },
  {
    id: "rebar-optimizer",
    tag: "结构",
    tagClass: "border-accent-struct text-accent-struct",
    title:
      "openclaw.json 配置国产大模型——DeepSeek/通义千问/Kimi/GLM 完整教程",
    excerpt:
      "OpenClaw 是模型无关的。本文详解如何在 models.providers 中配置国产大模型，含完整 JSON 配置示例。",
    author: "赵工",
    date: "2026-02-28",
    readTime: "15 min",
    featured: false,
    icon: "view_in_ar",
    iconColor: "text-accent-struct",
  },
  {
    id: "bom-calc",
    tag: "造价",
    tagClass: "border-accent-const text-accent-const",
    title:
      "OpenClaw Docker/VPS 部署完全指南——DigitalOcean/Cloudflare 实战",
    excerpt:
      "本地运行关机就断。本文详解 Docker 部署、DigitalOcean 1-Click、Cloudflare moltworker 以及 Tailscale 远程访问配置。",
    author: "刘工",
    date: "2026-02-25",
    readTime: "14 min",
    featured: false,
    icon: "request_quote",
    iconColor: "text-accent-const",
  },
  {
    id: "skill-spec-query",
    tag: "结构",
    tagClass: "border-accent-struct text-accent-struct",
    title:
      "用 Summarize + Tavily 打造规范条文 AI 查询助手——再也不用翻 500 页 PDF",
    excerpt:
      "结合 Summarize Skill 解析 PDF 与 Tavily Search 实时检索，让 OpenClaw Agent 在 10 秒内定位规范条文并给出解读。附 SKILL.md 配置示例。",
    author: "张工",
    date: "2026-03-09",
    readTime: "16 min",
    featured: false,
    icon: "straighten",
    iconColor: "text-accent-struct",
  },
  {
    id: "skill-daily-report",
    tag: "施工",
    tagClass: "border-accent-survey text-accent-survey",
    title: "施工日志自动化——n8n + Weather + 飞书 Skill 组合实战",
    excerpt:
      "用 n8n Workflow 定时触发、Weather Skill 自动填写天气、飞书 Skill 推送日报到项目群。一条 Heartbeat 任务替代每天 30 分钟手工填写。",
    author: "陈工",
    date: "2026-03-09",
    readTime: "14 min",
    featured: false,
    icon: "construction",
    iconColor: "text-accent-survey",
  },
  {
    id: "skill-cost-excel",
    tag: "造价",
    tagClass: "border-accent-const text-accent-const",
    title: "造价算量提效——GOG + Excel Formulas Skill 处理工程量清单",
    excerpt:
      "用 GOG Skill 直连 Google Sheets 工程量清单，配合 Excel Formulas 自动生成汇总公式。实测一个 5 层框架结构清单处理时间从 2 天缩至 3 小时。",
    author: "刘工",
    date: "2026-03-10",
    readTime: "12 min",
    featured: false,
    icon: "request_quote",
    iconColor: "text-accent-const",
  },
  {
    id: "skill-paper-track",
    tag: "岩土",
    tagClass: "border-accent-geo text-accent-geo",
    title:
      "用 arXiv Watcher 追踪 AI+岩土工程前沿——Proactive Agent 每周自动推送",
    excerpt:
      "配置 arXiv Watcher 关键词（soil mechanics, foundation, geotechnical AI），搭配 Proactive Agent 每周一自动汇总新论文并推送到飞书群。",
    author: "王工",
    date: "2026-03-10",
    readTime: "10 min",
    featured: false,
    icon: "terrain",
    iconColor: "text-accent-geo",
  },
  {
    id: "skill-notion-exam",
    tag: "岩土",
    tagClass: "border-accent-geo text-accent-geo",
    title:
      "注册岩土工程师备考——用 Obsidian + Notion Skill 构建智能错题本",
    excerpt:
      "Obsidian Skill 管理本地规范笔记 Vault，Notion Skill 同步错题数据库。让 OpenClaw Agent 根据错题自动整理薄弱考点并生成复习计划。",
    author: "赵工",
    date: "2026-03-10",
    readTime: "13 min",
    featured: false,
    icon: "school",
    iconColor: "text-accent-geo",
  },
  {
    id: "skill-browser-bim",
    tag: "结构",
    tagClass: "border-accent-struct text-accent-struct",
    title:
      "Browser Relay + Firecrawl——让 Agent 自动下载 BIM 资料和爬取材料价格",
    excerpt:
      "Browser Relay 实现浏览器自动化（登录、点击、下载），Firecrawl 提取结构化数据。两个 Skill 组合即可自动化政府报审表填写和材料价格监控。",
    author: "李工",
    date: "2026-03-10",
    readTime: "15 min",
    featured: false,
    icon: "web",
    iconColor: "text-accent-struct",
  },
];

/* ═══════════════════════════════════════════════════════
   Full article content (keyed by id)
   ═══════════════════════════════════════════════════════ */
export const articleContent: Record<string, ReactNode> = {
  /* ────────────────── 1. 安装指南 ────────────────── */
  "install-guide": (
    <>
      <P>
        写给完全没接触过 AI Agent 的土木工程师。OpenClaw（原名 Clawdbot /
        Moltbot）是由 Peter Steinberger
        开发的开源个人 AI 助手，GitHub 上已有 286,000+ Stars，是增长最快的开源项目之一。它通过
        WhatsApp、Telegram、Slack 等聊天平台操作，能执行 Shell
        命令、浏览器自动化、文件管理等任务。本文带你从零安装到跑通第一条消息。
      </P>

      <Tip>
        <span className="font-bold">预计耗时：</span>10-30 分钟 &nbsp;|&nbsp;{" "}
        <span className="font-bold">难度：</span>零基础 &nbsp;|&nbsp;{" "}
        <span className="font-bold">参考源：</span>docs.openclaw.ai
      </Tip>

      <H>一、环境准备</H>
      <P>OpenClaw 是 TypeScript 编写的 Node.js 项目，不是 Python。安装前确认：</P>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 font-mono text-sm">
        <li>
          <span className="text-primary">Node.js ≥ 22</span>（官方文档要求）
        </li>
        <li>
          <span className="text-primary">npm</span> 或 pnpm 包管理器
        </li>
        <li>
          <span className="text-primary">操作系统</span>：macOS / Linux /
          Windows（推荐 WSL2）
        </li>
        <li>
          <span className="text-primary">一个 LLM API Key</span>：Anthropic
          Claude（官方推荐）/ DeepSeek / OpenAI
        </li>
        <li>
          <span className="text-primary">一个聊天平台</span>：WhatsApp、Telegram
          或 Discord 任选
        </li>
      </ul>
      <Terminal label="terminal">{`# 检查 Node.js 版本
$ node --version
v22.x.x   # 需要 ≥ 22

# macOS 安装 Node.js:
$ brew install node@22

# Linux (Ubuntu/Debian):
$ curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
$ sudo apt install -y nodejs`}</Terminal>

      <H>二、安装 OpenClaw</H>
      <P>官方提供两种安装方式。推荐使用一键安装脚本：</P>
      <Terminal label="terminal - 方式一：一键安装（推荐）">{`$ curl -fsSL https://openclaw.ai/install.sh | bash`}</Terminal>
      <Terminal label="terminal - 方式二：npm 手动安装">{`# 全局安装
$ npm install -g openclaw@latest
# 或用 pnpm:
$ pnpm add -g openclaw@latest`}</Terminal>
      <P>也支持 Docker 部署：</P>
      <Terminal label="terminal - Docker">{`$ docker pull openclaw/openclaw:latest
$ docker run -d --name openclaw \\
  -v ~/.openclaw:/root/.openclaw \\
  openclaw/openclaw:latest`}</Terminal>

      <H>三、运行 Onboard 向导</H>
      <P>
        安装后运行 onboard
        向导，它会引导你完成 Gateway 配置、API Key 设置和消息平台对接：
      </P>
      <Terminal label="terminal">{`$ openclaw onboard --install-daemon

# 向导会引导你完成:
# 1. 确认安全风险 → 选择 "Yes"
# 2. 安装模式 → 选择 "QuickStart"（新手推荐）
# 3. 选择 AI 模型提供商 → Anthropic / OpenAI / DeepSeek / 本地 Ollama
# 4. 输入 API Key
# 5. 选择消息平台 → WhatsApp / Telegram / Discord 等
# 6. 平台配对（扫码或输入 Bot Token）
# 7. 安装 Gateway 守护进程（launchd/systemd）

# --install-daemon 会自动安装后台服务，开机自启`}</Terminal>
      <Warn>
        <span className="font-bold">⚠️ 安全提醒：</span>OpenClaw 能执行 Shell
        命令和访问文件。官方和 CrowdStrike
        均建议在独立服务器或 Docker 中运行，不要在包含敏感数据的个人电脑上部署。
      </Warn>

      <H>四、配置模型（国产大模型）</H>
      <P>
        OpenClaw 是模型无关的（model-agnostic）。配置文件在{" "}
        <Code>~/.openclaw/openclaw.json</Code>。 国内用户可在{" "}
        <Code>models.providers</Code>{" "}
        中添加 DeepSeek、通义千问等兼容 OpenAI API 的国产模型：
      </P>
      <Terminal label="~/.openclaw/openclaw.json（模型配置部分）">{`{
  "models": {
    "providers": {
      "deepseek": {
        "baseUrl": "https://api.deepseek.com/v1",
        "apiKey": "sk-你的DeepSeek密钥",
        "api": "openai-completions",
        "models": [{
          "id": "deepseek-chat",
          "name": "DeepSeek-V3",
          "reasoning": true,
          "input": ["text"],
          "contextWindow": 131072,
          "maxTokens": 8192
        }]
      },
      "qwen": {
        "baseUrl": "https://dashscope.aliyuncs.com/compatible-mode/v1",
        "apiKey": "sk-你的通义千问密钥",
        "api": "openai-completions",
        "models": [{
          "id": "qwen-max",
          "name": "Qwen-Max",
          "reasoning": true,
          "input": ["text"],
          "contextWindow": 131072,
          "maxTokens": 8192
        }]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "deepseek/deepseek-chat"
      }
    }
  }
}`}</Terminal>
      <P>
        修改 <Code>agents.defaults.model.primary</Code> 切换默认模型。格式为{" "}
        <Code>provider/model-id</Code>，如 <Code>qwen/qwen-max</Code>。
      </P>

      <H>五、启动 Gateway 并发送第一条消息</H>
      <P>
        OpenClaw 的核心是一个 Gateway 进程——它是所有会话、路由和消息平台连接的控制面板，默认监听{" "}
        <Code>ws://127.0.0.1:18789</Code>。
      </P>
      <Terminal label="terminal">{`# 启动 Gateway（如果 onboard 时已安装 daemon 则自动运行）
$ openclaw gateway --port 18789 --verbose

# 检查状态
$ openclaw status

# 通过 CLI 直接发消息测试
$ openclaw agent --message "你好，请简单介绍一下你自己"

# 或向指定联系人发送
$ openclaw message send --to +8613800138000 --message "Hello from OpenClaw"`}</Terminal>
      <P>
        如果你在 onboard 时配对了 WhatsApp 或 Telegram，现在直接打开聊天 App
        给你的 Agent 发消息即可。
      </P>
      <Terminal label="WhatsApp / Telegram 消息示例">{`你: 帮我查一下今天的天气
Agent: 正在查询...（调用浏览器工具获取天气信息）

你: 帮我创建一个文件 report.md，内容是今天的工作总结模板
Agent: ✅ 已创建 report.md

你: /status
Agent: 📊 Model: deepseek-chat | Tokens: 1,204 | Session: active`}</Terminal>

      <H>六、安装 Skill（技能扩展）</H>
      <P>
        Skill 是 OpenClaw 的能力扩展包。社区技能市场 ClawHub（clawhub.ai）上有大量社区贡献的 Skill。每个 Skill
        本质上是一个包含 SKILL.md 的文件夹。
      </P>
      <Terminal label="terminal">{`# 搜索 Skill
$ npx clawhub@latest search email

# 安装 Skill
$ npx clawhub@latest install summarize

# 查看已安装 Skill
$ ls ~/.openclaw/skills/`}</Terminal>
      <P>
        也可以直接在聊天中告诉 Agent 你需要某个功能，如果 ClawHub
        已启用，Agent 会自动搜索并安装合适的 Skill。
      </P>
      <Warn>
        <span className="font-bold">⚠️ Skill 安全：</span>Cisco
        安全团队曾发现恶意 Skill 进行数据窃取和 prompt
        injection。安装前务必审查 Skill 代码，可使用 Cisco Skill Scanner 扫描。
      </Warn>

      <H>七、核心概念速查</H>
      <div className="flex flex-col gap-3">
        <Concept title="Gateway（网关）">
          OpenClaw 的核心控制面板。单进程管理所有会话、路由和消息平台连接。macOS
          用 launchd，Linux 用 systemd 运行守护进程。
        </Concept>
        <Concept title="Skill（技能）">
          Agent 的能力扩展。每个 Skill 是一个文件夹（含 SKILL.md），可从 ClawHub
          安装或自己编写。类似手机 App 的概念。
        </Concept>
        <Concept title="Memory（记忆）">
          存储在 ~/.openclaw/ 的 Markdown 文件（MEMORY.md、SOUL.md 等）。Agent
          跨会话记住你的信息——姓名、偏好、工作习惯等。用 Git 即可备份。
        </Concept>
        <Concept title="Heartbeat（心跳）">
          定时调度机制（默认 30 分钟），Agent 自动检查 HEARTBEAT.md
          中的任务清单，无需你主动触发即可执行定时任务。
        </Concept>
      </div>

      <H>参考链接</H>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 font-mono text-sm">
        <li>
          GitHub 仓库：
          <span className="text-primary">
            github.com/openclaw/openclaw
          </span>
          （286K+ Stars）
        </li>
        <li>
          官方文档：<span className="text-primary">docs.openclaw.ai</span>
        </li>
        <li>
          Skill 市场：<span className="text-primary">clawhub.ai</span>
        </li>
      </ul>
    </>
  ),

  /* ────────────────── 2. WhatsApp 多平台配对 ────────────────── */
  "auto-review": (
    <>
      <P>
        OpenClaw 的核心交互方式不是网页 UI，而是你每天都在用的聊天 App。它支持 20+ 消息平台，包括 WhatsApp、Telegram、Slack、Discord、iMessage、飞书等。本文详解三大主流平台的配对流程和常见问题。
      </P>

      <H>一、WhatsApp 配对</H>
      <P>WhatsApp 是 OpenClaw 最常用的消息平台。配对方式类似 WhatsApp Web——扫描二维码即可。</P>
      <Terminal label="terminal">{`# 方式一：onboard 时自动配对
$ openclaw onboard
# 选择 WhatsApp → 扫描终端中的二维码

# 方式二：手动配对
$ openclaw platform pair whatsapp
# 终端会显示 QR Code，用手机 WhatsApp 扫描

# 检查连接状态
$ openclaw platform status`}</Terminal>
      <Warn>
        <span className="font-bold">⚠️ 已知问题：</span>WhatsApp 连接每隔几天可能断开。运行 <Code>openclaw doctor</Code> 诊断，或 <Code>openclaw platform pair whatsapp</Code> 重新配对。
      </Warn>

      <H>二、Telegram Bot 配对</H>
      <P>Telegram 使用 Bot Token 方式连接，比 WhatsApp 更稳定。</P>
      <Terminal label="terminal">{`# 1. 在 Telegram 中找到 @BotFather，创建新 Bot
# 2. 获取 Bot Token
# 3. 配对
$ openclaw platform pair telegram --token "你的Bot-Token"

# 或在 openclaw.json 中配置：
{
  "platforms": {
    "telegram": {
      "token": "你的Bot-Token",
      "allowFrom": ["+8613800138000"]
    }
  }
}`}</Terminal>

      <H>三、Slack 配对</H>
      <P>Slack 适合团队使用。需要先创建 Slack App，获取 OAuth Token。</P>
      <Terminal label="terminal">{`# 1. 在 api.slack.com 创建 Slack App
# 2. 获取 Bot User OAuth Token (xoxb-...)
# 3. 配对
$ openclaw platform pair slack --token "xoxb-你的Token"

# 测试：在 Slack 中 @你的Bot 发送消息`}</Terminal>

      <H>四、allowFrom 白名单</H>
      <P>安全起见，建议配置 <Code>allowFrom</Code> 白名单，限制只有你的号码才能与 Agent 交互：</P>
      <Terminal label="~/.openclaw/openclaw.json">{`{
  "platforms": {
    "whatsapp": {
      "allowFrom": ["+8613800138000", "+8613900139000"]
    },
    "telegram": {
      "token": "...",
      "allowFrom": ["你的Telegram用户名"]
    }
  }
}`}</Terminal>
      <P>
        没有设置 allowFrom 时，任何人给你的 Agent 发消息它都会回复——这在安全上是不可接受的。务必配置。
      </P>

      <H>五、多平台同时使用</H>
      <P>
        OpenClaw 支持同时连接多个平台。Gateway 会根据消息来源自动路由到对应的平台处理器。你可以在手机上用 WhatsApp、电脑上用 Slack，同一个 Agent 实例响应所有平台。
      </P>
      <Terminal label="terminal">{`# 查看所有已配对平台
$ openclaw platform list

# 输出示例：
# ✅ whatsapp  - connected (last ping: 2s ago)
# ✅ telegram  - connected (last ping: 1s ago)
# ❌ slack     - disconnected`}</Terminal>
    </>
  ),

  /* ────────────────── 3. 安全加固 ────────────────── */
  "pkpm-compare": (
    <>
      <P>
        OpenClaw 能执行 Shell 命令、读写文件、操控浏览器——功能强大的同时也意味着安全风险。CrowdStrike 和 Cisco 均发布过安全报告，指出了 prompt injection、恶意 Skill、命令注入等风险。本文详解如何加固你的 OpenClaw 实例。
      </P>

      <H>一、Sandbox 沙箱模式</H>
      <P>Sandbox 模式会限制 Agent 可执行的操作范围。强烈建议开启。</P>
      <Terminal label="~/.openclaw/openclaw.json">{`{
  "security": {
    "sandbox": {
      "enabled": true,
      "allowedDirectories": [
        "/home/user/projects",
        "/tmp/openclaw-workspace"
      ],
      "blockedCommands": [
        "rm -rf",
        "sudo",
        "chmod 777",
        "curl | bash"
      ]
    }
  }
}`}</Terminal>
      <P>
        开启 Sandbox 后，Agent 只能在 <Code>allowedDirectories</Code> 中操作文件，且 <Code>blockedCommands</Code> 中的命令会被拒绝执行。
      </P>

      <H>二、exec_approval 执行审批</H>
      <P>exec_approval 要求 Agent 在执行任何 Shell 命令前必须获得你的批准。这是最严格的安全措施。</P>
      <Terminal label="~/.openclaw/openclaw.json">{`{
  "security": {
    "exec_approval": {
      "enabled": true,
      "mode": "always",     // always | risky | never
      "timeout": 300,       // 超时秒数，超时则拒绝
      "notifyPlatform": "whatsapp"  // 审批通知发送到哪个平台
    }
  }
}`}</Terminal>
      <P>
        设为 <Code>always</Code> 时，每条 Shell 命令都需要审批。设为 <Code>risky</Code> 时，只有 Agent 判断为"高风险"的命令才需审批（如 rm、sudo、网络请求等）。
      </P>

      <H>三、Skill 安全审查</H>
      <P>Cisco 安全团队发现部分 ClawHub Skill 存在恶意代码。安装前务必审查：</P>
      <Terminal label="terminal">{`# 查看 Skill 源码
$ cat ~/.openclaw/skills/some-skill/SKILL.md

# 使用 Cisco Skill Scanner（如有）
$ openclaw skills scan some-skill

# 只安装可信来源的 Skill
$ npx clawhub@latest install summarize  # 官方认证 Skill`}</Terminal>
      <Warn>
        <span className="font-bold">⚠️ 安全原则：</span>
        ①不要在包含敏感数据的机器上运行 OpenClaw；
        ②始终开启 Sandbox；
        ③审查所有第三方 Skill；
        ④配置 allowFrom 白名单；
        ⑤使用 Docker 隔离运行。
      </Warn>

      <H>四、Tailscale 远程安全访问</H>
      <P>如果你在云服务器上部署了 OpenClaw，用 Tailscale 可以安全地远程访问 Gateway Dashboard：</P>
      <Terminal label="terminal">{`# 安装 Tailscale
$ curl -fsSL https://tailscale.com/install.sh | sh
$ sudo tailscale up

# 用 Tailscale Serve 暴露 Gateway Dashboard
$ tailscale serve https+insecure://127.0.0.1:18789

# 现在可以通过 Tailscale 网络安全访问 Dashboard
# 无需暴露公网端口`}</Terminal>
    </>
  ),

  /* ────────────────── 4. 编写第一个 Skill ────────────────── */
  "geotech-skill": (
    <>
      <P>
        Skill 是 OpenClaw 的能力扩展机制——每个 Skill 本质上是一个文件夹，核心是一个 <Code>SKILL.md</Code> 文件。本文从 SKILL.md 的结构开始，手把手教你编写一个「土层参数查询」Skill，并发布到 ClawHub。
      </P>

      <H>一、SKILL.md 结构</H>
      <P>每个 Skill 至少包含一个 SKILL.md 文件，它定义了 Skill 的名称、描述、输入输出和行为指令：</P>
      <Terminal label="~/.openclaw/skills/soil-params/SKILL.md">{`---
name: soil-params
description: 根据地质勘察报告查询土层物理力学参数
version: 1.0.0
author: 陈工
tags: [geotechnical, soil, parameters]
---

# Soil Parameters Query

## 描述
你是一个岩土工程参数查询助手。根据用户提供的地质勘察报告或土层描述，
查询并返回相应的物理力学参数。

## 能力
- 识别土层类型（粉质黏土、砂土、卵石层等）
- 返回常用参数：承载力特征值 fak、压缩模量 Es、内摩擦角 φ、黏聚力 c
- 参考规范：GB 50007-2011《建筑地基基础设计规范》

## 输入示例
"帮我查一下中密粉砂的承载力特征值和压缩模量"

## 输出格式
| 参数 | 符号 | 范围 | 单位 |
| 承载力特征值 | fak | 100-150 | kPa |
| 压缩模量 | Es | 8-15 | MPa |`}</Terminal>

      <H>二、安装和测试</H>
      <P>编写完 SKILL.md 后，OpenClaw 会自动加载本地 Skill（热重载，无需重启 Gateway）：</P>
      <Terminal label="terminal">{`# Skill 放在这个目录即可
$ ls ~/.openclaw/skills/soil-params/
SKILL.md

# 检查是否已加载
$ openclaw skills list
# soil-params  v1.0.0  ✅ loaded

# 测试
$ openclaw agent --message "帮我查一下中密粉砂的承载力"
# Agent 会自动调用 soil-params Skill 回答`}</Terminal>

      <H>三、添加工具（可选）</H>
      <P>如果你的 Skill 需要调用外部 API 或执行代码，可以添加 MCP 工具：</P>
      <Terminal label="~/.openclaw/skills/soil-params/SKILL.md（添加工具部分）">{`## Tools

### query_standard
查询规范数据库中的土层参数

#### Parameters
- soil_type (string): 土层类型，如 "粉质黏土"、"中密砂"
- parameter (string): 要查询的参数，如 "fak"、"Es"、"phi"

#### Implementation
Uses MCP server at localhost:3001 to query the local SQLite database
of GB 50007-2011 soil parameters.`}</Terminal>

      <H>四、发布到 ClawHub</H>
      <P>测试通过后，你可以将 Skill 发布到 ClawHub 供其他用户使用：</P>
      <Terminal label="terminal">{`# 登录 ClawHub
$ npx clawhub@latest login

# 发布
$ npx clawhub@latest publish ~/.openclaw/skills/soil-params

# 发布成功后，其他用户可以安装：
$ npx clawhub@latest install soil-params`}</Terminal>
      <Tip>
        <span className="font-bold">💡 建议：</span>发布前在 SKILL.md 中添加详细的中文描述和使用示例，方便国内土木工程师搜索和使用。
      </Tip>
    </>
  ),

  /* ────────────────── 5. 国产大模型配置 ────────────────── */
  "rebar-optimizer": (
    <>
      <P>
        OpenClaw 是模型无关（model-agnostic）的 AI Agent 框架。它不绑定任何特定模型，只要兼容 OpenAI API 格式的大模型都能接入。本文详解 DeepSeek、通义千问、Kimi（Moonshot）、GLM-4（智谱清言）四款国产大模型的完整配置方法。
      </P>

      <H>一、配置文件位置</H>
      <P>
        所有模型配置都在 <Code>~/.openclaw/openclaw.json</Code> 的 <Code>models.providers</Code> 字段中。每个 provider 需要 baseUrl、apiKey 和 models 数组。
      </P>

      <H>二、DeepSeek 配置</H>
      <P>DeepSeek-V3 是目前性价比最高的国产模型之一，支持 128K 上下文，推理能力强。</P>
      <Terminal label="openclaw.json - DeepSeek">{`{
  "models": {
    "providers": {
      "deepseek": {
        "baseUrl": "https://api.deepseek.com/v1",
        "apiKey": "sk-你的密钥",
        "api": "openai-completions",
        "models": [{
          "id": "deepseek-chat",
          "name": "DeepSeek-V3",
          "reasoning": true,
          "input": ["text"],
          "contextWindow": 131072,
          "maxTokens": 8192
        }]
      }
    }
  }
}`}</Terminal>
      <P>
        获取 API Key：访问 <Code>platform.deepseek.com</Code> 注册并创建 API Key。价格约 ¥1/百万 token，非常便宜。
      </P>

      <H>三、通义千问 Qwen 配置</H>
      <P>阿里云通义千问通过 DashScope API 提供服务。</P>
      <Terminal label="openclaw.json - 通义千问">{`"qwen": {
  "baseUrl": "https://dashscope.aliyuncs.com/compatible-mode/v1",
  "apiKey": "sk-你的密钥",
  "api": "openai-completions",
  "models": [{
    "id": "qwen-max",
    "name": "Qwen-Max",
    "reasoning": true,
    "input": ["text"],
    "contextWindow": 131072,
    "maxTokens": 8192
  }, {
    "id": "qwen-turbo",
    "name": "Qwen-Turbo（更快更便宜）",
    "input": ["text"],
    "contextWindow": 131072,
    "maxTokens": 8192
  }]
}`}</Terminal>

      <H>四、Kimi（Moonshot）配置</H>
      <Terminal label="openclaw.json - Kimi">{`"kimi": {
  "baseUrl": "https://api.moonshot.cn/v1",
  "apiKey": "sk-你的密钥",
  "api": "openai-completions",
  "models": [{
    "id": "moonshot-v1-128k",
    "name": "Kimi 128K",
    "input": ["text"],
    "contextWindow": 131072,
    "maxTokens": 8192
  }]
}`}</Terminal>

      <H>五、GLM-4（智谱清言）配置</H>
      <Terminal label="openclaw.json - GLM-4">{`"glm": {
  "baseUrl": "https://open.bigmodel.cn/api/paas/v4",
  "apiKey": "你的密钥",
  "api": "openai-completions",
  "models": [{
    "id": "glm-4",
    "name": "GLM-4 (智谱清言)",
    "input": ["text"],
    "contextWindow": 131072,
    "maxTokens": 8192
  }]
}`}</Terminal>

      <H>六、切换默认模型</H>
      <P>
        配置好 providers 后，修改 <Code>agents.defaults.model.primary</Code> 即可切换默认模型：
      </P>
      <Terminal label="openclaw.json - 切换模型">{`{
  "agents": {
    "defaults": {
      "model": {
        "primary": "deepseek/deepseek-chat"
      }
    }
  }
}

// 可选值示例：
// "deepseek/deepseek-chat"
// "qwen/qwen-max"
// "kimi/moonshot-v1-128k"
// "glm/glm-4"
// "anthropic/claude-sonnet-4-20250514"`}</Terminal>
      <Tip>
        <span className="font-bold">💡 建议：</span>土木工程场景推荐 DeepSeek-V3 作为默认模型——推理能力强、价格便宜、无需代理直连。处理简单任务时可切换 qwen-turbo 节省成本。
      </Tip>
    </>
  ),

  /* ────────────────── 6. Docker/VPS 部署 ────────────────── */
  "bom-calc": (
    <>
      <P>
        本地运行 OpenClaw，关机或断网 Agent 就下线了。如果你需要 Agent 24 小时在线（比如工地施工日志自动化），就需要部署到云服务器。本文详解 Docker、DigitalOcean、Cloudflare Workers 三种部署方案。
      </P>

      <H>一、Docker 部署（推荐）</H>
      <Terminal label="terminal">{`# 拉取镜像
$ docker pull openclaw/openclaw:latest

# 运行容器
$ docker run -d \\
  --name openclaw \\
  --restart=always \\
  -v ~/.openclaw:/root/.openclaw \\
  openclaw/openclaw:latest

# 运行 onboard 向导（首次）
$ docker exec -it openclaw openclaw onboard

# 查看日志
$ docker logs -f openclaw

# 更新版本
$ docker pull openclaw/openclaw:latest
$ docker stop openclaw && docker rm openclaw
$ docker run -d --name openclaw --restart=always \\
  -v ~/.openclaw:/root/.openclaw \\
  openclaw/openclaw:latest`}</Terminal>
      <P>
        关键点：<Code>-v ~/.openclaw:/root/.openclaw</Code> 挂载配置目录，确保容器重启后数据不丢失。<Code>--restart=always</Code> 确保服务器重启后自动启动。
      </P>

      <H>二、DigitalOcean 1-Click 部署</H>
      <P>DigitalOcean 提供官方 1-Click 部署镜像，最简单的云端方案：</P>
      <Terminal label="terminal">{`# 1. 访问 marketplace.digitalocean.com 搜索 "OpenClaw"
# 2. 选择 $6/月 Droplet（1GB RAM 足够）
# 3. 创建后 SSH 登录
$ ssh root@你的服务器IP

# 4. 运行 onboard
$ openclaw onboard --install-daemon

# 镜像已预装 Node.js 22、OpenClaw、防火墙、Tailscale`}</Terminal>

      <H>三、Cloudflare Workers 部署</H>
      <P>Cloudflare 官方项目 moltworker 可将 OpenClaw 部署到 Workers 上（Workers Paid 计划 $5/月）：</P>
      <Terminal label="terminal">{`# 克隆 moltworker 项目
$ git clone https://github.com/cloudflare/moltworker.git
$ cd moltworker

# 配置
$ cp wrangler.toml.example wrangler.toml
# 编辑 wrangler.toml 填入你的 Cloudflare 账号和配置

# 部署
$ npx wrangler deploy`}</Terminal>

      <H>四、国内云（阿里云/腾讯云）</H>
      <P>国内云推荐用 Docker 方案。以腾讯云轻量应用服务器为例：</P>
      <Terminal label="terminal">{`# SSH 登录
$ ssh ubuntu@你的服务器IP

# 安装 Docker
$ curl -fsSL https://get.docker.com | sh

# 部署 OpenClaw（同上 Docker 流程）
$ docker pull openclaw/openclaw:latest
$ docker run -d --name openclaw --restart=always \\
  -v ~/.openclaw:/root/.openclaw \\
  openclaw/openclaw:latest

# 配置国产模型（DeepSeek 无需代理）
$ docker exec -it openclaw openclaw onboard`}</Terminal>
      <Tip>
        <span className="font-bold">💡 成本参考：</span>腾讯云轻量 2C2G 约 ¥40/月，DeepSeek API 约 ¥1/百万 token。一个 24 小时在线的 AI Agent 月成本不到 ¥50。
      </Tip>
    </>
  ),

  /* ────────────────── 7. Summarize + Tavily 规范查询 ────────────────── */
  "skill-spec-query": (
    <>
      <P>
        翻规范是土木工程师的日常——但在 500 页的 GB 50011-2010 中精确定位某个条文，常常要花 10-20 分钟。用 OpenClaw 的 Summarize Skill + Tavily Search Skill，10 秒内即可定位条文并给出解读。
      </P>

      <H>一、安装 Skill</H>
      <Terminal label="terminal">{`# 安装 Summarize（PDF/网页内容总结）
$ npx clawhub@latest install summarize

# 安装 Tavily Search（AI 优化搜索）
$ npx clawhub@latest install tavily-search

# 验证安装
$ ls ~/.openclaw/skills/
summarize/  tavily-search/`}</Terminal>
      <P>
        Tavily Search 需要 API Key。访问 <Code>tavily.com</Code> 注册免费账户（每月 1000 次搜索）。将 Key 配置到 <Code>openclaw.json</Code> 中。
      </P>

      <H>二、使用场景</H>
      <P>安装后，直接在 WhatsApp/Telegram 中用自然语言提问：</P>
      <Terminal label="WhatsApp 对话示例">{`你: GB 50011-2010 中关于框架结构抗震等级的规定是什么？

Agent: [调用 tavily-search 搜索规范条文]
[调用 summarize 解析搜索结果]

📋 根据 GB 50011-2010《建筑抗震设计规范》第 6.1.2 条：

框架结构抗震等级：
- 6 度区：四级
- 7 度区（0.10g）：三级
- 7 度区（0.15g）：二级
- 8 度区（0.20g）：二级
- 8 度区（0.30g）：一级
- 9 度区：一级

高度超过规定限值时，抗震等级应提高一级。

---
你: 如果是 7 度区的 8 层框架结构呢？

Agent: 7 度区（0.10g），8 层框架结构（约 24m）：
按表 6.1.2，高度 ≤ 30m，抗震等级为三级。
但需注意：若场地类别为 III/IV 类，应按 0.15g 取值，则为二级。`}</Terminal>

      <H>三、进阶：本地规范 PDF 解析</H>
      <P>如果你有本地 PDF 规范文件，可以让 Agent 直接解析：</P>
      <Terminal label="WhatsApp 对话示例">{`你: 帮我总结一下桌面上那个 GB50010-2010.pdf 的第 4 章内容

Agent: [调用 summarize 解析本地 PDF]

📄 GB 50010-2010 第 4 章"材料"要点：

1. 混凝土强度等级：C15~C80
2. 混凝土弹性模量取值表（表 4.1.5）
3. 钢筋分类：HPB300、HRB335、HRB400、HRBF400、RRB400、HRB500
4. 钢筋弹性模量：HPB300 为 2.1×10⁵ MPa，其余均为 2.0×10⁵ MPa
...`}</Terminal>
      <Tip>
        <span className="font-bold">💡 提效估算：</span>传统翻规范 10-20 分钟/次，AI 查询 10 秒/次。按每天查询 10 次计算，每月节省约 30-60 小时。
      </Tip>
    </>
  ),

  /* ────────────────── 8. 施工日志自动化 ────────────────── */
  "skill-daily-report": (
    <>
      <P>
        施工日志是工地每天的必填项目——天气、施工部位、人员到场、进度、质量问题。传统方式每天要花 30 分钟手工填写。用 n8n Workflow + Weather Skill + 飞书 Skill 组合，可以实现大部分自动化。
      </P>

      <H>一、安装三个 Skill</H>
      <Terminal label="terminal">{`$ npx clawhub@latest install n8n
$ npx clawhub@latest install weather
$ npx clawhub@latest install feishu

# 验证
$ ls ~/.openclaw/skills/
n8n/  weather/  feishu/`}</Terminal>

      <H>二、配置 Heartbeat 定时任务</H>
      <P>
        OpenClaw 的 Heartbeat 机制每 30 分钟检查一次 <Code>HEARTBEAT.md</Code> 中的任务。我们在里面添加施工日志任务：
      </P>
      <Terminal label="~/.openclaw/HEARTBEAT.md">{`## 施工日志自动生成

**频率**: 每天 17:00
**条件**: 工作日

### 步骤
1. 调用 Weather Skill 获取今天的天气信息（地点：上海市浦东新区）
2. 生成施工日志模板，自动填写：
   - 日期、天气、温度、风力
   - 当前施工阶段（从 Memory 中读取）
3. 通过飞书 Skill 发送到项目群"XX项目施工群"
4. 等待项目经理补充施工部位和人员到场信息`}</Terminal>

      <H>三、实际效果</H>
      <Terminal label="飞书群消息（Agent 自动发送）">{`📋 施工日志 - 2026年3月10日

🌤️ 天气：多云 | 温度：8-16°C | 风力：东南风3级
📍 项目：XX花园二期
📊 当前阶段：主体结构施工（第5层）

--- 以下内容请补充 ---
□ 今日施工部位：
□ 各工种人数：钢筋工___人 模板工___人 混凝土工___人
□ 机械使用：塔吊___台班 泵车___台班
□ 质量/安全问题：
□ 明日计划：

@项目经理 请补充以上信息`}</Terminal>

      <H>四、n8n 高级工作流（可选）</H>
      <P>如果你需要更复杂的自动化（比如自动从 BIM 系统拉取进度数据），可以用 n8n 的可视化工作流：</P>
      <Terminal label="n8n workflow 概念">{`触发器(每天17:00)
  → Weather API(获取天气)
  → OpenClaw Agent(生成日志)
  → 飞书 API(发送到群)
  → Google Sheets(归档记录)`}</Terminal>
      <Tip>
        <span className="font-bold">💡 提效估算：</span>天气+日期+模板自动生成，施工日志填写时间从 30 分钟缩短到 5 分钟（只需补充当天具体内容）。
      </Tip>
    </>
  ),

  /* ────────────────── 9. 造价算量 GOG + Excel ────────────────── */
  "skill-cost-excel": (
    <>
      <P>
        造价算量离不开表格。传统方式在 Excel 中手动编写公式，处理一个 5 层框架结构的工程量清单需要 2 天。用 GOG Skill 连接 Google Sheets + Excel Formulas Skill 自动生成汇总公式，实测缩短到 3 小时。
      </P>

      <H>一、安装 Skill</H>
      <Terminal label="terminal">{`$ npx clawhub@latest install gog
$ npx clawhub@latest install excel-formulas

# GOG Skill 需要 Google OAuth 授权
# 安装后按提示完成 Google 账号授权`}</Terminal>

      <H>二、连接工程量清单</H>
      <P>将你的工程量清单上传到 Google Sheets，然后让 Agent 直连处理：</P>
      <Terminal label="WhatsApp 对话示例">{`你: 帮我打开 Google Sheets 中的"XX项目工程量清单"

Agent: [调用 GOG Skill 连接 Google Sheets]
✅ 已连接。该表格包含 5 个 Sheet：
- 土建工程
- 钢筋工程
- 模板工程
- 混凝土工程
- 汇总

共 1,247 行数据。需要我做什么？

你: 帮我检查"钢筋工程"Sheet 中的汇总公式是否正确

Agent: [读取 Sheet 数据并校验公式]
⚠️ 发现 3 处问题：
1. D列（重量）第 45 行：公式 =B45*C45 缺少单位换算系数（mm→m）
2. 汇总行 D200：SUM 范围漏掉了 D180:D195
3. HRB400 小计与明细不一致（差 2.3t）

需要我自动修复吗？`}</Terminal>

      <H>三、自动生成汇总公式</H>
      <Terminal label="WhatsApp 对话示例">{`你: 帮我为混凝土工程 Sheet 生成分层汇总公式

Agent: [调用 Excel Formulas Skill]
已为"混凝土工程"Sheet 生成以下公式：

每层小计：
- 1F: =SUMPRODUCT(C5:C28, D5:D28)  → 89.6 m³
- 2F: =SUMPRODUCT(C29:C52, D29:D52) → 76.2 m³
- 3F: =SUMPRODUCT(C53:C76, D53:D76) → 76.2 m³
- 4F: =SUMPRODUCT(C77:C100, D77:D100) → 72.8 m³
- 5F: =SUMPRODUCT(C101:C124, D101:D124) → 65.4 m³

总计: =SUM(E5,E29,E53,E77,E101) → 380.2 m³

含损耗（3%）: =E125*1.03 → 391.6 m³

已写入 Sheet。请确认。`}</Terminal>

      <H>四、导出与归档</H>
      <P>处理完成后，可以导出为多种格式：</P>
      <Terminal label="WhatsApp 对话示例">{`你: 把汇总结果导出为 Excel 文件发给我

Agent: [调用 GOG Skill 导出]
✅ 已导出为 XX项目工程量清单_汇总_20260310.xlsx
📎 文件已发送`}</Terminal>
      <Tip>
        <span className="font-bold">💡 适用场景：</span>工程量清单复核、预算表公式生成、分项汇总统计、多个子项合并、施工签证量计算。任何涉及大量表格公式的造价工作都能提效。
      </Tip>
    </>
  ),

  /* ────────────────── 10. arXiv 论文追踪 ────────────────── */
  "skill-paper-track": (
    <>
      <P>
        AI+岩土工程是前沿交叉领域——清华陆新征团队、同济朱合华团队都在发顶刊论文。但每周手动搜 arXiv 太费时间。用 arXiv Watcher Skill + Proactive Agent，Agent 自动帮你追踪和汇总新论文。
      </P>

      <H>一、安装和配置</H>
      <Terminal label="terminal">{`$ npx clawhub@latest install arxiv-watcher
$ npx clawhub@latest install proactive-agent
$ npx clawhub@latest install feishu  # 用于推送通知`}</Terminal>

      <H>二、配置关注关键词</H>
      <P>在 HEARTBEAT.md 中设置论文追踪任务：</P>
      <Terminal label="~/.openclaw/HEARTBEAT.md">{`## arXiv 论文追踪

**频率**: 每周一 09:00
**条件**: 每周

### 关键词
- "geotechnical engineering" AND "machine learning"
- "soil mechanics" AND "neural network"
- "foundation design" AND "AI"
- "tunnel" AND "deep learning"
- "slope stability" AND "prediction"

### 步骤
1. 调用 arXiv Watcher 搜索过去 7 天的新论文
2. 按相关性排序，筛选 Top 10
3. 为每篇论文生成中文摘要（100字以内）
4. 通过飞书 Skill 推送到"岩土AI前沿"群`}</Terminal>

      <H>三、推送效果</H>
      <Terminal label="飞书群消息（每周一自动推送）">{`📚 岩土 AI 前沿周报 — 2026.03.03~03.09

1. 🔥 Physics-Informed Neural Network for Soil Consolidation Prediction
   作者: Zhang et al. (Tongji University)
   摘要: 提出基于物理约束的神经网络预测软土固结沉降，在上海某地铁
   项目验证，预测精度较传统方法提升 23%。
   链接: arxiv.org/abs/2603.xxxxx

2. Deep Learning-Based Slope Stability Assessment Using UAV Images
   作者: Li et al. (Tsinghua University)
   摘要: 利用无人机影像+深度学习自动评估边坡稳定性，在四川某高速
   公路项目测试，检出率 94.7%。
   链接: arxiv.org/abs/2603.xxxxx

3. ...（共 10 篇）

📊 本周趋势：PINN 在岩土中的应用持续增长，3 篇相关论文。`}</Terminal>

      <H>四、Proactive Agent 自动模式</H>
      <P>Proactive Agent 让 Agent 不需要你发消息也能主动执行任务：</P>
      <Terminal label="~/.openclaw/openclaw.json">{`{
  "agents": {
    "proactive": {
      "enabled": true,
      "checkInterval": "30m",
      "tasks": ["heartbeat"]
    }
  }
}`}</Terminal>
      <P>
        开启后，Agent 会按 HEARTBEAT.md 中的频率自动执行任务，无需手动触发。你只需要每周一打开飞书群看论文摘要就行。
      </P>
    </>
  ),

  /* ────────────────── 11. 注册考试备考 ────────────────── */
  "skill-notion-exam": (
    <>
      <P>
        注册岩土工程师考试（基础+专业）通过率不到 20%，备考周期通常 1-2 年。用 Obsidian Skill 构建本地规范笔记库 + Notion Skill 同步错题数据库，让 Agent 帮你智能管理备考。
      </P>

      <H>一、安装 Skill</H>
      <Terminal label="terminal">{`$ npx clawhub@latest install obsidian
$ npx clawhub@latest install notion

# Obsidian Skill 需要指定 Vault 路径
# Notion Skill 需要 Notion API Token`}</Terminal>

      <H>二、构建规范笔记 Vault</H>
      <P>在 Obsidian 中创建一个专门的备考 Vault，让 Agent 帮你整理规范要点：</P>
      <Terminal label="WhatsApp 对话示例">{`你: 帮我在 Obsidian 备考 Vault 中创建一个笔记，总结 GB 50007-2011 
第 5 章"地基计算"的核心公式

Agent: [调用 Obsidian Skill]
✅ 已创建笔记：规范/GB50007-2011/第5章-地基计算.md

内容预览：
# GB 50007-2011 第 5 章 地基计算

## 5.2 承载力计算
- 地基承载力特征值修正公式（5.2.4）：
  fa = fak + ηb·γ·(b-3) + ηd·γm·(d-0.5)
  
## 5.3 变形计算
- 分层总和法沉降计算（5.3.5）：
  s = ψs · Σ(Δσi · Hi / Esi)

## 考点标记
- ⭐ 承载力修正系数表（表 5.2.4）→ 必考
- ⭐ 沉降经验系数 ψs 取值 → 历年真题高频

已添加标签：#注册岩土 #地基计算 #必考`}</Terminal>

      <H>三、Notion 错题数据库</H>
      <P>在 Notion 中创建错题数据库，记录每次练习的错题：</P>
      <Terminal label="WhatsApp 对话示例">{`你: 我今天做了一套模拟题，帮我把错题录入 Notion

错题1: 承载力修正公式中 ηb 取值错误，答案是 0（b≤3m 时）
错题2: 沉降经验系数 ψs 查表时插值算错
错题3: 基底附加压力 p0 忘记减去自重压力

Agent: [调用 Notion Skill]
✅ 已录入 3 道错题到"岩土备考-错题本"数据库：

| 日期 | 章节 | 知识点 | 错因 | 复习次数 |
| 03-10 | 5.2 | 承载力修正 | ηb取值规则 | 0 |
| 03-10 | 5.3 | 沉降计算 | ψs插值 | 0 |
| 03-10 | 5.2 | 附加压力 | 概念混淆 | 0 |

📊 累计错题：47 道
📊 薄弱章节：第5章（18道）> 第8章（12道）> 第3章（9道）`}</Terminal>

      <H>四、智能复习计划</H>
      <Terminal label="WhatsApp 对话示例">{`你: 帮我根据错题生成本周复习计划

Agent: [分析 Notion 错题数据库]
📋 本周复习计划（基于艾宾浩斯遗忘曲线）：

周一：第5章 承载力计算（18道错题，最薄弱）
  - 重点：ηb/ηd 修正系数取值规则
  - 练习：2019/2021 年真题 承载力部分

周二：第5章 沉降计算
  - 重点：ψs 插值方法、分层总和法步骤
  - 练习：经典例题 3 道

周三：第8章 桩基础（12道错题）
  - 重点：单桩承载力计算
  
周四：复习周一~周三错题（间隔复习）
周五：模拟测试 1 套

⏰ 已设置 Heartbeat 提醒，每天 20:00 推送今日复习内容。`}</Terminal>
      <Tip>
        <span className="font-bold">💡 方法论：</span>Obsidian 管理「知识」（规范笔记、公式总结），Notion 管理「数据」（错题、进度、统计）。两个工具各司其职，Agent 负责串联。
      </Tip>
    </>
  ),

  /* ────────────────── 12. Browser Relay + Firecrawl ────────────────── */
  "skill-browser-bim": (
    <>
      <P>
        土木工程师经常需要从各种网站下载资料——BIM 模型库、规范更新、材料价格信息、政府报审表。这些操作重复、费时，而且很多网站需要登录。Browser Relay + Firecrawl 两个 Skill 组合，让 Agent 自动完成浏览器操作和数据爬取。
      </P>

      <H>一、安装 Skill</H>
      <Terminal label="terminal">{`$ npx clawhub@latest install browser-relay
$ npx clawhub@latest install firecrawl

# Browser Relay 需要 Chrome/Chromium 浏览器
# Firecrawl 需要 API Key (firecrawl.dev 免费 500 页/月)`}</Terminal>

      <H>二、自动下载 BIM 资料</H>
      <P>Browser Relay 可以完整操控浏览器——导航、点击、填表、下载、截图：</P>
      <Terminal label="WhatsApp 对话示例">{`你: 帮我从 XX BIM 模型库下载"框架结构标准层"模型

Agent: [调用 Browser Relay]
🌐 正在操作浏览器...
1. ✅ 打开 bim-library.com
2. ✅ 登录（使用 Memory 中保存的账号）
3. ✅ 搜索"框架结构标准层"
4. ✅ 找到 3 个结果，选择评分最高的
5. ✅ 点击下载（.rvt 格式, 45MB）
6. ✅ 文件已保存到 ~/Downloads/框架结构标准层.rvt

📎 需要我把文件发给你吗？`}</Terminal>

      <H>三、爬取材料价格</H>
      <P>Firecrawl 可以爬取网页并提取结构化数据：</P>
      <Terminal label="WhatsApp 对话示例">{`你: 帮我查一下上海地区今天的钢筋价格

Agent: [调用 Firecrawl 爬取材料价格网站]
📊 上海地区钢筋价格 (2026-03-10)

| 品种 | 规格 | 今日价 | 涨跌 |
| HRB400 螺纹钢 | Φ12 | 3,680 元/吨 | +20 |
| HRB400 螺纹钢 | Φ25 | 3,620 元/吨 | +10 |
| HPB300 盘螺 | Φ8 | 3,850 元/吨 | -15 |
| HRB400 盘螺 | Φ10 | 3,780 元/吨 | +5 |

数据来源：mysteel.com
更新时间：2026-03-10 14:30`}</Terminal>

      <H>四、自动化政府报审表填写</H>
      <Terminal label="WhatsApp 对话示例">{`你: 帮我填写住建局的施工许可申报表

Agent: [调用 Browser Relay]
🌐 正在操作浏览器...
1. ✅ 打开住建局网上办事大厅
2. ✅ 登录（使用已保存凭证）
3. ✅ 进入"施工许可证申请"
4. ✅ 自动填写项目信息（从 Memory 中读取）
   - 项目名称：XX花园二期
   - 建设单位：XX开发有限公司
   - 施工单位：XX建设集团
   - 面积：28,500 m²
5. ⏸️ 表格已填写完成，请人工审核后点击提交

📸 已截图供你确认（见附件）`}</Terminal>
      <Warn>
        <span className="font-bold">⚠️ 安全提醒：</span>
        ①Browser Relay 能操控你的浏览器，请确保 Sandbox 和 exec_approval 已开启；
        ②不要在 Memory 中明文存储密码，使用环境变量或密钥管理；
        ③政府报审等重要操作务必人工审核后再提交。
      </Warn>

      <H>五、定时价格监控</H>
      <P>结合 Heartbeat，可以实现材料价格定时监控：</P>
      <Terminal label="~/.openclaw/HEARTBEAT.md">{`## 材料价格监控

**频率**: 每天 09:00
**条件**: 工作日

### 步骤
1. 调用 Firecrawl 爬取上海钢筋、水泥、商混价格
2. 与昨日价格对比，计算涨跌幅
3. 如果涨跌幅超过 3%，通过飞书推送预警
4. 数据归档到 Google Sheets 价格追踪表`}</Terminal>
    </>
  ),
};
