import React from 'react';

export default function Header() {
  return (
    <header className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-sky-50" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/60 px-3 py-1 text-xs font-medium text-cyan-700 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-cyan-500" />
          E‑commerce Prompt Library
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Sreeja Aquarium — Realistic Product Image Prompts
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600 md:text-lg">
          Copy‑ready, high‑quality prompts tailored for fish, foods, accessories, and combos. Designed for
          ultra‑realistic, studio‑grade renders with clean aqua aesthetics.
        </p>
      </div>
    </header>
  );
}
