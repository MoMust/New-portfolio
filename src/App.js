import React from "react";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import MyProjects from "./Components/MyProjects/MyProjects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Nav from './Components/Nav/Nav.js';

function App() {
  return (
    <>
      <div className="main">
        <Nav />
        <Home />
        <About />
        <MyProjects />
        <Contact />
      </div>
    </>
  );
}

export default App;
