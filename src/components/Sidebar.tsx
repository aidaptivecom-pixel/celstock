"use client";
import { navItems } from "@/data/mock";
import { LayoutDashboard, Inbox, Users, CheckCircle, Megaphone, FileText, Handshake, Bot, Zap, Mail, BarChart3, DollarSign, Settings, Smartphone, X, Menu } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Dashboard": <LayoutDashboard size={18} />,
  "Inbox": <Inbox size={18} />,
  "Leads": <Users size={18} />,
  "Suscriptores": <CheckCircle size={18} />,
  "Campañas": <Megaphone size={18} />,
  "Contenido": <FileText size={18} />,
  "Influencers": <Handshake size={18} />,
  "Agente IA": <Bot size={18} />,
  "Flujos": <Zap size={18} />,
  "Secuencias": <Mail size={18} />,
  "Métricas": <BarChart3 size={18} />,
  "ROI": <DollarSign size={18} />,
};

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={onClose} />}

      <aside className={`w-[240px] bg-white border-r border-border fixed top-0 left-0 bottom-0 flex flex-col z-50 transition-transform duration-200 ${
        open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}>
        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-2.5 font-extrabold text-[17px]">
            <div className="w-9 h-9 bg-gradient-to-br from-accent to-orange-600 rounded-xl flex items-center justify-center text-white">
              <Smartphone size={18} />
            </div>
            Cel Stock
          </div>
          <button onClick={onClose} className="lg:hidden p-1 rounded-lg hover:bg-gray-100">
            <X size={18} className="text-muted" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3">
          {navItems.map((section) => (
            <div key={section.section}>
              <div className="text-[10px] font-bold tracking-widest text-muted/60 uppercase px-3 mt-6 mb-1.5">
                {section.section}
              </div>
              {section.items.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-medium cursor-pointer relative transition-all ${
                    item.active
                      ? "bg-primary/8 text-primary font-semibold shadow-sm shadow-primary/5"
                      : "text-subtle hover:bg-gray-50 hover:text-text"
                  }`}
                >
                  {iconMap[item.label] || <span className="w-[18px]">{item.icon}</span>}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`ml-auto text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      item.badgeColor === "accent" ? "bg-accent/10 text-accent" :
                      item.badgeColor === "success" ? "bg-success/10 text-success" :
                      "bg-primary/10 text-primary"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </nav>

        <div className="px-3 pb-3">
          <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-medium text-subtle hover:bg-gray-50 cursor-pointer">
            <Settings size={18} /> Configuración
          </div>
          <div className="border-t border-border mt-3 pt-4 mx-2 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-red-500 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-accent/20">S</div>
            <div>
              <div className="text-[13px] font-semibold">Salvador</div>
              <div className="text-[11px] text-muted">Administrador</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
