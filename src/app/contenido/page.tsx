"use client";
import { useState } from "react";
import Shell from "@/components/Shell";
import { Sparkles, Copy, RefreshCw, Calendar, FileEdit, Image, CheckCircle, LayoutGrid, Film, Instagram, Megaphone, BookOpen, Flame, Smile, Brain } from "lucide-react";

const types = [
  { value: "carousel", label: "Carrusel", icon: LayoutGrid },
  { value: "reel", label: "Reel", icon: Film },
  { value: "post", label: "Post", icon: Image },
  { value: "story", label: "Story", icon: Instagram },
];

const toneOptions = [
  { value: "professional", label: "Profesional", icon: Megaphone },
  { value: "casual", label: "Casual", icon: Smile },
  { value: "educational", label: "Educativo", icon: BookOpen },
  { value: "inspirational", label: "Inspiracional", icon: Flame },
];

const sampleOutput = {
  caption: `🔥 5 errores que todo revendedor de celulares comete (y cómo evitarlos)\n\n1️⃣ No trackear el IMEI de cada equipo\n2️⃣ Fijar precios sin mirar el mercado en tiempo real\n3️⃣ Stockearse de modelos que no rotan\n4️⃣ No tener sistema de crédito para mayoristas\n5️⃣ Llevar el inventario en una planilla de Excel\n\nCon Celstock automatizás todo esto. Inventario inteligente + línea de crédito basada en tus ventas.\n\n💬 ¿Cuál de estos errores cometés? Contanos 👇`,
  hashtags: ["celstock", "revendedorcelulares", "stockcelulares", "inventario", "mayorista", "celulares", "argentina", "tecnologia", "emprendedores"],
  imagePrompt: "Diseño futurista con fondo oscuro degradado púrpura-azul. Texto grande '5 ERRORES' con efecto neón. Iconos minimalistas de cada error. Logo Celstock en esquina inferior. Estética tech/premium.",
};

const ideas = [
  { title: "Tutorial IMEI tracking", desc: "Mostrar cómo Celstock trackea cada IMEI automáticamente", type: "Reel" },
  { title: "Antes vs Después", desc: "Excel caótico vs dashboard Celstock organizado", type: "Carrusel" },
  { title: "Testimonial mayorista", desc: "Cliente cuenta cómo mejoró su stock en 30 días", type: "Post" },
  { title: "Crédito inteligente", desc: "Explicar la línea de crédito basada en ventas", type: "Story" },
];

export default function Contenido() {
  const [prompt, setPrompt] = useState("");
  const [contentType, setContentType] = useState("carousel");
  const [tone, setTone] = useState("professional");
  const [generated, setGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => { setGenerating(false); setGenerated(true); }, 1500);
  };

  return (
    <Shell>
      <div className="mb-6">
        <h1 className="text-xl font-bold">Contenido</h1>
        <p className="text-[13px] text-muted mt-0.5">Generá contenido para Instagram con IA</p>
      </div>

      {/* Generator */}
      <div className="bg-surface border border-border rounded-2xl p-5 mb-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
            <Sparkles size={16} className="text-white" />
          </div>
          <div>
            <h3 className="text-[15px] font-bold">Generador IA</h3>
            <p className="text-[11px] text-muted">Caption, hashtags e imagen en segundos</p>
          </div>
        </div>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="¿Sobre qué querés publicar? Ej: Tips para manejar stock en temporada alta..."
          className="w-full h-24 px-4 py-3 bg-bg border border-border rounded-xl text-[13px] text-text resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 placeholder:text-muted mb-4"
        />

        {/* Type pills */}
        <div className="flex flex-wrap gap-2 mb-3">
          {types.map((t) => (
            <button key={t.value} onClick={() => setContentType(t.value)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12px] font-semibold transition-all ${contentType === t.value ? "bg-primary/20 text-primary-light border border-primary/30" : "bg-bg border border-border text-subtle hover:border-primary/20"}`}>
              <t.icon size={13} /> {t.label}
            </button>
          ))}
        </div>

        {/* Tone pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {toneOptions.map((t) => (
            <button key={t.value} onClick={() => setTone(t.value)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12px] font-semibold transition-all ${tone === t.value ? "bg-accent/20 text-accent border border-accent/30" : "bg-bg border border-border text-subtle hover:border-accent/20"}`}>
              <t.icon size={13} /> {t.label}
            </button>
          ))}
        </div>

        <button onClick={handleGenerate} disabled={generating}
          className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white text-[13px] font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 flex items-center gap-2">
          {generating ? <><RefreshCw size={14} className="animate-spin" /> Generando...</> : <><Sparkles size={14} /> Generar con IA</>}
        </button>

        {/* Output */}
        {generated && (
          <div className="mt-5 border border-border rounded-xl overflow-hidden">
            <div className="bg-bg px-4 py-3 border-b border-border flex items-center justify-between">
              <span className="text-[13px] font-semibold flex items-center gap-2">
                <CheckCircle size={14} className="text-success" /> Contenido generado
              </span>
              <div className="flex items-center gap-1.5">
                <button className="p-1.5 rounded-lg hover:bg-surface-hover text-muted hover:text-text transition-colors"><Copy size={14} /></button>
                <button className="p-1.5 rounded-lg hover:bg-surface-hover text-muted hover:text-text transition-colors"><RefreshCw size={14} /></button>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="text-[10px] font-bold text-muted uppercase tracking-wider">Caption</label>
                <p className="text-[13px] mt-1.5 whitespace-pre-line leading-relaxed">{sampleOutput.caption}</p>
              </div>
              <div>
                <label className="text-[10px] font-bold text-muted uppercase tracking-wider">Hashtags</label>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {sampleOutput.hashtags.map((h) => (
                    <span key={h} className="px-2.5 py-1 bg-primary/10 text-primary-light text-[11px] font-medium rounded-lg cursor-pointer hover:bg-primary/20 transition-colors">#{h}</span>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-muted uppercase tracking-wider">Prompt de imagen</label>
                <p className="text-[13px] mt-1.5 text-subtle italic">{sampleOutput.imagePrompt}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <button className="px-4 py-2 bg-primary text-white text-[12px] font-semibold rounded-xl hover:opacity-90 flex items-center gap-1.5"><Calendar size={13} /> Programar</button>
                <button className="px-4 py-2 bg-surface border border-border text-[12px] font-semibold rounded-xl hover:bg-surface-hover flex items-center gap-1.5"><FileEdit size={13} /> Borrador</button>
                <button className="px-4 py-2 bg-surface border border-border text-[12px] font-semibold rounded-xl hover:bg-surface-hover flex items-center gap-1.5"><Image size={13} /> Generar imagen</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Ideas */}
      <div className="bg-surface border border-border rounded-2xl p-5 mb-8">
        <h3 className="text-[15px] font-bold flex items-center gap-2 mb-4">
          <Brain size={16} className="text-accent" /> Ideas basadas en tu negocio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ideas.map((idea, i) => (
            <div key={i} className="bg-bg border border-border rounded-xl p-4 hover:border-primary/20 transition-colors cursor-pointer group">
              <div className="text-[11px] font-bold text-primary mb-2">{idea.type}</div>
              <h4 className="text-[13px] font-semibold mb-1">{idea.title}</h4>
              <p className="text-[11px] text-muted mb-3">{idea.desc}</p>
              <span className="text-[11px] font-semibold text-accent group-hover:text-accent transition-colors">Usar idea →</span>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}
