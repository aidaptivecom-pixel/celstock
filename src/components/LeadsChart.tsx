"use client";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";
import { leadsPerWeek } from "@/data/mock";
import { ArrowRight } from "lucide-react";

export default function LeadsChart() {
  return (
    <div className="bg-white border border-border rounded-2xl p-5">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-[15px] font-bold">Leads por semana</h3>
        <span className="flex items-center gap-1 text-xs text-primary font-semibold cursor-pointer hover:underline">
          Ver detalle <ArrowRight size={12} />
        </span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={leadsPerWeek} barCategoryGap="25%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis dataKey="week" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} width={35} />
          <Tooltip
            contentStyle={{ background: "#fff", border: "1px solid #e8eaed", borderRadius: 12, fontSize: 13, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
            cursor={{ fill: "rgba(79,70,229,0.04)", radius: 8 }}
          />
          <Bar dataKey="value" fill="#4f46e5" radius={[8, 8, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
