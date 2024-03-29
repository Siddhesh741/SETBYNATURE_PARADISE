import React from "react";
import "./Home1.css";
import img from "../assets/img/Hero1.jpg";

const Home1 = () => {
  const handleBookingIdClick = () => {
    // Redirect to the Booking ID page
    window.location.href = '/bookingid'; // Redirect to the bookingid page
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
              "Your dream prewedding shoot awaits..& we're here to make it a reality".
            </p>
          </div>
        </div>
        <img src={img} alt="img" className="image" />
      </div>
      <br></br>
    </div>
  );
};

export default Home1;
