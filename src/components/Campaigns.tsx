import { campaigns } from "@/data/mock";

export default function Campaigns() {
  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <h3 className="text-[15px] font-bold mb-4">Campañas activas</h3>
      <div className="flex flex-col gap-2">
        {campaigns.map((c) => (
          <div key={c.name} className="p-3.5 bg-gray-50 border border-border rounded-lg">
            <div className="text-[13px] font-bold">{c.name}</div>
            <div className="text-[11px] text-muted mt-1">{c.detail}</div>
            <div className={`text-[11px] font-semibold mt-1 ${c.active ? "text-success" : "text-warning"}`}>
              {c.stat}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
