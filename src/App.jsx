import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './components/home/Home';
import Services from './components/xdlservices/Services';
import Drivers from './components/drivers/Drivers';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import FAQ from './components/faq/FAQ';
import Privacy from './components/privacy/Privacy';
import Mistake from './components/mistake/Mistake';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>App</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/*" element={<Mistake />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;