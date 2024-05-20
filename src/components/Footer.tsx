import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contactUs" className={styles.footer}>
      <div className={styles.initialFooter}>
        <img
          src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/Logo.svg"
          alt=""
        />
        <p>MyRide Inc., 2nd Floor, New York, NY 10016</p>
        <div className={styles.socials}>
          <a
            href="https://www.facebook.com/compass.uol/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              style={{ color: "#FFF", width: 36.57, height: 36.57 }}
            />
          </a>
          <a
            href="https://www.instagram.com/compass.uol/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              style={{ color: "#FFF", width: 36.57, height: 36.57 }}
            />
          </a>
          <a
            href="https://twitter.com/compassuol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter style={{ color: "#FFF", width: 36.57, height: 36.57 }} />
          </a>
        </div>
      </div>
      <div className={styles.rightFooter}>
        <div className={styles.moreLinks}>
          <p>Company</p>
          <ul>
            <li>
              {" "}
              <a href="/not-found">About Us</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/not-found">News</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/not-found">Careers</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/not-found">How we work</a>{" "}
            </li>
          </ul>
        </div>
        <div className={styles.moreLinks}>
          <p>Support</p>
          <ul>
            <li>
              {" "}
              <a href="/not-found">FAQ</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/not-found">US Ofiice</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/not-found">Asia Office</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/not-found">Help Center</a>{" "}
            </li>
          </ul>
        </div>
        <div className={styles.moreLinks}>
          <p>More</p>
          <ul>
            <li>
              {" "}
              <a href="/not-found">Become a partner</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/not-found">Partner Support</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/not-found">Mobile app links</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
