import React from 'react';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
      <div className="rounded-xl border border-slate-200 bg-white/70 p-4 backdrop-blur">
        <p>
          Pro tip: For bulk generation in Google AI Studio or Leonardo, ask for 10 product images across key categories
          with consistent studio lighting, aqua-white background, and soft reflections.
        </p>
        <p className="mt-3">© {new Date().getFullYear()} Sreeja Aquarium — Prompt Toolkit</p>
      </div>
    </footer>
  );
}
