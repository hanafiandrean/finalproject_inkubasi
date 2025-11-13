import React from 'react';

function SpotifyIntegration() {
  return (
    <section
      id="spotify"
      className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16"
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            AI + Spotify: mood jadi musik
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Setelah AI mengenali mood kamu, sistem akan mengubahnya jadi keyword &amp;
            genre, lalu mencari playlist dan track yang relevan di Spotify.
          </p>

          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="mt-1 text-base">🔍</span>
              <div>
                <p className="font-semibold text-slate-100">
                  Pencarian dinamis
                </p>
                <p className="text-xs text-slate-300">
                  Mood seperti “capek tapi pengen fokus” bisa dipetakan ke kombinasi
                  keyword seperti <span className="text-ink-primary">chill study</span>,
                  {' '}<span className="text-ink-primary">lo-fi</span>, atau{' '}
                  <span className="text-ink-primary">focus beats</span>.
                </p>
              </div>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-base">🎯</span>
              <div>
                <p className="font-semibold text-slate-100">
                  Rekomendasi tepat sasaran
                </p>
                <p className="text-xs text-slate-300">
                  Sistem akan memilih playlist dan track yang paling dekat dengan mood
                  yang terdeteksi, bukan sekadar random.
                </p>
              </div>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-base">🔁</span>
              <div>
                <p className="font-semibold text-slate-100">
                  Mood berubah, playlist ikut berubah
                </p>
                <p className="text-xs text-slate-300">
                  Kalau mood kamu ganti dari sedih ke lebih semangat, cukup ekspresikan
                  lagi — rekomendasi musik juga otomatis ikut berubah.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 text-[11px] text-green-300">
            <span className="text-base">🟢</span>
            <span>
              Menggunakan integrasi Spotify API / embed player untuk memutar lagu.
            </span>
          </div>
        </div>

        {/* mock spotify player */}
        <div className="relative overflow-hidden rounded-3xl border border-green-500/40 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900/40 p-4 shadow-[0_0_80px_rgba(16,185,129,0.35)]">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-400 to-ink-primary/80" />
            <div>
              <p className="text-xs uppercase tracking-wide text-emerald-300">
                Spotify preview
              </p>
              <p className="text-sm font-semibold text-slate-50">
                Chill Study Lo-Fi • Auto
              </p>
              <p className="text-[11px] text-slate-200">
                Mood: <span className="font-semibold text-ink-primary">Capek</span> → Vibes:{' '}
                <span className="font-semibold text-emerald-300">Calm &amp; Focus</span>
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-xs text-slate-50">
            <div className="flex items-center justify-between gap-2">
              <span>Midnight Coding Session</span>
              <span className="text-slate-200">2:31</span>
            </div>
            <div className="flex h-1.5 overflow-hidden rounded-full bg-slate-800">
              <div className="w-1/3 bg-emerald-400" />
              <div className="w-2/3 bg-slate-700" />
            </div>

            <div className="flex items-center justify-between gap-2 text-[11px] text-slate-300">
              <span>0:52</span>
              <span>2:31</span>
            </div>
          </div>

          {/* controls */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 text-xs">
                ⏮
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 text-slate-950 text-base shadow-lg shadow-emerald-500/40">
                ▶
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 text-xs">
                ⏭
              </button>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-200">
              <span>Device: Web Player</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpotifyIntegration;
