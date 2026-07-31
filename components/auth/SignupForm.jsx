"use client";

import { useTransition, useState } from "react";

import AuthCard from "./AuthCard";
import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";

import { registerAction } from "@/app/actions/auth";

export default function SignupForm() {
  const [pending, startTransition] = useTransition();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setError("");

    startTransition(async () => {
      const result = await registerAction(form);
      if (result?.error) {
        setError(result.error);
      }
    });
  }

  return (
    <AuthCard>
      <AuthHeader
        title="Create Account"
        subtitle="Start creating unforgettable memories."
      />

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <AuthInput
          label="Username"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Delightsome"
        />

        <AuthInput
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@gmail.com"
        />

        <AuthInput
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="********"
        />

        {error && <p className="text-red-400">{error}</p>}

        <button
          disabled={pending}
          className="
          h-12
          w-full
          rounded-xl
          bg-gradient-to-r
          from-pink-500
          to-rose-500
          font-semibold
          text-white
          transition
          hover:scale-[1.02]
          disabled:opacity-50
          "
        >
          {pending ? "Creating account..." : "Create Account"}
        </button>
      </form>

      <p className="mt-6 text-center text-zinc-400">
        Already have an account?{" "}
        <a href="/login" className="text-pink-400">
          Login
        </a>
      </p>
    </AuthCard>
  );
}
