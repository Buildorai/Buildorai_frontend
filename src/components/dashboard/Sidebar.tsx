// === Dashboard: Sidebar component ===
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BarChart3,
  LayoutGrid,
  Settings,
  Database,
  ChevronLeft,
  ChevronRight,
  LogOut
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Overview", icon: Home, href: "/overview" },
  { name: "Projects", icon: LayoutGrid, href: "/projects" },
  { name: "Analytics", icon: BarChart3, href: "/analytics" },
  { name: "Data Core", icon: Database, href: "/data" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      animate={{ width: collapsed ? 80 : 280 }}
      className="relative flex h-full flex-col border-r border-white/5 bg-surface/50 backdrop-blur-xl transition-all"
    >
      <div className="flex h-20 items-center justify-between px-6">
        {!collapsed && (
          <Link href="/" className="flex items-center gap-3 text-xl font-bold text-white font-heading transition-opacity hover:opacity-80">
            <Image
              src="/logo.svg"
              alt="Buildorai Logo"
              width={28}
              height={28}
              className="h-7 w-auto"
            />
            Buildorai
          </Link>
        )}
        {collapsed && (
          <Link href="/" className="mx-auto transition-opacity hover:opacity-80">
            <Image
              src="/logo.svg"
              alt="Buildorai Logo"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-10 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-surface text-text-secondary hover:text-white"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      <nav className="flex-1 space-y-2 px-4 py-8">
        {menuItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${active
                  ? "bg-primary/10 text-primary"
                  : "text-text-secondary hover:bg-white/5 hover:text-white"
                }`}
            >
              <item.icon size={20} />
              {!collapsed && <span className="font-medium">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-2 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-text-secondary transition-all hover:bg-white/5 hover:text-white">
          <Settings size={20} />
          {!collapsed && <span className="font-medium">Settings</span>}
        </button>
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-danger/80 transition-all hover:bg-danger/10 hover:text-danger">
          <LogOut size={20} />
          {!collapsed && <span className="font-medium">Sign Out</span>}
        </button>
      </div>
    </motion.aside>
  );
}
