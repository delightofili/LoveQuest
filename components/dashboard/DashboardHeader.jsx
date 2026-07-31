import { Menu } from "lucide-react";
import UserDropdown from "./UserDropdown";

export default function DashboardHeader({ user, setSidebarOpen }) {
  const hour = new Date().getHours();

  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 md:px-8">
        {/* Left */}
        <div className="min-w-0 ">
          <h1 className="text-[20px] font-bold tracking-tight md:text-3xl">
            {greeting}, <span className="">{user.name}</span>
          </h1>

          <p className="mt-1 text-[12px] text-zinc-400 md:text-base">
            Ready to create another unforgettable memory?
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-pink-500 hover:bg-pink-500/10 active:scale-95 md:hidden"
          >
            <Menu size={24} strokeWidth={2.5} />
          </button>

          <div className="hidden md:block">
            <UserDropdown user={user} />
          </div>
        </div>
      </div>
    </header>
  );
}
