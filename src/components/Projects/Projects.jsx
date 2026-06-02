import "./Projects.css";
import projects from "../../data/projects";

function Projects() {
  const trackProjectClick = (projectTitle, linkType) => {
    if (window.gtag) {
      window.gtag("event", "project_link_click", {
        project_name: projectTitle,
        link_type: linkType,
        link_location: "projects",
      });
    }
  };

  return (
    <section id="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-tech">{project.tech}</p>
              <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackProjectClick(project.title, "live_demo")}
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackProjectClick(project.title, "github")}
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
