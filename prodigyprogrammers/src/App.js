

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Programs from './pages/Programs';
import Jobs from './pages/Jobs';
import { useState } from 'react';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path = "/programs" element={<Programs/>}/>
        <Route path = "/jobs" element= {<Jobs/>}/>
      </Routes>
    </div>

  );
}

export default App;
