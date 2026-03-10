"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "虾塘" },
  { href: "/blog", label: "养虾手册" },
  { href: "/skills", label: "虾饲料" },
  { href: "/library", label: "装备库" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-color bg-background-dark/90 backdrop-blur-md px-6 lg:px-10 py-3">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-4 text-primary">
          <div className="size-6 bg-primary text-black flex items-center justify-center rounded-sm">
            <span className="material-symbols-outlined text-sm font-bold">
              hub
            </span>
          </div>
          <h2 className="text-text-main text-xl font-bold tracking-tight uppercase">
            CivilClaw
          </h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "text-text-main border-l-2 border-primary pl-2 text-sm font-bold tracking-widest uppercase"
                    : "text-text-muted hover:text-text-main text-sm font-medium tracking-widest uppercase transition-colors"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex font-mono text-xs text-primary items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
          GitHub Stars：286K+ | Gateway 状态：正常
        </div>
        <div className="w-8 h-8 rounded-full bg-surface border border-border-color flex items-center justify-center text-text-main">
          <span className="material-symbols-outlined text-xl">person</span>
        </div>
      </div>
    </header>
  );
}
