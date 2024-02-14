// Footer.js
import React from "react";
import "./Footer.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BsInstagram, Bs1SquareFill, BsWhatsapp } from "react-icons/bs";
//import styled from 'styled-components';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p> With Sets by nature Paradise you can experience new sets </p>
           
          <p> around you We  provide the best prewedding destinations</p>
          <p>
            that we have to offer physically managed by{" "}
            <a
              href="https://www.instagram.com/samgirrahul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              style={{ color: 'yellow' }}
            >
              Rahul Samgir
            </a>
          </p>
        </div>
        <div className="footer-links1">
          <a href="/BackwaterSet">Backwater Set</a>
          <br />
          <a href="/Night-Light Sets">Night-Light Sets</a>
          <br />
          <a href="/All Sets Package">All Sets Package</a>
        </div>
        <div className="footer-links">
          <a href="/about">About</a>
          <br></br>
          <a href="/contact">Contact</a>
          <br></br>
          <a href="/destination">Destination</a>
        </div>
       
      
        <div className="footer-social">
          <a
            href="https://www.instagram.com/sets_by_nature_paradise?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram class="hover-effect" className="icon" />
            
          </a>
          <a
            href="https://wa.me/8888542133"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp icon={fab.faWhatsapp} class="hover-effect" className="icon" />
          </a>
          <Bs1SquareFill class="hover-effect" className="icon"></Bs1SquareFill>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2024 Design & developed by {""}
        <a
              href="https://www.instagram.com/taranginiiagrofarms?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              style={{ color: 'yellow' }}
            >
              Taranginii Agro Farm !!
            </a></p>
      </div>
    </footer>
  );
};

export default Footer;
