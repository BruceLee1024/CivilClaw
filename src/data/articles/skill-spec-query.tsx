import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
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
  };

export const content: ReactNode = <>
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
    </>;
