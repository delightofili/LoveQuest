export default function PhonePreview({ form }) {
  const backgrounds = {
    Rose: "from-pink-500/30 to-pink-900",
    Luxury: "from-yellow-500/20 to-black",
    Galaxy: "from-purple-500/30 to-black",
    Sunset: "from-orange-400/30 to-red-700",
    Ocean: "from-cyan-400/30 to-blue-900",
    Dark: "from-zinc-800 to-black",
  };
  return (
    <div className="mx-auto w-[320px] rounded-[40px] border-8 border-zinc-800 bg-black shadow-2xl">
      <div
        className={`rounded-[32px] bg-gradient-to-b ${backgrounds[form.theme] || "from-pink-500/20 to-black"} p-6`}
      >
        <h2 className="text-center text-2xl font-bold">❤️</h2>

        <h1 className="mt-6 text-center text-2xl font-bold">
          {form.title || "LoveQuest"}
        </h1>

        <p className="mt-2 text-center text-zinc-400">
          For {form.recipientName || "Someone Special"}
        </p>

        <div className="mt-10 space-y-5">
          {form.story.slice(0, 2).map((memory) => (
            <div key={memory.id} className="rounded-2xl bg-white/5 p-4">
              {memory.image && (
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="mb-4 h-40 w-full rounded-xl object-cover"
                />
              )}

              <h3 className="font-semibold">{memory.title || "Untitled"}</h3>

              <p className="mt-2 line-clamp-3 text-sm text-zinc-400">
                {memory.content || "Your memory..."}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500">
          Made with ❤️ by {form.senderName || "You"}
        </p>
      </div>
    </div>
  );
}
