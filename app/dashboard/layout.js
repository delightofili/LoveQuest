import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth/auth";

import DashboardShell from "@/components/dashboard/DashboardShell";

export default async function Layout({ children }) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return <DashboardShell user={user}>{children}</DashboardShell>;
}
