import React from "react";
import "../Css/About.css";
import Pic from "../Images/pro.png";
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
    <div className="body-class-dark" id="about">
      {/* PROFILE CARD */}
      <div className="row row-custom d-flex justify-content-center pt-5 ">
        <div className="profile-card col-lg-3 col-md-5 col-sm-8 col-8">
          <div className="profile-info-container">
            <div className="profile-bg">
              <div className="profile-image">
                <img src={Pic} alt=""></img>
              </div>
            </div>
            <div className="profile-card-text">
              <h5>
                Mohammed <span className="title-color">Mustafa</span>
              </h5>
            </div>
            <div className="profile-card-text">
              <h5>Front-end / Web Developer</h5>
            </div>
            <div className="social-media-about">
              <a href="https://www.facebook.com/profile.php?id=627371126">
                <FacebookIcon
                  className="social-icons"
                  variant="contained"
                  color="primary"
                />
              </a>
              <a href="https://www.linkedin.com/in/moe-mustafa-14918a220/">
                <LinkedInIcon
                  className="social-icons"
                  variant="contained"
                  color="primary"
                />
              </a>
            </div>
            <div className="profile-info">
              <div className="profile-info-details">
                <SchoolIcon />
                <p>KYH Stockholm</p>
              </div>
              <div className="profile-info-details">
                <LocationOnIcon />
                <p>Stockholm, Sweden</p>
              </div>
              <div className="profile-info-details">
                <CalendarTodayIcon />
                <p>Avalible from: {printOutDate()}</p>
              </div>
            </div>
            <div className="send-mail">
              <a
                href="mailto:mohammed.mustafamoh@learnet.se"
                className="mail d-flex justify-content-center"
              >
                <button type="button" className="btn-primary">
                  Email me
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* PROFILE CARD END*/}
        <div className="about-info col-lg-5 col-md-5 col-sm-10 col-10">
          <div className="about-info-top">
            <h2>About me</h2>
            <h3>
              I'm a student of front end development, looking
              <br />
              to learn it all...
            </h3>
          </div>
          <div className="about-info-bottom">
            <h2>What i know</h2>
            <div class="row about-info-bottom-row">
              <div className="row">
                <Box
                  icon={<CodeIcon />}
                  skill1={"HTML"}
                  skill2={"CSS"}
                  skill3={"JavaScript"}
                  header={"Programming languages"}
                />
                <Box
                  icon={<CropDinIcon />}
                  skill1={"React"}
                  skill2={"Bootstrap"}
                  skill3={"React Native"}
                  header={"Frameworks"}
                />
              </div>
              <div className="row ">
                <Box
                  icon={<CodeIcon />}
                  skill1={"Wordpress"}
                  skill2={"MVC"}
                  skill3={"Node.js"}
                  skill4={"Jest"}
                  skill5={"Rest"}
                  header={"Other tools"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
