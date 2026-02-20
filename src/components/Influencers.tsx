import { influencers } from "@/data/mock";
import { ArrowRight, Trophy } from "lucide-react";

export default function Influencers() {
  return (
    <div className="bg-white border border-border rounded-2xl p-5">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-[15px] font-bold">Top influencers del mes</h3>
        <span className="flex items-center gap-1 text-xs text-primary font-semibold cursor-pointer hover:underline">
          Ver red completa <ArrowRight size={12} />
        </span>
      </div>
      <div>
        {influencers.map((inf) => (
          <div key={inf.rank} className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 ${
              inf.rank === 1 ? "bg-accent/10 text-accent" : "bg-gray-50 text-subtle"
            }`}>
              {inf.rank === 1 ? <Trophy size={14} /> : inf.rank}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold">{inf.name}</div>
              <div className="text-[11px] text-muted">{inf.handle}</div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-sm font-bold text-success">{inf.conversions} conv.</div>
              <div className="text-[11px] text-muted">USD {inf.earnings}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
