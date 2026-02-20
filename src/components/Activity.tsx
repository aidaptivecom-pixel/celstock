import { activities } from "@/data/mock";
import { Bot, CheckCircle, Megaphone, Bell, FileText, Handshake } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "🤖": <Bot size={14} className="text-primary" />,
  "✅": <CheckCircle size={14} className="text-success" />,
  "📣": <Megaphone size={14} className="text-accent" />,
  "🔔": <Bell size={14} className="text-warning" />,
  "📝": <FileText size={14} className="text-purple" />,
  "🤝": <Handshake size={14} className="text-cyan" />,
};

export default function Activity() {
  return (
    <div className="bg-white border border-border rounded-2xl p-5">
      <h3 className="text-[15px] font-bold mb-4">Actividad reciente</h3>
      <div className="flex flex-col">
        {activities.map((a, i) => (
          <div key={i} className="flex gap-3 py-3 border-b border-gray-50 last:border-0">
            <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
              {iconMap[a.icon] || <span className="text-sm">{a.icon}</span>}
            </div>
            <div>
              <div className="text-[13px] text-subtle leading-relaxed">{a.text}</div>
              <div className="text-[11px] text-muted/50 mt-0.5">{a.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
