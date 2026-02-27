"use client";
import Shell from "@/components/Shell";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import {
  Users, TrendingUp, Image, Eye, Clock,
  Bell, Heart, ArrowUpRight, Sparkles, LayoutGrid,
  Film, MessageCircle, Flame,
} from "lucide-react";

const kpis = [
  { label: "Seguidores", value: "22", change: "+3 esta semana", icon: Users },
  { label: "Engagement", value: "4.2%", change: "+0.8pp vs anterior", icon: TrendingUp },
  { label: "Posts", value: "15", change: "3 programados", icon: Image },
  { label: "Alcance", value: "8.4K", change: "+23% este mes", icon: Eye },
  { label: "Mejor hora", value: "18:00", change: "Mar y Jue", icon: Clock },
];

const alerts = [
  { icon: MessageCircle, text: "3 comentarios sin responder", time: "hace 2h" },
  { icon: Flame, text: "Post '5 errores' superó 500 likes", time: "hace 5h" },
  { icon: TrendingUp, text: "Engagement subió 12% esta semana", time: "hoy" },
];

const suggestions = [
  { title: "Tutorial: Cómo trackear IMEI", desc: "Video corto mostrando la funcionalidad estrella", type: "Reel" },
  { title: "Caso de éxito: mayorista BA", desc: "Post con datos reales de un cliente", type: "Carrusel" },
  { title: "Crédito basado en ventas", desc: "Explicar el diferencial único", type: "Post" },
];

const engagement = [
  { d: "L", v: 3.1 }, { d: "M", v: 4.5 }, { d: "X", v: 3.8 },
  { d: "J", v: 5.2 }, { d: "V", v: 4.1 }, { d: "S", v: 2.8 },
  { d: "D", v: 3.5 }, { d: "L", v: 3.9 }, { d: "M", v: 4.8 },
  { d: "X", v: 4.2 }, { d: "J", v: 5.5 }, { d: "V", v: 4.6 },
  { d: "S", v: 3.2 }, { d: "D", v: 3.7 },
];

const recentPosts = [
  { title: "Tus ventas son tu crédito", type: "Post", likes: 186, comments: 23 },
  { title: "No más conjeturas", type: "Reel", likes: 342, comments: 45 },
  { title: "Inventario en tiempo real", type: "Carrusel", likes: 128, comments: 12 },
  { title: "Espacios limitados", type: "Story", likes: 95, comments: 8 },
];

export default function Dashboard() {
  return (
    <Shell>
      <div className="mb-8">
        <h1 className="text-[20px] font-semibold text-white tracking-tight">Dashboard</h1>
        <p className="text-[13px] text-white/25 mt-1">@celstockusa · Últimos 30 días</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <k.icon size={15} className="text-white/20" strokeWidth={1.5} />
              <span className="text-[10px] text-emerald-400/70 flex items-center gap-0.5 font-medium">
                <ArrowUpRight size={10} strokeWidth={2} />
              </span>
            </div>
            <div className="text-[24px] font-semibold text-white tracking-tight leading-none">{k.value}</div>
            <div className="text-[11px] text-white/25 mt-1.5">{k.label}</div>
            <div className="text-[10px] text-white/15 mt-0.5">{k.change}</div>
          </div>
        ))}
      </div>

      {/* Alerts + Suggestions */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-4 mb-6">
        {/* Alerts */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
          <h3 className="text-[13px] font-medium text-white/70 mb-4">Alertas</h3>
          <div className="space-y-1">
            {alerts.map((a, i) => (
              <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.03] transition-colors cursor-pointer">
                <a.icon size={15} className="text-white/20 shrink-0" strokeWidth={1.5} />
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] text-white/50 truncate">{a.text}</p>
                </div>
                <span className="text-[10px] text-white/15 shrink-0">{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={14} className="text-violet-400/60" strokeWidth={1.5} />
            <h3 className="text-[13px] font-medium text-white/70">Sugerencias de hoy</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {suggestions.map((s, i) => (
              <div key={i} className="px-4 py-3.5 rounded-lg border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-200 cursor-pointer group">
                <div className="text-[10px] font-medium text-violet-400/50 uppercase tracking-wider mb-1.5">{s.type}</div>
                <h4 className="text-[12px] font-medium text-white/60 mb-1 group-hover:text-white/80 transition-colors">{s.title}</h4>
                <p className="text-[11px] text-white/20 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chart + Recent */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-4 mb-8">
        {/* Chart */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
          <h3 className="text-[13px] font-medium text-white/70 mb-4">Engagement</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={engagement}>
                <defs>
                  <linearGradient id="eg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.15} />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="d" tick={{ fill: "rgba(255,255,255,0.15)", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "rgba(255,255,255,0.15)", fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: "#141420", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, fontSize: 12, color: "rgba(255,255,255,0.7)" }}
                  cursor={{ stroke: "rgba(255,255,255,0.05)" }}
                />
                <Area type="monotone" dataKey="v" stroke="#8b5cf6" strokeWidth={1.5} fill="url(#eg)" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
          <h3 className="text-[13px] font-medium text-white/70 mb-4">Recientes</h3>
          <div className="space-y-1">
            {recentPosts.map((p, i) => (
              <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.03] transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0">
                  {p.type === "Reel" ? <Film size={14} className="text-white/20" strokeWidth={1.5} /> : <Image size={14} className="text-white/20" strokeWidth={1.5} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-medium text-white/50 truncate">{p.title}</div>
                  <div className="text-[10px] text-white/15">{p.type}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[11px] text-white/25 flex items-center gap-1"><Heart size={10} strokeWidth={1.5} /> {p.likes}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
