import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <section id="about" className="py-20">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50 shadow-sm">
              <h3 className="text-2xl font-bold">Designed for momentum</h3>
              <p className="mt-3 text-slate-600">
                Start with a beautiful foundation and focus on what matters — your product. This starter pairs modern
                aesthetics with sensible defaults so you can iterate quickly and ship with confidence.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span> Polished components with thoughtful spacing</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-fuchsia-500"></span> Gradient-forward visual language</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-500"></span> Ready for animations and 3D scenes</li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-rose-100" />
              <p className="mt-4 text-sm text-slate-600">Drop in your product screenshots or demos here.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
