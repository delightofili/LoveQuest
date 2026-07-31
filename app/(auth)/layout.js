import GradientBackground from "@/components/backgrounds/GradientBackground";
import FloatingParticles from "@/components/backgrounds/FloatingParticles";

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
