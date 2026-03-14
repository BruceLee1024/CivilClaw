"use client";

import { useState } from "react";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";

/* ─── 命令数据 ─── */

interface Command {
  cmd: string;
  desc: string;
  example: string;
  flags?: { flag: string; desc: string }[];
  category: string;
  tip?: string;
}

const categories = [
  { id: "core", label: "核心命令", icon: "terminal", color: "text-primary" },
  { id: "config", label: "配置管理", icon: "settings", color: "text-accent-struct" },
  { id: "skill", label: "Skill 管理", icon: "extension", color: "text-accent-geo" },
  { id: "transport", label: "消息平台", icon: "chat", color: "text-accent-survey" },
  { id: "memory", label: "记忆与数据", icon: "psychology", color: "text-accent-const" },
  { id: "debug", label: "调试与监控", icon: "bug_report", color: "text-text-main" },
];

const commands: Command[] = [
  // ─── 核心命令 ───
  {
    cmd: "openclaw onboard",
    desc: "交互式安装向导，一站式完成初始化配置",
    example: "openclaw onboard --install-daemon",
    flags: [
      { flag: "--install-daemon", desc: "同时安装后台守护进程" },
      { flag: "--skip-transport", desc: "跳过消息平台配对步骤" },
      { flag: "--model <provider>", desc: "指定默认模型供应商" },
    ],
    category: "core",
    tip: "首次安装推荐使用 --install-daemon，这样 Agent 可以后台运行",
  },
  {
    cmd: "openclaw start",
    desc: "启动 Gateway 服务（前台模式）",
    example: "openclaw start",
    flags: [
      { flag: "--port <number>", desc: "指定 WebSocket 端口（默认 18789）" },
      { flag: "--verbose", desc: "输出详细日志" },
      { flag: "--no-heartbeat", desc: "禁用 Heartbeat 定时任务" },
    ],
    category: "core",
  },
  {
    cmd: "openclaw daemon",
    desc: "管理后台守护进程",
    example: "openclaw daemon start",
    flags: [
      { flag: "start", desc: "启动守护进程" },
      { flag: "stop", desc: "停止守护进程" },
      { flag: "restart", desc: "重启守护进程" },
      { flag: "status", desc: "查看运行状态" },
      { flag: "logs", desc: "查看最近日志" },
    ],
    category: "core",
  },
  {
    cmd: "openclaw version",
    desc: "显示当前安装的 OpenClaw 版本号",
    example: "openclaw version",
    category: "core",
  },
  {
    cmd: "openclaw update",
    desc: "更新 OpenClaw 到最新版本",
    example: "openclaw update",
    flags: [
      { flag: "--canary", desc: "更新到 canary（开发预览）版本" },
    ],
    category: "core",
  },

  // ─── 配置管理 ───
  {
    cmd: "openclaw config",
    desc: "查看和修改 openclaw.json 配置",
    example: "openclaw config get models.default.model",
    flags: [
      { flag: "get <key>", desc: "读取配置项" },
      { flag: "set <key> <value>", desc: "设置配置项" },
      { flag: "list", desc: "列出所有配置" },
      { flag: "validate", desc: "验证配置文件格式" },
      { flag: "edit", desc: "在编辑器中打开配置文件" },
    ],
    category: "config",
  },
  {
    cmd: "openclaw config init",
    desc: "在当前目录创建默认 openclaw.json",
    example: "openclaw config init --model deepseek",
    flags: [
      { flag: "--model <provider>", desc: "预填充模型供应商" },
      { flag: "--minimal", desc: "生成最小配置" },
    ],
    category: "config",
    tip: "也可以使用本站的配置生成器在线生成",
  },
  {
    cmd: "openclaw env",
    desc: "管理环境变量和 API Key",
    example: "openclaw env set DEEPSEEK_API_KEY sk-xxx",
    flags: [
      { flag: "set <key> <value>", desc: "设置环境变量" },
      { flag: "get <key>", desc: "读取环境变量" },
      { flag: "list", desc: "列出所有已设置的变量" },
      { flag: "unset <key>", desc: "删除环境变量" },
    ],
    category: "config",
  },

  // ─── Skill 管理 ───
  {
    cmd: "npx clawhub@latest install <skill>",
    desc: "从 ClawHub 安装 Skill",
    example: "npx clawhub@latest install summarize",
    flags: [
      { flag: "--force", desc: "强制重新安装" },
      { flag: "--version <ver>", desc: "安装指定版本" },
    ],
    category: "skill",
    tip: "Skill 安装后会出现在 skills/ 目录下",
  },
  {
    cmd: "npx clawhub@latest search <query>",
    desc: "搜索 ClawHub 社区 Skill",
    example: "npx clawhub@latest search excel",
    flags: [
      { flag: "--limit <n>", desc: "限制返回数量" },
      { flag: "--sort downloads", desc: "按下载量排序" },
    ],
    category: "skill",
  },
  {
    cmd: "npx clawhub@latest list",
    desc: "列出已安装的 Skill",
    example: "npx clawhub@latest list",
    flags: [
      { flag: "--outdated", desc: "仅显示有更新的 Skill" },
    ],
    category: "skill",
  },
  {
    cmd: "npx clawhub@latest update",
    desc: "更新所有已安装的 Skill",
    example: "npx clawhub@latest update",
    flags: [
      { flag: "<skill>", desc: "仅更新指定 Skill" },
      { flag: "--all", desc: "更新全部" },
    ],
    category: "skill",
  },
  {
    cmd: "npx clawhub@latest remove <skill>",
    desc: "卸载已安装的 Skill",
    example: "npx clawhub@latest remove summarize",
    category: "skill",
  },
  {
    cmd: "npx clawhub@latest publish",
    desc: "将自定义 Skill 发布到 ClawHub",
    example: "npx clawhub@latest publish ./my-skill",
    flags: [
      { flag: "--dry-run", desc: "模拟发布，不实际提交" },
    ],
    category: "skill",
    tip: "发布前确保 SKILL.md 和 skill.json 格式正确",
  },

  // ─── 消息平台 ───
  {
    cmd: "openclaw transport pair",
    desc: "配对新的消息平台",
    example: "openclaw transport pair whatsapp",
    flags: [
      { flag: "whatsapp", desc: "配对 WhatsApp（扫码）" },
      { flag: "telegram", desc: "配对 Telegram Bot" },
      { flag: "feishu", desc: "配对飞书机器人" },
      { flag: "slack", desc: "配对 Slack Bot" },
      { flag: "discord", desc: "配对 Discord Bot" },
      { flag: "dingtalk", desc: "配对钉钉机器人" },
    ],
    category: "transport",
  },
  {
    cmd: "openclaw transport list",
    desc: "列出所有已配对的消息平台",
    example: "openclaw transport list",
    category: "transport",
  },
  {
    cmd: "openclaw transport remove <platform>",
    desc: "取消平台配对",
    example: "openclaw transport remove telegram",
    category: "transport",
  },
  {
    cmd: "openclaw transport test <platform>",
    desc: "向指定平台发送测试消息",
    example: "openclaw transport test whatsapp",
    category: "transport",
    tip: "配对后建议先 test 一下确认连通",
  },

  // ─── 记忆与数据 ───
  {
    cmd: "openclaw memory",
    desc: "管理 Agent 持久化记忆",
    example: "openclaw memory list",
    flags: [
      { flag: "list", desc: "列出所有记忆条目" },
      { flag: "search <query>", desc: "搜索记忆内容" },
      { flag: "clear", desc: "清空所有记忆" },
      { flag: "export", desc: "导出记忆为 Markdown 文件" },
      { flag: "import <file>", desc: "从文件导入记忆" },
    ],
    category: "memory",
  },
  {
    cmd: "openclaw heartbeat",
    desc: "管理 Heartbeat 定时任务",
    example: "openclaw heartbeat list",
    flags: [
      { flag: "list", desc: "列出当前任务" },
      { flag: "run", desc: "立即执行一次心跳检查" },
      { flag: "edit", desc: "编辑 HEARTBEAT.md 任务文件" },
    ],
    category: "memory",
    tip: "HEARTBEAT.md 中的每个任务用 Markdown checkbox 格式定义",
  },
  {
    cmd: "openclaw backup",
    desc: "备份所有数据（配置、记忆、对话）",
    example: "openclaw backup --output ./backup",
    flags: [
      { flag: "--output <dir>", desc: "指定备份目录" },
      { flag: "--include-logs", desc: "包含日志文件" },
    ],
    category: "memory",
  },

  // ─── 调试与监控 ───
  {
    cmd: "openclaw logs",
    desc: "查看 Agent 运行日志",
    example: "openclaw logs --tail 50",
    flags: [
      { flag: "--tail <n>", desc: "显示最后 N 行" },
      { flag: "--follow", desc: "实时跟踪新日志" },
      { flag: "--level <level>", desc: "过滤日志级别（info/warn/error）" },
    ],
    category: "debug",
  },
  {
    cmd: "openclaw doctor",
    desc: "诊断常见问题，输出系统环境报告",
    example: "openclaw doctor",
    category: "debug",
    tip: "遇到问题时先跑一下 doctor，输出可直接粘贴到 GitHub Issue",
  },
  {
    cmd: "openclaw chat",
    desc: "在终端直接与 Agent 对话（不通过消息平台）",
    example: "openclaw chat",
    flags: [
      { flag: "--model <model>", desc: "临时使用其他模型" },
      { flag: "--skill <skill>", desc: "仅加载指定 Skill" },
    ],
    category: "debug",
  },
  {
    cmd: "openclaw sandbox test",
    desc: "测试 Sandbox 安全沙箱配置",
    example: "openclaw sandbox test",
    category: "debug",
    tip: "验证文件系统隔离和命令执行限制是否生效",
  },
];

