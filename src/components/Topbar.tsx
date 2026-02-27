"use client";
import { Search, Bell, Menu } from "lucide-react";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="fixed top-0 left-0 lg:left-[220px] right-0 h-14 bg-surface/60 backdrop-blur-xl border-b border-border flex items-center justify-between px-4 lg:px-6 z-40">
      <button onClick={onMenuClick} className="lg:hidden p-2 rounded-xl hover:bg-surface-hover">
        <Menu size={20} className="text-subtle" />
      </button>
      <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-surface border border-border rounded-xl text-[13px] text-muted min-w-[200px] cursor-pointer hover:border-primary/30 transition-colors">
        <Search size={14} /> Buscar...
      </div>
      <div className="flex items-center gap-3">
        <div className="relative w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer hover:bg-surface-hover transition-colors">
          <Bell size={18} className="text-subtle" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full" />
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold cursor-pointer">S</div>
      </div>
    </header>
  );
}
