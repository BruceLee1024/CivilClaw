import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
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
  };

export const content: ReactNode = <>
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
    </>;
