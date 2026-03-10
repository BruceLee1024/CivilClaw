import Link from "next/link";
import Header from "@/components/Header";

const categories = [
  {
    id: "docs",
    icon: "straighten",
    label: "规范查询 & 文档处理",
    color: "text-accent-struct",
    borderColor: "border-accent-struct/30",
    bgColor: "bg-accent-struct/5",
    desc: "土木人第一刚需——查规范、读图审报告、提取 PDF 表格",
  },
  {
    id: "data",
    icon: "table_chart",
    label: "数据 & 表格",
    color: "text-accent-survey",
    borderColor: "border-accent-survey/30",
    bgColor: "bg-accent-survey/5",
    desc: "算量、造价、工程量清单、Excel 处理",
  },
  {
    id: "search",
    icon: "travel_explore",
    label: "搜索 & 研究",
    color: "text-accent-geo",
    borderColor: "border-accent-geo/30",
    bgColor: "bg-accent-geo/5",
    desc: "材料价格爬取、政策文件检索、学术论文追踪",
  },
  {
    id: "team",
    icon: "forum",
    label: "团队协作 & 通知",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/5",
    desc: "工地沟通——飞书、Notion、WhatsApp",
  },
  {
    id: "auto",
    icon: "auto_mode",
    label: "自动化 & 工作流",
    color: "text-accent-const",
    borderColor: "border-accent-const/30",
    bgColor: "bg-accent-const/5",
    desc: "定时巡检报告、自动质检通知、Heartbeat 任务",
  },
  {
    id: "knowledge",
    icon: "school",
    label: "知识管理 & 备考",
    color: "text-text-main",
    borderColor: "border-border-color",
    bgColor: "bg-surface",
    desc: "注册结构/岩土工程师备考、个人规范笔记库",
  },
];

