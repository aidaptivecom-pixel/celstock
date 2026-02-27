"use client";
import Shell from "@/components/Shell";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import {
  UsersThree, TrendUp, ImageSquare, Eye, Clock,
  BellRinging, Heart, ArrowUpRight, Sparkle, SquaresFour,
  FilmStrip, Lightning, ChatTeardropDots, Fire,
} from "@phosphor-icons/react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Particles } from "@/components/ui/particles";

const kpis = [
  { icon: UsersThree, label: "Seguidores", value: "22", change: "+3 esta semana", gradient: "from-purple-500/20 to-purple-500/5", glow: "shadow-purple-500/10" },
  { icon: TrendUp, label: "Engagement", value: "4.2%", change: "+0.8% vs anterior", gradient: "from-cyan-500/20 to-cyan-500/5", glow: "shadow-cyan-500/10" },
  { icon: ImageSquare, label: "Posts este mes", value: "15", change: "3 programados", gradient: "from-blue-500/20 to-blue-500/5", glow: "shadow-blue-500/10" },
  { icon: Eye, label: "Alcance", value: "8.4K", change: "+23% vs anterior", gradient: "from-emerald-500/20 to-emerald-500/5", glow: "shadow-emerald-500/10" },
  { icon: Clock, label: "Mejor hora", value: "18:00", change: "Mar y Jue", gradient: "from-amber-500/20 to-amber-500/5", glow: "shadow-amber-500/10" },
];

const alerts = [
  { icon: ChatTeardropDots, text: "3 comentarios sin responder", time: "hace 2h", color: "text-amber-400", bg: "bg-amber-500/10" },
  { icon: Fire, text: "Post '5 errores' superó 500 likes", time: "hace 5h", color: "text-red-400", bg: "bg-red-500/10" },
  { icon: TrendUp, text: "Engagement subió 12% esta semana", time: "hoy", color: "text-emerald-400", bg: "bg-emerald-500/10" },
];

const suggestions = [
  { title: "Tutorial: Cómo trackear IMEI", desc: "Video corto mostrando la funcionalidad estrella", type: "Reel", gradient: "from-primary to-blue-600" },
  { title: "Caso de éxito: mayorista BA", desc: "Post con datos reales de un cliente", type: "Carrusel", gradient: "from-accent to-cyan-400" },
  { title: "Crédito basado en ventas", desc: "Explicar el diferencial único de Celstock", type: "Post", gradient: "from-purple-500 to-pink-500" },
];

const engagement = [
  { day: "Lun", v: 3.1 }, { day: "Mar", v: 4.5 }, { day: "Mié", v: 3.8 },
  { day: "Jue", v: 5.2 }, { day: "Vie", v: 4.1 }, { day: "Sáb", v: 2.8 },
  { day: "Dom", v: 3.5 }, { day: "Lun", v: 3.9 }, { day: "Mar", v: 4.8 },
  { day: "Mié", v: 4.2 }, { day: "Jue", v: 5.5 }, { day: "Vie", v: 4.6 },
  { day: "Sáb", v: 3.2 }, { day: "Dom", v: 3.7 },
];

const recentPosts = [
  { title: "Tus ventas son tu crédito", type: "Post", gradient: "from-primary to-blue-600", likes: 186, comments: 23 },
  { title: "No más conjeturas", type: "Reel", gradient: "from-accent to-cyan-400", likes: 342, comments: 45 },
  { title: "Inventario en tiempo real", type: "Carrusel", gradient: "from-purple-500 to-pink-500", likes: 128, comments: 12 },
  { title: "Espacios limitados", type: "Story", gradient: "from-indigo-500 to-primary", likes: 95, comments: 8 },
];

