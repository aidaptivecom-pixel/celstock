import { contentItems } from "@/data/mock";
import { Instagram, Facebook, MessageCircle, Mail, Plus } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "📸": <Instagram size={16} />,
  "📘": <Facebook size={16} />,
  "💬": <MessageCircle size={16} />,
  "📧": <Mail size={16} />,
  "🎬": <Instagram size={16} />,
};

const iconBg: Record<string, string> = {
  ig: "bg-purple/10 text-purple",
  fb: "bg-primary/10 text-primary",
  wa: "bg-success/10 text-success",
  em: "bg-accent/10 text-accent",
};

const statusColors: Record<string, string> = {
  approved: "bg-success/10 text-success",
  scheduled: "bg-primary/10 text-primary",
  pending: "bg-accent/10 text-accent",
};

export default function Content() {
  return (
    <div className="bg-white border border-border rounded-2xl p-5">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-[15px] font-bold">Contenido programado</h3>
        <span className="flex items-center gap-1 text-xs text-primary font-semibold cursor-pointer hover:underline">
          <Plus size={12} /> Crear nuevo
        </span>
      </div>
      <div>
        {contentItems.map((c) => (
          <div key={c.title} className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg[c.type]}`}>
              {iconMap[c.icon]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold">{c.title}</div>
              <div className="text-[11px] text-muted mt-0.5">{c.meta}</div>
            </div>
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg shrink-0 ${statusColors[c.statusType]}`}>
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
