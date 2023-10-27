import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

import animatedGif from "../AnikiHamster.gif";
import AboutGif from "../About.gif";
import ProjectGif from "../Projects.gif";

export default function Home() {
  return (
    <div className="Home">
      <div className="appHome">
        <img src={animatedGif}></img>
        <h2>Home</h2>
        <p>Welcome to my Page!</p>
      </div>
      <Link to="/about" className="appAbout">
        <div className="aboutContent">
          <img src={AboutGif}></img>
          <h2>About</h2>
          <p>Who am I?</p>
        </div>
      </Link>
      <Link to="/projects" className="appProject">
        <div className="projectContent">
          <img src={ProjectGif}></img>
          <h2>Projects</h2>
          <p>See what I've been up to</p>
        </div>
      </Link>
    </div>
  );
}
