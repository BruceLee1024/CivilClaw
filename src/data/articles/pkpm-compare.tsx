import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
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
  };

export const content: ReactNode = <>
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
    </>;
