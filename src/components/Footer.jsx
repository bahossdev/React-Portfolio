//importing the react-icon for the footer icons
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";

function Footer() {
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
          <FaGithub
            onClick={() => handleClickIcon("github")}
            className="icon"
          />
          <FaLinkedin
            onClick={() => handleClickIcon("linkedin")}
            className="icon"
          />
          <FaCodepen
            onClick={() => handleClickIcon("codepen")}
            className="icon"
          />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
