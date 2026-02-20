"use client";
import { useState } from "react";

const tabs = ["📊 Dashboard", "📬 Inbox", "👥 Leads", "📈 Métricas"];

export default function Topbar() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <header className="fixed top-0 left-[230px] right-0 h-16 bg-white border-b border-border flex items-center justify-between px-8 z-40 max-lg:left-0">
      <div className="flex gap-1">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-colors ${
              i === activeTab ? "bg-primary-light text-primary font-semibold" : "text-subtle hover:bg-gray-50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3.5 py-2 bg-gray-100 rounded-lg text-[13px] text-muted min-w-[200px]">
          🔍 Buscar...
        </div>
        <div className="relative w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 text-lg">
          🔔
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-white" />
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-red-500 flex items-center justify-center text-white text-xs font-bold">
          S
        </div>
      </div>
    </header>
  );
}
