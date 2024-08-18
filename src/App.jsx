import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import "./index.css";
import Loading from "./components/LoadingAnimation/Loading";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar";
import Contact from "./components/Interview/Contact";
import Skills from "./components/Skills/Skills";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isArrowVisible, setIsArrowVisible] = useState(true);

  // loading effect before displaying the application
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  // Use `useInView` for sections that affect the visibility of the arrow
  const { ref: projectsRef, inView: isProjectsVisible } = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });
  const { ref: contactRef, inView: isContactVisible } = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

  useEffect(() => {
    if (isProjectsVisible || isContactVisible) {
      setIsArrowVisible(false);
    } else {
      setIsArrowVisible(true);
    }
  }, [isProjectsVisible, isContactVisible]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="top-navbarr">
            <Navbar />
          </div>
          <div className="content-container">
            <div id="home" className="section-1">
              <HomePage />
            </div>
            <div id="about" className="section-2">
              <About />
            </div>
            <div id="projects" className="section-3" ref={projectsRef}>
              <Projects />
            </div>
            <div id="skills" className="section-4">
              <Skills />
            </div>
            <div id="contact" className="section-5" ref={contactRef}>
              <Contact />
            </div>
            {isArrowVisible && (
              <div className="arrowDown">
                <FontAwesomeIcon className="chevronDown" icon={faChevronDown} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
