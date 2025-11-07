import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8W1qR9JjQkqP2Y7y/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-slate-900 via-indigo-800 to-fuchsia-700 bg-clip-text text-transparent">
          Build beautiful apps faster
        </h1>
        <p className="mt-4 text-slate-600 text-lg">
          A clean starter with modern UI patterns, animations, and a ready-made 3D scene.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#features" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-black transition shadow-lg shadow-slate-900/10">Explore features</a>
          <a href="#contact" className="px-5 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition">Get in touch</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
    </section>
  );
}
