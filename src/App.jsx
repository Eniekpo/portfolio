import React from 'react'

import Menubar from './components/Header/Menubar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
