import React from 'react';

const modes = [
  {
    id: 'text',
    icon: '✍️',
    title: 'Mood via teks',
    desc: 'Cocok buat kamu yang suka curhat lewat kata-kata.',
    placeholder: 'Contoh: “Aku lagi capek banget habis belajar materi inkubasi...”',
    badge: 'Paling populer',
  },
  {
    id: 'voice',
    icon: '🎙️',
    title: 'Mood via suara',
    desc: 'Ucapkan apa yang kamu rasakan, AI akan menganalisis nada & gaya bicara.',
    placeholder: 'Tekan tombol record dan mulai ngomong natural aja.',
    badge: 'Butuh mic',
  },
  {
    id: 'face',
    icon: '📷',
    title: 'Mood via ekspresi wajah',
    desc: 'Tunjukkan ekspresi wajahmu beberapa detik ke kamera.',
    placeholder: 'Kamera akan menangkap ekspresi untuk dianalisis AI.',
    badge: 'Butuh kamera',
  },
];

function ModesPreview({ selectedMode, onModeChange }) {
  const active = modes.find((m) => m.id === selectedMode) ?? modes[0];

  return (
    <section
      id="modes"
      className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16"
    >
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Pilih cara kamu ekspresikan mood
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Kamu bebas pilih. Nanti di halaman utama analisis, semua mode ini akan aktif
            dan terhubung ke AI & Spotify.
          </p>
        </div>
        <p className="text-xs text-slate-400 md:text-right">
          *Saat ini ini baru preview UI.  
          Integrasi AI dan Spotify akan aktif di tahap berikutnya.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
        {/* cards mode */}
        <div className="space-y-3">
          {modes.map((mode) => {
            const isActive = mode.id === active.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => onModeChange(mode.id)}
                className={`group flex w-full items-start gap-3 rounded-2xl border px-3 py-3 text-left transition ${
                  isActive
                    ? 'border-ink-primary bg-ink-primary-soft/90 shadow-glow'
                    : 'border-slate-800/80 bg-slate-950/80 hover:border-ink-primary/50 hover:bg-slate-900/80'
                }`}
              >
                <div
                  className={`mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl text-lg ${
                    isActive
                      ? 'bg-ink-primary text-slate-950'
                      : 'bg-slate-900 text-slate-200'
                  }`}
                >
                  {mode.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-slate-50">
                      {mode.title}
                    </h3>
                    {mode.badge && (
                      <span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[10px] font-semibold text-ink-primary">
                        {mode.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-slate-300">
                    {mode.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* preview panel */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 md:p-5">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ink-primary/15 blur-2xl" />
          <div className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-ink-accent/15 blur-2xl" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Preview interaksi
                </p>
                <p className="text-sm font-semibold text-slate-50">
                  {active.title}
                </p>
              </div>
              <span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[10px] text-slate-300">
                Mode: <span className="font-semibold text-ink-primary">{active.id}</span>
              </span>
            </div>

            {/* pseudo chat/textarea */}
            <div className="space-y-2">
              <p className="text-[11px] text-slate-400">
                {active.id === 'text' && 'User akan mengetik mood mereka di sini.'}
                {active.id === 'voice' &&
                  'User akan menekan tombol record dan bicara natural.'}
                {active.id === 'face' &&
                  'User akan mengaktifkan kamera dan menunjukkan ekspresi wajah.'}
              </p>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-3">
                {active.id === 'text' && (
                  <textarea
                    disabled
                    className="h-28 w-full resize-none rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs text-slate-200 outline-none"
                    placeholder={active.placeholder}
                  />
                )}

                {active.id === 'voice' && (
                  <div className="flex h-28 flex-col items-center justify-center gap-3">
                    <div className="flex gap-1.5">
                      {[...Array(16)].map((_, i) => (
                        <span
                          key={i}
                          className="h-8 w-1 rounded-full bg-slate-700/70"
                        />
                      ))}
                    </div>
                    <button className="rounded-full bg-ink-primary px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-glow">
                      ● Tekan untuk record (preview)
                    </button>
                  </div>
                )}

                {active.id === 'face' && (
                  <div className="flex h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-700 bg-slate-900/60">
                    <div className="flex h-16 w-24 items-center justify-center rounded-xl bg-slate-800/70 text-3xl">
                      🙂
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Nanti di mode sebenarnya, kamera akan tampil di area ini.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* fake button */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button className="rounded-full bg-ink-primary px-5 py-1.5 text-xs font-semibold text-slate-950 shadow-glow transition hover:bg-cyan-300">
                Analyze mood (preview)
              </button>
              <p className="text-[11px] text-slate-400">
                Setelah dianalisis, sistem akan mengirim keyword ke Spotify untuk mencari
                playlist yang cocok.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModesPreview;
