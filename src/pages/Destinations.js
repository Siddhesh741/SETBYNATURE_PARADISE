import React from "react";
import DestinationItem from "./DestinationItem"; // Import your DestinationItem component
import "./Destinations.css"; // Import your CSS file
import img1 from "../assets/img/dest11.jpg";
import img2 from "../assets/img/dest22.jpg";
import img3 from "../assets/img/dest3333.jpg";

const Destinations = () => {
  return (
    <div className="destinations-container">
      <h1 className="destinations-title">
        Most Popular Sets
      </h1>
      <br></br>
      <div className="destinations-list">
        <DestinationItem
          image={img1}
          title="Backwater Sets"
          description="Veer Dam's scenic beauty during sunset offers a captivating blend of nature's splendor, making it an ideal spot for those seeking the serene and breathtaking moments its a mesmerizing experience."
          buttonText="Book Now"
        />
        <br></br>
        <DestinationItem
          image={img2}
          title="Night-Light Sets"
          description="Capturing the enchantment of night sets with couples is a delicate dance of shadows and the lights. The interplay between artificial illumination and the serene night sky creates a mesmerizing canvas."
          buttonText="Book Now"
        />
        <br></br>
        <DestinationItem
          image={img3}
          title="Out Door shoot"
          description="Elevate pre-wedding photography to new heights with captivating outdoor drone shots, weaving a story that unfolds against the breathtaking backdrop of rustic villages."
          buttonText="Book Now"
        />
        <br></br>
      </div>
    </div>
  );
};

export default Destinations;
