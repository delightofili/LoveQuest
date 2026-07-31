"use client";

import { useState, useTransition } from "react";

import { Plus } from "lucide-react";

import { updateExperience } from "@/app/dashboard/actions/updateExperience";

import MomentCard from "@/components/dashboard/create/MomentCard";
import SuccessModal from "../modals/SuccessModal";

export default function EditExperienceForm({ experience }) {
  const [pending, startTransition] = useTransition();
  const [successOpen, setSuccessOpen] = useState(false);

  const [form, setForm] = useState({
    title: experience.title,
    recipientName: experience.recipientName,
    senderName: experience.senderName,
    theme: experience.theme,
    occasion: experience.occasion,
    story: experience.story,
  });

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function updateMoment(id, field, value) {
    setForm((prev) => ({
      ...prev,
      story: prev.story.map((moment) =>
        moment.id === id
          ? {
              ...moment,
              [field]: value,
            }
          : moment,
      ),
    }));
  }

  function deleteMoment(id) {
    setForm((prev) => ({
      ...prev,
      story: prev.story.filter((moment) => moment.id !== id),
    }));
  }

  function addMoment() {
    setForm((prev) => ({
      ...prev,
      story: [
        ...prev.story,
        {
          id: crypto.randomUUID(),
          title: "",
          content: "",
          image: "",
        },
      ],
    }));
  }

  function save() {
    startTransition(async () => {
      await updateExperience(experience.id, form);

      setSuccessOpen("LoveQuest Updated ❤️");
    });
  }

  return (
    <>
      <SuccessModal
        open={successOpen}
        title="LoveQuest Updated"
        description="Your latest changes have been saved successfully."
        buttonText="Awesome!"
        onClose={() => setSuccessOpen(false)}
      />
      <div className="mt-10 space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="LoveQuest Title"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-5"
          />

          <input
            name="recipientName"
            value={form.recipientName}
            onChange={handleChange}
            placeholder="Recipient"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-5"
          />

          <input
            name="senderName"
            value={form.senderName}
            onChange={handleChange}
            placeholder="Sender"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-5"
          />

          <input
            name="occasion"
            value={form.occasion}
            onChange={handleChange}
            placeholder="Occasion"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-5"
          />
        </div>

        {form.story.map((moment, index) => (
          <MomentCard
            key={moment.id}
            moment={moment}
            index={index}
            updateMoment={updateMoment}
            deleteMoment={deleteMoment}
          />
        ))}

        <button
          onClick={addMoment}
          className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-pink-500 py-5 text-pink-500 transition hover:bg-pink-500/10"
        >
          <Plus />
          Add Memory
        </button>

        <button
          disabled={pending}
          onClick={save}
          className="w-full rounded-2xl bg-pink-500 py-5 text-lg font-semibold transition hover:bg-pink-600 disabled:opacity-40"
        >
          {pending ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </>
  );
}
