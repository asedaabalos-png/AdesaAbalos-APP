import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/github.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";

export default function Header() {
  return (
    <header className="header">

      <div className="logo">
        <span>MY REACT PORTFOLIO</span>
      </div>
    
      <nav className="navigation">
       <Link to="/">Home</Link>
       <Link to="/gallery">Gallery</Link>
       <Link to="/contacts">Contact</Link>
      </nav>

      
      <nav className="socials">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <img src={github} alt="GitHub" />
        </a>

    
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <img src={facebook} alt="Facebook" />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <img src={instagram} alt="Instagram" />
        </a>

      
        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="tiktok"
        >
          <img src={tiktok} alt="TikTok" />
        </a>

      </nav>

    </header>
  );
}