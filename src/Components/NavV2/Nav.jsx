import { React } from "react";
import { Link } from "react-scroll";
import "./NavStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

const navItems = [
  { to: "home", lable: "Home", offset: 0, duration: 150 },
  { to: "about", lable: "About", offset: 150, duration: 500 },
  { to: "myWork", lable: "projects", offset: 150, duration: 500 },
  { to:"contact",
  lable:"Contact",
    offset: 150,
    duration: 500,
    className: "contact-link"
  }
];

function Nav() {
  return (
    <div className="container-nav " id="nav">
      <nav>
        <div className="nav-bar">
          <ul>
            {navItems.map(({ to, lable, offset, duration }) => (
              <Link
                exact
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={150}
                className="nav-items"
                data-section="Home"
              ></Link>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
