import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserSecret,
  faDiagramProject,
  faAddressBook,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Navbar = () => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    if(isMenuOpen){
      setIsMenuOpen(false);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
              <FontAwesomeIcon icon={faHouse} />
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
              <FontAwesomeIcon icon={faUserSecret} />
            </a>
          </li>
          <li>
            <a
              href="#projects-skills"
              onClick={(e) => scrollToSection(e, "projects-skills")}
            >
              <FontAwesomeIcon icon={faDiagramProject} />
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
              <FontAwesomeIcon icon={faAddressBook} />
            </a>
          </li>
        </ul>
      </nav>

      <nav className="top-navbar">
        <div className="navbar-left">
          <span>W.S | Dev.</span>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <li>
            <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a
              href="#projects-skills"
              onClick={(e) => scrollToSection(e, "projects-skills")}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
