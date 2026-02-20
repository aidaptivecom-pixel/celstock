"use client";
import { useState } from "react";
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

export default function Dashboard() {
  const [period, setPeriod] = useState("30d");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Topbar onMenuClick={() => setSidebarOpen(true)} />

      <main className="lg:ml-[240px] mt-16 p-4 sm:p-6 lg:p-7">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
          <div>
            <h1 className="text-xl sm:text-[22px] font-bold">Dashboard</h1>
            <p className="text-[13px] text-muted mt-0.5">Últimos 30 días · Actualizado hace 5 min</p>
          </div>
          <div className="flex bg-white border border-border rounded-xl overflow-hidden shadow-sm">
            {["7d", "30d", "90d"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-4 py-2 text-xs font-semibold transition-all ${
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

        {/* Charts */}
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
        <div className="grid grid-cols-1 xl:grid-cols-[5fr_3fr] gap-5 mb-8">
          <Influencers />
          <Campaigns />
        </div>
      </main>
    </div>
  );
}
