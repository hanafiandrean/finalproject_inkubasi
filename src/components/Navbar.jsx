import React, { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Cara Kerja', href: '#how-it-works' },
  { label: 'Mode Input', href: '#modes' },
  { label: 'Spotify', href: '#spotify' },
  { label: 'Kolaborasi', href: '#collaboration' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/60 bg-ink-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ink-primary to-ink-accent shadow-glow">
            <span className="text-lg font-semibold text-slate-950">🎧</span>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide text-slate-50">
              MoodVibe's
            </div>
            <p className="text-xs text-slate-400">
              Mood &amp; music AI web
            </p>
          </div>
        </div>

        {/* desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-5 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="transition hover:text-ink-primary"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleNavClick('#modes')}
            className="rounded-full bg-ink-primary px-4 py-2 text-xs font-semibold text-slate-950 shadow-glow transition hover:bg-cyan-300"
          >
            Cek Mood Sekarang
          </button>
        </div>

        {/* mobile nav button */}
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-900/70 text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-200 transition ${
                open ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-200 transition ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-200 transition ${
                open ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* mobile nav */}
      {open && (
        <div className="border-t border-slate-800/70 bg-ink-bg/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="rounded-lg px-2 py-2 text-left text-slate-200 transition hover:bg-slate-900/80"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#modes')}
              className="mt-2 rounded-full bg-ink-primary px-4 py-2 text-xs font-semibold text-slate-950 shadow-glow transition hover:bg-cyan-300"
            >
              Cek Mood Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
