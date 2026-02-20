import { inboxItems } from "@/data/mock";

const tagColors: Record<string, string> = {
  hot: "bg-danger-light text-danger",
  warm: "bg-accent-light text-accent",
  new: "bg-primary-light text-primary",
  active: "bg-success-light text-success",
};

const avatarColors: Record<string, string> = {
  danger: "bg-danger-light text-danger",
  accent: "bg-accent-light text-accent",
  primary: "bg-primary-light text-primary",
  success: "bg-success-light text-success",
  purple: "bg-purple-light text-purple",
};

export default function Inbox() {
  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[15px] font-bold">Inbox — Conversaciones recientes</h3>
        <span className="text-xs text-primary font-semibold cursor-pointer hover:underline">Ver todas (12) →</span>
      </div>
      <div className="flex flex-col">
        {inboxItems.map((item) => (
          <div key={item.initials} className="flex items-center gap-3 py-3 px-2 border-b border-gray-50 last:border-0 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${avatarColors[item.color]}`}>
              {item.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 text-[13px] font-semibold">
                {item.name}
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${tagColors[item.tag]}`}>{item.tagLabel}</span>
              </div>
              <div className="text-xs text-muted truncate mt-0.5">{item.msg}</div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-[11px] text-muted">{item.time}</div>
              {item.unread && <div className="w-2 h-2 bg-primary rounded-full ml-auto mt-1" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
