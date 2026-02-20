import { activities } from "@/data/mock";

export default function Activity() {
  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <h3 className="text-[15px] font-bold mb-4">Actividad reciente</h3>
      <div className="flex flex-col">
        {activities.map((a, i) => (
          <div key={i} className="flex gap-3 py-2.5 border-b border-gray-50 last:border-0">
            <div className="w-[30px] h-[30px] rounded-full bg-gray-100 flex items-center justify-center text-[13px] shrink-0">
              {a.icon}
            </div>
            <div>
              <div className="text-[13px] text-subtle leading-relaxed">{a.text}</div>
              <div className="text-[11px] text-muted/50">{a.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
