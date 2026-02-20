import { funnel } from "@/data/mock";

export default function Funnel() {
  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[15px] font-bold">Funnel de conversión</h3>
      </div>
      <div className="flex flex-col gap-2">
        {funnel.map((f) => (
          <div key={f.label} className="flex items-center gap-2.5">
            <span className="text-xs font-medium text-subtle w-[90px] shrink-0">{f.label}</span>
            <div className="flex-1 h-6 bg-gray-100 rounded-md overflow-hidden">
              <div
                className="h-full rounded-md flex items-center pl-2.5 text-[11px] font-semibold text-white transition-all duration-500"
                style={{ width: `${f.pct}%`, background: f.color }}
              >
                {f.pct > 10 ? f.value : ""}
              </div>
            </div>
            <span className="text-[11px] text-muted w-10 text-right shrink-0">
              {f.pct === 100 ? "" : f.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
