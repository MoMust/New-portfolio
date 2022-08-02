import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import MyWork from './Components/MyWork';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Nav from '../src/Components/Nav'

function App() {
  return (
    <>
    <Nav />
    <Home />
    <About/>
    <MyWork/>
    <Contact/>
    <Error/>
   
    </>
  )
}

export default App;
