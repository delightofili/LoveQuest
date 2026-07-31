import GradientBackground from "@/components/backgrounds/GradientBackground";
import FloatingParticles from "@/components/backgrounds/FloatingParticles";

import SignupForm from "@/components/auth/SignupForm";
import { registerAction } from "@/app/actions/auth";

export default async function SignupPage() {
  return (
    <div className="flex items-center justify-center overflow-hidden bg-[#09090b]">
      <FloatingParticles />
      <SignupForm />
    </div>
  );
}
