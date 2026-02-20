import { influencers } from "@/data/mock";

export default function Influencers() {
  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[15px] font-bold">Top influencers del mes</h3>
        <span className="text-xs text-primary font-semibold cursor-pointer hover:underline">Ver red completa →</span>
      </div>
      <div>
        {influencers.map((inf) => (
          <div key={inf.rank} className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 ${
              inf.rank === 1 ? "bg-accent-light text-accent" : "bg-gray-100 text-subtle"
            }`}>
              {inf.rank}
            </div>
            <div className="flex-1">
              <div className="text-[13px] font-semibold">{inf.name}</div>
              <div className="text-[11px] text-muted">{inf.handle}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-success">{inf.conversions} conv.</div>
              <div className="text-[11px] text-muted">USD {inf.earnings}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
