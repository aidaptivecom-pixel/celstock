import { inboxItems } from "@/data/mock";
import { Flame, TrendingUp, Sparkles, UserCheck, ArrowRight } from "lucide-react";

const tagConfig: Record<string, { icon: React.ReactNode; className: string }> = {
  hot: { icon: <Flame size={10} />, className: "bg-danger/10 text-danger" },
  warm: { icon: <TrendingUp size={10} />, className: "bg-accent/10 text-accent" },
  new: { icon: <Sparkles size={10} />, className: "bg-primary/10 text-primary" },
  active: { icon: <UserCheck size={10} />, className: "bg-success/10 text-success" },
};

const avatarColors: Record<string, string> = {
  danger: "bg-danger/10 text-danger",
  accent: "bg-accent/10 text-accent",
  primary: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  purple: "bg-purple/10 text-purple",
};

export default function Inbox() {
  return (
    <div className="bg-white border border-border rounded-2xl p-5">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-[15px] font-bold">Inbox — Conversaciones recientes</h3>
        <span className="flex items-center gap-1 text-xs text-primary font-semibold cursor-pointer hover:underline">
          Ver todas (12) <ArrowRight size={12} />
        </span>
      </div>
      <div className="flex flex-col">
        {inboxItems.map((item) => {
          const tag = tagConfig[item.tag];
          return (
            <div key={item.initials} className="flex items-center gap-3 py-3 px-2 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 rounded-xl cursor-pointer transition-all">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${avatarColors[item.color]}`}>
                {item.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-[13px] font-semibold">
                  {item.name}
                  <span className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-lg ${tag.className}`}>
                    {tag.icon} {item.tagLabel}
                  </span>
                </div>
                <div className="text-xs text-muted truncate mt-0.5">{item.msg}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[11px] text-muted">{item.time}</div>
                {item.unread && <div className="w-2 h-2 bg-primary rounded-full ml-auto mt-1.5" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
