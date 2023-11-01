import React from 'react'
import Header from './components/header/Header'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Header/>
      
      <h1>App</h1>
    </div>
  )
}

export default App

// import React from 'react';
// import { Router, Route, Routes } from 'react-router';

// import Home from './components/home/Home';
// import Services from './components/XDL-Services/Sevices'; // Update the import path accordingly
// import Drivers from './components/drivers/Drivers';
// import About from './components/about/About';
// import Contact from './components/contact/Contact';
// import FAQ from './components/faq/FAQ'; // Updated to 'FAQ'

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/drivers" element={<Drivers />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/faq" element={<FAQ />} /> 
//         </ Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
