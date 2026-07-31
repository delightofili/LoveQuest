import { getCurrentUser } from "@/lib/auth/auth";
import ProfileForm from "./ProfileForm";

export default async function SettingsPage() {
  const user = await getCurrentUser();

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-4xl font-bold">Settings</h1>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-xl font-semibold">Profile</h2>

        <div className="mt-8">
          <ProfileForm user={user} />
        </div>
      </div>
    </div>
  );
}
