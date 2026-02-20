"use client";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import AgentBar from "@/components/AgentBar";
import KpiCards from "@/components/KpiCards";
import LeadsChart from "@/components/LeadsChart";
import Funnel from "@/components/Funnel";
import Inbox from "@/components/Inbox";
import Activity from "@/components/Activity";
import Subscribers from "@/components/Subscribers";
import Content from "@/components/Content";
import Influencers from "@/components/Influencers";
import Campaigns from "@/components/Campaigns";
import { useState } from "react";

export default function Dashboard() {
  const [period, setPeriod] = useState("30d");

  return (
    <div className="min-h-screen bg-bg">
      <Sidebar />
      <Topbar />

      <main className="lg:ml-[230px] mt-16 p-7">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-[22px] font-bold">Dashboard</h1>
            <p className="text-[13px] text-muted mt-0.5">Últimos 30 días · Actualizado hace 5 min</p>
          </div>
          <div className="flex bg-white border border-border rounded-lg overflow-hidden">
            {["7d", "30d", "90d"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  period === p ? "bg-primary text-white" : "text-subtle hover:bg-gray-50"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <AgentBar />
        <KpiCards />

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <LeadsChart />
          <Funnel />
        </div>

        {/* Inbox + Activity */}
        <div className="grid grid-cols-1 xl:grid-cols-[5fr_3fr] gap-5 mb-5">
          <Inbox />
          <Activity />
        </div>

        {/* Subscribers + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <Subscribers />
          <Content />
        </div>

        {/* Influencers + Campaigns */}
        <div className="grid grid-cols-1 xl:grid-cols-[5fr_3fr] gap-5 mb-5">
          <Influencers />
          <Campaigns />
        </div>
      </main>
    </div>
  );
}
