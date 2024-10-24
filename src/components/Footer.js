// Footer.js
import React from "react";
import "./Footer.css";
import footerImage1 from "../assets/grid1.jpg";
import footerImage2 from "../assets/grid2.jpg";

function Footer() {
    return (
      <div className="footer">
        <div className="footer-person">
          <img src={footerImage1} alt="Person 1" className="footer-image" />
          <div className="footer-details">
            <strong>Mr. K.G. Nalintha Kumara (Assistant Registrar)</strong>
            <p>General Administration Branch, University of Ruhuna, Wellamadama, Matara.</p>
            <p>(041) 2222681 Ext. 2180</p>
            <p>General administration office (041) 203-3254 Ext. 12014</p>
            <p>piyal@admin.ruh.ac.lk</p>
          </div>
        </div>
        
        <div className="footer-divider"></div> {/* Added divider here */}
        
        <div className="footer-person">
          <img src={footerImage2} alt="Person 2" className="footer-image" />
          <div className="footer-details">
            <strong>Mr. R.K Deepal (Audio Visual Technical Officer)</strong>
            <p>Rabindranath Tagore Memorial Auditorium, University of Ruhuna, Wellamadama, Matara.</p>
            <p>(041) 2222681 Ext. 12160</p>
            <p>deepalavto@gmail.com</p>
          </div>
        </div>
      </div>
    );
}

export default Footer;

