import React from 'react';

function Collaboration() {
  return (
    <section
      id="collaboration"
      className="mx-auto max-w-6xl px-4 pb-12 pt-6 md:px-6 md:pb-16 md:pt-4"
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Dibangun di inkubasi sekolah × industri
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            MoodVibe adalah proyek eksplorasi yang menggabungkan analisis mood berbasis AI
            dengan rekomendasi musik melalui Spotify, dikembangkan oleh siswa dalam
            program kolaborasi dengan industri.
          </p>

          <div className="mt-5 grid gap-4 text-sm text-slate-200 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-primary">
                Peran sekolah
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                <li>• Merancang ide &amp; user flow.</li>
                <li>• Mengembangkan frontend React.</li>
                <li>• Menentukan UX yang dekat dengan pelajar.</li>
                <li>• Menyiapkan skenario demo dan testing.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-accent">
                Peran industri
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                <li>• Memberi panduan teknis implementasi AI.</li>
                <li>• Menjaga standar praktik pengembangan modern.</li>
                <li>• Memberi insight penerapan AI di dunia kerja.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* team / tag */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Tentang tim
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Tim MoodVibe beranggotakan siswa yang fokus di{' '}
              <span className="text-ink-primary">web development</span> dan{' '}
              <span className="text-ink-accent">AI</span>, dengan dukungan mentor dari
              industri untuk memastikan kualitas teknis dan presentasi produk.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Bagian ini bisa kamu isi dengan nama anggota tim, role, dan kelas.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
            <span className="rounded-full bg-slate-900/90 px-3 py-1">
              #React
            </span>
            <span className="rounded-full bg-slate-900/90 px-3 py-1">
              #AI
            </span>
            <span className="rounded-full bg-slate-900/90 px-3 py-1">
              #SpotifyIntegration
            </span>
            <span className="rounded-full bg-slate-900/90 px-3 py-1">
              #Inkubasi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collaboration;
