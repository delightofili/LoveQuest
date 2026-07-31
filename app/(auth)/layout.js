import FloatingParticles from "@/components/Backgrounds/FloatingParticles";
import GradientBackground from "@/components/Backgrounds/GradientBackground";

export default function AuthLayout({ children }) {
  return (
    <main
      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      bg-[#09090B]
      px-5
      "
    >
      <GradientBackground />

      <FloatingParticles />

      <div className="relative z-10 w-full">{children}</div>
    </main>
  );
}
