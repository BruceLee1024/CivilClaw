import type { ReactNode } from "react";
import type { ArticleMeta } from "./types";
import { Code, Terminal, H, P, Warn, Tip, Concept } from "@/components/ArticleComponents";

export const meta: ArticleMeta = {
    id: "rebar-optimizer",
    tag: "结构",
    tagClass: "border-accent-struct text-accent-struct",
    title:
      "openclaw.json 配置国产大模型——DeepSeek/通义千问/Kimi/GLM 完整教程",
    excerpt:
      "OpenClaw 是模型无关的。本文详解如何在 models.providers 中配置国产大模型，含完整 JSON 配置示例。",
    author: "赵工",
    date: "2026-02-28",
    readTime: "15 min",
    featured: false,
    icon: "view_in_ar",
    iconColor: "text-accent-struct",
  };

export const content: ReactNode = <>
      <P>
        OpenClaw 是模型无关（model-agnostic）的 AI Agent 框架。它不绑定任何特定模型，只要兼容 OpenAI API 格式的大模型都能接入。本文详解 DeepSeek、通义千问、Kimi（Moonshot）、GLM-4（智谱清言）四款国产大模型的完整配置方法。
      </P>

      <H>一、配置文件位置</H>
      <P>
        所有模型配置都在 <Code>~/.openclaw/openclaw.json</Code> 的 <Code>models.providers</Code> 字段中。每个 provider 需要 baseUrl、apiKey 和 models 数组。
      </P>

      <H>二、DeepSeek 配置</H>
      <P>DeepSeek-V3 是目前性价比最高的国产模型之一，支持 128K 上下文，推理能力强。</P>
      <Terminal label="openclaw.json - DeepSeek">{`{
  "models": {
    "providers": {
      "deepseek": {
        "baseUrl": "https://api.deepseek.com/v1",
        "apiKey": "sk-你的密钥",
        "api": "openai-completions",
        "models": [{
          "id": "deepseek-chat",
          "name": "DeepSeek-V3",
          "reasoning": true,
          "input": ["text"],
          "contextWindow": 131072,
          "maxTokens": 8192
        }]
      }
    }
  }
}`}</Terminal>
      <P>
        获取 API Key：访问 <Code>platform.deepseek.com</Code> 注册并创建 API Key。价格约 ¥1/百万 token，非常便宜。
      </P>

      <H>三、通义千问 Qwen 配置</H>
      <P>阿里云通义千问通过 DashScope API 提供服务。</P>
      <Terminal label="openclaw.json - 通义千问">{`"qwen": {
  "baseUrl": "https://dashscope.aliyuncs.com/compatible-mode/v1",
  "apiKey": "sk-你的密钥",
  "api": "openai-completions",
  "models": [{
    "id": "qwen-max",
    "name": "Qwen-Max",
    "reasoning": true,
    "input": ["text"],
    "contextWindow": 131072,
    "maxTokens": 8192
  }, {
    "id": "qwen-turbo",
    "name": "Qwen-Turbo（更快更便宜）",
    "input": ["text"],
    "contextWindow": 131072,
    "maxTokens": 8192
  }]
}`}</Terminal>

      <H>四、Kimi（Moonshot）配置</H>
      <Terminal label="openclaw.json - Kimi">{`"kimi": {
  "baseUrl": "https://api.moonshot.cn/v1",
  "apiKey": "sk-你的密钥",
  "api": "openai-completions",
  "models": [{
    "id": "moonshot-v1-128k",
    "name": "Kimi 128K",
    "input": ["text"],
    "contextWindow": 131072,
    "maxTokens": 8192
  }]
}`}</Terminal>

      <H>五、GLM-4（智谱清言）配置</H>
      <Terminal label="openclaw.json - GLM-4">{`"glm": {
  "baseUrl": "https://open.bigmodel.cn/api/paas/v4",
  "apiKey": "你的密钥",
  "api": "openai-completions",
  "models": [{
    "id": "glm-4",
    "name": "GLM-4 (智谱清言)",
    "input": ["text"],
    "contextWindow": 131072,
    "maxTokens": 8192
  }]
}`}</Terminal>

      <H>六、切换默认模型</H>
      <P>
        配置好 providers 后，修改 <Code>agents.defaults.model.primary</Code> 即可切换默认模型：
      </P>
      <Terminal label="openclaw.json - 切换模型">{`{
  "agents": {
    "defaults": {
      "model": {
        "primary": "deepseek/deepseek-chat"
      }
    }
  }
}

// 可选值示例：
// "deepseek/deepseek-chat"
// "qwen/qwen-max"
// "kimi/moonshot-v1-128k"
// "glm/glm-4"
// "anthropic/claude-sonnet-4-20250514"`}</Terminal>
      <Tip>
        <span className="font-bold">💡 建议：</span>土木工程场景推荐 DeepSeek-V3 作为默认模型——推理能力强、价格便宜、无需代理直连。处理简单任务时可切换 qwen-turbo 节省成本。
      </Tip>
    </>;
