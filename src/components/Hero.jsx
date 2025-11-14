import React, { useState } from 'react';

function Hero() {
  // 2 trigger (search bar & card) bakal nyalain state ini
  const [previewActive, setPreviewActive] = useState(false);

  return (
    <section
      id="home"
      className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-10 md:flex-row md:items-center md:gap-14 md:px-6 md:pt-14 lg:pt-20"
    >
      {/* background ornament */}
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/2 md:block">
        <div className="absolute inset-10 rounded-[40px] border border-cyan-400/10 bg-gradient-to-br from-ink-primary-soft/80 to-slate-900/80 shadow-[0_0_80px_rgba(34,211,238,0.25)]" />
        <div className="absolute inset-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.18),transparent_55%)]" />
      </div>

      {/* kiri: teks */}
      <div className="relative z-10 max-w-xl">
      <div
    className="
    group/pill inline-flex items-center gap-2 rounded-full
    border border-ink-primary/40 bg-slate-900/80 px-2 py-1 pr-3
    text-xs text-ink-primary shadow-glow/10 cursor-default
    transition-colors transition-shadow duration-300
    hover:border-ink-primary hover:bg-ink-primary/20 hover:shadow-glow
  "
>
  <span
    className="
      inline-flex h-5 w-5 items-center justify-center rounded-full
      bg-ink-primary/20 text-[10px]
      transition-colors duration-300
      group-hover/pill:bg-ink-primary/70 group-hover/pill:text-slate-950
    "
  >
    🎧
  </span>
  <span
    className="
      font-semibold tracking-wide
      transition-colors duration-300
      group-hover/pill:text-cyan-100
    "
  >
    AI baca mood, Spotify nyetel lagu
  </span>
</div>

        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          Biar <span className="text-ink-primary">AI</span> yang baca mood kamu,&nbsp;
          <span className="text-ink-accent">Spotify</span> yang ngobatin.
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
          Ketik curhatmu, rekam suara, atau tunjukkan ekspresi wajah.{' '}
          <span className="text-slate-100">MoodVibe</span> menganalisis suasana hati kamu
          dan mencarikan playlist Spotify yang paling pas.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#modes"
            className="rounded-full bg-ink-primary px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-cyan-300"
          >
            Mulai cek mood
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-300 underline-offset-4 transition hover:text-ink-primary hover:underline"
          >
            Lihat cara kerja
          </a>
        </div>

        {/* SEARCH BAR – trigger 1 */}
        <div
          className="mt-6 max-w-md"
          onMouseEnter={() => setPreviewActive(true)}
          onMouseLeave={() => setPreviewActive(false)}
        >
          <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 px-3 py-2.5 shadow-sm shadow-slate-900/70 transition-colors hover:border-ink-primary/70 hover:bg-slate-900/90">
            <div className="flex items-center gap-2">
              <span className="text-base text-ink-primary">💬</span>
              <input
                className="flex-1 bg-transparent text-xs text-slate-200 placeholder:text-slate-500 outline-none sm:text-sm"
                placeholder='Contoh: "aku lagi cape banget nih habis belajar"'
                onFocus={() => setPreviewActive(true)}
                onBlur={() => setPreviewActive(false)}
              />
              <button
                type="button"
                className="rounded-full bg-ink-primary px-3 py-1 text-[11px] font-semibold text-slate-950 shadow-glow transition hover:bg-cyan-300"
              >
                Preview
              </button>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">
              #hubungkan_ke_ai_nya_yo
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800/80 text-[10px]">
              🤖
            </span>
            <span>Powered by AI mood detection</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800/80 text-[10px]">
              🟢
            </span>
            <span>Integrated with Spotify search</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800/80 text-[10px]">
            👥
            </span>
            <span>Integrated with JosJis person</span>
          </div>
        </div>
      </div>

      {/* KANAN: LIVE MOOD PREVIEW – trigger 2 + efek pakai state */}
      <div
        className={
          `relative mt-8 w-full max-w-md transform-gpu transition-transform duration-500 ease-out md:mt-0 md:ml-auto ` +
          (previewActive
            ? 'scale-[1.03] md:scale-[1.11] md:-translate-y-2 md:translate-x-2 md:rotate-1'
            : 'scale-400')
        }
        onMouseEnter={() => setPreviewActive(true)}   // trigger 2
        onMouseLeave={() => setPreviewActive(false)}
      >
        <div className="rounded-3xl border border-slate-700/80 bg-slate-950/80 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur">
          {/* mini top bar */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-300">Live Mood Preview</span>
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
              • Analyzed
            </span>
          </div>

          {/* mood bubble */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink-primary/15 text-xl">
                😪
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Detected mood
                </p>
                <p className="text-sm font-semibold text-slate-50">
                  Capek tapi butuh chill
                </p>
              </div>
            </div>

            {/* mood bar */}
            <div className="mt-4 space-y-1">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>Energy</span>
                <span>Low</span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-800">
                <div className="h-1.5 w-1/3 rounded-full bg-ink-accent" />
              </div>

              <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span>Need chill</span>
                <span>High</span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-800">
                <div className="h-1.5 w-4/5 rounded-full bg-ink-primary" />
              </div>
            </div>
          </div>

          {/* playlist mock */}
          <div className="mt-4 space-y-3 rounded-2xl bg-slate-900/70 p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-200">
                  Chill music full album
                </p>
                <p className="text-[11px] text-slate-400">Auto-picked from Spotify</p>
              </div>
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-primary text-slate-950 shadow-glow transition hover:bg-cyan-300">
                ▶
              </button>
            </div>

            <div className="space-y-1.5 text-[11px] text-slate-300">
              <div className="flex items-center justify-between">
                <span>Powfu - Death bed</span>
                <span className="text-slate-500">2:52</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Cigarettes After Sex - Cry</span>
                <span className="text-slate-500">4:51</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Bruno Mars - Talking to the Moon</span>
                <span className="text-slate-500">3:35</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
