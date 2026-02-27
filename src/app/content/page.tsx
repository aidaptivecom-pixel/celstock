"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import {
  Sparkles,
  Instagram,
  Image,
  Film,
  LayoutGrid,
  Clock,
  CheckCircle,
  FileEdit,
  Eye,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Copy,
  RefreshCw,
} from "lucide-react";

const contentTypes = [
  { value: "carousel", label: "Carrusel", icon: <LayoutGrid size={14} /> },
  { value: "reel", label: "Reel", icon: <Film size={14} /> },
  { value: "post", label: "Post único", icon: <Image size={14} /> },
  { value: "story", label: "Story", icon: <Instagram size={14} /> },
];

const tones = [
  { value: "professional", label: "Profesional" },
  { value: "casual", label: "Casual" },
  { value: "educational", label: "Educativo" },
  { value: "urgent", label: "Urgente" },
];

const sampleOutput = {
  caption: `🔥 5 errores que todo revendedor de celulares comete (y cómo evitarlos)

1️⃣ No trackear el IMEI de cada equipo
2️⃣ Fijar precios sin mirar el mercado en tiempo real
3️⃣ Stockearse de modelos que no rotan
4️⃣ No tener sistema de crédito para mayoristas
5️⃣ Llevar el inventario en una planilla de Excel

Con Celstock automatizás todo esto. Inventario inteligente + línea de crédito basada en tus ventas.

💬 ¿Cuál de estos errores cometés? Contanos 👇`,
  hashtags: "#celstock #revendedorcelulares #stockcelulares #inventario #mayorista #celulares #argentina #tecnologia #emprendedores #negocio",
  imagePrompt: "Diseño futurista con fondo oscuro degradado púrpura-azul. Texto grande '5 ERRORES' con efecto neón. Iconos minimalistas de cada error. Logo Celstock en esquina inferior. Estética tech/premium.",
};

const weekDays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const calendarData = [
  { day: "Lun", date: 24, posts: [{ title: "5 errores del revendedor", type: "Carrusel", status: "published" }] },
  { day: "Mar", date: 25, posts: [{ title: "Reel: IMEI en 30 seg", type: "Reel", status: "scheduled" }] },
  { day: "Mié", date: 26, posts: [] },
  { day: "Jue", date: 27, posts: [{ title: "Caso TechCell BA", type: "Post", status: "draft" }, { title: "Story: Tips stock", type: "Story", status: "draft" }] },
  { day: "Vie", date: 28, posts: [{ title: "Arancel 0 — Oportunidad", type: "Carrusel", status: "scheduled" }] },
  { day: "Sáb", date: 1, posts: [] },
  { day: "Dom", date: 2, posts: [{ title: "Motivacional domingo", type: "Post", status: "draft" }] },
];

const feedPosts = [
  { title: "5 errores", gradient: "from-purple-600 to-blue-600", type: "Carrusel" },
  { title: "IMEI 30 seg", gradient: "from-blue-600 to-cyan-500", type: "Reel" },
  { title: "Caso TechCell", gradient: "from-indigo-600 to-purple-600", type: "Post" },
  { title: "Tips stock", gradient: "from-violet-600 to-fuchsia-500", type: "Story" },
  { title: "Arancel 0", gradient: "from-blue-500 to-indigo-600", type: "Carrusel" },
  { title: "Crédito mayorista", gradient: "from-cyan-500 to-blue-600", type: "Post" },
  { title: "No más Excel", gradient: "from-purple-500 to-pink-500", type: "Reel" },
  { title: "Inventario IA", gradient: "from-indigo-500 to-cyan-400", type: "Post" },
  { title: "Escalá ventas", gradient: "from-fuchsia-600 to-purple-600", type: "Carrusel" },
];

