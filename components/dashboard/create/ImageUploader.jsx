"use client";

import { useState } from "react";
import Image from "next/image";
import { UploadCloud, ImagePlus, Loader2 } from "lucide-react";

export default function ImageUploader({ value, onChange }) {
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

      onChange(json.url);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-5">
      <label className="group flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-pink-500/40 bg-white/[0.03] px-6 py-10 transition hover:border-pink-500 hover:bg-pink-500/10">
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (file) {
              upload(file);
            }
          }}
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

            <p className="mt-5 text-lg font-semibold">Upload Memory Photo</p>

            <p className="mt-2 text-center text-sm text-zinc-500">
              JPG, PNG or WEBP
              <br />
              Tap to choose another image anytime.
            </p>
          </>
        )}
      </label>

      {value && (
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <div className="relative aspect-video w-full">
            <Image src={value} alt="Memory" fill className="object-cover" />
          </div>

          <div className="flex items-center justify-between bg-white/5 px-5 py-4">
            <p className="truncate text-sm text-zinc-400">
              Image uploaded successfully
            </p>

            <label className="flex cursor-pointer items-center gap-2 rounded-xl bg-pink-500 px-4 py-2 text-sm font-medium transition hover:bg-pink-600">
              <ImagePlus size={18} />
              Replace
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (file) {
                    upload(file);
                  }
                }}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
