import React from "react";
import "./Features.css"; // Import CSS file for styling
import img from "../assets/img/feature11.jpg";
import pic1 from "../assets/img/service.png";
import pic2 from "../assets/img/user.png";
import pic3 from "../assets/img/service.png";
import pic4 from "../assets/img/user.png";
import Bubble from "./Bubble";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";
const Features = () => {
  return (
    <div className="features-container">
      <div className="features-content">
        <div className="features-text">
          <h1 className="features-title">
            "From the Heart of Nature to the Heart of Your Memories."
          </h1>
          <br></br>
          <p>
            Discover the Best Prewedding Experiences with set by nature
            paradise! We're dedicated to curating the latest and greatest sets
            from around the veer dam ensuring you always get the ultimate and
            best shoot moments experience.
          </p>
        </div>
        <br></br>
        <div className="features-image">
          <img className="features-img" src={img} alt="img" />
        </div>
      </div>

      <br></br>

      <div className="features-details">
        <div className="feature">
          <div className="feature-icon">
            <img src={pic1} alt="img" />
          </div>
          <div className="feature-text">
            <h1 className="feature-title">🤝Friendly Service</h1>
            <p className="feature-description">
              We will provide excellent & friendly service for the sake of our
              customers also a couples.
            </p>
          </div>
        </div>

        <br></br>

        <div className="feature">
          <div className="feature-icon">
            <img src={pic2} alt="img" />
          </div>
          <div className="feature-text">
            <h1 className="feature-title">❤️‍🩹Unforgettable experience</h1>
            <p className="feature-description">
              We will provide excellent and Unforgettable experience captured in
              high-quality images for our customers.
            </p>
          </div>
        </div>

        <br></br>

        <div className="feature">
          <div className="feature-icon">
            <img src={pic3} alt="img" />
          </div>
          <div className="feature-text">
            <h1 className="feature-title">💰Affordable prices</h1>
            <p className="feature-description">
              We provide our services & packages Affordable & pocket friendly
              prices for our customers.
            </p>
          </div>
        </div>

        <br></br>

        <div className="feature">
          <div className="feature-icon">
            <img src={pic4} alt="img" />
          </div>
          <div className="feature-text">
            <h1 className="feature-title">⭐Provide many Facilities</h1>
            <p className="feature-description">
              We provide to our customer excellent Facilities like the changing
              room, snacks, washroom with hygiene.
            </p>
          </div>
        </div>
        <br></br>
        <Bubble />
      </div>

      <br></br>
      <div className="video-container">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=s_4bO2tz5Ys&t=45s"
        controls={true}
        width="100%"
        height="400px"
      />
    </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default Features;
