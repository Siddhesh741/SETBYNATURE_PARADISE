import React, { useState } from 'react';
import "./Gallery.css";

import img1 from "../assets/img/5.jpg";
import img2 from "../assets/img/8.jpg";
import img3 from "../assets/img/7.jpg";
import img4 from "../assets/img/24.jpg";
import img5 from "../assets/img/10.jpg";
import img6 from "../assets/img/12.jpg";
import img7 from "../assets/img/26.jpg";
import img8 from "../assets/img/11.jpg";
import img9 from "../assets/img/222.jpg";
import img19 from "../assets/img/30.jpg";
import img20 from "../assets/img/31.jpg";
import img21 from "../assets/img/32.jpg";

import img10 from "../assets/img/6.jpg";
import img11 from "../assets/img/13.jpg";
import img12 from "../assets/img/14.jpg";
import img13 from "../assets/img/19.jpg";
import img14 from "../assets/img/16.jpg";
import img15 from "../assets/img/17.jpg";
import img16 from "../assets/img/41.jpg";
import img17 from "../assets/img/9.jpg";
import img18 from "../assets/img/42.jpg";

const Gallery = () => {
  const allImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img19,
    img20,
    img21,
    img17,
    img18,
    img16,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
   
  
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = allImages.slice(startIndex, endIndex);

  const handleNext = () => {
    const totalPages = Math.ceil(allImages.length / itemsPerPage);
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : 1));
  };

  const handlePrevious = () => {
    const totalPages = Math.ceil(allImages.length / itemsPerPage);
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : totalPages));
  };

  return (
    <div>
      <div className="gallery-container">
        <button className="gallery-arrow prev" onClick={handlePrevious}>⬅️</button>
        {currentImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Image ${startIndex + index + 1}`} className="gallery-image" />
          </div>
        ))}
        <button className="gallery-arrow next" onClick={handleNext}>➡️</button>
      </div>
      <br></br>
    </div>
  );
};

export default Gallery;
