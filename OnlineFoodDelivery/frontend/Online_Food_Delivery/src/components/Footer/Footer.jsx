import React from "react";
import './Footer.css';
import { FaInstagram, FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { assets, apple_logo, google_logo, indian_flag } from "../../assets/image/Assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logos">
          <div className="zoomato-logo">
            <div className="container p-0 my-auto">
              <img src={assets.logo} alt="Zomato Logo" className="logo" />
            </div>
            <div className="dropdown-container">
              <div className="dropdown">
                <img
                  src={indian_flag.indianflag}
                  alt="India Flag"
                  className="flag-icon"
                />
                <select>
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="canada">Canada</option>
                </select>
              </div>
              <div className="dropdown">
                <span className="fs-5 mb-1"><TbWorld /></span>
                <select>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="french">French</option>
                  <option value="spanish">Spanish</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-section row row-cols-lg-6 row-cols-md-4 row-cols-sm-3 row-cols-1">
          <div className="about-zomato content-xs-center col">
            <ul>
              <h5>About Zomato</h5>
              <li>Who We Are</li>
              <li>Blog</li>
              <li>Work With Us</li>
              <li>Investor Relations</li>
              <li>Report Fraud</li>
              <li>Press Kit</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="zomaverse content-xs-center col ">
            <ul className="margin-right">
              <h5>Zomaverse</h5>
              <li>Zomato</li>
              <li>Blinkit</li>
              <li>District</li>
              <li>Feeding India</li>
              <li>Hyperpure</li>
              <li>Zomato Live</li>
              <li>Zomaland</li>
              <li>Weather Union</li>
            </ul>
          </div>

          <div className="restaurants content-xs-center col">
            <ul className="margin-left">
              <h5>For Restaurants</h5>
              <li>Partner With Us</li>
              <li>Apps For You</li>
            </ul>
          </div>

          <div className="learn-more content-xs-center col">
            <ul>
              <h5>Learn More</h5>
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
            </ul>
          </div>

          <div className="social-links content-xs-center col">
            <ul className="margin-left">
              <h5>Social Links</h5>
              <li className="social-icons">
                <span><IoLogoLinkedin /></span>
                <span><FaInstagram /></span>
                <span><FaFacebookSquare /></span>
                <span><FaYoutubeSquare /></span>
              </li>
              <li>
                <img src={apple_logo.apple} alt="Apple Store" className='apple' />
              </li>
              <li>
                <img src={google_logo.google} alt="Google Play Store" className='google' />
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <div className="footer_lastline">
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies.
          All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
