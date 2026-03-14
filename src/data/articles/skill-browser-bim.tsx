import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
    id: "skill-browser-bim",
    tag: "结构",
    tagClass: "border-accent-struct text-accent-struct",
    title:
      "Browser Relay + Firecrawl——让 Agent 自动下载 BIM 资料和爬取材料价格",
    excerpt:
      "Browser Relay 实现浏览器自动化（登录、点击、下载），Firecrawl 提取结构化数据。两个 Skill 组合即可自动化政府报审表填写和材料价格监控。",
    author: "李工",
    date: "2026-03-10",
    readTime: "15 min",
    featured: false,
    icon: "web",
    iconColor: "text-accent-struct",
  };

export const content: ReactNode = <>
      <P>
        土木工程师经常需要从各种网站下载资料——BIM 模型库、规范更新、材料价格信息、政府报审表。这些操作重复、费时，而且很多网站需要登录。Browser Relay + Firecrawl 两个 Skill 组合，让 Agent 自动完成浏览器操作和数据爬取。
      </P>

      <H>一、安装 Skill</H>
      <Terminal label="terminal">{`$ npx clawhub@latest install browser-relay
$ npx clawhub@latest install firecrawl

# Browser Relay 需要 Chrome/Chromium 浏览器
# Firecrawl 需要 API Key (firecrawl.dev 免费 500 页/月)`}</Terminal>

      <H>二、自动下载 BIM 资料</H>
      <P>Browser Relay 可以完整操控浏览器——导航、点击、填表、下载、截图：</P>
      <Terminal label="WhatsApp 对话示例">{`你: 帮我从 XX BIM 模型库下载"框架结构标准层"模型

Agent: [调用 Browser Relay]
🌐 正在操作浏览器...
1. ✅ 打开 bim-library.com
2. ✅ 登录（使用 Memory 中保存的账号）
3. ✅ 搜索"框架结构标准层"
4. ✅ 找到 3 个结果，选择评分最高的
5. ✅ 点击下载（.rvt 格式, 45MB）
6. ✅ 文件已保存到 ~/Downloads/框架结构标准层.rvt

📎 需要我把文件发给你吗？`}</Terminal>

      <H>三、爬取材料价格</H>
      <P>Firecrawl 可以爬取网页并提取结构化数据：</P>
      <Terminal label="WhatsApp 对话示例">{`你: 帮我查一下上海地区今天的钢筋价格

Agent: [调用 Firecrawl 爬取材料价格网站]
📊 上海地区钢筋价格 (2026-03-10)

| 品种 | 规格 | 今日价 | 涨跌 |
| HRB400 螺纹钢 | Φ12 | 3,680 元/吨 | +20 |
| HRB400 螺纹钢 | Φ25 | 3,620 元/吨 | +10 |
| HPB300 盘螺 | Φ8 | 3,850 元/吨 | -15 |
| HRB400 盘螺 | Φ10 | 3,780 元/吨 | +5 |

数据来源：mysteel.com
更新时间：2026-03-10 14:30`}</Terminal>

      <H>四、自动化政府报审表填写</H>
      <Terminal label="WhatsApp 对话示例">{`你: 帮我填写住建局的施工许可申报表

Agent: [调用 Browser Relay]
🌐 正在操作浏览器...
1. ✅ 打开住建局网上办事大厅
2. ✅ 登录（使用已保存凭证）
3. ✅ 进入"施工许可证申请"
4. ✅ 自动填写项目信息（从 Memory 中读取）
   - 项目名称：XX花园二期
   - 建设单位：XX开发有限公司
   - 施工单位：XX建设集团
   - 面积：28,500 m²
5. ⏸️ 表格已填写完成，请人工审核后点击提交

📸 已截图供你确认（见附件）`}</Terminal>
      <Warn>
        <span className="font-bold">⚠️ 安全提醒：</span>
        ①Browser Relay 能操控你的浏览器，请确保 Sandbox 和 exec_approval 已开启；
        ②不要在 Memory 中明文存储密码，使用环境变量或密钥管理；
        ③政府报审等重要操作务必人工审核后再提交。
      </Warn>

      <H>五、定时价格监控</H>
      <P>结合 Heartbeat，可以实现材料价格定时监控：</P>
      <Terminal label="~/.openclaw/HEARTBEAT.md">{`## 材料价格监控

**频率**: 每天 09:00
**条件**: 工作日

### 步骤
1. 调用 Firecrawl 爬取上海钢筋、水泥、商混价格
2. 与昨日价格对比，计算涨跌幅
3. 如果涨跌幅超过 3%，通过飞书推送预警
4. 数据归档到 Google Sheets 价格追踪表`}</Terminal>
    </>;
