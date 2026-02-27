"use client";
import Shell from "@/components/Shell";
import { Film, Plus, Play, Clock, CheckCircle, Edit3, Sparkles, User, ArrowRight } from "lucide-react";

const columns = [
  { title: "💡 Idea", color: "muted", items: [
    { title: "Día en la vida de un revendedor", type: "Trending", duration: "30s" },
    { title: "Comparativa: Excel vs Celstock", type: "Tutorial", duration: "60s" },
  ]},
  { title: "📝 Guión", color: "primary", items: [
    { title: "IMEI tracking en 30 segundos", type: "Tutorial", duration: "30s" },
  ]},
  { title: "🎬 Producción", color: "warning", items: [
    { title: "Crédito basado en ventas", type: "Producto", duration: "45s" },
  ]},
  { title: "✅ Listo", color: "success", items: [
    { title: "5 errores del revendedor", type: "Educativo", duration: "60s" },
  ]},
  { title: "📤 Publicado", color: "accent", items: [
    { title: "No escalar sin datos", type: "Motivacional", duration: "15s" },
  ]},
];

const statusColors: Record<string, string> = {
  muted: "border-muted/30",
  primary: "border-primary/30",
  warning: "border-warning/30",
  success: "border-success/30",
  accent: "border-accent/30",
};

const dotColors: Record<string, string> = {
  muted: "bg-muted",
  primary: "bg-primary",
  warning: "bg-warning",
  success: "bg-success",
  accent: "bg-accent",
};

export default function Videos() {
  return (
    <Shell>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <div>
          <h1 className="text-xl font-bold">Videos</h1>
          <p className="text-[13px] text-muted mt-0.5">Pipeline de producción de video</p>
        </div>
        <button className="px-4 py-2.5 bg-gradient-to-r from-primary to-accent text-white text-[13px] font-semibold rounded-xl hover:opacity-90 flex items-center gap-2">
          <Plus size={14} /> Nuevo Video
        </button>
      </div>

      {/* Kanban */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-5">
        {columns.map((col) => (
          <div key={col.title} className="min-w-[220px] flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-2 h-2 rounded-full ${dotColors[col.color]}`} />
              <h3 className="text-[13px] font-bold">{col.title}</h3>
              <span className="text-[11px] text-muted ml-auto">{col.items.length}</span>
            </div>
            <div className="space-y-2">
              {col.items.map((item, i) => (
                <div key={i} className={`bg-surface border ${statusColors[col.color]} rounded-xl p-3.5 hover:bg-surface-hover transition-colors cursor-pointer group`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Film size={13} className="text-muted" />
                    <span className="text-[11px] text-muted font-medium">{item.type}</span>
                    <span className="text-[11px] text-muted ml-auto flex items-center gap-1"><Clock size={10} /> {item.duration}</span>
                  </div>
                  <h4 className="text-[13px] font-semibold">{item.title}</h4>
                </div>
              ))}
              <button className="w-full py-2.5 border border-dashed border-border rounded-xl text-[12px] text-muted hover:border-primary/30 hover:text-primary transition-colors flex items-center justify-center gap-1.5">
                <Plus size={13} /> Agregar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* HeyGen */}
      <div className="bg-surface border border-border rounded-2xl p-5 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <User size={18} className="text-white" />
          </div>
          <div>
            <h3 className="text-[15px] font-bold">Avatar IA · HeyGen</h3>
            <p className="text-[11px] text-muted">Generá videos con la avatar de Celstock</p>
          </div>
          <span className="ml-auto px-3 py-1 bg-warning/10 text-warning text-[11px] font-bold rounded-lg">Pendiente conexión</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-bg border border-border rounded-xl p-4">
            <div className="text-[12px] font-semibold mb-1">1. Conectar API</div>
            <p className="text-[11px] text-muted">Configurar HeyGen en Integraciones</p>
          </div>
          <div className="bg-bg border border-border rounded-xl p-4">
            <div className="text-[12px] font-semibold mb-1">2. Elegir Avatar</div>
            <p className="text-[11px] text-muted">Seleccionar o crear avatar personalizado</p>
          </div>
          <div className="bg-bg border border-border rounded-xl p-4">
            <div className="text-[12px] font-semibold mb-1">3. Generar Video</div>
            <p className="text-[11px] text-muted">El guión se genera con IA y el avatar lo presenta</p>
          </div>
        </div>
      </div>
    </Shell>
  );
}
