"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { Trash2, Eye, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";

import ConfirmModal from "@/components/modals/ConfirmModal";
import { deleteExperience } from "@/app/dashboard/actions/deleteExperience";

export default function ExperienceCard({ experience }) {
  const router = useRouter();

  const [pending, startTransition] = useTransition();

  const [showDelete, setShowDelete] = useState(false);

  function handleDelete() {
    startTransition(async () => {
      await deleteExperience(experience.id);

      setShowDelete(false);

      router.refresh();
    });
  }

  return (
    <>
      <ConfirmModal
        open={showDelete}
        loading={pending}
        title="Delete LoveQuest?"
        description="This action cannot be undone. All memories inside this LoveQuest will be permanently deleted."
        confirmText="Delete"
        onCancel={() => setShowDelete(false)}
        onConfirm={handleDelete}
      />

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-pink-500/30">
        <Link href={`/dashboard/experiences/${experience.id}`}>
          <div className="h-52 bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600" />

          <div className="space-y-4 p-6">
            <h2 className="text-2xl font-bold">{experience.title}</h2>

            <p className="text-zinc-400">{experience.theme}</p>

            <div className="flex items-center justify-between">
              <span
                className={`rounded-full px-4 py-1 text-sm font-medium ${
                  experience.published
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {experience.published ? "Published" : "Draft"}
              </span>

              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <Eye size={17} />
                {experience.views}
              </div>
            </div>
          </div>
        </Link>

        <div className="flex border-t border-white/10">
          <Link
            href={`/dashboard/experiences/${experience.id}`}
            className="flex flex-1 items-center justify-center gap-2 py-4 transition hover:bg-white/5"
          >
            <Pencil size={18} />
            Edit
          </Link>

          <button
            onClick={() => setShowDelete(true)}
            className="flex flex-1 items-center justify-center gap-2 border-l border-white/10 py-4 text-red-400 transition hover:bg-red-500/10"
          >
            <Trash2 size={18} />
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
