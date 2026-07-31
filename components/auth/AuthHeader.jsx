export default function AuthHeader({ title, subtitle }) {
  return (
    <>
      <h1 className="text-4xl font-bold text-white">{title}</h1>

      <p className="mt-3 text-zinc-400">{subtitle}</p>
    </>
  );
}
