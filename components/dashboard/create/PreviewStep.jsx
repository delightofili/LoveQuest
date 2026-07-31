import PhonePreview from "./PhonePreview";

export default function PreviewStep({
  form,

  nextStep,

  previousStep,
}) {
  return (
    <>
      <h1 className="text-4xl font-bold">Preview</h1>

      <p className="mt-3 text-zinc-500">
        Here&apos;s what your partner will see.
      </p>

      <div className="mt-10 flex justify-center">
        <PhonePreview form={form} />
      </div>

      <div className="mt-10 flex flex-col gap-4 md:flex-row">
        <button
          onClick={previousStep}
          className="rounded-xl border border-white/10 px-8 py-4"
        >
          Back
        </button>

        <button onClick={nextStep} className="rounded-xl bg-pink-500 px-8 py-4">
          Looks Good →
        </button>
      </div>
    </>
  );
}
