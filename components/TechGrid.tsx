import React from "react";
import { SiJavascript, SiTypescript, SiTailwindcss, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const techs = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> }
];

export default function TechGrid() {
  return (
    <section className="container py-8">
      <div className="section-title"><span className="icon-wrap p-3 card rounded-full">{"</>"}</span> <span className="ml-2">Tech Arsenal</span></div>
      <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {techs.map((t, idx) => (
          <motion.div key={t.name} className="card p-4 flex flex-col items-center justify-center gap-2 text-center tech-card" whileHover={{ y: -6, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <div className="text-3xl text-accent">{t.icon}</div>
            <div className="text-sm mt-1">{t.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}