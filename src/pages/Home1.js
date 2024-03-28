import React from "react";
import "./Home1.css";
import img from "../assets/img/Hero1.jpg";

const Home1 = () => {
  const handleBookingIdClick = () => {
    // Redirect to the Booking ID page
    window.location.href = "./Bookingid"; // Replace "/bookingid" with the actual URL of your Booking ID page
  };

  return (
    <div className="home-container">
      <div className="content-container">
        <div>
          <h1 className="title">
            Visit the best place for Prewedding & many more💞
          </h1>
          <div className="button-container">
            <a href="/contact" className="book-now-button">
              Book Now
            </a>
            <div style={{ width: "10px" }}></div>
            <button onClick={handleBookingIdClick} className="book-now-button"> {/* Updated button */}
              Booking ID
            </button>
          </div>
          <p className="paragraph">
            Beautiful and best place near Pune. If you are looking to shoot in
            outdoor<br></br> nature & backwater destinations that we have to
            offer. "Your dream<br></br> prewedding shoot awaits..& we're here
            to make it a reality".
          </p>
        </div>
        <img src={img} alt="img" className="image" />
      </div>
      <br></br>
    </div>
  );
};

export default Home1;
