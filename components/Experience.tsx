import React from "react";

export default function Experience() {
  const items = [
    { company: "GSSoC'25", role: "Project Admin/Maintainer", date: "Aug 2025 - Sept 2025", bullets: ["Reviewed code submissions and resolved technical blockers","Collaborated with open-source developers on planning and implementation","Designed UI/UX with animation libraries like Framer Motion"] },
    { company: "Sheryians Coding School", role: "Trainee", date: "May 2025 - Oct 2025", bullets: ["Learned full-stack technologies and DevOps principles","Built multiple projects with team collaboration"] }
  ];

  return (
    <section className="container py-8">
      <div className="section-title"><span className="icon-wrap p-3 card rounded-full">📁</span> <span className="ml-2">Professional Journey</span></div>
      <div className="mt-6 space-y-6">
        {items.map(it => (
          <div key={it.company} className="card p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{it.company}</h3>
                <div className="text-accent text-sm">{it.role}</div>
              </div>
              <div className="text-sm text-gray-400">{it.date}</div>
            </div>
            <ul className="mt-4 list-disc ml-5 text-gray-300">{it.bullets.map(b => <li key={b} className="mt-2">{b}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}