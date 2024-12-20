import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Projects from './contents/Projects';
import Startups from './contents/Startups';
import Experience from './contents/Experience';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Navbar />
        {/* Wrap Routes inside Routes component */}
        <Routes>
          {/* Route for base url */}           
          <Route path="/" element={<Navigate to="/home" />} />
          
          {/* Route for Home.js contents */}
          <Route path="/home" element={<Home />} />
          
          {/* Route for About.js contents */}
          <Route path="/about" element={<About />} />
          
          {/* Route for Education.js contents */}
          <Route path="/education" element={<Education />} />

          {/* Route for Education.js contents */}
          <Route path="/experience" element={<Experience />} />
          
          <Route path="/skills" element={<Skills />} />
          
          <Route path="/projects" element={<Projects />} />

          <Route path="/startups" element={<Startups />} />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
