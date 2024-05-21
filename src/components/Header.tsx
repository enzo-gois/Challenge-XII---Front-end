import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoheader}>
        <img
          src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/Logo+(1).svg"
          alt=""
        />
      </div>
      <div className={styles.navheader}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className={styles.selected}
        >
          Home
        </Link>
        <Link to="gettingTaxi" smooth={true} duration={500}>
          Getting a Taxi
        </Link>
        <Link
          to="mobileApp"
          smooth={true}
          duration={500}
          className={styles.selectedP}
        >
          Mobile App
        </Link>
        <Link to="contactUs" smooth={true} duration={500}>
          Contact Us
        </Link>
      </div>
      <div className={styles.bellheader}>
        <img
          className={styles.iconBell}
          src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/Group+6.svg"
          alt=""
          width={24}
          height={26.67}
        />
        <p> | </p>
        <img
          className={styles.iconUser}
          src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/user-avatar.svg"
          alt=""
          width={36}
          height={36}
        />
      </div>
    </div>
  );
};

export default Header;
