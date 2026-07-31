"use client";

import { useState } from "react";

export default function CopyButton({ url }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(url);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <button onClick={copy} className="rounded-xl bg-pink-500 px-6 py-3">
      {copied ? "Copied ❤️" : "Copy Link"}
    </button>
  );
}
