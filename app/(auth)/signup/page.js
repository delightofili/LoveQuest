import FloatingParticles from "@/components/Backgrounds/FloatingParticles";

import SignupForm from "@/components/auth/SignupForm";

export default async function SignupPage() {
  return (
    <div className="flex items-center justify-center overflow-hidden bg-[#09090b]">
      <FloatingParticles />
      <SignupForm />
    </div>
  );
}
