// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import Features from "../src/pages/Features";
import Oursets from "../src/pages/Oursets";
import Destinations from "../src/pages/Destinations";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Admin from "../src/pages/Admin";
import Bookingid from "./pages/Bookingid";


//import '../src/components/Style.css'
import "tailwindcss/tailwind.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/Oursets" element={<Oursets />} />
        <Route exact path="/bookingid" component={Bookingid} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
