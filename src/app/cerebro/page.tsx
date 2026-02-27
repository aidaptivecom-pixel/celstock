"use client";
import { useState } from "react";
import Shell from "@/components/Shell";
import { Brain, Building2, Package, MessageSquare, Target, Users, Zap, Save, CheckCircle } from "lucide-react";

const sections = [
  {
    icon: Building2, title: "Negocio", desc: "Información general de la empresa",
    fields: [
      { label: "Nombre", value: "Celstock", type: "input" },
      { label: "Descripción", value: "Software de inventario con IA para revendedores de celulares. Línea de crédito basada en ventas para mayoristas.", type: "textarea" },
      { label: "Industria", value: "SaaS / Tecnología / Telecom", type: "input" },
      { label: "País", value: "Argentina (expandiendo a LATAM)", type: "input" },
    ],
  },
  {
    icon: Package, title: "Productos", desc: "Lo que ofrecen",
    fields: [
      { label: "Productos/Servicios", value: "• Inventario inteligente con tracking de IMEI\n• Línea de crédito basada en ventas (sin garantías)\n• Dashboard de ventas en tiempo real\n• Análisis predictivo de stock\n• Gestión de proveedores y mayoristas", type: "textarea" },
    ],
  },
  {
    icon: MessageSquare, title: "Tono de marca", desc: "Cómo habla Celstock",
    fields: [
      { label: "Voz", value: "Profesional pero accesible. Tech-forward. Confiable. Usa emojis con moderación. Mezcla español neutro con toques argentinos para LATAM.", type: "textarea" },
      { label: "Ejemplos de frases", value: "• \"Tus ventas son tu crédito\"\n• \"No más conjeturas\"\n• \"Inventario inteligente, decisiones más inteligentes\"", type: "textarea" },
    ],
  },
  {
    icon: Target, title: "Competencia", desc: "Principales competidores",
    fields: [
      { label: "Competidores", value: "• Sistemas genéricos de inventario (no especializados en celulares)\n• Excel/Google Sheets (la mayoría usa esto)\n• ERPs costosos no adaptados al rubro", type: "textarea" },
    ],
  },
  {
    icon: Zap, title: "USPs", desc: "Propuestas de valor únicas",
    fields: [
      { label: "Diferenciales", value: "• Único sistema de inventario con IA para el rubro celulares\n• Crédito basado en ventas reales (sin papeles, sin garantías)\n• Tracking automático de IMEI\n• Análisis predictivo: te dice qué comprar y cuándo\n• Hecho por y para revendedores argentinos", type: "textarea" },
    ],
  },
  {
    icon: Users, title: "Audiencia", desc: "A quién le hablan",
    fields: [
      { label: "Público objetivo", value: "Revendedores mayoristas y minoristas de celulares en Argentina y LATAM. Locales de 1-50 empleados. Manejan entre 50 y 5000 equipos por mes.", type: "textarea" },
      { label: "Pain points", value: "• Pérdida de equipos por mal tracking\n• Stock desactualizado\n• Falta de capital para comprar stock\n• Competencia por precio sin datos\n• Gestión manual en Excel que lleva horas", type: "textarea" },
    ],
  },
];

export default function Cerebro() {
  const [saved, setSaved] = useState<string | null>(null);

  const handleSave = (title: string) => {
    setSaved(title);
    setTimeout(() => setSaved(null), 2000);
  };

  return (
    <Shell>
      <div className="mb-6">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Brain size={22} className="text-accent" /> Cerebro
        </h1>
        <p className="text-[13px] text-muted mt-0.5">El sistema usa este contexto para generar contenido relevante</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
        {sections.map((s) => (
          <div key={s.title} className="bg-surface border border-border rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent/10 rounded-xl flex items-center justify-center">
                <s.icon size={16} className="text-accent" />
              </div>
              <div>
                <h3 className="text-[14px] font-bold">{s.title}</h3>
                <p className="text-[11px] text-muted">{s.desc}</p>
              </div>
            </div>
            <div className="space-y-3">
              {s.fields.map((f) => (
                <div key={f.label}>
                  <label className="text-[11px] font-bold text-muted uppercase tracking-wider">{f.label}</label>
                  {f.type === "input" ? (
                    <input defaultValue={f.value} className="w-full mt-1 px-3 py-2 bg-bg border border-border rounded-xl text-[13px] text-text focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/50" />
                  ) : (
                    <textarea defaultValue={f.value} rows={4} className="w-full mt-1 px-3 py-2.5 bg-bg border border-border rounded-xl text-[13px] text-text resize-none focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/50" />
                  )}
                </div>
              ))}
            </div>
            <button onClick={() => handleSave(s.title)}
              className="mt-4 px-4 py-2 bg-accent/10 text-accent text-[12px] font-semibold rounded-xl hover:bg-accent/20 transition-colors flex items-center gap-1.5">
              {saved === s.title ? <><CheckCircle size={13} /> Guardado</> : <><Save size={13} /> Guardar</>}
            </button>
          </div>
        ))}
      </div>
    </Shell>
  );
}
