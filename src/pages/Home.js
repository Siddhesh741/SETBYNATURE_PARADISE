import './Home.css';
import React from 'react';
import Home1 from './Home1';
import Bookingid from './Bookingid';
import Location from './Location'; // Assuming Location.js is in the same directory as Home.js
import Gallery from './Gallery';
import Review from './Review';
//import About from './About';
//import DestinationItem './DestinationItem';
import TermsConditions from './TermsConditions';
import Design from './Design';
import Infocount from './Infocount';
import Footer from './Footer';
import { FaArrowCircleUp, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const openWhatsAppChat = () => {
    window.open('https://wa.me/8888542133', '_blank');
  };

  return (
    <div>

      <Home1 />
      <Bookingid />
      <Location />
      <Gallery />
      <Design />
      <Infocount />
      <TermsConditions />
      <Review />
      <br></br>
      <Footer />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <FaArrowCircleUp onClick={scrollToTop} style={{ fontSize: '30px', cursor: 'pointer' }} />
      </div>

      {/* Chat with us text */}
      <div className="chat-text-container" onClick={openWhatsAppChat}>
        <span className="chat-text">Chat with us</span>
      </div>

      {/* WhatsApp icon */}
      <div className="whatsapp-icon" onClick={openWhatsAppChat}>
        <FaWhatsapp style={{ fontSize: '30px', cursor: 'pointer' }} />
      </div>

    </div>
  );
}

export default Home;
