import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Logo from "../../Images/HDlogo.png";
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
        <a class="navbar-brand" href="/">
          <img
            src={Logo}
            alt="hemant"
            style={{ width: "100%", maxWidth: "170px" }}
          />
        </a>
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
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="projects/">
                Project
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.linkedin.com/in/hemant-diwakar-362aa7244/"
                class="nav-link disabled"
                aria-disabled="true"
                target="_blank"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
