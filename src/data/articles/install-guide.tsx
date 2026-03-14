import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
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
  };

export const content: ReactNode = <>
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
    </>;
