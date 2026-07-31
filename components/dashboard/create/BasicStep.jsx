const occasions = [
  "Girlfriend Day",

  "Anniversary",

  "Birthday",

  "Proposal",

  "Valentine",

  "Just Because",
];

export default function BasicStep({
  form,

  setForm,

  nextStep,
}) {
  function update(name, value) {
    setForm((prev) => ({
      ...prev,

      [name]: value,
    }));
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-white md:text-5xl">
        Basic Information
      </h1>

      <p className="mt-3 text-zinc-500">
        Let&apos;s create something unforgettable.
      </p>

      <div className="mt-12 space-y-8">
        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Experience Title
          </label>

          <input
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="Our Beautiful Journey"
            className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 outline-none focus:border-pink-500"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Recipient
            </label>

            <input
              value={form.recipientName}
              onChange={(e) => update("recipientName", e.target.value)}
              placeholder="Jessica"
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">From</label>

            <input
              value={form.senderName}
              onChange={(e) => update("senderName", e.target.value)}
              placeholder="David"
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 outline-none focus:border-pink-500"
            />
          </div>
        </div>

        <div>
          <label className="mb-5 block text-sm text-zinc-400">Occasion</label>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {occasions.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => update("occasion", item)}
                className={`

                rounded-2xl

                border

                p-5

                transition

                ${
                  form.occasion === item
                    ? "border-pink-500 bg-pink-500/20"
                    : "border-white/10 hover:border-pink-500/40"
                }

                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <button
          disabled={
            !form.title ||
            !form.recipientName ||
            !form.senderName ||
            !form.occasion
          }
          onClick={nextStep}
          className="w-full rounded-2xl bg-pink-500 py-4 font-semibold transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-40 md:w-auto md:px-10"
        >
          Continue →
        </button>
      </div>
    </>
  );
}
