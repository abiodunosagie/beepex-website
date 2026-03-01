import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isHome = item.label === "Home";

        return (
          <span key={item.href ?? item.label} className="flex items-center gap-1.5">
            {index > 0 && (
              <ChevronRight className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 shrink-0" />
            )}

            {isLast ? (
              <span className="font-medium text-gray-900 dark:text-white truncate max-w-[200px] sm:max-w-none">
                {isHome ? <Home className="w-4 h-4" /> : item.label}
              </span>
            ) : (
              <Link
                href={item.href ?? "/"}
                className="text-gray-400 dark:text-gray-500 hover:text-primary-500 transition-colors duration-200 truncate max-w-[120px] sm:max-w-none flex items-center"
              >
                {isHome ? <Home className="w-4 h-4" /> : item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