export default function Dashboard() {
  return (
    <Shell>
      {/* Background particles */}
      <Particles className="fixed inset-0 -z-10" quantity={30} color="#7c3aed" size={0.3} />

      <div className="mb-6">
        <h1 className="text-xl font-bold text-white">Dashboard</h1>
        <p className="text-[13px] text-white/30 mt-0.5">@celstockusa · Resumen de tu cuenta</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-5">
        {kpis.map((k, i) => (
          <div key={k.label} className={`relative bg-[#0f0f17] border border-white/[0.06] rounded-2xl p-4 overflow-hidden hover:border-white/[0.1] transition-all duration-300 shadow-lg ${k.glow}`}>
            {i === 0 && <BorderBeam size={60} duration={8} colorFrom="#7c3aed" colorTo="#06b6d4" borderWidth={1.5} />}
            <div className={`absolute inset-0 bg-gradient-to-b ${k.gradient} pointer-events-none`} />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-white/[0.05] flex items-center justify-center">
                  <k.icon size={17} weight="duotone" className="text-white/50" />
                </div>
              </div>
              <div className="text-[22px] font-bold text-white tracking-tight">{k.value}</div>
              <div className="text-[11px] text-white/30 font-medium mt-0.5">{k.label}</div>
              <div className="text-[10px] text-emerald-400/80 flex items-center gap-0.5 mt-2">
                <ArrowUpRight size={10} weight="bold" /> {k.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Alerts + Suggestions */}
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] gap-5 mb-5">
        <div className="bg-[#0f0f17] border border-white/[0.06] rounded-2xl p-5">
          <h3 className="text-[14px] font-bold text-white flex items-center gap-2 mb-4">
            <BellRinging size={17} weight="fill" className="text-amber-400" /> Alertas
          </h3>
          <div className="space-y-2">
            {alerts.map((a, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl border border-white/[0.03] hover:bg-white/[0.04] transition-colors">
                <div className={`w-8 h-8 rounded-xl ${a.bg} flex items-center justify-center shrink-0`}>
                  <a.icon size={15} weight="fill" className={a.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-medium text-white/70">{a.text}</p>
                  <p className="text-[10px] text-white/20 mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0f0f17] border border-white/[0.06] rounded-2xl p-5">
          <h3 className="text-[14px] font-bold text-white flex items-center gap-2 mb-4">
            <Sparkle size={17} weight="fill" className="text-purple-400" /> Sugerencias de hoy
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {suggestions.map((s, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-200 cursor-pointer group">
                <div className={`w-10 h-10 bg-gradient-to-br ${s.gradient} rounded-xl flex items-center justify-center mb-3 shadow-lg group-hover:scale-105 transition-transform`}>
                  {s.type === "Reel" ? <FilmStrip size={17} weight="fill" className="text-white/90" /> : <SquaresFour size={17} weight="fill" className="text-white/90" />}
                </div>
                <h4 className="text-[12px] font-semibold text-white/80 mb-1">{s.title}</h4>
                <p className="text-[11px] text-white/25 mb-3 leading-relaxed">{s.desc}</p>
                <span className="text-[11px] font-semibold text-primary-light/70 group-hover:text-primary-light transition-colors">Crear →</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chart + Recent */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-5 mb-8">
        <div className="bg-[#0f0f17] border border-white/[0.06] rounded-2xl p-5">
          <h3 className="text-[14px] font-bold text-white mb-4">Engagement últimos 14 días</h3>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={engagement}>
                <defs>
                  <linearGradient id="engGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="day" tick={{ fill: "rgba(255,255,255,0.2)", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "rgba(255,255,255,0.2)", fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "#13131a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, fontSize: 12, color: "#fff" }} />
                <Area type="monotone" dataKey="v" stroke="#7c3aed" strokeWidth={2} fill="url(#engGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#0f0f17] border border-white/[0.06] rounded-2xl p-5">
          <h3 className="text-[14px] font-bold text-white mb-4">Posts recientes</h3>
          <div className="space-y-2">
            {recentPosts.map((p, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.03] transition-colors cursor-pointer">
                <div className={`w-11 h-11 bg-gradient-to-br ${p.gradient} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                  {p.type === "Reel" ? <FilmStrip size={16} weight="fill" className="text-white/80" /> : <ImageSquare size={16} weight="fill" className="text-white/80" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-semibold text-white/70 truncate">{p.title}</div>
                  <div className="text-[10px] text-white/20">{p.type}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[11px] flex items-center gap-1 text-white/30"><Heart size={10} weight="fill" className="text-red-400/50" /> {p.likes}</div>
                  <div className="text-[10px] text-white/15">{p.comments} com.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
