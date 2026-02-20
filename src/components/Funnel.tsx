import { funnel } from "@/data/mock";

export default function Funnel() {
  return (
    <div className="bg-white border border-border rounded-2xl p-5">
      <h3 className="text-[15px] font-bold mb-5">Funnel de conversión</h3>
      <div className="flex flex-col gap-3">
        {funnel.map((f) => (
          <div key={f.label} className="flex items-center gap-3">
            <span className="text-xs font-medium text-subtle w-[85px] shrink-0">{f.label}</span>
            <div className="flex-1 h-7 bg-gray-50 rounded-xl overflow-hidden">
              <div
                className="h-full rounded-xl flex items-center pl-3 text-[11px] font-bold text-white transition-all duration-700 ease-out"
                style={{ width: `${Math.max(f.pct, 8)}%`, background: `linear-gradient(90deg, ${f.color}, ${f.color}dd)` }}
              >
                {f.pct > 12 ? f.value : ""}
              </div>
            </div>
            <span className="text-[12px] font-semibold text-text w-14 text-right shrink-0">{f.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
