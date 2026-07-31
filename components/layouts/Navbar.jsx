"use client";

import Button from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/3 px-6 py-4 backdrop-blur-xl">
        <h1 className="text-xl font-bold text-white">LoveQuest</h1>
        <div className="hidden gap-8 text-zinc-300 md:flex">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
        </div>

        <Button href="/login">Sign In</Button>
      </div>
    </nav>
  );
}
