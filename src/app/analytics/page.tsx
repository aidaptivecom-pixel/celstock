"use client";
import { useState } from "react";
import Shell from "@/components/Shell";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, Eye, Heart, Film, Image, LayoutGrid } from "lucide-react";

const followers = [
  { d: "1", v: 8 }, { d: "3", v: 9 }, { d: "5", v: 9 }, { d: "7", v: 10 }, { d: "9", v: 11 },
  { d: "11", v: 12 }, { d: "13", v: 13 }, { d: "15", v: 14 }, { d: "17", v: 15 }, { d: "19", v: 16 },
  { d: "21", v: 17 }, { d: "23", v: 19 }, { d: "25", v: 20 }, { d: "27", v: 22 },
];

const engagement = [
  { d: "S1", v: 3.1 }, { d: "S2", v: 4.5 }, { d: "S3", v: 3.8 }, { d: "S4", v: 5.2 },
];

const reach = [
  { d: "S1", v: 1200 }, { d: "S2", v: 2100 }, { d: "S3", v: 1800 }, { d: "S4", v: 3300 },
];

const topPosts = [
  { title: "No más conjeturas", type: "Reel", likes: 342, comments: 45, reach: 3200, gradient: "from-accent to-cyan-400" },
  { title: "5 errores revendedor", type: "Carrusel", likes: 186, comments: 23, reach: 2100, gradient: "from-primary to-blue-600" },
  { title: "Tus ventas son tu crédito", type: "Post", likes: 128, comments: 12, reach: 1800, gradient: "from-purple-500 to-pink-500" },
  { title: "IMEI tracking", type: "Reel", likes: 95, comments: 8, reach: 1500, gradient: "from-indigo-500 to-primary" },
  { title: "Inventario en tiempo real", type: "Carrusel", likes: 87, comments: 11, reach: 1200, gradient: "from-primary to-accent" },
  { title: "Escalá ventas", type: "Post", likes: 72, comments: 6, reach: 980, gradient: "from-violet-500 to-fuchsia-500" },
];

const insights = [
  { label: "Reels", value: "5.1%", desc: "engagement promedio", best: true },
  { label: "Carruseles", value: "4.2%", desc: "engagement promedio", best: false },
  { label: "Posts", value: "3.1%", desc: "engagement promedio", best: false },
  { label: "Stories", value: "2.8%", desc: "engagement promedio", best: false },
];

export default function Analytics() {
  const [period, setPeriod] = useState("30d");

  return (
    <Shell>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <div>
          <h1 className="text-xl font-bold">Analytics</h1>
          <p className="text-[13px] text-muted mt-0.5">Métricas y rendimiento de contenido</p>
        </div>
        <div className="flex bg-surface border border-border rounded-xl overflow-hidden">
          {["7d", "30d", "90d"].map((p) => (
            <button key={p} onClick={() => setPeriod(p)}
              className={`px-4 py-2 text-[12px] font-semibold transition-all ${period === p ? "bg-primary text-white" : "text-subtle hover:bg-surface-hover"}`}>
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mb-5">
        <div className="bg-surface border border-border rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-1"><Users size={14} className="text-accent" /><span className="text-[13px] font-bold">Seguidores</span></div>
          <div className="text-2xl font-bold mb-1">22</div>
          <div className="text-[11px] text-success mb-3">+175% este mes</div>
          <div className="h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={followers}>
                <defs><linearGradient id="fGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#06b6d4" stopOpacity={0.3} /><stop offset="100%" stopColor="#06b6d4" stopOpacity={0} /></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e1e2e" />
                <XAxis dataKey="d" tick={{ fill: "#6b7280", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "#13131a", border: "1px solid #1e1e2e", borderRadius: 12, fontSize: 12, color: "#f1f1f4" }} />
                <Area type="monotone" dataKey="v" stroke="#06b6d4" strokeWidth={2} fill="url(#fGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-1"><TrendingUp size={14} className="text-primary-light" /><span className="text-[13px] font-bold">Engagement</span></div>
          <div className="text-2xl font-bold mb-1">4.2%</div>
          <div className="text-[11px] text-success mb-3">+0.8% vs anterior</div>
          <div className="h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagement}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e1e2e" />
                <XAxis dataKey="d" tick={{ fill: "#6b7280", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "#13131a", border: "1px solid #1e1e2e", borderRadius: 12, fontSize: 12, color: "#f1f1f4" }} />
                <Bar dataKey="v" fill="#7c3aed" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-1"><Eye size={14} className="text-warning" /><span className="text-[13px] font-bold">Alcance</span></div>
          <div className="text-2xl font-bold mb-1">8.4K</div>
          <div className="text-[11px] text-success mb-3">+23% este mes</div>
          <div className="h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={reach}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e1e2e" />
                <XAxis dataKey="d" tick={{ fill: "#6b7280", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "#13131a", border: "1px solid #1e1e2e", borderRadius: 12, fontSize: 12, color: "#f1f1f4" }} />
                <Bar dataKey="v" fill="#f59e0b" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Posts + Insights */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-5 mb-8">
        <div className="bg-surface border border-border rounded-2xl p-5">
          <h3 className="text-[15px] font-bold mb-4">Top posts</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {topPosts.map((p, i) => (
              <div key={i} className="bg-bg rounded-xl overflow-hidden cursor-pointer group hover:ring-1 hover:ring-primary/30 transition-all">
                <div className={`h-24 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                  {p.type === "Reel" ? <Film size={20} className="text-white/70" /> : p.type === "Carrusel" ? <LayoutGrid size={20} className="text-white/70" /> : <Image size={20} className="text-white/70" />}
                </div>
                <div className="p-3">
                  <div className="text-[12px] font-semibold truncate">{p.title}</div>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-muted">
                    <span className="flex items-center gap-0.5"><Heart size={9} /> {p.likes}</span>
                    <span>{p.comments} com.</span>
                    <span className="ml-auto"><Eye size={9} className="inline" /> {p.reach}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-5">
          <h3 className="text-[15px] font-bold mb-4">Mejor tipo de contenido</h3>
          <div className="space-y-3">
            {insights.map((ins, i) => (
              <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${ins.best ? "bg-primary/10 border border-primary/20" : "bg-bg"}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${ins.best ? "bg-primary/20" : "bg-surface"}`}>
                  {ins.label === "Reels" ? <Film size={16} className={ins.best ? "text-primary-light" : "text-muted"} /> :
                   ins.label === "Carruseles" ? <LayoutGrid size={16} className="text-muted" /> :
                   ins.label === "Posts" ? <Image size={16} className="text-muted" /> :
                   <Eye size={16} className="text-muted" />}
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-semibold">{ins.label}</div>
                  <div className="text-[11px] text-muted">{ins.desc}</div>
                </div>
                <div className={`text-[15px] font-bold ${ins.best ? "text-primary-light" : "text-subtle"}`}>{ins.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
