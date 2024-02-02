import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";

function Project({ project, index }) {

  const handleWebIcon = (deployUrl) => {
    window.open(deployUrl, "_blank");
  };
  const handleRepoIcon = (repoUrl) => {
    window.open(repoUrl, "_blank");
  };
  return (
    <>
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
        <h3 className="project-title">
          {project.name}{" "}
          <RiExternalLinkFill
            className="project-icon"
            onClick={() => handleWebIcon(project.deploy)}
          />
          <FaGithub
            className="project-icon"
            onClick={() => handleRepoIcon(project.repo)}
          />
        </h3>
      </div>
    </>
  )
}

export default Project;