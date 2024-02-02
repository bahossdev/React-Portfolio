import { FaDownload } from "react-icons/fa";
import resumePic from "/resume.jpg";
import resume from "/resume.pdf";

function Resume() {
  return (
    <>

      <div className="container">
        <h2>Resume</h2>
        <div>
          <ul className="card">
            <p><strong>Proficiency in:</strong></p>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>MERN</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
          {/* Resume image */}
          <img src={resumePic} alt="resume" className="resume" />
          {/* Download link and icon*/}
          <a href={resume} download className="icon-cover">
            <FaDownload />
          </a>
        </div>
      </div>
    </>
  );
}

export default Resume;
