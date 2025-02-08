import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const scrollToSection = (event, sectionId) => {
  event.preventDefault();

  document.querySelector(sectionId).scrollIntoView({
    behavior: "smooth",
  });
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar-top-hp">
      <div className="lg-title">
        <a href="#home" onClick={(e) => scrollToSection(e, "#home")}>
          <div>Wally</div>
          <div>Silva</div>
        </a>
      </div>

      <div className="menu-icon" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </div>

      <ul className={isMobileMenuOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              scrollToSection(e, "#about");
              closeMobileMenu();
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => {
              scrollToSection(e, "#projects");
              closeMobileMenu();
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={(e) => {
              scrollToSection(e, "#skills");
              closeMobileMenu();
            }}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              scrollToSection(e, "#contact");
              closeMobileMenu();
            }}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="/cv/Wallyson_Alves_Junior_Software_Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
