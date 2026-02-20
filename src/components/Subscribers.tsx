import { subscribers } from "@/data/mock";
import { ArrowRight, Smartphone } from "lucide-react";

const planColors: Record<string, string> = {
  accent: "bg-accent/10 text-accent",
  muted: "bg-gray-100 text-subtle",
  purple: "bg-purple/10 text-purple",
};

const dotColors: Record<string, string> = {
  green: "bg-success",
  yellow: "bg-warning",
  red: "bg-danger",
};

export default function Subscribers() {
  return (
    <div className="bg-white border border-border rounded-2xl p-5">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-[15px] font-bold">Suscriptores recientes</h3>
        <span className="flex items-center gap-1 text-xs text-primary font-semibold cursor-pointer hover:underline">
          Ver todos <ArrowRight size={12} />
        </span>
      </div>
      {/* Mobile: cards, Desktop: table */}
      <div className="hidden sm:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              {["Negocio", "Plan", "Estado", "Desde"].map((h) => (
                <th key={h} className="text-left text-[11px] font-semibold text-muted uppercase tracking-wide py-2.5 px-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {subscribers.map((s) => (
              <tr key={s.name} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                <td className="py-3 px-3 text-[13px] font-semibold">
                  <span className="flex items-center gap-2"><Smartphone size={14} className="text-muted" /> {s.name}</span>
                </td>
                <td className="py-3 px-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg ${planColors[s.planColor]}`}>{s.plan}</span>
                </td>
                <td className="py-3 px-3 text-[13px]">
                  <span className={`inline-block w-2 h-2 rounded-full mr-1.5 ${dotColors[s.statusColor]}`} />
                  {s.status}
                </td>
                <td className="py-3 px-3 text-[13px] text-muted">{s.since}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile cards */}
      <div className="sm:hidden flex flex-col gap-2">
        {subscribers.map((s) => (
          <div key={s.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div>
              <div className="text-[13px] font-semibold flex items-center gap-1.5">
                <Smartphone size={13} className="text-muted" /> {s.name}
              </div>
              <div className="text-[11px] text-muted mt-0.5">{s.since}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${planColors[s.planColor]}`}>{s.plan}</span>
              <span className={`w-2 h-2 rounded-full ${dotColors[s.statusColor]}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
