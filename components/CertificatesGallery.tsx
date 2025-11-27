import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CertificatesGallery({ items = [] }: { items?: { src: string; title?: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="container py-8">
      <div className="section-title"><span className="icon-wrap p-3 card rounded-full">🏅</span> <span className="ml-2">Achievements & Badges</span></div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.button key={i} onClick={() => setOpen(i)} className="card p-2 rounded-md overflow-hidden text-left tech-card" whileHover={{ scale: 1.01 }}>
            <img src={it.src} alt={it.title || `cert-${i}`} className="w-full h-48 object-contain bg-white/5 rounded-md" />
            <div className="mt-3 text-sm text-gray-300">{it.title}</div>
          </motion.button>
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6" onClick={() => setOpen(null)}>
          <div className="absolute inset-0 bg-black/70"></div>
          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative max-w-4xl w-full card p-4 rounded-lg z-10">
            <button className="absolute top-3 right-3 text-gray-300" onClick={() => setOpen(null)}>Close</button>
            <img src={items[open].src} alt={items[open].title} className="w-full h-[70vh] object-contain" />
            <div className="mt-3 text-white/90">{items[open].title}</div>
          </motion.div>
        </div>
      )}
    </section>
  );
}