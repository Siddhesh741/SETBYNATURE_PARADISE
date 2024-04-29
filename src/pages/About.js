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
            At Set By Nature Paradise, we are ready to provide you with the best
            prewedding experience in your life!
          </h1>

          <p className="about-text" style={{ color: "#000000" }}>
            "Your dream prewedding shoot awaits..and we're here to make it a
            reality" <br /> 30+ Variety of Sets at one location set by natural
            paradise At VEER DAM backwater.
          </p>
          <br></br>
          {/* Adding Contact Now button */}
          <RouterLink to="/contact" className="contact-button">
            Contact Now
          </RouterLink>
        </div>
        <br></br>
        <div className="about-image about-image-normal">
          <img src={img} alt="img" className="about-img" />
        </div>

        <br></br>
      </div>
                {/* Additional content with attractive points */}
      <div className="attractive-box">
        <h2 className="attractive-box-title">What we provide..</h2>
        <ul className="attractive-points">
          <li>Boasting over 30+ meticulously crafted themes.</li>
          <li>Surround yourself with nature's beauty in our 25+ natural set locations, perfect for capturing unforgettable moments.</li>
          <li>Enjoy the convenience of our changing rooms, ensuring you look your best for every shot.</li>
          <li>Our dedicated support team is here to assist you throughout your photoshoot experience.</li>
          <li>Indulge in delicious snacks to keep your energy levels up during your session.</li>
          <li>Choose from a stunning array of dresses and costumes provided for couples, adding flair and style to your photos.</li>
          <li>With our 24-hour service, your dream photoshoot is just a call away.</li>
          <li>Located conveniently within a 50 km radius from Pune, our venue offers easy access for couples seeking the perfect backdrop.</li>
          <li>Nestled near Veer Dam, our location provides a picturesque setting for your pre-wedding photoshoot, surrounded by natural beauty.</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default About;
