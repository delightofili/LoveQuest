"use client";

import { useState } from "react";
import { updateProfile } from "@/app/dashboard/settings/action.js";

export default function ProfileForm({ user }) {
  const [name, setName] = useState(user.name);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSaved(false);

    const formData = new FormData();

    formData.append("name", name);

    await updateProfile(formData);

    setLoading(false);
    setSaved(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label>Name</label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-xl border border-white/10 bg-black p-4"
        />
      </div>

      <div>
        <label>Email</label>

        <input
          disabled
          value={user.email}
          className="mt-2 w-full rounded-xl border border-white/10 bg-black p-4 opacity-60"
        />
      </div>

      <button disabled={loading} className="rounded-xl bg-pink-500 px-6 py-3">
        {loading ? "Saving..." : "Save Changes"}
      </button>

      {saved && <p className="text-green-500">Profile updated successfully.</p>}
    </form>
  );
}
