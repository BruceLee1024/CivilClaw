import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
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
  };

export const content: ReactNode = <>
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
    </>;
