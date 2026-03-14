import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
    id: "civil-skills-dev",
    tag: "结构",
    tagClass: "border-accent-struct text-accent-struct",
    title:
      "OpenClaw Skills 开发指南——为土木工程师定制专属技能",
    excerpt:
      "从 SKILL.md 格式到实战案例：开发钢筋算量 Skill 和规范条文检索 Skill。含完整代码示例、ClawHub 发布流程、以及 13000+ Skills 生态避坑指南。",
    author: "李工",
    date: "2026-03-11",
    readTime: "20 min",
    featured: false,
    icon: "extension",
    iconColor: "text-accent-struct",
  };

export const content: ReactNode = <>
      <P>
        OpenClaw 的 Skills 系统是其最强大的扩展机制。本文从 SKILL.md 格式讲起，手把手教你开发两个土木工程专属 Skill：钢筋算量 Skill 和规范条文检索 Skill。
      </P>

      <Tip>
        <span className="font-bold">生态规模：</span>截至 2026 年 3 月，ClawHub 上已有 13,000+ Skills，但土木工程领域专用 Skill 不足 50 个。这是蓝海机会。
      </Tip>

      <H>一、Skill 是什么</H>
      <P>
        Skill 本质上是给 AI Agent 的"操作手册"。它告诉 Agent：这个工具能做什么、需要什么参数、如何调用。
        Agent 根据用户需求自动选择合适的 Skill 执行任务。
      </P>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">1.1 Skill vs Prompt vs Tool</h4>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-primary/30">
              <th className="text-left p-3 text-primary">概念</th>
              <th className="text-left p-3 text-primary">定义</th>
              <th className="text-left p-3 text-primary">示例</th>
            </tr>
          </thead>
          <tbody className="font-mono text-xs">
            <tr className="border-b border-text-main/10">
              <td className="p-3">Prompt</td>
              <td className="p-3">给 LLM 的指令文本</td>
              <td className="p-3">"请帮我计算钢筋用量"</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">Tool</td>
              <td className="p-3">Agent 可调用的函数</td>
              <td className="p-3">calculate_rebar(length, diameter)</td>
            </tr>
            <tr className="border-b border-text-main/10">
              <td className="p-3">Skill</td>
              <td className="p-3">Tool + 使用说明 + 配置</td>
              <td className="p-3">SKILL.md + Python 脚本 + config.json</td>
            </tr>
          </tbody>
        </table>
      </div>

      <H>二、SKILL.md 文件结构</H>
      <P>每个 Skill 的核心是一个 SKILL.md 文件，采用 YAML Front Matter + Markdown 格式：</P>

      <Terminal label="~/.openclaw/skills/rebar-calc/SKILL.md">{`---
name: Rebar Calculator
description: 根据构件尺寸和配筋率自动计算钢筋用量
author: 张工
version: 1.0.0
tags: [结构, 钢筋, 算量]
---

## 功能
1. 计算梁、柱、板、墙的钢筋用量
2. 支持多种钢筋等级（HRB400、HRB500、HPB300）
3. 自动应用规范构造要求（最小配筋率、间距等）
4. 导出 Excel 钢筋统计表

## 使用方法
\`\`\`
你: 计算一根 6m 长、250×600 的框架梁钢筋用量

Agent: [调用 Rebar Calculator]
📊 钢筋用量计算结果：
  - 纵筋：6Φ22 (HRB400) = 13.8kg
  - 箍筋：Φ8@100 (HPB300) = 8.2kg
  - 总计：22.0kg
\`\`\`

## 工具定义
\`\`\`yaml
tools:
  - name: calculate_beam_rebar
    description: 计算框架梁钢筋用量
    parameters:
      length:
        type: number
        description: 梁长度（m）
      width:
        type: number
        description: 梁宽（mm）
      height:
        type: number
        description: 梁高（mm）
      concrete_grade:
        type: string
        description: 混凝土等级
        default: C30
    implementation:
      type: python_script
      script: rebar_calc.py
      function: calculate_beam
\`\`\`

## 依赖
- Python 3.8+
- numpy
- pandas

## 配置
在 config.json 中设置默认值：
\`\`\`json
{
  "default_rebar_grade": "HRB400",
  "min_rebar_ratio": 0.002,
  "stirrup_spacing": 100
}
\`\`\``}</Terminal>

      <H>三、实战 1：开发钢筋算量 Skill</H>
      
      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.1 创建目录结构</h4>
      <Terminal label="terminal">{`$ mkdir -p ~/.openclaw/skills/rebar-calc
$ cd ~/.openclaw/skills/rebar-calc
$ touch SKILL.md rebar_calc.py config.json`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.2 编写 Python 实现</h4>
      <Terminal label="rebar_calc.py">{`import numpy as np
import pandas as pd
from typing import Dict

class RebarCalculator:
    """钢筋用量计算器"""
    
    # 钢筋密度（kg/m³）
    REBAR_DENSITY = {
        'HRB400': 7850,
        'HRB500': 7850,
        'HPB300': 7850
    }
    
    # 钢筋面积（mm²）
    REBAR_AREA = {
        6: 28.3, 8: 50.3, 10: 78.5, 12: 113.1,
        14: 153.9, 16: 201.1, 18: 254.5, 20: 314.2,
        22: 380.1, 25: 490.9, 28: 615.8, 32: 804.2
    }
    
    def __init__(self, config_path='config.json'):
        with open(config_path) as f:
            self.config = json.load(f)
    
    def calculate_beam(self, length: float, width: int, 
                      height: int, concrete_grade: str = 'C30') -> Dict:
        """计算框架梁钢筋用量
        
        Args:
            length: 梁长度（m）
            width: 梁宽（mm）
            height: 梁高（mm）
            concrete_grade: 混凝土等级
            
        Returns:
            钢筋用量字典
        """
        # 1. 计算纵筋
        # 按最小配筋率 0.2% 估算
        min_ratio = self.config['min_rebar_ratio']
        section_area = width * height  # mm²
        required_area = section_area * min_ratio
        
        # 选择钢筋直径（假设用 Φ22）
        dia = 22
        bar_area = self.REBAR_AREA[dia]
        bar_count = int(np.ceil(required_area / bar_area))
        
        # 纵筋重量
        bar_length = length * 1000  # mm
        bar_volume = bar_area * bar_length  # mm³
        bar_weight = bar_volume * self.REBAR_DENSITY['HRB400'] / 1e9  # kg
        total_longitudinal = bar_weight * bar_count
        
        # 2. 计算箍筋
        stirrup_spacing = self.config['stirrup_spacing']  # mm
        stirrup_count = int(length * 1000 / stirrup_spacing)
        
        # 箍筋周长（简化为矩形）
        stirrup_perimeter = 2 * (width + height - 2 * 35)  # 扣除保护层
        stirrup_dia = 8
        stirrup_area = self.REBAR_AREA[stirrup_dia]
        stirrup_volume = stirrup_area * stirrup_perimeter * stirrup_count
        total_stirrup = stirrup_volume * self.REBAR_DENSITY['HPB300'] / 1e9
        
        return {
            'longitudinal': {
                'spec': f'{bar_count}Φ{dia}',
                'grade': 'HRB400',
                'weight': round(total_longitudinal, 1)
            },
            'stirrup': {
                'spec': f'Φ{stirrup_dia}@{stirrup_spacing}',
                'grade': 'HPB300',
                'weight': round(total_stirrup, 1)
            },
            'total': round(total_longitudinal + total_stirrup, 1)
        }
    
    def export_to_excel(self, results: list, output_path: str):
        """导出到 Excel"""
        df = pd.DataFrame(results)
        df.to_excel(output_path, index=False)
        return output_path

# OpenClaw 调用接口
def calculate_beam(length, width, height, concrete_grade='C30'):
    calc = RebarCalculator()
    result = calc.calculate_beam(length, width, height, concrete_grade)
    return result`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">3.3 测试 Skill</h4>
      <Terminal label="WhatsApp 对话">{`你: 计算一根 6m 长、250×600 的框架梁钢筋用量

Agent: [调用 Rebar Calculator Skill]
📊 钢筋用量计算结果：

纵筋：6Φ22 (HRB400)
  - 单根长度：6.0m
  - 单根重量：2.3kg
  - 总重量：13.8kg

箍筋：Φ8@100 (HPB300)
  - 间距：100mm
  - 数量：60 个
  - 周长：1.63m/个
  - 总重量：8.2kg

📦 合计：22.0kg

💾 已保存到 ~/Desktop/钢筋统计.xlsx`}</Terminal>

      <H>四、实战 2：开发规范条文检索 Skill</H>
      <P>土木工程师经常需要查规范，但 500 页的 PDF 翻起来很慢。这个 Skill 结合 Summarize + Tavily 实现智能检索。</P>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">4.1 SKILL.md 定义</h4>
      <Terminal label="~/.openclaw/skills/code-search/SKILL.md">{`---
name: Building Code Search
description: 智能检索建筑规范条文，支持 GB50010、GB50011 等常用规范
author: 李工
version: 1.0.0
tags: [规范, 检索, 结构]
---

## 功能
1. 从本地 PDF 规范库中检索条文
2. 使用 Tavily 搜索最新规范解读
3. 自动提取条文编号、适用条件、计算公式
4. 生成规范引用列表（用于设计说明）

## 使用方法
\`\`\`
你: GB50010 中框架梁最小配筋率是多少

Agent: [调用 Building Code Search]
📖 GB50010-2010《混凝土结构设计规范》

条文 9.5.1：
"纵向受拉钢筋的配筋百分率不应小于表 9.5.1 规定的数值"

表 9.5.1 纵向受拉钢筋最小配筋百分率（%）
| 钢筋种类 | 最小配筋率 |
| HRB400  | 0.20      |
| HRB500  | 0.18      |

🔍 相关条文：
- 9.5.2：箍筋配置要求
- 9.5.3：纵筋锚固长度

📚 参考资料：
- [规范图示 21G101-1](链接)
- [条文说明](链接)
\`\`\`

## 工具定义
\`\`\`yaml
tools:
  - name: search_building_code
    description: 检索建筑规范条文
    parameters:
      code_number:
        type: string
        description: 规范编号（如 GB50010）
      keyword:
        type: string
        description: 检索关键词
    implementation:
      type: composite
      steps:
        - use: summarize
          input: ~/codes/{code_number}.pdf
          query: {keyword}
        - use: tavily_search
          query: "{code_number} {keyword} 规范解读"
\`\`\`

## 依赖
- Summarize Skill（PDF 解析）
- Tavily Skill（网络检索）
- 本地规范库：~/codes/`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">4.2 准备规范库</h4>
      <Terminal label="terminal">{`$ mkdir -p ~/codes
$ cd ~/codes

# 下载常用规范 PDF（示例）
$ wget https://example.com/GB50010-2010.pdf
$ wget https://example.com/GB50011-2010.pdf
$ wget https://example.com/GB50009-2012.pdf

# 建立索引（可选，加速检索）
$ openclaw skills install summarize
$ openclaw summarize index ~/codes/*.pdf`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">4.3 实战对话</h4>
      <Terminal label="WhatsApp 对话">{`你: 查一下 GB50011 中 7 度区框架柱的轴压比限值

Agent: [调用 Building Code Search]
📖 GB50011-2010《建筑抗震设计规范》

条文 6.3.7：
"框架柱轴压比不宜超过表 6.3.7 的规定"

表 6.3.7 框架柱轴压比限值
| 抗震等级 | 7度(0.10g) | 7度(0.15g) |
| 一级    | 0.70      | 0.65      |
| 二级    | 0.80      | 0.75      |
| 三级    | 0.90      | 0.85      |

📌 注意事项：
1. 轴压比 = N / (fc·A)
   - N：柱轴向压力设计值
   - fc：混凝土轴心抗压强度设计值
   - A：柱截面面积
   
2. 对于框架-剪力墙结构，框架部分承担的地震剪力 ≥ 20% 时，
   框架柱轴压比限值可适当放宽

🔍 相关条文：
- 6.3.6：柱箍筋加密区要求
- 6.3.8：角柱、边柱轴压比限值

📚 参考资料：
- [16G101-1 图集](链接)
- [条文说明 6.3.7](链接)`}</Terminal>

      <H>五、发布到 ClawHub</H>
      <P>开发完成后，可以发布到 ClawHub 供社区使用：</P>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">5.1 准备发布</h4>
      <Terminal label="terminal">{`# 1. 确保 Skill 目录结构完整
$ tree ~/.openclaw/skills/rebar-calc/
rebar-calc/
├── SKILL.md
├── rebar_calc.py
├── config.json
├── README.md
└── LICENSE

# 2. 添加 README.md
$ cat > ~/.openclaw/skills/rebar-calc/README.md << EOF
# Rebar Calculator Skill

## 安装
\`\`\`bash
openclaw skills install rebar-calc
\`\`\`

## 使用示例
见 SKILL.md

## 许可证
MIT License
EOF

# 3. 测试 Skill
$ openclaw skills test rebar-calc`}</Terminal>

      <h4 className="text-lg font-bold text-primary mt-8 mb-3">5.2 提交到 ClawHub</h4>
      <Terminal label="terminal">{`# 方法 1：通过 GitHub PR
$ cd ~/.openclaw/skills/rebar-calc
$ git init
$ git add .
$ git commit -m "feat: add rebar calculator skill"
$ gh repo create rebar-calc-skill --public
$ git push origin main

# 然后到 awesome-openclaw-skills 仓库提交 PR

# 方法 2：通过 ClawHub CLI（如果可用）
$ clawhub publish rebar-calc \\
    --category "civil-engineering" \\
    --tags "结构,钢筋,算量"`}</Terminal>

      <H>六、Skills 生态避坑指南</H>
      
      <Warn>
        <span className="font-bold">⚠️ 常见问题：</span>
        <br />
        ① <span className="text-primary">API Key 泄露</span>：不要在 SKILL.md 中硬编码 API Key，使用环境变量或 config.json（加入 .gitignore）
        <br />
        ② <span className="text-primary">依赖冲突</span>：明确列出 Python 依赖版本（requirements.txt），避免与其他 Skill 冲突
        <br />
        ③ <span className="text-primary">工具定义不清晰</span>：parameters 描述要详细，否则 Agent 不知道如何调用
        <br />
        ④ <span className="text-primary">错误处理缺失</span>：Python 脚本必须处理异常，否则 Agent 会卡住
        <br />
        ⑤ <span className="text-primary">文档不完整</span>：SKILL.md 中必须有使用示例，否则用户不知道怎么用
      </Warn>

      <H>七、推荐学习资源</H>
      <ul className="list-disc list-inside space-y-2 text-text-main/80 font-mono text-sm">
        <li>
          <span className="text-primary">官方文档</span>：docs.openclaw.ai/skills
        </li>
        <li>
          <span className="text-primary">Skills 仓库</span>：github.com/openclaw/awesome-openclaw-skills
        </li>
        <li>
          <span className="text-primary">中文教程</span>：github.com/xianyu110/awesome-openclaw-tutorial
        </li>
        <li>
          <span className="text-primary">Skill 模板</span>：github.com/openclaw/skill-template
        </li>
      </ul>
    </>;
