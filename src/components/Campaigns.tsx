import { campaigns } from "@/data/mock";
import { Target, Pause, Play } from "lucide-react";

export default function Campaigns() {
  return (
    <div className="bg-white border border-border rounded-2xl p-5">
      <h3 className="text-[15px] font-bold mb-5">Campañas activas</h3>
      <div className="flex flex-col gap-3">
        {campaigns.map((c) => (
          <div key={c.name} className="p-4 bg-gray-50 border border-gray-100 rounded-xl hover:bg-gray-100/50 transition-colors">
            <div className="flex items-center gap-2 text-[13px] font-bold">
              <Target size={14} className={c.active ? "text-success" : "text-warning"} />
              {c.name}
            </div>
            <div className="text-[11px] text-muted mt-1">{c.detail}</div>
            <div className={`flex items-center gap-1.5 text-[11px] font-semibold mt-2 ${c.active ? "text-success" : "text-warning"}`}>
              {c.active ? <Play size={10} /> : <Pause size={10} />}
              {c.stat}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
