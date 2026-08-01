import { Trash2 } from "lucide-react";
import ImageUploader from "./ImageUploader";

export default function MomentCard({
  moment,
  index,
  updateMoment,
  deleteMoment,
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold md:text-2xl">Memory {index + 1}</h2>

        <button
          type="button"
          onClick={() => {
            const ok = confirm("Delete this memory?");

            if (ok) {
              deleteMoment(moment.id);
            }
          }}
          className="rounded-xl p-2 text-red-500 transition hover:bg-red-500/10"
        >
          <Trash2 />
        </button>
      </div>

      <div className="space-y-6">
        {/* TITLE */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Memory Title
          </label>

          <input
            value={moment.title || ""}
            onChange={(e) => updateMoment(moment.id, "title", e.target.value)}
            placeholder="First Day We Met"
            className="h-14 w-full rounded-xl border border-white/10 bg-white/5 px-5"
          />
        </div>

        {/* STORY */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Your Story
          </label>

          <textarea
            rows={6}
            value={moment.content || ""}
            onChange={(e) => updateMoment(moment.id, "content", e.target.value)}
            placeholder="Tell the story..."
            className="w-full rounded-xl border border-white/10 bg-white/5 p-5"
          />
        </div>

        {/* IMAGE */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Memory Photo <span className="text-pink-500">*</span>
          </label>

          <p className="mb-4 text-sm text-zinc-500">
            Every memory needs a photo before you can publish your LoveQuest.
          </p>

          <ImageUploader
            value={moment.image}
            required
            onChange={(url) => {
              updateMoment(moment.id, "image", url);
            }}
          />
        </div>
      </div>
    </div>
  );
}
