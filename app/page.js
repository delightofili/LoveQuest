import GradientBackground from "@/components/Backgrounds/GradientBackground";
import FloatingParticles from "@/components/Backgrounds/FloatingParticles";
import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090b]">
      <GradientBackground />
      <FloatingParticles />
      <Navbar />
      <Hero />
    </main>
  );
}
