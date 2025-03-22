import React from 'react'
import Home from './pages/home';
import Navbar from './assets/Navbar';
import AboutMe from './pages/AboutMe';
import Gallery from './pages/Gallery';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Gallery/>
    </>
    
  );
}

export default App