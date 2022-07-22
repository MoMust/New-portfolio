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
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/MyWork" element={<MyWork/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path='*'element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App;
