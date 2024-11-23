// import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} ChillPutin. All Rights Reserved.
      </p>
      <p className="footer-tagline">
        "Invest in peace, prosper with purpose – join ChillPutin today!"
      </p>
    </footer>
  );
};

export default Footer;
