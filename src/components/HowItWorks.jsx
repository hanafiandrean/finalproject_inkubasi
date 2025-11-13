import React from 'react';

const steps = [
  {
    icon: '✍️',
    title: 'Ekspresikan mood kamu',
    desc: 'Ketik curhatmu, rekam suara, atau tunjukkan ekspresi wajah ke kamera.',
  },
  {
    icon: '🧠',
    title: 'AI analisis suasana hati',
    desc: 'Model AI membaca emosi di balik kata, nada suara, dan ekspresi wajah.',
  },
  {
    icon: '🎧',
    title: 'Spotify nyetel playlist pas',
    desc: 'Mood kamu dipetakan ke genre & playlist yang cocok: chill, fokus, happy, dan lainnya.',
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16"
    >
      <div className="mb-8 max-w-2xl">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Cara kerja <span className="text-ink-primary">MoodVibe</span>
        </h2>
        <p className="mt-3 text-sm text-slate-300 sm:text-base">
          Dibikin simple: cukup tiga langkah untuk mengubah perasaan jadi playlist Spotify.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.title}
            className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 transition hover:border-ink-primary/60 hover:shadow-glow"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-ink-primary/10 blur-2xl transition group-hover:bg-ink-accent/20" />
            <div className="relative">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/90 text-lg">
                {step.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-50">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;

