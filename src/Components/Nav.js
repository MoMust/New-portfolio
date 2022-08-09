import "../Css/Fonts.css";
import {React, useEffect} from "react";
import { Link } from "react-scroll";
// import {NavLink} from 'react-router-dom';
import "../Css/NavStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ScriptTag from "./NavScroll";

document.addEventListener("DOMContentLoaded", function () {


  var navbar = document.getElementById("headerScroll");
  var sticky = navbar.offsetTop;


  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  window.onscroll = function () {
    myFunction();
  };
});

function Nav() {

  return (
    <header id="headerScroll">
      
      <div className="container-nav" id="nav">
        <nav>
          <div className="nav-bar">
            <ul>
              <Link
                exact
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="nav-items"
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-items"
              >
                About
              </Link>
              <Link
                to="myWork"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                className="nav-items"
              >
                My work
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="nav-items-right ms-lg-auto contact-link"
              >
                Contact
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
