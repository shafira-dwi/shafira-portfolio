import { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import WorktrackDashboard from "../assets/projects/WorkTrackDashboard.jpeg";
import WorkTrackDetail from "../assets/projects/WorkTrack.jpeg";
import GymProDashboard from "../assets/projects/GymProDashboard.jpeg";
import GymProDetail from "../assets/projects/GymPro.jpeg";

const projects = [
  {
    id: "worktrack",
    title: "WorkTrack",
    description: "A web-based staff attendance system for managing employee attendance and daily work records.",
    image: WorktrackDashboard,
    detailImage: WorkTrackDetail,
    category: "Web Application",
    details: "A web-based staff attendance system built to manage employee attendance and daily work records.",
    technologies: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript", "Bootstrap", "HTML", "CSS"],
  },
  {
    id: "gym-management",
    title: "Gym Management System",
    description: "A backend-focused management system for managing members, memberships, trainers, payments, and authentication.",
    image: GymProDashboard,
    detailImage: GymProDetail,
    category: "Backend Development",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL", "TypeORM", "JWT", "Git"],
    details: "A gym management system designed to handle core gym operations, including member management, personal trainers, memberships, authentication, and payment history.",
  },
];

function ArrowIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const project = projects.find((item) => item.id === selectedProject);

  return (
    <>
      <section id="projects" className="bg-[#f8f7f4] px-6 py-20 text-zinc-900 md:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#8b6f47]">Selected Work</p>

            <h2 className="text-4xl font-extrabold leading-[0.9] tracking-tight md:text-6xl">PROJECTS I&apos;VE BUILT.</h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-600 md:text-base">A collection of projects I&apos;ve built while working with backend systems, APIs, databases, and real-world applications.</p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.id} className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg">
                {/* Project Image */}
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8b6f47]">{project.category}</p>

                  <h3 className="mt-2 text-xl font-semibold leading-tight tracking-tight">{project.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-600">{project.description}</p>

                  {/* View Project */}
                  <button type="button" onClick={() => setSelectedProject(project.id)} className="group/button mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#8b6f47] transition-colors hover:text-[#6f5838]">
                    View Project
                    <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail */}
      {project && <ProjectDetail project={project} onClose={() => setSelectedProject(null)} />}
    </>
  );
}

export default Projects;
