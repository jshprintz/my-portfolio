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
      <img
        src="https://camo.githubusercontent.com/29e7fc6c62f61f432d3852fbfa4190ff07f397ca3bde27a8196bcd5beae3ff77/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465"
        alt="PostgreSQL"
        className="badge"
      />
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
