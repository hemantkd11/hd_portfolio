import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Logo from "../../Images/HDlogo.png";
import { Link } from "react-router-dom";
import LinkedIn from "../../Images/LinkedIn.png";
import Git from "../../Images/gitImg.png";

const Navbar = () => {
  // const [scrolly, Setscrolly] = useState("false");

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav class={`navbar navbar-expand-lg bg-body-tertiary `}>
      <div class="container-fluid nav-main-container">
        <Link class="navbar-brand" to="/">
          <img
            src={Logo}
            alt="hemant"
            style={{ width: "100%", maxWidth: "170px" }}
          />
        </Link>
        <div className="linked-git-btn-mobile">
          <div className="linkedIn-btn-mobile color-In">
            <Link
              className="linkedIn-btn-mobile-link"
              target="_blank"
              to="https://www.linkedin.com/in/hemant-diwakar-frontend-developer/"
            >
              <img src={LinkedIn} alt="LinkedIn" className="Image_linkedIn" />
            </Link>
          </div>
          <div className="linkedIn-btn-mobile color-Git">
            <Link
              className="  linkedIn-btn-mobile-link"
              target="_blank"
              to="https://github.com/hemantkd11"
            >
              <img src={Git} alt="LinkedIn" className="Image_linkedIn" />
            </Link>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0"
            className="navbar-nav ms-auto mb-2 mb-lg-0"
          >
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/projects">
                Project
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
