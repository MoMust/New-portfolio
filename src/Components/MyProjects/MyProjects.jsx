import React, { useState } from "react";
import "./MyProjects.css";
import velo1 from "../../Images/velo1.png";
import velo2 from "../../Images/velo2.png";
import velo3 from "../../Images/velo3.png";
import velo4 from "../../Images/velo4.png";

import trip1 from "../../Images/trip1.png";
import trip2 from "../../Images/trip2.png";
import trip3 from "../../Images/trip3.png";
import trip4 from "../../Images/trip4.png";

import smart1 from "../../Images/smart1.png";
import smart2 from "../../Images/smart2.png";
import smart3 from "../../Images/smart3.png";
import smart4 from "../../Images/smart4.png";

import show1 from "../../Images/show1.png";
import show2 from "../../Images/show2.png";
import show3 from "../../Images/show3.png";
import show4 from "../../Images/show4.png";

import Repo from "../Repo/Repo";
import ImgModal from "./ImageModal/ImageModal";
// import Projects from './Projects';

function MyProjects() {
  const [imageModal, setImageModal] = useState("");

  // console.log(imageModal)

  return (
    <div className="body-class-dark" id="myWork">
      <div className="container-mywork mt-0">
        <div className="row-custom-mywork">
          <div className="px-3 header-mywork mt-5 ">
            <h1 className="">My projects</h1>
            <div className="line-smal"></div>
            {/* <div className="pt-3">
              <p>
                Through my school time i've managed to work on a few things.
              </p>
            </div> */}
          </div>
        </div>
        {/* 1 */}

        <ImgModal
          img1={velo1}
          img2={velo2}
          img3={velo3}
          img4={velo4}
          setImageModal={setImageModal}
          imageModal={imageModal}
          list={[
            "React",
            "Redux",
            "Javascript",
            "Strapi",
            "JSX",
            "SASS",
            "Bootstrap",
          ]}
          title="VELO EL"
          desc="VeloEl is a e-commerce website where users can browse and buy electric bikes. Im currently working on further developing and deploying the webbapp for a customer to use as a new version of their website with the same name."
        />

        {/* 2 */}
        <ImgModal
          img1={trip1}
          img2={trip2}
          img3={trip3}
          img4={trip4}
          setImageModal={setImageModal}
          imageModal={imageModal}
          list={[
            "React",
            "Javascript",
            "JSX",
            "CSS",
            "JSON Server",
            "Bootstrap",
          ]}
          title="Travel Places"
          desc="This web application is an interactive platform where users can explore global cities and their popular spots, and also create their own unique places with names and descriptions. This web app makes it easy for city explorers to keep track and save their favorite spots."
        />
        {/* 3 */}
        <ImgModal
          img1={smart1}
          img2={smart2}
          img3={smart3}
          img4={smart4}
          setImageModal={setImageModal}
          imageModal={imageModal}
          list={["React Native", "Javascript", "JSX", "CSS", "Bootstrap"]}
          title="SmartWaste"
          desc="
          This mobile application provides a marketplace for users to buy or sell surplus, cooked food from sources like HelloFresh, aimed at reducing food waste. Users can list their surplus meals and browse available offerings based on criteria like location or dietary preferences. Essentially, it is a platform for saving money, trying new foods, and fostering a community committed to sustainability."
        />
        <ImgModal
          img1={show1}
          img2={show2}
          img3={show3}
          img4={show4}
          setImageModal={setImageModal}
          imageModal={imageModal}
          list={["React Native", "TypeScript", "TSX", "CSS"]}
          title="City Pop"
          desc="
          This is a mobile application that allows users to explore global demographic data by retrieving population figures for any city worldwide. In addition to city-specific data, the app provides information on the three most populated cities within a searched country. The application is designed for a variety of users, including demographics enthusiasts, travelers, and researchers. Essentially, this app serves as a comprehensive, regularly updated database for city and country population figures."
        />
        <div className="repo d-flex flex-column justify-content-center">
          <h1 className="text-center">Get my Github repositories</h1>
          <Repo />
        </div>

        {/* <div className="row row-custom-mywork">
            <div className="content-mywork-mini col-lg-12">
              <div className="content-header-cv">
                <h1>Check out my CV</h1>
              </div>
              <div className="content-cv">
                <iframe
                  src="https://drive.google.com/file/d/1Pczho48GStbiEXElM1HwFDFwLrONfvlq/preview"
                  allow="autoplay"
                  title='iframe'
                ></iframe>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
}

export default MyProjects;
