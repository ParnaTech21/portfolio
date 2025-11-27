import React from "react";

export default function CTA() {
  return (
    <section className="container py-8">
      <div className="card p-8 rounded-lg border border-[rgba(255,255,255,0.03)]">
        <h2 className="text-3xl font-extrabold">🚀 Let's Build Something <span className="text-accent">Amazing</span></h2>
        <p className="mt-4 text-gray-300 max-w-3xl">Ready to bring your ideas to life? I'm always excited to collaborate on interesting projects, open-source contributions, or freelance work. Tell me about your project — timeline, goals, and a little background — and I’ll get back with a plan.</p>
        <div className="mt-6 flex gap-3">
          <a href="mailto:your-email@example.com" className="px-5 py-3 bg-[rgba(102,217,255,0.08)] text-accent rounded-md border">Get in touch</a>
          <a href="#projects" className="px-5 py-3 card rounded-md border">See projects</a>
        </div>
      </div>
    </section>
  );
}