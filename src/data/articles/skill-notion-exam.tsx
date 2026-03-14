import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
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
  };

export const content: ReactNode = <>
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
    </>;
