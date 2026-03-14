import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background-dark">
      <div className="max-w-2xl w-full text-center flex flex-col items-center gap-8">
        {/* 404 Icon */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-primary">
              search_off
            </span>
          </div>
          <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-accent-struct/20 border border-accent-struct flex items-center justify-center">
            <span className="material-symbols-outlined text-xl text-accent-struct">
              close
            </span>
          </div>
        </div>

        {/* Error Code */}
        <div className="flex flex-col gap-3">
          <h1 className="text-8xl font-bold text-primary font-mono">404</h1>
          <h2 className="text-2xl font-bold text-text-main uppercase tracking-wide">
            页面走丢了
          </h2>
          <p className="text-text-muted text-sm max-w-md mx-auto">
            你的虾找不到这个页面。可能是链接失效了，或者这个页面从来就不存在。
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4 w-full max-w-md">
          <Link
            href="/"
            className="px-6 py-4 bg-primary text-background-dark rounded-xl font-mono font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">home</span>
            回到虾塘首页
          </Link>
          
          <div className="grid grid-cols-3 gap-3">
            <Link
              href="/blog"
              className="px-4 py-3 bg-surface border border-border-color rounded-xl hover:border-primary/50 transition-colors flex flex-col items-center gap-2 group"
            >
              <span className="material-symbols-outlined text-xl text-accent-struct group-hover:text-primary transition-colors">
                menu_book
              </span>
              <span className="text-xs font-mono text-text-muted group-hover:text-text-main transition-colors">
                养虾手册
              </span>
            </Link>
            
            <Link
              href="/skills"
              className="px-4 py-3 bg-surface border border-border-color rounded-xl hover:border-primary/50 transition-colors flex flex-col items-center gap-2 group"
            >
              <span className="material-symbols-outlined text-xl text-accent-geo group-hover:text-primary transition-colors">
                extension
              </span>
              <span className="text-xs font-mono text-text-muted group-hover:text-text-main transition-colors">
                虾饲料
              </span>
            </Link>
            
            <Link
              href="/library"
              className="px-4 py-3 bg-surface border border-border-color rounded-xl hover:border-primary/50 transition-colors flex flex-col items-center gap-2 group"
            >
              <span className="material-symbols-outlined text-xl text-accent-survey group-hover:text-primary transition-colors">
                folder_open
              </span>
              <span className="text-xs font-mono text-text-muted group-hover:text-text-main transition-colors">
                装备库
              </span>
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 p-4 bg-surface border border-border-color rounded-xl">
          <p className="text-xs font-mono text-text-muted">
            如果你认为这是个错误，请在{" "}
            <a
              href="https://github.com/BruceLee1024/CivilClaw/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub Issues
            </a>{" "}
            反馈
          </p>
        </div>
      </div>
    </div>
  );
}
