import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links" id="contact">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">1041 Tremont Street, Boston, MA 02120</p>
        <p className="p__opensans">Phone : 617-442-5555</p>
        <p className="p__opensans">Fax : 617 - 442-5105</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">Home to Boston's favourite Thai cuisine.</p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
          alt="spoon"
        />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/Bangkok-Pinto-851116498289217/">
            <FiFacebook />
          </a>
          <a href="https://www.instagram.com/bangkokpinto/">
            <FiInstagram />
          </a>
          <a href="mailto:bangkokpinto@gmail.com">
            <HiOutlineMail />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Hours</h1>
        <p className="p__opensans">Tuesday - Friday : 11:30 AM - 9:00 PM</p>
        <p className="p__opensans">Saturday - Sunday : 12:00 PM - 9:00 PM</p>
        <p className="p__opensans">Monday : Closed</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        Copyright &copy; Bangkok Pinto 2022. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
