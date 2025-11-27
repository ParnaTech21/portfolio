import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div className="project-card card p-4" whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 290 }}>
      <img src={project.image} alt={project.title} className="rounded-md w-full h-40 object-cover" />
      <h4 className="mt-3 font-semibold text-lg">{project.title}</h4>
      <p className="mt-2 text-sm text-gray-300">{project.description}</p>
      <div className="mt-3 flex items-center gap-3">
        <a href={project.demo} target="_blank" rel="noreferrer" className="text-accent inline-flex items-center gap-2">
          <FiExternalLink /> Live Demo
        </a>
        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
          <FiGithub /> GitHub
        </a>
      </div>
    </motion.div>
  );
}