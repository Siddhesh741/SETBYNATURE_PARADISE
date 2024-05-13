import React, { useEffect, useRef } from "react";
import "./Location.css";
import videoFile from "../assets/img/1.mp4";
import videoFile1 from "../assets/img/5.mp4";

function Location() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    let lastScrollTop = 0;

    function handleScroll() {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > lastScrollTop) {
        // Scroll down
        if (
          videoRef1.current &&
          videoRef2.current &&
          !videoRef1.current.classList.contains("animate")
        ) {
          videoRef1.current.classList.add("animate");
        }
        if (
          videoRef2.current &&
          !videoRef2.current.classList.contains("animate")
        ) {
          videoRef2.current.classList.add("animate");
        }
      }

      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="location-container" style={{ textAlign: "center" }}>
      <div className="location-details text-center">
        <br></br>
        <h2 style={{ fontSize: "28px" }}>👇Location Details👇</h2>
        <p style={{ fontSize: "20px" }} className="location-text">
          <strong>
            📍 At post Veer Samgirwadi, Taluka-Purandar, Dist-Pune, Sets By
            Nature Paradise & Tarangini Farms behind ZP school.{" "}
          </strong>
        </p>
      </div>
      <div style={{ margin: "auto", width: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18009.484091698905!2d74.0634604270652!3d18.142234923309292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2f90041ba2c61%3A0xde1582d0bb10dc48!2sSet%20By%20Nature%20Paradise!5e1!3m2!1sen!2sin!4v1713801548423!5m2!1sen!2sin"
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
          ref={videoRef1}
          className="video-left"
        ></video>
        <video
          src={videoFile1}
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
          ref={videoRef2}
          className="video-right"
        ></video>
      </div>

      <br></br>
      <div className="instagram-link">
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
