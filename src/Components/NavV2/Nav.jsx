// import "../Css/Fonts.css";
import { React } from "react";
import { Link } from "react-scroll";
// import {NavLink} from 'react-router-dom';
import "./NavStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CircleIcon from "@mui/icons-material/Circle";
// import ScriptTag from "./NavScroll";

function Nav() {
  return (
    <header id="headerScroll">
      <div className="container-nav " id="nav">
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
                <div>
                  <span className="nav-title">Home</span>
                </div>
                <div>
                  <CircleIcon />
                </div>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={300}
                duration={500}
                className="nav-items"
              >
                <span className="nav-title">About</span>
                <CircleIcon />
              </Link>
              <Link
                to="myWork"
                spy={true}
                smooth={true}
                offset={210}
                duration={500}
                className="nav-items"
              >
                <span className="nav-title">Projects</span>
                <CircleIcon />
              </Link>
              <Link
                to="repo"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
                className="nav-items"
              >
                <span className="nav-title">Repo</span>
                <CircleIcon />
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                className="nav-items contact-link"
              >
                <span className="nav-title">Contact</span>
                <CircleIcon />
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
