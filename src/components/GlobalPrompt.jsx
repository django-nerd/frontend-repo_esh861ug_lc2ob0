import React from 'react';

export default function GlobalPrompt() {
  const text = `Generate ultra-realistic, high-resolution e-commerce product photos for an aquarium brand called Sreeja Aquarium. Each image should have professional studio lighting, a clean white or gradient aqua background, and soft reflections.\nFocus on sharp detail, natural textures, and lifelike color. Maintain consistent photo framing and futuristic aquatic aesthetics with subtle water reflections or glass effects.\nStyle: clean, premium, futuristic, photo-realistic — suitable for e-commerce websites.\n\nStyle Modifiers (add to every prompt): photo-realistic, 8K resolution, studio lighting, high dynamic range, white or gradient aqua background, realistic reflections, sharp focus, product-centered composition, cinematic exposure, futuristic aqua aesthetic, perfect for e-commerce website.\n\nOptional branding: Include subtle text watermark ‘Sreeja Aquarium’ in the lower right corner, transparent and elegant, matching brand identity.`;

  function copy() {
    navigator.clipboard.writeText(text);
  }

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-2xl border border-cyan-200 bg-white/70 p-6 shadow-sm backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">Global Prompt</h2>
            <p className="mt-1 text-sm text-slate-600">Use this as the base for all product images.</p>
          </div>
          <button onClick={copy} className="inline-flex items-center rounded-lg bg-cyan-600 px-3 py-2 text-sm font-medium text-white hover:bg-cyan-700 active:scale-[.99]">
            Copy
          </button>
        </div>
        <pre className="mt-4 whitespace-pre-wrap rounded-xl bg-cyan-50/60 p-4 text-slate-800">{text}</pre>
      </div>
    </section>
  );
}
