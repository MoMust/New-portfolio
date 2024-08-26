import React from "react";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import MyProjects from "./Components/MyProjects/MyProjects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
// import Nav from './Components/Nav/Nav.js';
import NavV2 from './Components/NavV2/Nav.jsx';
import './App.css'
import { Helmet } from "react-helmet";
function App() {

  return (
    <>
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mo Portfolio</title>
        </Helmet>
        {/* <Nav /> */}
        <NavV2 />
        <Home />
        <About />
        <MyProjects />
        <Contact />
      </div>
    </>
  );
}

export default App;
