"use client";
import Shell from "@/components/Shell";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Users, TrendingUp, Image, Eye, Clock, Bell, Heart, ArrowUpRight, Sparkles, LayoutGrid, Film } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Particles } from "@/components/ui/particles";

const kpis = [
  { icon: Users, label: "Seguidores", value: "22", change: "+3 esta semana", up: true },
  { icon: TrendingUp, label: "Engagement", value: "4.2%", change: "+0.8% vs anterior", up: true },
  { icon: Image, label: "Posts este mes", value: "15", change: "3 programados", up: true },
  { icon: Eye, label: "Alcance", value: "8.4K", change: "+23% vs anterior", up: true },
  { icon: Clock, label: "Mejor hora", value: "18:00", change: "Mar y Jue", up: true },
];

const alerts = [
  { icon: "💬", text: "3 comentarios sin responder", time: "hace 2h", color: "warning" },
  { icon: "❤️", text: "Post '5 errores' superó 500 likes", time: "hace 5h", color: "danger" },
  { icon: "📈", text: "Engagement subió 12% esta semana", time: "hoy", color: "success" },
];

const suggestions = [
  { title: "Tutorial: Cómo trackear IMEI", desc: "Video corto mostrando la funcionalidad estrella de Celstock", type: "Reel", gradient: "from-primary to-blue-600" },
  { title: "Caso de éxito: mayorista BA", desc: "Post con datos reales de un cliente que mejoró su inventario", type: "Carrusel", gradient: "from-accent to-cyan-400" },
  { title: "Crédito basado en ventas", desc: "Explicar el diferencial de la línea de crédito automática", type: "Post", gradient: "from-purple-500 to-pink-500" },
];

const engagement = [
  { day: "Lun", value: 3.1 }, { day: "Mar", value: 4.5 }, { day: "Mié", value: 3.8 },
  { day: "Jue", value: 5.2 }, { day: "Vie", value: 4.1 }, { day: "Sáb", value: 2.8 },
  { day: "Dom", value: 3.5 }, { day: "Lun", value: 3.9 }, { day: "Mar", value: 4.8 },
  { day: "Mié", value: 4.2 }, { day: "Jue", value: 5.5 }, { day: "Vie", value: 4.6 },
  { day: "Sáb", value: 3.2 }, { day: "Dom", value: 3.7 },
];

const recentPosts = [
  { title: "Tus ventas son tu crédito", type: "Post", gradient: "from-primary to-blue-600", likes: 186, comments: 23 },
  { title: "No más conjeturas", type: "Reel", gradient: "from-accent to-cyan-400", likes: 342, comments: 45 },
  { title: "Inventario en tiempo real", type: "Carrusel", gradient: "from-purple-500 to-pink-500", likes: 128, comments: 12 },
  { title: "Espacios limitados", type: "Story", gradient: "from-indigo-500 to-primary", likes: 95, comments: 8 },
];

const colorMap: Record<string, string> = { warning: "text-warning", danger: "text-danger", success: "text-success" };

export default function Dashboard() {
  return (
    <Shell>
      <div className="relative">
        <Particles className="absolute inset-0 -z-10" quantity={40} color="#7c3aed" size={0.4} />
      </div>
      <div className="mb-6">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <p className="text-[13px] text-muted mt-0.5">@celstockusa · Resumen de tu cuenta</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-5">
        {kpis.map((k) => (
          <div key={k.label} className="relative bg-surface border border-border rounded-2xl p-4 hover:border-primary/20 transition-colors overflow-hidden">
            <BorderBeam size={60} duration={8} colorFrom="#7c3aed" colorTo="#06b6d4" borderWidth={1.5} />
            <div className="flex items-center gap-2 mb-2">
              <k.icon size={15} className="text-muted" />
              <span className="text-[11px] text-muted font-medium">{k.label}</span>
            </div>
            <div className="text-lg font-bold">{k.value}</div>
            <div className="text-[11px] text-success flex items-center gap-0.5 mt-1">
              <ArrowUpRight size={11} /> {k.change}
            </div>
          </div>
        ))}
      </div>

      {/* Alerts + Suggestions */}
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] gap-5 mb-5">
        {/* Alerts */}
        <div className="bg-surface border border-border rounded-2xl p-5">
          <h3 className="text-[15px] font-bold flex items-center gap-2 mb-4">
            <Bell size={16} className="text-warning" /> Alertas
          </h3>
          <div className="space-y-3">
            {alerts.map((a, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-bg rounded-xl">
                <span className="text-lg">{a.icon}</span>
                <div className="flex-1">
                  <p className="text-[13px] font-medium">{a.text}</p>
                  <p className="text-[11px] text-muted mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        <div className="bg-surface border border-border rounded-2xl p-5">
          <h3 className="text-[15px] font-bold flex items-center gap-2 mb-4">
            <Sparkles size={16} className="text-primary-light" /> Sugerencias de hoy
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {suggestions.map((s, i) => (
              <div key={i} className="bg-bg rounded-xl p-4 hover:border-primary/20 border border-transparent transition-colors cursor-pointer group">
                <div className={`w-10 h-10 bg-gradient-to-br ${s.gradient} rounded-xl flex items-center justify-center mb-3`}>
                  {s.type === "Reel" ? <Film size={16} className="text-white" /> : <LayoutGrid size={16} className="text-white" />}
                </div>
                <h4 className="text-[13px] font-semibold mb-1">{s.title}</h4>
                <p className="text-[11px] text-muted mb-3">{s.desc}</p>
                <span className="text-[11px] font-semibold text-primary group-hover:text-primary-light transition-colors">Crear →</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chart + Recent */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-5 mb-8">
        {/* Engagement Chart */}
        <div className="bg-surface border border-border rounded-2xl p-5">
          <h3 className="text-[15px] font-bold mb-4">Engagement últimos 14 días</h3>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={engagement}>
                <defs>
                  <linearGradient id="engGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e1e2e" />
                <XAxis dataKey="day" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "#13131a", border: "1px solid #1e1e2e", borderRadius: 12, fontSize: 12 }} />
                <Area type="monotone" dataKey="value" stroke="#7c3aed" strokeWidth={2} fill="url(#engGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-surface border border-border rounded-2xl p-5">
          <h3 className="text-[15px] font-bold mb-4">Posts recientes</h3>
          <div className="space-y-3">
            {recentPosts.map((p, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-hover transition-colors cursor-pointer">
                <div className={`w-12 h-12 bg-gradient-to-br ${p.gradient} rounded-xl flex items-center justify-center shrink-0`}>
                  {p.type === "Reel" ? <Film size={16} className="text-white/80" /> : <Image size={16} className="text-white/80" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold truncate">{p.title}</div>
                  <div className="text-[11px] text-muted">{p.type}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[12px] flex items-center gap-1 text-subtle"><Heart size={11} /> {p.likes}</div>
                  <div className="text-[11px] text-muted">{p.comments} com.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
