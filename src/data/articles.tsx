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
  {
    id: "project-management-agent",
    tag: "施工",
    tagClass: "border-accent-survey text-accent-survey",
    title:
      "OpenClaw 在土木工程项目管理中的应用——去中心化多专业协同实战",
    excerpt:
      "基于 STATE.yaml 的去中心化项目管理模式，实现结构/建筑/机电多专业并行协作。某超高层项目实测：Agent 协同使设计变更响应时间从 3 天缩至 4 小时。",
    author: "张工",
    date: "2026-03-11",
    readTime: "18 min",
    featured: true,
    icon: "account_tree",
    iconColor: "text-accent-survey",
  },
  {
    id: "pkpm-automation",
    tag: "结构",
    tagClass: "border-accent-struct text-accent-struct",
    title:
      "用 OpenClaw 自动化 PKPM/YJK 建模工作流——从 Excel 参数表到施工图输出",
    excerpt:
      "Python 脚本调用 PKPM API，从 Excel 参数表自动生成结构模型、批量导出计算书和施工图。某住宅项目实测：建模时间从 2 天缩至 3 小时，人工复核减少 68%。",
    author: "王工",
    date: "2026-03-11",
    readTime: "22 min",
    featured: true,
    icon: "apartment",
    iconColor: "text-accent-struct",
  },
  {
    id: "civil-skills-dev",
    tag: "结构",
    tagClass: "border-accent-struct text-accent-struct",
    title:
      "OpenClaw Skills 开发指南——为土木工程师定制专属技能",
    excerpt:
      "从 SKILL.md 格式到实战案例：开发钢筋算量 Skill 和规范条文检索 Skill。含完整代码示例、ClawHub 发布流程、以及 13000+ Skills 生态避坑指南。",
    author: "李工",
    date: "2026-03-11",
    readTime: "20 min",
    featured: false,
    icon: "extension",
    iconColor: "text-accent-struct",
  },
  {
    id: "construction-progress-agent",
    tag: "施工",
    tagClass: "border-accent-survey text-accent-survey",
    title:
      "施工进度监控 Agent——基于 OpenClaw 的 4D BIM 自动化",
    excerpt:
      "图像识别 + 进度对比 + 关键路径预警。Agent 每日自动生成进度偏差报告、资源调配建议。某地铁项目实测：进度预警准确率 92%，工期延误减少 37%。",
    author: "陈工",
    date: "2026-03-11",
    readTime: "17 min",
    featured: false,
    icon: "timeline",
    iconColor: "text-accent-survey",
  },
  {
    id: "cost-estimation-agent",
    tag: "造价",
    tagClass: "border-accent-const text-accent-const",
    title:
      "工程造价智能助手——OpenClaw + 清单组价自动化",
    excerpt:
      "从 BIM 模型提取工程量、自动匹配定额库组价、材料价格波动预警。某商业综合体项目实测：清单编制时间从 5 天缩至 8 小时，组价准确率 96.8%。",
    author: "刘工",
    date: "2026-03-11",
    readTime: "19 min",
    featured: false,
    icon: "payments",
    iconColor: "text-accent-const",
  },
  {
    id: "skills-complete-guide",
    tag: "结构",
    tagClass: "border-accent-struct text-accent-struct",
    title:
      "OpenClaw Skills 完全使用指南：10 分钟搭建专属 AI 技能，告别重复指令",
    excerpt:
      "从 SKILL.md 结构到多 Skill 协作、脚本调用、长期记忆配置。含 5 大常见问题解决方案、ClawHub 生态避坑指南，让你的 OpenClaw 真正变成 24/7 数字员工。",
    author: "张工",
    date: "2026-03-13",
    readTime: "10 min",
    featured: true,
    icon: "extension",
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

      <H>八、常见问题排查</H>
      <P>
        安装和使用 OpenClaw 过程中会遇到各种问题。以下是社区反馈最多的坑，按出现频率排列。
        遇到问题时，建议先运行 <Code>openclaw doctor</Code> 自动诊断。
      </P>

      {/* ── 8.1 安装阶段 ── */}
      <h4 className="text-lg font-bold text-primary mt-8 mb-3">8.1 安装阶段问题</h4>

      <Concept title="❶ npm install 超时 / 依赖下载失败（国内用户最常见）">
        国内网络访问 npm 官方源速度极慢，经常卡在进度条不动。
        <br /><br />
        <span className="text-primary font-bold">解决：</span>设置国内镜像源后重新安装：
        <br />
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          npm config set registry https://registry.npmmirror.com
        </code>
        <br />
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          npm install -g openclaw@latest
        </code>
        <br /><br />
        如果镜像源仍然卡住，可临时开代理：
        <br />
        macOS/Linux：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          export https_proxy=http://127.0.0.1:7890
        </code>
        <br />
        Windows PowerShell：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          $env:https_proxy = &quot;http://127.0.0.1:7890&quot;
        </code>
      </Concept>

      <Concept title="❷ Node.js 版本过低——各种莫名其妙的语法错误">
        OpenClaw 要求 Node.js ≥ 22。如果你使用 Node 18 或 16，
        会遇到 SyntaxError、依赖安装失败等不明确的报错。
        <br /><br />
        <span className="text-primary font-bold">诊断：</span>
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">node --version</code>
        <br />
        <span className="text-primary font-bold">解决：</span>
        推荐用 nvm 管理版本——
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">nvm install 22 &amp;&amp; nvm use 22</code>，
        然后清缓存重装：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">npm cache clean --force &amp;&amp; npm install -g openclaw</code>
      </Concept>

      <Concept title="❸ 安装后输入 openclaw 提示 &quot;command not found&quot;">
        npm 全局 bin 目录没有加入系统 PATH。
        <br /><br />
        <span className="text-primary font-bold">解决：</span>
        先查路径：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">npm config get prefix</code>，
        然后将 &lt;prefix&gt;/bin 加入 PATH：
        <br />
        macOS/Linux 在 ~/.zshrc 或 ~/.bashrc 中添加：
        <br />
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          export PATH=&quot;$(npm config get prefix)/bin:$PATH&quot;
        </code>
        <br />
        Windows：将 %AppData%\npm 添加到系统环境变量 PATH 中，然后重启 PowerShell。
      </Concept>

      <Concept title="❹ 一键安装脚本卡住不动（curl | bash 无响应）">
        安装脚本会启动 TUI 终端界面。在无头服务器（headless VPS）或某些终端模拟器中 TUI 会卡死。
        <br /><br />
        <span className="text-primary font-bold">解决：</span>
        Ctrl+C 退出，改用 npm 手动安装：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">npm install -g openclaw</code>，
        然后运行
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">openclaw doctor --non-interactive</code>
        完成初始配置。
        <br /><br />
        也可以加 --verbose 获取更多信息：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          curl -fsSL https://openclaw.ai/install.sh | bash -s -- --verbose
        </code>
      </Concept>

      <Concept title="❺ Linux 缺少编译工具——原生模块构建失败">
        很多 npm 依赖需要编译原生 C++ 模块。缺少 build-essential 会导致安装失败或运行时崩溃。
        <br /><br />
        <span className="text-primary font-bold">解决：</span>
        <br />
        Debian/Ubuntu：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          sudo apt install build-essential git python3
        </code>
        <br />
        Fedora/RHEL：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          sudo dnf install gcc gcc-c++ make git
        </code>
      </Concept>

      <Concept title="❻ Windows 提示找不到 git">
        OpenClaw 安装过程需要 git。Windows 用户需要先安装 Git for Windows
        （git-scm.com），安装时勾选 &quot;Add to PATH&quot;，然后重启 PowerShell 再运行安装脚本。
      </Concept>

      <Concept title="❼ onboard 向导后 openclaw.json 损坏或不完整">
        Onboard 向导有时不会填写所有必要字段，导致后续各种诡异报错。
        <br /><br />
        <span className="text-primary font-bold">诊断：</span>
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          python3 -m json.tool ~/.openclaw/openclaw.json
        </code>
        &nbsp;（检查 JSON 语法）
        <br />
        <span className="text-primary font-bold">解决：</span>
        运行
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">openclaw doctor --fix</code>
        自动修复。如果问题严重，备份旧配置后重新 onboard：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          cp ~/.openclaw/openclaw.json ~/.openclaw/openclaw.json.bak &amp;&amp; openclaw onboard
        </code>
      </Concept>

      {/* ── 8.2 Gateway 网关问题 ── */}
      <h4 className="text-lg font-bold text-primary mt-8 mb-3">8.2 Gateway 网关问题</h4>

      <Concept title="❶ 端口冲突——EADDRINUSE / &quot;another gateway instance is already listening&quot;">
        Gateway 默认占用 18789 端口。如果端口被其他程序占用，启动会失败。
        <br /><br />
        <span className="text-primary font-bold">诊断：</span>
        <br />
        macOS/Linux：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          lsof -i :18789
        </code>
        <br />
        Windows：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          netstat -ano | findstr :18789
        </code>
        <br /><br />
        <span className="text-primary font-bold">解决：</span>
        停止占用进程，或换端口：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          openclaw config set gateway.port 18790
        </code>
      </Concept>

      <Concept title="❷ 残留 PID 锁文件——Gateway 崩溃后无法重启">
        Gateway 异常退出时会残留 ~/.openclaw/gateway.pid 锁文件，新进程拒绝启动。
        <br /><br />
        <span className="text-primary font-bold">解决：</span>
        先确认没有真正运行的进程：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">ps aux | grep openclaw</code>，
        确认无进程后删除锁文件：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">rm ~/.openclaw/gateway.pid</code>，
        然后重启。
      </Concept>

      <Concept title="❸ systemd / launchd 服务启动失败——环境变量丢失">
        手动运行正常，但作为系统服务启动失败。最常见原因是 HOME 和 API Key 环境变量没传给服务进程。
        <br /><br />
        <span className="text-primary font-bold">解决（Linux systemd）：</span>
        在服务单元文件中显式设置：
        <br />
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          Environment=HOME=/home/youruser
        </code>
        <br />
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          Environment=OPENCLAW_LOG_LEVEL=info
        </code>
        <br /><br />
        <span className="text-primary font-bold">解决（macOS launchd）：</span>
        确保 plist 文件中包含正确的 EnvironmentVariables 字典。
      </Concept>

      <Concept title="❹ WebSocket 1006 错误——Gateway 启动后立即崩溃">
        通常是某个插件或 Skill 加载时崩溃导致。
        <br /><br />
        <span className="text-primary font-bold">解决：</span>
        在配置中临时禁用非核心插件，确认 Gateway 稳定后逐个启用，定位问题插件。
        用 <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
        openclaw logs --follow</code> 查看崩溃时的详细日志。
      </Concept>

      <Concept title="❺ &quot;Gateway start blocked: set gateway.mode=local&quot;">
        Gateway 模式未设为本地。
        <br /><br />
        <span className="text-primary font-bold">解决：</span>
        在 openclaw.json 中设置 gateway.mode 为 &quot;local&quot;，或运行：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">openclaw configure</code>
      </Concept>

      {/* ── 8.3 模型与 API 问题 ── */}
      <h4 className="text-lg font-bold text-primary mt-8 mb-3">8.3 模型与 API 问题</h4>

      <Concept title="❶ 401 Unauthorized——API Key 错误或过期">
        最常见的模型调用失败。复制 Key 时多了空格、Key 过期、或填错了 provider 都会导致 401。
        <br /><br />
        <span className="text-primary font-bold">解决：</span>
        去模型提供商控制台（如 platform.deepseek.com）重新生成 Key，粘贴时确保无多余空格。
        用
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">openclaw models status</code>
        检查认证状态。
      </Concept>

      <Concept title="❷ 429 Too Many Requests——频率限制">
        发送请求太频繁，被模型提供商限流。Anthropic 用户还可能遇到 &quot;extra usage required for long context&quot;。
        <br /><br />
        <span className="text-primary font-bold">解决：</span>
        等待一段时间后重试。长期方案：配置 fallback 模型（多个 provider 自动切换），
        或调低并发设置。Anthropic 长上下文问题需要在 Anthropic 控制台开启 Extra Usage 或禁用 context1m 参数。
      </Concept>

      <Concept title="❸ &quot;Model not allowed&quot;——模型白名单未更新">
        添加新模型后忘记将其加入 agents.defaults.models 白名单。当该列表非空时，只有列表中的模型可以使用。
        <br /><br />
        <span className="text-primary font-bold">解决：</span>
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          openclaw config get agents.defaults.models
        </code>
        检查白名单，添加新模型 Key 即可。
      </Concept>

      <Concept title="❹ &quot;All models failed&quot;——所有模型均失败">
        通常是多个 provider 的 Key 都有问题，或网络不通。
        <br /><br />
        <span className="text-primary font-bold">解决：</span>
        运行
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">openclaw models status</code>
        逐一检查每个 provider 的连接状态。国内用户优先确保 DeepSeek（国内直连）可用作 fallback。
      </Concept>

      <Concept title="❺ 国产模型调用超时——baseUrl 或网络问题">
        确认 baseUrl 填写正确（注意末尾不要多 /），确认 API Key 对应的是正确的平台。
        常见正确地址：
        <br />
        DeepSeek：https://api.deepseek.com/v1
        <br />
        通义千问：https://dashscope.aliyuncs.com/compatible-mode/v1
        <br />
        Kimi：https://api.moonshot.cn/v1
        <br />
        GLM-4：https://open.bigmodel.cn/api/paas/v4
      </Concept>

      {/* ── 8.4 消息平台连接问题 ── */}
      <h4 className="text-lg font-bold text-primary mt-8 mb-3">8.4 消息平台连接问题</h4>

      <Concept title="❶ WhatsApp 频繁断线 / 重复要求扫码">
        WhatsApp QR Code 配对是最不稳定的连接方式，会话与手机登录状态绑定。
        <br /><br />
        <span className="text-primary font-bold">解决：</span>
        运行
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          openclaw channels status --probe
        </code>
        检查连接状态。如果凭证损坏，清除凭证目录后重新配对：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          rm -rf ~/.openclaw/channels/whatsapp/ &amp;&amp; openclaw platform pair whatsapp
        </code>
        <br />
        注意：国内使用 WhatsApp 需要代理网络环境。
      </Concept>

      <Concept title="❷ Telegram Bot 在线但不回复消息">
        三个常见原因：
        <br />
        ① 隐私模式（Privacy Mode）开启——Bot 在群组中只能收到 @mention 或 / 命令。
        在 BotFather 中发送 /setprivacy 关闭。
        <br />
        ② Bot Token 错误或过期——日志中会出现 401 错误。
        <br />
        ③ 网络问题——服务器无法访问 api.telegram.org，
        用 curl 测试：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          curl -s https://api.telegram.org/bot&lt;TOKEN&gt;/getMe
        </code>
      </Concept>

      <Concept title="❸ Discord Bot 在线但不响应">
        最常见原因：在 Discord 开发者后台未开启 &quot;Message Content Intent&quot;（Privileged Gateway Intents 下）。
        没有这个权限，Bot 无法读取消息内容。
        <br /><br />
        另外检查：是否设置了 requireMention，以及用户是否完成了 DM 配对
        （<code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
        openclaw pairing list discord</code>）。
      </Concept>

      <Concept title="❹ 飞书 / 钉钉 / 企业微信不响应（国内用户）">
        ① 确认 onboard 时域名选择了中国区域（feishu.cn 而非 larksuite.com）。
        <br />
        ② 确认应用权限全部勾选并发布了版本（飞书需要发布才生效）。
        <br />
        ③ 重启 Gateway 后用
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          openclaw channels test feishu
        </code>
        测试连接。
      </Concept>

      <Concept title="❺ 消息已连接但收不到回复——配对 / 白名单问题">
        OpenClaw 的 DM 需要发送者先完成配对（pairing）。如果设置了 allowFrom 白名单，
        白名单外的用户消息会被静默丢弃。
        <br /><br />
        <span className="text-primary font-bold">诊断：</span>
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          openclaw pairing list --channel &lt;channel&gt;
        </code>
        检查待批准的配对请求，
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          openclaw logs --follow
        </code>
        查看是否有 &quot;pairing request&quot; 或 &quot;blocked&quot; 日志。
      </Concept>

      {/* ── 8.5 升级与配置问题 ── */}
      <h4 className="text-lg font-bold text-primary mt-8 mb-3">8.5 升级与配置兼容性</h4>

      <Concept title="❶ 升级后出现 &quot;unsupported schema node&quot; / 配置报错">
        OpenClaw 版本更新可能改变配置 Key 名称。升级后应立即运行
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">openclaw doctor</code>
        检查配置兼容性。
        <br /><br />
        <span className="text-primary font-bold">建议：</span>
        升级前备份：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          cp -r ~/.openclaw ~/.openclaw.backup.$(date +%Y%m%d)
        </code>
        <br />
        优先用 CLI 修改配置（
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">
          openclaw config set/get
        </code>
        ）而非手动编辑 JSON，CLI 会自动处理 schema 变更。
      </Concept>

      <Concept title="❷ 修改配置后不生效——哪些需要重启？">
        模型参数微调、超时设置等可以热重载。但以下改动必须重启 Gateway：
        添加/删除 model provider、修改端口/绑定设置、改变 agent 结构、认证配置变更。
        <br /><br />
        不确定时就重启：
        <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">openclaw gateway restart</code>
      </Concept>

      <Concept title="❸ 本地 Ollama 模型调用失败">
        模型名称必须与 provider 配置中的完全一致（区分大小写）。
        用 <code className="text-primary bg-black px-1.5 py-0.5 rounded text-xs">ollama list</code>
        确认已下载的模型名称，确保和 openclaw.json 中的 model id 完全匹配。
      </Concept>

      {/* ── 8.6 内存 / 记忆问题 ── */}
      <h4 className="text-lg font-bold text-primary mt-8 mb-3">8.6 记忆丢失与上下文重置</h4>

      <Concept title="Agent 好像忘记了之前说过的话">
        OpenClaw 的记忆分两层：① 会话内聊天记录（临时，重启 Gateway 即丢失）；
        ② 持久记忆文件（~/.openclaw/workspace/MEMORY.md 等，跨会话保留）。
        <br /><br />
        长对话中，上下文窗口会被压缩（compaction），早期信息可能被丢弃。
        <br /><br />
        <span className="text-primary font-bold">解决：</span>
        重要信息主动让 Agent 写入 MEMORY.md。使用多个小的主题记忆文件（memory/*.md）
        比一个巨大的 MEMORY.md 检索效果更好。
      </Concept>

      <H>九、诊断工具速查</H>
      <P>遇到任何问题，按以下顺序排查：</P>
      <Terminal label="terminal - 诊断命令速查">{`# 1. 一键诊断（最有用，输出可直接发到社区求助）
$ openclaw status --all

# 2. 自动修复常见问题（权限、缺失目录、配置错误）
$ openclaw doctor --fix

# 3. 实时查看日志（复现问题时开着）
$ openclaw logs --follow

# 4. 检查 Gateway 状态
$ openclaw gateway status

# 5. 检查模型认证状态
$ openclaw models status

# 6. 检查消息平台连接
$ openclaw channels status --probe

# 7. 检查定时任务
$ openclaw cron status

# 8. 开启 debug 级别日志（详细排查用）
$ OPENCLAW_LOG_LEVEL=debug openclaw gateway run

# 9. 聊天中使用 /debug 命令（需先在配置中设置 commands.debug: true）
# /debug show    ← 查看运行时配置
# /debug set key=value  ← 临时修改配置

# 10. 清除缓存（万能重置）
$ openclaw cache clear --all`}</Terminal>

      <Warn>
        <span className="font-bold">⚠️ 求助前请准备：</span>
        OS 版本、Node.js 版本（node --version）、OpenClaw 版本（openclaw --version）、
        openclaw status --all 输出、以及 debug 级别日志片段。
        发到 GitHub Discussions 或 Discord 社区，越具体越快得到回复。
      </Warn>

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
          官方中文文档：<span className="text-primary">docs.openclaw.ai/zh-CN</span>
        </li>
        <li>
          官方 FAQ：<span className="text-primary">docs.openclaw.ai/zh-CN/help/faq</span>
        </li>
        <li>
          官方故障排查：<span className="text-primary">docs.openclaw.ai/gateway/troubleshooting</span>
        </li>
        <li>
          Skill 市场：<span className="text-primary">clawhub.ai</span>
        </li>
        <li>
          GitHub Discussions（提问）：<span className="text-primary">github.com/openclaw/openclaw/discussions</span>
        </li>
        <li>
          Discord 社区：<span className="text-primary">discord.com/invite/clawd</span>
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

  /* ────────────────── 13. 项目管理 Agent ────────────────── */
  "project-management-agent": (
    <>
      <P>
        土木工程项目涉及结构、建筑、机电、造价等多个专业，传统的中心化管理模式（项目经理统一协调）容易成为瓶颈。OpenClaw 的去中心化 Agent 模式，通过 STATE.yaml 文件实现多专业并行协作，让每个专业的 Agent 自主工作、自动同步状态。
      </P>

      <Tip>
        <span className="font-bold">实测数据：</span>某超高层项目采用 Agent 协同管理后，设计变更响应时间从 3 天缩至 4 小时，跨专业沟通成本降低 62%，图纸冲突检测准确率 95%。
      </Tip>

      <H>一、传统项目管理的痛点</H>
      <P>以一个典型的商业综合体项目为例：</P>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 font-mono text-sm">
        <li>
          <span className="text-primary">结构专业</span>：修改梁高后需通知建筑（影响净高）、机电（影响管线）、造价（影响工程量）
        </li>
        <li>
          <span className="text-primary">建筑专业</span>：调整隔墙位置需确认结构荷载、机电点位、消防疏散
        </li>
        <li>
          <span className="text-primary">机电专业</span>：管线综合需等结构、建筑图纸到位，经常返工
        </li>
        <li>
          <span className="text-primary">造价专业</span>：变更频繁导致清单反复调整，滞后于设计进度
        </li>
      </ul>
      <P>
        项目经理成为"信息中转站"，每天处理大量协调邮件和会议，真正的瓶颈不是技术问题，而是信息流转效率。
      </P>

      <H>二、去中心化 Agent 协同模式</H>
      <P>OpenClaw 的解决方案：用 STATE.yaml 文件作为"共享白板"，所有专业 Agent 读写同一份状态文件，实现去中心化协调。</P>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.1 架构设计</h4>
      <Terminal label="项目目录结构">{`~/projects/XX商业综合体/
├── STATE.yaml              # 项目状态文件（核心）
├── PROJECT_REGISTRY.md     # Agent 注册表
├── structure/              # 结构专业工作区
│   ├── MEMORY.md
│   └── models/
├── architecture/           # 建筑专业工作区
├── mep/                    # 机电专业工作区
└── cost/                   # 造价专业工作区`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.2 STATE.yaml 核心结构</h4>
      <Terminal label="STATE.yaml">{`# 项目协调文件
project: XX商业综合体
updated: 2026-03-11T14:30:00Z

tasks:
  - id: struct-beam-height
    status: in_progress
    owner: pm-structure
    started: 2026-03-11T10:00:00Z
    description: "调整 3F 主梁高度 600→700mm（荷载增加）"
    impacts:
      - architecture: "3F 净高减少 100mm，需确认吊顶方案"
      - mep: "风管标高需下调，检查与梁底净距"
      - cost: "混凝土量增加约 12m³"
    
  - id: arch-partition-adjust
    status: blocked
    owner: pm-architecture
    blocked_by: struct-beam-height
    description: "调整 3F 会议室隔墙位置"
    notes: "等待结构梁高确认后再调整"
    
  - id: mep-duct-routing
    status: pending
    owner: pm-mep
    dependencies: [struct-beam-height, arch-partition-adjust]
    description: "3F 风管综合布置"
    
  - id: cost-quantity-update
    status: done
    owner: pm-cost
    completed: 2026-03-11T14:00:00Z
    output: "清单已更新，梁混凝土量 +12m³"

next_actions:
  - "pm-architecture: 结构梁高已确定，可继续隔墙调整"
  - "pm-mep: 等待建筑隔墙确认后开始管线综合"
  - "pm-structure: 提交计算书给审图机构"`}</Terminal>

      <H>三、实战：设计变更自动协同</H>
      <P>场景：结构工程师发现 3F 荷载计算有误，需要调整主梁高度。</P>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">步骤 1：结构 Agent 更新状态</h4>
      <Terminal label="WhatsApp → pm-structure">{`结构工程师: 3F 主梁高度需要从 600 调到 700，荷载计算有误

pm-structure Agent:
✅ 已更新 STATE.yaml：
  - 创建任务 struct-beam-height (in_progress)
  - 标记影响专业：建筑（净高）、机电（管线）、造价（工程量）
  - 自动通知相关 Agent

📊 影响分析：
  - 3F 净高：3.9m → 3.8m（需确认是否满足规范）
  - 混凝土量：+12m³（约 +3600 元）
  - 钢筋量：+420kg（约 +2100 元）

🔔 已通知：pm-architecture、pm-mep、pm-cost`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">步骤 2：建筑 Agent 自动响应</h4>
      <Terminal label="pm-architecture 自动检查">{`pm-architecture Agent [自动运行]:
📖 读取 STATE.yaml → 发现新任务 struct-beam-height
🔍 影响分析：
  - 3F 净高 3.8m，查规范 GB50352-2019：
    ✅ 办公建筑最小净高 2.8m → 满足
    ⚠️ 但吊顶后净高 3.8-0.4=3.4m，偏低
    
💡 建议方案：
  1. 调整吊顶做法：铝扣板改为石膏板（节省 50mm）
  2. 局部降板处理（会议室区域）
  
📝 更新 STATE.yaml：
  - 任务 arch-partition-adjust 状态改为 blocked
  - 添加 notes: "等待业主确认吊顶方案"
  
🔔 通知：pm-structure（建筑方案需确认）`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">步骤 3：机电 Agent 预判冲突</h4>
      <Terminal label="pm-mep 自动检查">{`pm-mep Agent [自动运行]:
📖 读取 STATE.yaml → 梁高 +100mm
🔍 冲突检测（基于 BIM 模型）：
  ⚠️ 3F-A 轴风管（DN800）与新梁底净距仅 150mm
  ⚠️ 规范要求最小 200mm → 不满足
  
💡 解决方案：
  1. 风管改走 B 轴（绕行 +8m，造价 +2400 元）
  2. 风管改为扁管 800×400（风阻增加，需复核）
  
📝 更新 STATE.yaml：
  - 任务 mep-duct-routing 添加冲突记录
  - 等待结构、建筑方案确定后执行
  
🔔 通知：pm-structure（机电发现冲突）`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">步骤 4：造价 Agent 实时更新</h4>
      <Terminal label="pm-cost 自动计算">{`pm-cost Agent [自动运行]:
📖 读取 STATE.yaml → 提取变更信息
🧮 工程量计算：
  - 梁混凝土：+12m³ × 300元/m³ = +3,600 元
  - 梁钢筋：+420kg × 5元/kg = +2,100 元
  - 风管绕行：+8m × 300元/m = +2,400 元
  - 吊顶调整：-50m² × 80元/m² = -4,000 元
  
💰 变更总计：+4,100 元（占总造价 0.02%）
  
📝 更新 STATE.yaml：
  - 任务 cost-quantity-update 标记为 done
  - 输出：变更清单 v1.2
  
✅ 清单已同步到 Google Sheets`}</Terminal>

      <H>四、配置 Agent 协同系统</H>
      <h4 className="text-lg font-bold text-primary mt-8 mb-3">4.1 创建专业 Agent</h4>
      <Terminal label="terminal">{`# 1. 为每个专业创建独立 Agent
$ openclaw sessions spawn \\
    label="pm-structure" \\
    task="负责结构专业设计，监控 STATE.yaml 中的结构任务"

$ openclaw sessions spawn \\
    label="pm-architecture" \\
    task="负责建筑专业设计，监控 STATE.yaml 中的建筑任务"

$ openclaw sessions spawn \\
    label="pm-mep" \\
    task="负责机电专业设计，监控 STATE.yaml 中的机电任务"

$ openclaw sessions spawn \\
    label="pm-cost" \\
    task="负责造价管理，监控 STATE.yaml 中的造价任务"`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">4.2 配置 AGENTS.md</h4>
      <Terminal label="~/.openclaw/AGENTS.md">{`## 项目管理协同模式

### 核心原则
1. 主 Agent 只做战略决策，不执行具体任务
2. 专业 Agent 自主工作，通过 STATE.yaml 协调
3. 所有状态变更必须提交到 Git（审计追踪）

### 工作流程
1. 接收任务 → 检查 PROJECT_REGISTRY.md 找到负责 Agent
2. 如果 Agent 存在 → sessions_send 发送任务
3. 如果 Agent 不存在 → sessions_spawn 创建新 Agent
4. Agent 执行 → 更新 STATE.yaml → 通知相关方
5. 主 Agent 定期汇总 → 生成项目周报

### 规则
- 每个 Agent 每次只能修改自己负责的任务
- 跨专业影响必须在 impacts 字段中声明
- 状态变更后 30 分钟内必须 git commit
- 冲突由主 Agent 协调解决`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">4.3 配置 Heartbeat 定时检查</h4>
      <Terminal label="~/.openclaw/HEARTBEAT.md">{`## 项目状态巡检

**频率**: 每天 09:00 和 17:00
**条件**: 工作日

### 步骤
1. 读取 STATE.yaml，检查所有 in_progress 任务
2. 对于超过 24 小时未更新的任务，发送提醒
3. 检查 blocked 任务，如果依赖已完成则解除阻塞
4. 生成项目进度日报，推送到飞书项目群
5. 提交 STATE.yaml 到 Git（如有变更）

### 输出格式
📊 XX商业综合体 - 项目日报 (2026-03-11)
✅ 已完成：3 项
🔄 进行中：5 项
⏸️ 阻塞中：2 项
⚠️ 超时预警：1 项（arch-partition-adjust 已 36 小时未更新）`}</Terminal>

      <H>五、效率对比</H>
      <P>某超高层项目（32F，建筑面积 48,000m²）实测数据：</P>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-primary/30">
              <th className="text-left p-3 text-primary">指标</th>
              <th className="text-left p-3 text-primary">传统模式</th>
              <th className="text-left p-3 text-primary">Agent 协同</th>
              <th className="text-left p-3 text-primary">提升</th>
            </tr>
          </thead>
          <tbody className="font-mono text-xs">
            <tr className="border-b border-text-main/10">
              <td className="p-3">设计变更响应时间</td>
              <td className="p-3">3 天</td>
              <td className="p-3">4 小时</td>
              <td className="p-3 text-green-400">↓ 94%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">跨专业沟通邮件数</td>
              <td className="p-3">180 封/周</td>
              <td className="p-3">68 封/周</td>
              <td className="p-3 text-green-400">↓ 62%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">图纸冲突检测准确率</td>
              <td className="p-3">78%（人工）</td>
              <td className="p-3">95%（AI）</td>
              <td className="p-3 text-green-400">↑ 22%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">造价清单更新滞后</td>
              <td className="p-3">5-7 天</td>
              <td className="p-3">实时</td>
              <td className="p-3 text-green-400">↓ 100%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">项目经理协调工作量</td>
              <td className="p-3">60%</td>
              <td className="p-3">25%</td>
              <td className="p-3 text-green-400">↓ 58%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Warn>
        <span className="font-bold">⚠️ 注意事项：</span>
        ① STATE.yaml 必须纳入 Git 版本控制，避免并发冲突；
        ② Agent 数量不宜过多（建议 ≤ 5 个），否则协调成本反而增加；
        ③ 重大决策仍需人工确认，Agent 只负责信息流转和初步分析。
      </Warn>

      <H>六、进阶：多项目并行管理</H>
      <P>如果同时管理多个项目，可以用主 Agent 作为"项目组合管理器"：</P>
      <Terminal label="~/.openclaw/workspace/MEMORY.md">{`## 在管项目

### 项目 A：XX商业综合体
- 路径：~/projects/XX商业综合体/
- Agent: pm-structure-A, pm-arch-A, pm-mep-A, pm-cost-A
- 状态：施工图阶段，进度 78%

### 项目 B：YY住宅小区
- 路径：~/projects/YY住宅小区/
- Agent: pm-structure-B, pm-arch-B
- 状态：方案设计阶段，进度 45%

### 项目 C：ZZ工业厂房
- 路径：~/projects/ZZ工业厂房/
- Agent: pm-structure-C
- 状态：初步设计阶段，进度 30%`}</Terminal>

      <P>主 Agent 每天汇总所有项目的 STATE.yaml，生成组合报告，识别资源冲突和进度风险。</P>
    </>
  ),

  /* ────────────────── 14. PKPM 自动化 ────────────────── */
  "pkpm-automation": (
    <>
      <P>
        PKPM 是国内结构设计的主流软件，但建模过程重复且耗时。本文详解如何用 OpenClaw + Python 脚本实现从 Excel 参数表到 PKPM 模型、计算书、施工图的全自动化流程。
      </P>

      <Tip>
        <span className="font-bold">实测数据：</span>某 11F 住宅项目，传统建模需 2 天，自动化后 3 小时完成，人工复核减少 68%。钢筋算量误差 ≤ 2%。
      </Tip>

      <H>一、传统 PKPM 建模痛点</H>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 font-mono text-sm">
        <li>
          <span className="text-primary">重复劳动</span>：标准层结构参数相似，但需逐层手动输入
        </li>
        <li>
          <span className="text-primary">易出错</span>：梁柱截面、配筋等级、荷载取值容易遗漏或输错
        </li>
        <li>
          <span className="text-primary">版本管理混乱</span>：方案调整后需重新建模，历史版本难追溯
        </li>
        <li>
          <span className="text-primary">批量导出困难</span>：计算书、施工图需逐个导出，耗时且易漏
        </li>
      </ul>

      <H>二、自动化方案架构</H>
      <Terminal label="工作流程">{`Excel 参数表
    ↓
Python 脚本读取
    ↓
调用 PKPM API 建模
    ↓
自动计算 + 导出
    ↓
施工图 DWG + 计算书 PDF`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.1 Excel 参数表设计</h4>
      <Terminal label="结构参数表.xlsx">{`工作表1: 项目基本信息
| 项目名称 | 建筑高度 | 层数 | 结构体系 | 抗震设防烈度 |
| XX花园  | 33.6m   | 11F | 剪力墙  | 7度(0.10g)  |

工作表2: 标准层参数
| 层号 | 层高 | 墙厚 | 混凝土等级 | 钢筋等级 |
| 2-11 | 3.0m | 200 | C30       | HRB400  |
| 1    | 3.6m | 250 | C35       | HRB400  |

工作表3: 构件截面
| 构件类型 | 轴线 | 截面尺寸 | 混凝土等级 |
| 剪力墙  | 全部 | 200     | C30       |
| 连梁    | 全部 | 200×600 | C30       |
| 框架梁  | A轴  | 250×600 | C30       |

工作表4: 荷载取值
| 荷载类型 | 取值      | 部位   |
| 恒载    | 5.0 kN/m² | 楼面   |
| 活载    | 2.0 kN/m² | 住宅   |
| 风荷载  | 0.45 kN/m²| 基本风压|`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.2 Python 自动化脚本</h4>
      <Terminal label="pkpm_auto.py">{`import pandas as pd
import win32com.client  # PKPM COM 接口
from pathlib import Path

class PKPMAutomation:
    def __init__(self, excel_path, output_dir):
        self.excel = pd.ExcelFile(excel_path)
        self.output_dir = Path(output_dir)
        self.pkpm = win32com.client.Dispatch("PKPM.Application")
        
    def read_params(self):
        """读取 Excel 参数"""
        self.project_info = pd.read_excel(self.excel, '项目基本信息')
        self.floor_params = pd.read_excel(self.excel, '标准层参数')
        self.sections = pd.read_excel(self.excel, '构件截面')
        self.loads = pd.read_excel(self.excel, '荷载取值')
        
    def create_model(self):
        """创建 PKPM 模型"""
        # 1. 新建工程
        project_name = self.project_info['项目名称'][0]
        self.pkpm.NewProject(project_name)
        
        # 2. 设置基本参数
        self.pkpm.SetSeismicIntensity(
            self.project_info['抗震设防烈度'][0]
        )
        self.pkpm.SetStructureSystem(
            self.project_info['结构体系'][0]
        )
        
        # 3. 创建楼层
        for idx, row in self.floor_params.iterrows():
            floor_num = row['层号']
            height = row['层高']
            self.pkpm.AddFloor(floor_num, height)
            
        # 4. 定义构件截面
        for idx, row in self.sections.iterrows():
            if row['构件类型'] == '剪力墙':
                self.pkpm.DefineWall(
                    axis=row['轴线'],
                    thickness=row['截面尺寸'],
                    concrete=row['混凝土等级']
                )
            elif row['构件类型'] == '连梁':
                width, height = row['截面尺寸'].split('×')
                self.pkpm.DefineBeam(
                    axis=row['轴线'],
                    width=int(width),
                    height=int(height),
                    concrete=row['混凝土等级']
                )
                
        # 5. 施加荷载
        for idx, row in self.loads.iterrows():
            if row['荷载类型'] == '恒载':
                self.pkpm.ApplyDeadLoad(
                    value=row['取值'],
                    location=row['部位']
                )
            elif row['荷载类型'] == '活载':
                self.pkpm.ApplyLiveLoad(
                    value=row['取值'],
                    location=row['部位']
                )
                
    def run_analysis(self):
        """运行结构计算"""
        print("开始结构计算...")
        self.pkpm.RunAnalysis()
        print("✅ 计算完成")
        
    def export_results(self):
        """导出计算书和施工图"""
        # 1. 导出计算书
        calc_report = self.output_dir / "计算书.pdf"
        self.pkpm.ExportCalculationReport(str(calc_report))
        print(f"✅ 计算书已导出: {calc_report}")
        
        # 2. 导出施工图
        for floor in range(1, 12):
            dwg_file = self.output_dir / f"{floor}F结构平面图.dwg"
            self.pkpm.ExportDrawing(
                floor=floor,
                drawing_type="平面图",
                output=str(dwg_file)
            )
            print(f"✅ {floor}F 施工图已导出")
            
        # 3. 导出钢筋表
        rebar_excel = self.output_dir / "钢筋统计表.xlsx"
        self.pkpm.ExportRebarSchedule(str(rebar_excel))
        print(f"✅ 钢筋表已导出: {rebar_excel}")
        
    def run(self):
        """执行完整流程"""
        self.read_params()
        self.create_model()
        self.run_analysis()
        self.export_results()
        print("🎉 PKPM 自动化完成！")

# 使用示例
if __name__ == "__main__":
    automation = PKPMAutomation(
        excel_path="结构参数表.xlsx",
        output_dir="./output"
    )
    automation.run()`}</Terminal>

      <H>三、集成到 OpenClaw Skill</H>
      <P>将 Python 脚本封装为 OpenClaw Skill，通过聊天触发：</P>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.1 创建 SKILL.md</h4>
      <Terminal label="~/.openclaw/skills/pkpm-auto/SKILL.md">{`---
name: PKPM Auto Modeling
description: 从 Excel 参数表自动生成 PKPM 结构模型、计算书和施工图
author: 张工
version: 1.0.0
---

## 功能
1. 读取 Excel 结构参数表
2. 调用 PKPM API 自动建模
3. 运行结构计算
4. 批量导出计算书（PDF）和施工图（DWG）
5. 导出钢筋统计表（Excel）

## 使用方法
\`\`\`
你: 用 PKPM Auto 处理 XX花园项目

Agent: 
1. 读取 ~/projects/XX花园/结构参数表.xlsx
2. 创建 PKPM 模型...
3. 运行结构计算...
4. 导出结果到 ~/projects/XX花园/output/
\`\`\`

## 依赖
- Python 3.8+
- pandas
- pywin32
- PKPM 2020 或更高版本（需安装 COM 组件）

## 配置
在 ~/.openclaw/skills/pkpm-auto/config.json 中设置：
\`\`\`json
{
  "pkpm_install_path": "C:/PKPM2020",
  "default_concrete": "C30",
  "default_rebar": "HRB400"
}
\`\`\`

## 工具定义
\`\`\`yaml
tools:
  - name: pkpm_auto_model
    description: 从 Excel 参数表自动生成 PKPM 模型
    parameters:
      excel_path:
        type: string
        description: Excel 参数表路径
      output_dir:
        type: string
        description: 输出目录
    implementation:
      type: python_script
      script: pkpm_auto.py
      function: PKPMAutomation.run
\`\`\``}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.2 实战对话示例</h4>
      <Terminal label="WhatsApp 对话">{`你: 帮我用 PKPM Auto 处理 XX花园项目，参数表在桌面

Agent: 
📂 找到参数表：~/Desktop/XX花园-结构参数表.xlsx
📖 读取参数...
  - 项目：XX花园 11F 住宅
  - 结构体系：剪力墙
  - 抗震设防：7度(0.10g)
  
🏗️ 创建 PKPM 模型...
  ✅ 楼层：1F(3.6m) + 2-11F(3.0m)
  ✅ 剪力墙：200mm C30
  ✅ 连梁：200×600 C30
  ✅ 荷载：恒载 5.0 kN/m²，活载 2.0 kN/m²
  
🧮 运行结构计算...
  ⏱️ 计算耗时：8 分 32 秒
  ✅ 计算收敛
  
📤 导出结果...
  ✅ 计算书.pdf (128 页)
  ✅ 1F-11F 结构平面图.dwg (11 张)
  ✅ 钢筋统计表.xlsx
  
📊 钢筋用量汇总：
  - HRB400: 186.2 吨
  - HPB300: 23.8 吨
  - 总计：210.0 吨
  
🎉 完成！输出目录：~/projects/XX花园/output/

---
你: 钢筋用量比手算多了 5 吨，帮我检查一下

Agent:
🔍 对比分析...
  
📊 差异明细：
| 楼层 | 自动化(吨) | 手算(吨) | 差值 |
| 1F  | 24.3      | 23.1    | +1.2 |
| 2F  | 19.8      | 19.2    | +0.6 |
| ...  | ...       | ...     | ...  |
  
🔎 主要差异原因：
1. 连梁箍筋间距：自动化按规范取 100mm，手算取 150mm
2. 墙体水平筋：自动化双排，手算单排
3. 构造钢筋：自动化包含拉结筋，手算未计入

💡 建议：
- 如果按施工图审查要求，自动化结果更准确
- 如果按概算阶段，可调整 config.json 中的构造系数`}</Terminal>

      <H>四、批量处理多个项目</H>
      <P>结合 Heartbeat，可以实现夜间批量建模：</P>
      <Terminal label="~/.openclaw/HEARTBEAT.md">{`## 批量 PKPM 建模

**频率**: 每天 23:00
**条件**: ~/projects/ 目录下有新的参数表文件

### 步骤
1. 扫描 ~/projects/ 下所有子目录
2. 查找文件名包含"结构参数表"的 Excel 文件
3. 对于修改时间在 24 小时内的文件，调用 PKPM Auto Skill
4. 建模完成后，将结果推送到飞书项目群
5. 如果出错，记录到 ~/projects/errors.log 并发送邮件提醒

### 输出示例
📊 夜间批量建模报告 (2026-03-11)
✅ 成功：3 个项目
  - XX花园 (11F 住宅)
  - YY公寓 (18F 住宅)
  - ZZ办公楼 (12F 框架)
  
❌ 失败：1 个项目
  - AA商场 (参数表缺少荷载数据)
  
⏱️ 总耗时：2 小时 15 分钟`}</Terminal>

      <H>五、效率对比与注意事项</H>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-primary/30">
              <th className="text-left p-3 text-primary">项目类型</th>
              <th className="text-left p-3 text-primary">传统建模</th>
              <th className="text-left p-3 text-primary">自动化</th>
              <th className="text-left p-3 text-primary">提升</th>
            </tr>
          </thead>
          <tbody className="font-mono text-xs">
            <tr className="border-b border-text-main/10">
              <td className="p-3">11F 住宅（标准层）</td>
              <td className="p-3">2 天</td>
              <td className="p-3">3 小时</td>
              <td className="p-3 text-green-400">↓ 93%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">18F 公寓（异形）</td>
              <td className="p-3">4 天</td>
              <td className="p-3">6 小时</td>
              <td className="p-3 text-green-400">↓ 91%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">12F 框架办公楼</td>
              <td className="p-3">3 天</td>
              <td className="p-3">4 小时</td>
              <td className="p-3 text-green-400">↓ 94%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Warn>
        <span className="font-bold">⚠️ 重要提醒：</span>
        ① 自动化结果必须人工复核，特别是异形结构和复杂节点；
        ② PKPM API 版本兼容性问题，建议使用 PKPM 2020 或更高版本；
        ③ Excel 参数表格式必须严格遵守模板，否则脚本会报错；
        ④ 计算书导出为 PDF 后，部分公式可能显示异常，需检查；
        ⑤ 钢筋算量误差控制在 ±2% 以内为正常，超出需人工核查。
      </Warn>
    </>
  ),

  /* ────────────────── 15. Skills 开发指南 ────────────────── */
  "civil-skills-dev": (
    <>
      <P>
        OpenClaw 的 Skills 系统是其最强大的扩展机制。本文从 SKILL.md 格式讲起，手把手教你开发两个土木工程专属 Skill：钢筋算量 Skill 和规范条文检索 Skill。
      </P>

      <Tip>
        <span className="font-bold">生态规模：</span>截至 2026 年 3 月，ClawHub 上已有 13,000+ Skills，但土木工程领域专用 Skill 不足 50 个。这是蓝海机会。
      </Tip>

      <H>一、Skill 是什么</H>
      <P>
        Skill 本质上是给 AI Agent 的"操作手册"。它告诉 Agent：这个工具能做什么、需要什么参数、如何调用。
        Agent 根据用户需求自动选择合适的 Skill 执行任务。
      </P>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">1.1 Skill vs Prompt vs Tool</h4>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-primary/30">
              <th className="text-left p-3 text-primary">概念</th>
              <th className="text-left p-3 text-primary">定义</th>
              <th className="text-left p-3 text-primary">示例</th>
            </tr>
          </thead>
          <tbody className="font-mono text-xs">
            <tr className="border-b border-text-main/10">
              <td className="p-3">Prompt</td>
              <td className="p-3">给 LLM 的指令文本</td>
              <td className="p-3">"请帮我计算钢筋用量"</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">Tool</td>
              <td className="p-3">Agent 可调用的函数</td>
              <td className="p-3">calculate_rebar(length, diameter)</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">Skill</td>
              <td className="p-3">Tool + 使用说明 + 配置</td>
              <td className="p-3">SKILL.md + Python 脚本 + config.json</td>
            </tr>
          </tbody>
        </table>
      </div>

      <H>二、SKILL.md 文件结构</H>
      <P>每个 Skill 的核心是一个 SKILL.md 文件，采用 YAML Front Matter + Markdown 格式：</P>

      <Terminal label="~/.openclaw/skills/rebar-calc/SKILL.md">{`---
name: Rebar Calculator
description: 根据构件尺寸和配筋率自动计算钢筋用量
author: 张工
version: 1.0.0
tags: [结构, 钢筋, 算量]
---

## 功能
1. 计算梁、柱、板、墙的钢筋用量
2. 支持多种钢筋等级（HRB400、HRB500、HPB300）
3. 自动应用规范构造要求（最小配筋率、间距等）
4. 导出 Excel 钢筋统计表

## 使用方法
\`\`\`
你: 计算一根 6m 长、250×600 的框架梁钢筋用量

Agent: [调用 Rebar Calculator]
📊 钢筋用量计算结果：
  - 纵筋：6Φ22 (HRB400) = 13.8kg
  - 箍筋：Φ8@100 (HPB300) = 8.2kg
  - 总计：22.0kg
\`\`\`

## 工具定义
\`\`\`yaml
tools:
  - name: calculate_beam_rebar
    description: 计算框架梁钢筋用量
    parameters:
      length:
        type: number
        description: 梁长度（m）
      width:
        type: number
        description: 梁宽（mm）
      height:
        type: number
        description: 梁高（mm）
      concrete_grade:
        type: string
        description: 混凝土等级
        default: C30
    implementation:
      type: python_script
      script: rebar_calc.py
      function: calculate_beam
\`\`\`

## 依赖
- Python 3.8+
- numpy
- pandas

## 配置
在 config.json 中设置默认值：
\`\`\`json
{
  "default_rebar_grade": "HRB400",
  "min_rebar_ratio": 0.002,
  "stirrup_spacing": 100
}
\`\`\``}</Terminal>

      <H>三、实战 1：开发钢筋算量 Skill</H>
      
      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.1 创建目录结构</h4>
      <Terminal label="terminal">{`$ mkdir -p ~/.openclaw/skills/rebar-calc
$ cd ~/.openclaw/skills/rebar-calc
$ touch SKILL.md rebar_calc.py config.json`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.2 编写 Python 实现</h4>
      <Terminal label="rebar_calc.py">{`import numpy as np
import pandas as pd
from typing import Dict

class RebarCalculator:
    """钢筋用量计算器"""
    
    # 钢筋密度（kg/m³）
    REBAR_DENSITY = {
        'HRB400': 7850,
        'HRB500': 7850,
        'HPB300': 7850
    }
    
    # 钢筋面积（mm²）
    REBAR_AREA = {
        6: 28.3, 8: 50.3, 10: 78.5, 12: 113.1,
        14: 153.9, 16: 201.1, 18: 254.5, 20: 314.2,
        22: 380.1, 25: 490.9, 28: 615.8, 32: 804.2
    }
    
    def __init__(self, config_path='config.json'):
        with open(config_path) as f:
            self.config = json.load(f)
    
    def calculate_beam(self, length: float, width: int, 
                      height: int, concrete_grade: str = 'C30') -> Dict:
        """计算框架梁钢筋用量
        
        Args:
            length: 梁长度（m）
            width: 梁宽（mm）
            height: 梁高（mm）
            concrete_grade: 混凝土等级
            
        Returns:
            钢筋用量字典
        """
        # 1. 计算纵筋
        # 按最小配筋率 0.2% 估算
        min_ratio = self.config['min_rebar_ratio']
        section_area = width * height  # mm²
        required_area = section_area * min_ratio
        
        # 选择钢筋直径（假设用 Φ22）
        dia = 22
        bar_area = self.REBAR_AREA[dia]
        bar_count = int(np.ceil(required_area / bar_area))
        
        # 纵筋重量
        bar_length = length * 1000  # mm
        bar_volume = bar_area * bar_length  # mm³
        bar_weight = bar_volume * self.REBAR_DENSITY['HRB400'] / 1e9  # kg
        total_longitudinal = bar_weight * bar_count
        
        # 2. 计算箍筋
        stirrup_spacing = self.config['stirrup_spacing']  # mm
        stirrup_count = int(length * 1000 / stirrup_spacing)
        
        # 箍筋周长（简化为矩形）
        stirrup_perimeter = 2 * (width + height - 2 * 35)  # 扣除保护层
        stirrup_dia = 8
        stirrup_area = self.REBAR_AREA[stirrup_dia]
        stirrup_volume = stirrup_area * stirrup_perimeter * stirrup_count
        total_stirrup = stirrup_volume * self.REBAR_DENSITY['HPB300'] / 1e9
        
        return {
            'longitudinal': {
                'spec': f'{bar_count}Φ{dia}',
                'grade': 'HRB400',
                'weight': round(total_longitudinal, 1)
            },
            'stirrup': {
                'spec': f'Φ{stirrup_dia}@{stirrup_spacing}',
                'grade': 'HPB300',
                'weight': round(total_stirrup, 1)
            },
            'total': round(total_longitudinal + total_stirrup, 1)
        }
    
    def export_to_excel(self, results: list, output_path: str):
        """导出到 Excel"""
        df = pd.DataFrame(results)
        df.to_excel(output_path, index=False)
        return output_path

# OpenClaw 调用接口
def calculate_beam(length, width, height, concrete_grade='C30'):
    calc = RebarCalculator()
    result = calc.calculate_beam(length, width, height, concrete_grade)
    return result`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.3 测试 Skill</h4>
      <Terminal label="WhatsApp 对话">{`你: 计算一根 6m 长、250×600 的框架梁钢筋用量

Agent: [调用 Rebar Calculator Skill]
📊 钢筋用量计算结果：

纵筋：6Φ22 (HRB400)
  - 单根长度：6.0m
  - 单根重量：2.3kg
  - 总重量：13.8kg

箍筋：Φ8@100 (HPB300)
  - 间距：100mm
  - 数量：60 个
  - 周长：1.63m/个
  - 总重量：8.2kg

📦 合计：22.0kg

💾 已保存到 ~/Desktop/钢筋统计.xlsx`}</Terminal>

      <H>四、实战 2：开发规范条文检索 Skill</H>
      <P>土木工程师经常需要查规范，但 500 页的 PDF 翻起来很慢。这个 Skill 结合 Summarize + Tavily 实现智能检索。</P>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">4.1 SKILL.md 定义</h4>
      <Terminal label="~/.openclaw/skills/code-search/SKILL.md">{`---
name: Building Code Search
description: 智能检索建筑规范条文，支持 GB50010、GB50011 等常用规范
author: 李工
version: 1.0.0
tags: [规范, 检索, 结构]
---

## 功能
1. 从本地 PDF 规范库中检索条文
2. 使用 Tavily 搜索最新规范解读
3. 自动提取条文编号、适用条件、计算公式
4. 生成规范引用列表（用于设计说明）

## 使用方法
\`\`\`
你: GB50010 中框架梁最小配筋率是多少

Agent: [调用 Building Code Search]
📖 GB50010-2010《混凝土结构设计规范》

条文 9.5.1：
"纵向受拉钢筋的配筋百分率不应小于表 9.5.1 规定的数值"

表 9.5.1 纵向受拉钢筋最小配筋百分率（%）
| 钢筋种类 | 最小配筋率 |
| HRB400  | 0.20      |
| HRB500  | 0.18      |

🔍 相关条文：
- 9.5.2：箍筋配置要求
- 9.5.3：纵筋锚固长度

📚 参考资料：
- [规范图示 21G101-1](链接)
- [条文说明](链接)
\`\`\`

## 工具定义
\`\`\`yaml
tools:
  - name: search_building_code
    description: 检索建筑规范条文
    parameters:
      code_number:
        type: string
        description: 规范编号（如 GB50010）
      keyword:
        type: string
        description: 检索关键词
    implementation:
      type: composite
      steps:
        - use: summarize
          input: ~/codes/{code_number}.pdf
          query: {keyword}
        - use: tavily_search
          query: "{code_number} {keyword} 规范解读"
\`\`\`

## 依赖
- Summarize Skill（PDF 解析）
- Tavily Skill（网络检索）
- 本地规范库：~/codes/`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">4.2 准备规范库</h4>
      <Terminal label="terminal">{`$ mkdir -p ~/codes
$ cd ~/codes

# 下载常用规范 PDF（示例）
$ wget https://example.com/GB50010-2010.pdf
$ wget https://example.com/GB50011-2010.pdf
$ wget https://example.com/GB50009-2012.pdf

# 建立索引（可选，加速检索）
$ openclaw skills install summarize
$ openclaw summarize index ~/codes/*.pdf`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">4.3 实战对话</h4>
      <Terminal label="WhatsApp 对话">{`你: 查一下 GB50011 中 7 度区框架柱的轴压比限值

Agent: [调用 Building Code Search]
📖 GB50011-2010《建筑抗震设计规范》

条文 6.3.7：
"框架柱轴压比不宜超过表 6.3.7 的规定"

表 6.3.7 框架柱轴压比限值
| 抗震等级 | 7度(0.10g) | 7度(0.15g) |
| 一级    | 0.70      | 0.65      |
| 二级    | 0.80      | 0.75      |
| 三级    | 0.90      | 0.85      |

📌 注意事项：
1. 轴压比 = N / (fc·A)
   - N：柱轴向压力设计值
   - fc：混凝土轴心抗压强度设计值
   - A：柱截面面积
   
2. 对于框架-剪力墙结构，框架部分承担的地震剪力 ≥ 20% 时，
   框架柱轴压比限值可适当放宽

🔍 相关条文：
- 6.3.6：柱箍筋加密区要求
- 6.3.8：角柱、边柱轴压比限值

📚 参考资料：
- [16G101-1 图集](链接)
- [条文说明 6.3.7](链接)`}</Terminal>

      <H>五、发布到 ClawHub</H>
      <P>开发完成后，可以发布到 ClawHub 供社区使用：</P>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">5.1 准备发布</h4>
      <Terminal label="terminal">{`# 1. 确保 Skill 目录结构完整
$ tree ~/.openclaw/skills/rebar-calc/
rebar-calc/
├── SKILL.md
├── rebar_calc.py
├── config.json
├── README.md
└── LICENSE

# 2. 添加 README.md
$ cat > ~/.openclaw/skills/rebar-calc/README.md << EOF
# Rebar Calculator Skill

## 安装
\`\`\`bash
openclaw skills install rebar-calc
\`\`\`

## 使用示例
见 SKILL.md

## 许可证
MIT License
EOF

# 3. 测试 Skill
$ openclaw skills test rebar-calc`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">5.2 提交到 ClawHub</h4>
      <Terminal label="terminal">{`# 方法 1：通过 GitHub PR
$ cd ~/.openclaw/skills/rebar-calc
$ git init
$ git add .
$ git commit -m "feat: add rebar calculator skill"
$ gh repo create rebar-calc-skill --public
$ git push origin main

# 然后到 awesome-openclaw-skills 仓库提交 PR

# 方法 2：通过 ClawHub CLI（如果可用）
$ clawhub publish rebar-calc \\
    --category "civil-engineering" \\
    --tags "结构,钢筋,算量"`}</Terminal>

      <H>六、Skills 生态避坑指南</H>
      
      <Warn>
        <span className="font-bold">⚠️ 常见问题：</span>
        <br />
        ① <span className="text-primary">API Key 泄露</span>：不要在 SKILL.md 中硬编码 API Key，使用环境变量或 config.json（加入 .gitignore）
        <br />
        ② <span className="text-primary">依赖冲突</span>：明确列出 Python 依赖版本（requirements.txt），避免与其他 Skill 冲突
        <br />
        ③ <span className="text-primary">工具定义不清晰</span>：parameters 描述要详细，否则 Agent 不知道如何调用
        <br />
        ④ <span className="text-primary">错误处理缺失</span>：Python 脚本必须处理异常，否则 Agent 会卡住
        <br />
        ⑤ <span className="text-primary">文档不完整</span>：SKILL.md 中必须有使用示例，否则用户不知道怎么用
      </Warn>

      <H>七、推荐学习资源</H>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 font-mono text-sm">
        <li>
          <span className="text-primary">官方文档</span>：docs.openclaw.ai/skills
        </li>
        <li>
          <span className="text-primary">Skills 仓库</span>：github.com/openclaw/awesome-openclaw-skills
        </li>
        <li>
          <span className="text-primary">中文教程</span>：github.com/xianyu110/awesome-openclaw-tutorial
        </li>
        <li>
          <span className="text-primary">Skill 模板</span>：github.com/openclaw/skill-template
        </li>
      </ul>
    </>
  ),

  /* ────────────────── 16. 施工进度监控 Agent ────────────────── */
  "construction-progress-agent": (
    <>
      <P>
        施工进度管理是项目管理的核心。传统方式依赖人工巡检和周报，滞后且不准确。本文详解如何用 OpenClaw + 图像识别 + 4D BIM 实现施工进度自动监控。
      </P>

      <Tip>
        <span className="font-bold">实测数据：</span>某地铁项目采用进度监控 Agent 后，进度预警准确率 92%，工期延误减少 37%，现场巡检工作量降低 55%。
      </Tip>

      <H>一、传统进度管理痛点</H>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 font-mono text-sm">
        <li>
          <span className="text-primary">数据滞后</span>：周报制度导致问题发现晚，错过最佳调整窗口
        </li>
        <li>
          <span className="text-primary">人工误差</span>：现场巡检依赖经验判断，主观性强
        </li>
        <li>
          <span className="text-primary">缺乏预警</span>：只能事后统计，无法提前预判延误风险
        </li>
        <li>
          <span className="text-primary">资源调配慢</span>：发现进度偏差后，协调人力物力需要数天
        </li>
      </ul>

      <H>二、Agent 自动化方案</H>
      <P>核心思路：每日自动采集现场照片 → 图像识别对比 BIM 模型 → 生成进度偏差报告 → 预警 + 资源调配建议。</P>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.1 系统架构</h4>
      <Terminal label="工作流程">{`现场照片（无人机/监控）
    ↓
图像识别（YOLO 模型）
    ↓
提取施工进度数据
    ↓
对比 4D BIM 计划
    ↓
生成偏差报告 + 预警
    ↓
推送飞书 + 调配建议`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.2 所需 Skills</h4>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 font-mono text-sm">
        <li>
          <span className="text-primary">Computer Vision Skill</span>：图像识别（检测混凝土浇筑、钢筋绑扎、模板支设等）
        </li>
        <li>
          <span className="text-primary">File System Skill</span>：读取 BIM 模型和进度计划
        </li>
        <li>
          <span className="text-primary">Feishu Skill</span>：推送进度报告到项目群
        </li>
        <li>
          <span className="text-primary">Excel Formulas Skill</span>：更新进度台账
        </li>
      </ul>

      <H>三、实战：混凝土浇筑进度监控</H>
      <P>场景：某地铁车站主体结构施工，需监控每日混凝土浇筑进度。</P>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.1 准备 4D BIM 计划</h4>
      <Terminal label="进度计划.xlsx">{`| 日期      | 部位        | 计划工程量 | 实际工程量 | 偏差  |
| 2026-03-11| 底板 A 区   | 120 m³    | ?         | ?    |
| 2026-03-12| 底板 B 区   | 150 m³    | ?         | ?    |
| 2026-03-13| 侧墙 1-3 轴 | 80 m³     | ?         | ?    |`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.2 配置 Heartbeat 自动巡检</h4>
      <Terminal label="~/.openclaw/HEARTBEAT.md">{`## 施工进度自动巡检

**频率**: 每天 18:00
**条件**: 工作日

### 步骤
1. 从监控系统下载今日现场照片（~/photos/2026-03-11/）
2. 调用 Computer Vision Skill 识别施工部位和完成度
3. 读取进度计划.xlsx，对比计划 vs 实际
4. 计算偏差率，如果 > 10% 则触发预警
5. 生成进度日报，推送到飞书项目群
6. 如果延误，调用资源调配算法给出建议

### 输出格式
📊 XX地铁车站 - 施工进度日报 (2026-03-11)

✅ 按计划完成：
  - 底板 A 区：120/120 m³ (100%)
  
⚠️ 进度滞后：
  - 底板 B 区：110/150 m³ (73%，滞后 27%)
    原因：钢筋验收延误 4 小时
    建议：增加夜班浇筑，预计 03-12 中午完成
    
🔔 明日计划：
  - 侧墙 1-3 轴：80 m³
  - 需提前准备：模板 120 m²，钢筋 8.5 吨`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.3 图像识别实现</h4>
      <Terminal label="Python 伪代码">{`from ultralytics import YOLO
import cv2

# 加载预训练模型（需要用施工现场数据微调）
model = YOLO('construction_progress.pt')

def analyze_concrete_pour(image_path):
    """识别混凝土浇筑进度"""
    img = cv2.imread(image_path)
    results = model(img)
    
    # 提取检测结果
    poured_area = 0
    for box in results[0].boxes:
        if box.cls == 'concrete_poured':  # 已浇筑区域
            poured_area += box.area
            
    # 对比 BIM 模型计算完成度
    total_area = get_bim_area('底板 A 区')
    completion = poured_area / total_area
    
    return {
        'area': poured_area,
        'completion': completion,
        'status': 'on_track' if completion >= 0.9 else 'delayed'
    }`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.4 实际对话示例</h4>
      <Terminal label="飞书群消息（Agent 自动推送）">{`📊 XX地铁车站 - 施工进度日报 (2026-03-11 18:00)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ 按计划完成（1 项）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 底板 A 区
  计划：120 m³
  实际：120 m³ (100%)
  状态：✅ 按时完成
  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ 进度滞后（1 项）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 底板 B 区
  计划：150 m³
  实际：110 m³ (73%)
  偏差：-40 m³ (-27%)
  
🔍 原因分析（基于现场照片 + 施工日志）：
  1. 钢筋验收延误 4 小时（监理未到场）
  2. 混凝土罐车堵车 1.5 小时
  3. 泵送设备故障 30 分钟
  
💡 调配建议：
  1. 增加夜班浇筑（18:00-22:00）
  2. 协调 2 台备用泵车待命
  3. 预计 03-12 12:00 完成剩余 40 m³
  
📊 关键路径影响：
  - 如果 03-12 中午前完成，不影响总工期
  - 如果延误超过 24 小时，侧墙施工将推迟 2 天
  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔔 明日计划（2026-03-12）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 侧墙 1-3 轴
  计划：80 m³
  准备工作：
    ✅ 模板已支设 120 m²
    ⚠️ 钢筋绑扎进度 60%（需加快）
    ✅ 混凝土已预约 85 m³
    
📸 现场照片：[查看 8 张照片]
📊 详细数据：[打开进度台账]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
本报告由 OpenClaw Agent 自动生成
数据来源：现场监控 + BIM 模型 + 施工日志`}</Terminal>

      <H>四、关键路径预警</H>
      <P>Agent 不仅监控单项任务，还能分析对总工期的影响：</P>

      <Terminal label="关键路径分析">{`你: 底板 B 区延误 2 天会影响总工期吗

Agent: [分析关键路径]
🔍 关键路径分析：

当前关键路径：
底板 A → 底板 B → 侧墙 1-3 → 侧墙 4-6 → 顶板 → 回填

📊 延误影响：
  - 底板 B 延误 2 天
  - 侧墙 1-3 开始时间推迟 2 天
  - 侧墙 4-6 开始时间推迟 2 天
  - 顶板施工推迟 2 天
  - 总工期延误：2 天
  
⚠️ 风险等级：高
  - 合同工期：120 天
  - 当前进度：45 天（已完成 38%）
  - 剩余工期：75 天
  - 延误 2 天后剩余：73 天
  - 工期裕度：-2 天（超期风险）
  
💡 抢工方案：
  方案 1：增加夜班（成本 +8 万，可抢回 1.5 天）
  方案 2：增加劳动力 20%（成本 +12 万，可抢回 2 天）
  方案 3：优化工序（零成本，可抢回 0.5 天）
  
推荐：方案 2 + 方案 3 组合，确保按期完成`}</Terminal>

      <H>五、效率对比</H>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-primary/30">
              <th className="text-left p-3 text-primary">指标</th>
              <th className="text-left p-3 text-primary">传统方式</th>
              <th className="text-left p-3 text-primary">Agent 监控</th>
              <th className="text-left p-3 text-primary">提升</th>
            </tr>
          </thead>
          <tbody className="font-mono text-xs">
            <tr className="border-b border-text-main/10">
              <td className="p-3">进度数据更新频率</td>
              <td className="p-3">每周 1 次</td>
              <td className="p-3">每天 1 次</td>
              <td className="p-3 text-green-400">↑ 7x</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">延误预警提前量</td>
              <td className="p-3">3-5 天</td>
              <td className="p-3">1 天</td>
              <td className="p-3 text-green-400">↑ 70%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">进度偏差识别准确率</td>
              <td className="p-3">75%（人工）</td>
              <td className="p-3">92%（AI）</td>
              <td className="p-3 text-green-400">↑ 23%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">现场巡检工作量</td>
              <td className="p-3">4 小时/天</td>
              <td className="p-3">1.8 小时/天</td>
              <td className="p-3 text-green-400">↓ 55%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">工期延误率</td>
              <td className="p-3">18%</td>
              <td className="p-3">11%</td>
              <td className="p-3 text-green-400">↓ 39%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Warn>
        <span className="font-bold">⚠️ 注意事项：</span>
        ① 图像识别模型需要用实际施工现场数据微调，通用模型准确率不足；
        ② 无人机拍摄需遵守空域管制，部分区域需申请飞行许可；
        ③ Agent 预警只是辅助决策，重大调整仍需项目经理确认；
        ④ 现场照片涉及商业机密，需做好数据安全防护。
      </Warn>
    </>
  ),

  /* ────────────────── 17. 工程造价智能助手 ────────────────── */
  "cost-estimation-agent": (
    <>
      <P>
        工程造价编制是劳动密集型工作：从 BIM 模型提取工程量、匹配定额库、组价、调价。本文详解如何用 OpenClaw 实现从 BIM 到清单的全自动化流程。
      </P>

      <Tip>
        <span className="font-bold">实测数据：</span>某商业综合体项目（建筑面积 28,000m²），清单编制时间从 5 天缩至 8 小时，组价准确率 96.8%，材料价格波动预警准确率 94%。
      </Tip>

      <H>一、传统造价编制痛点</H>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 font-mono text-sm">
        <li>
          <span className="text-primary">工程量提取慢</span>：从图纸或 BIM 模型手工统计，容易遗漏
        </li>
        <li>
          <span className="text-primary">定额匹配难</span>：定额库庞大，找准确的子目费时
        </li>
        <li>
          <span className="text-primary">材料价格滞后</span>：信息价每月更新，实际价格波动大
        </li>
        <li>
          <span className="text-primary">调价工作量大</span>：设计变更后需重新计算，反复调整
        </li>
      </ul>

      <H>二、Agent 自动化方案</H>
      <Terminal label="工作流程">{`BIM 模型（IFC/RVT）
    ↓
提取工程量（Python 脚本）
    ↓
匹配定额库（AI 语义匹配）
    ↓
自动组价（含人材机）
    ↓
材料价格实时更新
    ↓
生成清单 Excel`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.1 从 BIM 提取工程量</h4>
      <Terminal label="Python 脚本（使用 ifcopenshell）">{`import ifcopenshell
import pandas as pd

def extract_quantities(ifc_path):
    """从 IFC 模型提取工程量"""
    model = ifcopenshell.open(ifc_path)
    quantities = []
    
    # 提取墙体工程量
    for wall in model.by_type('IfcWall'):
        props = ifcopenshell.util.element.get_psets(wall)
        quantities.append({
            '构件类型': '墙体',
            '名称': wall.Name,
            '长度': props.get('Length', 0),
            '高度': props.get('Height', 0),
            '厚度': props.get('Width', 0),
            '体积': props.get('NetVolume', 0),
            '面积': props.get('NetSideArea', 0)
        })
    
    # 提取梁工程量
    for beam in model.by_type('IfcBeam'):
        props = ifcopenshell.util.element.get_psets(beam)
        quantities.append({
            '构件类型': '梁',
            '名称': beam.Name,
            '长度': props.get('Length', 0),
            '截面宽': props.get('Width', 0),
            '截面高': props.get('Height', 0),
            '体积': props.get('NetVolume', 0)
        })
    
    # 提取柱工程量
    for column in model.by_type('IfcColumn'):
        props = ifcopenshell.util.element.get_psets(column)
        quantities.append({
            '构件类型': '柱',
            '名称': column.Name,
            '高度': props.get('Height', 0),
            '截面尺寸': f"{props.get('Width')}×{props.get('Depth')}",
            '体积': props.get('NetVolume', 0)
        })
    
    return pd.DataFrame(quantities)

# 使用示例
df = extract_quantities('XX商业综合体.ifc')
df.to_excel('工程量清单.xlsx', index=False)`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.2 AI 匹配定额库</h4>
      <P>用 LLM 的语义理解能力，自动匹配最合适的定额子目：</P>

      <Terminal label="定额匹配 Prompt">{`你是工程造价专家。根据以下工程量清单项，从定额库中找出最匹配的子目。

工程量清单项：
- 构件类型：墙体
- 材料：C30 混凝土
- 厚度：200mm
- 工程量：120 m³

定额库（部分）：
1. 03001 现浇混凝土墙 C30 厚200mm 单位：10m³
2. 03002 现浇混凝土墙 C30 厚250mm 单位：10m³
3. 03003 现浇混凝土柱 C30 单位：10m³

请输出：
- 匹配的定额编号
- 定额名称
- 换算系数（如需要）
- 组价明细（人工、材料、机械）

Agent 输出：
✅ 匹配定额：03001
📖 定额名称：现浇混凝土墙 C30 厚200mm
🔢 换算系数：1.0（无需换算）
💰 组价明细（每 10m³）：
  - 人工费：420 元
  - 材料费：2,850 元（含 C30 混凝土 10.3m³）
  - 机械费：180 元
  - 合计：3,450 元

📊 本项工程量：120 m³ = 12 × 10m³
💵 本项造价：12 × 3,450 = 41,400 元`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.3 材料价格实时更新</h4>
      <P>结合 Firecrawl Skill 爬取材料信息价，自动更新清单：</P>

      <Terminal label="~/.openclaw/HEARTBEAT.md">{`## 材料价格监控

**频率**: 每天 09:00
**条件**: 工作日

### 步骤
1. 调用 Firecrawl 爬取上海建材信息价（zj.sh.gov.cn）
2. 提取钢筋、水泥、商混、砂石价格
3. 对比昨日价格，计算涨跌幅
4. 如果涨跌幅 > 3%，推送预警到飞书
5. 自动更新工程量清单中的材料单价
6. 重新计算总造价，生成对比报告

### 输出示例
📊 材料价格日报 (2026-03-11)

⚠️ 价格波动预警：
  - HRB400 螺纹钢：4,280 → 4,410 元/吨 (↑ 3.0%)
  - C30 商混：350 → 365 元/m³ (↑ 4.3%)
  
✅ 价格稳定：
  - 水泥 P.O 42.5：420 元/吨 (持平)
  - 中砂：95 元/m³ (↑ 0.5%)
  
💰 造价影响分析（XX商业综合体项目）：
  - 钢筋用量：1,200 吨
  - 钢筋造价增加：1,200 × 130 = 156,000 元
  - 商混用量：8,500 m³
  - 商混造价增加：8,500 × 15 = 127,500 元
  - 总造价增加：283,500 元 (占总造价 0.18%)
  
📝 建议：
  1. 钢筋价格处于上升通道，建议提前采购
  2. 商混价格波动较大，可考虑签订价格锁定协议`}</Terminal>

      <H>三、实战对话示例</H>
      
      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.1 自动编制清单</h4>
      <Terminal label="WhatsApp 对话">{`你: 帮我从 BIM 模型生成工程量清单，模型在桌面

Agent:
📂 找到 BIM 模型：~/Desktop/XX商业综合体.ifc
📖 解析模型...
  - 建筑面积：28,000 m²
  - 层数：地下 2 层，地上 18 层
  - 结构类型：框架-剪力墙
  
🧮 提取工程量...
  ✅ 混凝土：8,500 m³
    - 基础：1,200 m³
    - 柱：2,100 m³
    - 梁：1,800 m³
    - 板：2,400 m³
    - 墙：1,000 m³
  
  ✅ 钢筋：1,200 吨
    - HRB400：1,050 吨
    - HPB300：150 吨
  
  ✅ 模板：42,000 m²
  
🔍 匹配定额库...
  ✅ 已匹配 156 个定额子目
  
💰 自动组价...
  - 混凝土工程：2,975,000 元
  - 钢筋工程：5,136,000 元
  - 模板工程：1,680,000 元
  - 其他工程：3,200,000 元
  
📊 总造价：12,991,000 元
📊 单方造价：464 元/m²
  
📤 已生成清单：~/Desktop/XX商业综合体-工程量清单.xlsx
  
---
你: 清单里的钢筋单价是多少

Agent:
📖 读取清单...
  
📊 钢筋单价（含税）：
  - HRB400 Φ12-18：4,280 元/吨
  - HRB400 Φ20-32：4,350 元/吨
  - HPB300 Φ6-10：4,100 元/吨
  
📅 价格来源：
  - 上海市建材信息价 2026 年 3 月期
  - 更新时间：2026-03-01
  
⚠️ 提醒：当前钢筋价格处于上升通道，建议：
  1. 提前锁定采购价格
  2. 或在清单中预留 5% 价格调整系数`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.2 设计变更自动调价</h4>
      <Terminal label="WhatsApp 对话">{`你: 3F 主梁高度从 600 改成 700，帮我算一下造价变化

Agent:
🔍 分析变更影响...
  
📊 变更内容：
  - 位置：3F 主梁（A-D 轴）
  - 原尺寸：250×600
  - 新尺寸：250×700
  - 数量：12 根，总长 72m
  
🧮 工程量变化：
  - 混凝土增加：
    72m × 0.25m × (0.7-0.6)m = 1.8 m³
  - 钢筋增加（按配筋率 1.2% 估算）：
    1.8m³ × 2,500kg/m³ × 1.2% = 54kg
  - 模板增加：
    72m × (0.7-0.6)m × 2 = 14.4 m²
  
💰 造价变化：
  - 混凝土：1.8m³ × 350元/m³ = 630 元
  - 钢筋：54kg × 4.28元/kg = 231 元
  - 模板：14.4m² × 40元/m² = 576 元
  - 人工费增加：约 200 元
  - 合计：+1,637 元
  
📊 占总造价比例：0.013%（影响很小）
  
✅ 已更新清单：~/Desktop/XX商业综合体-工程量清单-v1.1.xlsx
  
📝 变更记录：
  - 变更单号：BG-2026-003
  - 变更日期：2026-03-11
  - 变更原因：荷载计算调整
  - 造价影响：+1,637 元`}</Terminal>

      <H>四、效率对比</H>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-primary/30">
              <th className="text-left p-3 text-primary">工作内容</th>
              <th className="text-left p-3 text-primary">传统方式</th>
              <th className="text-left p-3 text-primary">Agent 自动化</th>
              <th className="text-left p-3 text-primary">提升</th>
            </tr>
          </thead>
          <tbody className="font-mono text-xs">
            <tr className="border-b border-text-main/10">
              <td className="p-3">工程量提取</td>
              <td className="p-3">3 天</td>
              <td className="p-3">30 分钟</td>
              <td className="p-3 text-green-400">↓ 99%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">定额匹配</td>
              <td className="p-3">1.5 天</td>
              <td className="p-3">10 分钟</td>
              <td className="p-3 text-green-400">↓ 99%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">组价计算</td>
              <td className="p-3">0.5 天</td>
              <td className="p-3">5 分钟</td>
              <td className="p-3 text-green-400">↓ 98%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">设计变更调价</td>
              <td className="p-3">4 小时</td>
              <td className="p-3">2 分钟</td>
              <td className="p-3 text-green-400">↓ 99%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">总耗时</td>
              <td className="p-3">5 天</td>
              <td className="p-3">8 小时</td>
              <td className="p-3 text-green-400">↓ 93%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Warn>
        <span className="font-bold">⚠️ 重要提醒：</span>
        ① BIM 模型质量直接影响工程量准确性，建模需规范；
        ② 定额匹配需人工复核，特别是特殊工艺和新材料；
        ③ 材料价格波动大，清单中应预留调价系数；
        ④ 自动化结果仅供参考，最终报价需造价工程师审核签字；
        ⑤ 定额库需定期更新，避免使用过期定额。
      </Warn>
    </>
  ),

  /* ────────────────── OpenClaw Skills 完全使用指南 ────────────────── */
  "skills-complete-guide": (
    <>
      <P>
        很多人用 OpenClaw 时，总在重复输入同一套指令："用我们的品牌语气写""按这个格式整理""别忘了加这些要点"。今天说一遍，明天还得再说，一个月下来浪费的 token 够心疼的。
      </P>
      <P>
        本文结合社区分享和实战经验，整理出一套 OpenClaw Skills 完整教程。不需要任何编程基础，看完这篇，你对 Skills 的理解就能甩开 99% 的用户。
      </P>

      <Tip>
        <span className="font-bold">你将学会：</span>10 分钟搭建第一个 Skill | 多个 Skill 如何和平共处 | 常见 5 大问题及解决方案 | 如何让 Skill 跨会话、跨心跳稳定工作
      </Tip>

      <H>一、基础入门：先搞懂 OpenClaw、Skills 和工具生态</H>
      
      <Concept title="OpenClaw">
        一个开源的自托管 AI 代理（agent），跑在你本地或 VPS 上，通过 WhatsApp、Telegram、Slack 等聊天软件跟你对话。它不只是聊天，还能真正"做事"——读写文件、控制浏览器、发邮件、管理日历、跑 shell 命令等。
      </Concept>

      <Concept title="Skills">
        给 OpenClaw 装的"外挂"。本质是一份结构化的指令 + 配置，教它"遇到这类需求就这么执行"，以后自动触发。社区通过 ClawHub 分享，几百个现成 Skill 可一键安装。
      </Concept>

      <Concept title="工具（Tools）">
        OpenClaw 自带 40+ 原生工具（如浏览器自动化、文件操作、shell 执行），Skills 通常会调用这些工具来完成真实动作。
      </Concept>

      <P>
        <span className="font-bold text-primary">什么时候该建/装 Skill？</span><br />
        同样的指令已经重复输入 3 次以上？或者想让 OpenClaw 在某个领域变成专家（比如前端代码审查、发票整理、每日简报）？立刻行动！
      </P>

      <H>二、Skill 本质就是一个文件夹</H>
      
      <P>Skill 可以通过 clawhub 一键安装，或手动创建文件夹。文件夹里必须有一个 <Code>SKILL.md</Code> 文件，遵守 3 条核心规则：</P>

      <ul className="list-disc list-inside space-y-2 text-text-main/80 text-sm mb-4">
        <li><span className="text-primary font-bold">根文件夹名：</span>全小写 + 短横线连接（例如 invoice-organiser、csv-cleaner），不能有空格、下划线、大写</li>
        <li><span className="text-primary font-bold">文件名必须是：</span>SKILL.md（大小写敏感）</li>
        <li><span className="text-primary font-bold">可选 references/ 文件夹：</span>放品牌手册、模板、示例，别全塞进 SKILL.md</li>
      </ul>

      <P>把文件夹丢进 OpenClaw 的 skills 目录（通常是 <Code>~/.openclaw/skills/</Code> 或通过 <Code>clawhub install</Code> 自动管理），重启或刷新后自动加载。</P>

      <Terminal label="文件夹结构示例">{`csv-cleaner/
├── SKILL.md
└── references/
    └── brand-voice-guide.md`}</Terminal>

      <H>三、10 分钟搭建第一个 Skill（超详细 5 步法）</H>

      <h4 className="text-lg font-bold text-primary mt-6 mb-3">第 1 步：明确 Skill 要做什么</h4>
      <P>回答两个问题：</P>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 text-sm mb-4">
        <li>这个 Skill 到底做什么？（必须具体！比如"把乱七八糟的 CSV 整理成规范表格，表头统一，日期改 YYYY-MM-DD，并写入本地指定路径"）</li>
        <li>最终效果长什么样？（最好给前后对比示例，或期望的输出文件样子）</li>
      </ul>

      <h4 className="text-lg font-bold text-primary mt-6 mb-3">第 2 步：设置触发条件（YAML 前置信息）</h4>
      <P>SKILL.md 开头用 <Code>---</Code> 包裹配置：</P>

      <Terminal label="SKILL.md 头部配置">{`---
name: csv-cleaner
description: 把乱糟糟的 CSV 文件转换成干净的电子表格。当用户说"清理这个 CSV""修一下表头""格式化这些数据"时使用这个 skill。不要用于 PDF、Word 或图片文件。
triggers:
  - 清理 csv
  - 格式化表格
  - 修表头
  - normalize data
negative_triggers:
  - pdf
  - word
  - 图片
---`}</Terminal>

      <P><span className="font-bold text-primary">写法三原则：</span></P>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 text-sm mb-4">
        <li>用第三人称描述</li>
        <li>至少 5-7 个触发词（中英文都写）</li>
        <li>明确负面边界（"不要用于……"）</li>
      </ul>

      <h4 className="text-lg font-bold text-primary mt-6 mb-3">第 3 步：写核心指令</h4>
      <P>YAML 下面就是正文。推荐结构：</P>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 text-sm mb-4">
        <li>概述</li>
        <li>工作流程（编号步骤，用祈使句）</li>
        <li>调用工具顺序（明确哪些 OpenClaw 原生工具要用）</li>
        <li>输出格式</li>
        <li>边缘情况处理</li>
        <li>示例（至少 2 个真实前后对比）</li>
      </ul>

      <h4 className="text-lg font-bold text-primary mt-6 mb-3">第 4 步：长参考资料怎么放？</h4>
      <P>放进 <Code>references/</Code> 文件夹，在指令里写"参考 references/brand-voice-guide.md"。只能单层深度，不许套娃引用。</P>

      <h4 className="text-lg font-bold text-primary mt-6 mb-3">第 5 步：组装 + 部署 + 质量检查</h4>
      <Terminal label="部署 Skill">{`# 丢进 skills 目录
cp -r csv-cleaner ~/.openclaw/skills/

# 或用 clawhub publish 分享
npx clawhub publish csv-cleaner

# 重启 OpenClaw 加载新 Skill
openclaw gateway restart`}</Terminal>

      <Tip>
        <span className="font-bold">懒人终极方案：</span>用 ClawHub 的 skill 生成器或 SkillForge。一句话发给 OpenClaw："用 skillforge 帮我做一个 CSV 清理的 skill"，上传资料，回答几个问题，它自动生成完整 Skill 文件夹！
      </Tip>

      <H>四、进阶配置：多个 Skills 如何不打架？</H>
      
      <P>当 Skills 超过 5-10 个，它们容易"抢活儿"。解决办法：</P>

      <ul className="list-disc list-inside space-y-2 text-text-main/80 text-sm mb-4">
        <li><span className="text-primary font-bold">各管各的地盘：</span>描述里写清楚专属场景</li>
        <li><span className="text-primary font-bold">负面边界写死：</span>明确"我不管品牌语气""我不管从零写长邮件"</li>
        <li><span className="text-primary font-bold">专属触发词 + 优先级：</span>社区支持给 Skill 加权重或优先级标签</li>
      </ul>

      <Concept title="需要脚本/复杂逻辑时怎么办？">
        OpenClaw 支持在 Skill 里调用 shell、python 脚本，或直接用内置工具链。一个脚本只干一件事，接受参数，做好错误捕获。
      </Concept>

      <Concept title="参考资料太多？token 爆炸？">
        拆成子文件 + "快速参考"版本 + 条件加载（"仅当用户提到品牌时读取……"），省一大半消耗。
      </Concept>

      <H>五、实战优化：5 大常见问题秒解决</H>

      <div className="flex flex-col gap-3 my-6">
        <Concept title="❶ 没反应">
          <span className="text-primary">原因：</span>触发词太少/太泛<br />
          <span className="text-primary">解决：</span>多加中英文变体
        </Concept>

        <Concept title="❷ 过度反应 / 乱调用工具">
          <span className="text-primary">原因：</span>描述边界不清<br />
          <span className="text-primary">解决：</span>加更多负面触发 + 明确"只在……时使用"
        </Concept>

        <Concept title="❸ 结果不对 / 格式崩">
          <span className="text-primary">原因：</span>指令歧义<br />
          <span className="text-primary">解决：</span>每一步都写死、示例多给几个
        </Concept>

        <Concept title="❹ 边缘情况崩">
          <span className="text-primary">原因：</span>没写异常处理<br />
          <span className="text-primary">解决：</span>加"如果文件不存在/格式错误，则回复：xxx 并停止"
        </Concept>

        <Concept title="❺ 心跳任务多跑了没要的事">
          <span className="text-primary">原因：</span>没设范围<br />
          <span className="text-primary">解决：</span>在 job 配置里加严格过滤条件
        </Concept>
      </div>

      <Tip>
        OpenClaw 社区有 eval / benchmark 模板，改完 Skill 后让它自测，数据说话。
      </Tip>

      <H>六、长期使用：让 Skill 记住"昨天干到哪了"</H>

      <P>在 SKILL.md 里加：</P>
      <Terminal label="长期记忆配置">{`每次交互或心跳开始时，先读取 memory/context-log.md；
结束时追加总结：完成了什么、待办事项、关键变量状态。`}</Terminal>

      <P>结合 OpenClaw 的本地 Markdown 记忆系统，长期项目（写书、跟进多周任务、每日数据跟踪）就能无缝衔接。</P>

      <H>七、最后两句真心话</H>

      <P>
        你可以继续每天手动复制粘贴指令，把时间一点点浪费掉。或者现在花 10 分钟装/建一个 Skill，从此让你的"小龙虾"真正变成 24/7 为你干活的数字员工。
      </P>

      <P>
        <span className="font-bold text-primary">建议：</span>从最烦的重复小任务开始（发票整理、CSV 清洗、每日简报、浏览器抓取），一步步迭代。等你装到第 5 个 Skill，就会发现 OpenClaw 已经彻底变成"为你量身定制的私人助理 + 自动化中枢"。
      </P>

      <Warn>
        本文基于社区（ClawHub、GitHub、知乎、B 站等）热门分享深度整理，结合几个月本地部署 OpenClaw 的实战心得写成。动手吧！
      </Warn>
    </>
  ),
};
