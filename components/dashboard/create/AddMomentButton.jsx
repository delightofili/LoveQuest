export default function AddMomentButton({ addMoment }) {
  return (
    <button
      onClick={addMoment}
      className="w-full rounded-2xl border-2 border-dashed border-pink-500 py-10 transition hover:bg-pink-500/10"
    >
      <div className="text-5xl">+</div>

      <p className="mt-4 text-lg font-medium">Add New Memory</p>
    </button>
  );
}
