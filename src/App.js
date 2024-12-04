import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Projects from './contents/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Wrap Routes inside Routes component */}
        <Routes>
          {/* Route for Home.js contents */}
          <Route path="/ganeshnyaupane" element={<Home />} />
          <Route path="/home" element={<Home />} />
          
          {/* Route for About.js contents */}
          <Route path="/about" element={<About />} />
          
          {/* Route for Education.js contents */}
          <Route path="/education" element={<Education />} />
          
          <Route path="/skills" element={<Skills />} />
          
          <Route path="/projects" element={<Projects />} />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
