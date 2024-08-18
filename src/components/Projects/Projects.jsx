import React from "react";
import MatrixEffect from "../MatrixEffect";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  return (
    <div className="project-section">
      <div className="pj-section-1">
        <div className="pj-1">
          <span>Hikiddo</span>
          <div className="square-arrow">
            <FontAwesomeIcon icon={faArrowRightLong} />
          </div>
        </div>
        <div className="pj-2">
          <span>TechQ&A</span>
          <div className="square-arrow">
            <FontAwesomeIcon icon={faArrowRightLong} />
          </div>
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
            <FontAwesomeIcon icon={faArrowRightLong} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
