import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-mono max-w-full overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className={`flex items-center gap-1 sm:gap-2 shrink-0 ${index === items.length - 1 ? 'min-w-0 shrink' : ''}`}>
          {item.href ? (
            <Link
              href={item.href}
              className="text-text-muted hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-text-main truncate max-w-[50vw] sm:max-w-[60vw] block">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="material-symbols-outlined text-text-muted text-sm">
              chevron_right
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
