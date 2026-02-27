"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, PenLine, Film, Calendar, BarChart3,
  Brain, Cable, X, Zap,
} from "lucide-react";

const nav = [
  { section: "Principal", items: [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/contenido", label: "Contenido", icon: PenLine },
    { href: "/videos", label: "Videos", icon: Film },
    { href: "/calendario", label: "Calendario", icon: Calendar },
  ]},
  { section: "Análisis", items: [
    { href: "/analytics", label: "Analytics", icon: BarChart3 },
  ]},
  { section: "Sistema", items: [
    { href: "/cerebro", label: "Cerebro", icon: Brain },
    { href: "/integraciones", label: "Integraciones", icon: Cable },
  ]},
];

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  return (
    <>
      {open && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={onClose} />}
      <aside className={`w-[220px] bg-[#0c0c14] border-r border-white/[0.04] fixed top-0 left-0 bottom-0 flex flex-col z-50 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        {/* Logo */}
        <div className="flex items-center justify-between px-5 h-14 border-b border-white/[0.04]">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
              <Zap size={12} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="font-semibold text-[15px] text-white/90 tracking-tight">Celstock</span>
          </Link>
          <button onClick={onClose} className="lg:hidden p-1 rounded-md hover:bg-white/5">
            <X size={16} className="text-white/30" strokeWidth={1.5} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-2 pt-4">
          {nav.map((s) => (
            <div key={s.section} className="mb-4">
              <div className="text-[10px] font-medium tracking-widest text-white/15 uppercase px-3 mb-1">{s.section}</div>
              {s.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href} onClick={onClose}
                    className={`flex items-center gap-2.5 px-3 py-[7px] rounded-lg text-[13px] transition-all duration-150 relative ${
                      active
                        ? "bg-white/[0.06] text-white font-medium"
                        : "text-white/35 hover:text-white/60 hover:bg-white/[0.02]"
                    }`}>
                    <item.icon size={16} strokeWidth={active ? 2 : 1.5} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* User */}
        <div className="px-3 pb-4 border-t border-white/[0.04] pt-3">
          <div className="flex items-center gap-2.5 px-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500/60 to-cyan-400/60 flex items-center justify-center text-[11px] font-semibold text-white/80">S</div>
            <div>
              <div className="text-[12px] font-medium text-white/60">Salvador</div>
              <div className="text-[10px] text-white/20">Admin</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