/* ─── 组件 ─── */

export default function CommandsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const filtered = commands.filter((c) => {
    const matchesSearch =
      !search ||
      c.cmd.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCat = !selectedCategory || c.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const grouped = categories
    .map((cat) => ({
      ...cat,
      commands: filtered.filter((c) => c.category === cat.id),
    }))
    .filter((cat) => cat.commands.length > 0);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <>
      <Header />
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-10 py-8 lg:py-12 flex flex-col gap-8">
        {/* Hero */}
        <section className="w-full max-w-5xl mx-auto flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-main uppercase tracking-tight border-l-4 border-primary pl-3 sm:pl-4">
            命令速查表
          </h1>
          <p className="text-text-muted text-sm leading-relaxed max-w-2xl">
            OpenClaw CLI 完整命令参考。涵盖核心操作、配置管理、Skill 安装、平台配对、记忆管理和调试工具。
            点击命令即可复制。
          </p>
        </section>

        {/* Search + Filter */}
        <section className="w-full max-w-5xl mx-auto flex flex-col gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-text-muted text-xl">search</span>
            </div>
            <input
              className="block w-full pl-11 pr-4 py-3 bg-surface border-2 border-border-color rounded-xl text-text-main text-sm font-mono placeholder:text-text-muted/50 focus:ring-0 focus:border-primary focus:outline-none transition-colors"
              placeholder="搜索命令... (如 install, config, skill)"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <span className="text-text-muted text-xs font-mono">{filtered.length} 个结果</span>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                selectedCategory === null
                  ? "border-primary bg-primary/20 text-primary"
                  : "border-border-color bg-surface text-text-muted hover:border-primary/50"
              }`}
            >
              全部 ({commands.length})
            </button>
            {categories.map((cat) => {
              const count = commands.filter((c) => c.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? "border-primary bg-primary/20 text-primary"
                      : "border-border-color bg-surface text-text-muted hover:border-primary/50"
                  }`}
                >
                  <span className={`material-symbols-outlined text-sm ${selectedCategory === cat.id ? "text-primary" : cat.color}`}>
                    {cat.icon}
                  </span>
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </section>

        {/* Commands Grid */}
        <section className="w-full max-w-5xl mx-auto flex flex-col gap-8">
          {grouped.map((cat) => (
            <div key={cat.id} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined text-xl ${cat.color}`}>{cat.icon}</span>
                <h2 className="text-lg font-bold text-text-main uppercase tracking-tight">{cat.label}</h2>
                <span className="text-text-muted text-xs font-mono">({cat.commands.length})</span>
              </div>
              <div className="flex flex-col gap-3">
                {cat.commands.map((cmd) => (
                  <div
                    key={cmd.cmd}
                    className="rounded-2xl border border-border-color bg-surface p-4 sm:p-5 hover:border-primary/30 transition-colors group"
                  >
                    {/* Command header */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <button
                        onClick={() => handleCopy(cmd.cmd)}
                        className="flex items-center gap-2 text-left group/copy"
                      >
                        <code className="text-primary font-mono text-sm sm:text-base font-bold group-hover/copy:underline">
                          {cmd.cmd}
                        </code>
                        <span className="material-symbols-outlined text-sm text-text-muted opacity-0 group-hover/copy:opacity-100 transition-opacity">
                          {copiedCmd === cmd.cmd ? "check" : "content_copy"}
                        </span>
                      </button>
                    </div>
                    <p className="text-text-muted text-sm mb-3">{cmd.desc}</p>

                    {/* Example */}
                    <div className="flex items-center gap-2 mb-3">
                      <button
                        onClick={() => handleCopy(cmd.example)}
                        className="flex-1 flex items-center gap-2 px-3 py-2 bg-background-dark rounded-lg border border-border-color hover:border-primary/30 transition-colors group/ex"
                      >
                        <span className="text-accent-geo font-mono text-xs">$</span>
                        <code className="text-text-main font-mono text-xs flex-1 text-left">{cmd.example}</code>
                        <span className="material-symbols-outlined text-xs text-text-muted opacity-0 group-hover/ex:opacity-100 transition-opacity">
                          {copiedCmd === cmd.example ? "check" : "content_copy"}
                        </span>
                      </button>
                    </div>

                    {/* Flags */}
                    {cmd.flags && cmd.flags.length > 0 && (
                      <div className="flex flex-col gap-1.5 mb-2">
                        {cmd.flags.map((f) => (
                          <div key={f.flag} className="flex items-start gap-2 text-xs">
                            <code className="text-accent-struct font-mono shrink-0 bg-accent-struct/5 px-1.5 py-0.5 rounded">
                              {f.flag}
                            </code>
                            <span className="text-text-muted">{f.desc}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tip */}
                    {cmd.tip && (
                      <div className="flex items-start gap-2 mt-3 px-3 py-2 rounded-lg bg-primary/5 border border-primary/10">
                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">lightbulb</span>
                        <span className="text-text-muted text-xs">{cmd.tip}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <span className="material-symbols-outlined text-4xl text-text-muted">search_off</span>
              <p className="text-text-muted font-mono text-sm">
                没有找到匹配的命令
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory(null);
                }}
                className="text-primary font-mono text-xs hover:underline"
              >
                清除筛选
              </button>
            </div>
          )}
        </section>
      </main>
      <BackToTop />
    </>
  );
}
