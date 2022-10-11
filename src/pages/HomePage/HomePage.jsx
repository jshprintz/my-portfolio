import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <NavBar />
      <p className="intro-text first-animation">Hi, I'm Jason!</p>
      <div className="intro-text-container">
        <p className="intro-text second-animation">
          I'm a Full Stack Web Developer living in Las Vegas, NV.
        </p>
      </div>
      <br />
      <div className="intro-text-container">
        <p className="intro-text third-animation">Check out my skills:</p>
      </div>
      <br />
      <p className="intro-text-skills fourth-animation">DB</p>
      <br />
      <p className="intro-text-skills fifth-animation">
        Platforms, Frameworks, and Libraries
      </p>
      <br />
      <br />
      <br />
      <br />
      <p className="intro-text-skills sixth-animation">Hosting</p>
      <br />
      <p className="intro-text-skills seventh-animation">Languages</p>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default HomePage;
