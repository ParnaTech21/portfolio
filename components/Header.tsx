import React from "react";
import { FiGithub } from "react-icons/fi";

export default function Header() {
  return (
    <header className="container flex items-center gap-8 py-8">
      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-transparent card flex items-center justify-center">
        <img src="/avatar.png" alt="avatar" className="w-full h-full object-cover"/>
      </div>

      <div className="flex-1">
        <h1 className="text-4xl font-extrabold">Aditya Domle</h1>
        <div className="text-muted mt-2 text-gray-300">Full-Stack Developer | Next.js · React · Tailwind · Node</div>

        <div className="mt-5 flex items-center gap-3">
          <a className="px-4 py-2 rounded-md bg-[rgba(102,217,255,0.08)] border border-[rgba(102,217,255,0.12)] text-accent" href="#projects">Featured Projects</a>
          <a className="px-4 py-2 rounded-md card border" href="https://github.com/ParnaTech21" target="_blank" rel="noreferrer">
            <FiGithub className="inline mr-2"/> GitHub
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-300 max-w-xl">Short bio: craft a two-line summary that describes you and your focus areas.</p>
      </div>
    </header>
  );
}