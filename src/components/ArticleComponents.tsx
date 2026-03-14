"use client";

import type { ReactNode } from "react";
import { useState } from "react";

export function Code({ children }: { children: string }) {
  return (
    <code className="text-primary bg-black px-1.5 py-0.5 rounded font-mono text-sm">
      {children}
    </code>
  );
}

export function Terminal({
  label,
  children,
}: {
  label: string;
  children: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 简单的语法高亮
  const highlightSyntax = (code: string) => {
    const lines = code.split('\n');
    return lines.map((line, i) => {
      // 命令提示符
      if (line.startsWith('$') || line.startsWith('#')) {
        const [prompt, ...rest] = line.split(' ');
        return (
          <div key={i}>
            <span className="text-accent-geo">{prompt}</span>
            {rest.length > 0 && <span className="text-[#A9B7C6]"> {rest.join(' ')}</span>}
          </div>
        );
      }
      // 注释
      if (line.trim().startsWith('#')) {
        return <div key={i} className="text-text-muted italic">{line}</div>;
      }
      // 输出行（通常以 > 或其他字符开头）
      if (line.startsWith('>') || line.startsWith('✓') || line.startsWith('⨯')) {
        return <div key={i} className="text-accent-survey">{line}</div>;
      }
      // 普通行
      return <div key={i} className="text-[#A9B7C6]">{line}</div>;
    });
  };

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-border-color bg-surface-darker shadow-2xl group">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border-color bg-[#151515]">
        <span className="text-text-muted font-mono text-xs tracking-widest">
          {label}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-surface-hover border border-border-color text-text-muted hover:text-primary hover:border-primary/50 transition-colors text-xs font-mono opacity-0 group-hover:opacity-100"
          title="复制代码"
        >
          <span className="material-symbols-outlined text-sm">
            {copied ? "check" : "content_copy"}
          </span>
          {copied ? "已复制" : "复制"}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed">
          {highlightSyntax(children)}
        </pre>
      </div>
    </div>
  );
}

export function H({ children }: { children: string }) {
  return (
    <h3 className="text-2xl font-bold uppercase tracking-wide mt-10 mb-4 border-l-4 border-primary pl-4">
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-text-main/80 text-sm mb-4">{children}</p>;
}

export function Warn({ children }: { children: ReactNode }) {
  return (
    <div className="p-4 bg-accent-struct/5 border border-accent-struct/20 rounded-xl">
      <p className="text-sm text-accent-struct font-mono">{children}</p>
    </div>
  );
}

export function Tip({ children }: { children: ReactNode }) {
  return (
    <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
      <p className="text-sm text-primary font-mono">{children}</p>
    </div>
  );
}

export function Concept({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="p-4 bg-background-dark rounded-xl border border-border-color">
      <h4 className="text-sm font-bold text-primary mb-2">{title}</h4>
      <p className="text-text-muted text-sm font-mono">{children}</p>
    </div>
  );
}
