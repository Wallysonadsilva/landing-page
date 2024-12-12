import React from "react";
import {
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import juiceIcon from "../../assets/juice-icon.png";

const HomePage = () => {
  return (
    <div className="hp-content">
      <div className="hp-text">
        <h1>
          I like to transform
          <br />
          ideas into reality.
        </h1>
        <h1>
          I transform bugs into <br /> features.
        </h1>
      </div>
      <div className="hp-social">
        <div className="social-square-text">
          <span>Scroll down for more juice</span>
          <img src={juiceIcon} alt="juice icon" loading="lazy" />
        </div>
        <div className="social-square">
          <FontAwesomeIcon icon={faArrowRightLong} className="left-arrow" />
          <a
            href="https://github.com/Wallysonadsilva"
            target="_blank"
            rel="noopener noreferral"
            className="social-icon"
          >
            <span>GitHub</span>
            <FontAwesomeIcon className="github-icon" icon={faGithub} />
          </a>
        </div>
        <div className="social-square">
          <FontAwesomeIcon icon={faArrowRightLong} className="left-arrow" />
          <a
            href="https://www.linkedin.com/in/wallysonadsilva/"
            target="_blank"
            rel="noopener noreferral"
            className="social-icon"
          >
            <span>LinkedIn</span>
            <FontAwesomeIcon className="linked-icon" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
