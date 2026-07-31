"use client";

import { useState, useTransition } from "react";

import AuthCard from "./AuthCard";
import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";

import { loginAction } from "@/app/actions/auth";

export default function LoginForm() {
  const [pending, startTransition] = useTransition();

  const [form, setForm] = useState({
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
      const result = await loginAction(form);
      if (result?.error) {
        setError(result.error);
      }
    });
  }

  return (
    <AuthCard>
      <AuthHeader title="Welcome Back" subtitle="Continue your LoveQuest." />

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <AuthInput
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />

        <AuthInput
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
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
          text-white
          font-semibold
          "
        >
          {pending ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <p className="mt-6 text-center text-zinc-400">
        Don&apos;t have an account?{" "}
        <a href="/signup" className="text-pink-400">
          Create one
        </a>
      </p>
    </AuthCard>
  );
}
