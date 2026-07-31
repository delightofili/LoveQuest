export default function StepOne({
  form,

  setForm,

  next,
}) {
  const occasions = [
    "Girlfriend Day",

    "Anniversary",

    "Proposal",

    "Birthday",

    "Valentine",

    "Just Because",
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-5xl font-bold">Tell us about this story</h1>

        <p className="mt-3 text-zinc-500">
          Every unforgettable experience starts with a title.
        </p>
      </div>

      <input
        value={form.title}
        onChange={(e) =>
          setForm({
            ...form,

            title: e.target.value,
          })
        }
        placeholder="Our Beautiful Journey"
        className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-6"
      />

      <div className="grid grid-cols-2 gap-4">
        {occasions.map((item) => (
          <button
            key={item}
            onClick={() =>
              setForm({
                ...form,

                occasion: item,
              })
            }
            className={`

rounded-2xl

border

p-6

transition

${form.occasion === item ? "border-pink-500 bg-pink-500/20" : "border-white/10"}

`}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        disabled={!form.title || !form.occasion}
        onClick={next}
        className="rounded-2xl bg-pink-500 px-10 py-4 disabled:opacity-40"
      >
        Continue
      </button>
    </div>
  );
}
