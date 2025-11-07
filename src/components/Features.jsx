import React from 'react';
import { Zap, Shield, Palette, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast by default',
    desc: 'Vite-powered React with Tailwind CSS for instant feedback and rapid iteration.'
  },
  {
    icon: Shield,
    title: 'Accessible & reliable',
    desc: 'Thoughtful defaults and semantic markup that work for everyone.'
  },
  {
    icon: Palette,
    title: 'Beautiful UI',
    desc: 'Tasteful design system, gradients, and micro-interactions included.'
  },
  {
    icon: Sparkles,
    title: '3D ready',
    desc: 'Pre-wired Spline integration for delightful 3D scenes and interactions.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Everything you need</h2>
          <p className="mt-3 text-slate-600">A thoughtfully curated set of building blocks to help you ship faster.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 grid place-items-center text-white shadow group-hover:scale-105 transition">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
