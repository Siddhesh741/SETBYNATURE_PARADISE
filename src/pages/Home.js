import React from 'react';
import Home1 from './Home1';
import Location from './Location'; // Assuming Location.js is in the same directory as Home.js
import Gallery from './Gallery';
import Review from './Review';
//import About from './About';
//import DestinationItem './DestinationItem';
import TermsConditions from './TermsConditions';
import Design from './Design';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
      
       <Home1 /> 
       <Location />  
       <Gallery />  
     
       {/* <About /> */}
       <Design />
       <TermsConditions /> 
       <Review /> 
       <br></br>
       <Footer />
      
    </div>
  );
}

export default Home;
