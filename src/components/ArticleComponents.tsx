import type { ReactNode } from "react";

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
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-border-color bg-surface-darker shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border-color bg-[#151515]">
        <span className="text-text-muted font-mono text-xs tracking-widest">
          {label}
        </span>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed text-[#A9B7C6]">
          {children}
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
