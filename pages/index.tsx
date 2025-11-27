import Head from "next/head";
import Header from "../components/Header";
import TechGrid from "../components/TechGrid";
import Experience from "../components/Experience";
import ProjectCard from "../components/ProjectCard";
import CertificatesGallery from "../components/CertificatesGallery";
import GitHubContributions from "../components/GitHubContributions";
import CTA from "../components/CTA";

const projects = [
  { title: "ResearchX", image: "/projects/researchx.png", description: "AI-powered research document generator.", demo: "#", github: "#" },
  { title: "Freshmart Store", image: "/projects/freshmart.png", description: "Modern grocery store web application.", demo: "#", github: "#" }
];

export default function Home() {
  const certificates = [
    { src: "/certs/job-ready-cohort.png", title: "Job Ready Cohort" },
    { src: "/certs/hackerrank-js.png", title: "HackerRank — JavaScript" },
    { src: "/certs/frontend-cert.png", title: "Frontend Developer (React)" },
    { src: "/certs/udemy-js.png", title: "Complete JavaScript Programming" }
  ];

  return (
    <>
      <Head>
        <title>Aditya Domle — Portfolio</title>
      </Head>

      <main className="min-h-screen">
        <Header />
        <TechGrid />

        <section id="projects" className="container py-8">
          <div className="section-title"><span className="icon-wrap p-3 card rounded-full">&lt;/&gt;</span><span className="ml-2">Featured Projects</span></div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">{projects.map(p => <ProjectCard key={p.title} project={p} />)}</div>
        </section>

        <CertificatesGallery items={certificates} />
        <GitHubContributions username={process.env.NEXT_PUBLIC_GITHUB_USERNAME || "ParnaTech21"} />
        <CTA />

        <Experience />

        <footer className="container py-8 text-gray-400">© {new Date().getFullYear()} Aditya Domle — Built with Next.js & Tailwind</footer>
      </main>
    </>
  );
}