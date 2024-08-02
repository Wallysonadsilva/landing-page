import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Loading from "./components/AnimationLoarder/Loading";
import AnimationLoader from "./components/AnimationLoarder";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="content-container">
          <Navbar />
          <div id="home" className="section-1">
            <HomePage />
          </div>
          <div id="about" className="section-2">
            <About />
          </div>
          <div id="projects-skills" className="section-3">
            <Projects />
          </div>
          <div id="contact" className="section-4">
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
