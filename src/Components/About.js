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
