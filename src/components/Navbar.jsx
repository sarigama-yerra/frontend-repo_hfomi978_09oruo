import React from 'react';
import { Rocket, Settings, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 grid place-items-center text-white shadow-lg shadow-fuchsia-500/20">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-slate-900 tracking-tight">Vibe Starter</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-700 hover:text-slate-900 transition">Features</a>
          <a href="#about" className="text-slate-700 hover:text-slate-900 transition">About</a>
          <a href="#contact" className="text-slate-700 hover:text-slate-900 transition">Contact</a>
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition">
            <Settings size={16} />
            Settings
          </button>
          <button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-black transition">
            <User size={16} />
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
}
