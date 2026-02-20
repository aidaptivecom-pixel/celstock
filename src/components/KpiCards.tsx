import { kpis } from "@/data/mock";
import { Megaphone, CheckCircle, RefreshCw, Bot, Handshake, AlertTriangle } from "lucide-react";

const iconComponents: Record<string, React.ReactNode> = {
  "📣": <Megaphone size={16} />,
  "✅": <CheckCircle size={16} />,
  "🔄": <RefreshCw size={16} />,
  "🤖": <Bot size={16} />,
  "🤝": <Handshake size={16} />,
  "⚠️": <AlertTriangle size={16} />,
};

const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
  accent: { border: "border-t-accent", bg: "bg-accent/10", text: "text-accent" },
  success: { border: "border-t-success", bg: "bg-success/10", text: "text-success" },
  primary: { border: "border-t-primary", bg: "bg-primary/10", text: "text-primary" },
  purple: { border: "border-t-purple", bg: "bg-purple/10", text: "text-purple" },
  cyan: { border: "border-t-cyan", bg: "bg-cyan/10", text: "text-cyan" },
  danger: { border: "border-t-danger", bg: "bg-danger/10", text: "text-danger" },
};

export default function KpiCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 mb-6">
      {kpis.map((k) => {
        const c = colorClasses[k.color];
        return (
          <div
            key={k.label}
            className={`bg-white border border-border rounded-2xl p-5 border-t-[3px] ${c.border} hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-8 h-8 rounded-xl flex items-center justify-center ${c.bg} ${c.text}`}>
                {iconComponents[k.icon]}
              </span>
              <span className="text-[12px] text-muted font-medium leading-tight">{k.label}</span>
            </div>
            <div className="text-[28px] font-extrabold leading-none tracking-tight">{k.value}</div>
            <div className={`text-[11px] font-semibold mt-2.5 ${k.up ? "text-success" : "text-danger"}`}>
              {k.change}
            </div>
          </div>
        );
      })}
    </div>
  );
}
