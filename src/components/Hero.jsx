import React from 'react';

function Hero() {
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

      {/* left: copy */}
      <div className="relative z-10 max-w-xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink-primary/40 bg-slate-900/80 px-2 py-1 pr-3 text-xs text-ink-primary shadow-glow/30">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-ink-primary/20 text-[10px]">
            🎧
          </span>
          <span className="font-semibold tracking-wide">
            AI baca mood, Spotify nyetel lagu
          </span>
        </div>

        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          Biar <span className="text-ink-primary">AI</span> yang baca mood kamu,&nbsp;
          <span className="text-ink-accent">Spotify</span> yang ngobatin.
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
          Ketik curhatmu, rekam suara, atau tunjukkan ekspresi wajah.{' '}
          <span className="text-slate-100">
            MoodVibe's
          </span>{' '}
          menganalisis suasana hati kamu dan mencarikan playlist Spotify yang paling pas.
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
            <span>Collaborate with wong JosJis</span>
          </div>
        </div>
      </div>

      {/* right: mock UI */}
      <div className="relative mt-8 w-full max-w-md md:mt-0 md:ml-auto">
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
