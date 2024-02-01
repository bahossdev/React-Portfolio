import { FaDownload } from "react-icons/fa";
import resumePic from "/resume.jpg";
import resume from "/resume.pdf";

function Resume() {
  return (
    <>
      <div className="container">
      <h2>Resume</h2>
        <a href="/" target="blank_">
          <img src={resumePic} alt="resume" className="resume"></img>
          <a href={resume} download className="icon-cover">
            <FaDownload />
          </a>
        </a>
      </div>
    </>
  );
}

export default Resume;
