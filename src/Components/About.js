import React from "react";
import "../Css/About.css";
import Pic from "../Images/pfi.png";
// import ReturnHome from './ReturnHomeButton';
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import JavascriptIcon from "@mui/icons-material/Javascript";
// import HtmlIcon from "@mui/icons-material/Html";
// import CssIcon from "@mui/icons-material/Css";
import CodeIcon from "@mui/icons-material/Code";
import CropDinIcon from "@mui/icons-material/CropDin";
// import { FaReact, FaBootstrap} from "react-icons/fa";

import Box from './Box'

function About() {
  function printOutDate() {
    const dateNow = new Date();
    let month = dateNow.getUTCMonth() + 1; //months from 1-12
    let day = dateNow.getUTCDate();
    let year = dateNow.getUTCFullYear();
    let newDate = `${day} - ${month} - ${year}`;
    return newDate;
  }

  return (
    <div className="body-class-about" id="about">
      <div className="d-flex justify-content-center">
        <div className="line-big"></div>
      </div>
      {/* PROFILE CARD */}
      <div className="custom-shape-divider-top-16587514844" id="shape">
        
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 409.6">
          <path
            d="M409.602 341.336c0 37.7-30.567 68.266-68.266 68.266-37.703 0-68.266-30.567-68.266-68.266 0-37.703 30.563-68.266 68.266-68.266 37.7 0 68.266 30.563 68.266 68.266zM324.27 179.2c0 32.991-26.743 59.734-59.735 59.734-32.992 0-59.734-26.743-59.734-59.735 0-32.988 26.742-59.734 59.734-59.734 32.992 0 59.735 26.746 59.735 59.734zm-119.47 128c0 56.554-45.847 102.402-102.402 102.402C45.848 409.602 0 363.754 0 307.199c0-56.554 45.848-102.398 102.398-102.398 56.555 0 102.403 45.844 102.403 102.398zM170.672 85.336c0 47.129-38.207 85.336-85.336 85.336S0 132.465 0 85.336 38.207 0 85.336 0s85.336 38.207 85.336 85.336zM409.602 51.2c0 28.277-22.926 51.198-51.204 51.198-28.277 0-51.199-22.921-51.199-51.199C307.2 22.922 330.121 0 358.4 0c28.277 0 51.203 22.922 51.203 51.2zm-17.071 170.663c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.64-17.067-17.067 0-9.422 7.641-17.062 17.067-17.062s17.066 7.64 17.066 17.062zM264.535 59.734c0 14.141-11.46 25.602-25.601 25.602-14.137 0-25.598-11.461-25.598-25.602 0-14.136 11.46-25.597 25.598-25.597 14.14 0 25.601 11.46 25.601 25.597zm0 0"
            fill='url("#SvgjsLinearGradient1042")'
          ></path>
          <defs>
            <linearGradient id="SvgjsLinearGradient1042">
              <stop stopColor="rgb(75, 200, 134)" offset="0"></stop>
            </linearGradient>
          </defs>
        </svg> */}
      </div>
      <div className="row row-custom d-flex justify-content-center pt-5 ">
        <div className="profile-card col-lg-4 col-md-4">
          <div className="profile-info-container">
            <div className="profile-image">
              <img src={Pic} alt=""></img>
            </div>
          </div>
        </div>
        {/* PROFILE CARD END*/}
        <div className="about-info col-lg-6 col-md-6 mt-5">
          <div className="about-info-top">
            <h1>About me</h1>
            <div className="line-smal"></div>
            <h3 className="pt-3">
              I'm a newly minted Front-End Developer, equipped with the latest
              knowledge and passion for transforming concepts into reality.
            </h3>
            <div className="line mt-4"></div>
          </div>

          <div className="about-info-bottom">
            {/* <h2>What i know</h2> */}
            <div className="row about-info-bottom-row mt-4">
              <p>
                Welcome! As a freshly graduated Front-End Developer, I've
                dedicated my efforts to mastering the nuances of digital
                creation, turning abstract ideas into interactive realities. My
                expertise lies in building e-commerce platforms, websites, and
                applications using a range of technologies, including
                JavaScript, React, HTML, and CSS. But I don't limit myself to
                these tools - I'm always keen on learning and integrating new
                technologies that can elevate the user experience and streamline
                development. My recent graduation equips me with a fresh outlook
                on front-end development, bridging the gap between classical
                approaches and innovative design principles. Dive into my
                portfolio to discover the projects I've tackled and to get a
                glimpse of the unique contributions I can bring to your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
