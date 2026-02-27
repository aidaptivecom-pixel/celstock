"use client";
import { useState } from "react";
import Shell from "@/components/Shell";
import { Plug, CheckCircle, Clock, Circle, Eye, EyeOff, ExternalLink, Settings } from "lucide-react";

type Status = "connected" | "pending" | "disconnected";

interface Integration {
  name: string;
  desc: string;
  gradient: string;
  status: Status;
  apiKey?: string;
  fields?: { label: string; placeholder: string; value?: string }[];
}

const integrations: Integration[] = [
  {
    name: "Instagram Graph API",
    desc: "Publicar, métricas, comentarios y alertas",
    gradient: "from-pink-500 to-purple-600",
    status: "pending",
    fields: [
      { label: "App ID", placeholder: "Tu Facebook App ID" },
      { label: "App Secret", placeholder: "App Secret" },
      { label: "Access Token", placeholder: "Token de larga duración" },
    ],
  },
  {
    name: "Meta Business Suite",
    desc: "Gestión de cuenta y permisos",
    gradient: "from-blue-500 to-blue-700",
    status: "pending",
    fields: [
      { label: "Business ID", placeholder: "ID de negocio" },
      { label: "System User Token", placeholder: "Token de usuario del sistema" },
    ],
  },
  {
    name: "Anthropic (Claude)",
    desc: "Generación de captions, estrategia e ideas",
    gradient: "from-orange-400 to-amber-600",
    status: "connected",
    apiKey: "sk-ant-api03-****...****wkV-LwAA",
    fields: [
      { label: "API Key", placeholder: "sk-ant-...", value: "sk-ant-api03-****...****wkV-LwAA" },
    ],
  },
  {
    name: "OpenAI (DALL-E)",
    desc: "Generación de imágenes para posts",
    gradient: "from-green-400 to-emerald-600",
    status: "disconnected",
    fields: [
      { label: "API Key", placeholder: "sk-proj-..." },
    ],
  },
  {
    name: "HeyGen",
    desc: "Videos con avatar IA personalizado",
    gradient: "from-violet-500 to-fuchsia-600",
    status: "disconnected",
    fields: [
      { label: "API Key", placeholder: "Tu API key de HeyGen" },
      { label: "Avatar ID", placeholder: "ID del avatar personalizado" },
    ],
  },
  {
    name: "Supabase",
    desc: "Base de datos y almacenamiento",
    gradient: "from-emerald-500 to-green-700",
    status: "connected",
    apiKey: "eyJhb****...****jot5",
    fields: [
      { label: "Project URL", placeholder: "https://xxx.supabase.co", value: "https://eacrjsuyir****.supabase.co" },
      { label: "Service Role Key", placeholder: "eyJhb...", value: "eyJhb****...****jot5" },
    ],
  },
  {
    name: "Google Analytics",
    desc: "Métricas web y conversiones",
    gradient: "from-yellow-400 to-orange-500",
    status: "disconnected",
    fields: [
      { label: "Measurement ID", placeholder: "G-XXXXXXXXXX" },
      { label: "API Secret", placeholder: "Tu API secret" },
    ],
  },
  {
    name: "Webhook personalizado",
    desc: "Alertas y notificaciones externas",
    gradient: "from-gray-400 to-gray-600",
    status: "disconnected",
    fields: [
      { label: "URL", placeholder: "https://tu-webhook.com/endpoint" },
      { label: "Secret", placeholder: "Clave secreta (opcional)" },
    ],
  },
];

const statusConfig: Record<Status, { label: string; color: string; bg: string; icon: typeof CheckCircle }> = {
  connected: { label: "Conectado", color: "text-success", bg: "bg-success/10", icon: CheckCircle },
  pending: { label: "Pendiente", color: "text-warning", bg: "bg-warning/10", icon: Clock },
  disconnected: { label: "No configurado", color: "text-muted", bg: "bg-muted/10", icon: Circle },
};

export default function Integraciones() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});

  return (
    <Shell>
      <div className="mb-6">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Plug size={22} className="text-primary-light" /> Integraciones
        </h1>
        <p className="text-[13px] text-muted mt-0.5">Conectá servicios externos para potenciar la plataforma</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {integrations.map((intg) => {
          const st = statusConfig[intg.status];
          const isExpanded = expanded === intg.name;
          return (
            <div
              key={intg.name}
              className={`bg-surface border rounded-2xl overflow-hidden transition-all ${
                intg.status === "connected" ? "border-success/20" :
                intg.status === "pending" ? "border-warning/20" :
                "border-border"
              }`}
            >
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className={`w-11 h-11 bg-gradient-to-br ${intg.gradient} rounded-xl flex items-center justify-center shrink-0`}>
                    <Plug size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[14px] font-bold">{intg.name}</h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${st.bg} ${st.color} flex items-center gap-1`}>
                        <st.icon size={10} /> {st.label}
                      </span>
                    </div>
                    <p className="text-[12px] text-muted mt-0.5">{intg.desc}</p>
                  </div>
                  <button
                    onClick={() => setExpanded(isExpanded ? null : intg.name)}
                    className={`px-3 py-1.5 text-[11px] font-semibold rounded-xl transition-all ${
                      intg.status === "connected"
                        ? "bg-surface-hover text-subtle hover:text-text"
                        : "bg-primary/10 text-primary-light hover:bg-primary/20"
                    }`}
                  >
                    {intg.status === "connected" ? <Settings size={13} /> : "Conectar"}
                  </button>
                </div>

                {/* API key preview */}
                {intg.apiKey && !isExpanded && (
                  <div className="mt-3 flex items-center gap-2 px-3 py-2 bg-bg rounded-xl">
                    <span className="text-[11px] text-muted font-mono flex-1 truncate">{intg.apiKey}</span>
                    <button onClick={() => setShowKeys({ ...showKeys, [intg.name]: !showKeys[intg.name] })} className="text-muted hover:text-text">
                      {showKeys[intg.name] ? <EyeOff size={13} /> : <Eye size={13} />}
                    </button>
                  </div>
                )}
              </div>

              {/* Expanded config */}
              {isExpanded && intg.fields && (
                <div className="border-t border-border bg-bg/50 p-5 space-y-3">
                  {intg.fields.map((f) => (
                    <div key={f.label}>
                      <label className="text-[11px] font-bold text-muted uppercase tracking-wider">{f.label}</label>
                      <input
                        type="password"
                        defaultValue={f.value || ""}
                        placeholder={f.placeholder}
                        className="w-full mt-1 px-3 py-2 bg-surface border border-border rounded-xl text-[13px] text-text focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 placeholder:text-muted/50"
                      />
                    </div>
                  ))}
                  <div className="flex gap-2 pt-1">
                    <button className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white text-[12px] font-semibold rounded-xl hover:opacity-90">
                      {intg.status === "connected" ? "Actualizar" : "Guardar y conectar"}
                    </button>
                    {intg.status === "connected" && (
                      <button className="px-4 py-2 bg-danger/10 text-danger text-[12px] font-semibold rounded-xl hover:bg-danger/20">
                        Desconectar
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Shell>
  );
}