const recentPosts = [
  { title: "5 errores del revendedor", type: "Carrusel", date: "24 Feb 18:00", status: "Publicado", statusColor: "success", views: "2,340", likes: "186", comments: "23" },
  { title: "Reel: IMEI en 30 seg", type: "Reel", date: "25 Feb 12:00", status: "Programado", statusColor: "primary", views: "—", likes: "—", comments: "—" },
  { title: "Caso de éxito: TechCell BA", type: "Post", date: "27 Feb 10:00", status: "Borrador", statusColor: "accent", views: "—", likes: "—", comments: "—" },
  { title: "Arancel 0 — Oportunidad", type: "Carrusel", date: "28 Feb 18:00", status: "Programado", statusColor: "primary", views: "—", likes: "—", comments: "—" },
  { title: "Motivacional domingo", type: "Post", date: "2 Mar 09:00", status: "Borrador", statusColor: "accent", views: "—", likes: "—", comments: "—" },
];

const statusStyles: Record<string, string> = {
  published: "bg-success/10 text-success",
  scheduled: "bg-primary/10 text-primary",
  draft: "bg-accent/10 text-accent",
};

const statusLabels: Record<string, string> = {
  published: "Publicado",
  scheduled: "Programado",
  draft: "Borrador",
};

export default function ContentPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [contentType, setContentType] = useState("carousel");
  const [tone, setTone] = useState("professional");
  const [generated, setGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-bg">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Topbar onMenuClick={() => setSidebarOpen(true)} />

      <main className="lg:ml-[240px] mt-16 p-4 sm:p-6 lg:p-7">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
          <div>
            <h1 className="text-xl sm:text-[22px] font-bold">Generador de Contenido</h1>
            <p className="text-[13px] text-muted mt-0.5">Creá contenido para Instagram con IA · @celstockusa</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-3 py-2 bg-success/10 text-success rounded-xl text-xs font-semibold">
              <Instagram size={14} /> Conectado
            </span>
          </div>
        </div>

        {/* AI Generator */}
        <div className="bg-white border border-border rounded-2xl p-5 mb-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-gradient-to-br from-purple to-primary rounded-xl flex items-center justify-center text-white">
              <Sparkles size={18} />
            </div>
            <div>
              <h3 className="text-[15px] font-bold">Generador IA</h3>
              <p className="text-[11px] text-muted">Describí el tema y generamos caption, hashtags e imagen</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 mb-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ej: Tips para revendedores sobre cómo manejar el stock en temporada alta..."
              className="w-full h-24 px-4 py-3 bg-bg border border-border rounded-xl text-[13px] resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-muted"
            />
            <div className="flex flex-col gap-2">
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="px-3 py-2.5 bg-bg border border-border rounded-xl text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {contentTypes.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="px-3 py-2.5 bg-bg border border-border rounded-xl text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {tones.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
              <button
                onClick={handleGenerate}
                disabled={generating}
                className="px-5 py-2.5 bg-gradient-to-r from-purple to-primary text-white text-[13px] font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {generating ? (
                  <><RefreshCw size={14} className="animate-spin" /> Generando...</>
                ) : (
                  <><Sparkles size={14} /> Generar con IA</>
                )}
              </button>
            </div>
          </div>

          {/* Generated Output */}
          {generated && (
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="bg-bg/50 px-4 py-3 border-b border-border flex items-center justify-between">
                <span className="text-[13px] font-semibold flex items-center gap-2">
                  <CheckCircle size={14} className="text-success" /> Contenido generado
                </span>
                <div className="flex items-center gap-1.5">
                  <button className="p-1.5 rounded-lg hover:bg-white text-muted hover:text-text transition-colors" title="Copiar">
                    <Copy size={14} />
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-white text-muted hover:text-text transition-colors" title="Regenerar">
                    <RefreshCw size={14} />
                  </button>
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <label className="text-[11px] font-bold text-muted uppercase tracking-wider">Caption</label>
                  <p className="text-[13px] mt-1.5 whitespace-pre-line leading-relaxed">{sampleOutput.caption}</p>
                </div>
                <div>
                  <label className="text-[11px] font-bold text-muted uppercase tracking-wider">Hashtags</label>
                  <p className="text-[13px] mt-1.5 text-primary">{sampleOutput.hashtags}</p>
                </div>
                <div>
                  <label className="text-[11px] font-bold text-muted uppercase tracking-wider">Prompt de imagen</label>
                  <p className="text-[13px] mt-1.5 text-subtle italic">{sampleOutput.imagePrompt}</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <button className="px-4 py-2 bg-primary text-white text-[12px] font-semibold rounded-xl hover:opacity-90 transition-all flex items-center gap-1.5">
                    <Calendar size={13} /> Programar
                  </button>
                  <button className="px-4 py-2 bg-bg border border-border text-[12px] font-semibold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-1.5">
                    <FileEdit size={13} /> Guardar borrador
                  </button>
                  <button className="px-4 py-2 bg-bg border border-border text-[12px] font-semibold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-1.5">
                    <Image size={13} /> Generar imagen
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Calendar + Feed Preview */}
        <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-5 mb-5">
          {/* Calendar */}
          <div className="bg-white border border-border rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[15px] font-bold flex items-center gap-2">
                <Calendar size={16} /> Calendario semanal
              </h3>
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded-lg hover:bg-gray-100 text-muted"><ChevronLeft size={16} /></button>
                <span className="text-[13px] font-semibold px-2">24 Feb — 2 Mar</span>
                <button className="p-1.5 rounded-lg hover:bg-gray-100 text-muted"><ChevronRight size={16} /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {calendarData.map((day) => (
                <div key={day.day} className="min-h-[120px]">
                  <div className="text-center mb-2">
                    <div className="text-[10px] font-bold text-muted uppercase">{day.day}</div>
                    <div className={`text-[15px] font-bold ${day.date === 27 ? "w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center mx-auto" : ""}`}>
                      {day.date}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {day.posts.map((post, i) => (
                      <div
                        key={i}
                        className={`p-1.5 rounded-lg text-[10px] font-medium cursor-pointer hover:opacity-80 transition-opacity ${statusStyles[post.status]}`}
                      >
                        <div className="font-semibold truncate">{post.title}</div>
                        <div className="opacity-70">{post.type}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feed Preview */}
          <div className="bg-white border border-border rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[15px] font-bold flex items-center gap-2">
                <Instagram size={16} /> Preview del feed
              </h3>
              <span className="text-[11px] text-muted">@celstockusa</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {feedPosts.map((post, i) => (
                <div
                  key={i}
                  className={`aspect-square bg-gradient-to-br ${post.gradient} rounded-xl flex flex-col items-center justify-center p-2 cursor-pointer hover:opacity-90 transition-opacity relative group`}
                >
                  <div className="text-white/80 mb-1">
                    {post.type === "Carrusel" ? <LayoutGrid size={16} /> :
                     post.type === "Reel" ? <Film size={16} /> :
                     post.type === "Story" ? <Instagram size={16} /> :
                     <Image size={16} />}
                  </div>
                  <span className="text-[9px] text-white font-semibold text-center leading-tight">{post.title}</span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <Heart size={14} className="text-white" />
                    <MessageCircle size={14} className="text-white" />
                    <Bookmark size={14} className="text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-white border border-border rounded-2xl p-5 mb-8">
          <h3 className="text-[15px] font-bold mb-4">Publicaciones recientes</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-[11px] font-bold text-muted uppercase tracking-wider border-b border-border">
                  <th className="text-left py-3 pr-4">Post</th>
                  <th className="text-left py-3 pr-4">Tipo</th>
                  <th className="text-left py-3 pr-4">Fecha</th>
                  <th className="text-left py-3 pr-4">Estado</th>
                  <th className="text-right py-3 pr-4"><Eye size={12} className="inline" /></th>
                  <th className="text-right py-3 pr-4"><Heart size={12} className="inline" /></th>
                  <th className="text-right py-3"><MessageCircle size={12} className="inline" /></th>
                </tr>
              </thead>
              <tbody>
                {recentPosts.map((post, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 pr-4">
                      <span className="text-[13px] font-semibold">{post.title}</span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="text-[12px] text-subtle">{post.type}</span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="text-[12px] text-subtle flex items-center gap-1"><Clock size={11} /> {post.date}</span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg bg-${post.statusColor}/10 text-${post.statusColor}`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-right text-[12px] text-subtle">{post.views}</td>
                    <td className="py-3 pr-4 text-right text-[12px] text-subtle">{post.likes}</td>
                    <td className="py-3 text-right text-[12px] text-subtle">{post.comments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
