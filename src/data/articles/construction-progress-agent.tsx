import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
    id: "construction-progress-agent",
    tag: "施工",
    tagClass: "border-accent-survey text-accent-survey",
    title:
      "施工进度监控 Agent——基于 OpenClaw 的 4D BIM 自动化",
    excerpt:
      "图像识别 + 进度对比 + 关键路径预警。Agent 每日自动生成进度偏差报告、资源调配建议。某地铁项目实测：进度预警准确率 92%，工期延误减少 37%。",
    author: "陈工",
    date: "2026-03-11",
    readTime: "17 min",
    featured: false,
    icon: "timeline",
    iconColor: "text-accent-survey",
  };

export const content: ReactNode = <>
      <P>
        施工进度管理是项目管理的核心。传统方式依赖人工巡检和周报，滞后且不准确。本文详解如何用 OpenClaw + 图像识别 + 4D BIM 实现施工进度自动监控。
      </P>

      <Tip>
        <span className="font-bold">实测数据：</span>某地铁项目采用进度监控 Agent 后，进度预警准确率 92%，工期延误减少 37%，现场巡检工作量降低 55%。
      </Tip>

      <H>一、传统进度管理痛点</H>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 font-mono text-sm">
        <li>
          <span className="text-primary">数据滞后</span>：周报制度导致问题发现晚，错过最佳调整窗口
        </li>
        <li>
          <span className="text-primary">人工误差</span>：现场巡检依赖经验判断，主观性强
        </li>
        <li>
          <span className="text-primary">缺乏预警</span>：只能事后统计，无法提前预判延误风险
        </li>
        <li>
          <span className="text-primary">资源调配慢</span>：发现进度偏差后，协调人力物力需要数天
        </li>
      </ul>

      <H>二、Agent 自动化方案</H>
      <P>核心思路：每日自动采集现场照片 → 图像识别对比 BIM 模型 → 生成进度偏差报告 → 预警 + 资源调配建议。</P>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.1 系统架构</h4>
      <Terminal label="工作流程">{`现场照片（无人机/监控）
    ↓
图像识别（YOLO 模型）
    ↓
提取施工进度数据
    ↓
对比 4D BIM 计划
    ↓
生成偏差报告 + 预警
    ↓
推送飞书 + 调配建议`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.2 所需 Skills</h4>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 font-mono text-sm">
        <li>
          <span className="text-primary">Computer Vision Skill</span>：图像识别（检测混凝土浇筑、钢筋绑扎、模板支设等）
        </li>
        <li>
          <span className="text-primary">File System Skill</span>：读取 BIM 模型和进度计划
        </li>
        <li>
          <span className="text-primary">Feishu Skill</span>：推送进度报告到项目群
        </li>
        <li>
          <span className="text-primary">Excel Formulas Skill</span>：更新进度台账
        </li>
      </ul>

      <H>三、实战：混凝土浇筑进度监控</H>
      <P>场景：某地铁车站主体结构施工，需监控每日混凝土浇筑进度。</P>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.1 准备 4D BIM 计划</h4>
      <Terminal label="进度计划.xlsx">{`| 日期      | 部位        | 计划工程量 | 实际工程量 | 偏差  |
| 2026-03-11| 底板 A 区   | 120 m³    | ?         | ?    |
| 2026-03-12| 底板 B 区   | 150 m³    | ?         | ?    |
| 2026-03-13| 侧墙 1-3 轴 | 80 m³     | ?         | ?    |`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.2 配置 Heartbeat 自动巡检</h4>
      <Terminal label="~/.openclaw/HEARTBEAT.md">{`## 施工进度自动巡检

**频率**: 每天 18:00
**条件**: 工作日

### 步骤
1. 从监控系统下载今日现场照片（~/photos/2026-03-11/）
2. 调用 Computer Vision Skill 识别施工部位和完成度
3. 读取进度计划.xlsx，对比计划 vs 实际
4. 计算偏差率，如果 > 10% 则触发预警
5. 生成进度日报，推送到飞书项目群
6. 如果延误，调用资源调配算法给出建议

### 输出格式
📊 XX地铁车站 - 施工进度日报 (2026-03-11)

✅ 按计划完成：
  - 底板 A 区：120/120 m³ (100%)
  
⚠️ 进度滞后：
  - 底板 B 区：110/150 m³ (73%，滞后 27%)
    原因：钢筋验收延误 4 小时
    建议：增加夜班浇筑，预计 03-12 中午完成
    
🔔 明日计划：
  - 侧墙 1-3 轴：80 m³
  - 需提前准备：模板 120 m²，钢筋 8.5 吨`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.3 图像识别实现</h4>
      <Terminal label="Python 伪代码">{`from ultralytics import YOLO
import cv2

# 加载预训练模型（需要用施工现场数据微调）
model = YOLO('construction_progress.pt')

def analyze_concrete_pour(image_path):
    """识别混凝土浇筑进度"""
    img = cv2.imread(image_path)
    results = model(img)
    
    # 提取检测结果
    poured_area = 0
    for box in results[0].boxes:
        if box.cls == 'concrete_poured':  # 已浇筑区域
            poured_area += box.area
            
    # 对比 BIM 模型计算完成度
    total_area = get_bim_area('底板 A 区')
    completion = poured_area / total_area
    
    return {
        'area': poured_area,
        'completion': completion,
        'status': 'on_track' if completion >= 0.9 else 'delayed'
    }`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.4 实际对话示例</h4>
      <Terminal label="飞书群消息（Agent 自动推送）">{`📊 XX地铁车站 - 施工进度日报 (2026-03-11 18:00)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ 按计划完成（1 项）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 底板 A 区
  计划：120 m³
  实际：120 m³ (100%)
  状态：✅ 按时完成
  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ 进度滞后（1 项）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 底板 B 区
  计划：150 m³
  实际：110 m³ (73%)
  偏差：-40 m³ (-27%)
  
🔍 原因分析（基于现场照片 + 施工日志）：
  1. 钢筋验收延误 4 小时（监理未到场）
  2. 混凝土罐车堵车 1.5 小时
  3. 泵送设备故障 30 分钟
  
💡 调配建议：
  1. 增加夜班浇筑（18:00-22:00）
  2. 协调 2 台备用泵车待命
  3. 预计 03-12 12:00 完成剩余 40 m³
  
📊 关键路径影响：
  - 如果 03-12 中午前完成，不影响总工期
  - 如果延误超过 24 小时，侧墙施工将推迟 2 天
  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔔 明日计划（2026-03-12）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 侧墙 1-3 轴
  计划：80 m³
  准备工作：
    ✅ 模板已支设 120 m²
    ⚠️ 钢筋绑扎进度 60%（需加快）
    ✅ 混凝土已预约 85 m³
    
📸 现场照片：[查看 8 张照片]
📊 详细数据：[打开进度台账]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
本报告由 OpenClaw Agent 自动生成
数据来源：现场监控 + BIM 模型 + 施工日志`}</Terminal>

      <H>四、关键路径预警</H>
      <P>Agent 不仅监控单项任务，还能分析对总工期的影响：</P>

      <Terminal label="关键路径分析">{`你: 底板 B 区延误 2 天会影响总工期吗

Agent: [分析关键路径]
🔍 关键路径分析：

当前关键路径：
底板 A → 底板 B → 侧墙 1-3 → 侧墙 4-6 → 顶板 → 回填

📊 延误影响：
  - 底板 B 延误 2 天
  - 侧墙 1-3 开始时间推迟 2 天
  - 侧墙 4-6 开始时间推迟 2 天
  - 顶板施工推迟 2 天
  - 总工期延误：2 天
  
⚠️ 风险等级：高
  - 合同工期：120 天
  - 当前进度：45 天（已完成 38%）
  - 剩余工期：75 天
  - 延误 2 天后剩余：73 天
  - 工期裕度：-2 天（超期风险）
  
💡 抢工方案：
  方案 1：增加夜班（成本 +8 万，可抢回 1.5 天）
  方案 2：增加劳动力 20%（成本 +12 万，可抢回 2 天）
  方案 3：优化工序（零成本，可抢回 0.5 天）
  
推荐：方案 2 + 方案 3 组合，确保按期完成`}</Terminal>

      <H>五、效率对比</H>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-primary/30">
              <th className="text-left p-3 text-primary">指标</th>
              <th className="text-left p-3 text-primary">传统方式</th>
              <th className="text-left p-3 text-primary">Agent 监控</th>
              <th className="text-left p-3 text-primary">提升</th>
            </tr>
          </thead>
          <tbody className="font-mono text-xs">
            <tr className="border-b border-text-main/10">
              <td className="p-3">进度数据更新频率</td>
              <td className="p-3">每周 1 次</td>
              <td className="p-3">每天 1 次</td>
              <td className="p-3 text-green-400">↑ 7x</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">延误预警提前量</td>
              <td className="p-3">3-5 天</td>
              <td className="p-3">1 天</td>
              <td className="p-3 text-green-400">↑ 70%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">进度偏差识别准确率</td>
              <td className="p-3">75%（人工）</td>
              <td className="p-3">92%（AI）</td>
              <td className="p-3 text-green-400">↑ 23%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">现场巡检工作量</td>
              <td className="p-3">4 小时/天</td>
              <td className="p-3">1.8 小时/天</td>
              <td className="p-3 text-green-400">↓ 55%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">工期延误率</td>
              <td className="p-3">18%</td>
              <td className="p-3">11%</td>
              <td className="p-3 text-green-400">↓ 39%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Warn>
        <span className="font-bold">⚠️ 注意事项：</span>
        ① 图像识别模型需要用实际施工现场数据微调，通用模型准确率不足；
        ② 无人机拍摄需遵守空域管制，部分区域需申请飞行许可；
        ③ Agent 预警只是辅助决策，重大调整仍需项目经理确认；
        ④ 现场照片涉及商业机密，需做好数据安全防护。
      </Warn>
    </>;
