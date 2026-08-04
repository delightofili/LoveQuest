"use client";

import { useState } from "react";
import AddMomentButton from "./AddMomentButton";
import MomentCard from "./MomentCard";

export default function MomentsStep({ form, setForm, nextStep, previousStep }) {
  const [error, setError] = useState("");

  function addMoment() {
    setError("");

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

  function updateMoment(id, field, value) {
    setError("");

    setForm((prev) => ({
      ...prev,

      story: prev.story.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    }));
  }

  function deleteMoment(id) {
    setError("");

    setForm((prev) => ({
      ...prev,

      story: prev.story.filter((item) => item.id !== id),
    }));
  }

  function handleContinue() {
    // Must have at least one memory
    if (form.story.length === 0) {
      setError("Please add at least one memory before continuing.");
      return;
    }

    // Every memory must have an image
    const missingImage = form.story.some(
      (moment) =>
        !moment.image ||
        typeof moment.image !== "string" ||
        !moment.image.trim(),
    );

    if (missingImage) {
      setError("Please upload a photo for every memory before continuing.");
      return;
    }

    // Everything is valid
    setError("");
    nextStep();
  }

  return (
    <>
      <h1 className="text-4xl font-bold">Your Memories</h1>

      <p className="mt-3 text-zinc-500">Add every special memory.</p>

      <div className="mt-10 space-y-8">
        {form.story.map((moment, index) => (
          <MomentCard
            key={moment.id}
            moment={moment}
            index={index}
            updateMoment={updateMoment}
            deleteMoment={deleteMoment}
          />
        ))}

        <AddMomentButton addMoment={addMoment} />

        {error && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-400">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-4 md:flex-row">
          <button
            onClick={previousStep}
            className="rounded-xl border border-white/10 px-8 py-4 transition hover:bg-white/5"
          >
            Back
          </button>

          <button
            onClick={handleContinue}
            className="rounded-xl bg-pink-500 px-8 py-4 transition hover:bg-pink-600"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
