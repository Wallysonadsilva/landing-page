import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar-top-hp">
      <div className="lg-title">
        <a href="#home">
          <div>Wally</div>
          <div>Silva</div>
        </a>
      </div>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Interview</a>
        </li>
        <li>
          <a href="#cv">Download CV</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
