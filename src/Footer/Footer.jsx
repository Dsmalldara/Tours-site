import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Destination from "../Destination/Destination"
import logo from "./logo.svg";
function Footer() {
  return (
    <div className="footer-link" >
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Are you looking for a wonderful vacation? would you like to explore
            a new context in life?
          </p>
          <div className="input-area">
            <form>
              <input
                name="email"
                className="footer-input"
                type={"email"}
                placeholder="your email"
              />
              <button className="footer-btn">Subscribe</button>
            </form>
          </div>
        </section>
        <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Try us today</h2>
            <Link to="/">Book Accomodation</Link>
            <Link to="/">Partners</Link>
            <Link to="/">Policy</Link>
            <Link to="/">Pride</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Whatsapp</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">How it Works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
            <Link to="/">Travel With Us</Link>
          </div>
        </div>
        </div>
        {/* social media section */}
        <section className="social-media">
          <div className="socal-media-wrap" >
            <div className="social-log">
              < div>
                <Link to="/" style={{color:"wheat", fontSize:"33px"}} className="social-text" > Gotravel</Link>
              </div>
              <img
                src={logo} className="social-logo"
              ></img>
            </div>
            <p>coppyright</p>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Footer;
