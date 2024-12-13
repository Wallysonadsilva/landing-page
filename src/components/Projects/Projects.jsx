import React from "react";
import MatrixEffect from "../MatrixEffect";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pjHikiddo from "../../assets/pj-hikiddo-3.png";
import pjChatbot from "../../assets/pj-chatbot-2.png";
import pjQnA from "../../assets/pj-qna.png";

const Projects = () => {
  return (
    <div className="project-section">
      <div className="about-title">
        <h1>Projects</h1>
      </div>
      <div className="pj-section-1">
        <div className="pj-1">
          <span>Hikiddo</span>
          <div className="square-arrow">
            <a
              href="https://github.com/Wallysonadsilva/Hikiddo"
              target="_blank"
              rel="noopener noreferrel"
            >
              <FontAwesomeIcon icon={faArrowRightLong} />
            </a>
          </div>
          <img src={pjHikiddo} alt="Hikiddo image" loading="lazy" />
        </div>
        <div className="pj-2">
          <span>TechQ&A</span>
          <div className="square-arrow">
            <a
              href="https://github.com/Wallysonadsilva/server-side-dev-codeigniter/tree/main/TechQnnA/cirest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faArrowRightLong} />
            </a>
          </div>
          <img src={pjQnA} alt="TechQnA image" loading="lazy" />
        </div>
      </div>
      <div className="pj-section-2">
        <div className="pj-3">
          <MatrixEffect className="matrix-background" />
          <span>In Progress...</span>
        </div>
        <div className="pj-4">
          <span>Applied AI - Chatbots</span>
          <div className="square-arrow">
            <a
              href="https://github.com/Wallysonadsilva/Chatbot-Applied-AI/blob/main/Applied_AI_chatbots_by_wally_Silva.ipynb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faArrowRightLong} />
            </a>
          </div>
          <img src={pjChatbot} alt="Chatbot image" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
