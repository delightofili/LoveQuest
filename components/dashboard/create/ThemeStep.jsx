import ThemeCard from "./ThemeCard";
import PhonePreview from "./PhonePreview";

const themes = [
  {
    name: "Rose",

    emoji: "🌹",

    description: "Romantic pink theme",
  },

  {
    name: "Luxury",

    emoji: "✨",

    description: "Black & Gold",
  },

  {
    name: "Galaxy",

    emoji: "🌌",

    description: "Purple night sky",
  },

  {
    name: "Sunset",

    emoji: "🌅",

    description: "Warm orange tones",
  },

  {
    name: "Ocean",

    emoji: "🌊",

    description: "Cool blue",
  },

  {
    name: "Dark",

    emoji: "🌙",

    description: "Minimal dark",
  },
];

export default function ThemeStep({
  form,

  setForm,

  nextStep,

  previousStep,
}) {
  return (
    <>
      <h1 className="text-4xl font-bold">Choose Theme</h1>

      <p className="mt-3 text-zinc-500">
        This changes how your LoveQuest feels.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-2">
        <div>
          <div className="grid gap-5 sm:grid-cols-2">
            {themes.map((theme) => (
              <ThemeCard
                key={theme.name}
                theme={theme}
                selected={form.theme === theme.name}
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,

                    theme: theme.name,
                  }))
                }
              />
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 md:flex-row">
            <button
              onClick={previousStep}
              className="rounded-xl border border-white/10 px-8 py-4"
            >
              Back
            </button>

            <button
              disabled={!form.theme}
              onClick={nextStep}
              className="rounded-xl bg-pink-500 px-8 py-4 disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <PhonePreview form={form} />
        </div>
      </div>
    </>
  );
}
