function ProjectCard({ project }) {
  return (
    <article>
      <img src={project.image} alt={project.title} />

      <div>
        <p>{project.status}</p>

        <h3>{project.title}</h3>

        <p>{project.shortDescription}</p>

        <p>{project.role}</p>

        <ul>
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}

          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
