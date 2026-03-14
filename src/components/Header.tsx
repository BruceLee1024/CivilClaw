"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SearchTrigger } from "@/components/GlobalSearch";

const navItems = [
  { href: "/", label: "虾塘" },
  { href: "/blog", label: "养虾手册" },
  { href: "/skills", label: "虾饲料" },
  { href: "/library", label: "装备库" },
  { href: "/config-generator", label: "配置器" },
  { href: "/commands", label: "命令表" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
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
        <div className="flex items-center gap-3">
          <SearchTrigger />
          <div className="hidden lg:flex font-mono text-xs text-primary items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            GitHub Stars：286K+
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-lg bg-surface border border-border-color flex items-center justify-center text-text-main hover:border-primary transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] z-40 bg-background-dark/95 backdrop-blur-md border-b border-border-color">
          <nav className="flex flex-col p-6 gap-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl border transition-colors ${
                    isActive
                      ? "bg-primary/10 border-primary text-primary font-bold"
                      : "bg-surface border-border-color text-text-muted hover:text-text-main hover:border-primary/50"
                  }`}
                >
                  <span className="text-sm font-mono uppercase tracking-widest">
                    {item.label}
                  </span>
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-border-color">
              <div className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-primary">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                GitHub Stars：286K+
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
