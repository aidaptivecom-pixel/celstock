"use client";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { leadsPerWeek } from "@/data/mock";

export default function LeadsChart() {
  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[15px] font-bold">Leads por semana</h3>
        <span className="text-xs text-primary font-semibold cursor-pointer hover:underline">Ver detalle →</span>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={leadsPerWeek} barCategoryGap="20%">
          <XAxis dataKey="week" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip
            contentStyle={{ background: "#fff", border: "1px solid #e8eaed", borderRadius: 8, fontSize: 13 }}
            cursor={{ fill: "rgba(79,70,229,0.04)" }}
          />
          <Bar dataKey="value" fill="#4f46e5" radius={[6, 6, 2, 2]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
