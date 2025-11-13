import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ModesPreview from './components/ModesPreview';
import SpotifyIntegration from './components/SpotifyIntegration';
import Collaboration from './components/Collaboration';
import Footer from './components/Footer';

function App() {
  const [selectedMode, setSelectedMode] = useState('text'); // text | voice | face

  return (
    <div className="relative min-h-screen bg-ink-bg text-slate-50 overflow-hidden">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0 opacity-60 mix-blend-screen">
        <div className="absolute -top-40 -left-32 h-72 w-72 rounded-full bg-ink-accent/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-72 w-72 rounded-full bg-ink-primary/25 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <HowItWorks />
        <ModesPreview selectedMode={selectedMode} onModeChange={setSelectedMode} />
        <SpotifyIntegration />
        <Collaboration />
      </main>

      <Footer />
    </div>
  );
}

export default App;
