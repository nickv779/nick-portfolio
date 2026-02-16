"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderKanban, School, Briefcase} from "lucide-react";

interface NavItem {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", icon: <Home size={20} />, label: "Home" },
  { href: "/education", icon: <School size={20} />, label: "Education"},
  { href: "/experience", icon: <Briefcase size={20} />, label: "Experience"},
  { href: "/projects", icon: <FolderKanban size={20} />, label: "Projects" },
];

export default function SideRail() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 h-full w-14 hover:w-40 bg-surface border-r border-border transition-all duration-300 ease-in-out z-50 group">
      <div className="flex flex-col h-full py-6">
        {/* Logo / Brand */}
        <div className="px-4 mb-8">
          <div className="w-6 h-6 rounded bg-accent flex items-center justify-center text-background font-bold text-sm">
            N
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col gap-2 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors duration-200 overflow-hidden whitespace-nowrap ${
                  isActive
                    ? "bg-accent/20 text-accent"
                    : "text-muted hover:text-foreground hover:bg-elevated"
                }`}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Bottom spacer */}
        <div className="flex-1" />

        {/* Footer hint */}
        <div className="px-4 py-2">
          <span className="text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Nick&apos;s Portfolio
          </span>
        </div>
      </div>
    </nav>
  );
}
