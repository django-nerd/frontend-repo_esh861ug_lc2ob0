import React from 'react';

const categories = [
  {
    title: 'Betta Fish (Fighter Fish)',
    items: [
      {
        name: 'Platinum White OHM',
        prompt:
          'Platinum White Betta Fish (fighter fish) swimming in crystal-clear water, photographed close-up with white or aqua gradient background, soft shadow and reflection, realistic scales and fins.'
      },
      {
        name: 'Glow Nemo Candy OHM',
        prompt:
          'Bright orange and white Glow Nemo Candy Betta Fish, detailed macro photo with subtle water reflection and clean studio lighting.'
      },
      {
        name: 'Red Dragon OHM',
        prompt:
          'Red metallic Betta fish with wide fins, side-angle view on white background with faint aqua tone, perfect e-commerce lighting.'
      },
      {
        name: 'Big Ear Plakat',
        prompt:
          'Betta fish with large dumbo fins, realistic underwater-style photo, shallow depth of field, clean background with mild reflections.'
      }
    ]
  },
  {
    title: 'Guppy Fish',
    items: [
      {
        name: 'Albino Full Red Guppy',
        prompt: 'Two bright red guppies swimming in clear water, photographed for e-commerce with aqua white background and sharp detail.'
      },
      {
        name: 'Moscow Violet Guppy',
        prompt: 'Violet metallic guppies in minimal aquarium environment, soft lighting, isolated on gradient aqua background.'
      },
      {
        name: 'Blue Panda Guppy',
        prompt: 'Half-white, half-blue guppy pair, photo-realistic detail, clean product photo style.'
      },
      {
        name: 'Yellow Taxi Guppy',
        prompt:
          'Yellow guppy fish pair, detailed fins and scales, soft lighting on reflective glass base for e-commerce.'
      }
    ]
  },
  {
    title: 'Angel Fish',
    items: [
      {
        name: 'Platinum White Veil Tail Angel',
        prompt: 'White veil tail angel fish, side view, isolated on aqua-white gradient background, clean high-resolution photo.'
      },
      { name: 'Koi Angel', prompt: 'Orange-white-black koi angel fish, clear studio water shot, minimal futuristic aquatic background.' },
      { name: 'Green Pinoy Angel', prompt: 'Greenish-blue angel fish, macro details of fins and texture, bright, crisp lighting.' },
      {
        name: 'Blue Chocolate Angel',
        prompt: 'Dark blue and brown angel fish, balanced lighting, subtle glass reflections, perfect for product card display.'
      }
    ]
  },
  {
    title: 'Fish Foods',
    items: [
      {
        name: 'Betta Booster (50g Pack)',
        prompt:
          'Realistic photo of a Betta Booster fish food pouch, upright position, shadow and reflection on glossy surface, aqua background.'
      },
      {
        name: 'Guppy Formula (50g Pack)',
        prompt:
          "Fish food container labeled 'Guppy Formula', minimal product studio setup, realistic texture and lighting."
      },
      {
        name: 'Z Betta Ultra Premium',
        prompt:
          'Luxury-style fish food packet labeled “Z Betta Ultra Premium”, holographic packaging, photo-realistic reflection and depth.'
      },
      {
        name: 'Moina Micrura Live Feed',
        prompt:
          'Transparent pack of live Moina feed with visible bubbles, macro focus, clean aqua gradient background.'
      }
    ]
  },
  {
    title: 'Accessories',
    items: [
      {
        name: 'Handcrafted Betta Bottle',
        prompt:
          'Decorative Betta fish glass bottle with lace or jute design, placed on white reflective background, photographed like a home décor product.'
      },
      {
        name: 'Breeding Cages',
        prompt:
          'Set of small aquarium breeding cages (4x4, 5x5, 6x6 inches) arranged neatly, sharp focus, neutral background, consistent product lighting.'
      },
      {
        name: 'Fish Packing Covers',
        prompt:
          'Transparent plastic aquarium packing bags displayed on a table, realistic product texture, studio lighting, shadow detail.'
      }
    ]
  },
  {
    title: 'Combo Offer Images',
    items: [
      {
        name: 'Aqua Combo Banners',
        prompt:
          'Stylized e-commerce banner showing combo offers — for example, Betta Fish + Bottle for ₹99, or Angel Fish Combo (6 pieces ₹499). Layout: clean, minimal, with neon aqua glow border and text overlay — futuristic aquatic theme.'
      }
    ]
  }
];

function PromptCard({ name, prompt }) {
  const text = `${name}\n\n${prompt}\n\nphoto-realistic, 8K resolution, studio lighting, high dynamic range, white or gradient aqua background, realistic reflections, sharp focus, product-centered composition, cinematic exposure, futuristic aqua aesthetic, perfect for e-commerce website.\nOptional watermark: “Sreeja Aquarium” in the lower right corner.`;

  const copy = () => navigator.clipboard.writeText(text);

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-slate-900">{name}</h3>
        <button onClick={copy} className="shrink-0 rounded-lg border border-cyan-300 bg-cyan-50 px-2.5 py-1.5 text-xs font-medium text-cyan-700 hover:bg-cyan-100">Copy</button>
      </div>
      <p className="mt-2 text-sm text-slate-700">{prompt}</p>
      <p className="mt-3 text-xs text-slate-500">Includes global style modifiers and optional brand watermark when copied.</p>
    </div>
  );
}

export default function CategoryPrompts() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-12">
      {categories.map((cat) => (
        <div key={cat.title} className="mt-10">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-lg font-semibold text-slate-900 md:text-xl">{cat.title}</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-200 to-transparent ml-4" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cat.items.map((item) => (
              <PromptCard key={item.name} name={item.name} prompt={item.prompt} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
