"use client";
import { MagnifyingGlass, Bell, List, UserCircle } from "@phosphor-icons/react";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="fixed top-0 left-0 lg:left-[230px] right-0 h-14 bg-[#0a0a0f]/70 backdrop-blur-2xl border-b border-white/[0.04] flex items-center justify-between px-4 lg:px-6 z-40">
      <button onClick={onMenuClick} className="lg:hidden p-2 rounded-xl hover:bg-white/5">
        <List size={20} weight="bold" className="text-white/50" />
      </button>
      <div className="hidden sm:flex items-center gap-2.5 px-3.5 py-2 bg-white/[0.03] border border-white/[0.06] rounded-xl text-[13px] text-white/30 min-w-[220px] cursor-pointer hover:bg-white/[0.05] hover:border-white/[0.08] transition-all">
        <MagnifyingGlass size={15} weight="bold" /> Buscar...
        <span className="ml-auto text-[10px] text-white/15 border border-white/[0.06] rounded px-1.5 py-0.5">⌘K</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/[0.04] transition-all">
          <Bell size={19} weight="fill" className="text-white/40" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full shadow-lg shadow-red-500/50 animate-pulse" />
        </div>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center cursor-pointer shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all">
          <UserCircle size={20} weight="fill" className="text-white/90" />
        </div>
      </div>
    </header>
  );
}
