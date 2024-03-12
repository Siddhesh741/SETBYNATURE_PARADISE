import React, { useState } from 'react';
import img1 from "../assets/img/Swapnil.jpg";
import img2 from "../assets/img/Anant.jpg";
import img3 from "../assets/img/Sakshi.jpg";
import "./Review.css"; // Import CSS file for styles






{/*import React from 'react';
import img1 from "../assets/img/Swapnil.jpg";
import img2 from "../assets/img/Anant.jpg";
import img3 from "../assets/img/Sakshi.jpg";
import "./Review.css";

const Review = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px', backgroundColor: '#8a2be2', marginLeft: '2%', marginRight: '2%' }}>
      <h1 style={{ color: 'white' }}>⭐Reviews⭐</h1>

      <div style={{ display: 'flex', gap: '10px' , marginLeft:'25px',marginRight:'25px'}}>
        <div style={{ backgroundColor: '#f2e6ff', padding: '20px', borderRadius: '10px', flex: '1', color: 'black', marginRight: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
            <h3>Swapnil Daware</h3>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1px'}}>
              <span style={{ marginRight: '5px' }}>Rating:</span>
              <div style={{ color: 'gold' }}>⭐⭐⭐⭐</div>
            </div>
            <br />
            <img src={img1} alt="Customer 1" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />
          </div>
          <p>
            Amazing experience. I recently had the pleasure of experiencing a prewedding shoot at Sets by Nature Paradise. The service provided by the cooperative team ensures a seamless and delightful experience. The lush greenery, Veer Dam backwater, and the golden hues of the setting sun combine to make every frame a work of art. Blends nature, beautiful sets, and exceptional service. The Staff is very helpful; this was the best location, highly recommended, and thank you for the great hospitality. Special thanks to Rahul sir to make this happen so smoothly.
          </p>
        </div>
        <div style={{ backgroundColor: '#f2e6ff', padding: '20px', borderRadius: '10px', flex: '1', color: 'black', margin: '0 10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
            <h3>Anant Jagtap</h3>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '5px' }}>Rating:</span>
              <div style={{ color: 'gold' }}>⭐⭐⭐⭐</div>
            </div>
            <br />
            <img src={img2} alt="Customer 2" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />
          </div>
          <p>
            "Photoshoot with Sets by Nature Paradise is so much fun! They have an incredible creative eye for shooting beautiful photos. I highly recommend her for Preweddings, family photos, and especially for Maternity shoot, Babies Shoot, blog photos. This photo shoot location is a hidden gem near Pune. The backdrop of the Veer Dam backwater with the sunset is truly magical. The waves add an extra charm to the photos. What sets this location apart is the caring and supportive managing team. The boat ride adds an adventurous touch to the shoot. Highly recommended for couples looking for a prewedding location.
          </p>
        </div>
        <div style={{ backgroundColor: '#f2e6ff', padding: '20px', borderRadius: '10px', flex: '1', color: 'black', marginLeft: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
            <h3>Sakshi Ravet</h3>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '5px' }}>Rating:</span>
              <div style={{ color: 'gold' }}>⭐⭐⭐</div>
              <br />
            </div>
            <br />
            <img src={img3} alt="Customer 3" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />
          </div>
          <p>
            The photo shoot location behind the Veer Dam backwater is absolutely breathtaking. The sunset views are mesmerizing, and the waves create a perfect backdrop for any photoshoot. The pleasant environment with natural birds sound like peaceful & relaxing momemt for mind .The facilities, including toilets and changing rooms, are well-maintained and convenient. The managing team is incredibly helpful and caring, ensuring that every aspect of the shoot goes smoothly. I highly recommend this location for prewedding shoots or any photography sessions near Pune.
          </p>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Review;*/}

const Review = () => {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
  
    const toggleExpanded1 = () => {
      setExpanded1(!expanded1);
    };
  
    const toggleExpanded2 = () => {
      setExpanded2(!expanded2);
    };
  
    const toggleExpanded3 = () => {
      setExpanded3(!expanded3);
    };
  
    return (
      <div className="review-container">
        <h1 className="review-title">⭐Reviews⭐</h1>
  
        <div className="review-cards">
          <div className="review-card">
            <h3>Swapnil Daware</h3>
            <div className="rating">
              <span>Rating:</span>
              <div className="stars">⭐⭐⭐⭐</div>
            </div><br></br>
            <img src={img1} alt="Customer 1" className="customer-img" />
            <p className={expanded1 ? "expanded" : "collapsed"}>
              Amazing experience. I recently had the pleasure of experiencing a prewedding shoot at Sets by Nature Paradise. The service provided by the cooperative team ensures a seamless and delightful experience. The lush greenery, Veer Dam backwater, and the golden hues of the setting sun combine to make every frame a work of art. Blends nature, beautiful sets, and exceptional service. The Staff is very helpful; this was the best location, highly recommended, and thank you for the great hospitality. Special thanks to Rahul sir to make this happen so smoothly.
            </p>
            <button onClick={toggleExpanded1} className="read-more">{expanded1 ? "Read less" : "Read more..."}</button>
          </div>


          <div className="review-card">
            <h3>Anant Jagtap</h3>
            <div className="rating">
              <span>Rating:</span>
              <div className="stars">⭐⭐⭐⭐</div>
            </div><br></br>
            <img src={img2} alt="Customer 2" className="customer-img" />
            <p className={expanded2 ? "expanded" : "collapsed"}>
              "Photoshoot with Sets by Nature Paradise is so much fun! They have an incredible creative eye for shooting beautiful photos. I highly recommend her for Preweddings, family photos, and especially for Maternity shoot, Babies Shoot, blog photos. This photo shoot location is a hidden gem near Pune. The backdrop of the Veer Dam backwater with the sunset is truly magical. The waves add an extra charm to the photos. What sets this location apart is the caring and supportive managing team. The boat ride adds an adventurous touch to the shoot. Highly recommended for couples looking for a prewedding location.
            </p>
            <button onClick={toggleExpanded2} className="read-more">{expanded2 ? "Read less" : "Read more..."}</button>
          </div>


          <div className="review-card">
            <h3>Sakshi Ravet</h3>
            <div className="rating">
              <span>Rating:</span>
              <div className="stars">⭐⭐⭐</div>
            </div><br></br>
            <img src={img3} alt="Customer 3" className="customer-img" />
            <p className={expanded3 ? "expanded" : "collapsed"}>
              The photo shoot location behind the Veer Dam backwater is absolutely breathtaking. The sunset views are mesmerizing, and the waves create a perfect backdrop for any photoshoot. The pleasant environment with natural birds sound like peaceful & relaxing momemt for mind .The facilities, including toilets and changing rooms, are well-maintained and convenient. The managing team is incredibly helpful and caring, ensuring that every aspect of the shoot goes smoothly. I highly recommend this location for prewedding shoots or any photography sessions near Pune.
            </p>
            <button onClick={toggleExpanded3} className="read-more">{expanded3 ? "Read less" : "Read more..."}</button>
          </div>
        </div><br></br>
      </div>
    );
  };
  
  export default Review;