import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import MyWork from './Components/MyWork';
import Contact from './Components/Contact';
import Nav from '../src/Components/Nav'

function App() {
  return (
    <>
    <Nav />
    <Home />
    <About/>
    <MyWork/>
    <Contact/>
    </>
  )
}

export default App;
