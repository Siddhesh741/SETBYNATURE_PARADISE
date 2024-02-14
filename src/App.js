// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Features from '../src/pages/Features';
import Destinations from '../src/pages/Destinations';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Admin from '../src/pages/Admin';
//import Footer from "../src/pages/Footer"
//import '../src/components/Style.css'
import 'tailwindcss/tailwind.css';
//import ItemPage from '../src/pages/ItemPage';


const App = () => {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        {/* <Route path="/feature" element={<Features />} /> Redirect /feature to /features */}
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/items" element={<ItemPage />} />  */}
        {/* <Redirect to="/admin" /> */}
      </Routes>
      {/* <Footer /> */}
      {/* <ItemPage /> */}
    </Router>
    
  );
};
{/* <div> 

<Footer />
</div>*/}
export default App;
