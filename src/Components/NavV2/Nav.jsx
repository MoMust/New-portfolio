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
    <div className="container-nav " id="nav">
      <nav>
        <div className="nav-bar">
          <ul>
            <Link
              exact
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={150}
              className="nav-items"
              data-section="Home"
            >
              {/* <div>
                  <span className="nav-title">Home</span>
                </div> */}
              {/* <div>
                  <CircleIcon />
                </div> */}
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={150}
              duration={500}
              className="nav-items"
              data-section="About"
            >
              {/* <span className="nav-title">About</span>
                <CircleIcon /> */}
            </Link>
            <Link
              to="myWork"
              spy={true}
              smooth={true}
              offset={150}
              duration={500}
              className="nav-items"
              data-section="Projects"
            >
              {/* <span className="nav-title">Projects</span>
                <CircleIcon /> */}
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={150}
              duration={500}
              className="nav-items contact-link"
              data-section="Contact"
            >
              {/* <span className="nav-title">Contact</span>
                <CircleIcon /> */}
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