const skills = [
  // ─── 规范查询 & 文档处理 ───
  {
    cat: "docs",
    slug: "summarize",
    name: "Summarize",
    desc: "一键总结 PDF、网页、音频、视频内容",
    scene: "读扫描版规范文件、总结图审报告要点",
    downloads: "22.4K",
    url: "https://clawhub.ai/skills/summarize",
  },
  {
    cat: "docs",
    slug: "tavily-search",
    name: "Tavily Search",
    desc: "AI 优化的实时网页搜索，返回结构化结果",
    scene: "搜规范条文、查行业政策、搜材料标准号",
    downloads: "23.8K",
    url: "https://clawhub.ai/skills/tavily-search",
  },
  {
    cat: "docs",
    slug: "ontology",
    name: "Ontology",
    desc: "结构化知识图谱探索与语义推理",
    scene: "构建规范条文知识网络，跨规范关联查询",
    downloads: "18.1K",
    url: "https://clawhub.ai/skills/ontology",
  },
  {
    cat: "docs",
    slug: "firecrawl",
    name: "Firecrawl",
    desc: "网页爬取，提取结构化数据",
    scene: "爬取建标知网规范更新、抓取材料价格信息",
    downloads: "—",
    url: "https://clawhub.ai/skills/firecrawl",
  },

  // ─── 数据 & 表格 ───
  {
    cat: "data",
    slug: "gog",
    name: "GOG",
    desc: "Google Workspace 全家桶：Sheets / Docs / Drive / Gmail",
    scene: "处理工程量清单 Sheets、项目邮件、Drive 图纸归档",
    downloads: "29.4K",
    url: "https://clawhub.ai/skills/gog",
  },
  {
    cat: "data",
    slug: "excel-formulas",
    name: "Excel Formulas",
    desc: "生成和解释 Excel 公式与函数",
    scene: "造价计算公式、钢筋用量统计公式、预算表函数",
    downloads: "—",
    url: "https://clawhub.ai/skills/excel-formulas",
  },
  {
    cat: "data",
    slug: "data-export",
    name: "Data Export",
    desc: "导出数据为 CSV、JSON 或 SQL 格式",
    scene: "将工程数据结构化输出，便于 BIM 软件导入",
    downloads: "—",
    url: "https://clawhub.ai/skills/data-export",
  },

  // ─── 搜索 & 研究 ───
  {
    cat: "search",
    slug: "arxiv-watcher",
    name: "arXiv Watcher",
    desc: "搜索和总结 arXiv 论文",
    scene: "跟踪 AI+结构工程前沿论文（陆新征团队等）",
    downloads: "—",
    url: "https://clawhub.ai/skills/arxiv-watcher",
  },
  {
    cat: "search",
    slug: "browser-relay",
    name: "Browser Relay",
    desc: "完整浏览器自动化——导航、点击、填表、截图",
    scene: "自动登录下载 BIM 资料、填写政府报审表",
    downloads: "—",
    url: "https://clawhub.ai/skills/browser-relay",
  },
  {
    cat: "search",
    slug: "google-search",
    name: "Google Search",
    desc: "通过 Google Custom Search 搜索网页",
    scene: "检索工程案例、搜索地方建设标准",
    downloads: "—",
    url: "https://clawhub.ai/skills/google-search",
  },

  // ─── 团队协作 & 通知 ───
  {
    cat: "team",
    slug: "feishu",
    name: "飞书 Feishu",
    desc: "飞书/Lark 集成：团队消息和文档管理",
    scene: "工地施工群消息推送、设计变更通知、飞书文档协同",
    downloads: "—",
    url: "https://clawhub.ai/skills/feishu",
  },
  {
    cat: "team",
    slug: "notion",
    name: "Notion",
    desc: "读写 Notion 页面和数据库",
    scene: "项目进度看板、材料验收记录数据库",
    downloads: "11.9K",
    url: "https://clawhub.ai/skills/notion",
  },
  {
    cat: "team",
    slug: "github",
    name: "GitHub",
    desc: "完整 GitHub CLI 集成：Issues / PR / Repos",
    scene: "管理开源 BIM 脚本、协作 PKPM 二次开发代码",
    downloads: "21.6K",
    url: "https://clawhub.ai/skills/github",
  },

  // ─── 自动化 & 工作流 ───
  {
    cat: "auto",
    slug: "n8n",
    name: "n8n Workflow",
    desc: "可视化工作流自动化引擎",
    scene: "定时生成施工日报 → 自动发送质检通知到飞书",
    downloads: "—",
    url: "https://clawhub.ai/skills/n8n",
  },
  {
    cat: "auto",
    slug: "proactive-agent",
    name: "Proactive Agent",
    desc: "让 Agent 主动监控和执行，无需手动触发",
    scene: "定时检查工程进度偏差、材料到场提醒",
    downloads: "—",
    url: "https://clawhub.ai/skills/proactive-agent",
  },
  {
    cat: "auto",
    slug: "clawhub",
    name: "ClawHub",
    desc: "搜索、安装、更新和管理 Skill 的内置工具",
    scene: "让 Agent 自己搜索并安装新能力",
    downloads: "内置",
    url: "https://clawhub.ai/skills/clawhub",
  },

  // ─── 知识管理 & 备考 ───
  {
    cat: "knowledge",
    slug: "obsidian",
    name: "Obsidian",
    desc: "读写 Obsidian 知识库 Vault",
    scene: "构建个人规范笔记库、注册考试错题本",
    downloads: "—",
    url: "https://clawhub.ai/skills/obsidian",
  },
  {
    cat: "knowledge",
    slug: "weather",
    name: "Weather",
    desc: "获取实时天气状况和预报",
    scene: "施工日志自动填写天气、混凝土浇筑温度判断",
    downloads: "18.6K",
    url: "https://clawhub.ai/skills/weather",
  },
];

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full px-6 py-8 lg:px-10 lg:py-12 flex flex-col gap-12">
        {/* Hero */}
        <section className="w-full max-w-5xl mx-auto flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-text-main uppercase tracking-tight border-l-4 border-primary pl-4">
            虾饲料仓库
          </h1>
          <p className="text-text-muted max-w-2xl text-sm leading-relaxed">
            Skill 是你龙虾的“饲料”——喜欢吃什么，就装什么。ClawHub 社区已有 <strong className="text-text-main">13,729</strong> 款，
            我们专为土木人精选了 <strong className="text-text-main">{skills.length}</strong> 款。
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm font-mono">
            <span className="text-text-muted">饲料总量 <span className="text-text-main font-bold">13,729</span></span>
            <span className="text-border-color">/</span>
            <span className="text-text-muted">土木精选 <span className="text-primary font-bold">{skills.length}</span></span>
            <span className="text-border-color">/</span>
            <span className="text-text-muted">awesome 榜单 <span className="text-text-main font-bold">5,400+</span></span>
          </div>
        </section>

        {/* Category Sections */}
        {categories.map((cat) => {
          const catSkills = skills.filter((s) => s.cat === cat.id);
          if (catSkills.length === 0) return null;
          return (
            <section key={cat.id} className="w-full max-w-6xl mx-auto flex flex-col gap-5">
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl border ${cat.borderColor} ${cat.bgColor} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-xl ${cat.color}`}>{cat.icon}</span>
                </div>
                <div>
                  <h2 className={`text-lg font-bold ${cat.color} uppercase tracking-wide`}>{cat.label}</h2>
                  <p className="text-text-muted text-xs font-mono">{cat.desc}</p>
                </div>
                <span className="ml-auto px-3 py-1 rounded-full border border-border-color bg-surface text-text-muted text-xs font-mono">{catSkills.length} Skills</span>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {catSkills.map((skill) => (
                  <a
                    key={skill.slug}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group bg-surface border ${cat.borderColor} rounded-2xl p-5 flex flex-col gap-3 hover:border-primary/50 transition-colors`}
                  >
                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`material-symbols-outlined text-lg ${cat.color}`}>extension</span>
                        <code className="text-text-main font-mono font-bold text-sm">{skill.slug}</code>
                      </div>
                      <div className="flex items-center gap-1.5 text-text-muted text-[10px] font-mono">
                        <span className="material-symbols-outlined text-[12px]">download</span>
                        {skill.downloads}
                      </div>
                    </div>

                    {/* Name & Desc */}
                    <div>
                      <h3 className="text-text-main font-bold text-sm group-hover:text-primary transition-colors">{skill.name}</h3>
                      <p className="text-text-muted text-xs mt-0.5">{skill.desc}</p>
                    </div>

                    {/* Scene */}
                    <div className="flex items-start gap-2 px-3 py-2 bg-background-dark rounded-lg border border-border-color/50">
                      <span className="material-symbols-outlined text-primary text-sm mt-0.5 shrink-0">engineering</span>
                      <p className="text-text-muted text-xs leading-relaxed"><span className="text-primary font-mono text-[10px]">土木场景</span> {skill.scene}</p>
                    </div>

                    {/* Install command */}
                    <code className="text-[10px] font-mono text-text-muted bg-black px-3 py-1.5 rounded-lg block overflow-x-auto">
                      npx clawhub@latest install {skill.slug}
                    </code>
                  </a>
                ))}
              </div>
            </section>
          );
        })}

        {/* Bottom Links */}
        <section className="w-full max-w-5xl mx-auto flex flex-col items-center gap-6 pt-8 border-t border-border-color">
          <p className="text-text-muted text-sm text-center max-w-xl">
            以上 Skill 仅是 ClawHub 13,729 个社区 Skill 中与土木工程场景最相关的精选。
            更多 Skill 请访问官方市场或 GitHub 精选列表。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://clawhub.ai" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-primary text-background-dark font-mono font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              ClawHub 官方市场
            </a>
            <a href="https://github.com/VoltAgent/awesome-openclaw-skills" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border-2 border-border-color text-text-main font-mono font-bold text-xs uppercase tracking-wider hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">star</span>
              Awesome Skills · 5,400+
            </a>
            <a href="https://github.com/openclaw/skills" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border-2 border-border-color text-text-main font-mono font-bold text-xs uppercase tracking-wider hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">inventory_2</span>
              Skills 官方归档
            </a>
          </div>
          <Link href="/blog" className="text-primary font-mono text-sm hover:underline flex items-center gap-1 mt-2">
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
            查看 Skill 使用场景文章
          </Link>
        </section>
      </main>
    </>
  );
}
