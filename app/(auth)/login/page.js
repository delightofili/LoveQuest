import GradientBackground from "@/components/backgrounds/GradientBackground";
import FloatingParticles from "@/components/backgrounds/FloatingParticles";

import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center overflow-hidden bg-[#09090b]">
      <FloatingParticles />
      <LoginForm />
    </div>
  );
}
