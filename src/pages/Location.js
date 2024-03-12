import React from "react";
import "./Location.css";
import videoFile from "../assets/img/1.mp4";
import videoFile1 from "../assets/img/5.mp4";

function Location() {
  return (
    <div className="location-container" style={{ textAlign: "center" }}>
      <div className="location-details text-center">
        <br></br>
        <h2 style={{ fontSize: "28px" }}>👇Location Address👇</h2>
        <p style={{ fontSize: "22px" }}>
          <strong>
            📍 At post Veer Samgirwadi, Taluka-Purandar, Dist-Pune, Taranginii
            Farms & Set by nature paradise, behind ZP school.{" "}
          </strong>
        </p>
      </div>
      <div style={{ margin: "auto", width: "90%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93718.19038769953!2d74.05962116545066!3d18.135547763431305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2f94fd6d09a07%3A0xc94caf885abb7570!2sTarangini%20Agro%20Farms!5e0!3m2!1sen!2sin!4v1709014038961!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
<br></br>
      <div className="video-container">
        <video
          src={videoFile}
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
        ></video>
        <video
          src={videoFile1}
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <br></br>
      <div className="instagram-link text-center">
        <p
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Watch more videos & photos on Instagram click..
          <a
            href="https://www.instagram.com/sets_by_nature_paradise?igsh=MXdsZWF0em0zcHFoZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all cursor-pointer"
          >
            {" "}
            here ↗️
          </a>
        </p>
        <br></br>
      </div>
    </div>
  );
}

export default Location;
