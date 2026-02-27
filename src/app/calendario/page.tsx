"use client";
import { useState } from "react";
import Shell from "@/components/Shell";
import { ChevronLeft, ChevronRight, Clock, Film, Image, LayoutGrid, Instagram } from "lucide-react";

const daysOfWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

const posts: Record<number, { title: string; type: string; status: "published" | "scheduled" | "draft" }[]> = {
  3: [{ title: "Tus ventas son tu crédito", type: "post", status: "published" }],
  5: [{ title: "No más conjeturas", type: "reel", status: "published" }],
  7: [{ title: "Inventario IA", type: "carousel", status: "published" }],
  10: [{ title: "IMEI tracking", type: "reel", status: "published" }],
  12: [{ title: "Caso TechCell", type: "post", status: "published" }],
  14: [{ title: "Escalá ventas", type: "carousel", status: "published" }],
  17: [{ title: "Crédito mayorista", type: "post", status: "published" }],
  20: [{ title: "5 errores revendedor", type: "carousel", status: "published" }],
  24: [{ title: "Tutorial stock", type: "reel", status: "scheduled" }],
  25: [{ title: "Tips temporada", type: "carousel", status: "scheduled" }],
  27: [{ title: "Caso éxito BA", type: "post", status: "draft" }, { title: "Story promo", type: "story", status: "draft" }],
  28: [{ title: "Arancel 0", type: "carousel", status: "scheduled" }],
};

const statusColors = { published: "bg-success", scheduled: "bg-primary", draft: "bg-muted" };

const hours = [
  [0.2, 0.1, 0.3, 0.5, 0.2, 0.1, 0.1],
  [0.3, 0.4, 0.2, 0.3, 0.3, 0.2, 0.1],
  [0.5, 0.7, 0.6, 0.8, 0.5, 0.3, 0.2],
  [0.8, 0.9, 0.7, 1.0, 0.8, 0.4, 0.3],
  [0.6, 0.7, 0.5, 0.6, 0.6, 0.5, 0.4],
  [0.3, 0.4, 0.3, 0.4, 0.3, 0.6, 0.5],
];
const hourLabels = ["9:00", "12:00", "15:00", "18:00", "20:00", "22:00"];

export default function Calendario() {
  const [selectedDay, setSelectedDay] = useState(27);
  const totalDays = 28;
  const startDay = 5; // February starts on Saturday (index 5)

  const cells = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= totalDays; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <Shell>
      <div className="mb-6">
        <h1 className="text-xl font-bold">Calendario</h1>
        <p className="text-[13px] text-muted mt-0.5">Planificá y visualizá tu contenido</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-5 mb-5">
        {/* Calendar */}
        <div className="bg-surface border border-border rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-lg hover:bg-surface-hover text-muted"><ChevronLeft size={16} /></button>
              <h3 className="text-[15px] font-bold">Febrero 2026</h3>
              <button className="p-1.5 rounded-lg hover:bg-surface-hover text-muted"><ChevronRight size={16} /></button>
            </div>
            <div className="flex items-center gap-3 text-[10px]">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-success" /> Publicado</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary" /> Programado</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-muted" /> Borrador</span>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {daysOfWeek.map((d) => (
              <div key={d} className="text-center text-[10px] font-bold text-muted uppercase py-2">{d}</div>
            ))}
            {cells.map((day, i) => (
              <div
                key={i}
                onClick={() => day && setSelectedDay(day)}
                className={`min-h-[70px] rounded-xl p-1.5 transition-colors cursor-pointer ${
                  day === null ? "" :
                  day === selectedDay ? "bg-primary/10 border border-primary/30" :
                  "hover:bg-surface-hover border border-transparent"
                }`}
              >
                {day && (
                  <>
                    <div className={`text-[12px] font-semibold mb-1 ${day === 27 ? "text-primary-light" : "text-subtle"}`}>{day}</div>
                    <div className="flex flex-wrap gap-0.5">
                      {(posts[day] || []).map((p, j) => (
                        <div key={j} className={`w-1.5 h-1.5 rounded-full ${statusColors[p.status]}`} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Day detail + Best hours */}
        <div className="space-y-5">
          <div className="bg-surface border border-border rounded-2xl p-5">
            <h3 className="text-[15px] font-bold mb-3">{selectedDay} de Febrero</h3>
            {(posts[selectedDay] || []).length === 0 ? (
              <p className="text-[13px] text-muted">No hay posts para este día</p>
            ) : (
              <div className="space-y-2">
                {(posts[selectedDay] || []).map((p, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-bg rounded-xl">
                    <div className={`w-2 h-8 rounded-full ${statusColors[p.status]}`} />
                    <div className="flex-1">
                      <div className="text-[13px] font-semibold">{p.title}</div>
                      <div className="text-[11px] text-muted capitalize">{p.type}</div>
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-lg ${
                      p.status === "published" ? "bg-success/10 text-success" :
                      p.status === "scheduled" ? "bg-primary/10 text-primary-light" :
                      "bg-muted/10 text-muted"
                    }`}>{p.status === "published" ? "Publicado" : p.status === "scheduled" ? "Programado" : "Borrador"}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Best hours heatmap */}
          <div className="bg-surface border border-border rounded-2xl p-5">
            <h3 className="text-[15px] font-bold flex items-center gap-2 mb-3">
              <Clock size={15} className="text-accent" /> Mejores horarios
            </h3>
            <div className="space-y-1.5">
              <div className="grid grid-cols-8 gap-1">
                <div />
                {daysOfWeek.map((d) => (
                  <div key={d} className="text-[9px] text-muted text-center font-bold">{d}</div>
                ))}
              </div>
              {hours.map((row, hi) => (
                <div key={hi} className="grid grid-cols-8 gap-1">
                  <div className="text-[9px] text-muted flex items-center">{hourLabels[hi]}</div>
                  {row.map((val, di) => (
                    <div
                      key={di}
                      className="h-6 rounded-md"
                      style={{ backgroundColor: `rgba(124, 58, 237, ${val * 0.8 + 0.05})` }}
                      title={`${hourLabels[hi]} ${daysOfWeek[di]}: ${Math.round(val * 100)}%`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <p className="text-[10px] text-muted mt-2">🟣 Más oscuro = más engagement</p>
          </div>
        </div>
      </div>
    </Shell>
  );
}
