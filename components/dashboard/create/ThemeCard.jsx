export default function ThemeCard({
  theme,

  selected,

  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`

rounded-3xl

border

p-6

text-left

transition-all

${
  selected
    ? "border-pink-500 bg-pink-500/10 scale-[1.02]"
    : "border-white/10 hover:border-pink-400"
}

`}
    >
      <div className="text-5xl">{theme.emoji}</div>

      <h2 className="mt-5 text-xl font-bold">{theme.name}</h2>

      <p className="mt-2 text-sm text-zinc-400">{theme.description}</p>
    </button>
  );
}
