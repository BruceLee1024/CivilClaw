import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
    id: "skills-complete-guide",
    tag: "结构",
    tagClass: "border-accent-struct text-accent-struct",
    title:
      "OpenClaw Skills 完全使用指南：10 分钟搭建专属 AI 技能，告别重复指令",
    excerpt:
      "从 SKILL.md 结构到多 Skill 协作、脚本调用、长期记忆配置。含 5 大常见问题解决方案、ClawHub 生态避坑指南，让你的 OpenClaw 真正变成 24/7 数字员工。",
    author: "张工",
    date: "2026-03-13",
    readTime: "10 min",
    featured: true,
    icon: "extension",
    iconColor: "text-accent-struct",
  };

export const content: ReactNode = <>
      <P>
        很多人用 OpenClaw 时，总在重复输入同一套指令："用我们的品牌语气写""按这个格式整理""别忘了加这些要点"。今天说一遍，明天还得再说，一个月下来浪费的 token 够心疼的。
      </P>
      <P>
        本文结合社区分享和实战经验，整理出一套 OpenClaw Skills 完整教程。不需要任何编程基础，看完这篇，你对 Skills 的理解就能甩开 99% 的用户。
      </P>

      <Tip>
        <span className="font-bold">你将学会：</span>10 分钟搭建第一个 Skill | 多个 Skill 如何和平共处 | 常见 5 大问题及解决方案 | 如何让 Skill 跨会话、跨心跳稳定工作
      </Tip>

      <H>一、基础入门：先搞懂 OpenClaw、Skills 和工具生态</H>
      
      <Concept title="OpenClaw">
        一个开源的自托管 AI 代理（agent），跑在你本地或 VPS 上，通过 WhatsApp、Telegram、Slack 等聊天软件跟你对话。它不只是聊天，还能真正"做事"——读写文件、控制浏览器、发邮件、管理日历、跑 shell 命令等。
      </Concept>

      <Concept title="Skills">
        给 OpenClaw 装的"外挂"。本质是一份结构化的指令 + 配置，教它"遇到这类需求就这么执行"，以后自动触发。社区通过 ClawHub 分享，几百个现成 Skill 可一键安装。
      </Concept>

      <Concept title="工具（Tools）">
        OpenClaw 自带 40+ 原生工具（如浏览器自动化、文件操作、shell 执行），Skills 通常会调用这些工具来完成真实动作。
      </Concept>

      <P>
        <span className="font-bold text-primary">什么时候该建/装 Skill？</span><br />
        同样的指令已经重复输入 3 次以上？或者想让 OpenClaw 在某个领域变成专家（比如前端代码审查、发票整理、每日简报）？立刻行动！
      </P>

      <H>二、Skill 本质就是一个文件夹</H>
      
      <P>Skill 可以通过 clawhub 一键安装，或手动创建文件夹。文件夹里必须有一个 <Code>SKILL.md</Code> 文件，遵守 3 条核心规则：</P>

      <ul className="list-disc list-inside space-y-2 text-text-main/80 text-sm mb-4">
        <li><span className="text-primary font-bold">根文件夹名：</span>全小写 + 短横线连接（例如 invoice-organiser、csv-cleaner），不能有空格、下划线、大写</li>
        <li><span className="text-primary font-bold">文件名必须是：</span>SKILL.md（大小写敏感）</li>
        <li><span className="text-primary font-bold">可选 references/ 文件夹：</span>放品牌手册、模板、示例，别全塞进 SKILL.md</li>
      </ul>

      <P>把文件夹丢进 OpenClaw 的 skills 目录（通常是 <Code>~/.openclaw/skills/</Code> 或通过 <Code>clawhub install</Code> 自动管理），重启或刷新后自动加载。</P>

      <Terminal label="文件夹结构示例">{`csv-cleaner/
├── SKILL.md
└── references/
    └── brand-voice-guide.md`}</Terminal>

      <H>三、10 分钟搭建第一个 Skill（超详细 5 步法）</H>

      <h4 className="text-lg font-bold text-primary mt-6 mb-3">第 1 步：明确 Skill 要做什么</h4>
      <P>回答两个问题：</P>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 text-sm mb-4">
        <li>这个 Skill 到底做什么？（必须具体！比如"把乱七八糟的 CSV 整理成规范表格，表头统一，日期改 YYYY-MM-DD，并写入本地指定路径"）</li>
        <li>最终效果长什么样？（最好给前后对比示例，或期望的输出文件样子）</li>
      </ul>

      <h4 className="text-lg font-bold text-primary mt-6 mb-3">第 2 步：设置触发条件（YAML 前置信息）</h4>
      <P>SKILL.md 开头用 <Code>---</Code> 包裹配置：</P>

      <Terminal label="SKILL.md 头部配置">{`---
name: csv-cleaner
description: 把乱糟糟的 CSV 文件转换成干净的电子表格。当用户说"清理这个 CSV""修一下表头""格式化这些数据"时使用这个 skill。不要用于 PDF、Word 或图片文件。
triggers:
  - 清理 csv
  - 格式化表格
  - 修表头
  - normalize data
negative_triggers:
  - pdf
  - word
  - 图片
---`}</Terminal>

      <P><span className="font-bold text-primary">写法三原则：</span></P>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 text-sm mb-4">
        <li>用第三人称描述</li>
        <li>至少 5-7 个触发词（中英文都写）</li>
        <li>明确负面边界（"不要用于……"）</li>
      </ul>

      <h4 className="text-lg font-bold text-primary mt-6 mb-3">第 3 步：写核心指令</h4>
      <P>YAML 下面就是正文。推荐结构：</P>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 text-sm mb-4">
        <li>概述</li>
        <li>工作流程（编号步骤，用祈使句）</li>
        <li>调用工具顺序（明确哪些 OpenClaw 原生工具要用）</li>
        <li>输出格式</li>
        <li>边缘情况处理</li>
        <li>示例（至少 2 个真实前后对比）</li>
      </ul>

      <h4 className="text-lg font-bold text-primary mt-6 mb-3">第 4 步：长参考资料怎么放？</h4>
      <P>放进 <Code>references/</Code> 文件夹，在指令里写"参考 references/brand-voice-guide.md"。只能单层深度，不许套娃引用。</P>

      <h4 className="text-lg font-bold text-primary mt-6 mb-3">第 5 步：组装 + 部署 + 质量检查</h4>
      <Terminal label="部署 Skill">{`# 丢进 skills 目录
cp -r csv-cleaner ~/.openclaw/skills/

# 或用 clawhub publish 分享
npx clawhub publish csv-cleaner

# 重启 OpenClaw 加载新 Skill
openclaw gateway restart`}</Terminal>

      <Tip>
        <span className="font-bold">懒人终极方案：</span>用 ClawHub 的 skill 生成器或 SkillForge。一句话发给 OpenClaw："用 skillforge 帮我做一个 CSV 清理的 skill"，上传资料，回答几个问题，它自动生成完整 Skill 文件夹！
      </Tip>

      <H>四、进阶配置：多个 Skills 如何不打架？</H>
      
      <P>当 Skills 超过 5-10 个，它们容易"抢活儿"。解决办法：</P>

      <ul className="list-disc list-inside space-y-2 text-text-main/80 text-sm mb-4">
        <li><span className="text-primary font-bold">各管各的地盘：</span>描述里写清楚专属场景</li>
        <li><span className="text-primary font-bold">负面边界写死：</span>明确"我不管品牌语气""我不管从零写长邮件"</li>
        <li><span className="text-primary font-bold">专属触发词 + 优先级：</span>社区支持给 Skill 加权重或优先级标签</li>
      </ul>

      <Concept title="需要脚本/复杂逻辑时怎么办？">
        OpenClaw 支持在 Skill 里调用 shell、python 脚本，或直接用内置工具链。一个脚本只干一件事，接受参数，做好错误捕获。
      </Concept>

      <Concept title="参考资料太多？token 爆炸？">
        拆成子文件 + "快速参考"版本 + 条件加载（"仅当用户提到品牌时读取……"），省一大半消耗。
      </Concept>

      <H>五、实战优化：5 大常见问题秒解决</H>

      <div className="flex flex-col gap-3 my-6">
        <Concept title="❶ 没反应">
          <span className="text-primary">原因：</span>触发词太少/太泛<br />
          <span className="text-primary">解决：</span>多加中英文变体
        </Concept>

        <Concept title="❷ 过度反应 / 乱调用工具">
          <span className="text-primary">原因：</span>描述边界不清<br />
          <span className="text-primary">解决：</span>加更多负面触发 + 明确"只在……时使用"
        </Concept>

        <Concept title="❸ 结果不对 / 格式崩">
          <span className="text-primary">原因：</span>指令歧义<br />
          <span className="text-primary">解决：</span>每一步都写死、示例多给几个
        </Concept>

        <Concept title="❹ 边缘情况崩">
          <span className="text-primary">原因：</span>没写异常处理<br />
          <span className="text-primary">解决：</span>加"如果文件不存在/格式错误，则回复：xxx 并停止"
        </Concept>

        <Concept title="❺ 心跳任务多跑了没要的事">
          <span className="text-primary">原因：</span>没设范围<br />
          <span className="text-primary">解决：</span>在 job 配置里加严格过滤条件
        </Concept>
      </div>

      <Tip>
        OpenClaw 社区有 eval / benchmark 模板，改完 Skill 后让它自测，数据说话。
      </Tip>

      <H>六、长期使用：让 Skill 记住"昨天干到哪了"</H>

      <P>在 SKILL.md 里加：</P>
      <Terminal label="长期记忆配置">{`每次交互或心跳开始时，先读取 memory/context-log.md；
结束时追加总结：完成了什么、待办事项、关键变量状态。`}</Terminal>

      <P>结合 OpenClaw 的本地 Markdown 记忆系统，长期项目（写书、跟进多周任务、每日数据跟踪）就能无缝衔接。</P>

      <H>七、最后两句真心话</H>

      <P>
        你可以继续每天手动复制粘贴指令，把时间一点点浪费掉。或者现在花 10 分钟装/建一个 Skill，从此让你的"小龙虾"真正变成 24/7 为你干活的数字员工。
      </P>

      <P>
        <span className="font-bold text-primary">建议：</span>从最烦的重复小任务开始（发票整理、CSV 清洗、每日简报、浏览器抓取），一步步迭代。等你装到第 5 个 Skill，就会发现 OpenClaw 已经彻底变成"为你量身定制的私人助理 + 自动化中枢"。
      </P>

      <Warn>
        本文基于社区（ClawHub、GitHub、知乎、B 站等）热门分享深度整理，结合几个月本地部署 OpenClaw 的实战心得写成。动手吧！
      </Warn>
    </>;
