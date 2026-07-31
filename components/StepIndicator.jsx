export default function StepIndicator({ step }) {
  const steps = ["Basic", "Theme", "Story", "Preview"];

  return (
    <div className="mb-16 flex overflow-x-auto gap-6">
      {steps.map((item, index) => (
        <div key={item} className="flex-1">
          <div
            className={`

h-2

rounded-full

${index + 1 <= step ? "bg-pink-500" : "bg-white/10"}

`}
          />

          <p className="mt-3">{item}</p>
        </div>
      ))}
    </div>
  );
}
