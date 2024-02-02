// Importing the react-icons library for the footer icons
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";

function Footer() {
  // Function to handle click events on icons
  const handleClickIcon = (icon) => {
    // Implement action based on the icon clicked
    if (icon === "github") {
      window.open("https://github.com/bahossdev", "_blank");
    } else if (icon === "linkedin") {
      window.open("https://www.linkedin.com/", "_blank");
    } else if (icon === "codepen") {
      window.open("https://codepen.io/bahossdev", "_blank");
    }
  };

  return (
    <div className="footer-box">
      <footer className="footer">
        <div className="footer-icons">
          {/* GitHub icon */}
          <FaGithub
            onClick={() => handleClickIcon("github")} // Handle click event for GitHub icon
            className="icon"
          />
          {/* LinkedIn icon */}
          <FaLinkedin
            onClick={() => handleClickIcon("linkedin")} // Handle click event for LinkedIn icon
            className="icon"
          />
          {/* CodePen icon */}
          <FaCodepen
            onClick={() => handleClickIcon("codepen")} // Handle click event for CodePen icon
            className="icon"
          />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
