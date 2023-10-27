import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="appHome"></div>
      <Link to="/about" className="appAbout">
        <div className="aboutContent"></div>
      </Link>
      <Link to="/projects" className="appProject">
        <div className="projectContent"></div>
      </Link>
    </div>
  );
}
