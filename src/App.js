import React from "react";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import MyProjects from "./Components/MyProjects/MyProjects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
// import Nav from './Components/Nav/Nav.js';
import NavV2 from './Components/NavV2/Nav.jsx';
import './App.css'

function App() {
  return (
    <>
      <div className="main">
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
