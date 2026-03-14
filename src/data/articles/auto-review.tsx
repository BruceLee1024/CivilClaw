import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
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
  };

export const content: ReactNode = <>
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
    </>;
