import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Vibe Starter. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-slate-600 hover:text-slate-900 transition">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition">Terms</a>
            <a href="mailto:contact@example.com" className="text-slate-600 hover:text-slate-900 transition">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
