import React, { useState } from "react";
import "./Home1.css";
import img from "../assets/img/Hero1.png";
import { Link as RouterLink } from "react-router-dom";
import Bookingid from "./Bookingid"; // Import the Booking ID page component

const Home1 = () => {
  const [isBookingIdOpen, setIsBookingIdOpen] = useState(false); // State to control the visibility of the Booking ID page

  const handleBookingIdClick = () => {
    // Open the Booking ID page
    setIsBookingIdOpen(true);
  };

  const handleCloseBookingId = () => {
    // Close the Booking ID page
    setIsBookingIdOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home-container">
      <div className="content-container">
        <div>
          <div className="waterfall">
            <h1 className="title">
              <span>Visit the best place</span>
              <span>for Prewedding & </span>
              <span>many more💞</span>
            </h1>
          </div>

          <div className="button-container" onClick={scrollToTop}>
            <RouterLink to="/contact" className="book-now-button">
              Book Now
            </RouterLink>
            <div style={{ width: "10px" }}></div>
            <button onClick={handleBookingIdClick} className="book-now-button">
              Booking ID
            </button>
          </div>
          <div className="paragraph-container">
            <p className="paragraph">
              Beautiful and best place near Pune. If you are looking to shoot in
            </p>
            <p className="paragraph">
              outdoor nature & backwater destinations that we have to offer.
            </p>
            <p className="paragraph">
              "Your dream prewedding shoot awaits..& we're here to make it a
              reality".
            </p>
          </div>
          <p className="para">
            "Embrace the Beauty of Nature in Your Pre-Wedding Moments."
          </p>
        </div>
        <img src={img} alt="img" className="image" />
      </div>
      <br></br>

      {/* Container for Booking ID button and page */}
      <div className="booking-id-container">
        {/* Render the Booking ID page component if it's open */}
        {isBookingIdOpen && <Bookingid onClose={handleCloseBookingId} />}
      </div>
    </div>
  );
};

export default Home1;
