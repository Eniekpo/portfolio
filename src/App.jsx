import React from 'react'

import Menubar from './components/Header/Menubar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'

function App() {
  return (
    <Router>
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Nav />
      <Footer />
    </Router>
  );
}

export default App;
