"use client";

import Link from "next/link";
import { House, PlusCircle, Heart, Settings } from "lucide-react";

import { usePathname } from "next/navigation";

const links = [
  {
    icon: House,
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: PlusCircle,
    title: "Create",
    href: "/dashboard/create",
  },
  {
    icon: Heart,
    title: "Experiences",
    href: "/dashboard/experiences",
  },
  {
    icon: Settings,
    title: "Settings",
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-72 border-r border-white/10 flex-col">
      <div className="p-5 md:p-8">
        <h1 className="text-3xl font-bold">LoveQuest</h1>

        <p className="text-zinc-500">Create unforgettable memories</p>
      </div>

      <nav className="space-y-2 px-4">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`

                                flex

                                items-center

                                gap-4

                                rounded-xl

                                px-5

                                py-4

                                transition

                                ${
                                  pathname === link.href
                                    ? "bg-pink-500 text-white"
                                    : "hover:bg-white/5"
                                }

                                `}
            >
              <Icon size={20} />

              {link.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
