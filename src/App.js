import React from 'react';
import './index.css';
import Home from './routes/Home'; //Faqja Home
import Project from './routes/Project'; //Faqja Project
import About from './routes/About';    //Faqja About
import Contact from './routes/Contact'; //Faqja Contact
// import { Link } from 'react-router-dom';
import {  Route, Routes } from 'react-router-dom';
///**Routes e Route perdoren per te krijuar NAVBAR *//

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </>
  );
}

export default App;