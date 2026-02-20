import { kpis } from "@/data/mock";

const colorMap: Record<string, string> = {
  accent: "border-t-accent",
  success: "border-t-success",
  primary: "border-t-primary",
  purple: "border-t-purple",
  cyan: "border-t-cyan",
  danger: "border-t-danger",
};

const bgMap: Record<string, string> = {
  accent: "bg-accent-light",
  success: "bg-success-light",
  primary: "bg-primary-light",
  purple: "bg-purple-light",
  cyan: "bg-cyan-light",
  danger: "bg-danger-light",
};

export default function KpiCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-6">
      {kpis.map((k) => (
        <div
          key={k.label}
          className={`bg-white border border-border rounded-xl p-5 border-t-[3px] ${colorMap[k.color]} hover:shadow-sm transition-shadow`}
        >
          <div className="flex items-center gap-1.5 text-[12px] text-muted font-medium mb-2">
            <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${bgMap[k.color]}`}>{k.icon}</span>
            {k.label}
          </div>
          <div className="text-[28px] font-extrabold leading-none">{k.value}</div>
          <div className={`text-[11px] font-semibold mt-2 ${k.up ? "text-success" : "text-danger"}`}>
            {k.change}
          </div>
        </div>
      ))}
    </div>
  );
}
