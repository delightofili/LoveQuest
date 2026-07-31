const themes = [
  {
    name: "Luxury",

    emoji: "✨",
  },

  {
    name: "Galaxy",

    emoji: "🌌",
  },

  {
    name: "Rose",

    emoji: "🌹",
  },

  {
    name: "Sakura",

    emoji: "🌸",
  },

  {
    name: "Sunset",

    emoji: "🌅",
  },

  {
    name: "Dark",

    emoji: "🌙",
  },
];

export default function StepTwo({
  form,

  setForm,

  next,

  back,
}) {
  return (
    <div>
      <h1 className="text-5xl font-bold">Choose a theme</h1>

      <div className="mt-10 grid grid-cols-3 gap-6">
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() =>
              setForm({
                ...form,

                theme: theme.name,
              })
            }
            className={`

rounded-3xl

border

p-10

${form.theme === theme.name ? "border-pink-500" : "border-white/10"}

`}
          >
            <div className="text-5xl">{theme.emoji}</div>

            <h2 className="mt-5 text-xl">{theme.name}</h2>
          </button>
        ))}
      </div>

      <div className="mt-12 flex gap-4">
        <button
          onClick={back}
          className="rounded-xl border border-white/10 px-8 py-3"
        >
          Back
        </button>

        <button
          onClick={next}
          disabled={!form.theme}
          className="rounded-xl bg-pink-500 px-8 py-3"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
