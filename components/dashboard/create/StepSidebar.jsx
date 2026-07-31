"use client";

const steps = ["Basic", "Moments", "Theme", "Preview", "Publish"];

export default function StepSidebar({ step }) {
  return (
    <>
      <aside className="hidden w-72 shrink-0 lg:block">
        <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-8 text-xl font-bold text-white">
            Create LoveQuest
          </h2>

          <div className="space-y-4">
            {steps.map((item, index) => {
              const isCurrent = step === index + 1;
              const isCompleted = step > index + 1;

              return (
                <div
                  key={item}
                  className={`flex items-center gap-4 rounded-xl p-4 transition ${
                    isCurrent ? "bg-pink-500 text-white" : "text-zinc-500"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                      isCompleted
                        ? "bg-green-500 text-white"
                        : isCurrent
                          ? "bg-white text-black"
                          : "bg-white/10 text-zinc-400"
                    }`}
                  >
                    {isCompleted ? "✓" : index + 1}
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </aside>

      <div className="no-scrollbar -mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-2 lg:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {steps.map((item, index) => {
          const isCurrent = step === index + 1;
          const isCompleted = step > index + 1;

          return (
            <div
              key={item}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition ${
                isCurrent
                  ? "border-pink-500 bg-pink-500 text-white"
                  : isCompleted
                    ? "border-green-500/30 bg-green-500/10 text-green-400"
                    : "border-white/10 bg-white/5 text-zinc-400"
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                  isCurrent
                    ? "bg-white text-pink-600"
                    : isCompleted
                      ? "bg-green-500 text-white"
                      : "bg-white/10 text-zinc-400"
                }`}
              >
                {isCompleted ? "✓" : index + 1}
              </span>
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
