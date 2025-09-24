import React from 'react';
import './Footer.css';
import { FaLinkedin, FaFacebook, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h3>CS — Ticket System</h3>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact Sales</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Products & Services</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Download Apps</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Information</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Join Us</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Social Links</h3>
          <ul>
            <li><a href="#"><FaGithub /> @CS — Ticket System</a></li>
            <li><a href="#"><FaLinkedin /> @CS — Ticket System</a></li>
            <li><a href="#"><FaFacebook /> @CS — Ticket System</a></li>
            <li><a href="#"><FaEnvelope /> support@cst.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;