import Project from "../components/Project";

function Portfolio() {
  // Array of project data
  const projects = [
    {
      name: "Min-Go Dating App",
      deploy: "https://min-go-dating-app-617b3295d223.herokuapp.com/",
      repo: "https://github.com/bahossdev/Min-Go-Dating-App",
      photo: "./min-go.jpg",
    },
    {
      name: "Plantasia",
      deploy: "https://plantasia.onrender.com",
      repo: "https://github.com/bahossdev/Plantasia.git",
      photo: "./plantasia.png",
    },
    {
      name: "Fitness Dashboard",
      deploy: "https://bahossdev.github.io/Fitness-Dashboard/",
      repo: "https://github.com/bahossdev/Fitness-Dashboard",
      photo: "./fitness.jpg",
    },
    {
      name: "Tech Blog",
      deploy: "https://radiant-mountain-13758-93f137cc5226.herokuapp.com/",
      repo: "https://github.com/bahossdev/Tech-Blog",
      photo: "./tech.jpg",
    },
    {
      name: "Weather Dashboard",
      deploy: "https://bahossdev.github.io/Weather-Dashboard/",
      repo: "https://github.com/bahossdev/Weather-Dashboard",
      photo: "./weather.jpg",
    },
    {
      name: "Coding Quiz",
      deploy: "https://bahossdev.github.io/Coding-Quiz/",
      repo: "https://github.com/bahossdev/Coding-Quiz",
      photo: "./quiz.jpg",
    },
  ];

  return (
    <>
      <div className="container">
        <h2 className="typewriter">Portfolio</h2>
        <div className="project-container">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
