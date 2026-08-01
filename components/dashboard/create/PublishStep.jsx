"use client";

import { useState, useTransition } from "react";

import { publishExperience } from "@/app/dashboard/create/action";

import PublishSuccessModal from "@/components/dashboard/PublishSuccessModal";

export default function PublishStep({ form, previousStep }) {
  const [pending, startTransition] = useTransition();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [publishedSlug, setPublishedSlug] = useState("");

  const [error, setError] = useState("");

  function validateBeforePublish() {
    if (!form.story || form.story.length === 0) {
      return "Please add at least one memory before publishing.";
    }

    const missingImageIndex = form.story.findIndex(
      (memory) => !memory.image || typeof memory.image !== "string",
    );

    if (missingImageIndex !== -1) {
      return `Memory ${missingImageIndex + 1} needs a photo before you can publish.`;
    }

    return null;
  }

  function handlePublish() {
    setError("");

    const validationError = validateBeforePublish();

    if (validationError) {
      setError(validationError);
      return;
    }

    startTransition(async () => {
      try {
        const slug = await publishExperience(form);

        setPublishedSlug(slug);

        setShowSuccessModal(true);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      }
    });
  }

  const missingImageIndex =
    form.story?.findIndex(
      (memory) => !memory.image || typeof memory.image !== "string",
    ) ?? -1;

  const canPublish = form.story?.length > 0 && missingImageIndex === -1;

  return (
    <>
      <h1 className="text-4xl font-bold">Ready to Publish?</h1>

      <p className="mt-4 text-zinc-500">
        Everything looks good. Your LoveQuest will become available immediately.
      </p>

      {/* VALIDATION WARNING */}
      {!canPublish && (
        <div className="mt-8 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5">
          <p className="font-semibold text-yellow-400">
            Your LoveQuest isn&apos;t ready yet.
          </p>

          <p className="mt-2 text-sm text-yellow-400/80">
            {form.story?.length === 0
              ? "Add at least one memory."
              : `Memory ${missingImageIndex + 1} needs a photo before you can publish.`}
          </p>
        </div>
      )}

      <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <div className="space-y-4">
          <p>
            <strong>Title:</strong> {form.title}
          </p>

          <p>
            <strong>Recipient:</strong> {form.recipientName}
          </p>

          <p>
            <strong>From:</strong> {form.senderName}
          </p>

          <p>
            <strong>Theme:</strong> {form.theme}
          </p>

          <p>
            <strong>Occasion:</strong> {form.occasion}
          </p>

          <p>
            <strong>Memories:</strong> {form.story?.length || 0}
          </p>
        </div>
      </div>

      {error && (
        <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
          {error}
        </div>
      )}

      <div className="mt-10 flex flex-col gap-4 md:flex-row">
        <button
          type="button"
          onClick={previousStep}
          disabled={pending}
          className="rounded-xl border border-white/10 px-8 py-4 transition hover:bg-white/5 disabled:opacity-40"
        >
          Back
        </button>

        <button
          type="button"
          disabled={pending || !canPublish}
          onClick={handlePublish}
          className="rounded-xl bg-pink-500 px-8 py-4 transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {pending
            ? "Publishing..."
            : !canPublish
              ? "Add Required Photos"
              : "Publish LoveQuest ❤️"}
        </button>
      </div>

      <PublishSuccessModal
        open={showSuccessModal}
        slug={publishedSlug}
        recipient={form.recipientName}
        onClose={() => setShowSuccessModal(false)}
      />
    </>
  );
}
