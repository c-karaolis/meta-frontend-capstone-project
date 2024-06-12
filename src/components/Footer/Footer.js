import React from "react";
import "./Footer.css";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="footer-logo" src={Logo} alt="logo-footer"></img>
        <div className="footer-site-map">
          <p className="footer-title"> SITEMAP</p>
          <Link className="footer-item" to="/">
            Home
          </Link>
          <Link className="footer-item" to="/about">
            About
          </Link>
          <Link className="footer-item" to="/menu">
            Menu
          </Link>
          <Link className="footer-item" to="/reservations">
            Reservations
          </Link>
          <Link className="footer-item" to="/order-online">
            Order Online
          </Link>
          <Link className="footer-item" to="/login">
            Login
          </Link>
        </div>
        <div className="footer-contact">
          <p className="footer-title"> CONTACT</p>
          <p className="footer-item">
            <address>123 Little Lemon Ave.</address>
          </p>
          <p className="footer-item"> 999-999-9999</p>
          <p className="footer-item">example.lemon@example.com</p>
        </div>
        <div className="footer-social">
          <p className="footer-title"> SOCIAL MEDIA</p>
          <a
            className="footer-item"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="footer-item"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="footer-item"
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
