"use client";

import { useState } from "react";
import Image from "next/image";
import { UploadCloud, ImagePlus, Loader2, CheckCircle2 } from "lucide-react";

export default function ImageUploader({ value, onChange, required = false }) {
  const [loading, setLoading] = useState(false);

  async function upload(file) {
    try {
      setLoading(true);

      const data = new FormData();
      data.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      const json = await res.json();

      if (!json.url) {
        throw new Error("Upload succeeded but no image URL was returned.");
      }

      onChange(json.url);
    } catch (err) {
      alert(err.message || "Something went wrong while uploading.");
    } finally {
      setLoading(false);
    }
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0];

    if (file) {
      upload(file);
    }
  }

  return (
    <div className="space-y-5">
      {!value ? (
        <label
          className={`group flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed px-6 py-10 transition ${
            required
              ? "border-pink-500/50 bg-pink-500/[0.03] hover:border-pink-500 hover:bg-pink-500/10"
              : "border-white/10 bg-white/[0.03] hover:border-pink-500/50"
          }`}
        >
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            hidden
            onChange={handleFileChange}
          />

          {loading ? (
            <>
              <Loader2 size={42} className="animate-spin text-pink-500" />

              <p className="mt-4 text-lg font-medium">Uploading...</p>

              <p className="mt-2 text-sm text-zinc-500">Please wait</p>
            </>
          ) : (
            <>
              <UploadCloud
                size={48}
                className="text-pink-500 transition group-hover:scale-110"
              />

              <p className="mt-5 text-lg font-semibold">
                Upload Memory Photo
                {required && <span className="ml-1 text-pink-500">*</span>}
              </p>

              <p className="mt-2 text-center text-sm text-zinc-500">
                A photo is required for this memory.
                <br />
                JPG, PNG or WEBP
              </p>
            </>
          )}
        </label>
      ) : (
        <div className="overflow-hidden rounded-3xl border border-pink-500/30">
          <div className="relative aspect-video w-full">
            <Image src={value} alt="Memory" fill className="object-cover" />
          </div>

          <div className="flex items-center justify-between gap-4 bg-white/5 px-5 py-4">
            <div className="flex min-w-0 items-center gap-2">
              <CheckCircle2 size={18} className="shrink-0 text-green-500" />

              <p className="truncate text-sm text-zinc-400">
                Photo uploaded successfully
              </p>
            </div>

            <label className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-pink-500 px-4 py-2 text-sm font-medium transition hover:bg-pink-600">
              <ImagePlus size={18} />
              Replace
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                hidden
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
