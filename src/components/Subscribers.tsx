import { subscribers } from "@/data/mock";

const planColors: Record<string, string> = {
  accent: "bg-accent-light text-accent",
  muted: "bg-gray-100 text-subtle",
  purple: "bg-purple-light text-purple",
};

const dotColors: Record<string, string> = {
  green: "bg-success",
  yellow: "bg-warning",
  red: "bg-danger",
};

export default function Subscribers() {
  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[15px] font-bold">Suscriptores recientes</h3>
        <span className="text-xs text-primary font-semibold cursor-pointer hover:underline">Ver todos →</span>
      </div>
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
            <tr key={s.name} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
              <td className="py-3 px-3 text-[13px] font-semibold">📱 {s.name}</td>
              <td className="py-3 px-3">
                <span className={`text-[10px] font-semibold px-2 py-1 rounded-md ${planColors[s.planColor]}`}>{s.plan}</span>
              </td>
              <td className="py-3 px-3 text-[13px]">
                <span className={`inline-block w-[7px] h-[7px] rounded-full mr-1.5 ${dotColors[s.statusColor]}`} />
                {s.status}
              </td>
              <td className="py-3 px-3 text-[13px] text-muted">{s.since}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
