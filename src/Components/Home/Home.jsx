import React from "react";
import "./Home.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ConstructionIcon from "@mui/icons-material/Construction";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Skill from "./Skills/Skills";

function Home() {
  const SKILLOBJECTS = [
    {
      title: "DEVELOPMENT",
      icon: DeveloperBoardIcon,
      width: "50px",
      height: "50px",
      list: [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "React.Native",
        "Redux",
        "Wordpress",
        "Webflow",
        "Node.JS",
        "MySQL",
        "Strapi",
      ],
    },
    {
      title: "TOOLS",
      icon: ConstructionIcon,
      width: "50px",
      height: "50px",
      list: [
        "VSC",
        "IntelliJ",
        "Figma",
        "Git - Github",
        "NPM",
        "Postman",
        "Shortcut",
        "Slack",
      ],
    },
    {
      title: "KNOWLEDGE",
      icon: PsychologyIcon,
      width: "50px",
      height: "50px",
      list: ["SEO", "UX", "ECMAScript 6", "MVC", "DevOps"],
    },
  ];
  
  return (
    <div className="body-class" id="home">
      <div className="container-front row d-flex justify-content-center mt-0 m-0 p-0 gap-4">
        {/*Wave Shape */}
        <div className="custom-shape-divider-top-1658751484" id="shape">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="15 0 1150 70"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="intro-text-container front-text row col-lg-6 mt-5">
          <h2>Hi, i'm Mohammed</h2>
          <h3>Welcome to my portfolio</h3>
          <p>
            Welcome to my portfolio website! Here you'll find an introduction to
            me, my projects, and a way to contact me. Explore my background,
            skills, and passion for web development. Discover my diverse
            projects showcasing expertise in various technologies. Get in touch
            for collaborations, opportunities, or to connect and discuss ideas.
            Thank you for visiting!
          </p>
          <div className="social-media">
            <div className="soc-1">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=627371126"
              >
                <FacebookIcon
                  className="social-icons"
                  variant="contained"
                  color="primary"
                />
              </a>
            </div>
            <div className="soc-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/moemustafafrontend/"
              >
                <LinkedInIcon
                  className="social-icons"
                  variant="contained"
                  color="primary"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row front-side col-lg-5 pt-md-5 mt-5 px-4">
          {SKILLOBJECTS.map(({title, icon: Icon, list, width, height}) =>(
            <Skill
            icon={
             <Icon style={{ width, height }} />
            }
            title={title}
            list={list}
          />
          ))}
         
        </div>
      </div>
    </div>
  );
}

export default Home;
