import React from "react";
import "../../App.css";
import img_grad from "../../assets/profile.jpeg";

const About = () => {
  return (
    <div className="about-content">
      <div className="about-title">
        <h1>About</h1>
      </div>
      <div className="about-info">
        <img src={img_grad} alt="img profile" />
        <div>
          <p>
            Hey there! I'm Wally, a recent computer science graduate who loves
            to bring ideas to life!
          </p>
          <p>
            Developing software has been one of my passions for a very long
            time, and I cannot stop diving into its exciting adventures. Of
            course my first-class from the University of Westminster helped me
            to deconstruct the complex and intricate world of technology. I’m
            totally into tech, Some would call me a geek… and they’re absolutely
            right! I love working on both front-end and back-end development!
            Crafting seamless user experiences excites me just as much as
            building robust server-side applications. Databases, such as SQL or
            NoSQL, are also my cup of tea! I’ve got strong software
            functionality skills and a very good know-how of software patterns
            within a vast range of languages and technologies including
            JavaScript and Python.
            <br />
            <br />
            I’ve already developed significant projects. You don’t believe me?
            Check the rest of my website and see for yourself. But hey, I’m
            great at working in teams too! After all, humans are meant to live
            in society and work with each other.. and I never shy away from
            challenges, especially if they are stimulating and help me enrich my
            tech and programming knowledge. You can already tell by now I’m sort
            of a workaholic, and I’m good at communicating and collaborating,
            especially on innovative and dynamic projects. I love embracing new
            technologies, and I love to learn constantly. So please, get in
            touch if you’re a professional, mentor or just a kid who loves the
            tech industry like myself.
          </p>
        </div>
      </div>
      <div className="square-text">
        <span>Keep scrolling</span>
      </div>
    </div>
  );
};

export default About;
