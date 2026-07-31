export default function AuthInput({ label, error, ...props }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-zinc-300">{label}</label>

      <input
        {...props}
        className="
        h-12
        w-full
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-4
        text-white
        outline-none
        transition
        placeholder:text-zinc-500
        focus:border-pink-500
        "
      />

      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}
