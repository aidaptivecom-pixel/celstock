"use client";
import { useState } from "react";
import { Search, Bell, Menu, LayoutDashboard, Inbox, Users, BarChart3 } from "lucide-react";

const tabs = [
  { icon: <LayoutDashboard size={15} />, label: "Dashboard" },
  { icon: <Inbox size={15} />, label: "Inbox" },
  { icon: <Users size={15} />, label: "Leads" },
  { icon: <BarChart3 size={15} />, label: "Métricas" },
];

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <header className="fixed top-0 left-0 lg:left-[240px] right-0 h-16 bg-white/80 backdrop-blur-xl border-b border-border flex items-center justify-between px-4 lg:px-8 z-40">
      <div className="flex items-center gap-2">
        <button onClick={onMenuClick} className="lg:hidden p-2 rounded-xl hover:bg-gray-100">
          <Menu size={20} className="text-subtle" />
        </button>
        <div className="hidden sm:flex gap-1">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[13px] font-medium transition-all ${
                i === activeTab
                  ? "bg-primary/8 text-primary font-semibold shadow-sm shadow-primary/5"
                  : "text-subtle hover:bg-gray-50"
              }`}
            >
              {t.icon}
              <span className="hidden md:inline">{t.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-[13px] text-muted min-w-[180px] cursor-pointer transition-colors">
          <Search size={15} /> Buscar...
        </div>
        <div className="relative w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
          <Bell size={19} className="text-subtle" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-danger rounded-full border-2 border-white" />
        </div>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-red-500 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-accent/20 cursor-pointer">
          S
        </div>
      </div>
    </header>
  );
}
