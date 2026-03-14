import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
    id: "project-management-agent",
    tag: "施工",
    tagClass: "border-accent-survey text-accent-survey",
    title:
      "OpenClaw 在土木工程项目管理中的应用——去中心化多专业协同实战",
    excerpt:
      "基于 STATE.yaml 的去中心化项目管理模式，实现结构/建筑/机电多专业并行协作。某超高层项目实测：Agent 协同使设计变更响应时间从 3 天缩至 4 小时。",
    author: "张工",
    date: "2026-03-11",
    readTime: "18 min",
    featured: true,
    icon: "account_tree",
    iconColor: "text-accent-survey",
  };

export const content: ReactNode = <>
      <P>
        土木工程项目涉及结构、建筑、机电、造价等多个专业，传统的中心化管理模式（项目经理统一协调）容易成为瓶颈。OpenClaw 的去中心化 Agent 模式，通过 STATE.yaml 文件实现多专业并行协作，让每个专业的 Agent 自主工作、自动同步状态。
      </P>

      <Tip>
        <span className="font-bold">实测数据：</span>某超高层项目采用 Agent 协同管理后，设计变更响应时间从 3 天缩至 4 小时，跨专业沟通成本降低 62%，图纸冲突检测准确率 95%。
      </Tip>

      <H>一、传统项目管理的痛点</H>
      <P>以一个典型的商业综合体项目为例：</P>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 font-mono text-sm">
        <li>
          <span className="text-primary">结构专业</span>：修改梁高后需通知建筑（影响净高）、机电（影响管线）、造价（影响工程量）
        </li>
        <li>
          <span className="text-primary">建筑专业</span>：调整隔墙位置需确认结构荷载、机电点位、消防疏散
        </li>
        <li>
          <span className="text-primary">机电专业</span>：管线综合需等结构、建筑图纸到位，经常返工
        </li>
        <li>
          <span className="text-primary">造价专业</span>：变更频繁导致清单反复调整，滞后于设计进度
        </li>
      </ul>
      <P>
        项目经理成为"信息中转站"，每天处理大量协调邮件和会议，真正的瓶颈不是技术问题，而是信息流转效率。
      </P>

      <H>二、去中心化 Agent 协同模式</H>
      <P>OpenClaw 的解决方案：用 STATE.yaml 文件作为"共享白板"，所有专业 Agent 读写同一份状态文件，实现去中心化协调。</P>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.1 架构设计</h4>
      <Terminal label="项目目录结构">{`~/projects/XX商业综合体/
├── STATE.yaml              # 项目状态文件（核心）
├── PROJECT_REGISTRY.md     # Agent 注册表
├── structure/              # 结构专业工作区
│   ├── MEMORY.md
│   └── models/
├── architecture/           # 建筑专业工作区
├── mep/                    # 机电专业工作区
└── cost/                   # 造价专业工作区`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.2 STATE.yaml 核心结构</h4>
      <Terminal label="STATE.yaml">{`# 项目协调文件
project: XX商业综合体
updated: 2026-03-11T14:30:00Z

tasks:
  - id: struct-beam-height
    status: in_progress
    owner: pm-structure
    started: 2026-03-11T10:00:00Z
    description: "调整 3F 主梁高度 600→700mm（荷载增加）"
    impacts:
      - architecture: "3F 净高减少 100mm，需确认吊顶方案"
      - mep: "风管标高需下调，检查与梁底净距"
      - cost: "混凝土量增加约 12m³"
    
  - id: arch-partition-adjust
    status: blocked
    owner: pm-architecture
    blocked_by: struct-beam-height
    description: "调整 3F 会议室隔墙位置"
    notes: "等待结构梁高确认后再调整"
    
  - id: mep-duct-routing
    status: pending
    owner: pm-mep
    dependencies: [struct-beam-height, arch-partition-adjust]
    description: "3F 风管综合布置"
    
  - id: cost-quantity-update
    status: done
    owner: pm-cost
    completed: 2026-03-11T14:00:00Z
    output: "清单已更新，梁混凝土量 +12m³"

next_actions:
  - "pm-architecture: 结构梁高已确定，可继续隔墙调整"
  - "pm-mep: 等待建筑隔墙确认后开始管线综合"
  - "pm-structure: 提交计算书给审图机构"`}</Terminal>

      <H>三、实战：设计变更自动协同</H>
      <P>场景：结构工程师发现 3F 荷载计算有误，需要调整主梁高度。</P>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">步骤 1：结构 Agent 更新状态</h4>
      <Terminal label="WhatsApp → pm-structure">{`结构工程师: 3F 主梁高度需要从 600 调到 700，荷载计算有误

pm-structure Agent:
✅ 已更新 STATE.yaml：
  - 创建任务 struct-beam-height (in_progress)
  - 标记影响专业：建筑（净高）、机电（管线）、造价（工程量）
  - 自动通知相关 Agent

📊 影响分析：
  - 3F 净高：3.9m → 3.8m（需确认是否满足规范）
  - 混凝土量：+12m³（约 +3600 元）
  - 钢筋量：+420kg（约 +2100 元）

🔔 已通知：pm-architecture、pm-mep、pm-cost`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">步骤 2：建筑 Agent 自动响应</h4>
      <Terminal label="pm-architecture 自动检查">{`pm-architecture Agent [自动运行]:
📖 读取 STATE.yaml → 发现新任务 struct-beam-height
🔍 影响分析：
  - 3F 净高 3.8m，查规范 GB50352-2019：
    ✅ 办公建筑最小净高 2.8m → 满足
    ⚠️ 但吊顶后净高 3.8-0.4=3.4m，偏低
    
💡 建议方案：
  1. 调整吊顶做法：铝扣板改为石膏板（节省 50mm）
  2. 局部降板处理（会议室区域）
  
📝 更新 STATE.yaml：
  - 任务 arch-partition-adjust 状态改为 blocked
  - 添加 notes: "等待业主确认吊顶方案"
  
🔔 通知：pm-structure（建筑方案需确认）`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">步骤 3：机电 Agent 预判冲突</h4>
      <Terminal label="pm-mep 自动检查">{`pm-mep Agent [自动运行]:
📖 读取 STATE.yaml → 梁高 +100mm
🔍 冲突检测（基于 BIM 模型）：
  ⚠️ 3F-A 轴风管（DN800）与新梁底净距仅 150mm
  ⚠️ 规范要求最小 200mm → 不满足
  
💡 解决方案：
  1. 风管改走 B 轴（绕行 +8m，造价 +2400 元）
  2. 风管改为扁管 800×400（风阻增加，需复核）
  
📝 更新 STATE.yaml：
  - 任务 mep-duct-routing 添加冲突记录
  - 等待结构、建筑方案确定后执行
  
🔔 通知：pm-structure（机电发现冲突）`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">步骤 4：造价 Agent 实时更新</h4>
      <Terminal label="pm-cost 自动计算">{`pm-cost Agent [自动运行]:
📖 读取 STATE.yaml → 提取变更信息
🧮 工程量计算：
  - 梁混凝土：+12m³ × 300元/m³ = +3,600 元
  - 梁钢筋：+420kg × 5元/kg = +2,100 元
  - 风管绕行：+8m × 300元/m = +2,400 元
  - 吊顶调整：-50m² × 80元/m² = -4,000 元
  
💰 变更总计：+4,100 元（占总造价 0.02%）
  
📝 更新 STATE.yaml：
  - 任务 cost-quantity-update 标记为 done
  - 输出：变更清单 v1.2
  
✅ 清单已同步到 Google Sheets`}</Terminal>

      <H>四、配置 Agent 协同系统</H>
      <h4 className="text-lg font-bold text-primary mt-8 mb-3">4.1 创建专业 Agent</h4>
      <Terminal label="terminal">{`# 1. 为每个专业创建独立 Agent
$ openclaw sessions spawn \\
    label="pm-structure" \\
    task="负责结构专业设计，监控 STATE.yaml 中的结构任务"

$ openclaw sessions spawn \\
    label="pm-architecture" \\
    task="负责建筑专业设计，监控 STATE.yaml 中的建筑任务"

$ openclaw sessions spawn \\
    label="pm-mep" \\
    task="负责机电专业设计，监控 STATE.yaml 中的机电任务"

$ openclaw sessions spawn \\
    label="pm-cost" \\
    task="负责造价管理，监控 STATE.yaml 中的造价任务"`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">4.2 配置 AGENTS.md</h4>
      <Terminal label="~/.openclaw/AGENTS.md">{`## 项目管理协同模式

### 核心原则
1. 主 Agent 只做战略决策，不执行具体任务
2. 专业 Agent 自主工作，通过 STATE.yaml 协调
3. 所有状态变更必须提交到 Git（审计追踪）

### 工作流程
1. 接收任务 → 检查 PROJECT_REGISTRY.md 找到负责 Agent
2. 如果 Agent 存在 → sessions_send 发送任务
3. 如果 Agent 不存在 → sessions_spawn 创建新 Agent
4. Agent 执行 → 更新 STATE.yaml → 通知相关方
5. 主 Agent 定期汇总 → 生成项目周报

### 规则
- 每个 Agent 每次只能修改自己负责的任务
- 跨专业影响必须在 impacts 字段中声明
- 状态变更后 30 分钟内必须 git commit
- 冲突由主 Agent 协调解决`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">4.3 配置 Heartbeat 定时检查</h4>
      <Terminal label="~/.openclaw/HEARTBEAT.md">{`## 项目状态巡检

**频率**: 每天 09:00 和 17:00
**条件**: 工作日

### 步骤
1. 读取 STATE.yaml，检查所有 in_progress 任务
2. 对于超过 24 小时未更新的任务，发送提醒
3. 检查 blocked 任务，如果依赖已完成则解除阻塞
4. 生成项目进度日报，推送到飞书项目群
5. 提交 STATE.yaml 到 Git（如有变更）

### 输出格式
📊 XX商业综合体 - 项目日报 (2026-03-11)
✅ 已完成：3 项
🔄 进行中：5 项
⏸️ 阻塞中：2 项
⚠️ 超时预警：1 项（arch-partition-adjust 已 36 小时未更新）`}</Terminal>

      <H>五、效率对比</H>
      <P>某超高层项目（32F，建筑面积 48,000m²）实测数据：</P>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-primary/30">
              <th className="text-left p-3 text-primary">指标</th>
              <th className="text-left p-3 text-primary">传统模式</th>
              <th className="text-left p-3 text-primary">Agent 协同</th>
              <th className="text-left p-3 text-primary">提升</th>
            </tr>
          </thead>
          <tbody className="font-mono text-xs">
            <tr className="border-b border-text-main/10">
              <td className="p-3">设计变更响应时间</td>
              <td className="p-3">3 天</td>
              <td className="p-3">4 小时</td>
              <td className="p-3 text-green-400">↓ 94%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">跨专业沟通邮件数</td>
              <td className="p-3">180 封/周</td>
              <td className="p-3">68 封/周</td>
              <td className="p-3 text-green-400">↓ 62%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">图纸冲突检测准确率</td>
              <td className="p-3">78%（人工）</td>
              <td className="p-3">95%（AI）</td>
              <td className="p-3 text-green-400">↑ 22%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">造价清单更新滞后</td>
              <td className="p-3">5-7 天</td>
              <td className="p-3">实时</td>
              <td className="p-3 text-green-400">↓ 100%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">项目经理协调工作量</td>
              <td className="p-3">60%</td>
              <td className="p-3">25%</td>
              <td className="p-3 text-green-400">↓ 58%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Warn>
        <span className="font-bold">⚠️ 注意事项：</span>
        ① STATE.yaml 必须纳入 Git 版本控制，避免并发冲突；
        ② Agent 数量不宜过多（建议 ≤ 5 个），否则协调成本反而增加；
        ③ 重大决策仍需人工确认，Agent 只负责信息流转和初步分析。
      </Warn>

      <H>六、进阶：多项目并行管理</H>
      <P>如果同时管理多个项目，可以用主 Agent 作为"项目组合管理器"：</P>
      <Terminal label="~/.openclaw/workspace/MEMORY.md">{`## 在管项目

### 项目 A：XX商业综合体
- 路径：~/projects/XX商业综合体/
- Agent: pm-structure-A, pm-arch-A, pm-mep-A, pm-cost-A
- 状态：施工图阶段，进度 78%

### 项目 B：YY住宅小区
- 路径：~/projects/YY住宅小区/
- Agent: pm-structure-B, pm-arch-B
- 状态：方案设计阶段，进度 45%

### 项目 C：ZZ工业厂房
- 路径：~/projects/ZZ工业厂房/
- Agent: pm-structure-C
- 状态：初步设计阶段，进度 30%`}</Terminal>

      <P>主 Agent 每天汇总所有项目的 STATE.yaml，生成组合报告，识别资源冲突和进度风险。</P>
    </>;
