import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
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
  };

export const content: ReactNode = <>
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
    </>;
