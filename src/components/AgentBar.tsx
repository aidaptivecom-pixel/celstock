import { Bot } from "lucide-react";

export default function AgentBar() {
  return (
    <div className="flex items-center gap-4 p-5 bg-white border border-border border-l-4 border-l-success rounded-2xl mb-6 flex-wrap">
      <div className="relative shrink-0">
        <div className="w-11 h-11 rounded-2xl bg-success/10 flex items-center justify-center text-success">
          <Bot size={22} />
        </div>
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-success rounded-full border-2 border-white">
          <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-40" />
        </span>
      </div>
      <div className="flex-1 min-w-[200px]">
        <div className="text-sm font-bold">Agente WhatsApp IA — Online</div>
        <div className="text-xs text-muted mt-0.5">Última interacción hace 2 min · 47 conversaciones hoy</div>
      </div>
      <div className="flex gap-6 sm:gap-10">
        {[
          { val: "94%", lbl: "Resueltas" },
          { val: "18s", lbl: "Resp. prom." },
          { val: "3", lbl: "Escaladas" },
        ].map((s) => (
          <div key={s.lbl} className="text-center">
            <div className="text-xl font-extrabold">{s.val}</div>
            <div className="text-[10px] text-muted font-medium">{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
