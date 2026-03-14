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
    <nav className="flex items-center gap-2 text-sm font-mono">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="text-text-muted hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-text-main">{item.label}</span>
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
