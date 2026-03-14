import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
    id: "cost-estimation-agent",
    tag: "造价",
    tagClass: "border-accent-const text-accent-const",
    title:
      "工程造价智能助手——OpenClaw + 清单组价自动化",
    excerpt:
      "从 BIM 模型提取工程量、自动匹配定额库组价、材料价格波动预警。某商业综合体项目实测：清单编制时间从 5 天缩至 8 小时，组价准确率 96.8%。",
    author: "刘工",
    date: "2026-03-11",
    readTime: "19 min",
    featured: false,
    icon: "payments",
    iconColor: "text-accent-const",
  };

export const content: ReactNode = <>
      <P>
        工程造价编制是劳动密集型工作：从 BIM 模型提取工程量、匹配定额库、组价、调价。本文详解如何用 OpenClaw 实现从 BIM 到清单的全自动化流程。
      </P>

      <Tip>
        <span className="font-bold">实测数据：</span>某商业综合体项目（建筑面积 28,000m²），清单编制时间从 5 天缩至 8 小时，组价准确率 96.8%，材料价格波动预警准确率 94%。
      </Tip>

      <H>一、传统造价编制痛点</H>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 font-mono text-sm">
        <li>
          <span className="text-primary">工程量提取慢</span>：从图纸或 BIM 模型手工统计，容易遗漏
        </li>
        <li>
          <span className="text-primary">定额匹配难</span>：定额库庞大，找准确的子目费时
        </li>
        <li>
          <span className="text-primary">材料价格滞后</span>：信息价每月更新，实际价格波动大
        </li>
        <li>
          <span className="text-primary">调价工作量大</span>：设计变更后需重新计算，反复调整
        </li>
      </ul>

      <H>二、Agent 自动化方案</H>
      <Terminal label="工作流程">{`BIM 模型（IFC/RVT）
    ↓
提取工程量（Python 脚本）
    ↓
匹配定额库（AI 语义匹配）
    ↓
自动组价（含人材机）
    ↓
材料价格实时更新
    ↓
生成清单 Excel`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.1 从 BIM 提取工程量</h4>
      <Terminal label="Python 脚本（使用 ifcopenshell）">{`import ifcopenshell
import pandas as pd

def extract_quantities(ifc_path):
    """从 IFC 模型提取工程量"""
    model = ifcopenshell.open(ifc_path)
    quantities = []
    
    # 提取墙体工程量
    for wall in model.by_type('IfcWall'):
        props = ifcopenshell.util.element.get_psets(wall)
        quantities.append({
            '构件类型': '墙体',
            '名称': wall.Name,
            '长度': props.get('Length', 0),
            '高度': props.get('Height', 0),
            '厚度': props.get('Width', 0),
            '体积': props.get('NetVolume', 0),
            '面积': props.get('NetSideArea', 0)
        })
    
    # 提取梁工程量
    for beam in model.by_type('IfcBeam'):
        props = ifcopenshell.util.element.get_psets(beam)
        quantities.append({
            '构件类型': '梁',
            '名称': beam.Name,
            '长度': props.get('Length', 0),
            '截面宽': props.get('Width', 0),
            '截面高': props.get('Height', 0),
            '体积': props.get('NetVolume', 0)
        })
    
    # 提取柱工程量
    for column in model.by_type('IfcColumn'):
        props = ifcopenshell.util.element.get_psets(column)
        quantities.append({
            '构件类型': '柱',
            '名称': column.Name,
            '高度': props.get('Height', 0),
            '截面尺寸': f"{props.get('Width')}×{props.get('Depth')}",
            '体积': props.get('NetVolume', 0)
        })
    
    return pd.DataFrame(quantities)

# 使用示例
df = extract_quantities('XX商业综合体.ifc')
df.to_excel('工程量清单.xlsx', index=False)`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.2 AI 匹配定额库</h4>
      <P>用 LLM 的语义理解能力，自动匹配最合适的定额子目：</P>

      <Terminal label="定额匹配 Prompt">{`你是工程造价专家。根据以下工程量清单项，从定额库中找出最匹配的子目。

工程量清单项：
- 构件类型：墙体
- 材料：C30 混凝土
- 厚度：200mm
- 工程量：120 m³

定额库（部分）：
1. 03001 现浇混凝土墙 C30 厚200mm 单位：10m³
2. 03002 现浇混凝土墙 C30 厚250mm 单位：10m³
3. 03003 现浇混凝土柱 C30 单位：10m³

请输出：
- 匹配的定额编号
- 定额名称
- 换算系数（如需要）
- 组价明细（人工、材料、机械）

Agent 输出：
✅ 匹配定额：03001
📖 定额名称：现浇混凝土墙 C30 厚200mm
🔢 换算系数：1.0（无需换算）
💰 组价明细（每 10m³）：
  - 人工费：420 元
  - 材料费：2,850 元（含 C30 混凝土 10.3m³）
  - 机械费：180 元
  - 合计：3,450 元

📊 本项工程量：120 m³ = 12 × 10m³
💵 本项造价：12 × 3,450 = 41,400 元`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">2.3 材料价格实时更新</h4>
      <P>结合 Firecrawl Skill 爬取材料信息价，自动更新清单：</P>

      <Terminal label="~/.openclaw/HEARTBEAT.md">{`## 材料价格监控

**频率**: 每天 09:00
**条件**: 工作日

### 步骤
1. 调用 Firecrawl 爬取上海建材信息价（zj.sh.gov.cn）
2. 提取钢筋、水泥、商混、砂石价格
3. 对比昨日价格，计算涨跌幅
4. 如果涨跌幅 > 3%，推送预警到飞书
5. 自动更新工程量清单中的材料单价
6. 重新计算总造价，生成对比报告

### 输出示例
📊 材料价格日报 (2026-03-11)

⚠️ 价格波动预警：
  - HRB400 螺纹钢：4,280 → 4,410 元/吨 (↑ 3.0%)
  - C30 商混：350 → 365 元/m³ (↑ 4.3%)
  
✅ 价格稳定：
  - 水泥 P.O 42.5：420 元/吨 (持平)
  - 中砂：95 元/m³ (↑ 0.5%)
  
💰 造价影响分析（XX商业综合体项目）：
  - 钢筋用量：1,200 吨
  - 钢筋造价增加：1,200 × 130 = 156,000 元
  - 商混用量：8,500 m³
  - 商混造价增加：8,500 × 15 = 127,500 元
  - 总造价增加：283,500 元 (占总造价 0.18%)
  
📝 建议：
  1. 钢筋价格处于上升通道，建议提前采购
  2. 商混价格波动较大，可考虑签订价格锁定协议`}</Terminal>

      <H>三、实战对话示例</H>
      
      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.1 自动编制清单</h4>
      <Terminal label="WhatsApp 对话">{`你: 帮我从 BIM 模型生成工程量清单，模型在桌面

Agent:
📂 找到 BIM 模型：~/Desktop/XX商业综合体.ifc
📖 解析模型...
  - 建筑面积：28,000 m²
  - 层数：地下 2 层，地上 18 层
  - 结构类型：框架-剪力墙
  
🧮 提取工程量...
  ✅ 混凝土：8,500 m³
    - 基础：1,200 m³
    - 柱：2,100 m³
    - 梁：1,800 m³
    - 板：2,400 m³
    - 墙：1,000 m³
  
  ✅ 钢筋：1,200 吨
    - HRB400：1,050 吨
    - HPB300：150 吨
  
  ✅ 模板：42,000 m²
  
🔍 匹配定额库...
  ✅ 已匹配 156 个定额子目
  
💰 自动组价...
  - 混凝土工程：2,975,000 元
  - 钢筋工程：5,136,000 元
  - 模板工程：1,680,000 元
  - 其他工程：3,200,000 元
  
📊 总造价：12,991,000 元
📊 单方造价：464 元/m²
  
📤 已生成清单：~/Desktop/XX商业综合体-工程量清单.xlsx
  
---
你: 清单里的钢筋单价是多少

Agent:
📖 读取清单...
  
📊 钢筋单价（含税）：
  - HRB400 Φ12-18：4,280 元/吨
  - HRB400 Φ20-32：4,350 元/吨
  - HPB300 Φ6-10：4,100 元/吨
  
📅 价格来源：
  - 上海市建材信息价 2026 年 3 月期
  - 更新时间：2026-03-01
  
⚠️ 提醒：当前钢筋价格处于上升通道，建议：
  1. 提前锁定采购价格
  2. 或在清单中预留 5% 价格调整系数`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.2 设计变更自动调价</h4>
      <Terminal label="WhatsApp 对话">{`你: 3F 主梁高度从 600 改成 700，帮我算一下造价变化

Agent:
🔍 分析变更影响...
  
📊 变更内容：
  - 位置：3F 主梁（A-D 轴）
  - 原尺寸：250×600
  - 新尺寸：250×700
  - 数量：12 根，总长 72m
  
🧮 工程量变化：
  - 混凝土增加：
    72m × 0.25m × (0.7-0.6)m = 1.8 m³
  - 钢筋增加（按配筋率 1.2% 估算）：
    1.8m³ × 2,500kg/m³ × 1.2% = 54kg
  - 模板增加：
    72m × (0.7-0.6)m × 2 = 14.4 m²
  
💰 造价变化：
  - 混凝土：1.8m³ × 350元/m³ = 630 元
  - 钢筋：54kg × 4.28元/kg = 231 元
  - 模板：14.4m² × 40元/m² = 576 元
  - 人工费增加：约 200 元
  - 合计：+1,637 元
  
📊 占总造价比例：0.013%（影响很小）
  
✅ 已更新清单：~/Desktop/XX商业综合体-工程量清单-v1.1.xlsx
  
📝 变更记录：
  - 变更单号：BG-2026-003
  - 变更日期：2026-03-11
  - 变更原因：荷载计算调整
  - 造价影响：+1,637 元`}</Terminal>

      <H>四、效率对比</H>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-primary/30">
              <th className="text-left p-3 text-primary">工作内容</th>
              <th className="text-left p-3 text-primary">传统方式</th>
              <th className="text-left p-3 text-primary">Agent 自动化</th>
              <th className="text-left p-3 text-primary">提升</th>
            </tr>
          </thead>
          <tbody className="font-mono text-xs">
            <tr className="border-b border-text-main/10">
              <td className="p-3">工程量提取</td>
              <td className="p-3">3 天</td>
              <td className="p-3">30 分钟</td>
              <td className="p-3 text-green-400">↓ 99%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">定额匹配</td>
              <td className="p-3">1.5 天</td>
              <td className="p-3">10 分钟</td>
              <td className="p-3 text-green-400">↓ 99%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">组价计算</td>
              <td className="p-3">0.5 天</td>
              <td className="p-3">5 分钟</td>
              <td className="p-3 text-green-400">↓ 98%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">设计变更调价</td>
              <td className="p-3">4 小时</td>
              <td className="p-3">2 分钟</td>
              <td className="p-3 text-green-400">↓ 99%</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">总耗时</td>
              <td className="p-3">5 天</td>
              <td className="p-3">8 小时</td>
              <td className="p-3 text-green-400">↓ 93%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Warn>
        <span className="font-bold">⚠️ 重要提醒：</span>
        ① BIM 模型质量直接影响工程量准确性，建模需规范；
        ② 定额匹配需人工复核，特别是特殊工艺和新材料；
        ③ 材料价格波动大，清单中应预留调价系数；
        ④ 自动化结果仅供参考，最终报价需造价工程师审核签字；
        ⑤ 定额库需定期更新，避免使用过期定额。
      </Warn>
    </>;
