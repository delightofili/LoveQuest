"use client";

import { logoutAction } from "@/app/actions/auth";

export default function UserDropdown({ user }) {
  return (
    <form action={logoutAction}>
      <button className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 hover:bg-white/10">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500">
          {user.name.charAt(0)}
        </div>

        <div className="text-left">
          <p>{user.name}</p>

          <p className="text-xs text-zinc-500">Logout</p>
        </div>
      </button>
    </form>
  );
}
