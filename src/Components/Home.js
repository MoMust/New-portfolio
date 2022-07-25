import React, { useEffect } from "react";
import "../Css/HomeStyle.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


function Home() {
  // Circle text animation START
  useEffect(() => {
    const text = document.querySelector(".outer-text p");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`
      )
      .join("");
  });
  // Circle text animation END
  return (
    <div className="body-class">
      <div className="container-front row mt-0 m-0 p-0">
        {/* Shape */}
        <div className="custom-shape-divider-top-1658751484">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        {/* <div className="logo">
            <h2>My Portfolio</h2>
          </div> */}
        <div className="front-text row col-lg-7 mt-5">
          <h2>Hi, i'm Mohammed</h2>
          <h3>Welcome to my portfolio</h3>
          <p>
            I'm a student of front end development, looking
            <br />
            to learn it all.
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
        <div className="front-side col-lg-5 mt-5">
          <div className="circle">
            <div className="inner-text">
              <p>Knowledge is power</p>
            </div>

            <div className="outer-text">
              <p> JS - React - React Native - REST - HTML - CSS </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
