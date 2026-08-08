import { React } from "react";
import { Link } from "react-scroll";
import "./NavStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

const navItems = [
  { to: "home", label: "Home", offset: 0, duration: 150 },
  { to: "about", label: "About", offset: 150, duration: 500 },
  { to: "myWork", label: "projects", offset: 150, duration: 500 },
  { to:"contact",
  label:"Contact",
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
            {navItems.map(({ to, label, offset, duration, className }) => (
              <Link
                exact
                to={to}
                spy={true}
                smooth={true}
                offset={offset}
                duration={duration}
                className={`nav-items ${className}`} 
                data-section={label}
              ></Link>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
