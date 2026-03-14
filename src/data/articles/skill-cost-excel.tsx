import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
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
  };

export const content: ReactNode = <>
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
    </>;
