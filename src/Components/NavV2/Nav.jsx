import { React } from "react";
import { Link } from "react-scroll";
import "./NavStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";


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
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
