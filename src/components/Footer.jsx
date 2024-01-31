//importing the react-icon for the footer icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const handleClickIcon = (icon) => {
    // Implement action based on the icon clicked
    if (icon === 'github') {
      window.open('https://github.com/bahossdev', '_blank');
    } else if (icon === 'linkedin') {
      window.open('https://www.linkedin.com/in/', '_blank');
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-icons">
          <FaGithub onClick={() => handleClickIcon('github')} className="icon" />
          <FaLinkedin onClick={() => handleClickIcon('linkedin')} className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
