import React from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social-icon">
          <a
            href="https://github.com/Wallysonadsilva"
            target="_blank"
            rel="noopener noreferral"
            className="social-icon"
          >
            <FontAwesomeIcon className="github-icon" icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/wallysonadsilva/"
            target="_blank"
            rel="noopener noreferral"
            className="social-icon"
          >
            <FontAwesomeIcon className="linked-icon" icon={faLinkedin} />
          </a>
        </div>
        <p>© 2024 Wally Silva. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
