import FloatingParticles from "@/components/Backgrounds/FloatingParticles";

import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center overflow-hidden bg-[#09090b]">
      <FloatingParticles />
      <LoginForm />
    </div>
  );
}
