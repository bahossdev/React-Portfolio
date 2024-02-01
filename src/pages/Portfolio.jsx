import { FaGithub } from "react-icons/fa";

function Portfolio() {
  const projects = [
    { name: "Min-Go Dating App", repo: "https://github.com/bahossdev/Min-Go-Dating-App", photo: "./min-go.jpg" },
    { name: "Fitness Dashboard", repo: "https://github.com/bahossdev/Fitness-Dashboard", photo: "./fitness.jpg" },
    { name: "Tech Blog", repo: "https://github.com/bahossdev/Tech-Blog" },
    { name: "Weather Dashboard", repo: "https://github.com/bahossdev/Weather-Dashboard" },
    { name: "Coding Quiz", repo: "https://github.com/bahossdev/Coding-Quiz" },
    { name: "Project 6", repo: "https://github.com/bahossdev/project6" },
  ];

  const handleRepoIcon = (repoUrl) => {
    window.open(repoUrl, "_blank");
  };

  return (
    <>
      {/* Map through project data and render a card for each project */}
      <div>
        <h2>Portfolio</h2>
        <div className="project-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Display project photo */}
              {project.photo && (
                <img
                  src={project.photo}
                  alt={project.name}
                  className="project-image"
                />
              )}
              {/* Display project name */}
              <h3>{project.name}</h3>
              {/* Display GitHub icon */}
              <FaGithub
                onClick={() => handleRepoIcon(project.repo)}
                className="icon"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
