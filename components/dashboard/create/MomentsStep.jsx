import AddMomentButton from "./AddMomentButton";
import MomentCard from "./MomentCard";

export default function MomentsStep({
  form,

  setForm,

  nextStep,

  previousStep,
}) {
  function addMoment() {
    setForm((prev) => ({
      ...prev,

      story: [
        ...prev.story,

        {
          id: crypto.randomUUID(),

          title: "",

          content: "",

          image: "",
        },
      ],
    }));
  }

  function updateMoment(
    id,

    field,

    value,
  ) {
    setForm((prev) => ({
      ...prev,

      story: prev.story.map((item) =>
        item.id === id
          ? {
              ...item,

              [field]: value,
            }
          : item,
      ),
    }));
  }

  function deleteMoment(id) {
    setForm((prev) => ({
      ...prev,

      story: prev.story.filter((item) => item.id !== id),
    }));
  }

  return (
    <>
      <h1 className="text-4xl font-bold">Your Memories</h1>

      <p className="mt-3 text-zinc-500">Add every special memory.</p>

      <div className="mt-10 space-y-8">
        {form.story.map((moment, index) => (
          <MomentCard
            key={moment.id}
            moment={moment}
            index={index}
            updateMoment={updateMoment}
            deleteMoment={deleteMoment}
          />
        ))}

        <AddMomentButton addMoment={addMoment} />

        <div className="flex flex-col gap-4 md:flex-row">
          <button
            onClick={previousStep}
            className="rounded-xl border border-white/10 px-8 py-4"
          >
            Back
          </button>

          <button
            disabled={form.story.length === 0}
            onClick={nextStep}
            className="rounded-xl bg-pink-500 px-8 py-4 disabled:opacity-40"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
