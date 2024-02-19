import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";

function Project({ project, index }) {

  // Function to handle click on project deployment link
  const openPage = (deployUrl) => {
    window.open(deployUrl, "_blank");
  };

  // Function to handle click on project repository link
  const handleRepoIcon = (repoUrl) => {
    window.open(repoUrl, "_blank");
  };

  return (
    <>
      {/* Individual project card */}
      <div key={index} className="project-card">
        {/* Display project photo */}
        {project.photo && (
          <img
            src={project.photo}
            alt={project.name}
            className="project-image"
            onClick={() => openPage(project.deploy)}
          />
        )}
        {/* Display project name */}
        <h3 className="project-title">
          {/* Project name */}
          {project.name}{" "}
          {/* Icon for project deployment */}
          <RiExternalLinkFill
            className="project-icon"
            onClick={() => openPage(project.deploy)} // Handle click event for deployment link
          />
          {/* Icon for project repository */}
          <FaGithub
            className="project-icon"
            onClick={() => handleRepoIcon(project.repo)} // Handle click event for repository link
          />
        </h3>
      </div>
    </>
  )
}

export default Project;
