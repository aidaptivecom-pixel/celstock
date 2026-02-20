import { contentItems } from "@/data/mock";

const iconBg: Record<string, string> = {
  ig: "bg-purple-light",
  fb: "bg-primary-light",
  wa: "bg-success-light",
  em: "bg-accent-light",
};

const statusColors: Record<string, string> = {
  approved: "bg-success-light text-success",
  scheduled: "bg-primary-light text-primary",
  pending: "bg-accent-light text-accent",
};

export default function Content() {
  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[15px] font-bold">Contenido programado</h3>
        <span className="text-xs text-primary font-semibold cursor-pointer hover:underline">+ Crear nuevo</span>
      </div>
      <div>
        {contentItems.map((c) => (
          <div key={c.title} className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
            <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center text-base shrink-0 ${iconBg[c.type]}`}>
              {c.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold">{c.title}</div>
              <div className="text-[11px] text-muted">{c.meta}</div>
            </div>
            <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md shrink-0 ${statusColors[c.statusType]}`}>
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
