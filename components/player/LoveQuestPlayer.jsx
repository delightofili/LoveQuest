"use client";

import IntroOverlay from "@/app/q/[slug]/components/IntroOverlay";
import { useState } from "react";
import StoryPlayer from "./StoryPlayer";

export default function LoveQuestPlayer({ experience }) {
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started ? (
        <IntroOverlay
          experience={experience}
          onStart={() => setStarted(true)}
        />
      ) : (
        <StoryPlayer experience={experience} />
      )}
    </>
  );
}
