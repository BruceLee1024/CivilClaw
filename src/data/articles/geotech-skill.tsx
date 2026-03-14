import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
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
  };

export const content: ReactNode = <>
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
    </>;
