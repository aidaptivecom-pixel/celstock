"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChartLineUp, PenNib, FilmStrip, CalendarDots,
  ChartBar, Brain, Plugs, X, Sparkle, UserCircle,
} from "@phosphor-icons/react";

const nav = [
  { section: "Principal", items: [
    { href: "/", label: "Dashboard", icon: ChartLineUp },
    { href: "/contenido", label: "Contenido", icon: PenNib },
    { href: "/videos", label: "Videos", icon: FilmStrip },
    { href: "/calendario", label: "Calendario", icon: CalendarDots },
  ]},
  { section: "Análisis", items: [
    { href: "/analytics", label: "Analytics", icon: ChartBar },
  ]},
  { section: "Sistema", items: [
    { href: "/cerebro", label: "Cerebro", icon: Brain },
    { href: "/integraciones", label: "Integraciones", icon: Plugs },
  ]},
];

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  return (
    <>
      {open && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={onClose} />}
      <aside className={`w-[230px] bg-[#0d0d14]/90 backdrop-blur-2xl border-r border-white/[0.04] fixed top-0 left-0 bottom-0 flex flex-col z-50 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-5">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-primary via-purple-500 to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Sparkle size={18} weight="fill" className="text-white" />
            </div>
            <span className="font-extrabold text-[17px] bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Celstock</span>
          </Link>
          <button onClick={onClose} className="lg:hidden p-1.5 rounded-xl hover:bg-white/5">
            <X size={18} className="text-white/40" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 mt-2">
          {nav.map((s) => (
            <div key={s.section}>
              <div className="text-[10px] font-bold tracking-[0.15em] text-white/20 uppercase px-3 mt-6 mb-2">{s.section}</div>
              {s.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href} onClick={onClose}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 group relative ${
                      active
                        ? "bg-gradient-to-r from-primary/15 to-transparent text-white font-semibold"
                        : "text-white/40 hover:text-white/70 hover:bg-white/[0.03]"
                    }`}>
                    {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-primary rounded-r-full" />}
                    <item.icon
                      size={19}
                      weight={active ? "fill" : "regular"}
                      className={`transition-all duration-200 ${active ? "text-primary-light drop-shadow-[0_0_6px_rgba(124,58,237,0.5)]" : "group-hover:text-white/60"}`}
                    />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* User */}
        <div className="px-4 pb-5">
          <div className="border-t border-white/[0.04] pt-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center shadow-lg shadow-primary/10">
              <UserCircle size={20} weight="fill" className="text-white/90" />
            </div>
            <div>
              <div className="text-[13px] font-semibold text-white/80">Salvador</div>
              <div className="text-[11px] text-white/25">Admin</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
