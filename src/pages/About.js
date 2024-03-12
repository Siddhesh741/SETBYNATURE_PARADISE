import React from "react";
import img from "../assets/img/about.jpg";
import Footer from "./Footer";
import { Link as RouterLink } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./About.css"; // Import CSS file for styles
const About = () => {
  return (
    <div>
      <div className="about-container with-background">
        <div className="about-content">
          <h1 className="about-title">
            At Taranginii agro Farm, we are ready to provide you with the best
            prewedding experience in your life!
          </h1>

          <p className="about-text" style={{ color: "#000000" }}>
            "Your dream prewedding shoot awaits..and we're here to make it a
            reality" <br /> 20+ Variety of Sets at one location set by natural
            paradise At VEER DAM backwater
          </p>

          {/* Adding Contact Now button */}
          <RouterLink to="/contact" className="contact-button">
            Contact Now
          </RouterLink>
        </div>
        <br></br>
        <div className="about-image">
          <img src={img} alt="img" className="about-img" />
        </div>
        <br></br>
      </div>
      <Footer />
    </div>
  );
};

export default About;
