import React from "react";
import { NavLink } from "react-router-dom";
import { Github, Linkedin } from "react-bootstrap-icons";
import { FaAngellist } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-primary">
        <div className="container-fluid">
          <NavLink to="/" className="nav-link active">
            HOME
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/about" className="nav-link active">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className="nav-link active">
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link active">
                  CONTACT
                </NavLink>
              </li>
            </ul>
            <ul className="social">
              <li>
                <a
                  href="https://github.com/j-tee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/julius-tetteh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin color="white" size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://wellfound.com/u/julius-tetteh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaAngellist size={24} color="white" />
                </a>
              </li>
              <li>
              <a
                  href="https://twitter.com/JuliusTee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <SiTwitter size={24} color="white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
