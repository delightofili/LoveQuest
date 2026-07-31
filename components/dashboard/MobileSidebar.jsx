"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { House, Heart, PlusCircle, Settings, X } from "lucide-react";
import { usePathname } from "next/navigation";
import UserDropdown from "./UserDropdown";

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: House,
  },
  {
    title: "New LoveQuest",
    href: "/dashboard/create",
    icon: PlusCircle,
  },
  {
    title: "Experiences",
    href: "/dashboard/experiences",
    icon: Heart,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function MobileSidebar({ open, setOpen, user }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* 1. Added flex flex-col here so aside spans full height as a flex column */}
          <motion.aside
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ duration: 0.25 }}
            className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-white/10 bg-[#09090B]"
          >
            {/* Header section (fixed height based on content) */}
            <div className="flex items-center justify-between p-6">
              <div>
                <h1 className="text-2xl font-bold text-white">❤️ LoveQuest</h1>
                <p className="text-sm text-zinc-500">Create memories</p>
              </div>

              <button onClick={() => setOpen(false)}>
                <X className="text-white" />
              </button>
            </div>

            {/* 2. Added flex-1 to nav so it takes up all remaining vertical space */}
            <nav className="flex flex-1 flex-col justify-between p-4">
              <div className="space-y-2">
                {links.map((link) => {
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-4 rounded-xl px-5 py-4 transition ${
                        pathname === link.href
                          ? "bg-pink-500 text-white"
                          : "text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon size={20} />
                      {link.title}
                    </Link>
                  );
                })}
              </div>

              {/* 3. User Dropdown neatly anchored at the bottom */}
              <div className="pt-4 border-t border-white/10">
                <UserDropdown user={user} />
              </div>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
