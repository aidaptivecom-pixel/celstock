export default function AgentBar() {
  return (
    <div className="flex items-center gap-4 p-4 bg-white border border-border border-l-4 border-l-success rounded-xl mb-6 flex-wrap">
      <div className="relative w-2.5 h-2.5 bg-success rounded-full shrink-0">
        <span className="absolute inset-[-4px] rounded-full border-2 border-success/30 animate-ping" />
      </div>
      <div className="flex-1 min-w-[200px]">
        <div className="text-sm font-semibold">Agente WhatsApp IA — Online</div>
        <div className="text-xs text-muted">Última interacción hace 2 min · 47 conversaciones hoy</div>
      </div>
      <div className="flex gap-8">
        {[
          { val: "94%", lbl: "Resueltas" },
          { val: "18s", lbl: "Resp. prom." },
          { val: "3", lbl: "Escaladas" },
        ].map((s) => (
          <div key={s.lbl} className="text-center">
            <div className="text-lg font-extrabold">{s.val}</div>
            <div className="text-[11px] text-muted">{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
