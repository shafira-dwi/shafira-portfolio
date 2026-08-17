function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function ProjectDetail({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-zinc-900/50 px-4 py-8 backdrop-blur-sm md:px-8" onClick={onClose}>
      <div className="mx-auto flex min-h-full max-w-5xl items-center justify-center">
        <div className="relative w-full overflow-hidden rounded-3xl bg-[#f8f7f4] shadow-2xl" onClick={(event) => event.stopPropagation()}>
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-sm transition-all hover:scale-105 hover:bg-white"
          >
            <CloseIcon />
          </button>

          {/* Detail Image */}
          <div className="w-full overflow-hidden bg-zinc-100">
            <img src={project.detailImage} alt={`${project.title} preview`} className="h-auto w-full object-cover" />
          </div>

          {/* Content */}
          <div className="p-7 md:p-10">
            {/* Category */}
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8b6f47]">{project.category}</p>

            {/* Title */}
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">{project.title}</h2>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-600 md:text-base">{project.details}</p>

            {/* Technologies */}
            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">Technologies</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700">
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Close */}
            <button type="button" onClick={onClose} className="mt-10 inline-flex items-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
