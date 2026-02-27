"use client";
import { Search, Bell, Menu } from "lucide-react";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="fixed top-0 left-0 lg:left-[220px] right-0 h-14 bg-[#08080d]/80 backdrop-blur-xl border-b border-white/[0.04] flex items-center justify-between px-4 lg:px-6 z-40">
      <button onClick={onMenuClick} className="lg:hidden p-2 rounded-lg hover:bg-white/5">
        <Menu size={18} className="text-white/40" strokeWidth={1.5} />
      </button>
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/[0.05] rounded-lg text-[13px] text-white/20 min-w-[200px] cursor-pointer hover:bg-white/[0.05] transition-all">
        <Search size={14} strokeWidth={1.5} /> Buscar...
        <kbd className="ml-auto text-[10px] text-white/10 bg-white/[0.04] rounded px-1.5 py-0.5 font-mono">⌘K</kbd>
      </div>
      <div className="flex items-center gap-1">
        <div className="relative w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/[0.04] transition-all">
          <Bell size={17} className="text-white/30" strokeWidth={1.5} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-violet-500 rounded-full" />
        </div>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500/60 to-cyan-400/60 flex items-center justify-center text-[10px] font-semibold text-white/80 cursor-pointer">S</div>
      </div>
    </header>
  );
}
