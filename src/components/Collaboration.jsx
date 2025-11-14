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
            Collaborate SKOMDA X INDUSTRI
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            MoodVibe's adalah proyek eksplorasi yang menggabungkan analisis mood berbasis AI
            dengan rekomendasi musik melalui Spotify, dikembangkan oleh siswa dalam
            program kolaborasi dengan industri.
          </p>

          <div className="mt-5 grid gap-4 text-sm text-slate-200 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-primary">
                Peran sekolah
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                <li>• Merancang ide &amp; kreatifitas.</li>
                <li>• Mengembangkan Materi AI ML.</li>
                <li>• Menentukan project akhir.</li>
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
              Tim MoodVibe's beranggotakan 7 siswa yang berasal dari jurusan{' '}
              <span className="text-ink-primary">Sistem Informasi Jaringan</span> &{' '}
              <span className="text-ink-accent">Aplikasi</span>, dengan dukungan mentor dari
              industri untuk memastikan kualitas teknis dan presentasi produk yang menarik dan kreatif.
            </p>
            <br></br>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Anggota :
            </p>
            <p className="mt-3 text-xs text-slate-400">
            Muhammad Zhafif Rizqullah (XII SIJA 2)
            </p>
            <p className="mt-3 text-xs text-slate-400">
            Bima Aji Ariqin Hakim (XII SIJA 1)
            </p>
            <p className="mt-3 text-xs text-slate-400">
            Vaio Prasa Zaffana (XII SIJA 2)
            </p>
            <p className="mt-3 text-xs text-slate-400">
            Muhammad Hanafi Andreanatha W (XII SIJA2)
            </p>
            <p className="mt-3 text-xs text-slate-400">
            Rinto Khrisna Aji Pambudi (XII SIJA 2)
            </p>
            <p className="mt-3 text-xs text-slate-400">
            Aldrich Ernesega Atha Purnomo (XII SIJA 2)
            </p>
            <p className="mt-3 text-xs text-slate-400">
            Nirvana Adriyanto (XII SIJA 2)
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
            <span className="rounded-full bg-slate-900/90 px-3 py-1">
              #SIJA_A-nya_ANJAYY
            </span>
            <span className="rounded-full bg-slate-900/90 px-3 py-1">
              #AICollaboration
            </span>
            <span className="rounded-full bg-slate-900/90 px-3 py-1">
              #SpotifyIntegration
            </span>
            <span className="rounded-full bg-slate-900/90 px-3 py-1">
              #WongTulusTampil
            </span>
            <span className="rounded-full bg-slate-900/90 px-3 py-1">
              #InkubasiAsix
            </span>
            <span className="rounded-full bg-slate-900/90 px-3 py-1">
              #Alhamdulillah
            </span>
            <span className="rounded-full bg-slate-900/90 px-3 py-1">
              #TolongItunyaDiapakanDuluBiarGaApaKali
            </span>
            <span className="rounded-full bg-slate-900/90 px-3 py-1">
              #MakasihInkubasiAkuSayangKamu
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collaboration;
