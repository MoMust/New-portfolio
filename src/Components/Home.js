import React, { useEffect } from "react";
import "../Css/HomeStyle.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import ConstructionIcon from "@mui/icons-material/Construction";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Skill from "./Skills";
// import ScriptTag from "./NavScroll";

function Home() {
  // Circle text animation START
  // useEffect(() => {
  //   const text = document.querySelector(".outer-text p");
  //   text.innerHTML = text.innerText
  //     .split("")
  //     .map(
  //       (char, i) =>
  //         `<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`
  //     )
  //     .join("");
  // });

  // Circle text animation END
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
        <div className="front-text row col-lg-7 mt-5">
          <h2>Hi, i'm Mohammed</h2>
          <h3>Welcome to my portfolio</h3>
          <div className="d-flex justify-content-start"></div>
          <p className="">
            I'm a newly minted Front-End Developer, equipped with the latest
            knowledge and passion for transforming concepts into reality. Though
            my main toolkit involves the power and flexibility of the React
            framework, I pride myself on my ability to learn and adapt to new
            technologies and tools to build innovative and user-friendly digital
            experiences. Having just completed my degree, I bring a fresh
            perspective to front-end development, blending traditional
            principles with modern design sensibilities. Feel free to explore my
            portfolio to see the projects I've worked on and what I could bring
            to your team.
          </p>
          <div className="social-media">
            <div className="soc-1">
              <a href="https://www.facebook.com/profile.php?id=627371126">
                <FacebookIcon
                  className="social-icons"
                  variant="contained"
                  color="primary"
                />
              </a>
            </div>
            <div className="soc-2">
              <a href="https://www.linkedin.com/in/moe-mustafa-14918a220/">
                <LinkedInIcon
                  className="social-icons"
                  variant="contained"
                  color="primary"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row front-side col-lg-5 pt-md-5 px-4">
          <Skill
            icon={
              <DeveloperBoardIcon style={{ width: "50px", height: "50px" }} />
            }
            title={"DEVELOPMENT"}
            list={[
              "HTML",
              "CSS",
              "SASS",
              "JavaScript",
              "React",
              "React.Native",
              "Redux",
              "Wordpress",
              "Node.JS",
              "MySQL",
              "Strapi",
            ]}
          />
          <Skill
            icon={
              <ConstructionIcon style={{ width: "50px", height: "50px" }} />
            }
            title={"TOOLS"}
            list={[
              "VSC",
              "IntelliJ",
              "Figma",
              "Git - Github",
              "NPM",
              "Postman",
              "Shortcut",
              "Slack",
            ]}
          />
          <Skill
            icon={<PsychologyIcon style={{ width: "50px", height: "50px" }} />}
            title={"KNOWLEDGE"}
            list={["SEO", "UX", "ECMAScript 6", "MVC", "DevOps"]}
          />
          {/* <div className="circle w-90 ">
            <div className="inner-text">
              <p>Knowledge</p>
            </div>

            <div className="outer-text">
              <p>
                
                JS - React - React Native - API - SASS - HTML - CSS
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
