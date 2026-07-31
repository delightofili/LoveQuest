"use client";

import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";

export default function DashboardShell({ user, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-[#09090B] text-white">
      <MobileSidebar open={sidebarOpen} setOpen={setSidebarOpen} user={user} />
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <DashboardHeader user={user} setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
