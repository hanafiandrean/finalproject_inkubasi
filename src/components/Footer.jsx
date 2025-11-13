import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-[11px] text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          © {new Date().getFullYear()} MoodVibe's — Project inkubasi @2025
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#home" className="transition hover:text-ink-primary">
            Home
          </a>
          <a href="#how-it-works" className="transition hover:text-ink-primary">
            Cara Kerja
          </a>
          <a href="#modes" className="transition hover:text-ink-primary">
            Mode Input
          </a>
          <a href="#spotify" className="transition hover:text-ink-primary">
            Spotify
          </a>
          <a href="#collaboration" className="transition hover:text-ink-primary">
            Kolaborasi
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
