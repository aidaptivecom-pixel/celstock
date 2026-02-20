"use client";
import { navItems } from "@/data/mock";

export default function Sidebar() {
  return (
    <aside className="w-[230px] bg-white border-r border-border fixed top-0 left-0 bottom-0 flex flex-col p-4 z-50 max-lg:hidden">
      <div className="flex items-center gap-2.5 px-2 pb-6 font-extrabold text-[17px]">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-sm">📱</div>
        Cel Stock
      </div>

      <nav className="flex-1 overflow-y-auto">
        {navItems.map((section) => (
          <div key={section.section}>
            <div className="text-[11px] font-semibold tracking-wider text-muted uppercase px-2 mt-5 mb-2">
              {section.section}
            </div>
            {section.items.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer relative transition-colors ${
                  item.active
                    ? "bg-primary-light text-primary font-semibold"
                    : "text-subtle hover:bg-gray-50 hover:text-text"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`absolute right-2.5 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    item.badgeColor === "accent" ? "bg-accent-light text-accent" :
                    item.badgeColor === "success" ? "bg-success-light text-success" :
                    "bg-primary-light text-primary"
                  }`}>
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm font-medium text-subtle hover:bg-gray-50 cursor-pointer mb-2">
          ⚙️ Configuración
        </div>
        <div className="border-t border-border pt-4 flex items-center gap-2.5 px-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-red-500 flex items-center justify-center text-white text-xs font-bold">S</div>
          <div>
            <div className="text-[13px] font-semibold">Salvador</div>
            <div className="text-[11px] text-muted">Administrador</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
