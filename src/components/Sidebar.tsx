"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, PenTool, Film, Calendar, BarChart3,
  Brain, Plug, X, Sparkles,
} from "lucide-react";

const nav = [
  { section: "Principal", items: [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/contenido", label: "Contenido", icon: PenTool },
    { href: "/videos", label: "Videos", icon: Film },
    { href: "/calendario", label: "Calendario", icon: Calendar },
  ]},
  { section: "Análisis", items: [
    { href: "/analytics", label: "Analytics", icon: BarChart3 },
  ]},
  { section: "Sistema", items: [
    { href: "/cerebro", label: "Cerebro", icon: Brain },
    { href: "/integraciones", label: "Integraciones", icon: Plug },
  ]},
];

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  return (
    <>
      {open && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />}
      <aside className={`w-[220px] bg-surface/80 backdrop-blur-xl border-r border-border fixed top-0 left-0 bottom-0 flex flex-col z-50 transition-transform duration-200 ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="flex items-center justify-between px-5 py-5">
          <Link href="/" className="flex items-center gap-2.5 font-extrabold text-[17px]">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Celstock</span>
          </Link>
          <button onClick={onClose} className="lg:hidden p-1 rounded-lg hover:bg-surface-hover">
            <X size={18} className="text-muted" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3">
          {nav.map((s) => (
            <div key={s.section}>
              <div className="text-[10px] font-bold tracking-widest text-muted/50 uppercase px-3 mt-6 mb-1.5">{s.section}</div>
              {s.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href} onClick={onClose}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${active ? "bg-primary/15 text-primary-light font-semibold" : "text-subtle hover:bg-surface-hover hover:text-text"}`}>
                    <item.icon size={17} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
        <div className="px-3 pb-4">
          <div className="border-t border-border pt-4 mx-2 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold">S</div>
            <div>
              <div className="text-[13px] font-semibold">Salvador</div>
              <div className="text-[11px] text-muted">Admin</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
